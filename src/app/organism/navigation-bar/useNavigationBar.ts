import { useCartStore } from "@/core/stores/cart.store";
import { useLocation } from "react-router-dom";

export const useNavigationBar = () => {
  const location = useLocation();
  const { selectedItems } = useCartStore();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return {
    isActive,
    selectedItems,
  };
};
