import { APIGatewayEvent } from "aws-lambda";
import ParserS3 from "./src/s3/ParserS3";

const instanceS3Upload = new ParserS3();

export const upload = async(event: APIGatewayEvent) => {
  return await instanceS3Upload.parserS3(event);
}