import Frame from "components/Frame";
import Main from "pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path="" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
