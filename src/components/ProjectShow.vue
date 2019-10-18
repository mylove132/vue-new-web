<template>
  <div class="row">
    <ul id="breadcrumb">
      <el-cascader
        v-model="selectedOptions"
        :options="proList"
        :props="{value:'id',label:'name'}"
        @change="handleChange"></el-cascader>
      <router-link to="/fanc/interface/add" style="display: initial;margin-left: 20px"><el-button type="primary" icon="el-icon-plus">添加</el-button></router-link>
      <li class="pull-right">
        <div class="input-group input-widget">
          <input style="border-radius:15px;margin-top: 10px" type="text" placeholder="Search..." class="form-control">
        </div>
      </li>
    </ul>
    <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">

          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="创建时间">
              <span>{{ props.row.date }}</span>
            </el-form-item>
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="创建时间"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.id, scope.row)" icon="el-icon-edit"></el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.id, scope.row)" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userList.length">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "ProjectShow",
      data() {
        return {
          addPro:false,
          currentPage:1, //初始页
          pagesize:10,    //    每页的数据
          userList: [{
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
            date: '2016-05-02',
          }, {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
            date: '2016-05-02',
          }, {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
            date: '2016-05-02',
          }, {
            id: '12987126',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
            date: '2016-05-02',
          }],
          optionProps: {
            value: 'id',
            label: 'name'
          },
          proList: [],
          selectedOptions: [],
        }
      },
      created(){
        this.$fetch(this.$api.catalogUrl).then(response => {
          this.proList = this.getTreeData(response.data);
        })
      },
      methods:{
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
        handleSizeChange: function (size) {
          this.pagesize = size;
          console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
          console.log(this.currentPage)  //点击第几页
        },
        handleChange:function (value) {
          console.log(value)
        }
      }
    }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
