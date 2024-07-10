$(function () {
    $('#change-color').on('click', function () {
        // 色が変わる
        $('#target').css('color', 'red');
    });

    $('#change-text').on('click', function () {
        // 文字が切り替わる
        $('#target').text('Hello!');
    });

    $('#fade-out').on('click', function () {
        // フェードアウトで文字が消える
        $('#target').fadeOut();
    });

    $('#fade-in').on('click', function () {
        // フェードインで文字が現れる
        $('#target').fadeIn();
    });
});
