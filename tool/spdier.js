var https=require("https");
var fs=require("fs");
var cheerio = require("cheerio")

var iconv = require('iconv-lite');


const wz="https://sou.zhaopin.com/?jl=600&in=100000000&kw=%E9%94%80%E5%94%AE&kt=3"; //网址

var strHtml="";
var results=[];

https.get(wz,function(res){
     
    var length=0;
    var arr=[];
    res.on("data",function(chunk){
        arr.push(chunk);
        length+=chunk.length;
    });   
    res.on("end",function(){
        var data=Buffer.concat(arr,length);
        var change_data = iconv.decode(data,'iso-8859-1'); 
        console.log(change_data .toString());
    }) 
});