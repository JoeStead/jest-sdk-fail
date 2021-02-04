import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda";

it("ffs", async () => {
  const lambda = new LambdaClient({
    region: "eu-west-1",
  });
  const response = await lambda.send(new ListFunctionsCommand({}));

  console.log(response.Functions);
});
