<template>
  <div class="banner" :class="{'hide': showWork}">
    <h1>Ted Tobin</h1>
    <p>COPYWRITER. CREATIVE DIRECTOR. PRODUCER.</p>
    <button class="projects" @click="viewWork">View Work</button>
  </div>
</template>

<script>

export default {
  name: 'Banner',

  props: {
    show: Boolean
  },

  computed: {
    showWork() {
      return this.$store.state.viewWork;
    }
  },

  methods: {
    viewWork() {
      this.$store.commit('toggleWork')
    }
  }
}

</script>

<style lang="scss">

@import '@/assets/scss/app.scss';

.banner {
  position: fixed;
  top: calc(35vh);
  left: 0;
  right: 0;
  width: 50%;
  margin: 0 auto;
  background: $white;
  text-align: center;
  padding: 2rem;
  opacity: 1;
  transition: all ease 1s;

  p {
    font-size: 1.2rem;
  }
}

</style>
