import { Intro, PlayedList, PlayView, SearchView, TabButtons, TopVideo } from './components/index.js';
import { removeAllChildNodes } from './utils/index.js';
export default class App {
  constructor(props) {
    this.props = props;
    this.currentIndex = 0;
  }
  init() {
    this.intro.show();
    setTimeout(() => {
      this.render();
      this.intro.hide()
    }, 550)
  }
  async setup() {
    const { el } = this.props;
    this.rootElement = document.querySelector(el);
    this.intro = new Intro()
    this.tabButtons = new TabButtons()
    this.topVideo = new TopVideo()
    this.playedList = new PlayedList()
    this.playView = new PlayView
    this.searchView = new SearchView
    this.mainViewComponents = [this.topVideo, this.playedList, this.searchView]
    this.bindEvents();
    await this.fetchMovies();
    this.init()
  }
  bindEvents() {
    this.tabButtons.on('clickTab', (payload) => {
      const { currentIndex = 0 } = payload;
      this.currentIndex = currentIndex;
      this.render();
    })
    this.topVideo.on('openPlayView', (payload) => {
      this.playView.playMovie(payload)
      this.playView.show();
    })
  }
  fetchMovies() {
    try {
      return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyAbYU9r9pLjnhNS6Sg7xxy7NbWj0nF7umk&videoCategoryId=28')
        .then((response) => response.json())
        .then((data) => this.topVideo.setMovies(data.items))
    } catch (e) {
      console.log(e)
    }
  }
  renderMainView() {
    const renderComponent = this.mainViewComponents[this.currentIndex];
    return renderComponent ? renderComponent.render() : '';
  }
  render() {
    removeAllChildNodes(this.rootElement)
    const tabButtons = this.tabButtons.render()
    const mainView = this.renderMainView()
    this.rootElement.append(tabButtons)
    this.rootElement.append(mainView)
  }
}