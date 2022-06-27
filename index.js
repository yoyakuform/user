$(function () {
    // カレンダー
    $(function () {
        $('input[name="date01"]').datepicker({
            dateFormat: 'yy/mm/dd',
            changeMonth: true,
            changeYear: true,
            yearRange: '-100:+0',
        });
    });
    
    // 送信
    $('form').submit(function () {
        var name = $('input[name="name"]').val();
        var date01 = $('input[name="date01"]').val();
        var tel = $('input[name="tel"]').val();

        var msg = `●氏名：${name}\n●生年月日：${date01}\n●電話番号：${tel}`;
        sendText(msg);

        return false;
    });
});
