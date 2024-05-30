This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Pokemon Deck App

Pokemon Deck App is a web application that displays detailed information about various Pokemon. The application is built using Next.js, Tailwind CSS, and integrates with the PokeAPI to fetch Pokemon data.

<img width="1495" alt="pokemon-deck" src="https://github.com/Restu-Armando/Pokemon-Deck-App/assets/76863245/8ef63ed1-c814-4e6f-b91d-4d93260f7287">


## Features

- Display a list of Pokemon with their images, names, and types.
- View detailed information about each Pokemon including abilities, stats, and locations.
- Responsive design that adapts to different screen sizes.
- Tooltips for additional information about abilities.
- Smooth transitions and modern UI components.

## Technologies Used

- **Next.js**: A React framework for server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A statically typed superset of JavaScript.
- **PokeAPI**: A free API to access Pokemon information.

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/pokemon-deck-app.git
    cd pokemon-deck-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    ```

4. **Open the application:**
    Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- **components/**: Contains reusable UI components such as `Footer`, `Header`, etc.
- **pages/**: Next.js pages for routing. Main pages include:
  - `index.tsx`: Main page displaying the list of Pokemon.
  - `[name].tsx`: Dynamic route for displaying detailed information about a specific Pokemon.
- **styles/**: Global CSS and Tailwind CSS configurations.
- **public/**: Static assets like images.

## API Reference

This project uses the PokeAPI to fetch Pokemon data. You can find more information about the API [here](https://pokeapi.deno.dev).

## Footer

This is a sample footer text:
```jsx
const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className="bg-zinc-600 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-sm text-gray-300">
          &copy; {getCurrentYear()} Restu Armando | All rights reserved
        </p>
        <p className="text-sm text-gray-300 mt-2">
          Data provided by <a href="https://pokeapi.deno.dev" className="text-blue-400 hover:underline">PokeAPI


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
