<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        weather-app
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      {{ getJokeData }}
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global.js";
export default {
  mixins: [global]
};
</script>

<style></style>
