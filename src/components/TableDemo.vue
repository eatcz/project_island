<template>
    <el-card class="box-card">
      <div class="card-header">
        <span>管理</span>
        <el-button type="primary">按钮</el-button>
      </div>

      <div style="margin-top: 20px;">
        <hr>
      </div>

      <div></div>

<el-form :inline="true" :model="formInline" class="demo-form-inline">
<el-form-item label="Approved by">
  <el-input v-model="formInline.user" placeholder="Approved by" clearable />
</el-form-item>
<el-form-item label="Activity zone">
  <el-select
    v-model="formInline.region"
    placeholder="Activity zone"
    clearable
  >
    <el-option label="Zone one" value="shanghai" />
    <el-option label="Zone two" value="beijing" />
  </el-select>
</el-form-item>
<el-form-item label="Activity time">
  <el-date-picker
    v-model="formInline.date"
    type="date"
    placeholder="Pick a date"
    clearable
  />
</el-form-item>
<el-form-item>
  <el-button type="primary" @click="onSubmit">Query</el-button>
</el-form-item>
</el-form>
<br>

<el-table :data="tableData" style="width: 100%">
  <el-table-column prop="date" label="Date" />
  <el-table-column prop="name" label="Name" />
  <el-table-column prop="address" label="Address" />
  <el-table-column prop="address" label="Address" />
  <el-table-column prop="address" label="Address" width="180" />
</el-table>

<br>

<el-pagination 
  class="el-p"
  v-model:current-page="currentPage4"
  v-model:page-size="pageSize4"
  :page-sizes="[100, 200, 300, 400]"
  :size="size"
  :disabled="disabled"
  :background="background"
  layout="total, sizes, prev, pager, next, jumper"
  :total="400"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
/>
  </el-card>

 
  </template>
  
  <script lang="ts" setup>

import { ref } from 'vue'
import type { ComponentSize } from 'element-plus'
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  </script>
  
<style scoped>
    .el-p {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
    .demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
.card-header{
    display: flex;
    justify-content: space-between;
}
</style>
