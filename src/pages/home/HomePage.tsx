import { useEffect, useState } from "react";

export const HomePage = () => {
  const [count, setCount] = useState(0);
  const num = 1;

  useEffect(() => {
    setCount(count + 1);
  }, []);
  return <div>Home Page</div>;
};
