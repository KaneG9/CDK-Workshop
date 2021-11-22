#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshopKaneStack } from '../lib/cdk-workshop-kane-stack';

const app = new cdk.App();
new CdkWorkshopKaneStack(app, 'CdkWorkshopKaneStack');
