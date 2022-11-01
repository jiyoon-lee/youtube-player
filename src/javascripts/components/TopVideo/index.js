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
                      <img width="200" src="assets/images/youtube_logo.png" />
                    </div>`
    const moviesList = this.movies.map((item, index) => {
      const { snippet: { channelTitle, description, publishTime, thumbnails: { default: { url } }, title } } = item
      return `
        <li class="movie-list-item">
          <div class="movie-rank">${index}</div>
          <div class="movie-cover">
            <img width="100" src="${url}" />
          </div>
          <div class="movie-content">
            <div class="movie-info">
              <div class="text-ellipsis movie-title">${title}</div>
              <div class="text-ellipsis movie-subscription">${description}</div>
              <div class="movie-channelName">${channelTitle}</div>
              <div class="movie-createdDate">${publishTime}</div>
            </div>
          </div>
        </li>
      `
    }).join('')
    this.rootElement.innerHTML = topRoof + `
      <ol class="movie-list">
        ${moviesList}
      </ol>
    `
    return this.rootElement
  }
}