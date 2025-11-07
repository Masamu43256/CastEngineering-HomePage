"use client"; // クライアントコンポーネントであることを明示

import React, { useState } from 'react';
// Next.jsでは、<Head>を使ってページの<head>タグを編集できます
// import Head from 'next/head'; (エラー回避のためコメントアウト)

// --- 型定義 ---
// ナビゲーションセクションのID型
type SectionId = 'profile' | 'business' | 'contact';

// --- コンポーネント定義 ---

// ナビゲーションヘッダー
const Header = ({ activeSection, setActiveSection }: {
  activeSection: SectionId;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionId>>;
}) => {
  //モバイルメニューの開閉状態を管理するstateを追加
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: SectionId, label: string }[] = [
    { id: 'profile', label: '会社概要' },
    { id: 'business', label: '事業内容' },
    { id: 'contact', label: 'お問い合わせ' },
  ];

  // モバイルメニューのリンクをクリックした時の処理を共通化
  // セクションを切り替え、メニューを閉じる
  const handleMobileLinkClick = (id: SectionId) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <span
              onClick={() => setActiveSection('profile')}
              className="text-2xl font-bold text-gray-900 cursor-pointer"
            >
              キャスト・エンジニアリング
            </span>
          </div>
          {/* ナビゲーション（PC） */}
          <nav className="hidden md:flex md:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative inline-flex items-center text-sm font-medium transition-colors duration-200
                  ${
                    activeSection === item.id
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-900'
                  }
                `}
              >
                {item.label}
                {/* アクティブ時の下線 */}
                {activeSection === item.id && (
                  <span className="absolute bottom-[-8px] left-0 h-1 w-full bg-red-600 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>
          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="メニューを開く"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {/* モバイルメニュー本体 */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 absolute left-0 right-0 z-50">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMobileLinkClick(item.id)}
                    className={`block w-full text-left text-lg font-medium py-2 px-4 rounded transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-red-600 bg-gray-100'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

// メインの見出しコンポーネント
const SectionTitle = ({ title, subtitle }: {
  title: string;
  subtitle: string;
}) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {title}
    </h2>
    <p className="mt-3 text-lg text-gray-500 sm:mt-4">
      {subtitle}
    </p>
    <div className="mt-4 mx-auto h-1 w-20 bg-red-600 rounded-full"></div>
  </div>
);

// 会社概要
const CompanyProfile = () => {
  const profileData = [
    { label: '商号', value: '株式会社 キャスト・エンジニアリング' },
    { label: '設立日', value: '1993年10月20日' },
    { label: '資本金', value: '10,000,000円' },
    { label: '従業員数', value: '2名（2025年9月現在）' },
    { label: '取締役社長', value: '中嶋 和生' },
    { label: '取引銀行', value: '東濃信用金庫、三菱UFJ銀行' },
    { label: '適格請求書発行事業者登録番号', value: 'T5180001074021' },
    { label: '所在地', value: '〒480-0305 愛知県春日井市坂下町5-1215-446' },
    { label: 'TEL', value: '0568-88-5141' },
    { label: 'FAX', value: '0568-88-5656' },
  ];

  return (
    <section className="py-16 sm:py-24">
      <SectionTitle title="COMPANY" subtitle="会社概要" />
      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden bg-white shadow-lg rounded-lg border border-gray-200">
          <dl className="divide-y divide-gray-200">
            {profileData.map((item, index) => (
              <div
                key={index}
                className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4"
              >
                <dt className="text-sm font-semibold text-gray-700 md:col-span-1">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 md:mt-0 md:col-span-2">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

// 事業内容
const BusinessContent = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <SectionTitle title="BUSINESS" subtitle="事業内容" />
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-10">
          {/* 事業内容の例 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              鋳造会社向け
            </h3>
            {/* <p>タグの代わりに<ul>タグを使用 */}
            <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-2"> {/* list-discで黒丸、pl-5で左の余白、space-y-2で項目間の余白 */}
              <li>耐火物、解体、築炉</li>
              <ul>キュポラ、電気炉、取鍋などの解体、築炉（施工）</ul>
              <li>耐火、断熱耐火物の販売</li>
              <ul>不定形耐火物、パッチング材、プレキャストブロック、レンガ、断熱材など</ul>
              <li>鋳造材料、消耗品等の販売</li>
              <li>分析装置の販売、各種分析の代行</li>
              <li>各種集塵機の保守</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// お問い合わせフォーム
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;  // 明示的な型キャスト
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      'company-name': formData.get('company-name'),
      department: formData.get('department'),
      name: formData.get('name'),
      kana: formData.get('kana'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset(); // フォームをリセット
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ label, id, type = 'text', required = false, placeholder }: {
    label: string;
    id: string;
    type?: string; // typeはオプショナル（デフォルト値があるため）
    required?: boolean; // requiredはオプショナル（デフォルト値があるため）
    placeholder?: string; // placeholderはオプショナル
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border"
      />
    </div>
  );

  return (
    <section className="py-16 sm:py-24">
      <SectionTitle title="CONTACT" subtitle="お問い合わせ" />
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField label="企業名" id="company-name" placeholder="株式会社 Your Company" />
            <InputField label="部署" id="department" placeholder="営業部" />
            <InputField label="氏名" id="name" required placeholder="山田 太郎" />
            <InputField label="フリガナ" id="kana" placeholder="ヤマダ タロウ" />
            <InputField label="メールアドレス" id="email" type="email" required placeholder="your.email@example.com" />
            <InputField label="連絡先（電話番号）" id="phone" type="tel" placeholder="03-1234-5678" />

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-800">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border"
                placeholder="お問い合わせ内容をご記入ください..."
              ></textarea>
            </div>

            <div className="space-y-4">
              {submitStatus === 'success' && (
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-green-800">お問い合わせを送信しました。</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 p-4 rounded-md">
                  <p className="text-red-800">送信に失敗しました。時間をおいて再度お試しください。</p>
                </div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex justify-center rounded-md border border-transparent bg-red-600 py-3 px-12 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// フッター
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cast-Enginnering. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

// メインのAppコンポーネント
// Next.jsでは、これが `pages/index.js` のようなファイルになります
export default function CorporateSite() {
  const [activeSection, setActiveSection] = useState<SectionId>('profile'); // 初期表示セクション

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <CompanyProfile />;
      case 'business':
        return <BusinessContent />;
      case 'contact':
        return <ContactForm />;
      default:
        return <CompanyProfile />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      {/*
        Next.jsの<Head>コンポーネントはプレビュー環境でエラーになるため削除しました。
        実際のNext.jsプロジェクトでは、このファイルの代わりに
        pages/_app.js や pages/index.js (または app/layout.js) で
        <Head>タグや<title>タグを設定することが推奨されます。
      */}
      {/* <Head>
        <title>Your Company - シンプルでかっこいいコーポレートサイト</title>
        <meta name="description" content="事業内容と会社概要" />
      </Head> 
      */}

      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-grow">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
}



