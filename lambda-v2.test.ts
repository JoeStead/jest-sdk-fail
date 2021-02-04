import { Lambda } from "aws-sdk";

it("ffs v2", async () => {
    const lambda = new Lambda({
        region: "eu-west-1",
    });
    const response = await lambda.listFunctions().promise()

    console.log(response.Functions);
});
