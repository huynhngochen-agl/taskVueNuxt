import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios,axios)
// export const state = () => ({
//     posts:[],
//     nameFilter:'',
//     categories: [],
//     posts5: [],
//   })
// export const mutations = {
//         SET_COURSES(state,posts){
//             state.posts=posts
//         },
//         SET_CATEGORIES(state,categories){
//             state.categories=categories
//         },
//         SET_5POSTS(state,posts5){
//             state.posts5=posts5
//         },
//     }
    
export default {
    // state:{
    //     posts:[],
    //     nameFilter:'',
    //     categories: [],
    //     posts5: [],
    // },
    state: () => ({
        posts:[],
        nameFilter:'',
        categories: [],
        posts5: [],
        pressroom5: [],
        pressrooms: [],
      }),
      mutations: {
        SET_COURSES(state,posts){
            state.posts=posts
        },
        SET_CATEGORIES(state,categories){
            state.categories=categories
        },
        SET_5POSTS(state,posts5){
            state.posts5=posts5
        },
        SET_PRESSROOMS5(state,pressroom5){
            state.pressroom5=pressroom5
        },
        SET_PRESSROOMS(state,pressrooms){
            state.pressrooms=pressrooms
        },
      },
    actions:{
        loadPosts({commit}){
            axios
            .get('https://103.77.160.168/~aglstaff/ngochen/taskVueNuxt/wp-json/wp/v2/posts/')
            .then(res=>res.data)
            .then(posts=>{
                commit('SET_COURSES',posts)
            })
        },
        loadCats({commit}){
            axios
            .get('https://103.77.160.168/~aglstaff/ngochen/taskVueNuxt/wp-json/wp/v2/categories/')
            .then(res=>res.data)
            .then(categories=>{
                commit('SET_CATEGORIES',categories)
            })
        },
        loadPosts5({commit}){
            axios
            .get('https://103.77.160.168/~aglstaff/ngochen/taskVueNuxt/wp-json/wp/v2/posts/?per_page=5')
            .then(res=>res.data)
            .then(posts5=>{
                commit('SET_5POSTS',posts5)
            })
        },
        loadPressrooms5({commit}){
            axios
            .get('https://103.77.160.168/~aglstaff/ngochen/taskVueNuxt/wp-json/wp/v2/pressroom/?page=2')
            .then(res=>res.data)
            .then(pressroom5=>{
                commit('SET_PRESSROOMS5',pressroom5)
            })
        },
        loadPressrooms({commit}){
            axios
            .get('https://103.77.160.168/~aglstaff/ngochen/taskVueNuxt/wp-json/wp/v2/pressroom/')
            .then(res=>res.data)
            .then(pressrooms=>{
                commit('SET_PRESSROOMS',pressrooms)
            })
        },
    },
   
    // mutations:{
    //     SET_COURSES(state,posts){
    //         state.posts=posts
    //     },
    //     SET_CATEGORIES(state,categories){
    //         state.categories=categories
    //     },
    //     SET_5POSTS(state,posts5){
    //         state.posts5=posts5
    //     },
    // },
   
}