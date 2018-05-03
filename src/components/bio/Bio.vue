<template>
  <div class="bio paper" id="top" :style="getStyle(data.paper, null)" v-if="data">
    <div>
      <div class="image">
        <img :src="data.mobileimage" />
      </div>
      <h1 v-html="data.name"></h1>
      <div class="line"></div>
      <h2>{{data.title}}</h2>
      <div class="copy" ref="copy">
        <p v-for="p in data.bio" v-html="p"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bio',
    props:['data'],
    updated(){
      // console.log( "update", window.scrollY);
    },
    methods:{
      getStyle(obj,pObj){
        return this.$percentStyle(obj,pObj);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';

  .bio{
    &>div{
      padding: 28px 51px;
      // display: flex;
      // flex-direction: column;
      width: 100%;
      height: 100%;

      @include noboard(){
        padding: 0 0;
        width: 75%;
        margin: auto;
      }

      .image{
        margin-bottom: 20px;
        display: none;

        @include noboard(){
          display: block;
        }

        img{
          width: 100%;
        }
      }

      h1{
        font-size:20px;
        font-weight: 300;
      }

      span{
        font-weight: 900;
      }

      .line{
        width: 80%;
        height: 2px;
        background: #f37e21;
        margin: 10px 0;

        @include noboard(){
          width: 100%;
        }
      }

      h2{
        font-size:16px;
        font-weight: 300;
      }

      .copy{
        margin-top: 23px;
        max-height: 70%;
        overflow-y: auto;

        @include tablet(){
          max-height: 60%;
        }

        @include noboard(){
          max-height: auto;
        }

        p{
          // font-size:14px;
          // line-height: 16px;
          margin-bottom: 20px;
          padding-right: 10px;

          @include noboard(){
            text-align: justify;
            padding-right: 0px;
          }

        }
      }
    }
  }

</style>
