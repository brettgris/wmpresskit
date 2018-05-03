<template >
	<nav class="menu">
		<ul>
			<li >
				<router-link to="/cases">Cases</router-link>
			</li>
			<li>
				<router-link to="/team">Expert Team</router-link>
			</li>
			<li>
				<router-link to="/production">Production</router-link>
			</li>
			<li class="small">
				- <router-link to="/production/id/0">Joe Berlinger</router-link>
			</li>
			<li class="small">
				- <router-link to="/production/id/1">Erica Sashin</router-link>
			</li>
			<li class="small">
				- <router-link to="/production/additional">Additonal Producer Bios</router-link>
			</li>
			<li>
				<a href="https://mediaroom.starz.com/" target="_blank" @click.native="hideMenu">Screening Room</a>
			</li>
			<li>
				<router-link to="/pressmaterials">Press Materials</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name: 'Menu',
		methods: {
			hideMenu(){
				this.$store.dispatch('hideMenu');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	.menu{
		position: absolute;
		top: 0; bottom: 0;
		left: 0;
		height: 100%;
		transform: translateX(0%);
		z-index: $menu-z;

		&.animate-enter-active, &.animate-leave-active {
			transition: all $transition-speed $transition-ease;
		}
		&.animate-enter, &.animate-leave-to /* .fade-leave-active below version 2.1.8 */ {
			transform: translateX(-100%);
		}

		ul{
			background: $black;
			height: 100%;
			opacity: 1;
			padding: 30px;

			@include mobile(){
				padding-top: 10px;
			}

			li{
				margin-bottom:5px;
				color: $light-grey;

				&:last-child{
					margin-bottom: 0;
				}

				a{
					color: $light-grey;
					text-transform: uppercase;
					letter-spacing: 2px;

					@include mobile(){
						font-size: 18px;
						line-height: 30px;
					}

					&:hover{
						color: $white;
					}
				}



				&.small{
					font-size: 12px;
					margin-left: 15px;

					a{
						margin-left: 5px;
						text-transform: inherit;
						letter-spacing: 1px;

							@include mobile(){
								font-size: 16px;
								line-height: 26px;
							}

					}
				}
			}
		}
	}
</style>
