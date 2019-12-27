<template>
  <el-card class="articles">
      <bread-crumb slot="header">
      <template slot="title">文章列表</template>
      </bread-crumb>
      <!-- el-row 行 -->
      <el-row class="searchtool">
          <el-col :span="2">
           <span>文章状态</span>
          </el-col>
          <el-col :span="18">
              <!-- 单选框组 -->
            <el-radio-group>
              <el-radio>全部</el-radio>
              <el-radio>草稿</el-radio>
              <el-radio>待审核</el-radio>
              <el-radio>审核失败</el-radio>
              <el-radio>审核通过</el-radio>
            </el-radio-group>
          </el-col>

      </el-row>
      <el-row class="searchtool">
          <el-col :span="2">
              <span>频道列表</span>
          </el-col>
          <el-col :span="18">
            <el-select></el-select>
          </el-col>
      </el-row>
      <el-row class="searchtool">
           <el-col :span="2">
              <span>时间选择</span>
          </el-col>
            <el-col :span="18">
             <el-date-picker
             type="daterange"
             range-separator="-"
             start-placeholder="开始日期"
             end-placeholder="结束日期">
             </el-date-picker>
          </el-col>
      </el-row>
  </el-card>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.articles{
    .searchtool{
        height: 60px;
        padding-left:70px;
    }
}
</style>
