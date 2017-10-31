$(function(){
    $('#beginTime').date({},function(str){
        $('#beginTime').val(str.substring(0,7))
    });

    $(".icon-arrow-down").click(function(){
        $(".dataTime").click();
    });
    //循环列表
    for(var i=0;i<listZdData.length;i++){
        $(".count-list-box").append("<div class='count-list'><h1>"+listZdData[i].title+"</h1><p>上报日期："+listZdData[i].date+"</p><p>项目类型："+listZdData[i].type+"</p>"+
                                       "<p>合作方："+listZdData[i].partner+"</p><p>合作方式："+listZdData[i].partType+"</p><p>项目总投资："+listZdData[i].totalInvest+"</p><p class='info'>项目内容："+listZdData[i].content+                            
                                       "</p><p>进展情况："+listZdData[i].progress+"</p><p>备注："+listZdData[i].remark+"</p><p>上报责任人："+listZdData[i].personLiable+"</p></div>");
    }
});


var listZdData = [
    {
        "title":"寿光市智慧农业云平台项目",
        "date":"2017-08-17",
        "type":"现代农业",
        "partner":"市外方（XX），市内方（潍坊市招商局）",
        "partType":"合作",
        "totalInvest":"10亿元",
        "content":"智慧农业是农业生产的高级阶段，是集新兴的互联网、移动互联网、云计算和……",
        "progress":" ",
        "remark":" ",
        "personLiable":""
    },
    {
        "title":"寿光市智慧农业云平台项目",
        "date":"2017-08-17",
        "type":"现代农业",
        "partner":"市外方（XX），市内方（潍坊市招商局）",
        "partType":"合作",
        "totalInvest":"10亿元",
        "content":"智慧农业是农业生产的高级阶段，是集新兴的互联网、移动互联网、云计算和……",
        "progress":" ",
        "remark":" ",
        "personLiable":""
    },
    {
        "title":"寿光市智慧农业云平台项目",
        "date":"2017-08-17",
        "type":"现代农业",
        "partner":"市外方（XX），市内方（潍坊市招商局）",
        "partType":"合作",
        "totalInvest":"10亿元",
        "content":"智慧农业是农业生产的高级阶段，是集新兴的互联网、移动互联网、云计算和……",
        "progress":" ",
        "remark":" ",
        "personLiable":""
    }
]
   