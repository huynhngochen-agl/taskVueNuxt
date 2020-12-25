<template>
        <header class="c-header">
           <div class="l-container">
                <div class="flex flex-jus-between l-header--top">
                    <figure>
                        <nuxt-link to="/"><img src="~/assets/img/common/logo.svg" alt="くふうカンパニー"></nuxt-link>
                    </figure>
                    <div class="c-menu">
                        <div class="c-menu--list is-hide">
                            <span class="hidden_pc c-menu--close"><span></span><span></span></span>
                            <ul>
                                <li>
                                    <p><span>企業・グループ情報</span></p>
                                    <ul>
                                        <li>
                                            <nuxt-link to="/about/info">企業・グループ情報トップ</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/about/info/philosophy">企業理念</nuxt-link>
                                            <!-- <a class="link" href="/about/info/philosophy">企業理念</a> -->
                                        </li>
                                        <li>
                                            <nuxt-link to="/about/info/products">事業・サービス概要</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/about/info/boards">役員一覧</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/about/info/profile">会社概要</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/about/info/access">アクセス</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/about/info/history">沿革</nuxt-link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p><span>株主・投資家情報</span></p>
                                    <ul>
                                        <li>
                                             <nuxt-link to="/about/ir">株主・投資家情報トップ</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/about/ir/news">IRニュース</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/about/ir/library">IRライブラリ</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/about/ir/financial">株式情報</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/about/ir/calendar">IRカレンダー</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/about/ir/notice">電子公告</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/about/ir/disclosure_policy">ディスクロージャー・ポリシー</nuxt-link>
                                        </li>
                                        <li>
                                             <nuxt-link to="/about/ir/disclaimer">免責事項</nuxt-link>
                                        </li>
                                    </ul>
                                </li>
                                <li><nuxt-link class="link" to="/about/pressroom"><span>プレスルーム</span></nuxt-link></li>
                                <li><a href="https://entrepreneur.kufu.co.jp/" class="link"><span>採用情報</span></a></li>
                            </ul>
                        </div>
                        <span class="hidden_pc c-menu--open"><span></span></span>
                    </div>
                </div>
           </div>
        </header>
</template>

<script>
export default {
    
}
</script>

<style>

</style>