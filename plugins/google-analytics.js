import Vue from 'vue'
import VueGtag from 'vue-gtag'

const getGDPR = localStorage.getItem('GDPR:accepted')

if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
  console.log("'getGDPR === 'true'")
  Vue.use(VueGtag, {
    config: {
      id: 'UA-1234567-1',
      params: {
        send_page_view: false
      }
    },
    enabled: true
  })
} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
  console.log("'getGDPR === 'false")
  Vue.use(VueGtag, {
    config: {
      id: 'UA-1234567-1',
      params: {
        send_page_view: false
      }
    },
    enabled: false
  })
}
