<template>
<!--  header-->
 <div style="height: 50px;
             background-color: rgb(48, 65, 86);
             line-height: 50px;
             border-bottom: 1px solid #ccc;
             display: flex">
<!--   management-->
   <div style="padding-left: 20px; font-weight: bold; color: white">Management</div>
<!--dropdown-->
   <div style="padding-right: 10px; margin-top: 10px; margin-left: auto">
     <el-dropdown split-button>
       Name
       <template #dropdown>
         <el-dropdown-menu>
           <el-dropdown-item>Action 1</el-dropdown-item>
           <el-dropdown-item>Action 2</el-dropdown-item>
           <el-dropdown-item>Action 3</el-dropdown-item>
           <el-dropdown-item>Action 4</el-dropdown-item>
         </el-dropdown-menu>
       </template>
     </el-dropdown>
   </div>

 </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>