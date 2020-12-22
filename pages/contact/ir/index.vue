<template>
     <main id="contact-ir" class="page-second">
            <section class="l-contact-ir page-second">
                <div class="l-content">
                    <h2 class="c-title3 text-center"><span>IRに関するお問い合わせ</span></h2>
                    <div class="p-form">
                        <form>
                            <div class="jss1">
                                <input type="email" id="email" name="email" class="u-input" required="" value="">
                                <label for="email">メールアドレス<span>&thinsp;*</span></label>
                            </div>
                            <div class="jss1">
                                <label for="message">内容<span>&thinsp;*</span></label>
                                <textarea name="message" class="u-input" rows="1"></textarea>
                            </div>
                            <div class="text-center pdt15 u-pd--bt">
                                <!-- <button class="c-btn2">送信</button> -->
                                 <a href="/contact/ir/complete" class="c-btn2 flex flex-align-item-center flex-jus-center">送信</a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
</template>

<script>
export default {
    
}
</script>