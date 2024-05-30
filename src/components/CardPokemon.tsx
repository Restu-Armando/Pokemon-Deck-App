import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://pokeapi.deno.dev/pokemon");
  return response.json();
}

export default async function PokemonList() {
  const pokemonList = await getData();

  return (
    <section className="bg-dark mx-auto flex flex-wrap justify-center gap-8 py-4">
      {pokemonList.map((pokemon: any) => (
        <div
          className="relative w-64 transform overflow-hidden rounded-xl border border-slate-950 shadow-md transition duration-300 ease-in-out hover:rotate-2 hover:scale-105 hover:opacity-80"
          key={pokemon.id}
          style={{ backgroundColor: pokemon.color }}
        >
          <Link href={`/pokemon/${pokemon.id}`}>
            {/* <div className="absolute right-2 top-2">
              <div
                className="h-6 w-6 rounded-full"
                style={{ backgroundColor: pokemon.color }}
              ></div>
            </div> */}
            <div className="absolute left-2 top-2">
              <div className="rounded-full bg-slate-500">
                <p className="px-1 py-1 text-xs text-white">#{pokemon.id}</p>
              </div>
            </div>
            <div className="relative m-2 h-64">
              <Image
                src={pokemon.imageUrl}
                alt={pokemon.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="text-dark p-4 text-center">
              <h2 className="mb-2 text-xl font-bold">{pokemon.name}</h2>
              <p className="mb-5 text-center">{pokemon.genus}</p>
              <p className="font-light">
                Type :{" "}
                <span className="font-bold">{pokemon.types.join(" / ")}</span>
              </p>
              {/* Tambahkan elemen HTML untuk menampilkan detail lainnya jika diperlukan */}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
