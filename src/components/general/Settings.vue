<template>
<section class="app__main">
    <main role="main" class="app__content">

        <!-- Breadcrumbs Begin -->
        <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
                <a href="#" class="breadcrumbs__link">Сменить пароль</a>
            </li>
        </ul>
        <!--/. Breadcrumbs End -->

        <div class="app__header">
            <div class="app__header-left">
                <h1 class="app__header-title">Сменить пароль</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 col-xl-5">
                <div class="tab-content">
                    <div class="tab-pane active" id="rus" role="tabpanel">
                        <div class="default-card">
                            <div class="default-alert -warning">Упс! Что-то пошло не так!.
                                <button type="button" class="default-alert__close"></button>
                            </div>
                            <div class="default-alert -success">Данные были изменены.
                                <button type="button" class="default-alert__close"></button>
                            </div>
                            <form class="form">
                                <div class="control">
                                    <div class="control__label">Старый пароль</div>
                                    <input type="text" class="control__input" placeholder="Введите старый пароль">
                                </div>
                                <div class="control">
                                    <div class="control__label">Новый пароль</div>
                                    <input type="text" class="control__input" placeholder="Введите новый пароль">
                                </div>
                                <div class="control">
                                    <div class="control__label">Повторите новый пароль</div>
                                    <input type="text" class="control__input" placeholder="Введите повторно новый пароль">
                                </div>
                                <div class="form__buttons">
                                    <div class="form__buttons-left">
                                        <button type="submit" class="button -blue form__button">Сохранить</button>
                                        <a href="#" class="button -bordered_blue form__button">Отмена</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="tab-pane" id="eng" role="tabpanel">

                    </div>
                </div>
            </div>
        </div>
    </main>
</section>
</template>

<script>
export default {
  name: 'Settings'
}
</script>