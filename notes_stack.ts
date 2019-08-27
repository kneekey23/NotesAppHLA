// npm i -g aws-cdk

import apigateway = require('@aws-cdk/aws-apigateway');
import lambda = require('@aws-cdk/aws-lambda');
import cdk = require('@aws-cdk/cdk');

class MyStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props?: cdk.StackProps) {
        super(parent, name, props);

        const apigatewayd854841 = new apigateway.CfnRestApi(this, 'apigatewayd854841', {
            name: "NotesAPI",
            apiKeySourceType: "HEADER",
            endpointConfiguration: {
                types: [
                    "REGIONAL"
                ]
            }
        });

        const lambda1eb74aa = new lambda.CfnFunction(this, 'lambda1eb74aa', {
            description: "",
            functionName: "NotesTranslate",
            handler: "index.handler",
            code: {
                s3Bucket: "awslambda-us-west-2-tasks",
                s3Key: "/snapshots/805580953652/NotesTranslate-602bdfbe-e02e-4bfd-a934-c02ab5d3347f",
                s3ObjectVersion: "wrmb9avPMObtm2ShyiQaEIMLLY_SjGup"
            },
            memorySize: 128,
            role: "arn:aws:iam::805580953652:role/service-role/NotesPost-role-ain5n557",
            runtime: "nodejs10.x",
            timeout: 3,
            tracingConfig: {
                mode: "PassThrough"
            }
        });

        const lambda4533ca1 = new lambda.CfnFunction(this, 'lambda4533ca1', {
            description: "",
            functionName: "NotesPost",
            handler: "index.handler",
            code: {
                s3Bucket: "awslambda-us-west-2-tasks",
                s3Key: "/snapshots/805580953652/NotesPost-187583a2-e8f0-4224-a55b-909b069ee58c",
                s3ObjectVersion: "d_zHzQ4AFIB5CHIePEyI5BaH6PrpVJUF"
            },
            memorySize: 128,
            role: "arn:aws:iam::805580953652:role/service-role/NotesPost-role-ain5n557",
            runtime: "nodejs10.x",
            timeout: 3,
            tracingConfig: {
                mode: "PassThrough"
            }
        });

        new cdk.Output(this, 'apigatewayd854841Ref', { value: apigatewayd854841.ref, disableExport: true })
        new cdk.Output(this, 'lambda1eb74aaRef', { value: lambda1eb74aa.ref, disableExport: true })
        new cdk.Output(this, 'lambda4533ca1Ref', { value: lambda4533ca1.ref, disableExport: true });
    }
}

const app = new cdk.App();

new MyStack(app, 'my-stack-name', { env: { region: 'us-west-2' } });

app.run();

