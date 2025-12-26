import React, { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count value:", count);
  }, [count]); // runs when count changes

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default Example;
