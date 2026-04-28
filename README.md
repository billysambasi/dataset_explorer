# 📊 Dataset Explorer

A browser-based tool that lets you upload a CSV file and instantly explore summary statistics and visualizations. Built with TypeScript and Vite.

## Features

- Upload any CSV file and auto-detect numeric columns
- Summary statistics table showing mean, median, variance, min, and max per column
- Bar chart visualization of column means
- Column selector to control which columns appear in the chart

## Tech Stack

- **TypeScript** — type-safe logic throughout
- **Vite** — fast development server and bundler
- **PapaParse** — CSV parsing
- **Chart.js** — bar chart rendering

## Project Structure

```
dataset_explorer/
├── src/
│   ├── main.ts       # Entry point, wires UI events to logic
│   ├── parser.ts     # CSV parsing via PapaParse
│   ├── stats.ts      # Mean, median, variance, min, max calculations
│   └── chart.ts      # Bar chart rendering via Chart.js
├── index.html        # App shell with table and canvas
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project metadata and scripts
```

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open your browser at `http://localhost:5173`

### Build for production

```bash
npm run build
```

## Usage

1. Click the **Choose File** button and upload a `.csv` file
2. The app will automatically detect numeric columns
3. A stats table will display mean, median, variance, min, and max for each column
4. A bar chart will visualize the mean values
5. Use the column checkboxes to filter which columns appear in the chart

## Example CSV

```csv
product,sales,price,quantity
Apple,150,1.20,125
Banana,200,0.50,400
Orange,180,0.80,225
Mango,120,2.50,48
Grapes,90,3.00,30
```
