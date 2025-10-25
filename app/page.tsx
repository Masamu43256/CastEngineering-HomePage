import React, { useState } from 'react';
// Next.jsでは、<Head>を使ってページの<head>タグを編集できます
// import Head from 'next/head';

// ナビゲーションヘッダー
const Header = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'profile', label: '会社概要' },
    { id: 'business', label: '事業内容' },
    { id: 'contact', label: 'お問い合わせ' },
  ];

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
              Your Company
            </span>
          </div>
          
          {/* ナビゲーション */}
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

          {/* モバイルメニューボタン (ここでは機能実装なし、UIのみ) */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// メインの見出しコンポーネント
const SectionTitle = ({ title, subtitle }) => (
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
    { label: '商号', value: '株式会社 Your Company' },
    { label: '設立日', value: '2000年1月1日' },
    { label: '資本金', value: '100,000,000円' },
    { label: '従業員数', value: '150名（2024年4月現在）' },
    { label: '取締役社長', value: '山田 太郎' },
    { label: '取引銀行', value: '〇〇銀行、△△銀行' },
    { label: '適格請求書発行事業者登録番号', value: 'T1234567890123' },
    { label: '所在地', value: '〒100-0001 東京都千代田区千代田1-1' },
    { label: 'TEL', value: '03-1234-5678' },
    { label: 'FAX', value: '03-1234-5679' },
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
              革新的なテクノロジー事業
            </h3>
            <p className="text-gray-600 leading-relaxed">
              最先端のAIとIoT技術を駆使し、社会の課題を解決するソリューションを提供します。スマートシティの構築から、効率的なデータ分析基盤まで、未来を形作るテクノロジーを追求しています。
            </p>
          </div>
          {/* 事業内容の例 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              サステナブルなソリューション
            </h3>
            <p className="text-gray-600 leading-relaxed">
              地球環境との共生を目指し、再生可能エネルギー関連のコンサルティングや、エコフレンドリーな製品の開発を行っています。持続可能な社会の実現に貢献します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// お問い合わせフォーム
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ここにフォームの送信処理（APIへの送信など）を実装します
    // Next.jsの場合、'/api/contact'のようなAPIルートを作成することが一般的です
    console.log('フォームが送信されました');
    // 送信完了メッセージなどを表示
  };

  const InputField = ({ label, id, type = 'text', required = false, placeholder }) => (
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

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-3 px-12 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-300"
              >
                送信する
              </button>
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
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

// メインのAppコンポーネント
// Next.jsでは、これが `pages/index.js` のようなファイルになります
export default function CorporateSite() {
  const [activeSection, setActiveSection] = useState('profile'); // 初期表示セクション

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
      {/* Next.jsの<Head>コンポーネントを使って、
        ページのタイトルやメタ情報を設定できます。
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
