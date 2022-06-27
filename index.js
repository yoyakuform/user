$(function() {
  $("xxdate").datepicker( {
    changeYear: true,  // 年選択をプルダウン化
    changeMonth: true  // 月選択をプルダウン化
  } );
 
  // 日本語化
  $.datepicker.regional['ja'] = {
    closeText: '閉じる',
    prevText: '<前',
    nextText: '次>',
    currentText: '今日',
    monthNames: ['1月','2月','3月','4月','5月','6月',
    '7月','8月','9月','10月','11月','12月'],
    monthNamesShort: ['1月','2月','3月','4月','5月','6月',
    '7月','8月','9月','10月','11月','12月'],
    dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
    dayNamesShort: ['日','月','火','水','木','金','土'],
    dayNamesMin: ['日','月','火','水','木','金','土'],
    weekHeader: '週',
    dateFormat: 'yy/mm/dd',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年'};
  $.datepicker.setDefaults($.datepicker.regional['ja']);
});

    // 送信
    $('form').submit(function () {
        var name = $('input[name="name"]').val();
        var number = $('input[name="number"]').val();
        var xxdate = $('input[name="xxdate"]').val();
        var text = $('input[name="text"]').val();

        var msg = `●氏名：${name}\n●電話番号：${number}\n●生年月日：${date}\n●住所：${text}`;
        sendText(msg);

        return false;
    });
});
