<template>
  <section class="home">
    <svg-sprite></svg-sprite>
    <div ref="title" class="title">
      <span
        ><svg class="title__01">
          <use xlink:href="#title__svg--01" /></svg
      ></span>
      <span
        ><svg class="title__02">
          <use xlink:href="#title__svg--02" /></svg
      ></span>
      <span
        ><svg class="title__03">
          <use xlink:href="#title__svg--03" /></svg
      ></span>
    </div>

    <div ref="link" class="link">
      <div ref="social" class="link__social">
        <span>Социал</span>
      </div>
      <div ref="ads" class="link__ads">
        <span>Реклама</span>
      </div>
    </div>

    <!-- <button @click="openForm" class="button home__button">Получить</button> -->
  </section>
</template>
<script>
import SvgSprite from '@/components/main/svg/svg-sprite'
import { gsap } from 'gsap'

export default {
  components: {
    SvgSprite
  },
  data() {
    return {
      animBlockLink: '',
      animTitle: '',
      animTitlePosition: '',
      animLinkPosition: ''
    }
  },
  mounted() {
    // Анимация svg элементов заголовка
    const svgObject = document.querySelectorAll('.svg')
    svgObject.forEach((item, i) => {
      const path = item.querySelectorAll('path')
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
            ease: 'none'
          })
      })
    })

    // Анимация блока с заголовком
    this.animTitlePosition = gsap
      .timeline({ defaults: { ease: 'none', duration: 1 } })
      .to(
        this.$refs.title,
        {
          width: '50%'
        },
        3
      )
    // Анимация блока с ссылками
    this.animLinkPosition = gsap
      .timeline({ defaults: { ease: 'none', duration: 1 } })
      .to(
        this.$refs.link,

        {
          width: '50%'
        },
        3
      )

    // Анимация  загловка / перемещение
    // this.animTitlePosition = gsap
    //   .timeline({ defaults: { ease: 'none', duration: 1 } })
    //   .fromTo(
    //     this.$refs.title,
    //     { x: '-50%', y: '-50%', top: '50%', left: '50%' },
    //     {
    //       flexWrap: 'wrap',
    //       x: '1%',
    //       y: '1%',
    //       top: '10px',
    //       left: '10px',
    //       width: 550
    //     },
    //     3
    //   )
    // Анимация блоков
    const linkSocial = document.querySelector('.link__social')
    const linkAds = document.querySelector('.link__ads')

    this.animBlockLink = gsap
      .timeline({ defaults: { duration: 2, ease: 'none' } })
      .to(linkSocial, { height: '100vh' }, 0)
      .to(linkSocial, { height: '50vh' }, 4)
      .fromTo(
        linkAds,
        { height: '100vh', x: '0%', y: '200%' },
        { height: '50vh', x: '0%', y: '100%' },
        4
      )
  },

  methods: {
    killAnim() {
      console.log('Убил анимацию?!')
      this.animTitle.kill()
    },

    goInstaPage() {
      this.killAnim()
      this.$router.push('/social')
    },
    goAddPage() {
      this.$router.push('/ad')
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
.wrapper {
  position: relative;
  height: 100vh;
  // Убрать полосы прокрутки
  overflow-y: hidden;
}

.home {
  &__title {
    font-size: 50px;
    line-height: 56px;
    font-family: 'Russo One', sans-serif;
    text-transform: uppercase;
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.title {
  background: rgba(221, 117, 47, 0.295);

  // display: flex;
  // justify-content: space-between;
  width: 100%;
  position: absolute;
  height: 100%;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);

  &__01 {
    width: 445px;
  }

  &__02 {
    width: 290px;
  }

  &__03 {
    width: 246px;
  }
}

#title__svg--01 {
  height: 150px;
}

// #title__svg path {
//   stroke-linecap: round;
// }

.link {
  background: rgba(129, 235, 97, 0.171);
  width: 0;
  height: 100%;
  position: absolute;
  right: 0;

  // background: url('~assets/img/Home_ads-1x.png') 50% / cover no-repeat;

  &__social,
  &__ads {
    width: 100%;
    position: absolute;
    box-shadow: 0 0 10px #000;

    // background-attachment: fixed;
  }

  &__ads {
    background: rgba(158, 152, 98, 0.199);
    // background-image: url('~assets/img/Home_ads-1x.png');
    // background-position: 10% 10%;
  }

  &__social {
    background: rgba(223, 88, 205, 0.274);
    // background-image: url('~assets/img/insta_home-1x.png');
  }
  // &__btn {
  //   position: absolute;
  //   bottom: 15px;
  //   left: 50%;
  //   transform: translateX(-50%);

  //   background: url('~assets/img/button_v1.png') 50% 50% no-repeat;
  //   background-size: contain;
  //   min-width: 200px;
  //   height: 50px;
  // }
}
</style>
