<template>
  <div>
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
          <el-option label="stats" value="stats"></el-option>
          <el-option label="get" value="get"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="参数1">
        <el-input type="text" v-model="form.param1"></el-input>
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
          cmd:'',
          param1:'',
          result:'',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('memcace submit!');
      }
    }
  }
</script>
<style>
</style>
