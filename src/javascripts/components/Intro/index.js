export default class Intro {
  constructor() {
    this.parentElement = document.querySelector('body')
    this.renderElement = Intro.createRenderElement()
  }
  static createRenderElement() {
    const introContainer = document.createElement('div');
    introContainer.classList.add('intro')
    // introContainer.style.backgroundImage = '../../../assets/images/intro_logo.gif'
    const introImage = document.createElement('img')
    introImage.src = '../../../assets/images/intro_logo.gif'
    introImage.alt = 'intro_logo'
    introImage.style.display = 'hidden'
    console.log(introImage)
    introContainer.append(introImage)
    return introContainer
  }
  show() {
    this.parentElement.append(this.renderElement)
  }
  hide() {
    this.renderElement.style.opacity = 0;
    setTimeout(() => {
      this.parentElement.remove(this.renderElement)
    }, 1000)
  }
}