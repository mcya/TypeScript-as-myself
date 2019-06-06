<template>
  <section id="bank-list">
    <header><em @click="$back()" class="arrow"></em>个人银行卡</header>  
    <p class="tips"><img src="../../assets/icon/login-attention.png" alt="">温情提示：本平台暂时只支持对中国农业银行、招商银行进行结算，请如实填写本人银行卡信息。</p>  
    <yd-cell-group>
      <yd-cell-item>
        <template slot="left">持卡人姓名：</template>
        <div class="text-left"
             slot="right">{{name}}
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <template slot="left">开卡银行：</template>
        <div class="text-left"
             slot="right">{{bankName}}
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <template slot="left">银行卡号：</template>
        <div class="text-left"
             slot="right">{{bankNumber}}
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <template slot="left">开户地区：</template>
        <div class="text-left"
             slot="right">{{province + cityNumber + area}}
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <template slot="left">开户分行：</template>
        <div class="text-left"
             slot="right">{{branch}}
        </div>
      </yd-cell-item>

      <div class="card">
        <div class="card-preview"><img :src="photoFront" alt=""></div>
      </div>

      <template v-if="false">
        <p v-if="+status === 0">
          系统验证银行卡信息
        </p>

        <p v-if="+status === 2"
           class="error">
          银行卡信息验证不通过，请提交真实有效的信息
        </p>

        <p v-if="+status === 1"
           class="success">
          系统验证通过
        </p>
      </template>
      <yd-button
        size="large"
        type="danger"
        class="btn-submit"
        v-if="+status!==0"
        @click.native="edit">
        {{+status === -1 ? '添加' : '修改'}}银行卡
      </yd-button>
    </yd-cell-group>
  </section>
</template>

<script lang="ts">
  import CloseModal from '@/mixins/CloseModal';
  import { Component, Vue } from 'vue-property-decorator';
  @Component({
    mixins: [CloseModal]
  })
  export default class BankList extends Vue {
    bankName: string = '' // 开户银行
    bankNumber: string = '' // 银行卡号
    province: string = '' // 省银行卡号
    cityNumber: string = '' // 市号
    area: string = '' // 区
    branch: string = '' // 分行
    name: string = '' // 银行卡开户名
    photoFront: string = '' // 银行卡正面
    
    get status() {
      return this.$root.$data.status;
    }
    
    async query() {
      // 加载动画
      this.$dialog.loading.open();
      // 查询银行卡信息
      const { code, data } = await this.$http.get('/api/review/bank/getBankInfo', { error: true });

      if (code === '0000') {
        this.name = data.name; // 姓名
        // 省市区
        this.province = data.province;
        this.cityNumber = data.city;
        this.area = data.area;
        // 银行
        this.bankName = data.bankName;
        this.bankNumber = data.bankNumber;
        this.branch = data.branch;
        this.photoFront = data.photoFront;
        // 状态
        this.$root.$data.status = +data.status;
      }
      // 没有银行卡信息 自动跳转到添加银行卡页面
      if (code === '2000') this.$router.replace('/edit');
    }
    edit() {
      // 该银行卡信息是否已经过审
      const checkSuccess = +this.status === 1;
      // 已经过审再修改需要手机验证
      this.$router.push(checkSuccess ? '/check' : '/edit');
    }
    
    created() {
      // 清空验证码
      this.$root.$data.captcha = '';
      // 获取银行卡信息
      this.query();
    }
  };
</script>

<style lang="scss"
       scoped>
  @import '../../styles/variables';

  #bank-list {
    @import '../../styles/header';
    :global(.yd-cell) {
      box-shadow: none;
    }
    :global(.yd-cell-item) {
      padding: 0 50*$rem;
      // height: 98*$rem;
      // line-height: 98*$rem;
    }
    :global(.yd-cell-item .yd-cell-right) {
      min-height: 98*$rem;
    }
    :global(.yd-cell-item:not(:last-child):after) {
      margin-left: 0;
    }
    :global(.btn-submit) {
      margin: 65*$rem auto 0;
      height: 70*$rem;
      line-height: 70*$rem;
      border-radius: 10*$rem;
      width: 590*$rem;
      font-size: 32*$rem;
    }
  }
  .tips {
    font-size: 22*$rem;
    color: #909090;
    background-color: #fff;
    text-align: left;
    padding: 30*$rem 70*$rem 0 82*$rem;
    line-height: 1.4;
    img {
      width: 26*$rem;
      height: 26*$rem;
      margin-left: -26*$rem;
      vertical-align: middle;
      position: relative;
      left: -7*$rem;
    }
  }
  .text-left {
    flex: 1;
    text-align: right;
    color: #909090;
  }
  .yd-cell-box {
    // margin-bottom: 26 * $rem;
    margin: 0;
    padding-bottom: 137*$rem;
    background-color: #fff;
  }
  .card-preview {
    display: block;
    width: 480*$rem;
    height: 329*$rem;
    background: url("../../assets/icon/img-border.png") no-repeat;
    background-size: 480*$rem 329*$rem;
    img {
      padding: 0.24rem;
      width: 100%;
      height: 100%;
    }
  }
  p {
    text-align: center;
    font-size: 32 * $rem;
    padding: 0 30 * $rem;
    line-height: 84 * $rem;
    color: $white;
    background: $light;
    &.error {
      background: $red;
    }
    &.success {
      background: #03ca7d;
    }
  }
  .card {
    background: $white;
    padding: 80*$rem 135*$rem;
  }
</style>
