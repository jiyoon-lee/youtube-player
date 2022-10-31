export default class TopVideo {
  constructor() {
    this.rootElement = TopVideo.createRootElement();
    this.movies = []
  }
  static createRootElement() {
    const rootElement = document.createElement('article');
    rootElement.classList.add('contents-top5')

    return rootElement
  }
  setMovies(movies = []) {
    this.movies = movies
  }
  render() {
    const topRoof = `<div class="top5-roof">
                      <img width="100" src="assets/images/youtube_logo.png" />
                    </div>`
    this.rootElement.innerHTML = topRoof
    return this.rootElement
  }
}