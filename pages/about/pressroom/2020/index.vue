<template>
     <main id="presroom" class="page-second">
            <section class="l-presroom1">
                <h2 class="c-title3 text-center"><span>プレスルーム</span><small class="mont">Press Room</small></h2>
                <div class="l-presroom1--menu flex flex-jus-center flex-align-item-center">
                    <ul class="flex flex-jus-start">
                        <li><nuxt-link to="/about/pressroom/">最新1年分</nuxt-link></li>
                        <li><span>2020</span></li>
                        <li><nuxt-link to="/about/pressroom/2019">2019</nuxt-link></li>
                    </ul>
                </div>
                <div class="flex flex-jus-center">
                    <div class="l-presroom1--info u-pd--bt">
                        <ul class="l-news">
                            <li  v-for="(pressroom, index) in pressrooms" v-bind:key="index">
                                <nuxt-link target="_blank" to="/files/2020082807052003981.pdf">
                                    <span class="date">{{ date(pressroom.modified)}}</span>
                                <span class="category" v-for="(test, index) in getCategory(pressroom.categories)" v-bind:key="index">
                                    {{test}}</span>
                                <p>{{pressroom.title.rendered}}<i class="u-pdf"></i></p></nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="l-list-link">
                <div class="l-container">
                    <h3>くふうカンパニーグループ各社の最新情報は下記をご参照ください</h3>
                    <ul>
                        <li><a href="https://www.mwed.co.jp/press" target="_blank" rel="noopener noreferrer">株式会社みんなのウェディング</a></li>
                        <li><a href="https://rcubeinc.com/press_blog/" target="_blank" rel="noopener noreferrer">株式会社アールキューブ</a></li>
                        <li><a href="https://corporate.o-uccino.jp/news/" target="_blank" rel="noopener noreferrer">株式会社オウチーノ</a></li>
                        <li><a href="https://www.sevensignatures.com/press" target="_blank" rel="noopener noreferrer">株式会社Seven Signatures International</a></li>
                        <li><a href="https://zaim.co.jp/news/" target="_blank" rel="noopener noreferrer">株式会社Zaim</a></li>
                        <li><a href="https://kurashi-kufu.com/list_news.html" target="_blank" rel="noopener noreferrer">株式会社くらしにくふう</a></li>
                    </ul>
                </div>
            </section>
        </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
    mounted () {
            this.$store.dispatch('loadPressrooms'),
            this.$store.dispatch('loadCats')
        },
        computed: mapState([
            'pressrooms',
            'categories',
        ]), 
        methods: {
            date: function (date) {
                return moment(date).format('YYYY/MM/DD');
            },
            getCategory(category) {
                // console.log(category)
                // console.log(this.categories)
                var name = new Array();
               for (let index = 0; index < category.length; index++) {
                   const test = category[index];
                //    console.log(element)
                    this.categories.forEach(element => {
                        if(element.id == test){
                            name[index] = element.name;
                            console.log(name)
                        }
                });
                
               }
            //     this.tests = name;
            //    console.log(this.tests)
            return name;
            }
      },
}
</script>