$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 送信
    $('form').submit(function () {
        var name = $('input[name="name"]').val();
        var number = $('input[name="number"]').val();
        var date = $('input[name="date"]').val();
        var text = $('input[name="text"]').val();

        var msg = `●氏名：${name}\n●電話番号：${number}\n●生年月日：${date}\n●住所：${text}`;
        sendText(msg);

        return false;
    });
});
