<template>
  <header class="ui grid">
    <div class="three wide column navicon">
      <svg class="icon header-icon" aria-hidden="true">
        <use xlink:href="#icon-deer-right"></use>
      </svg>
    </div>
    <div class="ten wide column navbar">
      <ul>
        <li><router-link to="/blog">&nbsp;博客</router-link></li>
        <li><router-link to="/journey">&nbsp;日记</router-link></li>
        <li v-on:mouseover="toggleShow()" v-on:mouseout="toggleShow()">
          <a>&nbsp;其他</a>
          <div class="other-submenu" v-bind:class="{ active: showOther }">
            <ul>
              <li><router-link to="/gallery">&nbsp;画廊</router-link></li>
              <li><router-link to="/author">&nbsp;关于</router-link></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="three wide column login-state" @mouseover="toggleUser()" @mouseout="toggleUser()" v-if="isLogin">
      <span>{{ userInfo.userName }}</span>
      <div class="user-info" v-bind:class="{ active: showUser }">
        <ul>
          <li><router-link to="/gallery">&nbsp;个人信息</router-link></li>
          <li><router-link to="/gallery">&nbsp;我的主页</router-link></li>
          <li @click="logout()"><a>&nbsp;退出登录</a></li>
        </ul>
      </div>
    </div>
    <div class="three wide column login-state" v-if="!isLogin">
      <router-link to="login">请登录</router-link>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';
  import './header.css';

  export default {
    data() {
      return {
        showOther: false,
        showUser: false,
      };
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo',
        isLogin: 'isLogin',
      }),
    },
    methods: {
      toggleShow: function toggleShow() {
        this.showOther = !this.showOther;
      },
      toggleUser: function toggleUser() {
        this.showUser = !this.showUser;
      },
      logout: function logout() {
        this.$store.dispatch('logout', this.userInfo.userName);
      },
    },
  };
</script>
