function reactRouter(){
    switch (localStorage.sign) {
        case '+':
            $.ajax({
                method:'post',
                url: '/api/addition',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {'number1':localStorage.number1,'number2':localStorage.number2}
            }).done(function(data){
                console.log(data);
                reset(data);
            });
            break;
        case '-':
            $.ajax({
                method:'post',
                url: '/api/subtraction',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {'number1':localStorage.number1,'number2':localStorage.number2}
            }).done(function(data){
                reset(data);
            });
            break;
        case '*':
            $.ajax({
                method:'post',
                url: '/api/multiplication',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {'number1':localStorage.number1,'number2':localStorage.number2}
            }).done(function(data){
                reset(data);
            });
            break;
        case '/':
            $.ajax({
                method:'post',
                url: '/api/division',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {'number1':localStorage.number1,'number2':localStorage.number2}
            }).done(function(data){
                reset(data);
            });
            break;
    }
}

function initData(){
    localStorage.setItem('number1','');
    localStorage.setItem('number2','');
    localStorage.setItem('sign','');
    $("#clear").html('AC');
    localStorage.setItem('temp','1');
    localStorage.execute = false;
}

function reset(result){
    localStorage.number1 = result;
    localStorage.number2 = '';
    if (localStorage.sign === '=') localStorage.sign = '';
    if (result === 'NaN' || result === 'Infinity'){
        $("#output").val('错误');
    }else {
        $("#output").val(result);
    }
    localStorage.execute = true;

}

function percent(){
    $.ajax({
        method:'post',
        url: '/api/percent',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: {'number1':localStorage.number1}
    }).done(function(data){
        reset(data);
    });
}

function reverse(){
    $.ajax({
        method:'post',
        url: '/api/reserve',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: {'number1':localStorage.number1}
    }).done(function(data){
        reset(data);
    });
}

function setInputValue(number) {
    $("#output").val(number);
}