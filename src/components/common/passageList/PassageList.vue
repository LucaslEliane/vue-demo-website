<template>
  <div class="passage-list">
    <ul>
      <li v-for="passageInfo in passageList">
        <div class="passage-author">
          <router-link :to="`users/${passageInfo.author.authorID}`">
            <img :src="passageInfo.author.authorAvatar" />
          </router-link>
          <div>
            <router-link :to="`users/${passageInfo.author.authorID}`">
              {{ passageInfo.author.authorName }}
            </router-link>
          </div>
        </div>
        <div class="passage-title">
          <span @click="jumpToPassage(passageInfo.passageID)">{{ passageInfo.passageTitle }}</span>
        </div>
        <div class="passage-summary">
          {{ passageInfo.passageSummary }}
        </div>
        <div class="passage-meta">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang5"></use>
            </svg>
            {{ passageInfo.otherInfo.collected }}
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guanchahei-filling"></use>
            </svg>
            {{ passageInfo.otherInfo.accessed }}
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-font42"></use>
            </svg>
            {{ passageInfo.otherInfo.preferred }}
          </span>
        </div>
      </li>
      <li class="loading-list-item" v-show="isFetchingPassageList">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jishi-copy-copy"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import './passageList.css';

  export default {
    props: ['userID'],
    computed: {
      ...mapGetters({
        passageList: 'passageList',
        isFetchingPassageList: 'isFetchingPassageList',
        isFetchingPassageListOK: 'isFetchingPassageListOK',
        currentShowPassageListStart: 'currentShowPassageListStart',
        currentShowPassageListCount: 'currentShowPassageListCount',
      }),
    },
    created() {
      this.$store.dispatch('fetchPassageList', this.userID, this.currentShowPassageListStart, this.currentShowPassageListCount);
    },
    mounted() {
      window.addEventListener('scroll', this.mouseScroll);
    },
    methods: {
      jumpToPassage(passageID) {
        this.$router.push({
          path: `passage/${passageID}`,
        });
      },
      mouseScroll() {
        const bodyHeight = document.body.scrollHeight;
        const scrollHeight = window.scrollY + document.body.offsetHeight;
        if (bodyHeight === scrollHeight) {
          this.$store.dispatch('fetchPassageList', this.listAuthor, this.listStart, this.listCount);
        }
      },
      clearPassageList() {
        this.$store.dispatch('clearPassageList');
      },
    },
  };
</script>
