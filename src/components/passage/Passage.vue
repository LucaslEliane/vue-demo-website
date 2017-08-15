<template>
  <main class="passage-main">
    <navHeader></navHeader>
    <div class="passage-article">
      <article>
        <h1>{{ getPassage.passageTitle }}</h1>
        <section>
          {{ getPassage.passageContent }}
        </section>
      </article>
    </div>
    <div class="back"></div>
    <Footer></Footer>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex';
  import NavHeader from '@/components/common/navHeader/NavHeader';
  import NavFooter from '@/components/common/navFooter/NavFooter';
  import './passage.css';

  export default {
    computed: {
      ...mapGetters({
        getPassage: 'getPassage',
        isFetchingPassage: 'isFetchingPassage',
        fetchPassageError: 'fetchPassageError',
      }),
    },
    components: {
      NavHeader,
      NavFooter,
    },
    created() {
      const passageID = this.$route.params.passageID;
      this.$store.dispatch('fetchPassage', passageID);
    },
  };
</script>
