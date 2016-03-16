$( document ).ready(function() {
    $("#output").val('0');
    initData();
    $("[name='number']").click(function() {
        var strNumber = $(this).html();
        if (localStorage.sign === ''){
            if (localStorage.execute === 'true') {
                initData();
            }
            localStorage.number1 += strNumber;
            setInputValue(localStorage.number1);
            $("#clear").html('C');
            localStorage.temp = '1';
        } else {
            localStorage.number2 += strNumber;
            setInputValue(localStorage.number2);
            $("#clear").html('C');
            localStorage.temp = '2';
        }
    });

    $("[name='react']").click(function() {
        var bufferStr = $(this).html();
        if (localStorage.number2 != ''){
            reactRouter();
        }
        localStorage.sign = bufferStr;
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
    $("#clear").click(function() {
        var clearValue = $("#clear").html();
        if (clearValue === 'C'){
            if (localStorage.temp === '1') {
                localStorage.number1 = '';
            } else {
                localStorage.number2 = '';
            }
        } else {
            reset('');
        }
        $("#clear").html('AC');
        $("#output").val('0');
    });
});