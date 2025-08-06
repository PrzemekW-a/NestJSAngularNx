import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { CsvUploadController } from './csv-upload/csv-upload.controller';

@Module({
  imports: [],
  controllers: [AppController, MessagesController, CsvUploadController],
  providers: [AppService],
})
export class AppModule {}
