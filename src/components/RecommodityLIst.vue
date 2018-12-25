<template>
  <ul
    class="commodity-r-list-wrapper"
    v-if="data.length"
  >
    <li
      class="swiper-slide"
      v-for="item in data"
      :key="item.id"
    >
      <a :href="item.linkUrl">
        <img
          :src="item.imgUrl"
          alt=""
        />
        <dl>
          <dt>{{item.title}}</dt>
          <dd>¥ {{item.pirce}}</dd>
        </dl>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RecommodityList",
  props: {
    data: Array,
    required: true
  }
};
</script>

<style lang="less" scoped>
@white:#fff;
@red:#ff3c3c;
@black:#333;
.commodity-r-list-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li{
        background:@white;
        // margin-right: 0.1rem;
        width: 49%;
        padding-left: 0.1rem;
        padding-right: 0.1rem;
        box-sizing: border-box;
        margin-bottom: 0.1rem;
        // text-align: center;

        img{
            display: block;
            height: 1.72rem;
            width: 1.92rem;
            margin: 0.1rem auto;
        }

        dl{
            margin: 0.1rem 0rem 0.04rem 0rem;
            
            dt{
                color:@black;
                line-height: .533333rem;
                font-size: 12px;
            
                height: 1.066667rem;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            dd{
                color: @red;
                font-size:12px;
                margin-top: 0.1rem;
                margin-bottom: 0.1rem;
            }
        }
    }
}
</style>

