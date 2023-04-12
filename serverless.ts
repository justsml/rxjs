import type { AWS } from '@serverless/typescript';
import packageJSON from './package.json';

import * as dotenv from 'dotenv'
import path from 'path';
import { get } from 'lodash';

import {
  getStageNameFromEnv,
} from '@slicing/utilities/env';

const pathToConfig = path.resolve(__dirname, '.env')
dotenv.config({ path: pathToConfig });


/**
 * By making this an async function, we can do async things
 * as part of the build/deploy.
 *
 * Specifically, we can get info from `git`.
 *
 * @returns
 */
const buildConfiguration = async () => {
  const stageName = getStageNameFromEnv();

  const cors = {
    origin: '*',
    headers: ['Content-Type'],
  };

  const plugins = [
    'serverless-webpack',
    'serverless-dotenv-plugin',
    'serverless-plugin-datadog',
    'serverless-offline',
  ];

  const serverlessConfiguration: AWS = {
    useDotenv: true,
    service: get(packageJSON, 'name'),
    frameworkVersion: '*',
    plugins,
    provider: {
      apiGateway: {
        binaryMediaTypes: ['*/*'],
      },
      iamRoleStatements: [
        {
          Effect: 'Allow',
          Action: [
            'ec2:DescribeNetworkInterfaces',
            'ec2:CreateNetworkInterface',
            'ec2:DeleteNetworkInterface',
            'ec2:DescribeInstances',
            'ec2:AttachNetworkInterface',
            's3:List*',
            's3:Get*',
            's3:Put*',
            'kms:*',
            'es:*',
            'lambda:CreateEventSourceMapping',
            'lambda:ListEventSourceMappings',
            'lambda:DeleteEventSourceMapping',
            'lambda:GetEventSourceMapping',
            'lambda:UpdateEventSourceMapping',
          ],
          Resource: '*',
        },
      ],
      stage: stageName,
      timeout: 30,
      name: 'aws',
      runtime: 'nodejs16.x',
      environment: {
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        SLS_DEBUG: 'true',
        STAGE_NAME: '${env:STAGE_NAME, "development"}',
        DEPLOYMENT_REGION: '${env:DEPLOYMENT_REGION, "local"}',
      },
      websocketsApiRouteSelectionExpression: '$request.body.route',
    },
    functions: {
      people: {
        handler: 'src/handlers/http/index.peopleHandler',
        events: [
          {
            http: {
              cors,
              method: 'get',
              path: 'people/{n}',
            },
          },
        ],
      },
    },
    custom: {
      webpack: {
        webpackConfig: 'webpack.config.js',
        includeModules: true,
        packager: 'npm',
        excludeFiles: 'src/**/*.test.ts',
      },
      datadog: {
        enableXrayTracing: true,
        addLayers: true,
        apiKey: process.env.DATA_DOG_KEY,
        env: stageName,
      },
    },
  };

  console.dir(
    {
      ...serverlessConfiguration,
      provider: {
        ...serverlessConfiguration.provider,
        environment: {},
      },
    },
    { depth: 4 },
  );

  return serverlessConfiguration;
};

module.exports = buildConfiguration();
