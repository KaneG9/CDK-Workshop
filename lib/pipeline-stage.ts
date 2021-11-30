import * as cdk from "@aws-cdk/core";
import { CdkWorkshopKaneStack } from "./cdk-workshop-kane-stack";

export class WorkshopPipelineStage extends cdk.Stage {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        new CdkWorkshopKaneStack(this, 'WebService');
    }
}