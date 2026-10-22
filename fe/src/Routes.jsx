import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewItem from "./pages/NewItem";
import EditItem from "./pages/EditItem";
import Categories from "./pages/Categories";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewItem />} />
      <Route path="/edit/:id" element={<EditItem />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}
