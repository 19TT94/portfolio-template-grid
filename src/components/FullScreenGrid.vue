<template>
  <div class="grid-wrap">
    <ul class="grid">
      <li class="grid-item" v-for="item in grid" :key="item.id">
        <button :style="{ 'background-image': 'url(' + item.image + ')' }"></button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FullScreenGrid',
  data() {
    return {
      grid: [
        {
          'image': require('@/assets/images/grid/avengers-infinity-war.jpg')
        },
        {
          'image': require('@/assets/images/grid/black-panther.jpg')
        },
        {
          'image': require('@/assets/images/grid/doctor-strange.jpg')
        },
        {
          'image': require('@/assets/images/grid/fast-and-furious.jpg')
        },
        {
          'image': require('@/assets/images/grid/racing-stripes.jpg')
        },
        {
          'image': require('@/assets/images/grid/the-force-awakens.jpg')
        },
        {
          'image': require('@/assets/images/grid/guardians.jpg')
        },
        {
          'image': require('@/assets/images/grid/the-jungle-book.jpg')
        },
        {
          'image': require('@/assets/images/grid/the-last-jedi.jpg')
        },
        {
          'image': require('@/assets/images/grid/wolfman.jpg')
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import '@/assets/scss/app.scss';
.grid-wrap {
  width: 100%;
  height: 100%;
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

</style>
