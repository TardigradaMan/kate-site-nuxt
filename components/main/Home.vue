<template>
  <section class="home">
    <div class="wrapper">
      <button @click="reverseAnim">Назад</button>
      <button @click="playAnim">Вперед</button>
      <div class="link">
        <div class="link__social">Соц сети</div>
        <div class="link__ads">Реклама</div>
      </div>
      <svg
        id="title__svg"
        class="svg"
        width="1277"
        height="76"
        viewBox="0 0 1277 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.76 4.8h40.32c6.72 0 11.584 1.536 14.592 4.608C61.744 12.416 63.28 17.28 63.28 24v9.6c0 6.72-1.536 11.616-4.608 14.688C55.664 51.296 50.8 52.8 44.08 52.8H21.04V72H3.76V4.8zM46 24c0-3.84-1.92-5.76-5.76-5.76h-19.2v21.12h19.2c3.84 0 5.76-1.92 5.76-5.76V24z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M82.998 72h-18.72l25.44-67.2h19.2l25.44 67.2h-18.72l-4.32-12h-24l-4.32 12zm8.64-24.48h15.36l-7.68-22.56-7.68 22.56z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M195.794 71.04c-14.272 1.28-26.112 1.92-35.52 1.92-6.272 0-10.88-1.472-13.824-4.416-2.944-2.944-4.416-7.552-4.416-13.824V24c0-6.72 1.504-11.584 4.512-14.592 3.072-3.072 7.968-4.608 14.688-4.608h34.56v13.44h-30.72c-3.84 0-5.76 1.92-5.76 5.76v30.72c0 1.472.416 2.656 1.248 3.552.896.832 2.016 1.248 3.36 1.248h4.416c1.6-.064 3.264-.128 4.992-.192l5.184-.192c1.792-.064 4.064-.192 6.816-.384 2.816-.192 6.304-.416 10.464-.672v12.96z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M257.245 3.84c1.6 0 4.48.32 8.64.96v12.96h-3.84c-.96 0-1.824.32-2.592.96-.768.576-1.344 1.216-1.728 1.92l-9.12 17.28L267.325 72h-18.24l-14.88-27.36h-8.64V72h-17.28V4.8h17.28v26.4h8.64l9.6-18.24c1.408-2.688 3.136-4.864 5.184-6.528 2.112-1.728 4.864-2.592 8.256-2.592z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M289.866 72h-18.72l25.44-67.2h19.2l25.44 67.2h-18.72l-4.32-12h-24l-4.32 12zm8.64-24.48h15.36l-7.68-22.56-7.68 22.56z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M431.943 3.84c1.6 0 4.48.32 8.64.96v12.96h-3.841c-.959 0-1.823.32-2.591.96-.768.576-1.344 1.216-1.728 1.92l-9.121 17.28L442.022 72h-18.239l-14.881-27.36h-6.72V72h-17.28V44.64h-6.72L363.302 72h-18.24l18.721-34.08-9.12-17.28c-.384-.704-.96-1.344-1.728-1.92-.768-.64-1.633-.96-2.593-.96h-3.839V4.8c4.16-.64 7.039-.96 8.639-.96 3.392 0 6.112.864 8.16 2.592 2.112 1.664 3.872 3.84 5.28 6.528l9.6 18.24h6.72V4.8h17.28v26.4h6.72l9.601-18.24c1.407-2.688 3.135-4.864 5.183-6.528 2.112-1.728 4.865-2.592 8.257-2.592z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M511.12 72h-17.28V30.72L470.8 72h-18.24V4.8h17.28v41.28L492.88 4.8h18.24V72z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M604.266 23.04c0-3.84-1.92-5.76-5.76-5.76h-16.32c-3.84 0-5.76 1.92-5.76 5.76v30.72c0 3.84 1.92 5.76 5.76 5.76h16.32c3.84 0 5.76-1.92 5.76-5.76V23.04zm17.28 30.72c0 6.72-1.536 11.616-4.608 14.688-3.008 3.008-7.872 4.512-14.592 4.512h-24c-6.72 0-11.616-1.504-14.688-4.512-3.008-3.072-4.512-7.968-4.512-14.688V23.04c0-6.72 1.504-11.584 4.512-14.592 3.072-3.072 7.968-4.608 14.688-4.608h24c6.72 0 11.584 1.536 14.592 4.608 3.072 3.008 4.608 7.872 4.608 14.592v30.72z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M721.412 71.04c-14.271 1.28-26.111 1.92-35.519 1.92-6.272 0-10.881-1.472-13.825-4.416-2.943-2.944-4.415-7.552-4.415-13.824V24c0-6.72 1.503-11.584 4.511-14.592 3.073-3.072 7.969-4.608 14.688-4.608h34.56v13.44h-30.719c-3.841 0-5.761 1.92-5.761 5.76v30.72c0 1.472.417 2.656 1.248 3.552.896.832 2.017 1.248 3.361 1.248h4.415c1.6-.064 3.264-.128 4.992-.192l5.185-.192c1.791-.064 4.063-.192 6.815-.384 2.816-.192 6.305-.416 10.464-.672v12.96z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M787.184 72h-53.28V4.8h53.28v13.44h-36V31.2h28.32v13.44h-28.32v13.92h36V72z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M816.921 30.72h23.04c6.72 0 11.584 1.536 14.592 4.608 3.072 3.008 4.608 7.872 4.608 14.592v2.88c0 6.72-1.536 11.616-4.608 14.688-3.008 3.008-7.872 4.512-14.592 4.512h-40.32V4.8h53.28v13.44h-36v12.48zm24.96 19.2c0-3.84-1.92-5.76-5.76-5.76h-19.2v14.4h19.2c3.84 0 5.76-1.92 5.76-5.76v-2.88z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M925.878 72h-53.28V4.8h53.28v13.44h-36V31.2h28.32v13.44h-28.32v13.92h36V72z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M1029.52 34.56l-13.44 24h-13.44l-13.444-24V72h-17.28V4.8h18.24l19.204 35.52 19.2-35.52h18.24V72h-17.28V34.56z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M1121.71 72h-17.28V30.72L1081.39 72h-18.24V4.8h17.28v41.28l23.04-41.28h18.24V72z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M1138.08 4.8h40.32c6.72 0 11.58 1.536 14.59 4.608 3.07 3.008 4.61 7.872 4.61 14.592v9.6c0 6.72-1.54 11.616-4.61 14.688-3.01 3.008-7.87 4.512-14.59 4.512h-23.04V72h-17.28V4.8zm42.24 19.2c0-3.84-1.92-5.76-5.76-5.76h-19.2v21.12h19.2c3.84 0 5.76-1.92 5.76-5.76V24z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
        <path
          d="M1225.29 72.96c-3.2 0-6.5-.32-9.89-.96V59.04h8.64c1.86 0 3.14-.736 3.84-2.208.32-.64.48-1.312.48-2.016 0-.768-.16-1.44-.48-2.016l-26.4-48h19.2l17.28 34.08 14.4-34.08h19.2l-24.48 52.8c-2.24 5.056-4.93 8.832-8.06 11.328-3.46 2.688-8.04 4.032-13.73 4.032z"
          stroke="#fff"
          stroke-width="6"
          mask="url(#a)"
        />
      </svg>
      <!-- <button @click="openForm" class="button home__button">Получить</button> -->
    </div>
  </section>
</template>
<script>
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)

export default {
  data() {
    return {
      animBlockLink: '',
      animTitle: ''
    }
  },
  mounted() {
    const svgObject = document.querySelector('#title__svg')
    const path = svgObject.querySelectorAll('path')

    const linkSocial = document.querySelector('.link__social')
    const linkAds = document.querySelector('.link__ads')

    path.forEach((item, i) => {
      const pathLength = item.getTotalLength()
      this.animTitle = gsap
        .timeline({ defaults: { ease: 'none', duration: 2 } })
        .set(path[i], { strokeDasharray: pathLength, autoAlpha: 1 })
        .fromTo(
          path[i],
          { 'stroke-dashoffset': pathLength },
          { 'stroke-dashoffset': 0 }
        )
        .to(svgObject, { duration: 1, fill: '#fff' })
        .to(svgObject, {
          ease: 'none',
          autoAlpha: 0
        })
    })
    this.animBlockLink = gsap
      .timeline({ defaults: { duration: 3, ease: 'elastic.inOut(1, 1)' } })
      .fromTo(
        linkSocial,
        { x: '-50vw' },
        {
          x: '0'
        },
        3
      )
      .fromTo(
        linkAds,
        { x: '50vw', display: 'none' },
        {
          x: '0',
          display: 'block'
        },
        3
      )
  },

  methods: {
    openForm() {
      this.$router.push('/contact')
    },
    showTest(message) {
      console.log('Конец анимации через callBack:', message)
    },
    reverseAnim() {
      this.animBlockLink.reverse()
      this.animTitle.reverse()
    },
    playAnim() {
      this.animBlockLink.play()
      this.animTitle.play()
    }
  }
}
</script>
<style lang="scss" scoped>
.home__block {
  // transform: translateY(-600px);
  margin: 0 auto;
}

button {
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 1em;
}
button:nth-child(2) {
  position: absolute;
  left: 20px;
  top: 80px;
  padding: 1em;
}

.home {
  margin: 0 auto;
  text-align: center;

  // padding-top: 270px;

  &__title {
    font-size: 50px;
    line-height: 56px;
    font-family: 'Russo One', sans-serif;
    text-transform: uppercase;

    margin-bottom: 30px;
    max-width: 700px;
    margin: 0 auto;
  }
}

#title__svg {
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#title__svg path {
  stroke-linecap: round;
}

.link {
  display: flex;
  justify-content: space-between;
  z-index: 2;

  &__social,
  &__ads {
    width: 45%;
    height: 100vh;

    background-color: $bg-color;
    box-shadow: 0 0 10px #000;
  }
  &__ads {
    background-image: url('~assets/img/Laptop.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
