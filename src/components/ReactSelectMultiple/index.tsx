import { ReactElement, useCallback, useEffect } from "react";
import { getProducts } from "./utils";

const ReactSelectMultiple = (): ReactElement => {
  const fetch = useCallback(() => {
    getProducts();
  }, []);

  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <h1>React Select Multiple</h1>
    </>
  );
};

export default ReactSelectMultiple;
