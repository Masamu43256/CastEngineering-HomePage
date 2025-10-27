import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // 環境変数から送信先・認証情報を取得
  const toEmail = process.env.CONTACT_TO_EMAIL || 'suma41.59.mnmny@gmail.com';
  const gmailUser = process.env.GMAIL_USER || 'suma41.59.mnmny@gmail.com';
  const gmailPass = process.env.GMAIL_PASS || 'zwak ctsw sxgc dzyg';

  // nodemailerの設定（Gmail例）
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
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
    console.error('メール送信エラー:', error);
    return NextResponse.json({ 
      success: false, 
      error: String(error),
      details: {
        toEmail,
        gmailUser,
        errorMessage: error instanceof Error ? error.message : String(error)
      }
    }, { status: 500 });
  }
}