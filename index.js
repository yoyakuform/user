$(function() {
  $("#xxdate").datepicker( {
    changeYear: true,  // 年選択をプルダウン化
    changeMonth: true,  // 月選択をプルダウン化
    yearRange: "-100:0" // 現在日付の２年前～５年後まで選択可能
  } );
});
