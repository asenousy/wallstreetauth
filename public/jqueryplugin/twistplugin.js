(function ($) {
    $.fn.twist = function (degree = 180) {
      this.animate({ deg: degree }, {
        duration: 500, step: (now) => { // I used arrow function here instead to bind this to parent scope
          this.css({
            transform: 'rotate(' + now + 'deg)'
          });
        },
      }).animate({ deg: 0 }, {
        duration: 500, step: (now) => {
          this.css({
            transform: 'rotate(' + now + 'deg)'
          });
        },
      })
      return this;
    }
  }(jQuery))
