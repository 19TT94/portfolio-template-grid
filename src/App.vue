<template>
  <div id="app">
    <div class="overlay" :class="{'hide': showWork}"></div>
    <ul class="menu" :class="{'show-menu': showWork}">
      <li @click="transitionHome">Home</li>
      <li @click="transitionWork">Work</li>
      <li @click="transitionAbout">About</li>
    </ul>
    <grid :class="{'shift': showWork, 'show-page': work}" />
    <about :class="{'shift': showWork, 'show-page': !work}" />
    <banner :show='show' />
  </div>
</template>

<script>
import grid from './components/FullScreenGrid'
import about from './components/About'
import banner from './components/Banner'

export default {
  name: 'App',

  components: {
    grid,
    about,
    banner
  },

  data() {
    return {
      work: true,
      show: false
    }
  },

  computed: {
    showWork() {
      return this.$store.state.viewWork;
    }
  },

  methods: {
    transitionHome() {
      this.$store.commit('toggleWork')
      this.work = true
    },
    transitionWork() {
      this.work = true
    },
    transitionAbout() {
      this.work = false
    }
  }
}
</script>

<style lang="scss">

@import '@/assets/scss/app.scss';

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  filter: blur(20px);
}

.menu {
  width: 100%;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background: $white;
  transform: translateY(-100%);
  transition: all ease 0.5s;
  padding: 0;

  li {
    padding: 0 2rem;
  }
}

.show-menu {
  transform: translateY(0);
}

</style>
