<template>
  <div>
    <!-- {{n}} -->
    <div class="cell" @click="onClickSelf">
      <template v-if="a">{{text}}</template>
      <template v-else></template>
    </div>
  </div> 
</template>
 
<script>
export default {
  props: ["n","finish"], // App把n和finish传递给Cell(会响应App中n和finish的变化)

  data() {
    return { a: false};
  },

  methods: {
    onClickSelf() {


      if(this.text!="x"&&this.text!="o"&&this.finish==false){
        console.log(this.text);

          this.a = true;
          this.text = this.n % 2 == 0 ? "x" : "o";

          this.$emit("click",this.text); // 告诉App，当前cell被点击了,并向App传递text
      }  
    }
  }
};
</script>

<style>
.cell {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
}
</style>
