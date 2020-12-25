<template>
        <footer class="c-footer">
            <div class="l-container">
                <h2 class="text-center">
                    <img src="~/assets/img/common/logo_ft.svg" alt="くふうカンパニー">
                </h2>
                <ul class="c-menu-ft">
                    <li>
                        <p>企業・グループ情報</p>
                        <div class="c-menu-ft--child">
                            <nuxt-link to="/about/info">企業・グループ情報トップ</nuxt-link>
                            <nuxt-link to="/about/info/philosophy">企業理念</nuxt-link>
                            <nuxt-link to="/about/info/products">事業・サービス概要</nuxt-link>
                            <nuxt-link to="/about/info/boards">役員一覧</nuxt-link>
                            <nuxt-link to="/about/info/profile">会社概要</nuxt-link>
                            <nuxt-link to="/about/info/access">アクセス</nuxt-link>
                            <nuxt-link to="/about/info/history">沿革</nuxt-link>
                        </div>
                    </li>
                    <li>
                        <p>株主・投資家情報</p>
                        <div class="c-menu-ft--child">
                            <nuxt-link to="/about/ir">株主・投資家情報トップ</nuxt-link>
                            <nuxt-link to="/about/ir/news">IRニュース</nuxt-link>
                            <nuxt-link to="/about/ir/library">IRライブラリ</nuxt-link>
                            <nuxt-link to="/about/ir/financial">株式情報</nuxt-link>
                            <nuxt-link to="/about/ir/calendar">IRカレンダー</nuxt-link>
                            <nuxt-link to="/about/ir/notice">電子公告</nuxt-link>
                            <nuxt-link to="/about/ir/disclosure_policy">ディスクロージャー・ポリシー</nuxt-link>
                            <nuxt-link to="/about/ir/disclaimer">免責事項</nuxt-link>
                        </div>
                    </li>
                    <li>
                        <p class="hidden_sp">プレスルーム</p>
                        <nuxt-link to="/about/pressroom">プレスルーム</nuxt-link>
                    </li>
                    <li>
                        <p class="hidden_sp Footer-module--dummyLabel--1HPta">採用情報</p>
                        <a href="https://entrepreneur.kufu.co.jp/">採用情報</a>
                    </li>
                    <li>
                        <p class="hidden_sp">その他</p>
                        <nuxt-link to="/privacypolicy">プライバシーポリシー</nuxt-link>
                        <hr class="hidden_pc">
                        <nuxt-link to="/security">情報セキュリティに関する方針</nuxt-link>
                        <hr class="hidden_pc">
                        <nuxt-link to="/contact">お問い合わせ</nuxt-link>
                    </li>
                </ul>
                <div class="c-copy text-center">© Kufu Company Inc.</div>
            </div>
        </footer>
</template>

<script>
export default {
    
}
</script>

<style>

</style>