import Vue from 'vue';
import Vuex from 'vuex';

import Intro from '@/data/intro';
import Cases from '@/data/cases';
import Team from '@/data/team';
import Production from '@/data/production';
import Videos from '@/data/videos';
import PressMaterials from '@/data/pressmaterials';
import Footer from '@/data/footer';

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
		menu: false,
		intro: Intro,
		cases: Cases,
		team: Team,
		production: Production,
		videos: Videos,
		pressmaterials: PressMaterials,
		footer: Footer,
		id: 0,
      page: null,
      size: {
			width: 1024,
			height: 768,
			ratio: 1024/768
		}
	},
	mutations: {
		menu(state,payload){
			state.menu = payload;
		},
		id(state,payload){
			state.id = payload;
		},
      page(state,payload){
         state.page = payload;
      },
		size(state,payload){
			state.size = payload;
		}
	},
	actions: {
		toggleMenu({commit}){
			commit( "menu", !this.state.menu );
		},
		hideMenu({commit}){
			commit("menu", false);
		},
		setID({commit},id){
			commit("id",Number(id));
		},
      setPage({commit},page){
         commit("page",Number(page));
      },
		setSize({commit},size){
			commit("size",size);
		}
	}
})
