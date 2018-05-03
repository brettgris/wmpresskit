<template>
  <div class="folder" :style="getStyle(data.case.folder, null)" v-if="data">
    <div class="clip hm" :style="getStyle(data.case.clip, data.case.folder)" v-if="data"></div>
    <div class="image">
      <img :src="data.case.mobileimage" />
    </div>
    <div class="case" id="top" :style="getStyle(data.case.style, data.case.folder)" v-if="data">
      <router-link class="videobtn" :to="{path:`/cases/id/${id}/video/0`}" :style="getStyle(data.case.button, data.case.style)"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Case',
    props:['data','id'],
    methods:{
      getStyle(obj,pObj){
        return this.$percentStyle(obj,pObj);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';

  .image{
    display: none;

    @include noboard(){
      display: block;
    }

      img{
        width: 100%;
      }
  }
</style>
