<template>
  <main class="index">
    <div class="content">
      <h1>
        歆眷<br/>翌晨
      </h1>
      <h2>
        Lucas Twilight's Blog
      </h2>
      <div class="button-group">
        <router-link class="ui inverted blue button" to="home">
          游客登录
        </router-link>
        <router-link class="ui inverted blue button" v-bind:to="userLogin">
          账户登录
        </router-link>
      </div>
    </div>
    <div class="back">
    </div>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex';
  import './css/index.css';

  export default {
    computed: {
      ...mapGetters({
        isLogin: 'isLogin',
      }),
      userLogin() {
        return this.isLogin ? 'home' : 'login';
      },
    },
  };
</script>
