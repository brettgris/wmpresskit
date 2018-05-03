<template>
	<div class="production">
		<div class="board-wrapper">
			<div>
				<div class="board">
					<div class="content">
						<PageMenu :data="production" :page=" 'production' " />
						<Pictures :data="production.menu" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageMenu from '@/components/pagemenu/PageMenu';
	import Pictures from '@/components/pictures/Pictures';

	export default{
		name: 'ProductionMenu',
		components: {
			'PageMenu': PageMenu,
			'Pictures': Pictures
		},
		computed:{
			production(){
				return this.$store.state.production;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.production{

	}
</style>
