<template>
	<div class="intro fullvideo">
		<video
			ref="videoplayer"
			:src="video.p"
			autoplay
			muted
			playsInline
			:width="video.w"
			:height="video.h"
		></video>
		<div class="introbtn" :class="{visible:finished}">
			<router-link to="/cases" >
				<img :src="intro.button" />
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Intro',
		data(){
			return {
				finished: false
			}
		},
		computed:{
			intro(){
				return this.$store.state.intro;
			},
			video(){
				const r = this.$store.state.size.ratio;

				if (r>1.6) {
					return {
						p: this.intro.video,
						w: this.$store.state.size.width + 'px',
						h: this.$store.state.size.width/1.6 + 'px'
					}
				} else if (r> 1) {
					return {
						p: this.intro.video,
						w: this.$store.state.size.height*1.6 + 'px',
						h: this.$store.state.size.width + 'px'
					}
				} else if (r> .8){
					return {
						p: this.intro.mobile,
						w: this.$store.state.size.width + "px",
						h: this.$store.state.size.width/.8 + 'px'
					}
				} else if (r> .625){
					return {
						p: this.intro.mobile,
						w: this.$store.state.size.height*.8 + "px",
						h: this.$store.state.size.height + 'px'
					}
				} else {
					return {
						p: this.intro.tablet,
						w: this.$store.state.size.height*.625 + "px",
						h: this.$store.state.size.height + 'px'
					}
				}
			}
		},
		mounted(){
			const vp = this.$refs.videoplayer;
			if (vp) vp.addEventListener("ended",this.onVideoEnd);
		},
		destroyed(){
			const vp = this.$refs.videoplayer;
			if (vp) vp.removeEventListener("ended",this.onVideoEnd);
		},
		methods:{
			onVideoEnd(){
				this.finished = true;
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.intro{
		width: 100%;
		height: 100%;

		.introbtn {
			position: absolute;
			z-index: 10;
			bottom: 13vh;
			left: 50%;
			transform: translateX(-50%);
			opacity: 0;

			@include noboard(){
				bottom: 5vh;
			}

			transition: opacity $transition-speed $transition-ease;

			&.visible{
				opacity: 1;
			}
		}
	}
</style>
