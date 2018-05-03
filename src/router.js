import Vue from 'vue';
import Router from 'vue-router';

import Store from './store';

import Intro from './views/intro/Intro';

import CasesMenu from './views/cases/CasesMenu';
import CasesItem from './views/cases/CasesItem';

import TeamMenu from './views/team/TeamMenu';
import TeamItem from './views/team/TeamItem';

import ProductionMenu from './views/production/ProductionMenu';
import ProductionItem from './views/production/ProductionItem';

import VideosMenu from './views/videos/VideosMenu';
import VideosItem from './views/videos/VideosItem';

import PressMaterials from './views/pressmaterials/PressMaterials';

Vue.use(Router)

const router = new Router({
   mode: 'hash',
  	routes: [
	   {
	      path: '/',
	      name: 'intro',
	      component: Intro
		},

		{
	      path: '/cases',
	      name: 'cases-menu',
	      component: CasesMenu
		},{
	      path: '/cases/id/:id',
	      name: 'cases-item',
	      component: CasesItem
		},,{
	      path: '/cases/id/:id/video/:page',
	      name: 'cases-item-video',
	      component: CasesItem
		},

		{
			path: '/team',
	      name: 'team-menu',
	      component: TeamMenu
		},{
			path: '/team/id/:id',
	      name: 'team-item',
	      component: TeamItem
		},


		{
			path: '/production',
	      name: 'production-menu',
	      component: ProductionMenu
		},{
			path: '/production/additional',
	      name: 'production-menu-additional',
	      component: ProductionMenu
		},{
			path: '/production/id/:id',
	      name: 'production-item',
	      component: ProductionItem
		},

		// {
		// 	path: '/videos',
	   //    name: 'videos-menu',
	   //    component: VideosMenu
		// },

		// {
		// 	path: '/videos/id/:id',
	   //    name: 'videos-item',
	   //    component: VideosItem
		// },

		{
			path: '/pressmaterials',
	      name: 'pressmaterials',
	      component: PressMaterials
		}
  	]
});

router.beforeEach( (t,f,next)=>{
   Store.dispatch("hideMenu");
   next();
});

export default router;
