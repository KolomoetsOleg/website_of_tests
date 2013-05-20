$(document).ready(function(){

  var j = 0

  $('#add').click(function() {

    $('#content, #form_data').empty();
    $('.answers, .quest, .inputs, #send').empty();

    $('<p align="center"> Выбирите тип вопроса:'+
      '<ul class="unstyled"><li>Один ответ: <input type="radio" name="quest[tip_vop]" value="1"  /></li>'+
      '<li>Несколько ответов: <input type="radio" name="quest[tip_vop]" value="2" /></li>'+
      '<li>Ответ словомом: <input type="radio" name="quest[tip_vop]" value="3" /></li>' +
      '<li>С загрузкой файла: <input type="radio" name="quest[tip_vop]" value="4" /></li>'+
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
        case "4": type = "file"
          break;
      };

      if (type_id == "4")
      {
        var test_id = $('#test_id input:hidden').attr('value')
        $('<iframe src="../upload/'+test_id+'/new_load"></iframe>').fadeIn('slow').appendTo('.answers');
      }
      else
      {

        $('<span>Введите вопрос:</span><br>' +
          '<input id="title"  type="text" name="quest[title]" value = ""/><br>'+
          '<span>Введите вес вопроса:</span><br>'+
          '<input id="title"  type="number" step="0.1" min="0.1" max="1" name="quest[cost]" value = "0.1"/><br>').fadeIn('slow').appendTo('.quest');
        $('<span>Ответ :</span> <br>').fadeIn('slow').appendTo('.answers');

        if (type == "hidden") {j = 4}

        for(; j<5; j++){
          $('<li id="'+j+'"><input name="status[]" value="'+j+'"  type="'+ type +'"/> ' +
            '<input name="answer[]" type="text"/>' +
            '</li>').fadeIn('slow').appendTo('.answers');
        }

        if (type != "hidden")
        {
          $('<a href="#" id="add_answer" class="btn btn-info">+</a>   ' +
            '<a href="#" id="remove" class="btn btn-info">-</a>').fadeIn('slow').appendTo('#send')
        }
        $('<input name="submit" type="submit" class="submit btn btn-primary" value="Готово">').fadeIn('slow').appendTo('#send');
      }


      $('#remove').click(function() {
        if(j > 1) {
          $('#'+(j-1)+'').remove();
          j--;
        }
      });


      $('#add_answer').click(function(){

        if(j<10)
        {
          $('<li id="'+j+'"><input name="status[]" value="'+j+'"  type="'+ type +'"/> ' +
            '<input name="answer[]" type="text"/></li>').fadeIn('slow').appendTo('.answers');
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

          var data = $('#form_data, #test_id,#answers, .quest').find('input').serialize();
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



