<template>
<section class="login">
    <div class="login__inner">
        <div class="login__logo">
            <img src="static/img/general/logo.png" alt="">
        </div>
        <div class="login__form">
            <div class="login__header">
                <h2 class="login__header-title">Авторизация</h2>
            </div>
            <div class="control">
                <div class="control__label">Ваш Email</div>
                <input type="text" class="control__input" placeholder="Example@email.com">
            </div>
            <div class="control">
                <div class="control__label">Пароль</div>
                <input type="text" class="control__input" placeholder="Введите пароль">
            </div>
            <button type="submit" class="button -blue login__button">Начать работу</button>
            <div class="text-center">
                <router-link to='/reset' class="login__link">Не удаётся войти в систему?</router-link>
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
  name: 'Login'
}
</script>