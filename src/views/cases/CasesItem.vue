<template>
	<div class="item">
		<CasesVideo />
		<div class="board-wrapper">
			<div>
				<div class="board">
					<div class="content">
						<Case :data="current" :id="id" />
						<Pictures :data="current" />
						<Close :data="cases" :page=" 'cases' " />
					</div>
				</div>
			</div>
		</div>

		<Arrows
			:next="next"
			:prev="prev"
			path="cases"
			:length="cases.length"
		/>
	</div>
</template>

<script>
	import Arrows from '@/components/arrows/Arrows';
	import Close from '@/components/close/Close';
	import Pictures from '@/components/pictures/Pictures';
	import Case from '@/components/case/Case';
	import CasesVideo from './CasesVideo';

	export default{
		name: 'CasesItem',
		components: {
			'Arrows': Arrows,
			'Close': Close,
			'Pictures': Pictures,
			'Case': Case,
			'CasesVideo': CasesVideo
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
			next(){
				return (this.id+1<this.cases.length) ? this.id+1 : 0;
			},
			prev(){
				return (this.id-1>=0) ? this.id-1 : this.cases.length-1;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.item{

	}
</style>
