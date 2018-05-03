<template>
	<div id="app">
		<Header />

		<div id="content" ref="content">
			<transition name="animate">
				<Menu  v-if="menushow" />
			</transition>
    		<router-view />
		</div>

		<Footer />
  	</div>
</template>

<script>
	import Header from '@/components/header/Header';
	import Menu from '@/components/menu/Menu';
	import Footer from '@/components/footer/Footer';

	export default{
		name: 'App',
		components: {
			'Header': Header,
			'Footer': Footer,
			'Menu': Menu
		},
		computed:{
			menushow(){
				return this.$store.state.menu;
			}
		},
		created(){
			this.setID(this.$route.params.id);
			this.setPage(this.$route.params.page);
		},
		mounted(){
			this.onResize();
      window.addEventListener("resize", this.onResize)
		},
		destroyed(){
			window.removeEventListener("resize", this.onResize)
		},
		watch:{
			'$route'(t,f){
				this.$refs.content.scrollTop = 0
			},
			'$route.params.id'(t,f){
				this.setID(t);
			},
			'$route.params.page'(t,f){
				this.setPage(t);
			}
		},
		methods:{
			setID(id){
				this.$store.dispatch("setID", id);
			},
			setPage(page){
				this.$store.dispatch("setPage", page);
			},
			onResize(){
				this.$store.dispatch("setSize", {
						width: window.innerWidth,
						height: window.innerHeight,
						ratio: window.innerWidth/window.innerHeight
				});
			}
		}
	}
</script>

<style lang="scss">
@import './styles/bootstrap.scss';
@import './styles/globals.scss';
@import './styles/type.scss';

html, body{
	width: 100%;
	height: 100%;
	position: relative;
}

#app {
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

#content{
	height: 100%;
	flex-grow: 1;
	position: relative;
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
