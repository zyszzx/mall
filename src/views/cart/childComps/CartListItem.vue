<template>
  <div id="product-item">
    <div class="tick">
      <tick-btn ref="tickBtn" @click.native="checkBoxClick" :isChecked="itemInfo.checked"/>
    </div>
    <div class="product-img"><img :src="itemInfo.image" alt=""></div>
    <div class="product-info">
      <div class="product-title">{{itemInfo.title}}</div>
      <div class="product-desc">{{itemInfo.desc}}</div>  
      <div class="order-info">
        <span class="price">¥{{itemInfo.price}}</span>
        <span class="count">x{{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import TickBtn from '../../../components/content/tickbtn/TickBtn'
  export default {
    props:{
      itemInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      TickBtn
    },
    methods:{
      checkBoxClick(){
        this.itemInfo.checked = !this.itemInfo.checked
      }
    }
  }
</script>

<style scoped>
#product-item {
    height: 120px;
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
    margin: 0 10px;
  }
  .tick {
    height: 100%;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  
  .product-img {
    flex: 3;
    overflow: hidden;
  }
  .product-img>img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
  .product-info {
    /* background-color: cadetblue; */
    flex: 7;
    padding-left: 8px;
    position: relative;
  }

  .product-title {
    /* background-color: aqua; */
    width: 60vw;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis; 
    font-size: 14px;
    color: #333333;
  }
  .product-desc {
    font-size: 12px;
    width: 60vw;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 40px;
  }

  .order-info {
    /* background-color: antiquewhite; */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px 0px 8px 8px;
    display: flex;
    justify-content: space-between;
  }
  .price {
    color: #f54020
  }
  .count {
    text-align: right;
  }
</style>