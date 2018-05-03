<template>
  <div class="closebtn" v-if="data.length>1">
    <router-link :to="{path:`/${page}`}">
      <font-awesome-icon :icon="['fal', 'times']" />
    </router-link>
  </div>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

  export default {
    name: 'Close',
    props: ['data','page'],
    components: {
      'FontAwesomeIcon': FontAwesomeIcon
    }
  }
</script>

<style lang="scss">
  @import '~@/styles/variables.scss';

  .closebtn{
    position: absolute;
    top: -50px;
    right: 10px;
    z-index: 15;

    @include noboard(){
      top: -35px;
    }

    a{
      color: $white;
      font-size: 48px;
      opacity: $link-opacity-off;

      @include noboard(){
				color: $black;
        font-size: 40px;
			}

      &:hover{
        opacity: $link-opacity-hover;
      }
    }

  }
</style>
