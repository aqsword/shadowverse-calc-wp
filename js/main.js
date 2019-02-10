document.addEventListener('DOMContentLoaded', function () {
  var summary = document.getElementById('summary');
  var rotation = document.getElementById('rotation');
  var unlimited = document.getElementById('unlimited');

  var win_num = document.getElementById('win_num');
  var lose_num = document.getElementById('lose_num');
  var win_avg = document.getElementById('win_avg');

  var win_un_num = document.getElementById('win_un_num');
  var lose_un_num = document.getElementById('lose_un_num');
  var win_un_avg = document.getElementById('win_un_avg');

  Math.trunc = Math.trunc || function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  }

  int = parseInt;

  var calc_win_avg = function () {
    // ローテ、アンリミを加味した計算
    if (rotation.value != 0 && unlimited.value != 0) {

    // ローテーションだけで計算
    } else if (rotation.value != 0 && unlimited.value == 0) {
      win_num.innerText = Math.trunc(summary.value / 100);
      lose_num.innerText = Math.trunc((summary.value - rotation.value) / 100);
      win_avg.innerText = (int(win_num.innerText) / (int(win_num.innerText) + int(lose_num.innerText)) * 100).toFixed(4);
    // アンリミだけで計算
    } else if (rotation.value == 0 && unlimited.value != 0) {
      win_un_num.innerText = Math.trunc(summary.value / 100);
      lose_un_num.innerText = Math.trunc((summary.value - unlimited.value) / 100);
      win_un_avg.innerText = (int(win_un_num.innerText) / (int(win_un_num.innerText) + int(lose_un_num.innerText)) * 100).toFixed(4);
    }
  }

  summary.addEventListener('change', function () {
    calc_win_avg();
  }, false);

  rotation.addEventListener('change', function () {
    calc_win_avg();
  }, false);

  unlimited.addEventListener('change', function () {
    calc_win_avg();
  }, false);

})