<template>
	<div class="menu">
		<div class="board-wrapper">
			<div>
				<div class="board">
					<div class="content">
						<PageMenu :data="team" :page=" 'team' " />
						<Pictures :data="team.menu" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageMenu from '@/components/pagemenu/PageMenu';
	import Pictures from '@/components/pictures/Pictures';

	export default {
		name: 'TeamMenu',
		components: {
			'PageMenu': PageMenu,
			'Pictures': Pictures
		},
		data(){
			return {
				current: null
			}
		},
		computed:{
			team(){
				return this.$store.state.team;
			}
		},
		methods:{
			onOver(id){
				this.current = id;
			},
			onLeave(id){
				this.current = null;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	// $paper-width: 306px;
	// $paper-height: 529px;
	// $paper-x: 640px;
	// $paper-y: 60px;
	// $paper-rotation: 0deg;
	// $paper-z: 1;
	//
	// $list-top: 145px;
	//
	// $menu-width: 225px;
	// $menu-height: 65px;

	.content{
		// .paper{
		// 	@include board-position($paper-width,$paper-height,$paper-x,$paper-y,$paper-rotation,$paper-z);
		// 	background-image: url(/images/team/paper.png);
		// 	position: relative;
		//
		// 	ul{
		// 		text-align: center;
		// 		position: absolute;
		// 		top: $list-top/$paper-height * 100%;
		// 		width: 100%;
		// 	}
		// }
	}
</style>
