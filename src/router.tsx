import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import Scrap from "pages/Scrap";
import Frame from "components/Frame";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path="" element={<Main />} />
          <Route path="scrap" element={<Scrap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
