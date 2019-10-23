<template>
  <div>
    <el-dialog
      :modal-append-to-body="isShowZC"
      title="cookies"
      :visible.sync="dialogVisible"
      width="60%">
      <ul style="list-style: none">
        <li v-for="(item,index) in showCookieList" v-show="showCookieList.length" style="margin-top: 5px">
          <el-input :disabled="true" v-model="item.cKey" placeholder="请输入key" style="width: 200px"></el-input>
          <el-input :disabled="true" v-model="item.cValue" placeholder="请输入value" style="margin-left: 10px;width: 200px"></el-input>
          <el-input :disabled="true" v-model="item.domain" placeholder="请输入domain" style="margin-left: 10px;width: 200px"></el-input>
          <el-input :disabled="true" v-model="item.expireTime" placeholder="请输入过期时间" style="margin-left: 10px;width: 200px"></el-input>
        </li>
        <li v-show="!showCookieList.length">
          没有cookie
        </li>
      </ul>
    </el-dialog>
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="HTTP" name="http">
        <el-form :rules="rules" :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-form-inline">
          <el-form-item label="项目模块" prop="moduleId">
            <el-cascader
              placeholder="项目模块"
              :options="proList"
              :props="{value:'id',label:'name'}"
              v-model="ruleForm.moduleId"
              clearable>
            </el-cascader>
          </el-form-item>
          <el-form-item label="接口名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="URL" prop="url">
            <el-input v-model="ruleForm.url">
            </el-input>
          </el-form-item>
          <el-form-item label="请求方式" prop="way">
            <el-select v-model="ruleForm.way" placeholder="请选择请求方式">
              <el-option v-for="item in requestWayList" :value="item.id" :label="item.way"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="依赖脚本" prop="isDenpend">
            <el-switch v-model="ruleForm.isDenpend" @change="showDenpendEdit"></el-switch>
          </el-form-item>
          <el-form-item label="请求参数" prop="isParam">
            <el-switch v-model="ruleForm.isParam" @change="showParamEdit"></el-switch>
          </el-form-item>
          <el-form-item prop="param" v-show="ruleForm.isParam">
            <el-tabs v-model="activeParamName" type="card" @tab-click="handleParamClick">
              <el-tab-pane label="JSON" name="json">
                <el-input type="textarea" v-model="ruleForm.param" style="border:solid 1px rgba(1,1,1,0.2);border-radius: 5px;" :rows="10"></el-input>
              </el-tab-pane>
              <el-tab-pane label="FORM" name="form" style="border: solid 1px rgba(1,1,1,0.5);border-radius: 5px">
                <el-button class="button" type="primary" @click="handleAdd" plain>添加参数</el-button>
                <label style="margin-left: 50px">格式化请求参数：</label><el-switch v-model="isShowFormDate" @change="showFormDate"></el-switch>
                <el-button style="margin-left: 100px" class="button" type="primary" v-show="formInput.length" @click="clearParam">一键清空</el-button>
                <ul style="list-style: none">
                  <li v-show="isShowFormDate">
                    <el-input type="textarea" v-model="formDateParam" placeholder="请输入数据..." style="border:solid 1px rgba(1,1,1,0.2);border-radius: 5px;" :rows="4"></el-input>
                    <el-button class="button" type="primary"  @click="pramCovert" plain>参数格式化</el-button>
                  </li>
                  <li v-for="(item,index) in formInput" style="margin-top: 5px">
                    <el-input v-model="item.name" placeholder="请输入key" style="width: 300px"></el-input>
                    <el-input v-model="item.value" placeholder="请输入value" style="margin-left: 10px;width: 300px"></el-input>
                    <el-button class="button" type="danger" @click="handleDel(index)" plain icon="el-icon-delete" style="margin-left:10px;"></el-button>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </el-form-item>

          <el-form-item label="Cookie" prop="isCookie">
            <el-switch v-model="ruleForm.isCookie" @change="showCookieEdit"></el-switch>
            <el-tag type="success" effect="dark" style="margin-left: 100px" :key="tagId" v-show="curUserName != ''" @close="handleTagClose()" closable>{{curUserName}}</el-tag>
          </el-form-item>
          <el-form-item prop="cookie" v-show="ruleForm.isCookie">
            <el-tabs v-model="activeCookieName" type="card">
              <el-tab-pane label="依赖登录" name="loginCookie">

                <el-table
                  :data="cookieDataList.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
                  @row-click="acitveCur"
                  style="width: 100%">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-form label-position="left" inline class="demo-table-expand">
                        <el-row>
                          <el-col :span="12">
                            <el-form-item label="环境" style="width: 200px">
                              <span>{{ props.row.env.name }}</span>
                            </el-form-item>
                          </el-col>
                          <el-col :span="12">
                            <el-form-item label="系统名称" style="width: 200px">
                              <span>{{ props.row.name }}</span>
                            </el-form-item>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="12">
                            <el-form-item label="登录用户" style="width: 200px">
                              <span>{{ props.row.username }}</span>
                            </el-form-item>
                          </el-col>
                          <el-col :span="12">
                            <el-form-item label="登录密码">
                              <span>{{ props.row.password }}</span>
                            </el-form-item>
                          </el-col>
                        </el-row>

                        <el-row>
                          <el-col :span="12">
                            <el-form-item label="更新时间">
                              <span>{{ props.row.updateTime }}</span>
                            </el-form-item>
                          </el-col>
                          <el-col :span="12">
                            <el-form-item label="创建时间">
                              <span>{{ props.row.createTime }}</span>
                            </el-form-item>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="10">
                            <el-form-item label="登录地址">
                              <span>{{ props.row.domain }}</span>
                            </el-form-item>
                          </el-col>
                          <el-col :span="8">
                            <el-form-item style="margin-left: 150px">
                              <el-button class="button" type="primary" @click="cookieDetail(props.row.cookies)" plain style="margin-left:-30px;">Cookie</el-button>
                            </el-form-item>
                          </el-col>
                        </el-row>
                      </el-form>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="环境">
                    <template slot-scope="scope">
                      <span>{{ scope.row.env.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="用户名称"
                    prop="username">
                  </el-table-column>
                  <el-table-column
                    label="项目名称"
                    prop="name">
                  </el-table-column>
                  <el-table-column
                    label="创建时间"
                    width="180">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="right">
                    <template slot="header" slot-scope="scope">
                      <el-input
                        v-model="search"
                        size="mini"
                        placeholder="输入登录用户搜索"/>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination
                  align="right"
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[5,10,15]"
                  :page-size="pagesize"
                  layout="total,jumper,prev, pager, next,sizes"
                  :total="cookieTotal"
                ></el-pagination>
              </el-tab-pane>
              <el-tab-pane label="手动添加" name="ownSelf" style="border: solid 1px rgba(1,1,1,0.5);border-radius: 5px">
                <el-button class="button" type="primary" @click="handleCookieAdd" plain>添加cookie</el-button>
                <label style="margin-left: 50px">格式化cookie参数：</label><el-switch v-model="isShowCookieDate" @change="showCookieDate"></el-switch>
                <el-button style="margin-left: 100px" class="button" type="primary" v-show="cookieInput.length" @click="clearCookie">一键清空</el-button>
                <ul style="list-style: none">
                  <li v-show="isShowCookieDate">
                    <el-input type="textarea" v-model="cookieData" placeholder="请输入cookie..." style="border:solid 1px rgba(1,1,1,0.2);border-radius: 5px;" :rows="4"></el-input>
                    <el-button class="button" type="primary"  @click="cookieCovert" plain>参数格式化</el-button>
                  </li>
                  <li v-for="(item,index) in cookieInput" style="margin-top: 5px">
                    <el-input v-model="item.name" placeholder="请输入key" style="width: 200px"></el-input>
                    <el-input v-model="item.value" placeholder="请输入value" style="margin-left: 10px;width: 200px"></el-input>
                    <el-input v-model="item.domain" placeholder="请输入domain" style="margin-left: 10px;width: 200px"></el-input>
                    <el-input v-model="item.expire" placeholder="请输入过期时间" style="margin-left: 10px;width: 200px"></el-input>
                    <el-button class="button" type="danger" @click="handleCookieDel(index)" plain icon="el-icon-delete" style="margin-left:10px;"></el-button>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="testCase('ruleForm')">测试接口</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">添加接口</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </el-tab-pane>
      <el-tab-pane label="单点登录" name="cas">
        <el-form :model="casForm" :rules="casrules" ref="casForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="环境选择" prop="region">
            <el-select v-model="casForm.region" placeholder="请选择环境">
              <el-option v-for="item in envList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="URL" prop="casurl">
            <el-input v-model="casForm.casurl"></el-input>
          </el-form-item>

          <el-form-item label="用户名" prop="casusername">
            <el-input v-model="casForm.casusername"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="caspassword">
            <el-input v-model="casForm.caspassword"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="testCas('casForm')">测试接口</el-button>
            <el-button type="primary" @click="casSubmitForm('casForm')">立即创建</el-button>
            <el-button @click="casResetForm('casForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="DUBBO" name="dubbo">配置管理</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
    export default {
        name: "AddProject",
      data(){
        return {
          search:'',
          proList: [],
          activeName: 'http',
          select:'',
          activeParamName:'json',
          activeCookieName:'loginCookie',
          showCookieList:[],
          formInput:[],
          cookieInput:[],
          formDateParam:'',
          cookieData:'',
          isShowZC: false,
          isShowFormDate:false,
          isShowCookieDate:false,
          requestWayList: [],
          cookieDataList: [],
          envList:[],
          dialogVisible: false,
          ruleForm:{
            name:'',
            moduleId:[],
            url:'',
            way:'',
            isCookie:false,
            isParam:false,
            isDenpend:false,
            dependIds:[],
            param:'',
          },
          casForm:{
            region: '',
            casurl: '',
            casusername: '',
            caspassword: '',
          },
          currentPage: 1, //初始页
          pagesize: 5,    //    每页的数据
          cookieTotal:0,
          curUserName: '',
          tagId:'',
          rules:{
            name: [
              { required: true, message: '请输入接口名称', trigger: 'blur' },
            ],
            url: [
              { required: true, message: '请输入接口url', trigger: 'blur' },
            ],
            way: [
              { required: true, message: '请选择请求方式', trigger: 'change' }
            ],
            moduleId: [
              {type:'array', required: true, message: '请选择模块', trigger: 'change' }
            ],
          },
          casrules:{
            casurl:[
              { required: true, message: '请输入单点登录地址', trigger: 'blur' },
            ],
            casusername: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
            caspassword: [
              { required: true, message: '请输入密码', trigger: 'blur' },
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
          }
        }
      },
      created(){
        this.$fetch(this.$api.catalogUrl).then(response => {
          this.proList = this.getTreeData(response.data);
        });
        this.$fetch(this.$api.requestWayUrl).then(response => {
          this.requestWayList = response.data;
        });
        this.$fetch(this.$api.casCookieUrl).then(response => {
          this.cookieTotal = response.data.total
          this.cookieDataList = response.data.list;
        });
        this.$fetch(this.$api.envUrl).then(response => {
          this.envList = response.data;
        });
      },

      methods: {
        getTreeData(data){
          // 循环遍历json数据
          for(var i=0;i<data.length;i++){
            if(data[i].children.length<1){
              // children若为空数组，则将children设为undefined
              data[i].children=undefined;
            }else {
              // children若不为空数组，则继续 递归调用 本方法
              this.getTreeData(data[i].children);
            }
          }
          return data;
        },
        showDenpendEdit(){
          if (this.ruleForm.isDenpend == true){
            this.ruleForm.isDenpend == false
          }
          if (this.ruleForm.isDenpend == false){
            this.ruleForm.isDenpend == true
          }
        },
        showCookieEdit(){
          if (this.ruleForm.isCookie == true){
            this.ruleForm.isCookie == false
          }
          if (this.ruleForm.isCookie == false){
            this.ruleForm.isCookie == true
          }
        },
        showParamEdit(){
          if (this.ruleForm.isParam == true){
            this.ruleForm.isParam == false
          }
          if (this.ruleForm.isParam == false){
            this.ruleForm.isParam == true
          }
        },
        showFormDate(){
          if (this.isShowFormDate == true){
            this.isShowFormDate == false
          }
          if (this.isShowFormDate == false){
            this.isShowFormDate == true
          }
        },
        showCookieDate(){
          if (this.isShowCookieDate == true){
            this.isShowCookieDate == false
          }
          if (this.isShowCookieDate == false){
            this.isShowCookieDate == true
          }
        },
        testCase(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        testCas(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.ruleForm)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        casSubmitForm(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.casForm)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        pramCovert(){
          if (this.formDateParam == "" || this.formDateParam == null){
            alert("请填写参数");
            return;
          }
          this.formInput = this.formDateParam.split('\n').map(v=>{ let arr = v.match(/([^:\s]+):\s?(.*)/i); return { name: arr[1], value: arr[2]}});
          this.isShowFormDate = false;
        },
        cookieCovert(){
          if (this.cookieData == "" || this.cookieData == null){
            alert("请填写cookie");
            return;
          }
          this.cookieInput = this.cookieData.split(';').map(v=>{let arr=v.split('='); return{name:arr[0],value:arr[1]}});
          this.isShowCookieDate = false;
        },
        handleTagClose(){
          this.curUserName = '';
          this.tagId = '';
        },
        handleParamClick(){},
        handleAdd(){
          this.isShowFormDate == false;
          this.formInput.push({
            name: '',
            value: ''
          });
        },
        handleCookieAdd(){
          this.isShowCookieDate == false;
          this.cookieInput.push({
            name: '',
            value: '',
            domain:'',
            expire:''
          });
        },
        handleDel(index){
          this.formInput.splice(index, 1)
        },
        handleCookieDel(index){
          this.cookieInput.splice(index, 1)
        },
        clearParam(){
          var result = confirm("确定清空数据？");
          if (result) {
            this.formInput = []
          }
        },
        clearCookie(){
          var result = confirm("确定清空cookie？");
          if (result) {
            this.cookieInput = []
          }
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        casResetForm(formName){
          this.$refs[formName].resetFields();
        },
        acitveCur(scope){
          console.log(scope);
          this.curUserName = scope.username;
          this.tagId = scope.id;
        },
        cookieDetail(cookies){
          console.log("cookies:-->"+cookies);
          this.dialogVisible = true;
          this.showCookieList = cookies;
        },
        handleSizeChange:function(size){
          this.pagesize = size;
          this.hadleGetFilesListApi();
        },
        // 控制页面的切换
        handleCurrentChange: function(currentPage) {
          this.currentPage = currentPage;
          // console.log(currentPage)
          this.hadleGetFilesListApi();
        },
        //对所有数据进行分页处理 发送请求
        hadleGetFilesListApi() {
          this.queryCookie(this.currentPage, this.pagesize)
            .then(res => {
              this.cookieTotal = res.data.total
              this.cookieDataList = res.data.list;
            }).catch({});
        },
        queryCookie(page, size) {
          return this.$fetch(this.$api.casCookieUrl+'?currentPage='+page+"&pageSize="+size);
        }
      }
    }

    // cosnt params = {
    //   name1: 1,
    //     name2: 2
    // }
    // const reuslt = Object.keys(params).map( v=>{
    //   return {
    //     name: v,
    //     value: params[v]
    //   }
    // })
</script>

<style scoped>

</style>
