/**
 * Created by gavin on 27/07/2016.
 */

$(function () {
  var editor = new wangEditor('content');
  editor.create();

  $("#con").on('click', function(){
    // 获取编辑器区域完整html代码
    var html = editor.$txt.html();
    console.log(html);
  })

  $("#saveArticle").on('click', function(){

    var acontent = editor.$txt.html();

    $('#acontent').val(acontent);

    //alert(acontent + '------' + $('#acontent'));

    $('#articleForm').submit();

  });

})
