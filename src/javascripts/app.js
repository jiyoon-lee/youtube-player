import { Intro, TabButtons } from './components/index.js';
export default class App {
  constructor(props) {
    this.props = props
  }
  init() {
    this.intro.show();
    setTimeout(() => {
      this.render();
      this.intro.hide()
    }, 550)
  }
  setup() {
    const { el } = this.props;
    this.rootElement = document.querySelector(el);
    this.intro = new Intro()
    this.tabButtons = new TabButtons()
    this.render()
    // this.init()
  }
  render() {
    const tabButtons = this.tabButtons.render()
    this.rootElement.append(tabButtons)
  }
}