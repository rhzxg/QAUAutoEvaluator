// ==UserScript==
// @name         QAUAutoEvaluate 青农自动评教
// @namespace    https://github.com/CodingDogzxg
// @version      0.1
// @description  自动评教 以防鼠标点击累死人
// @author       QAUCodingDog_zxg
// @include      http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_find.do?*
// @include      http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_list.do?*
// @include      http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_edit.do?*
// @license      MIT
// ==/UserScript==
var url = location.pathname,
mainPage = "http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_find.do",
evaluationInfoPage = "http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_list.do",
evaluationMainPage = "http://jwglxt.qau.edu.cn/jsxsd1/xspj/xspj_edit.do";

// 评教页面第一页 显示课程分类
if (mainPage.indexOf(url) != -1) {
    var tableBox = document.getElementsByClassName("Nsb_r_list Nsb_table");
    var tableList = tableBox[0].getElementsByTagName("a");


    // window.open() 非用户发出会被浏览器阻挡 延时则不会
    // setTimeout(window.open("http://www.baidu.com", "_blank"), 500);

    var pageList = [];
    for(var i=0;i<tableList.length;i++){
        pageList.push(tableList[i].getAttribute("href"));
    }
    for(var j=0; j<pageList.length; j++) {
        window.open(pageList[j], "_blank");
    };

}

// 评教页面第二页 显示老师
if (evaluationInfoPage.indexOf(url) != -1) {
    console.log(1);
    var teacherTableBox = document.getElementsByClassName("Nsb_r_list Nsb_table");
    var teacherTableList = teacherTableBox[0].getElementsByTagName("a");
    // /\'(.*)\'/.exec(c)[0].slice(1, -1)

    var teacherPageList = [];
    for(var t_i=0;t_i<teacherTableList.length;t_i++){
        teacherPageList.push(/\'(.*)\'/.exec(teacherTableList[t_i].getAttribute("href"))[0].slice(1, -11));
    };
    console.log(teacherPageList[0]);
    for(var t_j=0; t_j<teacherPageList.length; t_j++) {
        window.open(teacherPageList[t_j], "_blank");
    };
}

// 评教页面第三页 等级判断 保存按钮
if (evaluationMainPage.indexOf(url) != -1) {
    var allTable = document.getElementById("table1").getElementsByTagName("tr");
    var allTableLen = allTable.length;
    for(var k=1; k<allTableLen; k++){
        if(k != allTableLen - 1){
        allTable[k].getElementsByTagName("td")[1].getElementsByTagName("input")[0].setAttribute("checked", "checked");
        }
        else{
        allTable[k].getElementsByTagName("td")[1].getElementsByTagName("input")[2].setAttribute("checked", "checked")
        }
    }
    var saveButton = document.getElementById("bc");
    saveButton.click();
}