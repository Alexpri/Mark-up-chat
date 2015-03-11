var clanBtn = document.querySelector('.clan_search-btn');
var clanMenu = document.querySelector('.clan_search-menu');
//  Меню навигации

$(function  () {
    $('.header_menu_list_item').hover(function () {
      $(this).children('.dropdown_list').addClass('active');
      $(this).children('.header_menu_list_item_link').addClass('menu_active');
    }, (function () {
      $(this).children('.dropdown_list').removeClass('active');
      $(this).children('.header_menu_list_item_link').removeClass('menu_active');
    })
  );
});

//Выпадающее меню в правом углу панели чата

clanBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if (clanMenu.classList) {
    clanMenu.classList.toggle('active');
    this.classList.toggle('btn_clan_active');
  } else {
    var classes = clanMenu.className.split(' ');
    var existingIndex = classes.indexOf('.active');

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push('active');
    }
    clanMenu.className = classes.join(' ');
  }
});

/*$('.clan_search-btn').on('click', function(e){
    $('.clan_search-menu').toggleClass('active');
});*/


// Скрыть элементы в меню навигации при уменьшении экрана

$('ul.menu.flex').flexMenu();


//Подстраивание высоты чата под размер экрана

function setHeiHeight() {
    $('.resize').css({
        height: ($(window).height() - 152 ) +  'px'
  });
}
setHeiHeight();
$(window).resize( setHeiHeight );

//  Скроллинг чата

$(".chat_list").scrollTop($(window).height() + 202);

//Выпадающее меню действий над пользователем

$(function  () {
    $('.msg_name_link').click(function () {
      if (!$(this).parent().children('.name_menu_list').hasClass('active')) {
      $(this).parent().children('.name_menu_list').addClass('active');
      $(this).addClass('name_active');
    } else {
      $(this).parent().children('.name_menu_list').removeClass('active');
      $(this).removeClass('name_active');
    }
  });
});
