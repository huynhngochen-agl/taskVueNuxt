<template>
    <main id="c-top">
            <section class="l-mv">
                <div class="l-container">
                    <div class="l-mv--item">
                        <div class="l-mv--item--title">
                            <h1>くふうで生活を<br>賢く・楽しく</h1>
                            <p>人生の大切なイベントを応援したい。</p>
                        </div>
                        <figure class="text-center">
                            <img src="~/assets/img/top/img1.svg" alt="くふうで生活を賢く・楽しく">
                        </figure>
                    </div>
                </div>
            </section>
            <section class="l-top1">
                <div class="l-container">
                    <div class="l-top1--item">
                        <div class="c-box c-box1">
                            <figure><img src="~/assets/img/top/img-top1-small1.svg" class="hidden_pc" alt="結婚に"></figure>
                            <dl>
                                <dt><h2>結婚に<i class="c-light" data-animate-in="scale" data-animate-in-delay="100"></i></h2></dt>
                                <dd>結婚式をもっと自由に。もっと楽しく。<br>どこでも、何度でも！<br>素敵な結婚式を増やします。</dd>
                            </dl>
                        </div>
                        <div class="c-box c-box2">
                            <figure><img src="~/assets/img/top/img-top1-small2.svg" class="hidden_pc" alt="住まいに"></figure>
                            <dl>
                                <dt><h2>住まいに<i class="c-light" data-animate-in="scale" data-animate-in-delay="100"></i></h2></dt>
                                <dd>住まいの売り買いって、難しそう。<br>もっと気軽に、もっと賢くできるはず。<br>住まいに対する疑問やストレスを減らします。</dd>
                            </dl>
                        </div>
                        <div class="c-box c-box3">
                            <figure><img src="~/assets/img/top/img-top1-small3.svg" class="hidden_pc" alt="お金に"></figure>
                            <dl>
                                <dt><h2>お金に<i class="c-light" data-animate-in="scale" data-animate-in-delay="100"></i></h2></dt>
                                <dd>お金って身近だけど、よくわからない。<br>しかし、とても重要。<br>お金に関して「学ぶ」、「問題を解決する」ことを応援します。</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <section class="l-top2">
                <div class="l-container">
                    <h2 class="text-center c-title1">
                        <i class="c-light" data-animate-in="scale" data-animate-in-delay="100"></i>には、<br><span>わかった</span>と<span>できた</span><br>の両方が必要です
                    </h2>
                    <figure class="text-center">
                        <img src="~/assets/img/top/img1-top2.svg" alt="には、わかったとできたの両方が必要です">
                    </figure>
                    <figure class="text-center hidden_sp">
                        <img src="~/assets/img/top/img4-top2.svg" alt="には、わかったとできたの両方が必要です">
                    </figure>
                    <figure class="text-center hidden_pc">
                        <img src="~/assets/img/top/img2-top2.svg" alt="には、わかったとできたの両方が必要です">
                    </figure>
                    <figure class="text-center hidden_pc">
                        <img src="~/assets/img/top/img3-top2.svg" alt="には、わかったとできたの両方が必要です">
                    </figure>
                </div>
            </section>
            <section class="l-top3 text-center">
                <div class="l-container">
                    <h2 class="c-title1">
                        くふうグループが持つ<span>機能</span>で、<br><i class="c-light" data-animate-in="scale" data-animate-in-delay="100"></i>の実現を応援します。
                    </h2>
                    <figure>
                        <img class="hidden_sp" width="807" src="~/assets/img/top/img-top3-pc.svg" alt="くふうグループが持つ機能で、の実現を応援します。">
                        <img class="hidden_pc" src="~/assets/img/top/img-top3-sp.svg" alt="くふうグループが持つ機能で、の実現を応援します。">
                    </figure>
                    <p>ひとつ、またひとつ、増やしていきます。</p>
                </div>
            </section>
            <section class="l-top4">
                <div class="l-container">
                    <h2 class="c-title2">
                        ニュース<small class="mont">News</small>
                    </h2>
                    <ul class="l-news">
                        <li  v-for="(pressroom, index) in pressroom5" v-bind:key="index">
                                <nuxt-link target="_blank" to="/files/2020082807052003981.pdf">
                                    <span class="date">{{ date(pressroom.modified)}}</span>
                                <span class="category" v-for="(test, index) in getCategory(pressroom.categories)" v-bind:key="index">
                                    {{test}}</span>
                                <p>{{pressroom.title.rendered}}<i class="u-pdf"></i></p></nuxt-link>
                        </li>
                    </ul>
                    <div class="c-list-btn flex flex-jus-center flex-container">
                        <nuxt-link class="c-btn1" to="/about/pressroom">プレスルームはこちら</nuxt-link>
                        <nuxt-link class="c-btn1" to="/about/ir/news">IRニュースはこちら</nuxt-link>
                    </div>
                </div>
            </section>
        </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
        data: {
            tests: [],
        },
       script: [
        {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css",
        },
      ],
    };
  },
  mounted () {
            this.$store.dispatch('loadPressrooms5'),
            this.$store.dispatch('loadCats')
        },
        computed: mapState([
            'pressroom5',
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

<style>

</style>
