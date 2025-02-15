import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseService } from './database/db.service';
import config from 'config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
      inject: [DatabaseService],
    }),
  ],
  controllers: [AppController],
  providers: [DatabaseService],
})
export class AppModule {}
