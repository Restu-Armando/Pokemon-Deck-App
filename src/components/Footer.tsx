const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="bg-zinc-600 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-sm text-gray-300">
          &copy; {getCurrentYear()} Restu Armando | All rights reserved
        </p>
        <p className="mt-2 text-sm text-gray-300">
          Data provided by{" "}
          <a
            href="https://pokeapi.deno.dev"
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            PokeAPI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
