import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages(): string[] {
    return ['Witaj w NestJS!', 'To jest wiadomość GET z backendu.'];
  }

  @Post()
  postMessages(@Body() message: { text: string }): string {
    console.log('Otrzymano wiadomość POST na backendzie:', message.text);
    return `Backend otrzymał wiadomość: "${message.text}"`;
  }
}
