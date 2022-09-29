import { APIGatewayProxyEvent } from 'aws-lambda';
import * as parser from 'lambda-multipart-parser';
import { StatusCodes } from '../enums/StatusCodes';
import { ResponseDefault } from '../utils/ResponseDefault';
import S3Upload from "./S3";

export default class ParserS3 {
  private s3Upload: S3Upload;

  constructor() {
    this.s3Upload = new S3Upload();
  }

  public async parserS3(event: APIGatewayProxyEvent) {
    const parserResult = await parser.parse(event)
    const file = parserResult.files[0]

    const s3Params = {
      Bucket: process.env.bucket as string,
      Key: `${Date.now().toString()}-${file.filename}`,
      Body: file.content,
      ContentType: 'image/png',
      ACL: 'public-read',
    }
    const { Location } = await this.s3Upload.uploadImage(s3Params);
    return ResponseDefault.success(StatusCodes.SUCCESS, { Location });
  }
}