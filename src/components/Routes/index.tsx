import { Routes, Route } from "react-router-dom";
import ReactSelectMultiple from "../ReactSelectMultiple";

const Routers = () => {
  const urls = [
    {
      path: "/",
      element: <ReactSelectMultiple />,
    },
  ];

  return (
    <>
      <Routes>
        {urls.map((_, i: number) => {
          return <Route key={i} path={_.path} element={_.element} />;
        })}
      </Routes>
    </>
  );
};

export default Routers;
