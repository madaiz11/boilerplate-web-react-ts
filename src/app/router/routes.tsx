import CatalogSelectionPage from "@/app/pages/catalog-selection-page/catalog-selection-page";
import ContactUsPage from "@/app/pages/contact-us-page/contact-us-page";
import LandingPage from "@/app/pages/landing-page/landing-page";
import RootTemplate from "@/app/templates/root-template";
import type { RouteObject } from "react-router-dom";
import LandingTemplate from "../templates/landing-template";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingTemplate />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  {
    path: "/catalog",
    element: <RootTemplate />,
    children: [{ index: true, element: <CatalogSelectionPage /> }],
  },
  {
    path: "/contact",
    element: <RootTemplate />,
    children: [{ index: true, element: <ContactUsPage /> }],
  },
];
