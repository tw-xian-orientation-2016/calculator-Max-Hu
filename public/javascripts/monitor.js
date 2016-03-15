$( document ).ready(function() {
    $("#output").val('0');
    initData();
    $("[name='number']").click(function() {
        var strNumber = $(this).html();
        if (localStorage.sign === ''){
            localStorage.number1 += strNumber;
            setInputValue(localStorage.number1);
        } else {
            localStorage.number2 += strNumber;
            setInputValue(localStorage.number2);
        }
    });

    $("[name='react']").click(function() {
        var bufferStr = $(this).val();
        if (localStorage.sign === ''){
            localStorage.sign = bufferStr;
        } else {
            reactRouter();
        }
    });

    $("#percent").click(function() {
        if (localStorage.number1 != ''){
            percent();
        }
    });
    $("#reverse").click(function() {
        if (localStorage.number1 != ''){
            reverse();
        }
    });
});