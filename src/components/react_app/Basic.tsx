import React from "react";

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
      <button onClick={onClick}>CLICK THIS</button>
    </div>
  );
}
