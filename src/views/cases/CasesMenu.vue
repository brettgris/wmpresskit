<template>
	<div class="cases">
		<div class="container">
			<div class="synopsis">
				<p v-for="p in synopsis">{{p}}</p>
			</div>
			<ul>
				<li v-for="(item,key) in cases">
					<router-link :to="{ path: `/cases/id/${key}` }">
						<div class="hover ":style="{backgroundImage:`url(${item.hover})`}"></div>
						<div class="image ":style="{backgroundImage:`url(${item.menu})`}"></div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'CasesMenu',
		computed:{
			synopsis(){
				return this.$store.state.cases.synopsis;
			},
			cases(){
				return this.$store.state.cases.cases;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.cases{
		padding: 25px 0;
		min-height: 100%;
		background: url(~@/assets/images/case/bg_synopsis.jpg);
		background-position: center bottom;
		background-repeat: no-repeat;
		background-size: cover;

		.synopsis{

			padding: 5vh 0;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;

			&:before{
				content: "";
				position: absolute;
				background: url(~@/assets/images/case/synopsis_brush.png);
				background-position: center center;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				width: 135%;
				height: 120%;
				z-index: 0;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);

				@include mobile(){
					width: 175%;
					height: 110%;
				}
			}

			p{
				font-size: 16px;
				line-height: 21px;
				width: 80%;
				position: relative;
				z-index: 1;
				text-align: justify;

				@include mobile(){
					width: 100%;
					font-size: 12px;
					line-height: 16px;
				}
			}
		}


		ul{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 60px;

			@include mobile(){
				margin-top: 25px;
			}

			li{
				width: $case-width;
				//box-shadow: $box-shadow;
				margin-right: $spacing*2;
				position: relative;

				@include mobile(){
					margin-right: 10px;
				}


				a{
					display: block;
					padding-top: $case-ratio * 100%;
					position: relative;
					z-index: 1;

					.hover{
						width: 120%;
						height: 120%;
						position: absolute;
						top: -10%;
						left: 50%;
						transform: translateX(-50%) translateY(15%);
						opacity: 0;
						z-index: 0;
						background-repeat: no-repeat;
						background-position: center center;
						background-size: 100% 100%;
						transition: all $transition-speed*1.5 $transition-ease;
					}

					.image{
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						z-index: 1;
						mix-blend-mode: multiply;
						background-repeat: no-repeat;
						background-position: center center;
						background-size: contain;

					}

					@media (pointer: fine) {
						&:hover{
							.hover{
								opacity: 1;
								height: 120%;
								transform: translateX(-50%) translateY(0%);
							}
						}
					}
				}

				&:last-child{
					margin-right: 0;
				}
			}
		}
	}
</style>
