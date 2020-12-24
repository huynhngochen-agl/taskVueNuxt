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
      },
    actions:{
        loadPosts({commit}){
            axios
            .get('http://103.77.160.168/~aglstaff/ngochen/taskVueNuxt/wp-json/wp/v2/posts/')
            .then(res=>res.data)
            .then(posts=>{
                commit('SET_COURSES',posts)
            })
        },
        loadCats({commit}){
            axios
            .get('http://103.77.160.168/~aglstaff/ngochen/taskVueNuxt/wp-json/wp/v2/categories/')
            .then(res=>res.data)
            .then(categories=>{
                commit('SET_CATEGORIES',categories)
            })
        },
        loadPosts5({commit}){
            axios
            .get('http://103.77.160.168/~aglstaff/ngochen/taskVueNuxt/wp-json/wp/v2/posts/?per_page=5')
            .then(res=>res.data)
            .then(posts5=>{
                commit('SET_5POSTS',posts5)
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
    // computed: {
    //     postFilter(){
    //         var self = this
    //         return this.posts.filter(function(post){
    //             return post.title.rendered.toLowerCase().includes(self.nameFilter.toLowerCase());
    //         });
    //     },
    //    catFilter(){
    //         return this.categories.filter(function(category){
    //             return category.id;
    //         });
    //     }
    // },
   
}