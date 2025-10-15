import { test, expect } from '@playwright/test';

test('AddDevelopmentsuccess', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('เข้าสู่ระบบสำเร็จ!').click();
  await page.getByRole('link', { name: 'จัดการข้อมูลพัฒนาการ' }).click();
  await page.getByRole('button', { name: 'เพิ่มแผนการพัฒนาการ' }).click();
  await page.getByRole('combobox').first().selectOption('78');
  await page.getByRole('combobox').nth(1).selectOption('ด้านการเคลื่อนไหวพื้นฐาน');
  await page.getByRole('combobox').nth(2).selectOption('เคลื่อนไหวร่างกายตามที่ตกลงกัน ให้คู่กับสัญญาณเสียงที่ผู้ใหญ่ทำขึ้น  2 ชนิดต่อกัน (GM+EF)');
  await page.getByRole('button', { name: 'เพิ่มพัฒนาการ' }).click();
  await page.getByRole('combobox').nth(3).selectOption('ด้านการใช้กล้ามเนื้อมัดเล็กและสติปัญญา');
  await page.getByRole('combobox').nth(4).selectOption('เขียนชื่อตนเองได้ถูกต้อง (FM) ');
  await page.getByRole('button', { name: 'เพิ่มพัฒนาการ' }).click();
  await page.getByRole('combobox').nth(5).selectOption('ด้านการเข้าใจภาษา');
  await page.locator('div:nth-child(3) > .flex > select:nth-child(2)').selectOption('อ่านหนังสือที่มีภาพอย่างต่อเนื่องจนจบ และเล่าได้ว่าเป็นเรื่องอะไร (RL)');
  await page.getByRole('button', { name: 'เพิ่มพัฒนาการ' }).click();
  await page.locator('div:nth-child(4) > .flex > select').first().selectOption('ด้านการใช้ภาษา');
  await page.locator('div:nth-child(4) > .flex > select:nth-child(2)').selectOption('สามารถคิดเชิงเหตุผลและอธิบายได้(EL)');
  await page.getByRole('button', { name: 'เพิ่มพัฒนาการ' }).click();
  await page.locator('div:nth-child(5) > .flex > select').first().selectOption('ด้านการช่วยเหลือตัวเองและสังคม');
  await page.locator('div:nth-child(5) > .flex > select:nth-child(2)').selectOption('ทำงานที่ได้รับมอบหมายจนสำเร็จด้วยตนเอง (PS)');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.getByText('เพิ่มพัฒนาการสำเร็จ!').click();
});



