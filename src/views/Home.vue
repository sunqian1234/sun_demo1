<template>
  <div class="home">
    <text-ellipsis :text="text" :maxLine="3" :lineHeight="24"> </text-ellipsis>
    <!-- 有问题 -->
    <div class="box">这个边框是0.5px的</div>
  </div>
</template>

<script>
import TextEllipsis from "@/components/TextEllipsis/TextEllipsis.vue";

export default {
  name: "Home",
  components: {
    TextEllipsis,
  },
  data () {
    return {
      text: `国家卫生健康委新闻发言人米锋在18日举行的国务院联防联控机制新闻发布会上表示，元旦春节临近，冬春季疫情防控要始终坚持动态清零总方针，着力在科学精准上下功夫。要因地制宜、分类指导、分区施策，在落实防控措施的同时，保障人员安全、有序流动，坚决防止简单化、“一刀切”、“层层加码”，最大限度减少对群众生产生活的影响。（徐鹏航、宋晨）`
    };
  }
};
</script>

<style lang="less" scoped>
.box {
  margin-top: 100px;
  width: 200px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: -50%;
    right: -50%;
    top: -50%;
    bottom: -50%;
    border: 1px solid orange;
    pointer-events: none;
    transform: scale(0.5);
  }
}
</style>
