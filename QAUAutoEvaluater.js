// ==UserScript==
// @name         QAUAutoEvaluate 青农自动评教
// @namespace    https://github.com/CodingDogzxg
// @version      0.1
// @description  自动评教 以防鼠标点击累死人
// @author       QAUCodingDog_zxg
// @include      http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_find.do?*
// @license      MIT
// ==/UserScript==

var url = location.pathname,
mainPage = "http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_find.do?Ves",
evaluationInfoPage = "http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_find.do?pj",
evaluationMainPage = "http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_find.do?xnxq";

// 评教页面第一页 显示课程分类
if (url.indexOf(mainPage) != -1) {
    var tableBox = document.getElementsByClassName("Nsb_r_list Nsb_table");
    var tableList = tableBox[0].getElementsByTagName("a");

    // window.open() 非用户发出会被浏览器阻挡 延时则不会
    // setTimeout(window.open("http://www.baidu.com", "_blank"), 500);

    var pageList = [];
    for(var i=0;i<tableList.length;i++){
        pageList.push(tableList[i].getAttribute("href"));
    }


    for(var j=0; j<pageList.length; j++) {
        var currentWindow = setTimeout(window.open(tableList[j], "_blank"), 500);
        while (currentWindow != null || !currentWindow.closed) {
            // sleep函数 等待5s
            var startTime = new Date().getTime() + parseInt(5000, 10);
            while(new Date().getTime() < startTime) {}
        }
    };

}

// 评教页面第二页 显示老师
if (url.indexOf(evaluationInfoPage) != -1) {
    var teacherTableBox = document.getElementsByClassName("Nsb_r_list Nsb_table");
    var teacherTableList = teacherTableBox[0].getElementsByTagName("a");
    // /\'(.*)\'/.exec(c)[0].slice(1, -1)

    var teacherPageList = [];
    for(var t_i=0;t_i<teacherTableList.length;t_i++){
        teacherPageList.push(/\'(.*)\'/.exec(teacherTableList[t_i].getAttribute("href"))[0].slice(1, -11));
    }

    for(var t_j=0; j<pageList.length; j++) {
        var t_currentWindow = setTimeout(window.open(teacherTableList[t_j], "_blank"), 500);
        while (t_currentWindow != null || !t_currentWindow.closed) {
            // sleep函数 等待5s
            var t_startTime = new Date().getTime() + parseInt(5000, 10);
            while(new Date().getTime() < startTime) {}
        }
    };
    // 这里等待评教页面保存关闭 写提交按钮的点击事件
    // xxx.click();
    window.close();
}

// 评教页面第三页 等级判断 保存按钮
if (url.indexOf(evaluationMainPage) != -1) {
    document.getElementById("pj0601id_1_1").setAttribute("checked", "checked");
    document.getElementById("pj0601id_2_1").setAttribute("checked", "checked");
    document.getElementById("pj0601id_3_1").setAttribute("checked", "checked");
    document.getElementById("pj0601id_4_1").setAttribute("checked", "checked");
    document.getElementById("pj0601id_5_1").setAttribute("checked", "checked");
    document.getElementById("pj0601id_6_1").setAttribute("checked", "checked");
    document.getElementById("pj0601id_7_1").setAttribute("checked", "checked");
    document.getElementById("pj0601id_8_2").setAttribute("checked", "checked");
    // 这里写保存按钮的点击事件
    // xxx.click();
    window.close();
}