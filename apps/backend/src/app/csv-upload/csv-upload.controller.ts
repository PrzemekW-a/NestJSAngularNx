import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { Multer } from 'multer';


@Controller('csv-upload')
export class CsvUploadController {
  @Get()
  getMessages(): string[] {
    return ['get csv'];
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadCsv(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { message: 'No file uploaded' };
    }

    console.log('Otrzymano plik:', {
      originalname: file.originalname,
      size: file.size,
      mimetype: file.mimetype
    });

    return {
      message: 'Plik został pomyślnie przesłany',
      filename: file.originalname
    };
  }
}
