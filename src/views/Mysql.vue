<template>
    <div id="main">
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="服务器">
                <el-select v-model="form.host" placeholder="请选择服务器">
                    <el-option label="开发服" value="192.168.1.243"></el-option>
                    <el-option label="测试服" value="192.168.1.204"></el-option>
                    <el-option label="产品服" value="192.168.1.242"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="表名">
                <el-select v-model="form.tbname" placeholder="请选择表名">
                    <el-option label="tb_game_data_pool_record" value="tb_game_data_pool_record"></el-option>
                    <el-option label="tb_user_pay_income_record" value="tb_user_pay_income_record"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="record_id">
                <el-input type="text" v-model="form.record_id"></el-input>
            </el-form-item>
            <el-form-item label="record_index">
                <el-input type="text" v-model="form.record_index"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            <el-form-item label="查询结果">
                <pre id="result" style="outline: 1px solid #ccc; padding: 5px; margin: 5px;width: 100vh" ></pre>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    var srvIp = "192.168.1.242"; // 查询服务ip
    var srvPort = 7015; // 查询服务端口
    var xmlHttp = new XMLHttpRequest();

    function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

    function callback(){
        if (xmlHttp.readyState==4) {// 4 = "loaded"
            if (xmlHttp.status==200) {// 200 = OK
                var jsonStr = JSON.stringify(JSON.parse(xmlHttp.responseText), undefined, 2);
                var element = document.getElementById('result');
                element.textContent = jsonStr.replace(/\\u000[0-9]/g,"");
                console.log(jsonStr);
            } else {
                alert("callback error: " + xmlHttp.status);
            }
        }
    }

    export default {
        data() {
            return {
                form: {
                    host: '',
                    tbname:'',
                    record_id:'',
                    record_index:'',
                }
            }
        },
        methods: {
            onSubmit() {
                var ip = this.form.host;
                if(ip=="") { alert("服务器未选择!"); return (false); }
                var tbname = this.form.tbname;
                if(tbname=="") { alert("表未选择!"); return (false); }
                var param1 = trim(this.form.record_id);
                if (param1 == "") { alert("参数1错误!"); return (false); }
                var param2 = trim(this.form.record_index);
                var url = "http://"+srvIp+":"+srvPort+"/MysqlQuery?";
                url = url + "ip=" + ip + "&cmd=query&tbname=" + tbname + "&param1=record_id&param2=" + param1;
                if(param2 != ""){
                    url = url + "&param3=record_index&param4=" + param2;
                }
                console.log("memcache submit!", ip, tbname, param1, url);

                xmlHttp.onreadystatechange = callback;
                xmlHttp.open("GET", url, true);//
                xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
                xmlHttp.send();
            }
        }
    }
</script>
<style>
</style>
