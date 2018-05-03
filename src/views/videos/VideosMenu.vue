<template>
	<div class="videos">
		<ul>
			<li v-for="(item,key) in videos">
				<router-link :to="{path:`/videos/${key}`}">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
	export default{
		name: 'VideosMenu',
		computed:{
			videos(){
				return this.$store.state.videos;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.videos{

	}
</style>
