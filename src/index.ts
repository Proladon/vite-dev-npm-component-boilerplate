import SZButton from './components/button/SZButton.vue'
import './styles/index.css'
import { App } from 'vue'

const components = {
  SZButton,
}

function install(Vue: App) {
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

// export { default as SZButton } from './components/button/SZButton.vue'

export { SZButton }