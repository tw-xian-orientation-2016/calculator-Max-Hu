function reactRouter(){
    switch (localstorage.sign) {
        case '+':
            $.ajax({
                method:'post',
                url: '/api/addition',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {'number1':localStorage.number1,'number2':localStorage.number2}
            }).done(function(data){
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
}

function reset(result){
    localstorage.number1 = result;
    $("#output").text(result);
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