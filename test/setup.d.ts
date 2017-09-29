import { JSDOM } from 'jsdom'
import jQuery from 'jquery'

declare global {
  namespace NodeJS  {
    interface Global {
      $: jQuery
      jQuery: jQuery
      window: Window
    }
  }
}