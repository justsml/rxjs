#!/usr/bin/env sh
set -e


export DEPLOYMENT_REGION="us-east-1"

NODE_ENV=development

if [ $stageArg = 'production' ]; then
  NODE_ENV=production
fi

echo "installing depencies and building project..."
yarn && yarn build

echo "running serverless deploy"
NODE_ENV=$NODE_ENV DEPLOYMENT_REGION=$DEPLOYMENT_REGION yarn sls deploy --verbose --region $DEPLOYMENT_REGION
