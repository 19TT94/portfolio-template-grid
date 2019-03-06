<template>
  <div class="about">
    <h1>Ted Tobin</h1>
    <p>COPYWRITER. CREATIVE DIRECTOR. PRODUCER.</p>
    <button class="projects" @click="viewWork">View Work</button>
  </div>
</template>

<script>

export default {
  name: 'About',

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

.about {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(100%);
  padding: 2rem;
}

</style>
