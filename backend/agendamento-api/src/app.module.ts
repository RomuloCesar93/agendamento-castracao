import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgendamentosModule } from 'agendamentos/agendamentos.module';

@Module({
  imports: [AgendamentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
