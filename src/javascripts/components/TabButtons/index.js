import { getClosestElement } from '../../utils/index.js'

export default class TabButtons {
  constructor() {
    this.renderElement = TabButtons.createRenderElement()
    this.bindEvents()
  }
  static createRenderElement() {
    // <ul class="app-controller">
    //   <li><button class="button-app-controller"><i class="tab-icon icon-video"></i>TOP5</button></li>
    //   <li><button class="button-app-controller"><i class="tab-icon icon-playedlist"></i>Played List</button></li>
    //   <li><button class="button-app-controller"><i class="tab-icon icon-search"></i>Search</button></li>
    // </ul>
    const tabsContainer = document.createElement('ul')
    tabsContainer.classList.add('app-controller')

    const tabs = [
      { title: 'Top5', iconName: 'icon-video' },
      { title: 'Played List', iconName: 'icon-playedlist' },
      { title: 'Search', iconName: 'icon-search' }
    ]

    tabsContainer.innerHTML = tabs.map((tab) => {
      return `
        <li>
          <button class="button-app-controller">
            <i class="tab-icon ${tab.iconName}"></i>${tab.title}
          </button>
        </li>
      `
    }).join('')

    return tabsContainer
  }
  bindEvents() {
    this.renderElement.addEventListener('click', (event) => {
      const element = getClosestElement(event.target, 'li')
      console.log(element)
    })
  }
  render() {
    return this.renderElement;
  }
}