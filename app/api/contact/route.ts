import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // 送信先メールアドレス
  const toEmail = 'suma41.59.mnmny@gmail.com';

  // nodemailerの設定（Gmail例）
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-gmail@gmail.com',
      pass: 'your-gmail-app-password', // アプリパスワードを推奨
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: toEmail,
      subject: `お問い合わせ: ${name}`,
      text: message,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}