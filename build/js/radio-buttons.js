'use strict';

var allRadios = document.getElementsByName('sub');
var booRadio;
var x = 0;

for (x = 0; x < allRadios.length; x++) {

  allRadios[x].onclick = function () {
    if (booRadio === this) {
      this.checked = false;
      booRadio = null;
    } else {
      booRadio = this;
    }
  };
}
