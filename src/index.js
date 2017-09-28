import speech from './component/speech.vue'

export default function install (Vue, options = {}) {
  Vue.component('vue-speech', speech)
}
