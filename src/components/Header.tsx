import { Search, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-background via-background/95 to-transparent transition-all">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-primary md:text-3xl">STREAMFLIX</h1>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              TV Shows
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Movies
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              New & Popular
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              My List
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <ChevronDown className="h-4 w-4 text-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
