/* eslint-disable no-irregular-whitespace */
<template>
  <div class="wrapper__full">
    <section class="home">
      <!-- <svg-sprite style="display: none;"></svg-sprite> -->
      <div ref="title" class="page-title">
        <div ref="pageTitlePosition" class="page-title__wrapper">
          <span
            ><HomeTitleSvg class="page-title__01 svg-title"></HomeTitleSvg>
          </span>
          <!-- <span
            ><svg class="page-title__01 svg-title">
              <use xlink:href="#title__svg--01" /></svg
          ></span> -->
          <!-- <span
            ><svg class="page-title__02 svg-title">
              <use xlink:href="#title__svg--02" /></svg
          ></span>
          <span
            ><svg class="page-title__03 svg-title">
              <use xlink:href="#title__svg--03" /></svg
          ></span>
          <span style="display: block;">Ну или хотя-бы стране, курсивым</span> -->
        </div>
        <div ref="imgTitle" class="page-title__container">
          <picture>
            <source
              type="image/webp"
              srcset="
                ~assets/img/bg_home_v2.webp    1x,
                ~assets/img/bg_home_v2@2x.webp 2x
              "
            />
            <img
              src="~assets/img/bg_home_v2.jpg"
              srcset="
                ~assets/img/bg_home_v2.jpg    1x,
                ~assets/img/bg_home_v2@2x.jpg 2x
              "
              alt="Заказать рекламу в Яндекс и Google"
              class="page-title__img"
            />
          </picture>
        </div>
      </div>

      <div ref="link" class="link">
        <nuxt-link to="/advertising">
          <div ref="linkAds" class="link__ads">
            <div class="link__header">
              <h1 class="link__title title-decor">Реклама в интернете</h1>
              <strong class="link__header-subtitle"
                >Яндекс Директ, Google Реклама</strong
              >
            </div>
            <div class="image-container image-container__ads"></div>
          </div>
        </nuxt-link>
        <nuxt-link to="/social">
          <div ref="linkSocial" class="link__social">
            <div class="link__header">
              <h1 class="link__title title-decor">
                Продвижение и реклама <br />
                в социальных сетях
              </h1>
              <strong class="link__header-subtitle"
                >ВКонтакте, Facebook, Instagram, Одноклассники</strong
              >
            </div>
            <div class="image-container image-container__social"></div>
          </div>
        </nuxt-link>
        <nuxt-link to="/webdevelopment">
          <div ref="linkWeb" class="link__web">
            <div class="link__header">
              <h1 class="link__title title-decor">Разработка Landing Page</h1>
              <strong class="link__header-subtitle"
                >Дизайн, верстка, загрузка на хостинг</strong
              >
            </div>
            <div class="image-container image-container__web"></div>
          </div>
        </nuxt-link>
      </div>

      <!-- <button @click="openForm" class="button home__button">Получить</button> -->
    </section>
  </div>
</template>
<script>
// import SvgSprite from '@/components/main/svg/svg-sprite'
import HomeTitleSvg from '@/components/main/svg/HomeTitleSvg'
import { gsap } from 'gsap'

export default {
  components: {
    // SvgSprite,
    HomeTitleSvg
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
    const mediaQueryList = window.matchMedia('(max-width: 991px)').matches
    if (!mediaQueryList) {
      const svgObject = document.querySelectorAll('.svg')
      svgObject.forEach((item, i) => {
        const path = item.querySelectorAll('path')

        path.forEach((item, i) => {
          const pathLength = item.getTotalLength()

          this.animTitle = gsap
            .timeline({ defaults: { ease: 'none', duration: 1.5 } })
            .set(path[i], { strokeDasharray: pathLength, autoAlpha: 1 })
            .fromTo(
              path[i],
              { strokeDashoffset: pathLength },
              { strokeDashoffset: 0 }
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
        // .to(this.$refs.pageTitlePosition, { opacity: 0, duration: 1 }, 1.9)

        .to(this.$refs.title, { width: '50%' }, 2.9)
        .to(this.$refs.pageTitlePosition, { scale: '1' }, 4)
        .to(this.$refs.pageTitlePosition, { opacity: 1 }, 5)

      // Анимация изображения на заголовке
      this.animTitlePosition = gsap
        .timeline({
          defaults: { ease: 'none', duration: 3.5 }
        })
        // .fromTo(this.$refs.imgTitle, { x: '0%' }, { x: '-45% ' }, 2.9)
        .fromTo(this.$refs.imgTitle, { x: '0%' }, { x: '-85% ' }, 2.9)

      // Анимация блока с ссылками
      this.animLinkPosition = gsap
        .timeline({ defaults: { ease: 'none', duration: 1 } })
        .to(this.$refs.link, { width: '50%' }, 2.9)

      // Анимация блоков ссылок
      this.animBlockLink = gsap
        .timeline({ defaults: { duration: 1.5, ease: 'none' } })
        .to(this.$refs.linkAds, { height: '100vh' }, 0)
        .to(this.$refs.linkAds, { height: '50vh' }, 3)
        .to(this.$refs.linkAds, { height: '33.33vh' }, 5)
        .fromTo(
          this.$refs.linkSocial,
          { height: '50vh', y: '200%' },
          { height: '50vh', y: '100%' },
          3
        )
        .to(this.$refs.linkSocial, { height: '33.33vh', y: '100%' }, 5)
        .fromTo(
          this.$refs.linkWeb,
          { height: '50vh', y: '300%' },
          { height: '50vh', y: '200%' },
          3
        )
        .to(this.$refs.linkWeb, { height: '33.33vh', y: '200%' }, 5)
    }
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
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
}

.page-title {
  width: 100%;
  position: absolute;
  height: 100vh;

  @media (max-width: $lg-width-max) {
    // CSS для ширины от 992px до 1199px */
  }

  @media (max-width: $md-width-max) {
    display: none;
  }

  &__wrapper {
    position: absolute;
    transform: translate(0, -50%);
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 5;

    // & span {
    //   margin-left: 15px;
    //   margin-top: 15px;
    // }
  }

  &__01 {
    width: 1000px;
    // filter: drop-shadow(-5px 4px 2px rgb(130, 130, 236));
    filter: drop-shadow(-15px 15px 5px rgba(0, 0, 0, 0.795));
    // filter: drop-shadow(-20px 30px 7px rgb(0, 0, 0));

    @media (max-width: 1440px) {
      // CSS для ширины от 992px до 1199px */
      width: 800px;
    }

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      width: 600px;
    }
  }

  //  &__01 {
  //   width: 445px;
  // }

  &__02 {
    width: 290px;
  }

  &__03 {
    width: 246px;
  }
}

.page-title__container {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // overflow: hidden;
}

.page-title__img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  // max-width: 150%;
  height: 100vh;

  @media (max-width: $md-width-max) {
    display: none;
  }
}

.link {
  background: rgba(97, 214, 235, 0.171);
  width: 0;
  height: 100%;
  position: absolute;
  right: 0;
  // left: 100%;
  z-index: 2;
  // background: url('~assets/img/Home_ads-1x.png') 50% / cover no-repeat;

  @media (max-width: $md-width-max) {
    // CSS для ширины от 768px до 991px */
    width: 100%;
  }

  &__social {
    background: rgba(223, 88, 205, 0.274);
    // background-image: url('~assets/img/insta_home-1x.png');
    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      height: 33.3vh;
    }
  }

  &__ads {
    background: rgba(158, 152, 98, 0.199);
    // background-image: url('~assets/img/Home_ads-1x.png');
    // background-position: 10% 10%;
    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      height: 33.3vh;
      top: 33.3vh;
    }
  }

  &__web {
    background: rgba(223, 88, 205, 0.274);
    // background-image: url('~assets/img/insta_home-1x.png');
    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      height: 33.3vh;
      top: 66.6vh;
    }
  }

  &__social,
  &__ads,
  &__web {
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

  &__title {
    display: inline-block;
    margin: 0;
    font-weight: normal;

    & ::after {
      transition: all 0.5s ease-out;
      transform: scale(1.2, 1);
    }

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      font-size: 1.8em;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      font-size: 1.5em;
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      font-size: 1.3em;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      font-size: 1.2em;
    }
  }

  // &__ads {
  //   background: rgba(158, 152, 98, 0.199);
  //   // background-image: url('~assets/img/Home_ads-1x.png');
  //   // background-position: 10% 10%;
  //   @media (max-width: $md-width-max) {
  //     // CSS для ширины от 768px до 991px */
  //     height: 33.3vh;
  //     top: 33.3vh;
  //   }
  // }

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

    @media (max-width: $lg-width-max) {
      // CSS для ширины от 992px до 1199px */
      // font-size: 1.8em;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      // font-size: 1.5em;
    }

    @media (max-width: $sm-width-max) {
      // CSS для ширины от 576px до 767px */
      // font-size: 1.5em;
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      // font-size: 1.2em;
      min-width: 300px;
    }

    &-subtitle {
      display: block;
      font-style: italic;
      font-weight: 300;
    }
  }

  // &__title {
  //   display: inline-block;
  //   margin: 0;

  //   &::after {
  //     transition: all 0.5s ease-out;
  //     transform: scale(1.2, 1);
  //   }

  //   @media (max-width: $lg-width-max) {
  //     // CSS для ширины от 992px до 1199px */
  //     font-size: 1.8em;
  //   }

  //   @media (max-width: $md-width-max) {
  //     // CSS для ширины от 768px до 991px */
  //     font-size: 1.5em;
  //   }

  //   @media (max-width: $sm-width-max) {
  //     // CSS для ширины от 576px до 767px */
  //     font-size: 1.3em;
  //   }

  //   @media (max-width: $xs-width-max) {
  //     // CSS для ширины до 575px (включительно) */
  //     font-size: 1.2em;
  //   }
  // }
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
  // background-position: center;

  // &__ads {
  //   background-image: url('~assets/img/link-ads.jpg');

  //   @media (max-width: $md-width-max) {
  //     // CSS для ширины от 768px до 991px */
  //     background-image: url('~assets/img/link-ads-md.jpg');
  //   }

  //   @media (max-width: $xs-width-max) {
  //     // CSS для ширины до 575px (включительно) */
  //     background-image: url('~assets/img/link-ads-xs.jpg');
  //   }
  // }

  // &__social {
  //   background-image: url('~assets/img/link-social.jpg');

  //   @media (max-width: $lg-width-max) {
  //     // CSS для ширины от 992px до 1199px */
  //     background-image: url('~assets/img/link-social-md.jpg');
  //     background-position: center;
  //   }

  //   @media (max-width: $xs-width-max) {
  //     // CSS для ширины до 575px (включительно) */
  //     background-image: url('~assets/img/link-social-xs.jpg');
  //     background-position: center;
  //   }
  // }

  // &__web {
  //   background-image: url('~assets/img/link-web.jpg');

  //   @media (max-width: $md-width-max) {
  //     // CSS для ширины от 768px до 991px */
  //     background-image: url('~assets/img/link-web-md.jpg');
  //   }

  //   @media (max-width: $xs-width-max) {
  //     // CSS для ширины до 575px (включительно) */
  //     background-image: url('~assets/img/link-web-xs.jpg');
  //     background-position: center;
  //   }
  // }
}

.no-webp {
  .image-container {
    &__ads {
      background-image: url('~assets/img/link-ads.jpg');

      @media #{unquote($retina)} {
        background-image: url('~assets/img/link-ads@2x.jpg');
      }

      @media (max-width: $md-width-max) {
        // CSS для ширины от 768px до 991px */
        background-image: url('~assets/img/link-ads-md.jpg');

        @media #{unquote($retina)} {
          background-image: url('~assets/img/link-ads-md@2x.jpg');
        }
      }

      @media (max-width: $xs-width-max) {
        // CSS для ширины до 575px (включительно) */
        background-image: url('~assets/img/link-ads-xs.jpg');

        @media #{unquote($retina)} {
          background-image: url('~assets/img/link-ads-xs@2x.jpg');
        }
      }
    }
    ///
    &__social {
      background-image: url('~assets/img/link-social.jpg');

      @media #{unquote($retina)} {
        background-image: url('~assets/img/link-social@2x.jpg');
      }

      @media (max-width: $lg-width-max) {
        // CSS для ширины от 992px до 1199px */
        background-image: url('~assets/img/link-social-md.jpg');
        background-position: center;

        @media #{unquote($retina)} {
          background-image: url('~assets/img/link-social-md@2x.jpg');
        }
      }

      @media (max-width: $xs-width-max) {
        // CSS для ширины до 575px (включительно) */
        background-image: url('~assets/img/link-social-xs.jpg');
        background-position: center;

        @media #{unquote($retina)} {
          background-image: url('~assets/img/link-social-xs@2x.jpg');
        }
      }
    }
    ///

    &__web {
      background-image: url('~assets/img/link-web.jpg');

      @media #{unquote($retina)} {
        background-image: url('~assets/img/link-web@2x.jpg');
      }

      @media (max-width: $md-width-max) {
        // CSS для ширины от 768px до 991px */
        background-image: url('~assets/img/link-web-md.jpg');

        @media #{unquote($retina)} {
          background-image: url('~assets/img/link-web-md@2x.jpg');
        }
      }

      @media (max-width: $xs-width-max) {
        // CSS для ширины до 575px (включительно) */
        background-image: url('~assets/img/link-web-xs.jpg');
        background-position: center;

        @media #{unquote($retina)} {
          background-image: url('~assets/img/link-web-xs@2x.jpg');
        }
      }
    }
  }
}

.webp {
  .image-container {
    &__ads {
      background-image: url('~assets/img/link-ads.webp');

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/link-ads@2x.webp') no-repeat;
      }

      @media (max-width: $md-width-max) {
        // CSS для ширины от 768px до 991px */
        background-image: url('~assets/img/link-ads-md.webp');

        @media #{unquote($retina)} {
          background: center/cover url('~assets/img/link-ads-md@2x.webp')
            no-repeat;
        }
      }

      @media (max-width: $xs-width-max) {
        // CSS для ширины до 575px (включительно) */
        background-image: url('~assets/img/link-ads-xs.webp');

        @media #{unquote($retina)} {
          background: center/cover url('~assets/img/link-ads-xs@2x.webp')
            no-repeat;
        }
      }
    }
    //
    &__social {
      background-image: url('~assets/img/link-social.webp');

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/link-social@2x.webp')
          no-repeat;
      }

      @media (max-width: $lg-width-max) {
        // CSS для ширины от 992px до 1199px */
        background-image: url('~assets/img/link-social-md.webp');
        background-position: center;

        @media #{unquote($retina)} {
          background: center/cover url('~assets/img/link-social-md@2x.webp')
            no-repeat;
        }
      }

      @media (max-width: $xs-width-max) {
        // CSS для ширины до 575px (включительно) */
        background-image: url('~assets/img/link-social-xs.webp');
        background-position: center;

        @media #{unquote($retina)} {
          background: center/cover url('~assets/img/link-social-xs@2x.webp')
            no-repeat;
        }
      }
    }
    //
    &__web {
      background-image: url('~assets/img/link-web.webp');

      @media #{unquote($retina)} {
        background-image: url('~assets/img/link-web@2x.webp');
      }

      @media (max-width: $md-width-max) {
        // CSS для ширины от 768px до 991px */
        background-image: url('~assets/img/link-web-md.webp');

        @media #{unquote($retina)} {
          background-image: url('~assets/img/link-web-md@2x.webp');
        }
      }

      @media (max-width: $xs-width-max) {
        // CSS для ширины до 575px (включительно) */
        background-image: url('~assets/img/link-web-xs.webp');
        background-position: center;

        @media #{unquote($retina)} {
          background-image: url('~assets/img/link-web-xs@2x.webp');
        }
      }
    }
  }
}

@media (max-width: $lg-width-max) {
  // CSS для ширины от 992px до 1199px */
}

@media (max-width: $md-width-max) {
  // CSS для ширины от 768px до 991px */
}

@media (max-width: $sm-width-max) {
  // CSS для ширины от 576px до 767px */
}

@media (max-width: $xs-width-max) {
  // CSS для ширины до 575px (включительно) */
}
</style>
