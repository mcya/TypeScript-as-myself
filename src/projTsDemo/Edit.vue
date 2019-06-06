<template>
  <section class="bank" id="bank-edit">
    <header><em @click="$back()" class="arrow"></em>个人银行卡</header>  
    <p class="tips"><img src="../../assets/icon/login-attention.png" alt="">{{remind}}</p>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">持卡人姓名：</span>
        <yd-input
          slot="right"
          v-model="name"
          placeholder="请输入持卡人">
        </yd-input>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">开卡银行：</span>
        <select slot="right"
                placeholder="请选择银行"
                v-model="bankName">
          <option value="">请选择银行</option>
          <option :value="b" v-for="(b, i) in bankSelectType" :key="i">{{b}}</option>
        </select>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">银行卡号：</span>
        <yd-input
          slot="right"
          type="tel"
          v-model="bankNumber"
          placeholder="请输入银行卡号">
        </yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">开户地区：</span>
        <div class="input-group pca"
             slot="right">
          <div class="input-group-item">
            <input type="text"
                   v-model="province"
                   placeholder="请输入"> 省
          </div>
          <div class="input-group-item">
            <input type="text"
                   v-model="cityStr"
                   placeholder="请输入"> 市
          </div>
          <div class="input-group-item">
            <input type="text"
                   v-model="area"
                   placeholder="请输入"> 区
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">开户分行：</span>
        <template slot="right">
          <yd-input
            type="text"
            v-model="branch"
            placeholder="请输入开户分行">
          </yd-input>
        </template>
      </yd-cell-item>
    </yd-cell-group>

    <div class="card">
      <image-compress
        class="card-preview"
        v-model="photoFront">
        <div class="preview-icon"></div>
      </image-compress>
    </div>
    <yd-button
      size="large"
      class="btn-submit"
      type="danger"
      @click.native="submit">
      提交并同意验证
    </yd-button>
  </section>
</template>

<script lang="ts">
  import ImageCompress from '@/components/ImageCompress.vue';
  import { Component, Vue } from 'vue-property-decorator';

  const validateMap = {
    name: '请输入持卡人',
    bankName: '请输入开户银行',
    bankNumber: {
      reg: /^[0-9]{16,19}$/,
      msg: '请输入合法的16-19位银行卡号'
    },
    province: '请输入开户地区省份',
    cityStr: '请输入开户地区城市',
    area: '请输入开户地区行政区',
    branch: '请输入开户分行',
    photoFront: '请上传银行卡正面'
  };

  @Component({
    components: { ImageCompress }
  })
  export default class Edit extends Vue {
    bankName: string = ''
    bankNumber: string = ''
    province: string = ''
    cityStr: string = ''
    area: string = ''
    branch: string = ''
    name: string = ''
    photoFront: string = ''
    remind: string = ''
    bankSelectType: string = ''
    
    async getConfigData() {
      const { remind, bankSelectType } = await this.$http.get('/api/review/bank/bankSelectType');
      this.remind = remind;
      this.bankSelectType = bankSelectType;
    }
    async submit() {
      // 表单校验
      if (!this.validate()) return;
      // 获取验证码
      const captcha = this.$root.$data.captcha || undefined;
      // 加载动画
      this.$dialog.loading.open('正在提交');
      // 提交请求
      await this.$http.post('/api/review/bank/addBankInfo',
        { ...this.$data, captcha, ...{ city: this.cityStr } }
      );
      // 接口返回成功
      this.$dialog.toast({ mes: '提交银行卡完成' });
      // 跳转
      this.jump();
    }
    jump() {
      // 获取审核状态
      const status = +this.$root.$data.status;
      setTimeout(() => {
        // 审核通过修改 后退两步 返回列表
        if (status === 1) {
          this.$back(2);
        }
        // 审核不通过修改 后退一步 返回列表
        if (status === 2) {
          this.$back();
        }
        // 没有银行卡 覆盖当前记录 返回列表
        if (status === -1) {
          this.$router.replace('/');
        }
      }, 2000);
    }
    validate() {
      const keys = Object.keys(validateMap);
      let i = 0;
      for (i; i < keys.length; i += 1) {
        const key = keys[i];
        const rule = validateMap[key];
        const value = this.$data[key];

        if (rule.reg && !rule.reg.test(value)) {
          this.$dialog.notify({ mes: rule.msg });
          return false;
        }

        if (!value) {
          this.$dialog.notify({ mes: rule });
          return false;
        }
      }
      return true;
    }
    created() {
      // 设置标题
      document.title = '时代⁺';
      this.getConfigData();
      // dodocument.title = this.$root.status === 1 ? '变更个人银行卡' : '添加个人银行卡';
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../styles/variables';
  #bank-edit {
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
      padding-right: 0;
    }
    :global(.yd-cell-item:not(:last-child):after) {
      margin-left: 0;
    }
    :global(.yd-cell-right input) {
      text-align: right;
      padding-right: 45*$rem;
    }
    :global(.yd-cell-right select) {
      direction: rtl;
    }
    :global(.yd-cell-arrow:after) {
      color: #909090;
      font-size: 0.2rem;
      margin-left: 0.25rem;
      margin-right: 0;
    }
    :global(.yd-cell-box) {
      margin-bottom: 0;
    }
    :global(.yd-cell-item:last-child::after) {
      margin-left: 0;
      content: "";
      position: absolute;
      z-index: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #d9d9d9;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    }
  }
  .bank {
    background: #fff;
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
  #bank-edit .input-group {
    font-size: 30 * $rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &-item {
      display: flex;
      align-items: center;
      width: 33%;
    }
    input {
      flex: 1;
      margin: 0 0.5em;
      text-align: right;
      width: 1%;
      padding: 0
    }
  }
  .yd-input {
    & + span {
      font-size: 30 * $rem;
      white-space: nowrap;
    }
  }
  .card {
    background: $white;
    padding: 80*$rem 135*$rem;
  }
  .btn-submit {
    margin: 0 auto;
    height: 70*$rem;
    line-height: 70*$rem;
    border-radius: 10*$rem;
    width: 590*$rem;
    font-size: 32*$rem;
  }
  .card-preview {
    display: block;
    width: 480*$rem;
    height: 329*$rem;
    background: url("../../assets/icon/img-border.png") no-repeat;
    background-size: 480*$rem 329*$rem;
    .preview-icon {
      width: 480*$rem;
      height: 329*$rem;
      background: url("../../assets/icon/bank-card.png") no-repeat;
      background-size: 480*$rem 329*$rem;
    }
    :global(img) {
      padding: 0.24rem;
      width: 100%;
      height: 100%;
    }
  }
</style>
