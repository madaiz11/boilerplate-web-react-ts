import { Badge, Button } from "@/app/atoms";
import { Home, Phone, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigationBar } from "./useNavigationBar";

const NavigationBar = () => {
  const { isActive, selectedItems } = useNavigationBar();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBag className="size-6" />
          <span className="font-semibold text-lg">SalesCatalog</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant={isActive("/") ? "default" : "ghost"} asChild>
            <Link to="/">
              <Home className="mr-2 size-4" />
              Home
            </Link>
          </Button>

          <Button variant={isActive("/catalog") ? "default" : "ghost"} asChild className="relative">
            <Link to="/catalog">
              <ShoppingBag className="mr-2 size-4" />
              Catalog
              {selectedItems.length > 0 && (
                <Badge
                  variant="destructive"
                  className="-top-1 -right-1 absolute flex size-5 items-center justify-center p-0 text-xs"
                >
                  {selectedItems.length}
                </Badge>
              )}
            </Link>
          </Button>

          <Button variant={isActive("/contact") ? "default" : "ghost"} asChild>
            <Link to="/contact">
              <Phone className="mr-2 size-4" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
