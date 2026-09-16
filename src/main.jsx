import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const navItems = [['/', 'Ana səhifə'], ['/about', 'Haqqımızda'], ['/interviu', 'Hazırlıq'], ['/blog', 'Blog'], ['/destek', 'Dəstək'], ['/contact', 'Əlaqə']];
const interviewItems = [
  ['Koch', '/interv-vor/koch'], ['Vorstellung 1', '/interv-vor/vorstellug'],
  ['Vorstellung 2', '/interv-vor/vorstellug 1'], ['Vorstellung 3', '/interv-vor/vorstellug 2'],
  ['Vorstellung 4', '/interv-vor/vorstellug 3'], ['Vorstellung 5 (B1)', '/interv-vor/vorstellug 4'],
  ['Vorstellung 6 (A2)', '/interv-vor/vorstellug 5'], ['Vorstellung 7 (B1)', '/interv-vor/vorstellug 6'], ['Vorstellung 8', '/interv-vor/vorstellug 7'],
];

const audioSources = {
  koch: [
    { label: 'Sual 1', src: '/koch/1.mp3' },
    { label: 'Sual 2', src: '/koch/2.mp3' },
    { label: 'Sual 3', src: '/koch/3.mp3' },
    { label: 'Sual 4', src: '/koch/4.mp3' },
    { label: 'Sual 5', src: '/koch/5.mp3' },
    { label: 'Sual 6', src: '/koch/6.mp3' },
    { label: 'Sual 7', src: '/koch/7.mp3' },
    { label: 'Sual 8', src: '/koch/8.mp3' },
    { label: 'Sual 9', src: '/koch/9.mp3' },
    { label: 'Sual 10', src: '/koch/10.mp3' },
    { label: 'Cavab 1', src: '/koch/antworte/1.mp3' },
    { label: 'Cavab 2', src: '/koch/antworte/2.mp3' },
    { label: 'Cavab 3', src: '/koch/antworte/3.mp3' },
    { label: 'Cavab 5', src: '/koch/antworte/5.mp3' },
    { label: 'Cavab 7', src: '/koch/antworte/7.mp3' },
    { label: 'Cavab 8', src: '/koch/antworte/8.mp3' },
    { label: 'Cavab 9', src: '/koch/antworte/9.mp3' },
    { label: 'Cavab 10', src: '/koch/antworte/10.mp3' },
  ],
  vorstellug: [
    { label: '1-10', src: '/interv-vor/vorstellug/1-10.mp3' },
    { label: '1-13', src: '/interv-vor/vorstellug/1-13.mp3' },
    { label: '1-14', src: '/interv-vor/vorstellug/1-14.mp3' },
    { label: '1-15', src: '/interv-vor/vorstellug/1-15.mp3' },
    { label: '1-25', src: '/interv-vor/vorstellug/1-25.mp3' },
    { label: '1-30', src: '/interv-vor/vorstellug/1-30.mp3' },
    { label: '1-33', src: '/interv-vor/vorstellug/1-33.mp3' },
    { label: '2-11', src: '/interv-vor/vorstellug/2-11.mp3' },
    { label: '4-11', src: '/interv-vor/vorstellug/4-11.mp3' },
    { label: '16-30', src: '/interv-vor/vorstellug/16-30.mp3' },
    { label: '34-49', src: '/interv-vor/vorstellug/34-49.mp3' },
    { label: '50-66', src: '/interv-vor/vorstellug/50-66.mp3' },
  ],
  'vorstellug 1': [
    { label: '1-10', src: '/interv-vor/vorstellug/1-10.mp3' },
    { label: '1-13', src: '/interv-vor/vorstellug/1-13.mp3' },
    { label: '1-14', src: '/interv-vor/vorstellug/1-14.mp3' },
    { label: '1-15', src: '/interv-vor/vorstellug/1-15.mp3' },
    { label: '1-25', src: '/interv-vor/vorstellug/1-25.mp3' },
    { label: '1-30', src: '/interv-vor/vorstellug/1-30.mp3' },
    { label: '1-33', src: '/interv-vor/vorstellug/1-33.mp3' },
  ],
  'vorstellug 2': [
    { label: '16-30', src: '/interv-vor/vorstellug/16-30.mp3' },
    { label: '2-11', src: '/interv-vor/vorstellug/2-11.mp3' },
  ],
  'vorstellug 3': [
    { label: '34-49', src: '/interv-vor/vorstellug/34-49.mp3' },
    { label: '4-11', src: '/interv-vor/vorstellug/4-11.mp3' },
  ],
  'vorstellug 4': [
    { label: '50-66', src: '/interv-vor/vorstellug/50-66.mp3' },
    { label: '1-33', src: '/interv-vor/vorstellug/1-33.mp3' },
  ],
  'vorstellug 5': [
    { label: '1-10', src: '/interv-vor/vorstellug/1-10.mp3' },
    { label: '1-13', src: '/interv-vor/vorstellug/1-13.mp3' },
  ],
  'vorstellug 6': [
    { label: '1-15', src: '/interv-vor/vorstellug/1-15.mp3' },
    { label: '16-30', src: '/interv-vor/vorstellug/16-30.mp3' },
  ],
  'vorstellug 7': [
    { label: '34-49', src: '/interv-vor/vorstellug/34-49.mp3' },
    { label: '50-66', src: '/interv-vor/vorstellug/50-66.mp3' },
  ],
};
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
  const normalizedSlug = decodeURIComponent(slug || '').trim();
  const title = items.find(([, href]) => href.endsWith(normalizedSlug) || href.endsWith(normalizedSlug.replace(/\s+/g, '-')))?.[0] || 'Məlumat';

  if (type === 'blog') {
    return <><h1 className="text-3xl font-bold">{title}</h1><p>Bu bölmədə Almaniyada yaşayış və gündəlik həyatla bağlı faydalı məlumatlar paylaşılır.</p></>;
  }

  const sources = audioSources[normalizedSlug] || audioSources[normalizedSlug.replace(/\s+/g, '-')] || audioSources.vorstellug;

  return <>
    <h1 className="text-3xl font-bold">{title}</h1>
    <p>Müsahibəyə hazırlıq üçün nümunə suallar və cavablar.</p>
    <div className="space-y-4">
      {sources.map(({ label, src }) => (
        <div key={`${title}-${label}`} className="rounded-lg border border-stone-200 bg-stone-50 p-3">
          <p className="mb-2 font-semibold text-stone-700">{label}</p>
          <audio className="w-full max-w-lg" controls src={src}>Audio dəstəklənmir.</audio>
        </div>
      ))}
    </div>
  </>;
}
function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/');
  useEffect(() => { const update = () => setPath(window.location.pathname.replace(/\/$/, '') || '/'); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update); }, []);
  const page = path === '/' ? <Home /> : path === '/about' ? <About /> : path === '/blog' ? <Blog /> : path === '/destek' ? <Support /> : path === '/contact' ? <Contact /> : path === '/interviu' ? <><h1 className="text-3xl font-bold">Hazırlıq</h1><ButtonList items={interviewItems} /></> : path.startsWith('/blog/') ? <Detail type="blog" slug={path.split('/').pop()} /> : path.startsWith('/interv-vor/') ? <Detail type="interview" slug={path.split('/').pop()} /> : <Home />;
  return <Layout>{page}</Layout>;
}
createRoot(document.getElementById('root')).render(<App />);
