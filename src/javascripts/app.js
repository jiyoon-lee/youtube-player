import { Intro } from './components/index.js';

export default class App {
  constructor({ el }) {
    this.rootElement = document.querySelector(el);
    this.intro = new Intro()
    this.init()
  }
  init() {
    this.intro.show();
    // setTimeout(() => {
    //   this.render();
    //   this.intro.hide()
    // }, 750)
  }
  setup() {

  }
  render() {
  }
}