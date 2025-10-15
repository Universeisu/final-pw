import { test, expect } from '@playwright/test';

// AddVaccineSuccess
test('AddVaccineSuccess', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('เข้าสู่ระบบสำเร็จ!').click();
  await page.locator('a').filter({ hasText: /^จัดการข้อมูลวัคซีน$/ }).click();
  await page.getByRole('button', { name: 'เพิ่มข้อมูลวัคซีน' }).click();
  await page.getByRole('combobox').first().selectOption('2 เดือน');
  await page.getByRole('combobox').nth(1).selectOption('ฉีดป้องกันโรคตับอักเสบบี (HB2) (เฉพาะรายที่เกิดจากมารดาที่เป็นพาหะของไวรัสตับอักเสบบี)');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('combobox').nth(2).selectOption('กินโรต้า ครั้งที่1');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.getByText('บันทึกข้อมูลวัคซีนสำเร็จ').click();
});
 
//AddVaccinenotchooseAge
test('AddVaccinenotchooseAge', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.locator('div').filter({ hasText: /^รหัสผ่าน \*$/ }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('เข้าสู่ระบบสำเร็จ!').click();
  await page.locator('a').filter({ hasText: /^จัดการข้อมูลวัคซีน$/ }).click();
  await page.getByRole('button', { name: 'เพิ่มข้อมูลวัคซีน' }).click();
  await page.getByRole('combobox').nth(1).selectOption('ฉีดป้องกันรวมป้องกันคอตีบ-บาดทะยัก(dT) (กระตุ้นทุก 10 ปี');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.getByText('กรุณาเลือกอายุ').click();
});

