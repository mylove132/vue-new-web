<template>
  <div>
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="HTTP" name="http">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="项目模块">
            <el-cascader
              v-model="formInline.moduleId"
              :options="proList"
              :props="{value:'id',label:'name'}"
              @change="handleChange"></el-cascader>
          </el-form-item>
          <el-form-item label="依赖模块">
            <el-cascader
              v-model="formInline.moduleId"
              :options="proList"
              :props="{value:'id',label:'name'}"
              @change="handleChange"></el-cascader>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="DUBBO" name="second">配置管理</el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
    export default {
        name: "AddProject",
      data(){
        return {
          proList: [],
          selectedOptions: '',
          activeName: 'http',
          formInline:{
            moduleId:''
          }

        }
      },
      created(){
        this.$fetch(this.$api.catalogUrl).then(response => {
          this.proList = this.getTreeData(response.data);
        })
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
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style scoped>

</style>
