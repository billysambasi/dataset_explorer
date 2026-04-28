import Papa from "papaparse";

export type DataRow = Record<string, string | number>;

export function parseCSV(file: File): Promise<DataRow[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<DataRow>(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => resolve(result.data),
      error: (err) => reject(err),
    });
  });
}
