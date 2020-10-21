<template>
  <div>
    <section class="header header-social">
      <div class="wrapper">
        <div class="header__wrapper">
          <h1 class="header__title title-decor">
            Реклама в социальных сетях
          </h1>
          <p class="header__text subtitle">
            &mdash; А что делать, когда это закончится?<br />
            &mdash; Этого никогда не случится. Фейсбук как мода, он никогда не
            закончится. <br />Из фильма "Социальная сеть"
          </p>
          <span class="scroll"> </span>
        </div>
      </div>
    </section>
    <section class="description">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="description__title title-decor title-block">
            Зачем необходимо продвижение в социальных сетях?
          </h2>
          <!-- <p class="description__subtitle subtitle">
            И вот, что Вас ожидает
          </p> -->
        </div>
        <app-info></app-info>
      </div>
    </section>
    <div class="separator"></div>
    <section class="stages-social">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="description__title title-decor title-block">
            Как будет проходить работа
          </h2>
          <p class="description__subtitle subtitle">
            Этапы
          </p>
        </div>
        <app-stages>
          <template v-slot:title1>
            1. Анализ
          </template>
          <template v-slot:text1>
            Оценка текущей ситуации в аккаунтах (если есть). Анализ целевой
            аудитории, конкурентов.
          </template>
          <template v-slot:title2>
            2. Стратегия
          </template>
          <template v-slot:text2>
            Разработка стратегии продвижения, а также дизайна аккаунтов во всех
            социальных сетях.
          </template>
          <template v-slot:title3>
            3. Подготовка контент-плана
          </template>
          <template v-slot:text3>
            Разрабатываем детальную контентную стратегию, оговариваем
            рубрикатор. Прописываем количество полезного, продающего и
            вовлекающего контента.
          </template>
          <template v-slot:title4>
            4. Ведение сообществ
          </template>
          <template v-slot:text4>
            Оформление и размещение постов. Разработка и проведение конкурсов и
            интерактивов, акций.
          </template>
          <template v-slot:title5>
            5. Модерация сообществ
          </template>
          <template v-slot:text5>
            Ежедневный мониторинг: удаление спама, ответы на сообщения и
            комментарии.
          </template>
          <template v-slot:title6>
            6. Настройка и запуск таргетированной рекламы
          </template>
          <template v-slot:text6>
            Только в тарифах «Ведение сообществ и реклама» и «Таргетированная
            реклама»
          </template>
        </app-stages>
      </div>
    </section>
    <div class="separator"></div>
    <section class="price-block">
      <div class="wrapper">
        <div class="header-block">
          <h2 class="description__title title-decor title-block">
            Тарифы на продвижение в социальных сетях.
          </h2>
          <p class="description__subtitle subtitle">
            Оставьте заявку и мы пришлем Вам полный перечень оказываемых услуг
            по данному тарифу.
          </p>
        </div>
        <app-price
          @set-tariff="setTariff"
          :listMessagesTariff="listMessagesTariff"
          :listTariff="listTariffSocial"
        >
          <template v-slot:title-min>
            Ведение сообществ
          </template>
          <template v-slot:price-min>
            от 7 000
          </template>
          <template v-slot:title-mid>
            Ведение сообществ и реклама
          </template>
          <template v-slot:price-mid>
            от 10 000
          </template>
          <template v-slot:title-max>
            Таргетированная реклама
          </template>
          <template v-slot:price-max>
            от 3000*
          </template>
        </app-price>
        <div class="price-block__info">
          * - 1 месяц ведения рекламы в подарок, со второго месяца ведение от 2
          000 р. Рекламный бюджет рассчитывается индивидуально.
        </div>
      </div>
    </section>
    <div class="separator"></div>
    <section class="optimization-social">
      <div class="header-block">
        <h2 class="skills__title title-decor title-block">
          Уже используете продвижение в соцсетях? Подключили таргетированную
          рекламу, но нет результата?
        </h2>
        <p class="skills__subtitle subtitle">
          Поможем разобраться в чем причина
        </p>
      </div>
      <app-audit @update-message="updateMessageTextInForm">
        <template v-slot:text>
          проведём аудит Ваших аккаунтов и рекламных кампаний, найдем ошибки и
          предложим варианты решения проблем.
        </template>
      </app-audit>
    </section>
    <div class="separator"></div>
    <section id="form" class="form-block form-social ">
      <app-form
        :messageText="messageTextInForm"
        v-model.lazy="messageTextInForm"
        @deleteMessageInForm="deleteMessageInChildForm"
      ></app-form>
    </section>
  </div>
</template>
<script>
import appForm from '../components/main/form'
import appInfo from '../components/main/infographics'
import appStages from '../components/main/stages'
import appPrice from '../components/main/price'
import appAudit from '../components/main/Audit'
export default {
  head: {
    title: 'Реклама в социальных сетях'
  },
  components: {
    appForm,
    appInfo,
    appStages,
    appPrice,
    appAudit
  },
  data() {
    return {
      messageTextInForm: '',
      listMessagesTariff: {
        min: 'Я хочу настройку таргетированной рекламы',
        middle: 'Я хочу ведение сообществ',
        max: 'Я хочу ведение сообществ и рекламу'
      },
      listTariffSocial: {
        min: [
          { cardItemClass: 'ok', title: 'Стратегия продвижения' },
          { cardItemClass: 'ok', title: 'Разработка дизайна' },
          { cardItemClass: 'ok', title: 'Контент-план' },
          { cardItemClass: 'ok', title: 'Размещение постов' },
          { cardItemClass: 'ok', title: 'Проведение активностей' },
          { cardItemClass: 'ok', title: 'Модерация сообществ' }
        ],
        mid: [
          { cardItemClass: 'ok', title: 'Стратегия продвижения' },
          { cardItemClass: 'ok', title: 'Разработка дизайна' },
          { cardItemClass: 'ok', title: 'Контент-план' },
          { cardItemClass: 'ok', title: 'Размещение постов' },
          { cardItemClass: 'ok', title: 'Проведение активностей' },
          { cardItemClass: 'ok', title: 'Модерация сообществ' },
          { cardItemClass: 'ok', title: 'Настройка и запуск рекламы' }
        ],
        max: [{ cardItemClass: 'ok', title: 'Настройка и запуск рекламы' }]
      }
    }
  },
  methods: {
    openForm() {
      this.$router.push('/contact')
    },
    setTariff(tariff) {
      this.$router.push('#form')
      this.messageTextInForm = tariff
    },
    deleteMessageInChildForm() {
      setTimeout(() => {
        this.messageTextInForm = ''
      }, 1000)
    },
    updateMessageTextInForm() {
      this.$router.push('#form')
      this.messageTextInForm =
        'Мне нужен бесплатный аудит моей рекламной кампании'
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background: $grey;
  background-attachment: fixed;

  // @media (max-width: $md-width-max) {
  //   // CSS для ширины от 768px до 991px */
  //   background: center / cover url('~assets/img/bg_social-md.jpg') no-repeat;
  // }

  // @media (max-width: $xs-width-max) {
  //   // CSS для ширины до 575px (включительно) */
  //   background: center / cover url('~assets/img/bg_social-xs.jpg') no-repeat;
  // }
}

.header-block {
  color: $grey;

  & .title-decor::after {
    background: $grey;
  }
}

.description {
  background: #eee;
  padding-bottom: 50px;
  // box-shadow: $shadow-block;
}

.stages-social {
  background: #eee;
  padding-bottom: 50px;
  color: $grey;

  @media (max-width: $lg-width-max) {
    /* CSS для ширины от 992px до 1199px */
  }

  @media (max-width: $sm-width-max) {
    /* CSS для ширины от 576px до 767px */
  }

  @media (max-width: $xs-width-max) {
    /* CSS для ширины до 575px (включительно) */
  }
}

.optimization-social {
  background: #eee;
  padding-bottom: 40px;
  color: $grey;
}

.form-social {
  background: #eee;

  @media (max-width: $lg-width-max) {
    /* CSS для ширины от 992px до 1199px */
  }

  @media (max-width: $sm-width-max) {
    /* CSS для ширины от 576px до 767px */
  }

  @media (max-width: $xs-width-max) {
    /* CSS для ширины до 575px (включительно) */
  }
}

.separator {
  width: 100%;
  height: 3vh;
  background: #eee;
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.5),
    inset -3px -3px 5px rgb(255, 255, 255);
}

.price-block {
  background: #eee;
  padding-bottom: 30px;
  // box-shadow: $shadow-block;
  &__info {
    color: $grey;
    font-size: 20px;
    padding: 15px;
  }
}

// Webp
.no-webp {
  .header {
    background: center/cover url('~assets/img/bg_social.jpg') no-repeat;

    @media #{unquote($retina)} {
      background: center/cover url('~assets/img/bg_social@2x.jpg') no-repeat;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      background: center / cover url('~assets/img/bg_social-md.jpg') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_social-md@2x.jpg')
          no-repeat;
      }
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      background: center / cover url('~assets/img/bg_social-xs.jpg') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_social-xs@2x.jpg')
          no-repeat;
      }
    }
  }
}

.webp {
  .header {
    background: center/cover url('~assets/img/bg_social.webp') no-repeat;

    @media #{unquote($retina)} {
      background: center/cover url('~assets/img/bg_social@2x.webp') no-repeat;
    }

    @media (max-width: $md-width-max) {
      // CSS для ширины от 768px до 991px */
      background: center / cover url('~assets/img/bg_social-md.jpg') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_social-md@2x.webp')
          no-repeat;
      }
    }

    @media (max-width: $xs-width-max) {
      // CSS для ширины до 575px (включительно) */
      background: center / cover url('~assets/img/bg_social-xs.webp') no-repeat;

      @media #{unquote($retina)} {
        background: center/cover url('~assets/img/bg_social-xs@2x.webp')
          no-repeat;
      }
    }
  }
}
</style>
