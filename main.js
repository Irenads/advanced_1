let res = [false, false, false, false];

//Bold
$('[name=bold]').click(function () {
    res[0] = !res[0];
    if (res[0]) {
        $(this).css('background-color', 'rgb(226, 230, 234)'),
            $('.conteiner').css('font-weight', 'bold')
    }
    else {
        $(this).css('background-color', ''),
            $('.conteiner').css('font-weight', '')
    }
})
//italic
$('[name=italic]').click(function () {
    res[1] = !res[1];
    if (res[1]) {
        $(this).css('background-color', 'rgb(226, 230, 234)'),
            $('.conteiner').css('font-style', 'italic')
    }
    else {
        $(this).css('background-color', ''),
            $('.conteiner').css('font-style', '')
    }
})
//underline
$('[name=underlined]').click(function () {
    res[2] = !res[2];
    if (res[2]) {
        $(this).css('background-color', 'rgb(226, 230, 234)'),
            $('.conteiner').css('text-decoration', 'underline')
    }
    else {
        $(this).css('background-color', ''),
            $('.conteiner').css('text-decoration', '')
    }
})
//cross out
$('[name=crossOut]').click(function () {
    res[3] = !res[3];
    if (res[3]) {
        $(this).css('background-color', 'rgb(226, 230, 234)'),
            $('.conteiner > p').css('text-decoration', 'line-through')
    }
    else {
        $(this).css('background-color', ''),
            $('.conteiner > p').css('text-decoration', '')
    }
})

//left
$('[name=left]').click(function () {
    $('.conteiner').css('text-align', 'left')
    $(this).css('background-color', 'rgb(226, 230, 234)'),
        $('[name=center]').css('background-color', ''),
        $('[name=right]').css('background-color', '')
});

//center
$('[name=center]').click(function () {
    $('.conteiner').css('text-align', 'center')
    $(this).css('background-color', 'rgb(226, 230, 234)'),
        $('[name=left]').css('background-color', ''),
        $('[name=right]').css('background-color', '')
});

//right
$('[name=right]').click(function () {
    $('.conteiner').css('text-align', 'right')
    $(this).css('background-color', 'rgb(226, 230, 234)'),
        $('[name=left]').css('background-color', ''),
        $('[name=center]').css('background-color', '')
});

//font-family
$('.fontFamily > a').click(function () {
    $('.conteiner').css('font-family', $(this).text())
})

//font-size

$('.fontSize > a').click(function () {
    $('.conteiner').css('font-size', $(this).text())
})


//text color
$('.boxTextColor').hover(
    function () {
        $(this).css('box-shadow', '2px 2px 3px 2px grey')
    },
    function () {
        $(this).css('box-shadow', '')
    }
)

$('.boxTextColor').click(function () {
    $('.conteiner').css('color', $(this).css('background-color'))
})

//background color
$('.boxBGColor').hover(
    function () {
        $(this).css('box-shadow', '2px 2px 3px 2px grey')
    },
    function () {
        $(this).css('box-shadow', '')
    }
)

$('.boxBGColor').click(function () {
    $('.conteiner').css('background-color', $(this).css('background-color'))
    $('.conteiner').css('background-image', '')
})


//bacground image
$('.image').hover(
    function () {
        $(this).css('box-shadow', '2px 2px 3px 2px grey')
    },
    function () {
        $(this).css('box-shadow', '')
    }
)

$('.image').click(function () {
    $('.conteiner').css('background-image', $(this).css('background-image'))
})


$('.signIn').click(function(){
    if($('#login').val() == 'admin' && $('#password').val() == 'admin'){
        $('.signIn').attr('data-dismiss', 'modal');
        $('#login').addClass('is-valid')
        $('#password').removeClass('is-valid')
        $('#password').val('');
            $('#login').val('')
    }
    else if($('#login').val() != 'admin' && $('#password').val() == 'admin' || $('#login').val() == 'admin' && $('#password').val() != 'admin'){
        $('.signIn').removeAttr('data-dismiss', 'modal')
        $('#password').addClass('is-invalid')
        $('#login').addClass('is-invalid')
        $('.invalidSingIn').css('display', 'block')
        $('.invalidValue').css('display', '')
    }
    else{
        $('.signIn').removeAttr('data-dismiss', 'modal')
        $('#password').addClass('is-invalid')
        $('#login').addClass('is-invalid')
        $('.invalidValue').css('display', 'block')
        $('.invalidSingIn').css('display', '')
        
    }
})





$('[name=slash]').click(function () {
    $('.first').css('display', 'none'),
        $('.second').css('display', 'flex'),
        $('textarea').css('display', 'block'),
        $('.conteiner').css('display', 'none'),
        $('textarea').val($('.conteiner').html())
})

$('[name=saveCode]').click(function () {
    $('.second').css('display', 'none'),
        $('.first').css('display', 'flex'),
        $('.conteiner').html($('textarea').val()),
        $('.conteiner').css('display', 'block'),
        $('textarea').css('display', 'none')

})

$('.reset').click(function () {
    $('.table>div>div>input').val(''),
        $('.table>div>div>select').val('defolt'),
        $('.ol>div>input').val(''),
        $('.ol>div>select').val('defolt')
    $('.ul>div>input').val(''),
        $('.ul>div>select').val('defolt')

})



let textarea = document.querySelector('textarea');
$('.createTable').click(function () {
    let countTR = $('#countTR').val();
    let countTD = $('#countTD').val();
    let tdWidth = $('#tdWidth').val();
    let tdHeight = $('#tdHeight').val();
    let borderWidht = $('#borderWidht').val();
    let borderType = $('#borderType').val();
    let borderColor = $('#borderColor').val();

    if($('.table>div>div>input').val() == 0 || $('.table>div>div>select').val() == "defolt"){
        $('.createUlLi').removeAttr('data-dismiss', 'modal'),
        $('.table>p').css('display', 'block')

    }
    else{
    let divText = '';
    for (let i = 0; i < countTR; i++) {
        divText += '<tr>\n';
        for (let j = 0; j < countTD; j++) {
            divText += `<td style="width: ${tdWidth}px; height: ${tdHeight}px; border: ${borderWidht}px ${borderType} ${borderColor}">TD</td>\n`;
        }
        divText += '</tr>\n';
    }

    textarea.value += `<table>${divText}</table>`;
    $(this).attr('data-dismiss', 'modal'),
    $('.table>div>div>input').val(''),
        $('.table>div>div>select').val('defolt')
        $('.table>p').css('display', '')
}
})


$('.createOlLi').click(function () {
    let countLi = $('#countLi').val();
    let typeMarks = $('#olType').val();
    if (countLi == 0 || typeMarks == "defolt") {
        $('.createOlLi').removeAttr('data-dismiss', 'modal')
        if (countLi != 0) {
            $('#countLi').removeClass('is-invalid')
            $('#countLi').addClass('is-valid')
            $('.ol>div>select').addClass('is-invalid')
        }
        else if (typeMarks != "defolt") {
            $('#countLi').addClass('is-invalid')
            $('.ol>div>select').removeClass('is-invalid')
            $('.ol>div>select').addClass('is-valid')
        }
        else {
            $('#countLi').addClass('is-invalid')
            $('.ol>div>select').addClass('is-invalid')
        }
        $('.ol>p').css('display', 'block')
    }

    else {
        let li = '';
        for (let i = 1; i <= countLi; i++) {
            li += `<li type="${typeMarks}">Item ${i}</li>\n`;
        }
        textarea.value += `<ol type="${typeMarks}">\n${li}</ol>`
        $(this).attr('data-dismiss', 'modal'), 
        $('.ol>div>input').val(''),
            $('.ol>div>select').val('defolt')
        $('#countLi').removeClass('is-valid'),
            $('#countLi').removeClass('is-invalid'),
            $('.ol>div>select').removeClass('is-valid'),
            $('.ol>div>select').removeClass('is-invalid'),
            $('.ol>p').css('display', ''),
            $('.ol>div>input').val(''),
            $('.ol>div>select').val('defolt')
    }
})


$('.createUlLi').click(function () {
    let countUlLi = $('#countUlLi').val();
    let typeMarks = $('#ulType').val();
    if (countUlLi == 0 || typeMarks == "defolt") {
        $('.createUlLi').removeAttr('data-dismiss', 'modal')
        if (countUlLi != 0) {
            $('#countUlLi').removeClass('is-invalid')
            $('#countUlLi').addClass('is-valid')
            $('.ul>div>select').addClass('is-invalid')
            console.log('if')
        }
        else if (typeMarks != "defolt") {
            $('#countUlLi').addClass('is-invalid')
            $('.ul>div>select').removeClass('is-invalid')
            $('.ul>div>select').addClass('is-valid')
            console.log('else if')
        }
        else {
            $('#countUlLi').addClass('is-invalid')
            $('.ul>div>select').addClass('is-invalid')
        }
        $('.ul>p').css('display', 'block')

    }

    else {
        let li = '';
        for (let i = 1; i <= countUlLi; i++) {
            li += `<li>Item  ${i}</li>\n`;
        }

        textarea.value += `<ul type="${typeMarks}">\n${li}</ul>`
        $(this).attr('data-dismiss', 'modal'),
            $('#countUlLi').removeClass('is-valid'),
            $('#countUlLi').removeClass('is-invalid'),
            $('.ul>div>select').removeClass('is-valid'),
            $('.ul>div>select').removeClass('is-invalid'),
            $('.ul>p').css('display', ''),
            $('.ul>div>input').val(''),
            $('.ul>div>select').val('defolt')
    }
})


