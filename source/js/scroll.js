'use strict';
(function () {

  // var anchors = document.querySelectorAll('a[href*="#"]');
  var anchors = document.querySelectorAll('a[class^="intro"]');

  if (anchors) {
    anchors.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        var id = item.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  }
  // var anchors = document.querySelectorAll('a[class^="intro"]');

  // if (anchors) {
  //   for (var i = 0; i < anchors.length; i++) {
  //     anchors[i].addEventListener('click', function (evt) {
  //       evt.preventDefault();
  //       var id = evt.target.getAttribute('href');
  //       document.querySelector(id).scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start',
  //       });
  //     });
  //   }
  // }

})();
