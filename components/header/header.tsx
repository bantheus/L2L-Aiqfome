import Image from "next/image";
import IconButton from "./icon-button";
import LocationButton from "./location-button";

export default function Header() {
  const address = "Rua Mandaguari, 198";

  return (
    <nav className="bg-primary flex items-center justify-between p-4 text-white">
      {/* Logo */}
      <Image
        src="/logos/logo.svg"
        alt="Logo aiqfome"
        width={32}
        height={32}
        priority
        className="object-contain"
      />

      {/* Localização */}
      <LocationButton address={address} />

      {/* Perfil */}
      <IconButton
        icon="/icons/user-icon.svg"
        alt="Abrir perfil do usuário"
        aria-label="Abrir perfil do usuário"
      />
    </nav>
  );
}
