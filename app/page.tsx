import type { NextPage, Metadata } from 'next';

// Next.js 13以降のApp Routerでは、<Head>コンポーネントの代わりに
// metadataオブジェクトをexportしてページの情報を設定します。
export const metadata: Metadata = {
  title: 'CastEnginneering Website | 私のホームページ',
  description: 'Next.jsとVercelで作成したモダンなホームページです。',
  // faviconは public/favicon.ico に配置することで自動的に認識されます。
};


// FontAwesomeなどのアイコンライブラリを使うと、より見栄えが良くなります。
// 例: <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
// ここではSVGアイコンを直接埋め込んでいます。

// ヘッダーナビゲーションのコンポーネント
const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          CastEnginneering Website
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-blue-500 transition duration-300">私について</a>
          <a href="#services" className="text-gray-600 hover:text-blue-500 transition duration-300">サービス</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-500 transition duration-300">お問い合わせ</a>
        </nav>
        {/* モバイル用のメニューボタン（機能は実装していません） */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none" aria-label="メニューを開く">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// ヒーローセクション（メインビジュアル）のコンポーネント
const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">ようこそ！私のホームページへ</h1>
        <p className="text-lg md:text-xl text-blue-200 mb-8">最新の技術で、最高のウェブ体験をお届けします。</p>
        <a 
          href="#contact" 
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105"
        >
          お問い合わせはこちら
        </a>
      </div>
    </section>
  );
};

// 「私について」セクションのコンポーネント
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">私について</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-4">
            {/* 画像プレースホルダー */}
            <div className="bg-gray-300 rounded-lg shadow-lg h-80 flex items-center justify-center">
              <span className="text-gray-500">（ここに画像）</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl text-gray-800 font-semibold mb-4">自己紹介</h3>
            <p className="text-gray-600 leading-relaxed">
              はじめまして。私はウェブサイト制作を専門とするデベロッパーです。
              Next.js、React、TypeScriptなどのモダンな技術スタックを用いて、ユーザーにとって使いやすく、見た目にも美しいサイトを構築することを得意としています。
              お客様のビジネスゴール達成をサポートするため、最適なソリューションをご提案します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// 「サービス」セクションのコンポーネント
const ServicesSection = () => {
  const services = [
    {
      icon: <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
      title: 'ウェブサイト制作',
      description: '静的なコーポレートサイトから動的なウェブアプリケーションまで、ご要望に応じたサイトを制作します。',
    },
    {
      icon: <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
      title: 'レスポンシブ対応',
      description: 'スマートフォン、タブレット、PCなど、あらゆるデバイスで最適に表示されるデザインを実装します。',
    },
    {
      icon: <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
      title: '高速化・SEO対策',
      description: 'Next.jsの強みを活かし、表示速度の速いサイトを構築。検索エンジンにも評価されやすい構造にします。',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">サービス</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 「お問い合わせ」セクションのコンポーネント
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">お問い合わせ</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            ご質問やご相談、お仕事の依頼など、お気軽にご連絡ください。
          </p>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">お名前</label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="山田 太郎" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">メールアドレス</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your-email@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">メッセージ</label>
              <textarea id="message" rows={5} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="お問い合わせ内容をご記入ください..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// フッターのコンポーネント
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};


// ページ全体のコンポーネント
const HomePage: NextPage = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

