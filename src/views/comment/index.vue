<template>
<!-- 卡片组件 -->
  <el-card>
    <!-- 面包屑给了卡片的具名内槽 -->
    <bread-crumb slot="header">
    <!-- 插槽内容 -->
    <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- body内容 -->
    <el-table :data="list">
      <!-- 列组件 -->
      <el-table-column prop="title" width="500" label="标题"></el-table-column>
      <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总频论述"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column  label="操作">
        <!-- 方组件  作用域插槽-->
        <template slot-scope="obj">
        <el-button type="text" size="small">修改</el-button>
        <!-- 注册事件 -->
        <el-button
        type="text"
        size="small"
         @click="openOrClose(obj.row)"
        >{{obj.row.comment_status ? '关闭评论': '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type='flex' justify="center" align="middle" style="height:100px">
      <!-- 分页组件 -->
     <el-pagination
  background
  layout="prev, pager, next"
  :total="page.total"
  :current-page="page.currentPage"
  :page-size="pageSize"
  @current-change="changePage">
</el-pagination>
    </el-row>

  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        // 专门放置分页数据
        total: 0, // 数据总条数
        pageSize: 10, // 默认没页条数
        currentPage: 1// 默认第一页
      }
    }
  },
  methods: {
    // 页码改变事件
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getComment()
    },
    // 请求评论列表数据
    getComment () {
      // axios默认是get类型
      // query查询参数
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results// 获取评论列表数据给本身data
        this.page.total = result.data.total_count // 获取文章总数
      })
    },
    formatterBool (row, column, cellValue, index) {
      // row当前行数据
      // column当前列属性
      // cellValue当前单元格的值
      // index当前下标
      return cellValue ? '正常' : '关闭'
    },
    // 打开或关闭评论方法
    openOrClose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      // $confirm确定时 进入then 取消时进入catch
      this.$confirm(`你确定要${mess}评论吗`).then(() => {
        //  用户确定要调用接口
        // 地址参数、query参数、url参数、路由参数、 可以再paarams中写，也可以直接拼接到url地址上
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: {
            article_id: row.id.toString()
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(result => {
          // console.log(result)
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.getComment()// 重新请求列表
        })
      })
    }
  },
  created () {
    // 请求数据方法
    this.getComment()
  }
}
</script>

<style>

</style>
