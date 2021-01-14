<template>
  <div style="height: 100%">
    <div class="index-d3 switch">
      <div class="d3-more" style="display: block;padding-top: 20px;">
        <CompA v-if="view1Show" />
        <CompB v-if="view2Show" />
        <CompC v-if="view3Show" />
        <CommonA v-if="view3Show" />
        <CompD v-if="view4Show" />
        <CompE v-if="view5Show" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'CompA': () => import("./components/compA"),
    'CompB': () => import("./components/compB"),
    'CompC': () => import("./components/compC"),
    'CompD': () => import("./components/compD"),
    'CompE': () => import("./components/compE"),
    'CommonA': () => import("@/components/CommonCompA")
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
          setTimeout(() => {
            this.view3Show = true;
            setTimeout(() => {
              this.view4Show = true;
              setTimeout(() => {
                this.view5Show = true;
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    },
  },
};
</script>
