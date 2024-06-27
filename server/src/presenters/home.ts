import { Injectable } from '@nestjs/common'

Injectable()
export class HomePresenter {

  getContext(url: String, state: Object): Object {
    const script = '<script id="spdt-capture" async="" src="https://pixel.byspotify.com/ping.min.js"></script>'
    const title = 'vue page'
    const context = {
      title,
      url,
      headContent: script,
      endBodyContent: script,
      beginBodyContent: script,
      state: {
        ...state
      }
    }

    return context
  }
}
