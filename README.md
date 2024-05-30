
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

