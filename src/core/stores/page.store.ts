import type { NavigateFunction } from "react-router-dom";
import { create } from "zustand";
import { ROUTES, type RoutePageType } from "../constanst/route";
import { randomId } from "../utils/random-id";

type PageInfo = {
  uid: string;
  title: string;
  description: string;
  path: string;
};

const PAGE_INFO: Record<RoutePageType, PageInfo> = {
  home: {
    uid: randomId(),
    title: "Home",
    description: "Welcome to the home page",
    path: ROUTES.home,
  },
  catalog: {
    uid: randomId(),
    title: "Catalog",
    description: "Browse our collection and select items you're interested in",
    path: ROUTES.catalog,
  },
  contact: {
    uid: randomId(),
    title: "Contact",
    description: "Contact us for any questions or feedback",
    path: ROUTES.contact,
  },
};

function pathnameToPage(pathname: string): RoutePageType | null {
  const entry = (Object.entries(ROUTES) as [RoutePageType, string][]).find(
    ([, path]) => path === pathname,
  );
  // TOO: When entry is null, we should redirect to 404 Page
  return entry ? entry[0] : null;
}

interface PageState {
  navigate: NavigateFunction | null;
  currentPage: PageInfo;
  setNavigate: (n: NavigateFunction) => void;
  setPage: (page: RoutePageType) => void;
  syncCurrentPageFromPathname: (pathname: string) => void;
  isPage: (page: RoutePageType) => boolean;
}

export const usePageStore = create<PageState>((set, get) => ({
  navigate: null,
  currentPage: PAGE_INFO.home,
  setNavigate: (n) => set({ navigate: n }),
  setPage: (page: RoutePageType) => {
    const { navigate } = get();
    const path = ROUTES[page];
    navigate?.(path);
  },
  syncCurrentPageFromPathname: (pathname: string) => {
    const page = pathnameToPage(pathname);
    if (page) set({ currentPage: PAGE_INFO[page] });
  },
  isPage: (page: RoutePageType) => get().currentPage.uid === PAGE_INFO[page]?.uid,
}));
