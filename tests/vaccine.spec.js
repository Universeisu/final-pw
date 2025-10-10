import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // ไปที่หน้า Signin
  await page.goto("https://mimi-caare-project.vercel.app/Signin");
  await page.waitForTimeout(1000); // รอ 1 วินาที

  // กรอกอีเมล
  await page.getByRole("textbox", { name: "กรอกอีเมล" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("textbox", { name: "กรอกอีเมล" }).fill("M@gmail.com");
  await page.waitForTimeout(500);

  // กรอกรหัสผ่าน
  await page.getByRole("textbox", { name: "กรอกรหัสผ่าน" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("textbox", { name: "กรอกรหัสผ่าน" }).fill("123456");
  await page.waitForTimeout(500);

  // เข้าสู่ระบบ
  await page.getByRole("button", { name: "เข้าสู่ระบบ" }).click();
  await page.waitForTimeout(2000); // รอหน้าโหลด
  await page.getByText("เข้าสู่ระบบสำเร็จ!").click();
  await page.waitForTimeout(1000);
  // ไปหน้า Vaccine
  await page.getByTestId("Vaccine-Page").click();
  await page.waitForTimeout(1000);
  await page.getByText("วัคซีนตามมาตรฐาน").click();
  await page.waitForTimeout(500);
  await page.getByText("วัคซีนเพิ่มเติม").click();
  await page.waitForTimeout(500);

  // กรอกวัคซีนเอง
  await page.getByRole("button", { name: "กรอกวัคซีนเอง" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "ถัดไป" }).click();
  await page.waitForTimeout(500);

  // กรอกชื่อวัคซีน
  await page.getByRole("textbox", { name: "ชื่อวัคซีน" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("textbox", { name: "ชื่อวัคซีน" }).fill("fb");
  await page.waitForTimeout(500);

  // กรอกหมายเหตุ
  await page.getByRole("textbox", { name: "หมายเหตุ" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("textbox", { name: "หมายเหตุ" }).fill("ไข้");
  await page.waitForTimeout(500);

  // บันทึก
  await page.getByRole("button", { name: "ถัดไป" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "บันทึก" }).click();
  await page.waitForTimeout(1000);
  await page.getByText("บันทึกข้อมูลวัคซีนแบบกรอกเองสำเร็จ").click();
  await page.waitForTimeout(1000);
});
