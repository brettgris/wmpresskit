<template>
	<div class="arrows" v-if="length>1">
		<router-link :to="{ path: `/${path}/id/${prev}` }">
			<FontAwesomeIcon :icon="['fas', 'caret-left']" />
		</router-link>
		<router-link :to="{ path: `/${path}/id/${next}` }">
			<FontAwesomeIcon :icon="['fas', 'caret-right']" />
		</router-link>
	</div>
</template>

<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

	export default {
		name: 'Arrows',
		props: ['next','prev','length','path'],
		components:{
			'FontAwesomeIcon': FontAwesomeIcon
		}
	}
</script>

<style lang="scss" scoped>
	@import '~@/styles/variables.scss';

	.arrows{
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: $arrows-z;
		top: 0; bottom: 0;
		left: 0; right: 0;
		pointer-events: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 $spacing;

		a{
			pointer-events: auto;
			color: $white;
			font-size: 100px;
			opacity: $link-opacity-off;

			@include noboard(){
				color: $black;
				font-size: 60px;
			}

			&:hover{
				opacity: $link-opacity-hover;

				@include tablet(){
					opacity: $link-opacity-off;
				}
			}


		}
	}
</style>
