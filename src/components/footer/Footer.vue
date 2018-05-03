<template>
	<footer class="footer container-fluid">
		<p class="copyright" v-html="footer.copyright"></p>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		computed:{
			footer(){
				return this.$store.state.footer;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.footer{
		background:$black;
		color: $medium-grey;
		z-index: $footer-z;
		position: relative;

		p{
			font-size: 10px;
			line-height: 12px;

			@include mobile(){
				font-size: 8px;
				line-height: 10px;
			}
		}
	}
</style>
