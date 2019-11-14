/**
 * 工具类对象
 */

var srvIp = "192.168.1.242"; // 查询服务ip
var srvPort = 7015; // 查询服务端口

var utils = {}

utils.trim=function(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}

// utils.callback=function () {
//     if (xmlHttp.readyState==4) {// 4 = "loaded"
//         if (xmlHttp.status==200) {// 200 = OK
//             var element = document.getElementById('result')
//             var jsonStr = JSON.stringify(JSON.parse(xmlHttp.responseText), undefined, 2);
//             element.textContent = jsonStr.replace(/\\u000[0-9]/g,"");
//         } else {
//             alert("callback error: " + xmlHttp.status);
//         }
//     }
// }
