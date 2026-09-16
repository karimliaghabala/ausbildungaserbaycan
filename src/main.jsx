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

const kochTexts = [
  { title: 'Interesse an der Ausbildung', question: 'Warum interessieren Sie sich für eine Ausbildung zum Koch?', answer: 'Ein Studium in Deutschland bietet die Möglichkeit, verschiedene kulinarische Stile kennenzulernen und kann meine Karriere abwechslungsreicher gestalten.' },
  { title: 'Erfahrungen in der Gastronomie', question: 'Haben Sie bereits Erfahrungen in der Gastronomie gesammelt? Wenn ja, welche?', answer: 'Im Restaurant „Anadolu“ lernte ich die türkische Küche kennen. Ich kann Manti, Döner, Sarma kochen. Im Restaurant „Astoria“ und in Ihrem Café wurde aserbaidschanische Küche bevorzugt. Gerichte: Dolma, Plov, usbekisches Plovu, gegrillte Kebabs, Salate: Capital-Salat, Memosa-Salat, Hirtensalat.' },
  { title: 'Wichtige Eigenschaften eines guten Kochs', question: 'Was sind Ihrer Meinung nach wichtige Eigenschaften, die ein guter Koch haben sollte?', answer: 'Er sollte sich ständig weiterentwickeln, auf maximale Sauberkeit achten und vor allem geduldig sein.' },
  { title: 'Kochfähigkeiten und Lieblingsgerichte', question: 'Können Sie uns etwas über Ihre Kochfähigkeiten und Ihre Lieblingsgerichte erzählen?', answer: 'Ich kann verschiedene traditionelle Gerichte zubereiten und achte bei jeder Zubereitung auf Geschmack, Qualität und saubere Küche.' },
  { title: 'Umgang mit stressigen Situationen', question: 'Wie gehen Sie mit stressigen Situationen in der Küche um?', answer: 'Wenn ich mich über etwas ärgere, kann ich meine Nerven nur in der Küche beruhigen.' },
  { title: 'Kenntnisse über Lebensmittelhygiene und -sicherheit', question: 'Haben Sie Kenntnisse über Lebensmittelhygiene und -sicherheit?', answer: 'Ja, ich achte auf Hygiene, sichere Lagerung und saubere Arbeitsabläufe in der Küche.' },
  { title: 'Bewerbung und Unternehmenswahl', question: 'Warum haben Sie sich gerade für unser Unternehmen beworben?', answer: 'Ich möchte in einem professionellen Umfeld lernen, meine Kochfähigkeiten verbessern und langfristig in meinem Beruf weiterwachsen.' },
];

const vorstellungTexts = [
  { q: 'Wie geht es Ihnen?', a: 'Mir geht es gut, danke.' },
  { q: 'Wie war Ihr Fahrt?', a: 'Die Fahrt war gut.' },
  { q: 'Wie lange waren Sie unterwegs, um hierher zu kommen?', a: 'Ich war etwa zwei Stunden unterwegs.' },
  { q: 'Wie ist das Wetter heute?', a: 'Das Wetter ist heute sonnig.' },
  { q: 'Wie heißen Sie?', a: 'Ich heiße Aghabala.' },
  { q: 'Wie ist Ihr Vorname?', a: 'Mein Vorname ist Aghabala.' },
  { q: 'Wie ist Ihr Nachname?', a: 'Mein Nachname ist Kerimli.' },
  { q: 'Wann sind Sie geboren?', a: 'Ich bin am 03.03.1993 geboren.' },
  { q: 'Wo sind Sie geboren?', a: 'Ich bin in Baku geboren.' },
  { q: 'Wo wohnen Sie?', a: 'Ich wohne in Baku.' },
  { q: 'Wohnen Sie mit ihren Eltern zusammen?', a: 'Nein, ich wohne nicht mit meinen Eltern zusammen.' },
  { q: 'Haben Sie Geschwister?', a: 'Ja, ich habe Geschwister.' },
  { q: 'Haben Sie Familie?', a: 'Ja, ich habe eine Familie.' },
  { q: 'Können Sie ihre Familie vorstellen?', a: 'Meine Familie besteht aus meiner Frau und meinen zwei Kindern.' },
  { q: 'Was ist Ihr Familienstand?', a: 'Ich bin verheiratet.' },
  { q: 'Sind Sie verheiratet?', a: 'Ja, ich bin verheiratet.' },
  { q: 'Seit wann sind Sie verheiratet?', a: 'Ich bin seit 2015 verheiratet.' },
  { q: 'Haben Sie Kinder?', a: 'Ja, ich habe Kinder.' },
  { q: 'Wann haben Sie die Schule abgeschlossen?', a: 'Ich habe die Schule 2011 abgeschlossen.' },
  { q: 'Arbeiten Sie momentan?', a: 'Ja, ich arbeite momentan.' },
  { q: 'Wo arbeiten Sie?', a: 'Ich arbeite in einer Bäckerei.' },
  { q: 'Welche Sprachen sprechen Sie?', a: 'Ich spreche Aserbaidschanisch, Russisch und ein wenig Deutsch.' },
  { q: 'Verstehen Sie Deutsch?', a: 'Ja, ich verstehe Deutsch.' },
  { q: 'Seit wann lernen Sie Deutsch?', a: 'Ich lerne Deutsch seit einem Jahr.' },
  { q: 'Wo haben Sie Deutsch gelernt?', a: 'Ich habe Deutsch in Sprachkursen gelernt.' },
  { q: 'Warum wollen Sie nach Deutschland fliegen?', a: 'Ich möchte in Deutschland arbeiten und meine Karriere fortsetzen.' },
  { q: 'Wann möchten Sie nach Deutschland fliegen?', a: 'Ich möchte nächsten Monat nach Deutschland fliegen.' },
  { q: 'Wann fängt Ihre Ausbildung an?', a: 'Meine Ausbildung beginnt im August.' },
  { q: 'Wie lange dauert Ihre Ausbildung?', a: 'Meine Ausbildung dauert drei Jahre.' },
  { q: 'Als welcher Beruf werden Sie in Deutschland arbeiten?', a: 'Ich werde als Bäcker in Deutschland arbeiten.' },
  { q: 'Warum wollen Sie diesen Beruf in Deutschland lernen?', a: 'Ich möchte meine Fähigkeiten verbessern und neue Erfahrungen sammeln.' },
  { q: 'Haben Sie schon Erfahrungen mit diesem Beruf?', a: 'Ja, ich habe Erfahrungen als Bäcker.' },
  { q: 'Wo haben Sie den Ausbildungsplatz gefunden?', a: 'Ich habe den Ausbildungsplatz online gefunden.' },
  { q: 'Über welche Seite haben Sie ihn gefunden?', a: 'Über eine Job-Website.' },
  { q: 'Welche Pläne haben Sie nach der Ausbildung?', a: 'Nach der Ausbildung möchte ich in Deutschland arbeiten.' },
  { q: 'Wie lange wollen Sie in Deutschland bleiben?', a: 'Ich plane, für mindestens fünf Jahre in Deutschland zu bleiben.' },
  { q: 'Werden Sie in Ihr Land zurückkommen?', a: 'Ja, ich plane, in mein Land zurückzukehren.' },
  { q: 'Waren Sie schon einmal in Deutschland?', a: 'Nein, ich war noch nie in Deutschland.' },
  { q: 'Fliegen Sie zum ersten Mal nach Deutschland?', a: 'Ja, ich fliege zum ersten Mal nach Deutschland.' },
  { q: 'Möchten Sie Ihre Familie nach Deutschland mitnehmen?', a: 'Vielleicht, aber später.' },
  { q: 'In welcher Stadt werden Sie eine Ausbildung machen?', a: 'In Berlin werde ich eine Ausbildung machen.' },
  { q: 'In welcher Stadt werden Sie bleiben?', a: 'Ich werde in Berlin bleiben.' },
  { q: 'Wollen Sie in Deutschland alleine wohnen?', a: 'Ja, ich werde in Deutschland alleine wohnen.' },
  { q: 'Haben Sie eine Wohnung gefunden?', a: 'Nein, ich habe noch keine Wohnung gefunden.' },
  { q: 'Haben Sie Verwandte in Deutschland?', a: 'Nein, ich habe keine Verwandten in Deutschland.' },
  { q: 'Haben Sie Freunde in Deutschland?', a: 'Nein, ich habe keine Freunde in Deutschland.' },
  { q: 'Haben Sie Bekannte in Deutschland?', a: 'Ja, ich habe Bekannte in Deutschland.' },
  { q: 'Haben Sie Haustiere?', a: 'Nein, ich habe keine Haustiere.' },
  { q: 'Welche Tiere mögen Sie?', a: 'Ich mag Hunde.' },
  { q: 'Was ist Ihre Lieblingsjahreszeit?', a: 'Meine Lieblingsjahreszeit ist der Frühling.' },
  { q: 'Was ist Ihr Lieblingsessen?', a: 'Mein Lieblingsessen ist Pide.' },
  { q: 'Was ist Ihre Lieblingsfarbe?', a: 'Meine Lieblingsfarbe ist Blau.' },
  { q: 'Welche Farbe gefällt Ihnen am besten?', a: 'Ich mag Blau am besten.' },
  { q: 'Was machen Sie an Ihren freien Tagen?', a: 'An meinen freien Tagen entspanne ich mich und verbringe Zeit mit meiner Familie.' },
  { q: 'Was machen Sie in Ihrer Freizeit?', a: 'In meiner Freizeit lese ich und gehe spazieren.' },
  { q: 'Was sind Ihre Hobbys?', a: 'Meine Hobbys sind Lesen und Kochen.' },
  { q: 'Was ist Ihr Lieblingsfilm?', a: 'Mein Lieblingsfilm ist "Inception".' },
  { q: 'Was ist Ihr Lieblingsbuch?', a: 'Mein Lieblingsbuch ist "1984" von George Orwell.' },
  { q: 'Können Sie ein Musikinstrument spielen?', a: 'Nein, ich kann kein Musikinstrument spielen.' },
  { q: 'Was ist Ihr Lieblingssport?', a: 'Mein Lieblingssport ist Fußball.' },
  { q: 'Was ist die Hauptstadt von Deutschland?', a: 'Die Hauptstadt von Deutschland ist Berlin.' },
  { q: 'Welche Stadt ist die Hauptstadt Deutschlands?', a: 'Berlin ist die Hauptstadt von Deutschland.' },
  { q: 'Welche Sprache spricht man in Deutschland?', a: 'In Deutschland spricht man Deutsch.' },
  { q: 'Welche Farbe hat die Flagge von Deutschland?', a: 'Die Flagge von Deutschland hat die Farben Schwarz, Rot und Gold.' },
  { q: 'Was würden Sie nach dem Gespräch machen?', a: 'Nach dem Gespräch werde ich nach Hause gehen und mich entspannen.' },
];

const interviewTextBySlug = {
  koch: kochTexts,
  vorstellug: vorstellungTexts,
  'vorstellug 1': vorstellungTexts.slice(0, 15),
  'vorstellug 2': vorstellungTexts.slice(15, 30),
  'vorstellug 3': vorstellungTexts.slice(30, 50),
  'vorstellug 4': vorstellungTexts.slice(50, 66),
  'vorstellug 5': vorstellungTexts.slice(0, 12),
  'vorstellug 6': vorstellungTexts.slice(12, 30),
  'vorstellug 7': vorstellungTexts.slice(30, 66),
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
  const slugKey = normalizedSlug.replace(/\s+/g, ' ');
  const title = items.find(([, href]) => href.endsWith(normalizedSlug) || href.endsWith(normalizedSlug.replace(/\s+/g, '-')))?.[0] || 'Məlumat';

  if (type === 'blog') {
    return <><h1 className="text-3xl font-bold">{title}</h1><p>Bu bölmədə Almaniyada yaşayış və gündəlik həyatla bağlı faydalı məlumatlar paylaşılır.</p></>;
  }

  const sources = audioSources[slugKey] || audioSources.vorstellug;
  const textBlocks = interviewTextBySlug[slugKey] || interviewTextBySlug.vorstellug;

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
    <div className="mt-6 space-y-5 rounded-xl bg-stone-50 p-4">
      {slugKey === 'koch' ? (
        kochTexts.map((section) => (
          <div key={section.title} className="rounded-lg border border-stone-200 bg-white p-3">
            <h2 className="mb-2 text-xl font-semibold text-red-700">{section.title}</h2>
            <p className="mb-2"><strong>Suallar:</strong> {section.question}</p>
            <p><strong>Cavab:</strong> {section.answer}</p>
          </div>
        ))
      ) : (
        <div className="space-y-3">
          {textBlocks.map((item, index) => (
            <div key={`${slugKey}-${index}`} className="rounded-lg border border-stone-200 bg-white p-3">
              <p><strong>{index + 1}.</strong> {item.q}</p>
              <p className="mt-1 text-stone-700"><strong>Cavab:</strong> {item.a}</p>
            </div>
          ))}
        </div>
      )}
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
