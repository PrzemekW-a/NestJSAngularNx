import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('csv-upload')
export class CsvUploadController {
  @Get()
  getMessages(): string[] {
    return ['get csv'];
  }

  @Post()
  postMessages(@Body() message: { text: string }): string {
    console.log('Otrzymano wiadomość POST na backendzie:', message.text);
    return `Backend otrzymał wiadomość: "${message.text}"`;
  }
}
