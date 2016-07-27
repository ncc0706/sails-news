
$(function () {
  var editor = new wangEditor('content');
  editor.create();

  $("#con").on('click', function(){
    // 获取编辑器区域完整html代码
    var html = editor.$txt.html();

    console.log(html);

    // 获取编辑器纯文本内容
    var text = editor.$txt.text();

    console.log(text);

    // 获取格式化后的纯文本
    var formatText = editor.$txt.formatText();
    console.log(formatText);
  })

})


