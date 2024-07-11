## Vue-To-React-Test Rep.

### 개요

- 회사내에서 기존의 Vue3 로 제작 된 프로젝트를 React 로 마이그레이션을 해달라는 요청을 받아...
- 마이그레이션 도중 한 번의 시연 과정을 거쳐야 한다는 소리를 듣고 vue 를 react 로 convert 해주는 라이브러리는 없을까 하는 생각을 하게 되었다.
- 열심히 찾아본 결과 `Veaury` 라는 라이브러리를 보고 사용 법 숙지를 위해 만든 연습장 용 repo
- ~~내가 vue 를 결국 하게 되다니...~~

<br/>
<hr/>

### 시작에 앞서

<div>
    <img src="https://img.shields.io/badge/React-3776AB?style=for-the-badge&logo=React&logoColor=white">
    <img src="https://img.shields.io/badge/Vue3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=yellow">
</div>

<br/>

> 앞서 사용할 환경은 크게 _React 18_, _Vue 3_ 이며
>
> 사용할 `Library` 는 `Veaury` 이다.
>
> [공식문서](https://github.com/gloriasoft/veaury)

<br/>

```
npm insatll vuery -S
```

<br/>
<hr/>

### 사용 방법

1. 기본적으로 사용 할 `.tsx` 파일을 생성해서 `src` 안에 넣어놓는다.

```tsx
import React from "react";

/**
 * vue 에서 받은 children 을 사용 가능 함
 */
export default function BasicReactComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const onClick = () => {
    window.alert("HELLO");
  };
  return (
    <div>
      <h2>React Good</h2>
      {children && children}
      <button onClick={onClick}>CLICK THIS</button>
    </div>
  );
}
```

2. `.vue` 파일에서 해당하는 `.tsx` 파일을 등록시켜 사용 하면 끝

```vue
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
```
