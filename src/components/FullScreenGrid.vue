<template>
  <div class="grid-wrap">
    <ul class="grid">
      <li class="grid-item" v-for="(item,index) in grid" :key="item.id">
        <button :style="{ 'background-image': 'url(' + item.image + ')' }" @click="openProject(index)"></button>
      </li>
    </ul>
    <div class="project" :class="{'show': project}">
      <h1>{{grid[current].title}}</h1>
      <img :src="grid[current].poster">
      <button @click="closeProject">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullScreenGrid',

  data() {
    return {
      current: 0,
      project: false,
      grid: [
        {
          'image': require('@/assets/images/grid/avengers-infinity-war.jpg'),
          'poster': require('@/assets/images/posters/avengers-infinity-war.jpg'),
          'title': 'Avengers Infinity War',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/black-panther.jpg'),
          'poster': require('@/assets/images/posters/black-panther.jpg'),
          'title': 'Black Panther',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/doctor-strange.jpg'),
          'poster': require('@/assets/images/posters/doctor-strange.jpg'),
          'title': 'Doctor Strange',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/fast-and-furious.jpg'),
          'poster': require('@/assets/images/posters/fast-and-furious.jpg'),
          'title': 'Fast and Furious',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/racing-stripes.jpg'),
          'poster': require('@/assets/images/posters/racing-stripes.jpg'),
          'title': 'Racing Stripes',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/the-force-awakens.jpg'),
          'poster': require('@/assets/images/posters/the-force-awakens.jpg'),
          'title': 'The Force Awakens',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/guardians.jpg'),
          'poster': require('@/assets/images/posters/guardians.jpg'),
          'title': 'Guardians of the Galaxy Vol. 2',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/the-jungle-book.jpg'),
          'poster': require('@/assets/images/posters/the-jungle-book.jpg'),
          'title': 'The jungle Book',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/the-last-jedi.jpg'),
          'poster': require('@/assets/images/posters/the-last-jedi.jpg'),
          'title': 'Star Wars: The Last Jedi',
          'description': ''
        },
        {
          'image': require('@/assets/images/grid/wolfman.jpg'),
          'poster': require('@/assets/images/posters/wolfman.jpg'),
          'title': 'The Wolfman',
          'description': ''
        }
      ]
    }
  },

  methods: {
    openProject(index) {
      this.project = true
      this.current = index
    },
    closeProject() {
      this.project = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '@/assets/scss/app.scss';
.grid-wrap {
  position: relative;
  transform: translateX(-100%);
}

.grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0;
  list-style-type: none;

  &-item {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-height: 250px;
    padding: 0;

    @media #{$small} {
      width: 25%;
    }

    button {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}

.project {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    
    background: rgba(255,255,255,0.9);
    z-index: $back;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      padding-top: 2rem;
    }

    img {
      max-height: 200px;
      margin: 0 auto;
    }
  }

</style>
