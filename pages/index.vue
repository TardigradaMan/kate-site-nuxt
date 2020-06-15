<template>
  <div class="wrapper__full">
    <section class="home">
      <svg-sprite></svg-sprite>
      <div ref="title" class="page-title">
        <div ref="pageTitlePosition" class="page-title__wrapper">
          <span
            ><svg class="page-title__01">
              <use xlink:href="#title__svg--01" /></svg
          ></span>
          <span
            ><svg class="page-title__02">
              <use xlink:href="#title__svg--02" /></svg
          ></span>
          <span
            ><svg class="page-title__03">
              <use xlink:href="#title__svg--03" /></svg
          ></span>
          <span style="display: block">Ну или хотя-бы стране, курсивым</span>
        </div>
      </div>

      <div ref="link" class="link">
        <nuxt-link to="/social">
          <div ref="linkSocial" class="link__social">
            <div class="link__header">
              <h1 class="link__title">Реклама в социальных сетях</h1>
              <strong class="link__header-subtitle"
                >Поможем, расскажем, сделаем</strong
              >
            </div>
            <div class="image-container image-container__social"></div>
          </div>
        </nuxt-link>
        <nuxt-link to="/ad">
          <div ref="linkAds" class="link__ads">
            <div class="link__header">
              <h1 class="link__title">Реклама в интернете</h1>
              <strong class="link__header-subtitle">Яндекс, Гугол, Майл</strong>
            </div>
            <div class="image-container image-container__ads">
              <!-- <img
                class="three_images"
                data-image="/asset/images/wines/header.jpg"
                src="~assets/img/link_ads_v1.jpg"
                alt=""
              /> -->
            </div>
          </div>
        </nuxt-link>
      </div>

      <!-- <button @click="openForm" class="button home__button">Получить</button> -->
    </section>
  </div>
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
          .timeline({ defaults: { ease: 'none', duration: 1 } })
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
      .timeline({
        defaults: { ease: 'none', duration: 1 }
      })
      .to(
        this.$refs.pageTitlePosition,
        { scale: '0.5', opacity: 0, duration: 1 },
        1
      )

      .to(this.$refs.title, { width: '50%' }, 2)
      .to(this.$refs.pageTitlePosition, { opacity: 1 }, 4)

    // Анимация блока с ссылками
    this.animLinkPosition = gsap
      .timeline({ defaults: { ease: 'none', duration: 1 } })
      .to(this.$refs.link, { width: '50%' }, 2)

    // Анимация блоков
    this.animBlockLink = gsap
      .timeline({ defaults: { duration: 1.5, ease: 'none' } })
      .to(this.$refs.linkSocial, { height: '100vh' }, 0)
      .to(this.$refs.linkSocial, { height: '50vh' }, 3)
      .fromTo(
        this.$refs.linkAds,
        { height: '50vh', y: '200%' },
        { height: '50vh', y: '100%' },
        3
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
.home {
  height: 100vh;
  position: relative;
  overflow: hidden;
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

.page-title {
  background: rgba(221, 117, 47, 0.295);

  // display: flex;
  // justify-content: space-between;
  width: 100%;
  position: absolute;
  height: 100vh;
  // top: 50%;
  // left: 50%;

  &__wrapper {
    position: absolute;
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
  }

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

// #title__svg path {
//   stroke-linecap: round;
// }

.link {
  background: rgba(97, 214, 235, 0.171);
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
    ::after & {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #191919;
      opacity: 0.5;
    }

    &:hover {
      &::after {
        opacity: 0.5;
      }
      .link__title::after {
        transform: scale(1, 1);
        transition: all 0.5s ease-out;
      }
    }
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
  &__header {
    transform: translate(0, -50%);
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    min-width: 500px;
    height: auto;
    text-align: center;
    color: white;
    z-index: 5;

    &-subtitle {
      display: block;
    }
  }
  &__title {
    display: inline-block;
    margin: 0;
    &::after {
      content: '';
      position: relative;
      display: block;
      margin: 6px auto;
      height: 1px;
      background: white;

      // transform-origin: 50% 50%;
      width: 100%;
      margin: 20px auto;
      transition: all 0.5s ease-out;
      transform: scale(1.2, 1);
    }
  }
}
.image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  background-repeat: no-repeat;
  background-size: cover;

  &__ads {
    background-image: url('~assets/img/ads_v2.jpg');
  }
  &__social {
    background-image: url('~assets/img/social_test_v1.jpg');
  }
}
</style>
