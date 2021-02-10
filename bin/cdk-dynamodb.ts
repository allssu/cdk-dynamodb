#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDynamodbStack } from '../lib/cdk-dynamodb-stack';

const app = new cdk.App();
new CdkDynamodbStack(app, 'CdkDynamodbStack');
