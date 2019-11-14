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
                <el-input type="textarea" v-model="form.result"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    host: '',
                    tbname:'',
                    record_id:'',
                    record_index:'',
                    result:'',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('mysql submit!');
            }
        }
    }
</script>
<style>
</style>
