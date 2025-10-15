import { test, expect } from '@playwright/test';

//changrole successfully
test('test', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: 'ไปที่จัดการผู้ใช้' }).click();
  await page.getByRole('button', { name: 'Admin' }).nth(2).click();
  await page.getByText('อัปเดตบทบาทสำเร็จ').click();
});

//changeRoleError
test('test1', async ({ page }) => {
  await page.goto('https://mimi-caare-project.vercel.app/Signin');
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).click();
  await page.getByRole('textbox', { name: 'กรอกอีเมล' }).fill('uni@hotmail.com');
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'กรอกรหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('เข้าสู่ระบบสำเร็จ!').click();
  await page.getByRole('link', { name: 'ไปที่จัดการผู้ใช้' }).click();
  await page.locator('tr:nth-child(11) > td:nth-child(4) > .flex.justify-center > .relative > .flex-1.text-sm.font-medium.z-10.transition-colors.text-white').click();
  await page.getByText('ไม่สามารถเปลี่ยน role').click();
});                                                                                                   /ๅ


