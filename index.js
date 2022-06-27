$(function(){
  //calenderクラスの要素にカレンダーを表示し、選択できるようにする
  $(".calender").datepicker({
    firstDay: 1,
    dayNames: ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],
    dayNamesMin: ["日","月","火","水","木","金","土"],
    dayNamesShort: ["日","月","火","水","木","金","土"],
    monthNames: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
    dateFormat: "yy年mm月dd日",
    showAnim: "slideDown",
    changeYear: "true"
    yearRange: "-100:+0" // 現在日付の100年前～0年後まで選択可能
  });
});
