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
          <el-form-item label="命令">
              <el-select v-model="form.cmd" placeholder="请选择命令">
                  <el-option label="keys" value="keys"></el-option>
                  <el-option label="hgetall" value="hgetall"></el-option>
                  <el-option label="hget" value="hget"></el-option>
                  <el-option label="hkeys" value="hkeys"></el-option>
                  <el-option label="get" value="get"></el-option>
                  <el-option label="del" value="del"></el-option>
                  <el-option label="hdel" value="hdel"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="参数1">
              <el-input type="text" v-model="form.param1"></el-input>
          </el-form-item>
          <el-form-item label="参数2">
              <el-input type="text" v-model="form.param2"></el-input>
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
                // console.log(jsonStr);
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
                    cmd:'',
                    param1:'',
                    param2:''
                }
            }
        },
        methods: {
            onSubmit() {
                var ip = this.form.host;
                if(ip=="") { alert("服务器未选择!"); return (false); }
                var cmd = this.form.cmd;
                if(cmd=="") { alert("命令未选择!"); return (false); }
                var param1 = trim(this.form.param1);
                if (param1 == "") { alert("参数1错误!"); return (false); }
                var param2 = trim(this.form.param2);
                var url = "http://"+srvIp+":"+srvPort+"/RedisQuery?";
                url = url + "ip=" + ip + "&cmd=" + cmd + "&param1=" + param1;
                if(param2 != ""){
                    url = url + "&param2=" + param2;
                }
                console.log("redis submit!", ip, cmd, param1, param2, url);

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
