<template>
	<div class="item">
		<div class="board-wrapper">
			<div>
				<div class="board">
					<div class="content">
						<Bio :data="current" />
						<Pictures :data="current" />
						<Close :data="team" :page=" 'team' " />
					</div>
				</div>
			</div>
		</div>

		<Arrows
			:next="next"
			:prev="prev"
			path="team"
			:length="team.length"
		/>
	</div>
</template>

<script>
	import Arrows from '@/components/arrows/Arrows';
	import Close from '@/components/close/Close';
	import Pictures from '@/components/pictures/Pictures';
	import Bio from '@/components/bio/Bio';

	export default {
		name: 'TeamItem',
		components: {
			'Arrows': Arrows,
			'Close': Close,
			'Pictures': Pictures,
			'Bio': Bio
		},
		computed:{
			team(){
				return this.$store.state.team.items;
			},
			id(){
				return this.$store.state.id;
			},
			current(){
				return this.team[this.id];
			},
			next(){
				return (this.id+1<this.team.length) ? this.id+1 : 0;
			},
			prev(){
				return (this.id-1>=0) ? this.id-1 : this.team.length-1;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.item{

	}
</style>
