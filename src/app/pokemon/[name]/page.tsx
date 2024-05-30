import Image from "next/image";

// Untuk menampilkan detail pokemon dan URL nya menjadi ID
async function getData(id: string) {
  const response = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`);
  return response.json();
}

export default async function DetailPokemon({
  params,
}: {
  params: { name: string };
}) {
  const pokemon = await getData(params.name);
  // className="flex h-screen gap-8"
  // style={{ backgroundColor: pokemon.color }}
  return (
    <section
      className="flex h-screen flex-col items-center justify-center gap-8 sm:flex-row md:flex-row lg:flex-row"
      style={{ backgroundColor: pokemon.color }}
    >
      <div className="p-3 lg:w-1/2">
        <h1 className="m-5 text-4xl font-bold lg:text-6xl">{pokemon.name}</h1>
        <h2 className="m-5 text-2xl font-bold lg:text-4xl">Abilities</h2>
        <div className="m-5 flex flex-col gap-3 text-white sm:flex-row md:flex-row lg:flex-row">
          <div className="tooltip-container flex">
            <div className="tooltip rounded bg-slate-500 p-2">
              {pokemon.abilities[0]?.name}
              <span className="tooltip-text">
                {pokemon.abilities[0]?.description}
              </span>
            </div>
          </div>
          <div className="tooltip-container flex">
            <div className="tooltip rounded bg-slate-500 p-2">
              {pokemon.abilities[1]?.name}
              <span className="tooltip-text">
                {pokemon.abilities[1]?.description}
              </span>
            </div>
          </div>
        </div>
        <p className="m-5 text-sm text-slate-800 lg:text-base">
          {pokemon.description}
        </p>
        <p className="m-5 text-sm text-slate-800 lg:text-base">
          Stats:{"  "}
          <span className="font-bold ">
            HP: {pokemon.stats.HP} | Attack: {pokemon.stats.Attack} | Defense:{" "}
            {pokemon.stats.Defense} | Speed: {pokemon.stats.Speed}
          </span>
        </p>
      </div>
      <div className="pokemon-image relative h-full flex-1">
        <Image
          src={pokemon.imageUrl}
          alt={pokemon.name}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
