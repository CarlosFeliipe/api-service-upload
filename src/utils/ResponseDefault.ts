import { StatusCodes } from "../enums/StatusCodes";

class Result {
  private statusCode: number;
  private code: number;
  private message: string;
  private data?: any;

  constructor(statusCode: number, code: number, message: string, data?: any) {
    this.statusCode = statusCode;
    this.code = code;
    this.message = message;
    this.data = data;
  }

  bodyToString () {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        code: this.code,
        message: this.message,
        data: this.data,
      }),
    };
  }
}

export class ResponseDefault {
  static success(status: StatusCodes, data?: object) {
    const result = new Result(status, 0, 'success', data);

    return result.bodyToString();
  }

  static error(code: number = 1000, message: string) {
    const result = new Result(StatusCodes.INTERNAL_SERVER_ERROR, code, message);

    console.log(result.bodyToString());
    return result.bodyToString();
  }
}
