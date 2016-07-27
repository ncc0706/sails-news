/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  list: function(req, res){
    Article.find().exec(function(err, articles){
      res.view('article/article_list', {'articles': articles});
    });
  },

  /**
   * 保存文章
   * @param req
   * @param res
   */
  addArticle: function(req, res){
    //console.log(req.body);
    Article.create(req.body).exec(function(err, article){
      if(err) return res.send(500);
      res.redirect('/article/list');
    });
  },

  detail: function(req, res){
    var id = req.params.id;
    if(!id) return res.send('error');

    Article.findOne({id: req.params.id}).exec(function(err, article){
      if(err) return res.send('error....');
      res.view('article/article_detail', {'article': article});
    });


  }


};

