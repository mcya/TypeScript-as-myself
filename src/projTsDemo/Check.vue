<template>
  <div id="bank-check">
    <header><em @click="$back()" class="arrow"></em>验证身份</header>
    <p class="tips">为确保是您本人操作，请完成以下验证</p>
    <div class="form">
      <ul class="form-code">
        <li>
          <input type="text" placeholder="请输入手机号码" v-model="phone">
          <captcha :phone="phone" :action="5"></captcha>
        </li>
        <li><input type="text" placeholder="请输入验证码" v-model="captcha"></li>
      </ul>
    </div>
    <div class="next">
      <input
        type="button"
        value="下一步"
        :disabled="disabled"
        :class="['submit', { 'submit-disabled': disabled }]"
        @click="submit"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../styles/variables';
  #bank-check {
    background-color: #fff;
    @import '../../styles/header';
    .tips {
      margin: 80*$rem 0 78*$rem 52*$rem;
      color: #505050;
      font-size: 26*$rem;
      position: relative;
      padding-left: 1.8em;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: -4*$rem;
        width: 34*$rem;
        height: 34*$rem;
        background: url('../../assets/icon/login-attention.png') no-repeat;
        background-size: contain;
      }
    }
    .form {
      padding: 0 50*$rem;
      &-code {
        font-size: 26*$rem;
        li {
          border-bottom: 1px solid #d8d8d8;
          margin-bottom: 50*$rem;
          display: flex;
          &:last-of-type {
            margin-bottom: 0;
          }
          input {
            flex: 1;
            padding-bottom: 20*$rem;
            &::-webkit-input-placeholder {
              color: #909090;
            }
          }
        }
      }
    }
    .next {
      text-align: center;
      .submit {
        margin-top: 80*$rem;
        width: 590*$rem;    
        height: 70*$rem;
        line-height: 70*$rem;
        text-align: center;
        background-color: $red;
        border-radius: 10*$rem;
        color: #fff;
        &-disabled {
          background-color: #909090;
        }
      }
    }
  }
</style>
<script lang="ts">
  import Captcha from '@/components/Captcha.vue';
  import { Component, Vue } from 'vue-property-decorator';
  @Component({
    components: { Captcha }
  })
  export default class Check extends Vue {
    captcha: string = ''
    
    get phone(): string {
      return this.$root.$data.user.phone || '';
    }

    get disabled(): boolean {
      return !Boolean(this.phone && this.captcha)
    }
    
    async submit() {
      await this.$http.post('/api/captcha/check',
        {
          phone: this.phone,
          captcha: this.captcha
        });
      // 保存银行卡
      this.$root.$data.captcha = this.captcha;
      // 跳转到修改银行卡页面
      this.$router.push('/edit');
    }
  };
</script>
