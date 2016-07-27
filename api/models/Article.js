/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var moment = require('moment');
module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  //tableName: 'tb_title',
  attributes: {

    /*createdAt: {
      type: 'string',
      defaultsTo: function(){
        return moment().format('YYYY-MM-DD HH:mm:ss');
      }
    },
    updatedAt: {
      type: 'string',
      defaultsTo: function(){
        return moment().format('YYYY-MM-DD HH:mm:ss');
      }
    }*/

    title: {
      type: 'string',
      columnName: 'news_title',
      size: 60
    },
    keywords: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    summary: {
      type: 'string'
    },
    content: {
      type: 'text'
    }



  }
};

