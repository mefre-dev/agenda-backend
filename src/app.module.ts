import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DrizzleModule } from '@nestjs/drizzle';
import { drizzle } from 'drizzle-orm/node-postgres';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    DrizzleModule.forRoot({
      drizzle,
      connection: process.env.DATABASE_URL!,
    }),
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'agenda-backend',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
