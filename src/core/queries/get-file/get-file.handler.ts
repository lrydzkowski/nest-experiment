import { Injectable } from '@nestjs/common';
import { ReadStream, createReadStream } from 'fs';

@Injectable()
export class GetFileHandler {
  public handle(): ReadStream {
    const file = createReadStream('./src/core/queries/get-file/data/example.pdf');

    return file;
  }
}
