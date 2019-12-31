<template>
  <div style="width: 100%">
    <el-row>
      <el-col :xl="12" :xs="18">
        <el-input v-model="f1" @blur="getData" placeholder="请输入关键字" prefix-icon="el-icon-edit" @keydown.enter.native="getData"></el-input>
      </el-col>
      <el-col :xl="2" :xs="2" style="text-align: start">
        <el-button @click="getData">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="records" style="width: 100%" v-loading="loading">
      <el-table-column prop="account" label="帐号"> </el-table-column>
      <el-table-column prop="remark" label="备注"> </el-table-column>
      <el-table-column prop="aid" label="数字id"> </el-table-column>
      <el-table-column prop="card" label="身份证"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="handleCheck(scope.row)">检查</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :xl="{span:6,offset:18}" :xs="{span:24,offset:0}" style="margin-top: 0.5%">
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="current"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="size"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
      </el-pagination>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      f1:'',
      records: [],
      size: localStorage['pageSize'] != undefined ? Number(localStorage['pageSize']) : 10,
      current: 1,
      total:0,
      loading: true
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.http
        .get("user/list", { params: { current: this.current, size: this.size ,f1:this.f1} })
        .then(res => {
          this.copy(res,this)
          this.loading = false;
        });
    },
    handleCheck(row){
      this.http.post("api/proxy",{url:"https://passport.jumpw.com/user.do"
      ,body:{
          dotype:0,
          account:row.account,
          idcard:row.card
        }
      })
      .then(res => {
        window.console.log(res)
      })
    },
    handleSizeChange(val) {
      localStorage['pageSize'] = this.size = val
      this.getData()
    },
    handleCurrentChange(val) {
      this.current = val
      this.getData()
    }
  }
};
</script>
