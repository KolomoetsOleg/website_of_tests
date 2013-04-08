$(document).ready(function(){

    var j = 0




    $('#add').click(function() {

        $('#content, #form_data').empty();
        $('.answers, .quest, .inputs, #send').empty();

        $('<p> Выбирите тип вопроса:'+
            '<ul>'+
            '<li>Один ответ:<input type="radio" name="quest[tip_vop]" value="1" /></li>'+
            '<li>Несколько ответов:<input type="radio" name="quest[tip_vop]" value="2" /></li>'+
            '<li>Ответ вопросом:<input type="radio" name="quest[tip_vop]" value="3" /></li>'+
            '</ul>').fadeIn('slow').appendTo('#form_data');



        $('#form_data input:radio').click(function(){
            var j = 0
            $('.answers, .quest, .inputs, #send').empty();

            var type_id =  $('input:radio:checked').val();
            switch (type_id){
                case "1": type = "radio"
                    break;
                case "2": type = "checkbox"
                    break;
                case "3": type = "hidden"
                    break;
            };


            $('Введите вопрос: <input id="title"  type="text" name="quest[title]" value = ""/><br>').fadeIn('slow').appendTo('.quest');



            $('Варианты ответа : <br>').fadeIn('slow').appendTo('.answers');
            if (type == "hidden") {j = 4}

            for(; j<5; j++){
                $('<li id="'+j+'"><input name="status[]" value="'+j+'"  type="'+ type +'"/> ' +
                    '<input name="answer[]" type="text"/>' +
                    '</li>').fadeIn('slow').appendTo('.answers');
            }


            if (type != "hidden")
            {
                $('<a href="#" id="add_answer">Добавить ответ</a>   <a href="#" id="remove">Удалить ответ</a>').fadeIn('slow').appendTo('#send');
            }



            $('<input name="submit" type="submit" class="submit" value="ОК">').fadeIn('slow').appendTo('#send');



            $('#remove').click(function() {
                if(j > 1) {
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

                var data = $('#form_data, #test_id,#answers, .quest').find('input').serialize() ;
                console.log(data);
                $.ajax({

                    type: "post",
                    data: data,
                    success: function(data) {console.log('done')}
                });
                location.reload();

            });

        });

    });


    //    Here is update quest function
    $('.update').click(function(){

        $('.answers, .quest, .inputs, #send, #form_data').empty();

        var csrfToken = $("meta[name='csrf-token']").attr("content");
        $.ajaxSetup({
            headers: {
                'X-CSRF-Token': csrfToken
            }
        });

        $.ajax({
            url: "/admin/quests/"+$(this).attr('name')+"/edit",
            type: "get",
            success: function(html) {$('#content').html(html)}
        });


    });

});