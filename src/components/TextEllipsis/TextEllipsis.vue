<template>
  <div class="text-ellipsis">
    <span :content="text">
      <span class="text-ellipsis-limit-text" :key="keyIndex">{{ text }}</span
      ><span
        class="text-ellipsis-more"
        v-show="oversize"
        @click="isLimitHeight = false"
        ><slot name="more"
          ><span>...</span><span class="expand">展开</span></slot
        ></span
      >
    </span>
  </div>
</template>
<script>
export default {
  name: "TextEllipsis",
  props: {
    text: String,
    maxLine: Number,
    lineHeight: Number,
  },
  data() {
    return {
      keyIndex: 0,
      oversize: false,
      isLimitHeight: true,
    };
  },
  computed: {
    height() {
      return (
        this.maxLine *
        this.lineHeight *
        (document.documentElement.clientWidth / 375)
      );
    },
  },
  watch: {
    text() {
      this.init();
    },
    isLimitHeight() {
      this.init();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.oversize = false;
      this.keyIndex += 1;
      let more = this.$el.querySelector(".text-ellipsis-more");
      more.style.display = "none";
      if (this.isLimitHeight) {
        this.limitShow();
      }
    },
    textClick() {
      this.$emit("click");
    },
    limitShow() {
      this.$nextTick(() => {
        let textDom = this.$el.querySelector(".text-ellipsis-limit-text");
        let title = this.$el;
        let more = this.$el.querySelector(".text-ellipsis-more");
        let n = 1000;
        if (textDom) {
          if (title.offsetHeight > this.height) {
            more.style.display = "inline-block";
            let text = this.text;
            while (title.offsetHeight > this.height && n > 0) {
              if (title.offsetHeight > this.height * 3) {
                textDom.innerText = text = text.substring(
                  0,
                  Math.floor(text.length / 2)
                );
              } else {
                textDom.innerText = text = text.substring(0, text.length - 1);
              }
              n--;
            }
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.text-ellipsis {
  font-size: 14px;
  line-height: 24px;
  .expand {
    color: #3b91ff;
    padding-left: 14px;
  }
}
</style>
