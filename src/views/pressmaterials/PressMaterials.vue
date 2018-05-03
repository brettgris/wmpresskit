<template>
	<div class="pressmaterials">

		<div class="board-wrapper">
			<div>
				<div class="board">
					<div class="content">

						<PageMenu :data="pressmaterials" />
						<Pictures :data="pressmaterials.menu" />

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
		name: 'PressMaterials',
		components: {
			'PageMenu': PageMenu,
			'Pictures': Pictures
		},
		computed:{
			pressmaterials(){
				return this.$store.state.pressmaterials;
			},
			assets(){
				return this.pressmaterials.assets;
			},
			downloads(){
				return this.pressmaterials.downloads;
			},
			contacts(){
				return this.pressmaterials.contacts;
			}
		},
		methods:{
      getStyle(obj,pObj){
        return this.$percentStyle(obj,pObj);
      }
		}
	}
</script>

<style lang="scss">
	@import '~@/styles/variables.scss';

	.pressmaterials{

		a{
			color: $black;
		}

		.menu-headline{
			width: 65% !important;
		}

		.column{
			position: relative;

			&>div{
				text-align: center;

				h1{
					margin-bottom: 20px;
				}


			}
		}

		.contacts{
			li a span{
				display: block;
			}
		}
	}
</style>
