<template>
  <div class="container">
    <div>
      <header class="content-logos">
        <logo />
        <span class="plus">+</span>
        <VuesaxLogo />
      </header>
      <h1 class="title">
        Nuxt.js + Vuesax
      </h1>
      <h2 class="subtitle">
        <a href="https://vuesax.com/">Vuesax</a> is a framework of ui components for <a href="https://vuejs.org/">Vuejs</a>, It was created to make new interfaces that have a new trend and are visually beautiful
      </h2>
      <div class="links">
        <h3 class="h3">
          Vuesax
        </h3>
        <a
          href="https://vuesax.com/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://discordapp.com/invite/9dsKtvB"
          target="_blank"
          class="button--grey"
        >
          Discord
        </a>
        <a
          href="https://github.com/lusaxweb/vuesax"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div class="links">
        <h3 class="h3">
          Nuxt.js
        </h3>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <vs-button
        success
        flat
        @click="active = 1"
      >
        tùng
      </vs-button>
      <div>
        <vs-button v-b-modal.modal-1>
          Launch demo modal
        </vs-button>
        <b-modal
          id="modal-1"
          centered=""
        >
          Launch centered modal
        </b-modal>
      </div>
      <figure class="picture">
        <picture>
          <source
            data-srcset="~/assets/images/test-image.jpg?webp"
            type="image/webp"
          >
          <source
            data-srcset="~/assets/images/test-image.jpg"
            type="image/jpg"
          >
          <img
            data-src="~/assets/images/test-image.jpg"
            class="lazyload"
            alt="Alternate text for the image"
          >
        </picture>
      </figure>
      <figure class="picture">
        <img
          data-src="~/assets/images/test-image.jpg"
          class="lazyload"
          alt="Alternate text for the image"
        >
      </figure>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuesaxLogo from '~/components/VuesaxLogo.vue'

export default {
  layout: 'menu',
  components: {
    Logo,
    VuesaxLogo
  }
}
</script>

<style>
:root {
  --test-color: #35495e;
  --test-font: 55px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  --test-font: 55px;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: var(--test-font);
  color: var(--test-color);
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}
.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}
.h3 {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  margin: 10px;
}
</style>
