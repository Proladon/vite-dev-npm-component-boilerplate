import SZButton from './components/button/SZButton.vue'
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

export { SZButton }