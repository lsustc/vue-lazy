<template>
  <div style="height: 100%">
    <div class="index-d3 switch">
      <div class="d3-more" style="display: block;padding-top: 20px;">
        <compH v-if="view1Show" />
        <CommonB v-if="view1Show" />
        <CompI v-if="view2Show" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'compH': () => import("./components/compH"),
    'CompI': () => import("./components/compI"),
    'CommonB': () => import("@/components/CommonCompB")
  },

  data() {
    return {
      view1Show: false,
      view2Show: false,
    };
  },
  mounted() {
    this.setViewShow();
  },
  methods: {
    setViewShow() {
      setTimeout(() => {
        this.view1Show = true;
        setTimeout(() => {
          this.view2Show = true;
        }, 2000);
      }, 2000);
    },
  },
};
</script>
