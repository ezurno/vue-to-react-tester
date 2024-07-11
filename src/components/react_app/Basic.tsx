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
