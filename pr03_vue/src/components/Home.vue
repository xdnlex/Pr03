<template>
<div id='building'>
  <div class="main">
    <h1> Please select the first </h1>

    <div>
      <el-radio v-model="first" label="1" border>White First(W)</el-radio>
      <el-radio v-model="first" label="2" border>Black First(B)</el-radio>
    </div>
 
    <div class="game">
      <div class="cell" v-for="i,index in items" :key="index" @click="click(index)">
        <div :class="['celltype1','celltype2'][i-1]"></div>
      </div>
    </div>
    <h1 v-show="!isFill && !winer">{{'WB'[next-1]}} Turn</h1>
    <div>
      <el-button type="primary" @click="reset">RESET<i class="el-icon-refresh el-icon--right"></i></el-button>
    </div>
 
    <h1 v-show="winer!=0 ">{{'WB'[winer-1]}} Win</h1>
    <h1 v-show="winer==0 && isFill">TIE</h1>
  </div>
  </div>
</template>
 
<script>
  import '../util/Board'
  import {Board} from '../util/Board'
 
  export default {
    data() {
      return {
        items: Array.from(Array(9)).fill(0),
        next: 1,
        first: 1,
        isAuto: false
      }
    },
    name: "game-board",
    computed: {
      winer() {
        return new Board(this.items, this.next).getWiner()
      },
      isFill() {
        return this.items.every(item => !!item)
      },
 
    },
    watch: {
      first(newVal, oldVal) {
        this.reset()
      },
      items(newVal, oldVal) {
        if (this.winer != 0) {
          console.log(this.winer, ' win')
        }
      },
      isAuto(newVal) {
        this.reset()
        // if (newVal)
        //   this.autoplay()
      }
    },
    methods: {
      click(index) {
        if (this.items[index] != 0 || !!this.winer)
          return
 
        this.$set(this.items, index, this.next)
        // this.items[index] = this.next
        this.next = [2, 1][this.next - 1]
      },
 
      reset() {
        this.items = Array.from(Array(9)).fill(0)
        this.next = this.first
      },
    }
  }
</script>
 
<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
 
  .game {
    margin:20px;
    width: 300px;
    height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
 
  .cell {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    background: url("../assets/cell_bg.jpg") no-repeat;
    background-size: 100% 100%;
  }
 
  .celltype1 {
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background: white;
  }
 
  .celltype2 {
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background: black;
  }

  #building{
   background:url("../assets/bg3.jpg");
   #opacity: 0.3;
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}

</style>