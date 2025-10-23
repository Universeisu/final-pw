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
  await page.getByRole('combobox').first().selectOption('11 ปี');
  await page.getByRole('combobox').nth(1).selectOption('ฉีดป้องกันโรคเอชพีวี (HPV) ครั้งที่ 1 (เฉพาะผู้หญิง)');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('combobox').nth(2).selectOption('ฉีดป้องกันโรคเอชพีวี (HPV) ครั้งที่ 2 (เฉพาะผู้หญิง)');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.getByText('บันทึกข้อมูลวัคซีนสำเร็จ').click();
});
 
//AddVaccinenotchooseAge
test('AddVaccinenotchooseAge', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('เข้าสู่ระบบสำเร็จ!').click();
  await page.locator('a').filter({ hasText: /^จัดการข้อมูลวัคซีน$/ }).click();
  await page.getByRole('button', { name: 'เพิ่มข้อมูลวัคซีน' }).click();
  await page.getByRole('combobox').nth(1).selectOption('ฉีดป้องกันรวมป้องกันคอตีบ-บาดทะยัก(dT) (กระตุ้นทุก 10 ปี');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.getByText('กรุณาเลือกอายุ').click();
});

//AddVaccinenotchooseVaccine

test('AddVaccinenotchooseVaccine', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('เข้าสู่ระบบสำเร็จ!').click();
  await page.locator('a').filter({ hasText: /^จัดการข้อมูลวัคซีน$/ }).click();
  await page.getByRole('button', { name: 'เพิ่มข้อมูลวัคซีน' }).click();
  await page.getByRole('combobox').first().selectOption('12 ปี');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.getByText('กรุณาเพิ่มวัคซีนอย่างน้อย 1').click();
});

//EditAdminVaccine

test('EditAdminVaccine', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('เข้าสู่ระบบสำเร็จ!').click();
  await page.locator('a').filter({ hasText: /^จัดการข้อมูลวัคซีน$/ }).click();
  await page.locator('tr:nth-child(11) > .px-6.py-2.flex > .bg-yellow-100').click();
  await page.locator('div:nth-child(2) > .bg-red-100').click();
  await page.getByRole('button', { name: 'บันทึกการแก้ไข' }).click();
  await page.getByText('แก้ไขข้อมูลสำเร็จ').click();

});

//DeleteVaccineSuccess

test('DeleteVaccineSuccess', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('เข้าสู่ระบบสำเร็จ!').click();
  await page.locator('a').filter({ hasText: /^จัดการข้อมูลวัคซีน$/ }).click();
  await page.locator('tr:nth-child(11) > .px-6.py-2.flex > .bg-red-100').click();
  await page.locator('[id="1"]').click();
  await page.getByRole('button', { name: 'ตกลง' }).click();
  await page.getByText('ลบข้อมูลสำเร็จ').click();
});
