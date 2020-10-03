//'use strict';
/*  eslint-disable */
$(function() {

   /*
   |--------------------------------------------------------------------------
   | Showing modal with effect
   |--------------------------------------------------------------------------
   */

    $('.js-modal-effect').on('click', function(e) {

        e.preventDefault();

        var effect = $(this).attr('data-effect');
        $('.modal').addClass(effect);
    });
    // hide modal with effect

    /*
    |--------------------------------------------------------------------------
    | Sidebar
    |--------------------------------------------------------------------------
    */

    var burger = $('.js-menu-trigger');

    // Sidebar toggle to sidebar-folded
    burger.on('click', function(e) {

        // Toggle Open Class
        $(this).toggleClass('is-open');

        e.preventDefault();

        $('body').toggleClass('sidebar-open');

    });

    // close sidebar when click outside on mobile/table
    $(document).on('click touchstart', function(e){
        e.stopPropagation();

        // closing of sidebar menu when clicking outside of it
        if (!$(e.target).closest(burger).length) {
            var sidebar = $(e.target).closest('.sidebar').length;
            var sidebarBody = $(e.target).closest('.sidebar__body').length;
            if (!sidebar && !sidebarBody) {
                if ($('body').hasClass('sidebar-open')) {
                    $('body').removeClass('sidebar-open');
                }
            }
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Responsive Iframe Inside Modal
    |--------------------------------------------------------------------------
    */

    function toggle_video_modal() {

        // Click on video thumbnail or link
        $(".js-video-modal").on("click", function(e){

            // prevent default behavior for a-tags, button tags, etc.
            e.preventDefault();

            // Grab the video ID from the element clicked
            var id = $(this).attr('data-youtube-id');

            // Autoplay when the modal appears
            // Note: this is intetnionally disabled on most mobile devices
            // If critical on mobile, then some alternate method is needed
            var autoplay = '?autoplay=1';

            // Don't show the 'Related Videos' view when the video ends
            var related_no = '&rel=0';

            // String the ID and param variables together
            var src = '//www.youtube.com/embed/'+id+autoplay+related_no;

            // Pass the YouTube video ID into the iframe template...
            // Set the source on the iframe to match the video ID
            $(".video-modal__iframe").attr('src', src);

            // Add class to the body to visually reveal the modal
            $("body").addClass("video-modal-show");

            $('body').css({"overflow": "hidden"});

        });

        // Close and Reset the Video Modal
        function close_video_modal() {

            event.preventDefault();

            // re-hide the video modal
            $("body").removeClass("video-modal-show");

            $('body').css({"overflow": ""});

            // reset the source attribute for the iframe template, kills the video
            $(".video-modal__iframe").attr('src', '');

        }
        // if the 'close' button/element, or the overlay are clicked
        $('body').on('click', '.video-modal__close, .video-modal__overlay', function(event) {

            // call the close and reset function
            close_video_modal();

        });
        // if the ESC key is tapped
        $('body').keyup(function(e) {
            // ESC key maps to keycode `27`
            if (e.keyCode == 27) {

                // call the close and reset function
                close_video_modal();

            }
        });
    }
    toggle_video_modal();


    /*
    |--------------------------------------------------------------------------
    | Alert Actions
    |--------------------------------------------------------------------------
    */

    $('.default-alert__close') .on('click', function() {
        $(this).parent().hide();
    });

    /*
    |--------------------------------------------------------------------------
    | Spoiler Text
    |--------------------------------------------------------------------------
    */

    var containerHeight = document.querySelectorAll(".js-spoiler-inner");
    var uncoverLink = document.querySelectorAll(".js-spoiler-more");

    for(let i = 0; i < containerHeight.length; i++){
        let openData = uncoverLink[i].dataset.open;
        let closeData = uncoverLink[i].dataset.close;
        let curHeight = containerHeight[i].dataset.height;

        uncoverLink[i].innerHTML = openData;
        containerHeight[i].style.maxHeight = curHeight + "px";

        uncoverLink[i].addEventListener("click", function(){
            if(containerHeight[i].classList.contains("is-open")){

                containerHeight[i].classList.remove("is-open");

                uncoverLink[i].innerHTML = openData;

                containerHeight[i].style.maxHeight = curHeight + "px";

            } else {
                containerHeight[i].removeAttribute("style");

                containerHeight[i].classList.add("is-open");

                uncoverLink[i].innerHTML = closeData;

            }
        });
    }

    /*
    |--------------------------------------------------------------------------
    | Clipboard.js
    |--------------------------------------------------------------------------
    */

    if ($('.clipboard-icon').length) {
        var clipboard = new ClipboardJS('.clipboard-icon');

        $('.clipboard-icon').attr('data-toggle', 'tooltip').attr('title', 'Copy to clipboard');


        $('[data-toggle="tooltip"]').tooltip();

        clipboard.on('success', function(e) {
            e.trigger.classList.value = 'clipboard-icon btn-current'
            $('.btn-current').tooltip('hide');
            e.trigger.dataset.originalTitle = 'Copied';
            $('.btn-current').tooltip('show');
            setTimeout(function(){
                $('.btn-current').tooltip('hide');
                e.trigger.dataset.originalTitle = 'Copy to clipboard';
                e.trigger.classList.value = 'clipboard-icon'
            },1000);
            e.clearSelection();
        });
    }

    /*
    |--------------------------------------------------------------------------
    | Select2
    |--------------------------------------------------------------------------
    */

    $(".select2").each(function() {
        $(this).select2({
            placeholder: $(this).attr('data-placeholder'),
            width: '100%',
        });
    });

    $(".select2-search").each(function() {
        $(this).select2({
            placeholder: $(this).attr('data-placeholder'),
            width: '100%',
            allowClear: false,
            minimumResultsForSearch: 5
        });
    });

    /*
    |--------------------------------------------------------------------------
    | Amaze UI Datetime Picker
    | https://github.com/amazeui/datetimepicker
    |--------------------------------------------------------------------------
    */

    /**
     * Russian translation for bootstrap-datetimepicker
     * Victor Taranenko <darwin@snowdale.com>
     */
    ;(function($){
        $.fn.datetimepicker.dates['ru'] = {
            days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
            daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
            daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            today: "Сегодня",
            suffix: [],
            meridiem: []
        };
    }(jQuery));

    // AmazeUI Datetimepicker
    $('.js-datetimepicker').datetimepicker({
        format: 'yyyy-mm-dd hh:ii',
        autoclose: true,
        language: 'ru'
    });

    /*
    |--------------------------------------------------------------------------
    | Jquery Input Tags
    |--------------------------------------------------------------------------
    */

    let tokenAutocomplete = new TokenAutocomplete({
        name: 'example',
        selector: '#example',
        noMatchesText: 'Не найдено результатов...'
    });
    /*
    |--------------------------------------------------------------------------
    | Back to Top
    |--------------------------------------------------------------------------
    */

    $(window).on("scroll", function(e) {
        if ($(this).scrollTop() > 0) {
            $('.js-back-to-top').fadeIn('slow');
        } else {
            $('.js-back-to-top').fadeOut('slow');
        }
    });

    $(".js-back-to-top").on("click", function(e) {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


});
