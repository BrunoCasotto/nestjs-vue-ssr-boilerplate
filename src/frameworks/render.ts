import { Injectable } from '@nestjs/common';
import { createBundleRenderer } from 'vue-server-renderer'
const LRU = require('lru-cache')
const path = require('path')
const templatePath = path.join(__dirname, '..', 'views', 'template.html')
const template = require('fs').readFileSync(templatePath,'utf-8')

const clientManifest = require('./../../public/vue-ssr-client-manifest.json')
const serverBundle = require('./../../public/vue-ssr-server-bundle.json')

Injectable()
export class Render {
  private renderer = null

  constructor() {
    this.renderer = this.createRenderer()
  }

  createRenderer() {
    const renderer = createBundleRenderer(serverBundle, {
      cache: new LRU({
        max: 10000,
        maxAge: 1000 * 15
      }),
      template,
      clientManifest,
    })

    return renderer
  }

  getRenderer() {
    return this.renderer
  }
}
