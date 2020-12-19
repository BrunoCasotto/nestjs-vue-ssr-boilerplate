import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home';
import { Render } from './frameworks/render';
import { HomePresenter } from './presenters/home';

@Module({
  imports: [],
  controllers: [HomeController],
  providers: [Render, HomePresenter],
})
export class AppModule {}
