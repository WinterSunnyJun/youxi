<template>
  <div class="recharge">
    <l-header></l-header>
    <l-content>
      <div class="c-content">
        <h3>提现记录</h3>
        <div class="r-content">
          <table class="p-table" width="100%"  cellspacing="0">
            <thead>
                <th width="25%">时间</th>
                <th width="25%">订单号</th>
                <th width="25%">提现金额</th>
                <th width="25%">状态</th>
            </thead>
            <tbody>
                <tr v-for="item in moneyRecordLists" :key="item.id">
                    <td>{{item.ctime}}</td>
                    <td>{{item.number}}</td>
                    <td>{{item.money}}</td>
                    <td>{{item.ctime}}</td>
                </tr>
            </tbody> 
          </table>
          <div class="has-no-guess" v-if="moneyRecordLists.length == 0">
               您还没有提现记录！
            </div>
        </div>
      </div>
      </l-content>
      <l-footer></l-footer>
  </div>
</template>

<script>
export default {
  name: 'recharge',
  data () {
    return {
        moneyRecordLists:[]
    }
  },
  methods:{
    toGetMoneyRecord(){
      this.$axios.get(this.$config.common.HOST +'user/user/get_user_withdrawals_list')
        .then(res=>{
          if(res.data.response_data){
              this.moneyRecordLists = res.data.response.data
          }
        })
    }
  },
  mounted(){
    this.toGetMoneyRecord()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recharge{
    width: 100%;
    height:100%;
}
.c-content{
    padding:0.4rem 0.2rem 0;
}
.recharge h3{
    height:0.66rem;
    line-height:0.56rem;
    text-align:center;
    font-size:16px;
}
.p-table{
  border-top:1px solid #011432;
  font-size: 13px;
}
.p-table thead{
  border-top:1px solid #011432;
  border-bottom:1px solid #011432;
}
.p-table thead th{
  line-height: 0.84rem;
  border-top:1px solid #032e73;
  border-bottom:1px solid #032e73;
  border-left:1px solid #032e73;
  border-right:1px solid #011432;
}
.p-table thead th:first-child{
  border-left:0;
}
.p-table thead th:last-child{
  border-right:0;
}
.p-table tbody td{
  line-height: 0.7rem;
  text-align: center;
}
.p-table tbody tr:first-child td{
  border-top:1px solid #011432;
}
.has-no-guess{
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
}
</style>
