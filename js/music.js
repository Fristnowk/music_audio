var play = document.getElementById("play"),
  pause = document.getElementById("pause"),
  pre = document.getElementById("pre"),
  next = document.getElementById("next"),
  love = document.getElementById("love");
(musicName = document.getElementById("musicName")),
  (musicImg = document.getElementById("musicImg")),
  (bgImage = document.getElementById("music"));
download = document.getElementById("download");
sou = document.getElementById("sou");
Click = document.getElementById("Click");
lists = document.getElementById("lists");

var music = new Array();
music = [
  "一月，银装轻舞-紫竹笛韵",
  "二月，莺飞草长-紫竹笛韵",
  "三月，桃沐春风-紫竹笛韵",
  "四月，初雨微凉-紫竹笛韵",
  "五月，和风微醺-紫竹笛韵",
  "六月，晴雨流转-紫竹笛韵",
  "七月，蝉鸣月色-紫竹笛韵",
  "八月，盛夏未央-紫竹笛韵",
  "九月，一叶知秋-紫竹笛韵",
  "十月，霪雨缠绵-紫竹笛韵",
  "十一月，深秋叙-紫竹笛韵",
  "十二月，初雪诉-紫竹笛韵",
  "神龙（Loong）-紫竹笛韵",
];
var len = music.length;
var num = 0;

// 播放
play.onclick = function () {
  if (audio.paused) {
    audio.play();
    document.getElementById("musicImg").classList.remove("stop");
    document.getElementById("musicImg").classList.add("running");
    $("#pause").show();
    $("#play").hide();
  }
};

// 暂停
pause.onclick = function () {
  if (audio.played) {
    audio.pause();
    document.getElementById("musicImg").classList.remove("running");
    document.getElementById("musicImg").classList.add("stop");
    $("#play").show();
    $("#pause").hide();
  }
};

// 上一首
pre.onclick = function () {
  num = (num + len - 1) % len;
  audio.src = "./music/" + music[num] + ".mp3";
  musicName.innerHTML = music[num];
  musicImg.src = "./image/" + music[num] + ".jpg";
  audio.pause();
  $("#pause").hide();
  $("#play").show();
  document.getElementById("musicImg").classList.remove("running");
  document.getElementById("musicImg").classList.remove("stop");
  document.getElementById("musicImg").classList.add("pause");
  love.onclick = function () {
    dl.download = music[num] + ".mp3";
  };
};

// 下一首
next.onclick = function () {
  num = (num + 1) % len;
  audio.src = "./music/" + music[num] + ".mp3";
  musicName.innerHTML = music[num];
  musicImg.src = "./image/" + music[num] + ".jpg";
  audio.pause();
  $("#pause").hide();
  $("#play").show();
  document.getElementById("musicImg").classList.remove("running");
  document.getElementById("musicImg").classList.remove("stop");
  document.getElementById("musicImg").classList.add("pause");
  //下载
  love.onclick = function () {
    dl.download = music[num] + ".mp3";
  };
};

// 自动切换下一首
audio.addEventListener(
  "ended",
  function () {
    next.onclick();
    play.onclick();
    love.onclick = function () {
      dl.download = music[num] + ".mp3";
    };
  },
  false
);
//搜索框
sou.onfocus = function () {
  document.getElementById("sou").classList.add("colorsou");
};
sou.onblur = function () {
  document.getElementById("sou").classList.remove("colorsou");
};
//列表
Click.ondblclick = function () {
  $(".listdown > li").children("ul").slideDown(1500);
};
Click.onclick = function () {
  $(".listdown > li").children("ul").slideUp(1500);
};
$("#lists>li").mouseover(function () {
  $(this).css("color", "rgba(0, 85, 255, 0.7)");
  $(this).siblings("li").css("color", "");
});
$("#lists>li").onmouseout(function () {
  $(this).css("color", "");
});
