import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
// Vue.mixin({
//   watch: {
//     '$i18n.locale' (newLocale) {
//       this.$vuetify.lang.current = newLocale
//     }
//   }
// })
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      en: require('~/locales/en.json'),
      vi: require('~/locales/vi.json')
    }
  })
}
