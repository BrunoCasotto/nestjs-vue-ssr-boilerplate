import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home';
import { Render } from './frameworks/render';
import { HomePresenter } from './presenters/home';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/static',
      rootPath: join(__dirname, '..', '..', 'client', 'dist')
    })
  ],
  controllers: [HomeController],
  providers: [Render, HomePresenter],
})
export class AppModule {}
