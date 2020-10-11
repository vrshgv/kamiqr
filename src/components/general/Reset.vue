<template>
<section class="login">
    <div class="login__inner">
        <div class="login__logo">
            <img src="static/img/general/logo.png" alt="">
        </div>
        <div class="login__form">
            <div class="login__header">
                <h2 class="login__header-title">Не удаётся войти в систему?</h2>
                <div class="login__header-text">Укажите почту, которую использовали при регистрации, и мы отправим вам ссылку на восстановление пароля.</div>
            </div>
            <div class="control">
                <div class="control__label">Ваш Email</div>
                <input type="text" class="control__input" placeholder="Example@email.com">
            </div>
            <button type="submit" class="button -blue login__button">Восстановить пароль</button>
            <div class="text-center">
                <router-link to='/login' class="login__link">Назад</router-link>
            </div>
        </div>
    </div>
    <div class="login__bottom">
        <div class="login__website">kamiapp.com</div>
        <div class="login__copyright">2020, kamiapp TOO</div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Reset'
}
</script>