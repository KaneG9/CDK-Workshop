import * as cdk from "@aws-cdk/core";
import { CdkWorkshopKaneStack } from "./cdk-workshop-kane-stack";

export class WorkshopPipelineStage extends cdk.Stage {
    public readonly hcViewerUrl: cdk.CfnOutput;
    public readonly hcEndpoint: cdk.CfnOutput;

    constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const service = new CdkWorkshopKaneStack(this, 'WebService');

        this.hcEndpoint = service.hcEndpoint
        this.hcViewerUrl = service.hcViewerUrl
    }
}