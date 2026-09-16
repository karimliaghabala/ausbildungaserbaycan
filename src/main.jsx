import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const navItems = [['/', 'Ana səhifə'], ['/about', 'Haqqımızda'], ['/interviu', 'Hazırlıq'], ['/blog', 'Blog'], ['/destek', 'Dəstək'], ['/contact', 'Əlaqə']];
const interviewItems = [
  ['Koch üçün müsahibə', '/interv-vor/koch'], ['Vorstellung-1', '/interv-vor/vorstellug'],
  ['Vorstellung-2', '/interv-vor/vorstellug-1'], ['Vorstellung-3', '/interv-vor/vorstellug-2'],
  ['Vorstellung-4', '/interv-vor/vorstellug-3'], ['Vorstellung-5 (B1)', '/interv-vor/vorstellug-4'],
  ['Vorstellung-6 (A2)', '/interv-vor/vorstellug-5'], ['Vorstellung-7 (B1)', '/interv-vor/vorstellug-6'], ['Vorstellung-8', '/interv-vor/vorstellug-7'],
];
const blogItems = [['Ailə birləşməsi', '/blog/textaile'], ['Almaniyada banklara qeydiyyat', '/blog/textbank'], ['Uşaqların məktəbə və bağçaya qeydiyyatı', '/blog/kitaundschule'], ['Almaniyada kirayə ev tapmaq problemi (YENİ)', '/blog/mietevohnung']];

function Link({ href, children, className = '' }) {
  const navigate = (event) => {
    if (href.startsWith('/')) {
      event.preventDefault();
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };
  return <a className={className} href={href} onClick={navigate}>{children}</a>;
}

function Layout({ children }) {
  return <div className="mx-auto max-w-5xl px-4 text-stone-800">
    <header className="my-6 flex justify-center rounded-xl bg-gradient-to-r from-stone-950 via-red-400 to-yellow-300 p-4 shadow-lg">
      <Link href="/"><img width="300" src="/photos/Başlıksız-1 (2).png" alt="Yolumuz Almaniyaya" /></Link>
    </header>
    <div className="h-48 overflow-hidden rounded-xl shadow-lg sm:h-72"><img className="h-full w-full object-cover" src="/photos/berlin.png" alt="Berlin" /></div>
    <nav><ul className="flex flex-wrap justify-center gap-2 py-5 sm:gap-4">{navItems.map(([href, label]) => <li key={href}><Link className="inline-block rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow transition hover:bg-red-700 sm:px-5" href={href}>{label}</Link></li>)}</ul></nav>
    <main className="min-h-80 space-y-4 px-2 py-5 leading-relaxed">{children}</main>
    <footer className="mt-5 rounded-xl bg-gradient-to-r from-stone-950 via-red-400 to-yellow-300 p-4 text-center text-white"><hr className="mb-3 border-white/50" /><p>© 2025-2026 Almaniya, Berlin, Kərimli Ağabala</p></footer>
  </div>;
}
function ButtonList({ items }) { return <div className="grid gap-3">{items.map(([label, href]) => <Link key={href} href={href} className="rounded-lg bg-red-500 px-4 py-3 text-center font-semibold text-white shadow transition hover:bg-red-700">{label}</Link>)}</div>; }
function Home() { return <><h1 className="text-3xl font-bold">Xəbərlər</h1><h2 className="text-2xl font-semibold">Dəstək üçün</h2><p>Saytımızın daha da böyüməsi və faydalı məlumatların yerləşdirilməsi üçün dəstəyinizə ehtiyacımız var.</p><p><Link className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-700" href="/destek">Davamını oxu</Link></p><hr /><h2 className="text-2xl font-semibold">Blog bölməsinə yeni məqalə əlavə olundu</h2><h4 className="font-semibold">Tarix: 16.10.2025</h4><h3 className="font-semibold text-red-600">Mövzu: Almaniyada KİRAYƏ ev tapmaq problemi</h3><p><Link className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-700" href="/blog">Məqaləni oxu</Link></p></>; }
function About() { return <><h1 className="text-3xl font-bold">Haqqımızda</h1><p>Bu saytın yaradılmasında məqsəd Almaniyaya peşə təhsili (Ausbildung) yolu ilə gəlmək istəyənlərin qarşılaşdığı çətinliklərə kömək etməkdir.</p><p>Saytımızda Almaniyaya gəlmək üçün lazım olan bütün məlumatları tapa biləcəksiniz. Zaman-zaman yeni məlumatlar yerləşdiriləcək.</p><p>Mən, Kərimli Ağabala, özüm də peşə təhsili yolu ilə Almaniyaya gəlmişəm. Saytdakı bütün məlumatlar dəqiqləşdirildikdən sonra yerləşdirilir.</p><h2 className="text-2xl font-semibold">Hazırlıq materialları</h2><ButtonList items={interviewItems} /></>; }
function Blog() { return <><h1 className="text-3xl font-bold">Blog</h1><ButtonList items={blogItems} /><hr /><h2 className="text-2xl font-semibold">Dəstək bölməsinə keçin zəhmət olmasa</h2><Link className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-700" href="/destek">Davamını oxu</Link></>; }
function Support() { return <><h1 className="text-3xl font-bold">Dəstək</h1><p>Saytın inkişafına dəstək olmaq üçün aşağıdakı keçiddən istifadə edə bilərsiniz.</p><a className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-700" href="https://www.paypal.com/" target="_blank" rel="noreferrer">Dəstək ol</a></>; }
function Contact() { return <><h1 className="text-3xl font-bold">Əlaqə</h1><p>E-poçt: <a className="text-red-700 underline" href="mailto:aghabalakerimli@gmail.com">aghabalakerimli@gmail.com</a></p></>; }
function Detail({ type, slug }) {
  const items = type === 'blog' ? blogItems : interviewItems;
  const title = items.find(([, href]) => href.endsWith(slug))?.[0];
  return <><h1 className="text-3xl font-bold">{title || 'Məlumat'}</h1>{type === 'blog' ? <p>Bu bölmədə Almaniyada yaşayış və gündəlik həyatla bağlı faydalı məlumatlar paylaşılır.</p> : <><p>Müsahibəyə hazırlıq üçün nümunə suallar və cavablar.</p><audio className="w-full max-w-lg" controls src={slug === 'koch' ? '/koch/1.mp3' : '/interv-vor/vorstellug/1-10.mp3'}>Audio dəstəklənmir.</audio></>}</>;
}
function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/');
  useEffect(() => { const update = () => setPath(window.location.pathname.replace(/\/$/, '') || '/'); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update); }, []);
  const page = path === '/' ? <Home /> : path === '/about' ? <About /> : path === '/blog' ? <Blog /> : path === '/destek' ? <Support /> : path === '/contact' ? <Contact /> : path === '/interviu' ? <><h1 className="text-3xl font-bold">Hazırlıq</h1><ButtonList items={interviewItems} /></> : path.startsWith('/blog/') ? <Detail type="blog" slug={path.split('/').pop()} /> : path.startsWith('/interv-vor/') ? <Detail type="interview" slug={path.split('/').pop()} /> : <Home />;
  return <Layout>{page}</Layout>;
}
createRoot(document.getElementById('root')).render(<App />);
