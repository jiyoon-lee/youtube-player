export default class PlayView {
  constructor() {
    this.renderElement = PlayView.createRenderElement()
  }
  static createRenderElement() {
    const playViewWrapper = document.createElement('article')
    playViewWrapper.classList.add('play-view')
    return playViewWrapper
  }
  bindEvents() {

  }
  renderMovieContainer() {
    const { id: { videoId }, snippet: { channelTitle, description, publishTime, title } } = this.movieInfo
    this.renderElement.innerHTML = `
    <div class="play-view-roof">
      <img width="100" src="assets/images/youtube_logo.png" />
    </div>
    <iframe id="player" type="text/html" height="200"
    src="http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com"
    frameborder="0"></iframe>
    <div class="view-info-container">
      <div class="info-title">${title}</div>
      <div class="info-description">${description}</div>
      <div class="info-channel-title">${channelTitle}</div>
      <div class="info-publish-time">${publishTime}</div>
    </div>
    `
  }
  playMovie(payload) {
    const { movieInfo, movieIndex } = payload
    this.movieInfo = movieInfo
    this.movieIndex = movieIndex
    this.renderMovieContainer()
  }
  show() {
    const rootElement = document.querySelector('#app')
    const $article = document.querySelector('article')
    rootElement.replaceChild(this.renderElement, $article)
  }
  on() {

  }
  emit() {

  }
  render() {
    return this.renderElement
  }
}