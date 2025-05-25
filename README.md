# Weather App

A modern weather application built with **React** and **TypeScript**.  
This app allows users to search for weather information by location and view recent search history.

## Features

- 🌤️ Search for current weather by city or location
- 🕑 View search history
- ⚡ Fast and responsive UI
- 🎨 Styled with Tailwind CSS
- 🔄 Data fetching and caching with React Query

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (customizable UI components)
- [React Query](https://tanstack.com/query/latest)
- External Weather API

## Project Structure

```
src/
  components/      # Reusable UI components
  pages/           # App pages (Home, History)
  hooks/           # Custom React hooks
  utils/           # Utility functions
public/            # Static assets
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

3. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Environment Variables

Create a `.env` file in the root directory and add your weather API key:
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

## License

MIT