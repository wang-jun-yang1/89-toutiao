<template>
  <el-card>
    <!-- <bread-crumb>面包屑</bread-crumb> -->
      <bread-crumb slot="header">
      <template slot="title">发布文章</template>
      </bread-crumb>
      <el-form style="margin-left:80px" label-width="100px">
        <el-form-item label="标题">
         <el-input style="width:40%"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input style="width:40%"></el-input>
        </el-form-item>
        <el-form-item label="封面">
         <el-radio-group>
            <el-radio v-model="radio" label="单图"></el-radio>
            <el-radio v-model="radio" label="三图"></el-radio>
            <el-radio v-model="radio" label="无图"></el-radio>
            <el-radio v-model="radio" label="自动"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道">
            <el-select>
              <el-option :value="item.id" v-for="item in channels" :key="item.id" :label="item.name"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">发布</el-button>
          <el-button>存入草稿</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [] // 定义一个channels 接收频道
    }
  },
  methods: {
    // 获取频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels // 获取频道数据
      })
    }
  },
  created () {
    this.getChannels() // 获取频道数据
  }
}

</script>

<style>

</style>
