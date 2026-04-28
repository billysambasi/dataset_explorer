import { Chart } from "chart.js/auto";
import type { ColumnStats } from "./stats";

let chartInstance: Chart | null = null;

export function renderChart(stats: Record<string, ColumnStats>) {
  const canvas = document.getElementById("chart") as HTMLCanvasElement;
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(canvas, {
    type: "bar",
    data: {
      labels: Object.keys(stats),
      datasets: [{ label: "Mean", data: Object.values(stats).map((s) => s.mean), backgroundColor: "#6366f1" }],
    },
  });
}
