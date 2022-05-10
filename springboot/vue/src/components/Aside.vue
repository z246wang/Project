<template>
 <div>
   <el-menu
       style="min-height: calc(100vh - 50px); width: 150px">
     <el-sub-menu index="1">
       <template #title>SUB</template>
       <el-menu-item index="1-1">item one</el-menu-item>
     </el-sub-menu>
     <el-menu-item index="2">Navigator</el-menu-item>
     <el-menu-item index="3">Navigator</el-menu-item>
   </el-menu>
 </div>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>

</style>