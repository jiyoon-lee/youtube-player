export default class SearchView {
  constructor() {
  }
  static createRenderElement() {
    const playViewWrapper = document.createElement('article')
    playViewWrapper.classList.add('play-view')

    return playViewWrapper;
  }
  show() {
    document.body.append(this.rootElement)
  }
  hide() {
    document.body.removeChild(this.rootElement)
  }
  on(eventName, callback) {
    this.events = this.events ? this.events : {}
    this.events[eventName] = callback;
  }
  emit() {

  }
  render() {
    return 'SearchView'
  }
}