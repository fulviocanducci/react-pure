//return ;
// var layout       = document.getElementById('layout'),
//     menu         = document.getElementById('menu'),
//     menuLink     = document.getElementById('menuLink'),
//     pureMenuLink = document.getElementById('pure-menu-link'),
//     content      = document.getElementById('main');
//     console.log(pureMenuLink);
// function toggleClass(element, className) {
//     var classes = element.className.split(/\s+/),
//         length = classes.length,
//         i = 0;

//     for(; i < length; i++) {
//         if (classes[i] === className) {
//         classes.splice(i, 1);
//         break;
//         }
//     }
//     // The className is not found
//     if (length === classes.length) {
//         classes.push(className);
//     }

//     element.className = classes.join(' ');
// }

// function toggleAll(e) {
//     var active = 'active';

//     e.preventDefault();
//     toggleClass(layout, active);
//     toggleClass(menu, active);
//     toggleClass(menuLink, active);
// }
// if (menuLink) {
//     menuLink.onclick = function (e) {
//         toggleAll(e);
//     };
// };
// if (content) {
//     content.onclick = function(e) {
//         if (menu.className.indexOf('active') !== -1) {
//             toggleAll(e);
//         }
//     };
// };