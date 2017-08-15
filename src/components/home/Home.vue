<template>
  <div>
    <NavHeader></NavHeader>
    <main class="home-main">
      <PassageList :myUserID="myUserID" ref="passageList"></PassageList>
      <div class="back"></div>
    </main>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
  import config from '@/config';
  import NavHeader from '@/components/common/navHeader/NavHeader';
  import NavFooter from '@/components/common/navFooter/NavFooter';
  import PassageList from '@/components/common/passageList/PassageList';
  import './home.css';

  const { myUserID } = config;

  export default {
    data() {
      return {
        myUserID,
      };
    },
    components: {
      NavHeader,
      NavFooter,
      PassageList,
    },
    beforeRouteLeave(to, from, next) {
      this.$refs.passageList.clearPassageList();
      window.removeEventListener('scroll', this.$refs.passageList.mouseScroll);
      next();
    },
  };
</script>
