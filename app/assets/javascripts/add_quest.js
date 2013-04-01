$(document).ready(function(){


    var i = $('tr').size()
    var type
    var j = 0
    $('.type').click(function(){


    })


    $('#add').one('click',function() {

        var type_id =  $('input:radio:checked').val();
        switch (type_id){
            case "1": type = "radio"
                break;
            case "2": type = "checkbox"
                break;
            case "3": type = "hidden"
                break;
        };
        var input =  '<li id="answers"><input name="answer[status]" type="'+ type +'"/> <input name="answer[answer]" type="text"/></li>';


        $('Введите вопрос: <input id="title"  type="text" name="quest[title]" value = ""/><br>').fadeIn('slow').appendTo('.quest');



            $('Варианты ответа : <br>').fadeIn('slow').appendTo('.answers');
        if (type == "hidden") {j = 4}

        for(; j<5; j++){
            $('<li id="'+j+'"><input name="status[]" value="'+j+'"  type="'+ type +'"/> <input name="answer[]" type="text"/></li>').fadeIn('slow').appendTo('.answers');
        }

        $('</div>').fadeIn('slow').appendTo('.inputs');

    });

    $('#remove').click(function() {
        if(j > 0) {
            $('#'+(j-1)+'').remove();
            j--;
        }
    });


    $('#add_answer').click(function(){

        if(j<10)
        {
        $('<li id="'+j+'"><input name="status[]" value="'+j+'"  type="'+ type +'"/> <input name="answer[]" type="text"/></li>').fadeIn('slow').appendTo('.answers');
        j++;
        }
    });


// here's our click function for when the forms submitted

    $('.submit').click(function(e){

        var csrfToken = $("meta[name='csrf-token']").attr("content");
        $.ajaxSetup({
            headers: {
                'X-CSRF-Token': csrfToken
            }
        });

        e.preventDefault();

        var data = $('#form_data,#answers').find('input').serialize() ;
        console.log(data);
        $.ajax({

            type: "post",
            data: data,
            success: function(data) {console.log('done')}
        });

        location.reload();

    })



});