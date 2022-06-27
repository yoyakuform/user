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
    
    // カレンダー
    $(function () {
        $('input[name="date02"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
    
    // カレンダー
    $(function () {
        $('input[name="date03"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
    
    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
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
