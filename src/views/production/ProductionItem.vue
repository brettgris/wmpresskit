<template>
	<div class="item">
		<div class="board-wrapper">
			<div>
				<div class="board">
					<div class="content">
						<Bio :data="current"/>
						<Pictures :data="current" />
						<Close :data="production" :page=" 'production' " />
					</div>
				</div>
			</div>
		</div>

		<Arrows
			:next="next"
			:prev="prev"
			path="production"
			:length="production.length"

		/>
	</div>
</template>

<script>
	import Arrows from '@/components/arrows/Arrows';
	import Close from '@/components/close/Close';
	import Pictures from '@/components/pictures/Pictures';
	import Bio from '@/components/bio/Bio';

	export default{
		name: 'ProductionItem',
		components: {
			'Arrows': Arrows,
			'Close': Close,
			'Pictures': Pictures,
			'Bio': Bio
		},
		computed:{
			production(){
				return this.$store.state.production.items;
			},
			id(){
				return this.$store.state.id;
			},
			current(){
				return this.production[this.id];
			},
			next(){
				return (this.id+1<this.production.length) ? this.id+1 : 0;
			},
			prev(){
				return (this.id-1>=0) ? this.id-1 : this.production.length-1;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.item{

	}
</style>
