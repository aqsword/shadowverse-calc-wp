document.addEventListener('DOMContentLoaded', function () {
  // ---- document variable 
  var summary = document.getElementById('summary');
  var single_mp = document.getElementById('single_mp');
  var rotation = document.getElementById('rotation');
  var unlimited = document.getElementById('unlimited');

  var win_num = document.getElementById('win_num');
  var lose_num = document.getElementById('lose_num');
  var win_avg = document.getElementById('win_avg');

  var win_un_num = document.getElementById('win_un_num');
  var lose_un_num = document.getElementById('lose_un_num');
  var win_un_avg = document.getElementById('win_un_avg');

  var single_radio = document.getElementById('single');
  var all_radio = document.getElementById('all');

  var single_mode = document.getElementById('single_mode');
  var all_mode = document.getElementById('all_mode');
  var single_mode_display = document.getElementById('single_mode_display');
  var all_mode_display = document.getElementById('all_mode_display');
  // ---- document variable end

  Math.trunc = Math.trunc || function (x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  }

  var init = function () {
    all_mode.style.display = "none";
    all_mode_display.style.display = "none";
  }

  int = parseInt;

  var calc_win_single = function () {
    win_num_single.innerText = Math.trunc(summary.value / 100);
    lose_num_single.innerText = Math.trunc((summary.value - single_mp.value) / 100);
    win_avg_single.innerText = (int(win_num_single.innerText) / (int(win_num_single.innerText) + int(lose_num_single.innerText)) * 100).toFixed(4);
  }

  var calc_win_all = function () {
    win_num_all.innerText = Math.trunc(summary.value / 100);
    var min_rotation_win = Math.trunc(rotation.value / 100);
    var min_unlimited_win = Math.trunc(unlimited.value / 100);

    var max_rotation_win = Math.trunc((summary.value - unlimited.value) / 100);
    var max_unlimited_win = Math.trunc((summary.value - rotation.value) / 100);

    win_num.innerText = min_rotation_win + " ～ " + max_rotation_win; 
    win_un_num.innerText = min_unlimited_win + " ～ " + max_unlimited_win; 
  }


  var calc_win_avg = function () {
    calc_win_single();
    calc_win_all();
  }

  summary.addEventListener('change', function () {
    calc_win_avg();
  }, false);

  rotation.addEventListener('change', function () {
    calc_win_all();
  }, false);

  unlimited.addEventListener('change', function () {
    calc_win_all();
  }, false);

  single_mp.addEventListener('change', function () {
    calc_win_single();
  }, false);

  single_radio.addEventListener('click', function () {
    single_mode.style.display = "block";
    all_mode.style.display = "none";
    single_mode_display.style.display = "block";
    all_mode_display.style.display = "none";
  }, false);

  all_radio.addEventListener('click', function () {
    single_mode.style.display = "none";
    all_mode.style.display = "block";
    single_mode_display.style.display = "none";
    all_mode_display.style.display = "block";
  }, false);

  init();
})