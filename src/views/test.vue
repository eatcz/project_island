<template>
  <div>
    <p>This is test</p>
    <el-pagination
        layout="prev, pager, next"
        :total="50">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "test",
  data(){
    return{
      currentPage3: 1,
      pageSize: 5
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script>

<style scoped>

</style>