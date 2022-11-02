export default class PlayView {
  constructor() {
    this.rootElement = PlayView.createRenderElement()
  }
  static createRenderElement() {
    const playViewWrapper = document.createElement('article')
    playViewWrapper.classList.add('play-view')
    return playViewWrapper
  }
  bindEvents() {

  }
  renderMovieContainer() {
    const { id: { videoId }, snippet: { channelTitle, description, publishTime, thumbnails: { default: { url } }, title } } = this.movieInfo
    this.rootElement.innerHTML = `
      <iframe id="player" type="text/html" width="640" height="360"
      src="http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com"
      frameborder="0"></iframe>
    `
  }
  playMovie(payload) {
    const { movieInfo, movieIndex } = payload
    this.movieInfo = movieInfo
    this.movieIndex = movieIndex
    this.renderMovieContainer()
  }
  show() {
    console.log(document.body)
    document.body.innerHTML = this.rootElement
  }
  on() {

  }
  emit() {

  }
  render() {
    return this.rootElement
  }
}