# Dataset Explorer

A browser-based tool that lets you upload a CSV file and instantly explore summary statistics and visualizations. Built with TypeScript and Vite.

## Features

- Upload any CSV file and auto-detect numeric columns
- Summary statistics table showing mean, median, variance, min, and max per column
- Bar chart visualization of column means
- Column selector to control which columns appear in the chart

## Tech Stack

- **TypeScript** - type-safe logic throughout
- **Vite** - fast development server and bundler
- **PapaParse** - CSV parsing
- **Chart.js** - bar chart rendering

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
Watermelon,310,4.50,60
Pineapple,275,3.80,85
Strawberry,420,5.00,200
Blueberry,380,6.50,150
Peach,160,2.20,110
Plum,140,1.80,95
Cherry,500,7.00,180
Kiwi,230,2.80,140
Papaya,175,3.20,70
Lemon,95,0.90,320
Lime,85,0.70,280
Coconut,210,5.50,45
Avocado,330,3.50,130
Pomegranate,260,4.20,75
Dragonfruit,190,6.00,40
```
