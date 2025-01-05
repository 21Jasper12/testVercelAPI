// const express = require("express");
// const fs = require("fs");
// const csv = require("csv-parser");

// const app = express();
// const port = 3000;

// 定義 API 路由
// app.get("/data", (req, res) => {
//     const filePath = "testCSV.csv";

//     // 檢查檔案是否存在
//     if (!fs.existsSync(filePath)) {
//       return res.status(404).send("File not found");
//     }

//     // 讀取 CSV 檔案並回傳
//     res.setHeader("Content-Type", "text/csv"); //請求型別
//     // res.setHeader("Content-Disposition", "attachment; filename=testCSV.csv"); //直接下載
//     fs.createReadStream(filePath).pipe(res);
//   });

// 定義 API 路由
// app.get("/data", (req, res) => {
//   const filePath = "testCSV.csv";

//   // 檢查檔案是否存在
//   if (!fs.existsSync(filePath)) {
//     return res.status(404).send("File not found");
//   }

//   // 設定回應的內容類型為 text/plain
//   res.setHeader("Content-Type", "text/plain"); //請求型別

//   // 讀取 CSV 檔案並以純文字形式回傳
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading file:", err);
//       return res.status(500).send("Failed to read file");
//     }
//     res.send(data);
//   });
// });

// 啟動伺服器
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const filePath = path.resolve("./testCSV.csv"); // 確保路徑相對於根目錄

  // 檢查檔案是否存在
  if (!fs.existsSync(filePath)) {
    res.status(404).send("File not found");
    return;
  }

  // 設定回應的內容類型為 text/plain
  res.setHeader("Content-Type", "text/plain");

  // 讀取 CSV 檔案並以純文字形式回傳
  try {
    const data = fs.readFileSync(filePath, "utf8");
    res.status(200).send(data);
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Failed to read file");
  }
};
