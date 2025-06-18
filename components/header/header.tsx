import { User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import IconButton from "../icon-button";
import LocationButton from "./location-button";

export default function Header() {
  const address = "Rua Mandaguari, 198";

  return (
    <nav className="bg-primary flex items-center justify-between p-4 text-white">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logos/logo.svg"
          alt="Logo aiqfome"
          width={32}
          height={32}
          priority
          className="object-contain"
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
  );
}
