import { usePageStore } from "@/core/stores/page.store";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../organism/navigation-bar/navigation-bar";

const TemplateTitle = ({ children }: { children: React.ReactNode }) => {
  const currentPage = usePageStore((s) => s.currentPage);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl">{currentPage.title}</h1>
          <p className="text-muted-foreground">{currentPage.description}</p>
        </div>

        {children}
      </div>
    </div>
  );
};

const RootTemplate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setNavigate = usePageStore((s) => s.setNavigate);
  const syncCurrentPageFromPathname = usePageStore((s) => s.syncCurrentPageFromPathname);

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate, setNavigate]);

  useEffect(() => {
    syncCurrentPageFromPathname(location.pathname);
  }, [location.pathname, syncCurrentPageFromPathname]);

  return (
    <div className="min-h-screen">
      <NavigationBar />
      <TemplateTitle>
        <Outlet />
      </TemplateTitle>
    </div>
  );
};

export default RootTemplate;
