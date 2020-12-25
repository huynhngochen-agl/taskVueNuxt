<template>
     <main id="info" class="page-second">
            <section class="l-info1">
                <h2 class="c-title3 text-center"><span>企業・グループ情報</span><small class="mont">Corporate and Group Information</small></h2>
                <figure class="c-mv"><img src="~/assets/img/about/info/mv.jpg" alt="企業・グループ情報"></figure>
            </section>
           <section class="l-info2">
                <ul class="flex flex-align-item-center flex-jus-center flex-container">
                    <li><nuxt-link to="/about/info/philosophy">企業理念</nuxt-link></li>
                    <li><nuxt-link to="/about/info/products">事業・サービス概要</nuxt-link></li>
                    <li><nuxt-link to="/about/info/boards">役員一覧</nuxt-link></li>
                    <li><nuxt-link to="/about/info/profile">会社概要</nuxt-link></li>
                    <li><nuxt-link to="/about/info/access">アクセス</nuxt-link></li>
                    <li><nuxt-link to="/about/info/history">沿革</nuxt-link></li>
                </ul>
           </section>
        </main>
</template>

<script>
export default {
    
}
</script>