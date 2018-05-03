<template>
  <div class="cases-video" v-if="route">

    <div class="page">
      <div>
        <Close :data="videos" :page=" `cases/id/${id}` " />
        <div class="content">
          <div class="video">
            <div>
              <iframe :src="currentvideo.path" frameBorder="0"></iframe>
            </div>
          </div>
          <ul>
            <li v-for="(item,index) in videos" :class="{selected:index===page}">
              <router-link :to="{path: `/cases/id/${id}/video/${index}`}" :style="{backgroundImage: `url(${item.image})`}">
                <span>{{item.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Close from '@/components/close/Close';

  export default {
    name: 'CasesVideo',
    components: {
      'Close': Close
    },
    computed:{
      cases(){
        return this.$store.state.cases.cases;
      },
      id(){
				return this.$store.state.id;
			},
      current(){
				return this.cases[this.id];
			},
      page(){
        return this.$store.state.page;
      },
      videos(){
        return this.current.videos;
      },
      currentvideo(){
        return this.videos[this.page];
      },
      route(){
        return (this.$store.state.route.name==='cases-item-video') && this.page!==null && this.currentvideo;
      }
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

  .cases-video{
    background: rgba($black,.75);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: $overlay-z;
    display: flex;
    align-items: center;
    justify-content: center;

    @include minheight(){
      display: block;
  		position: absolute;
  		overflow-y: auto;
    }

    @include noboard(){
      background: $white;
      display: block;
    }

    .page{
      width: 779px;

      @media (max-width: 779px) {
        width: 90%;
      }

      @include minheight(){
        margin-left: auto;
        margin-right: auto;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      @include noboard(){
        width: 100% !important;
        margin: 40px auto 0 auto;
        position: relative;
        padding-top: 0;
        padding-bottom: 0;
      }

      &>div{
        padding-top: 527/779 * 100%;
        background-image: url(~@/assets/images/case/bg_case_watch.png);
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        position: relative;

        @include noboard(){
          background: transparent;
          padding-top: 0;
          height: auto;
        }

        .content{
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          @include noboard(){
            position: relative;
            padding-top: 15px;
          }

          .video{
            width: 80%;
            background: $black;
            margin-bottom: 15px;

            @include noboard(){
              width: 95%;
            }

            &>div{
              padding-top: 9/16 * 100%;
              background: $black;
              position: relative;

              iframe{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
              }
            }
          }

          ul{
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;

            @include noboard(){
              width: 95%;
              flex-wrap: wrap;
            }

            li{
              width: 24%;
              margin-right: 1%;

              // @include noboard(){
              //   width: 49%;
              //   margin-right: 0;
              // }





              &:last-child{
                margin-right: 0;
              }

              a{
                padding-top: 90/160 * 100%;
                display: block;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                background-color: $black;
                position: relative;

                &:after{
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background: $black;
                  top: 0;
                  left: 0;
                  opacity: .65;

                  transition: opacity $transition-speed $transition-ease;
                }

                span{
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  z-index: 1;

                  color: $white;
                  text-transform: uppercase;
                  text-align: center;

                  @include noboard(){
                    font-size: 11px;
                    line-height: 12px;
                  }
                }

                &:hover{
                  &:after{
                    opacity: .5;
                  }
                }
              }

              &.selected{
                a:after{
                  opacity: .3;
                }
              }
            }
          }
        }
      }

      @media (max-width: 779px) {
        width: 90%;
      }
    }
  }
</style>
