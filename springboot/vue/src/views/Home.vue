<template>
  <div style="padding: 10px; overflow: hidden">

<!--    toolBar-->
    <div style="margin: 0 0 10px 0; display: flex">
      <el-button type="primary" style="width: 85px">ADD</el-button>
      <el-button type="primary">IMPORT</el-button>
      <el-button type="primary">EXPORT</el-button>
      <el-input v-model="search" placeholder="Search key word" style="width: 10%; margin-left: auto"></el-input>
      <el-button type="primary" style="margin-left: 5px">SEARCH</el-button>
    </div>

<!--table-->
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="Date" sortable/>
      <el-table-column prop="name" label="Name" sortable/>
      <el-table-column prop="address" label="Address" sortable/>
      <el-table-column label="Operations" width="110">
        <template #default>
          <el-button type="text" @click="handleEdit">Edit</el-button>
          <el-popconfirm title="Are you sure to delete this?">
            <template #reference>
              <el-button type="text">Delete</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
<!--page-->
    <div>
      <el-pagination
          v-model:currentPage="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      search: '',
      currentPage: 1,
      totalPage: 100,
      tableData: [ {
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
        {
          date: '2016-05-05',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-09',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-10',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-11',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
  },
  methods: {
    handleEdit() {

    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  }
}
</script>
