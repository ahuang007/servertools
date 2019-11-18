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
            <el-form-item label="game_type">
                <el-input type="text" v-model="form.game_type"></el-input>
            </el-form-item>
            <el-form-item label="service_id">
                <el-input type="text" v-model="form.service_id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            <el-form-item label="查询结果">
                <pre id="result"></pre>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import global_ from "../common/Global";
    var xmlHttp = new XMLHttpRequest();
    var tbname = "tb_game_service_stat_info";

    export default {
        data() {
            return {
                form: {
                    host: '',
                    game_type:'',
                    service_id:'',
                }
            }
        },
        methods: {
            onSubmit() {
                var ip = this.form.host;
                if(ip=="") { alert("服务器未选择!"); return (false); }
                var param1 = this.GLOBAL.trim(this.form.game_type);
                if (param1 == "") { alert("参数1错误!"); return (false); }
                var param2 = this.GLOBAL.trim(this.form.service_id);
                if (param2 == "") { alert("参数2错误!"); return (false); }

                var url = "http://"+this.GLOBAL.srvIp+":"+this.GLOBAL.srvPort+"/MysqlQuery?";
                url = url + "ip=" + ip + "&cmd=query&tbname=" + tbname + "&param1=game_type&param2=" + param1;
                url = url + "&param3=service_id&param4=" + param2;
                window.console.log("mysql submit!", url);

                xmlHttp.onreadystatechange =  function() { global_.callback(xmlHttp);}
                xmlHttp.open("GET", url, true);//
                xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
                xmlHttp.send();
            }
        }
    }
</script>
<style>
</style>
