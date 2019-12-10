<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="account" label="帐号"> </el-table-column>
    <el-table-column prop="remark" label="备注"> </el-table-column>
    <el-table-column prop="aid" label="数字id"> </el-table-column>
    <el-table-column prop="card" label="身份证"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.http.post('user/list',{current:-1,size:10}).then(res => this.list = res.data)
  }
};
</script>
