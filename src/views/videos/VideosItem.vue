<template>
	<div class="item">
		<div class="board-wrapper">
			<div>
				<div class="board">
					<div class="content">

						<PageMenu :data="current" page=" 'videos/id/o' ">
							<div class="video pr" :style="getStyle(current.video, current.menu.style)">
								<div class="player">
									<iframe :src="current.path" frameBorder="0"></iframe>
								</div>
							</div>
						</PageMenu>

						<Close :data="videos" :page=" 'videos' " />
					</div>
				</div>
			</div>
		</div>

		<Arrows
			:next="next"
			:prev="prev"
			path="videos"
			:length="videos.length"
		/>
	</div>
</div>
</template>

<script>
	import Arrows from '@/components/arrows/Arrows';
	import Close from '@/components/close/Close';
	import PageMenu from '@/components/pagemenu/PageMenu';

	export default{
		name: 'VideosItem',
		components: {
			'Arrows': Arrows,
			'Close': Close,
			'PageMenu': PageMenu
		},
		computed:{
			videos(){
				return this.$store.state.videos.items;
			},
			id(){
				return this.$store.state.id;
			},
			current(){
				return this.videos[this.id];
			},
			next(){
				return (this.id+1<this.videos.length) ? this.id+1 : 0;
			},
			prev(){
				return (this.id-1>=0) ? this.id-1 : this.videos.length-1;
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

	.item{
		.video{
			text-align: center;

			.headline{
				height: 45px;
				background: pink;
			}

			.player{
				padding-top: 9/16 * 100%;
				background: $black;
				position: relative;

				iframe{
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0; bottom: 0;
					left: 0; right: 0;
					color: $white;
					overflow: hidden;
				}
			}
		}
	}
</style>
