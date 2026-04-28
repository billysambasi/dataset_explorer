export type ColumnStats = {
  mean: number;
  median: number;
  variance: number;
  min: number;
  max: number;
};

function numericValues(data: Record<string, unknown>[], col: string): number[] {
  return data.map((r) => r[col]).filter((v): v is number => typeof v === "number");
}

function mean(values: number[]) {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function variance(values: number[], avg: number) {
  return values.reduce((sum, v) => sum + (v - avg) ** 2, 0) / values.length;
}

export function computeStats(
  data: Record<string, unknown>[],
  columns: string[]
): Record<string, ColumnStats> {
  return Object.fromEntries(
    columns.map((col) => {
      const values = numericValues(data, col);
      const avg = mean(values);
      return [col, { mean: avg, median: median(values), variance: variance(values, avg), min: Math.min(...values), max: Math.max(...values) }];
    })
  );
}
