import { SearchIcon } from "lucide-react";
import IconButton from "../icon-button";
import { Input } from "../ui/input";

function SearchInput() {
  return (
    <div className="bg-primary px-4 pb-4">
      <div className="relative container mx-auto max-w-xl rounded-md bg-white">
        <Input
          type="search"
          className="placeholder:text-muted-foreground pl-10 placeholder:text-sm focus:ring-white"
          placeholder="busque pela loja ou culinária"
        />
        <div className="absolute inset-y-0 left-3 flex items-center">
          <IconButton
            icon={<SearchIcon size={20} className="text-muted-foreground" />}
            aria-label="Pesquisar por loja ou culinária"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
