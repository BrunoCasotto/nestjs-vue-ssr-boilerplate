import { Controller, Get, Req, Res } from '@nestjs/common'
import { Render } from './../../frameworks/render'
import { HomePresenter } from './../presenters/home'
import { Request, Response } from 'express'

@Controller('/')
export class HomeController {
  constructor(private render: Render, private homePresenter: HomePresenter) {}

  @Get()
  getHome(@Req() request: Request, @Res() response: Response) {
    const { url } = request
    const renderer = this.render.getRenderer()
    const context = this.homePresenter.getContext(url, {})

    renderer.renderToString(context, (error, html) => {
      if (error) {
        console.error('MainController.render', { error })
      }

      response.send(html)
    })
  }
}
