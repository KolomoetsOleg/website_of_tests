$(document).ready(function(){


    var i = $('tr').size()
    var j = 0
    $('.type').click(function(){


    })


    $('#add').one('click',function() {

        var type =  $('input:radio:checked').val();
        var input =  '<li class="answer"><input type="'+ type +'" name="bacr"/> <input type="text"/></li>';


        $('<div>Введите вопрос: <input type="text" name="label" value = ""/><br>').fadeIn('slow').appendTo('.inputs');



//            'Варианты ответа : <div class="li"> <br>').fadeIn('slow').appendTo('.inputs');

//        for(; j<5; j++){
//            $(input).fadeIn('slow').appendTo('.inputs');
//        }

//        $('</div>' +
//            '</div>').fadeIn('slow').appendTo('.inputs');

    });

    $('#remove').click(function() {
        if(j > 0) {
            $('.answer:last').remove();
            j--;
        }
    });

    $('#reset').click(function() {
        while(i > 2) {
            $('.field:last').remove();
            i--;
        }
    });

    $('#add_answer').click(function(){

        var type =  $('input:radio:checked').val();
        if(j<10)
        {
        $('<li class="answer"><input type="'+ type +'" name="bacr"/> <input type="text"/></li>').fadeIn('slow').appendTo('.li');
        j++;
        }
    });


// here's our click function for when the forms submitted

    $('.submit').click(function(){


        var answers = [];
        $.each($('.field'), function() {
            answers.push($(this).val());
        });

        if(answers.length == 0) {
            answers = "none";
        }

        alert(answers);

        return false;

    });



});