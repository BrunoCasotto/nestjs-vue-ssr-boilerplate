import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
