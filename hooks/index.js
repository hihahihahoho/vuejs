// file: hooks/index.js
import render from './render'

export default nuxtConfig => ({
  render: render(nuxtConfig)
})