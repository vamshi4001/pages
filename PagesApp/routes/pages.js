var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;
var pagesSchema = new Schema(
    {
        name:{type:'string'},
        img: {type:'string'},
        url: {type:'string'},
        likes: {type:'number'},
        type: {type:'string'},
        id: {type:'string'},
        coverimg: {type:'string'}
    }
);

var Page = mongoose.model('Page', pagesSchema);

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    Page.find(function (err, data) {
        res.json({"results": data})
    });
});

router.get('/:name', function (req, res, next) {
    Page.find({name:req.params.name},function (err, data) {
        res.json({"results": data})
    });
});

module.exports = router;