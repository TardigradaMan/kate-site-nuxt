// import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style
// import 'swiper/css/swiper.css'

// Vue.use(VueAwesomeSwiper /* { default options with global component } */)

import Vue from 'vue'
import { Swiper as SwiperClass, Autoplay } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import 'swiper/css/swiper.css'

// Swiper modules
SwiperClass.use([Autoplay])

// -------------------------------------------------

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))

// // -------------------------------------------------

// // Or local component
