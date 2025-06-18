function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-strong bg-secondary flex flex-col px-4 py-6 text-center font-bold text-balance">
      <p className="text-sm">feito com 💜 em maringá-PR</p>
      <p>
        <a
          href="https://aiqfome.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:opacity-80"
        >
          aiqfome.com
        </a>{" "}
        © 2007-{currentYear} aiqfome LTDA .
      </p>
      <p>CNPJ: 09.186.786/0001-58</p>
    </footer>
  );
}

export default Footer;
