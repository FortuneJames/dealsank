$(function() {
    //Facet filter
    $('body').on('change', '.search-facets input[type=checkbox]', function() {
        $(this).closest('form').submit();
    });

    //toggle collapse facets
    $('.search-facet-toggle').click(function(event) {
        event.preventDefault();
        $(this).blur();
        $(".search-facets").toggleClass("open");
        $(".search-facets--content").toggle('fast');
     });
});

$(document).ready(function () {
  function show($el, flag) {
    if (flag) {
      $el.show();
    } else {
      $el.hide();
    }
  }

  $("#sitesearchinput").on("keyup", function () {
    console.log("keyup event called");
    var $form = $(this).closest("form"),
      $lists = $form.find("[data-quick-lists]"),
      $list = $form.find("[data-quick-suggestions]");

    if ($form.data("quick-suggestions-enabled") === true) {
      console.log("quick-suggestions-enabled");
      console.log($form.data("quick-suggestions"));

      $.get($form.data("quick-suggestions"), $form.serialize(), function (data) {
          $list.find("li").remove();
          $.each(data.suggestions, function (index, suggestion) {
              $list.append($('<li class="search-list-item">').append($('<button type="button" class="search-list-button">' + suggestion + '</button>')));
          });

          show($list, data.suggestions.length > 0);
          show($lists, $lists.find("li").length > 0);
        //   $('.site-search-input').attr('aria-expanded', 'true');
        }
      );
    }
  });

  $("body").on("keyup", ".search form[data-quick-search-results] input[name=q]", function () {
      var $form = $(this).closest("form"),
        $lists = $form.find("[data-quick-lists]"),
        $list = $form.find("[data-quick-results]");

      if ($form.data("quick-search-results-enabled") === true) {
        $.get($form.data("quick-search-results"), $form.serialize(), function (data) {
            $list.find("dd").remove();

            $.each(data.results, function (index, result) {
                $list.append($('<dd class="search-list-item">'));
                $('.search-list-item').append($('<a class="search-item-link">').attr("href", result.url).text(result.title));
            });

            show($list, data.results.length > 0);
            show($lists, $lists.find("dd").length > 0);
          }
        );
      }
    }
  );

  $(".search-field").on("click", ".quick-lists .quick-suggestions dd", function () {
      var $form = $(this).closest("form"),
          $searchField = $form.find("input[name=q]"),
          autoComplete = $(this).text();
      $searchField.val(autoComplete);
      $form.submit();
    }
    );

  const THIS_FORM = $(".component"), // *** $('.your-form-class')   -OR-   $('#your-form-id') ***//
    FORM_GROUP = $(THIS_FORM).find(".form-group"),
    LABEL = $(FORM_GROUP).find("label"),
    TXT_INPUT = $(FORM_GROUP).find(".site-search-input"),
    // SUBMIT_BTN = $(THIS_FORM).find('.submit'), // *** .find('.your-submit-button-class')   -OR-   .find('#your-submit-button-id') ***//
    CLEAR = document.querySelectorAll(".clear-field-button"),
    ERROR_MSG = $(".validation-message:not(.chars)"),
    ERROR_MSG2 = $(".validation-message.chars");
    $('.quick-suggestions').on('click', '.search-list-button', function () {
      $(this).closest(FORM_GROUP).find(TXT_INPUT).val($(this).text()).focus();
      $(this).closest("[data-quick-lists]").hide();
     });

     $(window).on('load', THIS_FORM, function() {
      setTimeout(() => {
        if ($(TXT_INPUT).val() !== "") {
          $(TXT_INPUT).addClass("has-clear").closest('.input-wrapper').find(CLEAR).attr({ tabindex: "0" }).show();
              $(TXT_INPUT).css("width", "calc(100% - 91px)");
        } else {
          $(TXT_INPUT).removeClass("has-clear").closest('.input-wrapper').find(CLEAR).attr({ tabindex: "-1", }).hide();
            $(TXT_INPUT).css("width", "calc(100% - 54px)");
        }
      }, 1000);
     });

  CLEAR.forEach((btn) => {
    // let btnSRtext = $(btn).closest(FORM_GROUP).find(LABEL).text().trim();
    let btnSRtext = $(btn).closest(FORM_GROUP).find(LABEL).contents().get(0).nodeValue;
    btnSRtext = btnSRtext.slice(0, btnSRtext.length).trim();
    $(btn).closest(".input-wrapper").addClass("has-clear");
    $(btn).attr({"aria-label": "Clear " + btnSRtext + " input field"});
  });

  TXT_INPUT.on("focus", function () {

    $(this).closest(FORM_GROUP).find(LABEL).addClass("is-focused");
    if ($(this).is(":read-only")) {
      $(this).css("width", "calc(100% - 7px)");
    } else {
      if ($(this).val() !== "" && !$(this).closest(".input-wrapper").find("input").hasClass("validation-failed")) {
        // $('#listbox').css('display', 'block');
        $(this).addClass("has-clear").siblings(CLEAR).attr({ tabindex: "0" }).show();
        if ($(this).attr("name") === "txt-input") {
          $(this).css("width", "calc(100% - 44px)");
        } else if (
          $(this).attr("name") === "eml-input" ||
          $(this).attr("name") === "phn-input" ||
          $(this).attr("name") === "q") {
          $(this).css("width", "calc(100% - 91px)");
        } else if ($(this).attr("name") === "combo-input") {
          $(this).css("width", "calc(100% - 126px)");
        }
      } else if ($(this).val() === "") {
        // $('#listbox').css('display', 'none');
        if ($(this).attr("name") === "combo-input") {
          $(this).css("width", "calc(100% - 89px)");
        }
      } else {
        $(this).removeClass("has-clear").siblings(CLEAR).attr({ tabindex: "-1", }).hide();
        if ($(this).attr("name") === "txt-input") {
          $(this).css("width", "calc(100% - 7px)");
        } else if (
          $(this).attr("name") === "eml-input" ||
          $(this).attr("name") === "phn-input" ||
          $(this).attr("name") === "q"
        ) {
          $(this).css("width", "calc(100% - 54px)");
        }
      }
    }
  }).on("blur", function () {

    let errMsg = $(this).closest(FORM_GROUP).find(ERROR_MSG).attr("id");
    // Hide / Show button depending on the error
    if (($(this).val() !== "" && !$(this).closest(".input-wrapper").find("input").hasClass("validation-failed")) ||
      ($(this).val() !== "" && $(this).closest(".input-wrapper").find("input").hasClass("validation-failed"))) {
      // $('#listbox').css('display', 'none');
      $(this).siblings(CLEAR).show().attr("tabindex", "0");
      $(this).siblings(".iconbox").attr("tabindex", "-1");
      $(this).closest(FORM_GROUP).find(LABEL).removeClass("is-focused");
      $(this).css("width", "calc(100% - 91px)");
    } else if (
      $(this).val() === "" && $(this).closest(".input-wrapper").find("input").hasClass("validation-failed")) {
      $(this).siblings(CLEAR).hide().attr("tabindex", "-1");
      $(this).siblings(".iconbox").attr("tabindex", "-1");
      $(this).css("width", "calc(100% - 54px)");
    } else if (
      $(this).val() === "" && !$(this).closest(".input-wrapper").find("input").hasClass("validation-failed")) {
      $(this).siblings(".clear-field-button").hide().attr("tabindex", "-1");
      $(this).siblings(".iconbox").attr("tabindex", "-1");
      $(this).closest(FORM_GROUP).find(LABEL).removeClass("is-focused");
    }
  }).on('keydown', function (e) {
    var key = { up: 38, down: 40, esc: 27 };
    switch (e.which) {
      case key.up:
        $(this).closest(FORM_GROUP).find('#listbox').find('.quick-suggestions').find('.search-list-item').first().find('.search-list-button').focus();
        e.preventDefault();
        break;
      case key.down:
        $(this).closest(FORM_GROUP).find('#listbox').find('.quick-suggestions').find('.search-list-item').first().find('.search-list-button').focus();
        e.preventDefault();
        break;
      case key.esc:
        $(this).closest(FORM_GROUP).find('[data-quick-lists]').hide();
        $(this).focus();
        e.preventDefault();
        break;
      default: return;
    }

    const QUERY_BUTTONS = document.querySelectorAll('.search-list-button');
    QUERY_BUTTONS.forEach((button) => {
      $(button).on('keydown', function (e) {
        var key = { up: 38, down: 40, esc: 27, enter: 13 };
        switch (e.which) {
          case key.up:
            $(button).closest('.search-list-item').prev('.search-list-item').find('.search-list-button').focus();
            e.preventDefault();
            break;
          case key.down:
            $(button).closest('.search-list-item').next('.search-list-item').find('.search-list-button').focus();
            e.preventDefault();
            break;
          case key.esc:
            $(button).closest(FORM_GROUP).find('[data-quick-lists]').hide();
            $(button).closest(FORM_GROUP).find(TXT_INPUT).focus();
            e.preventDefault();
            break;
          case key.enter:
            $(button).closest(FORM_GROUP).find(TXT_INPUT).val($(button).text());
            $(button).closest("[data-quick-lists]").hide();
            $(button).closest(FORM_GROUP).find(TXT_INPUT).focus();
            e.preventDefault();
            break;
          default: return;
        }
      });
    });
  }).on("keyup", function (e) {
    if ($(this).val() !== "") {
      $(this).addClass("has-clear").siblings(".clear-field-button").attr({ tabindex: "0" }).show();
      $(this).css("width", "calc(100% - 91px)");
    } else if ($(this).val() === "") {
      $(this).closest(".input-wrapper").find(CLEAR).hide();
      $(this).css("width", "calc(100% - 54px)");
    }
  })



  $(CLEAR).on('focus', function () {
    $('#listbox').css('display', 'none');
  }).on("blur", function () {
      if ($(this).closest(".input-wrapper").find("input").val() !== "" && !$(this).closest(".input-wrapper").find("input").hasClass("validation-failed")) {
        $(this).attr("tabindex", "0");
        $(this).closest(FORM_GROUP).find(LABEL).removeClass("is-focused");
      } else if ($(this).closest(".input-wrapper").find("input").val() !== "" && $(this).closest(".input-wrapper").find("input").hasClass("validation-failed")) {
        $(this).show().attr("tabindex", "0");
      } else if (
        $(this).closest(".input-wrapper").find("input").val() === "" && !$(this).closest(".input-wrapper").find("input").hasClass("validation-failed")) {
        $(this).hide().attr("tabindex", "-1");
        $(this).closest(FORM_GROUP).find(LABEL).removeClass("is-focused");
      } else if ($(this).closest(".input-wrapper").find("input").val() === "" && $(this).closest(".input-wrapper").find("input").hasClass("validation-failed")) {
        $(this).hide().attr("tabindex", "-1");
     }
    }).on("click", function () {
      $(this).hide().attr("tabindex", "-1").closest(".input-wrapper").removeClass("has-error").find("input").removeClass("validation-failed").removeClass("has-clear").val("").focus();
      $(this).closest(FORM_GROUP).find(LABEL).removeClass("has-error");
      $(this).closest(FORM_GROUP).find(ERROR_MSG).removeAttr("aria-live").hide();
      $(this).closest(FORM_GROUP).find(ERROR_MSG2).removeAttr("aria-live").hide();
    });

  $('.accordion .card .card-header .btn-link > p').contents().unwrap();

});

$(function() {
    console.log('pagination called');
    const $PAGINATION = $( '#pagination' );
    const ITEMS_ON_PAGE = ( Number($PAGINATION.attr( "pageLimit" )) || 10 );
    const TOTAL_RESULTS = ( Number($PAGINATION.attr( "totalResults" )) || 0 );	
    console.log( 'TOTAL_RESULTS: ' + TOTAL_RESULTS );

    const $RESULT_NUMBER_CONTAINER = $( '#result-number-id' );
    const RESULT_NUMBER_TEMPLATE = $RESULT_NUMBER_CONTAINER.text();

    if ( TOTAL_RESULTS <= ITEMS_ON_PAGE ) {
        $RESULT_NUMBER_CONTAINER.text( CommonUtils.fillTemplate( RESULT_NUMBER_TEMPLATE, [ 1, TOTAL_RESULTS ] ) );
    	return;  // no need for pagination in this case
	}

    $PAGINATION.pagination({
        // Total number of items present
        // in wrapper class
        items: TOTAL_RESULTS,

        // Items allowed on a single page
        itemsOnPage: ITEMS_ON_PAGE,

        displayedPages: 3,
        edges: 1,
        prevText: 'Previous page',
        nextText:'Next page',
        ellipsePageSet: false,

        onPageClick: function (noofele) {
            const START = ITEMS_ON_PAGE * ( noofele - 1 );
            const END = ( ( START + ITEMS_ON_PAGE > TOTAL_RESULTS ) ? TOTAL_RESULTS : START + ITEMS_ON_PAGE );
            $("#accordionResults .card-header").hide().slice( START, END ).show();
            $RESULT_NUMBER_CONTAINER.text(CommonUtils.fillTemplate(RESULT_NUMBER_TEMPLATE, [START + 1, END]));
            $('.simple-pagination li button.prev').text('');
            $('.simple-pagination li button.next').text('');
            $('.search-results .accordion .collapse.show').first().removeClass('show');
        }
    });

    $PAGINATION.pagination('selectPage', 1);	// this method invokes onPageClick handler too, so we don't need to rewrite all the steps to initialize first page
    $('.simple-pagination li button.prev').text('');
    $('.simple-pagination li button.next').text('');
});

