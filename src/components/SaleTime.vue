<template>
  <div class="sal-warpper">
    <ul>
      <li
        v-for="(item,index) in getResultArray"
        :key="item.time"
        :class="{active:!index}"
      >
        {{item.time}}
        <br />
        {{item.desc}}
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "SaleTime",
  data() {
    return {
      times: ["8:00", "12:00", "16:00", "20:00"]
    };
  },
  props: {
    time: String,
    required: true
  },
  computed: {
    getResultArray() {
      // console.log(this.times, this.time);
      let time = this.time;
      let result = [];
      for (let i = 0; i < this.times.length; i++) {
        if (i === 0) {
          result.push({
            time: this.times[time],
            desc: "秒杀中"
          });
        } else {
          if (time <= 3) {
            result.push({
              time: this.times[time],
              desc: "即将开始"
            });
          } else {
            result.push({
              time: "明天" + this.times[time - 4],
              desc: "即将开始"
            });
          }
        }
        time++;
      }
      // console.log(result);
      return result;
    }
  },
  created() {
    // console.log("time");
  }
};
</script>

<style lang="less" scoped>
.sal-warpper {
  ul {
    display: flex;
    flex-wrap: nowrap;
    height: 0.94rem;
    align-items: center;

    li {
      flex: 1;
      text-align: center;
      font-size: 14px;
      line-height: 0.506667rem;
    }
    .active {
      font-size: 16px;
      color: #ffb000;
      font-weight: 800;
    }
  }
}
</style>

