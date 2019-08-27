<template>
  <div>
    <!-- <div>{{n}}</div> -->
    <div class="row">
      <!-- App把n和finish传递给Vue -->
      <Cell @click="onClickCell(0,$event)" :n="n" :finish="finish"/>
      <Cell @click="onClickCell(1,$event)" :n="n" :finish="finish"/>
      <Cell @click="onClickCell(2,$event)" :n="n" :finish="finish"/>
    </div>
    <div class="row">
      <Cell @click="onClickCell(3,$event)" :n="n" :finish="finish"/>
      <Cell @click="onClickCell(4,$event)" :n="n" :finish="finish"/>
      <Cell @click="onClickCell(5,$event)" :n="n" :finish="finish"/>
    </div>
    <div class="row">
      <Cell @click="onClickCell(6,$event)" :n="n" :finish="finish"/>
      <Cell @click="onClickCell(7,$event)" :n="n" :finish="finish"/>
      <Cell @click="onClickCell(8,$event)" :n="n" :finish="finish"/>
    </div>
    <!-- <div>{{map}}</div> -->
    <div v-if="finish">winner:{{winner}}</div>
  </div>
</template>

<script>
import Cell from "./Cell";

export default {
  components: { Cell },
  data() {
    return {
      n: 0,
      map: [[null, null, null], [null, null, null], [null, null, null]],
      finish:false,
      winner:null
    };
  },
  methods: {

    // text是Cell传递给App的
    onClickCell(i, text) {

      // console.log(`第${i}个cell被点击了,内容是${text}`);
      this.map[Math.floor(i / 3)][i % 3] = text;
      this.n++;
      if(this.tell()){
        this.finish=true;
      }
    },

    // 判断输赢
    tell() {
      // 横
      for (let i = 0; i < 3; i++) {
        if (
          this.map[i][0] == this.map[i][1] &&
          this.map[i][1] == this.map[i][2] &&
          this.map[i][0] != null
        ) {
          this.winner = this.map[i][0];
          return true;
          break;
        }
      }

      // 纵
      for (let i = 0; i < 3; i++) {
        if (
          this.map[0][i] == this.map[1][i] &&
          this.map[1][i] == this.map[2][i] &&
          this.map[0][i] != null
        ) {
          this.winner = this.map[0][i];
          return true;
          break;
        }
      }

      // 斜
      if (
        this.map[0][0] == this.map[1][1] &&
        this.map[1][1] == this.map[2][2] &&
        this.map[0][0] != null
      ) {
        this.winner = this.map[0][0];
        return true;
      }
      if (
        this.map[0][2] == this.map[1][1] &&
        this.map[1][1] == this.map[2][0] &&
        this.map[0][2] != null
      ) {
        this.winner = this.map[0][2];
        return true;
      }

      return false;
    }
  }
};
</script>

<style>
.row {
  display: flex;
}
</style>
