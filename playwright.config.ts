import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // โฟลเดอร์เก็บ test
  timeout: 600 * 1000, // เวลา timeout ของแต่ละ test = 60 วินาที
  retries: 0, // จำนวนครั้งที่ retry test ถ้า fail
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],

  use: {
    headless: false, // <-- เปิด browser ขณะรันทดสอบ
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure", // ถ้า test fail จะเก็บ screenshot
    video: "on", // ถ้า test fail จะเก็บ video
    trace: "on", // เก็บ trace สำหรับ debug
      launchOptions: {
        slowMo: 1000,
     },
  },

  // Directory สำหรับเก็บ artifacts
  outputDir: "./test-results", // screenshot, video, trace จะเก็บที่นี่

  
});