<template>
  <nav>
<!--    header-->
    <Header />
<!--    main-->
    <div style="display: flex">
      <!--    side-->
      <Aside />
      <!--    body-->
      <router-view style="flex: 1"/>
    </div>

  </nav>
</template>

<style>
</style>

<script>
import Header from "@/components/Header";
import Aside from "@/components/Aside";

export default {
  name: "Layout",
  components: {
    //Header and Aside on separate component, so I need to import first.
    Header,
    Aside
  }
}
</script>
