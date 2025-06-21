"use client";

import { SearchIcon } from "lucide-react";
import { useRef } from "react";
import IconButton from "../icon-button";
import { Input } from "../ui/input";

interface SearchInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
}

function SearchInput({
  value,
  onChange,
  onSearch,
  placeholder = "busque pela loja ou culinária",
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputRef.current?.value || "");
    }
  };

  return (
    <div className="bg-primary px-4 pb-4">
      <div className="relative container mx-auto max-w-xl rounded-md bg-white">
        <Input
          ref={inputRef}
          type="search"
          className="placeholder:text-muted-foreground pl-10 placeholder:text-sm focus:ring-white"
          placeholder={placeholder}
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          aria-label={placeholder}
        />
        <div className="absolute inset-y-0 left-3 flex items-center">
          <IconButton
            icon={<SearchIcon size={20} className="text-muted-foreground" />}
            aria-label="Pesquisar"
            onClick={handleSearch}
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
