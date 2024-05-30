import CardPokemon from "@/components/CardPokemon";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div className="bg-slate-300">
      <Image
        src="/logo-poke.png"
        alt="Pokemon Logo"
        width={300}
        height={300}
        className="mx-auto"
      />
      <div>
        <h1 className="text-dark text-center text-3xl font-bold">
          Pokemon Deck
        </h1>
      </div>
      <CardPokemon></CardPokemon>
    </div>
  );
}

export default Home;
