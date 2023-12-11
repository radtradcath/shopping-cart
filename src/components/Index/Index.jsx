import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  );
}
