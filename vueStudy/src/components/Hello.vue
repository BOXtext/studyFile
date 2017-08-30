<template>
  <div id="app">
    <!-- <el-button @click="dialogVisible = true;">1111</el-button> -->
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    size="tiny"
  >
    <el-form  :model="ruleForm" :rules="ruleForm1" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <!-- <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
    </span>
  </el-dialog>
  <div class="">
    下面是测试get、
    或者post请求的请求框
  </div>
  <el-input v-model="forms.username"></el-input>
  <el-button type="primary" @click="testGet()">测试插入数据看方法</el-button>
  <el-button type="primary" @click="testPost()">测试Post方法</el-button>

  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

  <div id="main" style="width:400px; height: 400px;">

  </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Hello',
  data() {
      return {
        dialogVisible:false,
        ruleForm: {
          name:"11"
        },
        forms:{
          username: '',
          userpwd: '',
          userage: '',
          logindate: ''
        },
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        ruleForm1: {
            name:[
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
        }
      };
    },
    watch:{

    },
    mounted: function(){
      var myChart = echarts.init(document.getElementById('main'))
    },
    methods: {
      onSubmit() {
       this.testGet()
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      testPost() {
        var req = {
          name: '1'
        }
        this.$http.post('api/find').then((data) => {
          console.log(data);
        })
      },
      testGet() {
        var req = this.form;
        this.$http.post('api/insert', req).then((data) => {
          console.log(data);
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      test1() {
        this.$refs.ruleForm.validateField('t1');
        console.log(this.$refs.ruleForm.validateField('t1'));
      },
      test() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            var req = '123'
            this.$http.get('api/testGet?name='+req).then(data => {
              console.log(data);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      submitForm() {
        this.test()
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

}
</script>

<style lang="css">
.el-form {
  width: 40%;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
