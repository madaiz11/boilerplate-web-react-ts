import { usePageStore } from "@/core/stores/page.store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavigationBar from "../organism/navigation-bar/navigation-bar";

const LandingTemplate = () => {
  const navigate = useNavigate();
  const setNavigate = usePageStore((s) => s.setNavigate);

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate, setNavigate]);

  return (
    <div className="min-h-screen">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default LandingTemplate;
