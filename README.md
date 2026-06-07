# Dreamland: Scotland's World Cup History
A high-performance, immersive "scrollytelling" platform built for Iain Donald to showcase the historical narrative of the Scotland Mens National Team experience at the FIFA World Cup.

## Technical Stack:
[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5c)
[![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](https://vite.dev)
[![Mapbox](https://img.shields.io/badge/Mapbox_GL_JS-black?logo=mapbox)](https://www.mapbox.com/)
[![Scrollama](https://img.shields.io/badge/Scrollama-ce6038)](https://github.com/russellsamora/scrollama)

##  Key Engineering Features

### 1. Dynamic "Scrollytelling" Engine
* Synchronised **Scrollama** intersection observers with a WebGL map instance using **Mapbox GL JS**.
* Mapped precise DOM scroll narrative triggers directly to interactive, dynamic 3D geospatial camera movements.

### 2. Modular Data Architecture
* Architected a modular, native **ESM-based asynchronous data layer**.
* Fetches and programmatically generates interactive markers and popups from tournament JSON datasets (tournamnet location and narative info, stadium coordinates).

### 3. Mobile-First UX Optimisation
* Engineered an adaptive frontend layout strategy that heavily shifts layout constraints depending on device aspect ratios.
* Preserves critical UX and interaction integrity by modifying layout of scrollama steps and map position.
