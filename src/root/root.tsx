import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <div style={{ marginTop: "8%" }}>
        <Outlet />
      </div>
    </>
  );
}
