import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import { GetFileHandler } from 'src/core/queries/get-file/get-file.handler';
import type { Response } from 'express';

@Controller('file')
export class FileController {
  constructor(private getFileHandler: GetFileHandler) {}

  @Get()
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = this.getFileHandler.handle();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="example.pdf"',
    });

    return new StreamableFile(file);
  }
}
