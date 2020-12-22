import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
    
}).$mount('#ir-news')

$(document).ready(function(){
    $(".c-menu--list >ul>li").click(function(){
        $(this).find('ul').toggleClass('is-active');
        $(this).find('p span').toggleClass('is-show');
    });
    $(".c-menu-ft>li").click(function(){
        $(this).find('.c-menu-ft--child').toggleClass('is-active');
    });
    $(".c-menu--close").click(function(){
        $(".c-menu--list").addClass('is-hide');
        $(this).hide();
    });
    $(".c-menu--open").click(function(){
        $(".c-menu--list").removeClass('is-hide');
        $(".c-menu--close").show();
    });
    $(".l-presroom1--btn .c-btn2").click(function(){
        $(this).hide();
        $(".l-presroom1--info .l-news+.l-news").show();
        $(".l-presroom1--info .l-news:first-child").hide();
    });
    $('.jss1').on('click', function(e) {
        $('.jss1').removeClass('is-act');
        $(this).addClass('is-act');
    });
    $('html').click(function(event) {
        if ($(event.target).closest('.jss1').length === 0) {
            $('.jss1').removeClass('is-act');
        }
    });
  });