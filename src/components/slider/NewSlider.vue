<template>
<section class="app__main">
    <main role="main" class="app__content">

        <!-- Breadcrumbs Begin -->
        <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
                <a href="#" class="breadcrumbs__link">Слайдер</a>
            </li>
            <li class="breadcrumbs__item">
                <a href="#" class="breadcrumbs__link">Создание нового слайда</a>
            </li>
        </ul>
        <!--/. Breadcrumbs End -->

        <div class="app__header">
            <div class="app__header-left">
                <h1 class="app__header-title">Слайдер</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 col-xl-5">
                <div class="default-card">
                    <form class="form">
                        <div class="uploader -big">
                            <label class="uploader__area">
                                <div class="uploader__placeholder">
                                    <div class="uploader__icon">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.6607 6.16071H9.10714C8.95922 6.16071 8.83929 6.04078 8.83929 5.89286V1.33929C8.83929 0.59967 8.23962 0 7.5 0C6.76038 0 6.16071 0.59967 6.16071 1.33929V5.89286C6.16071 6.04078 6.04078 6.16071 5.89286 6.16071H1.33929C0.59967 6.16071 0 6.76038 0 7.5C0 8.23962 0.59967 8.83929 1.33929 8.83929H5.89286C6.04078 8.83929 6.16071 8.95922 6.16071 9.10714V13.6607C6.16071 14.4003 6.76038 15 7.5 15C8.23962 15 8.83929 14.4003 8.83929 13.6607V9.10714C8.83929 8.95922 8.95922 8.83929 9.10714 8.83929H13.6607C14.4003 8.83929 15 8.23962 15 7.5C15 6.76038 14.4003 6.16071 13.6607 6.16071Z"
                                            fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div class="uploader__title">Загрузите картинку</div>
                                </div>
                                <input type="file" class="uploader__input">
                            </label>
                        </div>
                        <p class="tx-gray mt-4">Формат - JPEG или PNG, вес — не более 1 мегабайта.</p>
                        <div class="control">
                            <div class="control__label">Ссылка</div>
                            <input type="text" class="control__input" placeholder="Введите ссылку">
                        </div>
                        <div class="control">
                            <div class="control__label">Порядок</div>
                            <input type="text" class="control__input" value="2">
                        </div>
                        <div class="form__buttons">
                            <div class="form__buttons-left">
                                <button type="submit" class="button -blue form__button">Сохранить</button>
                                <a href="#" class="button -bordered_blue form__button">Отмена</a>
                            </div>
                            <button type="submit" class="button -bordered_red form__button form__button-delete">Удалить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</section>
</template>

<script>
export default {
  name: 'NewSlider'
}
</script>