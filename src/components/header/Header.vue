<template>
	<header class="header">
		<div>
			<a @click="toggleMenu" class="icon">
				<font-awesome-icon :icon="icon" />
			</a>
			<router-link to="/" @click.native="hideMenu" class="title-art"></router-link>
		</div>
		<a target="_blank" href="http://starz.com" class="starz"></a>
	</header>
</template>

<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

	export default {
		name: 'Header',
		components:{
			'FontAwesomeIcon': FontAwesomeIcon
		},
		computed:{
			menu(){
				return this.$store.state.menu;
			},
			icon(){
				return (!this.menu) ? ['fal', 'bars'] : ['fal', 'times']
			}
		},
		methods: {
			toggleMenu(){
				this.$store.dispatch('toggleMenu');
			},
			hideMenu(){
				this.$store.dispatch('hideMenu');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.header{
		background: $black;
		color: $white;
		height: $header-height;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 $spacing;
		z-index: $header-z;
		position: relative;

		& > div{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-grow: 1;
		}

		a{
			&.title-art{
				background-image: url(~@/assets/images/wrong_man_ta.jpg);
				background-size: contain;
				background-position: left center;
				background-repeat: no-repeat;
				width: 265px;
				height: $header-height - 10;

				@include mobile(){
					width: 175px;
				}
			}

			&.icon{
				margin-right: $spacing;
				font-size: 30px;
				width: 26px;

				@include mobile(){
					font-size: 25px;
					width: 18px;
				}
			}

			&.starz{
				background-image: url(~@/assets/images/starz_logo.svg);
				background-size: contain;
				background-position: right center;
				background-repeat: no-repeat;
				width: 150px;
				height: $header-height - 20;
				flex-grow: 1;

				@include mobile(){
					width: 50px;
				}
			}
		}

	}
</style>
