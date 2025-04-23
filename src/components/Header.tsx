
import { Badge } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between shadow-sm bg-white border-b">
      <div className="flex items-center gap-2">
        <Badge className="h-6 w-6 text-badge-primary" />
        <h1 className="text-xl font-semibold text-badge-dark">BadgeSnap</h1>
      </div>
      <div className="text-sm text-muted-foreground">Employee Badge Registration</div>
    </header>
  );
};

export default Header;
