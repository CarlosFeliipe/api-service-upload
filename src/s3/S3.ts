import { S3 } from 'aws-sdk';
import { ResponseS3 } from '../interfaces/S3';

const accessKeyId = process.env.S3_ACCESS_KEY;
const secretAccessKey = process.env.S3_SECRETS_KEY;

export default class S3Upload {
  private s3: S3;

  constructor() {
    this.s3 = new S3({ accessKeyId, secretAccessKey });
  }

  public async uploadImage(params: S3.PutObjectRequest): Promise<ResponseS3> {
    try {
      return new Promise((resolve) => {
        this.s3.upload(params, (err, data) => {
          if (err) {
            console.error(err)
            resolve(err as any)
          } else {
            resolve(data as any)
          }
        })
      });
    } catch (err) {
      throw err;
    }
  }
}