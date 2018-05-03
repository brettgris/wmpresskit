<template>
	<ul class="pictures" v-if="pictures">
		<li class="picture" v-for="pic in pictures" :style="getStyle(pic,null)" v-if="hidePicture(pic.hide)"></li>
	</ul>
</template>

<script>
	export default {
		name: 'Picture',
		props: ['data'],
		computed:{
			pictures(){
				return this.data.pictures;
			}
		},
		methods:{
      getStyle(obj,pObj){
        return this.$percentStyle(obj,pObj);
      },
			hidePicture(str){
        if (!str) return true;
        else return str!==this.$store.state.route.name;
      }
    }
	}
</script>
