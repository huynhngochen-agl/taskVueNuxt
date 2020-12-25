<template>
    <main id="ir-news" class="page-second">
            <section class="l-ir--news">
                <h2 class="c-title3 text-center"><span>IRニュース</span><small class="mont">IR News</small></h2>
                <h3>最新IRニュース</h3>
                <div class="flex flex-jus-center">

                    <div  class="l-ir--news__info">
                        <ul class="l-news">
                            <li  v-for="(post, index) in posts" v-bind:key="index">
                                <a href="/files/2020082807052003981.pdf" target="_blank" rel="noreferrer noopener"><span class="date">
                                <p>{{ date(post.modified)}}</p></span>
                                <span class="category" >{{getCategory(post.categories)}}</span>
                                <p>{{post.title.rendered}}<i class="u-pdf"></i></p></a>
                            </li>      
                        </ul>
                        
                    </div>
                </div>
               
                
                <div class="l-news--btn text-center">
                    <nuxt-link class="c-btn2 flex flex-align-item-center flex-jus-center" to="/about/ir/news/latest_year/">
                        <span>IRニュース一覧はこちら</span></nuxt-link>
                </div>
            </section>
        </main>
</template>
 

<script>

import { mapState } from 'vuex'
export default {
        mounted () {
            this.$store.dispatch('loadPosts'),
            this.$store.dispatch('loadCats')
        },
        computed: mapState([
            'posts',
            'categories',
        ]), 
        methods: {
            date: function (date) {
                return moment(date).format('YYYY/MM/DD');
            },
            getCategory(category) {
                // console.log(category)
                // console.log(this.categories)
                var name ="";
                this.categories.forEach(element => {
                    if(element.id == category){
                        console.log(category)
                         name =  element.name;
                    }
                });
                return name;
               
            }
      },
 
}
        

</script>