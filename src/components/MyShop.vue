<template>
<section class="app__main">
<!-- App Content Begin -->
<main role="main" class="app__content">

    <!-- Breadcrumbs Begin -->
    <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
            <a href="#" class="breadcrumbs__link">Мой магазин</a>
        </li>
    </ul>
    <!--/. Breadcrumbs End -->

    <div class="app__header">
        <div class="app__header-left">
            <h1 class="app__header-title">Мой магазин</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-8 col-xl-5">
            <ul class="nav default-tabs mb-2 mb-lg-3">
                <li class="default-tabs__item">
                    <a class="default-tabs__link active" data-toggle="tab" href="#rus" role="tab">
                Основное
            </a>
                </li>
                <li class="default-tabs__item">
                    <a class="default-tabs__link" data-toggle="tab" href="#eng" role="tab">
                Модуль Заказы
            </a>
                </li>
                <li class="default-tabs__item">
                    <a class="default-tabs__link" data-toggle="tab" href="#view" role="tab">
                Шаблоны
            </a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="rus" role="tabpanel">
                    <div class="default-card">
                        <form class="form">
                            <div class="control">
                                <div class="control__label">Название заведения</div>
                                <input type="text" class="control__input" placeholder="Введите название заведения">
                            </div>
                            <p class="tx-15 mb-2">Логотип заведения</p>
                            <div class="uploader -logo">
                                <label class="uploader__area">
                                    <div class="uploader__placeholder">
                                        <div class="uploader__icon">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.6607 6.16071H9.10714C8.95922 6.16071 8.83929 6.04078 8.83929 5.89286V1.33929C8.83929 0.59967 8.23962 0 7.5 0C6.76038 0 6.16071 0.59967 6.16071 1.33929V5.89286C6.16071 6.04078 6.04078 6.16071 5.89286 6.16071H1.33929C0.59967 6.16071 0 6.76038 0 7.5C0 8.23962 0.59967 8.83929 1.33929 8.83929H5.89286C6.04078 8.83929 6.16071 8.95922 6.16071 9.10714V13.6607C6.16071 14.4003 6.76038 15 7.5 15C8.23962 15 8.83929 14.4003 8.83929 13.6607V9.10714C8.83929 8.95922 8.95922 8.83929 9.10714 8.83929H13.6607C14.4003 8.83929 15 8.23962 15 7.5C15 6.76038 14.4003 6.16071 13.6607 6.16071Z"
                                                fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div class="uploader__title">Загрузите логотип</div>
                                    </div>
                                    <input type="file" class="uploader__input">
                                </label>
                            </div>
                            <p class="tx-gray tx-13">Формат - JPEG или PNG, вес — не более 1 мегабайта,
                                <br>желательно вокруг Вашего логотипа оставлять пространство,
                                <br>чтобы логотип не обрезался.</p>
                            <p class="tx-15 mb-2">Иконка заведения</p>
                            <div class="uploader -logo">
                                <label class="uploader__area">
                                    <div class="uploader__placeholder">
                                        <div class="uploader__icon">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.6607 6.16071H9.10714C8.95922 6.16071 8.83929 6.04078 8.83929 5.89286V1.33929C8.83929 0.59967 8.23962 0 7.5 0C6.76038 0 6.16071 0.59967 6.16071 1.33929V5.89286C6.16071 6.04078 6.04078 6.16071 5.89286 6.16071H1.33929C0.59967 6.16071 0 6.76038 0 7.5C0 8.23962 0.59967 8.83929 1.33929 8.83929H5.89286C6.04078 8.83929 6.16071 8.95922 6.16071 9.10714V13.6607C6.16071 14.4003 6.76038 15 7.5 15C8.23962 15 8.83929 14.4003 8.83929 13.6607V9.10714C8.83929 8.95922 8.95922 8.83929 9.10714 8.83929H13.6607C14.4003 8.83929 15 8.23962 15 7.5C15 6.76038 14.4003 6.16071 13.6607 6.16071Z"
                                                fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div class="uploader__title">Загрузите логотип</div>
                                    </div>
                                    <input type="file" class="uploader__input">
                                </label>
                            </div>
                            <p class="tx-gray tx-13">Формат - PNG, вес — не более 500кб , размер 32x32</p>
                            <div class="form__buttons mt-4">
                                <div class="form__buttons-left">
                                    <button type="submit" class="button -blue form__button">Сохранить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane" id="eng" role="tabpanel">
                    <div class="default-card">
                        <form class="form">
                            <div class="control">
                                <label class="custom-checkbox">
                                    <input type="checkbox">
                                    <span>Включить модуль заказы</span>
                                </label>
                            </div>
                            <div class="control">
                                <div class="control__label">Тип доставки</div>
                                <select class="select2" data-placeholder="Placeholder...">
                                    <option></option>
                                    <option value="Самовывоз и доставка" selected>
                                        Самовывоз и доставка
                                    </option>
                                    <option value="Chrome">
                                        Chrome
                                    </option>
                                    <option value="Safari">
                                        Safari
                                    </option>
                                    <option value="Opera">
                                        Opera
                                    </option>
                                    <option value="Internet Explorer">
                                        Internet Explorer
                                    </option>
                                </select>
                            </div>
                            <div class="control">
                                <div class="control__label">Заметка по доставке</div>
                                <textarea class="control__textarea"></textarea>
                            </div>
                            <div class="control">
                                <div class="control__label">Уведомления в телеграм</div>
                                <div id="example" data-placeholder="asds"></div>
                                <p class="tx-gray tx-12 mt-2">Вводите логины телеграм через Enter</p>
                            </div>
                            <div class="form__buttons">
                                <div class="form__buttons-left">
                                    <button type="submit" class="button -blue form__button">Сохранить</button>
                                    <a href="#" class="button -bordered_blue form__button">Отменить</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane" id="view" role="tabpanel">
                    <div class="default-card">
                        <div class="control">
                            <div class="control__label">Шаблон</div>
                            <select class="select2" data-placeholder="Placeholder...">
                                <option></option>
                                <option value="Шаблон 1" selected>
                                    Шаблон 1
                                </option>
                                <option value="Шаблон 2">
                                    Шаблон 2
                                </option>
                            </select>
                        </div>
                        <div class="row" data-gutter="15" vertical-gutter="15">
                            <div class="col-6 col-md-4">
                                <div class="template -selected">
                                    <img src="static/img/general/view1.svg" class="template__img" alt="">
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="template">
                                    <img src="static/img/general/view2.svg" class="template__img" alt="">
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="template">
                                    <img src="static/img/general/view3.svg" class="template__img" alt="">
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <div class="template">
                                    <img src="static/img/general/view4.svg" class="template__img" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<!--/. App Content End -->
</section>
</template>

<script>
export default {
  name:'MyShop'
}
</script>