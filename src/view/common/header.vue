<template>
    <div class="top clear">
      <div class="my-balance clear">
          <p>我的余额:</p>
          <div class="balance clear">
            <span class="balance-icon">
              <img :src="wallet" alt="30*30">
            </span>
            <span class="balance-num">
              ￥{{userInfo && userInfo.money/100}}
            </span>
        </div>
      </div>
      <router-link to="/index/recharge">
      <div class="recharge-btn">充值</div>
      </router-link>
    </div>
</template>

<script>
import wallet from '../../assets/images/wallet.png'
export default {
  name: 'l-header',
  data () {
    return {
        wallet:wallet,
        userInfo:''
    }
  },
  methods:{
    toGetUserInfo(){
          this.$axios.get(this.$config.common.HOST+'user/user/get_user_info')
            .then(res=>{
                if(res.data.error_code){
                    alert(res.data.error_msg)
                }else if(res.data.response_data){
                    this.userInfo = res.data.response_data
                }
            })
      }
  },
  mounted(){
    this.toGetUserInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    height:0.88rem;
    padding: 0.23rem 0.2rem;
    box-sizing: border-box;
    background: #d50e0e;
    font-size: 13px;
  }
  .my-balance{
    float: left;
    color: #fff;
    line-height: 0.4rem;
  }
  .my-balance p{
    display: inline-block;
    margin-right: 0.16rem;
    float: left;
  }
  .balance{
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 0.06rem;
    padding:0 0.1rem;
    height:0.4rem;
    line-height: 0.4rem;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0 0 0.03rem #fff,0 0 0.03rem #fff,0 0 0.03rem #fff inset;
  }
  .balance-icon{
    display: inline-block;
    float: left;
    width: 0.3rem;
    height: 0.3rem;
    margin-top:0.02rem;
  }
  .recharge-btn{
    float: right;
    color: #fff;
    border: 1px solid #fff;
    width: 1.18rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    border-radius: 0.06rem;
    box-sizing: border-box;
    box-shadow: 0 0 0.03rem #fff,0 0 0.03rem #fff,0 0 0.03rem #fff inset;
  }
</style>
