<template>
  <div class="paper" :style="getStyle(menu.style, null)">
    <div class="headline pr ipt" v-if="menu.pageheadline" :style="getStyle(menu.pageheadline, menu.style)"></div>

    <slot></slot>

    <div class="menu-list pr" v-for="(section,sindex) in menu.sections" :style="sectionStyle(section, menu.style)" v-if="hideMenu(section.hide)">
      <h2 class="menu-headline" :style="getStyle(section.headline, section.style)"></h2>
      <ul>
        <li v-for="(item,index) in items">
          <div v-if="item.section===sindex">

            <a v-if="item.href" :href="item.href" target="_blank" :style="itemStyle(item.menu, section.list, section.style)">
              <span v-if="item.hover" :style="{backgroundImage:`url(${item.hover})`}"></span>
            </a>

            <router-link v-else :to="{path:`/${page}/id/${index}`}" :style="itemStyle(item.menu, section.list, section.style)">
              <span v-if="item.hover" :style="{backgroundImage:`url(${item.hover})`}"></span>
            </router-link>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'PageMenu',
    props:['data','page'],
    computed:{
      menu(){
        return this.data.menu;
      },
      items(){
        return this.data.items;
      }
    },
    methods:{
      sectionStyle(section, mStyle){
        const rn = this.$store.state.route.name;
        if ( section[rn] ) return this.getStyle(section[rn], mStyle);
        else return this.getStyle(section.style, mStyle);
      },
      getStyle(obj,pObj){
        return this.$percentStyle(obj,pObj);
      },
      itemStyle(img, obj,pObj){
        obj.image = img;
        return this.getStyle(obj,pObj);
      },
      hideMenu(str){
        if (!str) return true;
        else return str!==this.$store.state.route.name;
      }
    }
  }
</script>
