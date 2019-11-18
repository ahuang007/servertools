<script>
    const srvIp="192.168.10.201";
    const srvPort=7015;
    const trim=function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
    function callback(xmlHttp){
        if (xmlHttp.readyState==4) {// 4 = "loaded"
            if (xmlHttp.status==200) {// 200 = OK
                var jsonStr = JSON.stringify(JSON.parse(xmlHttp.responseText), undefined, 2);
                var element = document.getElementById('result');
                element.textContent = jsonStr.replace(/\\u000[0-9]/g,"");
                window.console.log(jsonStr);
            } else {
                alert("callback error: " + xmlHttp.status);
            }
        }
    }

    export default {
        srvIp,
        srvPort,
        trim,
        callback,
    }
</script>
