# Weather Application

**[Visit Website](https://long-hold.github.io/odin-weather-app/)**

A responsive weather application providing current conditions and 7-day forecasts via the Visual Crossing Weather API.

## Features

- Current weather with temperature, humidity, precipitation, wind, and sun data
- 7-day forecast display
- Location search with default Hamilton, Ontario pre-loaded
- Responsive design with loading states

## Tech Stack

- Vanilla JavaScript (ES6 modules)
- HTML5 templates with data attributes
- CSS Grid layouts
- Webpack bundling
- Visual Crossing Weather API

## Quick Start

```bash
git clone https://github.com/long-hold/odin-weather-app.git
cd odin-weather-app
npm install
npm start        # Development
npm run build    # Production
```

## API Setup

Replace `API_KEY` in `src/modules/weatherService.js` with your [Visual Crossing API key](https://www.visualcrossing.com/).

## Architecture

Three-layer design with separation of concerns:
- `weatherService.js` - API calls
- `weatherClass.js` - Data transformation
- `weatherMarkupController.js` - DOM updates

Built for The Odin Project curriculum, demonstrating clean architecture and industry-standard practices.