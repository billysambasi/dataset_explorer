import { parseCSV } from "./parser";
import { computeStats } from "./stats";
import { renderChart } from "./chart";
import type { ColumnStats } from "./stats";

document.getElementById("fileInput")!.addEventListener("change", async (e) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  const data = await parseCSV(file);
  const numericCols = Object.keys(data[0]).filter((k) => typeof data[0][k] === "number");
  const stats = computeStats(data as Record<string, unknown>[], numericCols);

  renderTable(stats);
  renderChart(stats);
});

function renderTable(stats: Record<string, ColumnStats>) {
  const tbody = document.querySelector("#statsTable tbody")!;
  tbody.innerHTML = Object.entries(stats)
    .map(([col, s]) => `<tr><td>${col}</td><td>${s.mean.toFixed(2)}</td><td>${s.median.toFixed(2)}</td><td>${s.variance.toFixed(2)}</td><td>${s.min}</td><td>${s.max}</td></tr>`)
    .join("");
}
