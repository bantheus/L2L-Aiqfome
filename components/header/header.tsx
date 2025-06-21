"use client";

import { User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import IconButton from "../icon-button";
import LocationButton from "./location-button";

interface HeaderProps {
  address?: string;
}

export default function Header({
  address = "Rua Mandaguari, 198",
}: HeaderProps) {
  return (
    <header className="bg-primary top-0 z-50 w-full">
      <nav
        className="container mx-auto flex items-center justify-between p-4 text-white"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link href="/" aria-label="Ir para a página inicial">
          <Image
            src="/logos/logo.svg"
            alt="Logo aiqfome"
            width={32}
            height={32}
            priority
            className="object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/favicon.ico";
            }}
          />
        </Link>

        {/* Localização */}
        <LocationButton address={address} />

        {/* Perfil */}
        <IconButton
          icon={<User2Icon size={20} />}
          aria-label="Abrir perfil do usuário"
        />
      </nav>
    </header>
  );
}
