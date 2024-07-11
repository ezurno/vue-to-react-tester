<!-- template에서는 기존의 쓰던 vue 의 문법을 사용하면 됨 -->
<template>
  <BasicPure :foo="foo">
    <h2>Children</h2>
  </BasicPure>
  <Basic />
  <Basic />
</template>

<script>
import { applyReactInVue, applyPureReactInVue } from "veaury";
import BasicReactComponent from "./react_app/Basic";
import { ref } from "vue";

/**
 * components 에서 사용 할 component 를 applyReactInVue 로 등록 시킴
 * 등록 시킨 component 의 이름을 사용해서 vue-template 에 사용함
 */
export default {
  components: {
    Basic: applyReactInVue(BasicReactComponent),
    BasicPure: applyPureReactInVue(BasicReactComponent),
  },

  /**
   * setup 으로 ref 나 동작함수를 args 로 넘길 수 있음
   */
  setup() {
    return {
      foo: ref("Hello!"),
    };
  },
};
</script>
