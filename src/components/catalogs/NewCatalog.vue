<template>
<section class="app__main">

    <!-- App Content Begin -->
    <main role="main" class="app__content">

        <!-- Breadcrumbs Begin -->
        <ul class="breadcrumbs">
            <li class="breadcrumbs__item">
                <a href="#" class="breadcrumbs__link">Каталог</a>
            </li>
            <li class="breadcrumbs__item">
                <a href="#" class="breadcrumbs__link">Создание новой позиции</a>
            </li>
        </ul>
        <!--/. Breadcrumbs End -->

        <div class="app__header">
            <div class="app__header-left">
                <h1 class="app__header-title">Каталог</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 col-xl-5">
                <ul class="nav default-tabs mb-2 mb-lg-3">
                    <li class="default-tabs__item">
                        <a class="default-tabs__link active" data-toggle="tab" href="#rus" role="tab">
                    Русский
                </a>
                    </li>
                    <li class="default-tabs__item">
                        <a class="default-tabs__link" data-toggle="tab" href="#eng" role="tab">
                    English
                </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="rus" role="tabpanel">
                        <div class="default-card">
                            <form class="form">
                                <div class="control">
                                    <div class="control__label">Найменование</div>
                                    <input type="text" class="control__input" placeholder="Введите название категории">
                                </div>
                                <div class="control">
                                    <div class="control__label">Описание</div>
                                    <textarea class="control__textarea"></textarea>
                                </div>
                                <div class="control">
                                    <div class="control__label">Верхний уровень</div>
                                    <select class="select2" data-placeholder="Placeholder...">
                                        <option></option>
                                        <option value="Основное меню" selected>
                                            Основное меню
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
                    <div class="tab-pane" id="eng" role="tabpanel">
                        <div class="default-card">
                            <form class="form">
                                <div class="control">
                                    <div class="control__label">Name</div>
                                    <input type="text" class="control__input" placeholder="Type category name">
                                </div>
                                <div class="control">
                                    <div class="control__label">Description</div>
                                    <textarea class="control__textarea"></textarea>
                                </div>
                                <div class="control">
                                    <div class="control__label">Upper lever</div>

                                </div>
                                <div class="control">
                                    <div class="control__label">Order</div>
                                    <input type="text" class="control__input" value="2">
                                </div>
                                <div class="form__buttons">
                                    <div class="form__buttons-left">
                                        <button type="submit" class="button -blue form__button">Save</button>
                                        <a href="#" class="button -bordered_blue form__button">Cancel</a>
                                    </div>
                                    <button type="submit" class="button -bordered_red form__button form__button-delete">Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</section>
</template>

<script>
export default {
  name: 'NewCatalog'
}
</script>