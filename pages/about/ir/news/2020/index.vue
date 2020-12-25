<template>
     <main id="ir-news" class="page-second">
            <section class="l-ir--news">
                <h2 class="c-title3 text-center"><span>IRニュース</span><small class="mont">IR News</small></h2>
                <div class="l-presroom1--menu flex flex-jus-center flex-align-item-center">
                    <ul class="flex flex-jus-start">
                        <li><nuxt-link to="/about/ir/news/latest_year/">最新1年分</nuxt-link></li>
                        <li><span>2020</span></li>
                        <li><nuxt-link to="/about/ir/news/2019/">2019</nuxt-link></li>
                        <li><nuxt-link to="/about/ir/news/2018/">2018</nuxt-link></li>
                    </ul>
                </div>
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
            moment(date) {
                return moment(date);
            },
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