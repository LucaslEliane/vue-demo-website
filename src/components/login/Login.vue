<template>
  <div>
    <NavHeader></NavHeader>
    <main class="login">
      <div class="content">
        <div class="login-box">
          <div class="login-mode" @click="toHome()">
            账号密码登录
          </div>
          <form>
            <fieldset>
              <div class="field">
                <label for="login-username">
                  <svg class="icon login-icon" aria-hidden="true">
                    <use xlink:href="#icon-yonghu"></use>
                  </svg>
                </label>
                <input type="text" name="username" id="login-username" placeholder="用户名" v-model="username"/>
              </div>
              <div class="field">
                <label for="login-password">
                  <svg class="icon login-icon" aria-hidden="true">
                    <use xlink:href="#icon-mima"></use>
                  </svg>
                </label>
                <input type="password" name="password" id="login-password" placeholder="密码" v-model="password"/>
              </div>
              <div class="login-error">
                <span :class="{ error: isError }">
                  {{ loginError }}
                </span>
              </div>
              <div class="field">
                <button class="ui blue button" @click.prevent="handleLogin()">
                  &nbsp;登录
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="back">

      </div>
    </main>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import NavHeader from '@/components/common/navHeader/NavHeader';
  import './css/login.css';

  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    computed: {
      ...mapGetters({
        loginError: 'loginErrorMsg',
        isLogin: 'isLogin',
      }),
      isError() {
        return !(this.loginError === 'placeholder');
      },
    },
    watch: {
      isLogin: function isLogin(val) {
        if (val) {
          this.$router.push({
            path: 'home',
          });
        }
      },
    },
    methods: {
      handleLogin: function handleLogin() {
        const {
          username,
          password,
        } = this;
        this.$store.dispatch('fetchingLogin');
        this.$store.dispatch('login', {
          userName: username,
          password,
        });
      },
    },
    created: function created() {
      if (this.isLogin) {
        this.$router.push({
          path: 'home',
        });
      }
    },
    components: {
      NavHeader,
    },
  };
</script>
