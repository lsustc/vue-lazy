<template>
  <div style="height: 100%">
    <div class="index-d3 switch">
      <div class="d3-more" style="display: block;padding-top: 20px;">
        <compF v-if="view1Show" />
        <CommonA v-if="view1Show" />
        <CompG v-if="view2Show" />
        <CommonB v-if="view2Show" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'compF': () => import("./components/compF"),
    'CompG': () => import("./components/compG"),
    'CommonA': () => import("@/components/CommonCompA"),
    'CommonB': () => import("@/components/CommonCompB")
  },

  data() {
    return {
      view1Show: false,
      view2Show: false,
      view3Show: false,
      view4Show: false,
      view5Show: false,
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
