var previousScrollPosition = 0;
var isMenuOpen = false;

window.onload = init;

function init() {
    var main = document.getElementById('main');
    main.onscroll = displayNavigation;

    var menuIcon = document.getElementById('menu-icon')
    menuIcon.addEventListener('click', function () {
        var menu = document.getElementById('menu-items');

        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
            menuIcon.classList.add('open');
            isMenuOpen = true;
        } else {
            menu.style.display = 'none';
            menuIcon.classList.remove('open');
            isMenuOpen = false;
        }
    });
}

function displayNavigation() {
    if (isMenuOpen) {
        return;
    }

    var scrollHeight = main.scrollHeight;
    var distanceFromTop = scrollHeight - main.scrollTop;
    const threshold = 60;

    var navigation = document.getElementById('navigation');
    var currentScrollPosition = (scrollHeight - distanceFromTop);

    if (previousScrollPosition > currentScrollPosition) {
        navigation.style.top = '0';
    }
    else if (currentScrollPosition > threshold) {
        navigation.style.top = '-70px';
    }

    previousScrollPosition = currentScrollPosition;
}