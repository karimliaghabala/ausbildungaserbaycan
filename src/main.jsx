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

const interviewSections = {
  koch: [
    { title: 'Interesse an der Ausbildung', audio: '/koch/1.mp3', answerAudio: '/koch/antworte/1.mp3', items: [{ q: 'Warum interessieren Sie sich für eine Ausbildung zum Koch?', a: 'Ein Studium in Deutschland bietet die Möglichkeit, verschiedene kulinarische Stile kennenzulernen und kann meine Karriere abwechslungsreicher gestalten.' }] },
    { title: 'Erfahrungen in der Gastronomie', audio: '/koch/2.mp3', answerAudio: '/koch/antworte/2.mp3', items: [{ q: 'Haben Sie bereits Erfahrungen in der Gastronomie gesammelt? Wenn ja, welche?', a: 'Im Restaurant „Anadolu“ lernte ich die türkische Küche kennen. Ich kann Manti, Döner, Sarma kochen. Im Restaurant „Astoria“ und in Ihrem Café wurde aserbaidschanische Küche bevorzugt. Gerichte: Dolma, Plov, usbekisches Plovu, gegrillte Kebabs, Salate: Capital-Salat, Memosa-Salat, Hirtensalat.' }] },
    { title: 'Wichtige Eigenschaften eines guten Kochs', audio: '/koch/3.mp3', answerAudio: '/koch/antworte/3.mp3', items: [{ q: 'Was sind Ihrer Meinung nach wichtige Eigenschaften, die ein guter Koch haben sollte?', a: 'Er sollte sich ständig weiterentwickeln, auf maximale Sauberkeit achten und vor allem geduldig sein.' }] },
    { title: 'Kochfähigkeiten und Lieblingsgerichte', audio: '/koch/4.mp3', items: [{ q: 'Können Sie uns etwas über Ihre Kochfähigkeiten und Ihre Lieblingsgerichte erzählen?', a: 'Ich kann verschiedene traditionelle Gerichte zubereiten und achte bei jeder Zubereitung auf Geschmack, Qualität und saubere Küche.' }] },
    { title: 'Umgang mit stressigen Situationen', audio: '/koch/5.mp3', answerAudio: '/koch/antworte/5.mp3', items: [{ q: 'Wie gehen Sie mit stressigen Situationen in der Küche um?', a: 'Wenn ich mich über etwas ärgere, kann ich meine Nerven nur in der Küche beruhigen.' }] },
    { title: 'Kenntnisse über Lebensmittelhygiene und -sicherheit', audio: '/koch/6.mp3', items: [{ q: 'Haben Sie Kenntnisse über Lebensmittelhygiene und -sicherheit?', a: 'Ja, ich achte auf Hygiene, sichere Lagerung und saubere Arbeitsabläufe in der Küche.' }] },
    { title: 'Bewerbung und Unternehmenswahl', audio: '/koch/7.mp3', answerAudio: '/koch/antworte/7.mp3', items: [{ q: 'Warum haben Sie sich gerade für unser Unternehmen beworben?', a: 'Ich möchte in einem professionellen Umfeld lernen, meine Kochfähigkeiten verbessern und langfristig in meinem Beruf weiterwachsen.' }] },
  ],
  vorstellug: [
    { title: '1 bis 33', audio: '/interv-vor/vorstellug/1-33.mp3', items: [
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
      { q: 'Warum wollen Sie diesen Beruf in Deutschland lernen?', a: 'Ich möchte meine Fähigkeiten verbessern und neue Erfahrungen sammeln.' }
    ] },
    { title: '34 bis 49', audio: '/interv-vor/vorstellug/34-49.mp3', items: [
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
      { q: 'Haben Sie Bekannte in Deutschland?', a: 'Ja, ich habe Bekannte in Deutschland.' }
    ] },
    { title: '50 bis 66', audio: '/interv-vor/vorstellug/50-66.mp3', items: [
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
      { q: 'Was würden Sie nach dem Gespräch machen?', a: 'Nach dem Gespräch werde ich nach Hause gehen und mich entspannen.' }
    ] }
  ],
  'vorstellug 1': [
    { title: '1 bis 15', audio: '/interv-vor/vorstellug/1-15.mp3', items: [
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
      { q: 'Können Sie ihre Familie vorstellen?', a: 'Meine Familie besteht aus meiner Frau und meinen zwei Kindern.' }
    ] },
    { title: '16 bis 30', audio: '/interv-vor/vorstellug/16-30.mp3', items: [
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
      { q: 'Wie lange dauert Ihre Ausbildung?', a: 'Meine Ausbildung dauert drei Jahre.' }
    ] }
  ],
  'vorstellug 2': [
    { title: '1 bis 15', audio: '/interv-vor/vorstellug/1-15.mp3', items: [
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
      { q: 'Können Sie ihre Familie vorstellen?', a: 'Meine Familie besteht aus meiner Frau und meinen zwei Kindern.' }
    ] },
    { title: '16 bis 30', audio: '/interv-vor/vorstellug/16-30.mp3', items: [
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
      { q: 'Wie lange dauert Ihre Ausbildung?', a: 'Meine Ausbildung dauert drei Jahre.' }
    ] }
  ],
  'vorstellug 3': [
    { title: '34 bis 49', audio: '/interv-vor/vorstellug/34-49.mp3', items: [
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
      { q: 'Haben Sie Bekannte in Deutschland?', a: 'Ja, ich habe Bekannte in Deutschland.' }
    ] }
  ],
  'vorstellug 4': [
    { title: '50 bis 66', audio: '/interv-vor/vorstellug/50-66.mp3', items: [
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
      { q: 'Was würden Sie nach dem Gespräch machen?', a: 'Nach dem Gespräch werde ich nach Hause gehen und mich entspannen.' }
    ] }
  ],
  'vorstellug 5': [
    { title: '1 bis 15', audio: '/interv-vor/vorstellug/1-15.mp3', items: [
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
      { q: 'Können Sie ihre Familie vorstellen?', a: 'Meine Familie besteht aus meiner Frau und meinen zwei Kindern.' }
    ] }
  ],
  'vorstellug 6': [
    { title: '16 bis 30', audio: '/interv-vor/vorstellug/16-30.mp3', items: [
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
      { q: 'Wie lange dauert Ihre Ausbildung?', a: 'Meine Ausbildung dauert drei Jahre.' }
    ] }
  ],
  'vorstellug 7': [
    { title: '34 bis 66', audio: '/interv-vor/vorstellug/34-49.mp3', items: [
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
      { q: 'Was würden Sie nach dem Gespräch machen?', a: 'Nach dem Gespräch werde ich nach Hause gehen und mich entspannen.' }
    ] }
  ]
};

const blogItems = [['Ailə birləşməsi', '/blog/textaile'], ['Almaniyada banklara qeydiyyat', '/blog/textbank'], ['Uşaqların məktəbə və bağçaya qeydiyyatı', '/blog/kitaundschule'], ['Almaniyada kirayə ev tapmaq problemi (YENİ)', '/blog/mietevohnung']];

const blogArticles = {
  textaile: {
    title: 'Ailə birləşməsi',
    paragraphs: [
      'Salam hörmətli oxuyucular. Mən Kərimli Ağabala. İlk öncə Almaniya arzusunda olanların hər birinə Almaniyada yaşamağı arzu edirəm.',
      'Bu hal yalnız ərin Almaniyada Ausbildung olduğu halda həyat yoldaşının Ausbildung yolu ilə gəlib uşaqlarını gətirməsi halına aiddir. Bir çox sənədləşmə işləri eynidir.',
      'İlk öncə Nigah haqqında şəhadətnamə, uşaqların doğum haqqında şəhadətnamələrini 5 saylı ASAN xidmətdə andlı tərcümə etdirməlisiniz. Bu proses 20 gün müddətdə həll olur. Sənədləri ər və arvadın hər hansı biri təqdim edir.',
      'Sənədləri daha sonra Xarici İşlər Nazirliyində təsdiq etdirmək lazımdır. Bunu validenlərdən biri 5 saylı ASAN xidmətdə təqdim edir. 1 həftədən sonra sənədlər hazır olur.',
      'Sonra Konsulluğa təqdim etmək üçün rəsmi internet səhifəsindən görüş vaxtı götürürsünüz və sənədləri təqdim edirsiniz. Bu zaman hər sənədə 56 manat ödəniş edilir.',
      'Ailə birləşməsi üçün müraciət etdikdən sonra səfirliyin elektron poçtuna məktub yazmaq, sənədlərin harada olduğunu öyrənmək faydalı olur. Müraciət etdikdən 1-2 gün sonra cavab gəlib, sənədlər miqrasiya idarəsinə göndərilmiş olur.',
      'Əgər Berlinə gəlirsinizsə, miqrasiya idarəsinin mail vasitəsi ilə əlaqə qurmaq daha asandır. Hər bir dokumentin məlumatlarını düzgün yazmaq vacibdir.',
      'Maliyyə çatışmazlığı məsələsi çox böyük problem ola bilər. Bir uşaq üçün aylıq 394 euro, çox hallarda block hesab və sponsor tələb olunur. Bir çox hallarda ciddi sənədləşmə və əlavə maliyyə göstəricisi tələb olunur.',
      'Bizdə proses çox uzandı və sonradan vacib çatışmayan sənədləri əlavə etdik. Nəhayət 27.01.2025 tarixində uşaqların pasportu və sığortası təqdim edildi və viza verildi.',
      'Qeyd: Ailə birləşməsinə Səfirlik, legalizasiya prosesinə Konsulluq baxır. Termin götürərkən bütün tələbləri diqqətlə oxuyun.'
    ]
  },
  textbank: {
    title: 'Almaniyada banklara qeydiyyat',
    paragraphs: [
      'Almaniyaya yeni gedənlər üçün daha əlçatan, rahat qeydiyyat oluna biləcək banklar və pul köçürmə sistemləri mövcuddur.',
      'Revolut bank online banking xidməti ilə rahat şəkildə işləmək olar. Commerzbank da online hesab açma imkanı verir, lakin bankda sənədləri təqdim etməklə.',
      'Pul köçürmə üçün ən sərfəli sistemlərdən biri KoronaPay-dir. Almaniyaya gələnlər üçün digər variantlar da olur, lakin əsasən daha ucuz və asan olan seçimlərə üstünlük verilir.',
      'Hər yeni gələn üçün bank seçimləri və hesab açma prosesini əvvəlcədən araşdırmaq çox faydalıdır.'
    ]
  },
  kitaundschule: {
    title: 'Uşaqların məktəbə və bağçaya qeydiyyatı',
    paragraphs: [
      'Salam hörmətli oxuyucular. Bu gün sizə uşaqlarınızı Almaniyaya gətirdikdən sonrakı bəzi proseslər haqqında məlumatlandırmaq istəyirəm.',
      'Qeyd: Keçdiyimiz proseslər Berlin üçün daha dəqiqdir. Başqa əyalətlərdə fərqli tələblər ola bilər.',
      'İlk öncə uşaqlar gəldikdən sonra yaşayış yerinə və icbari sığortaya qeydiyyat edilir. Bir həftə ərzində vergi identifikasiya nömrəsi gəlib çatır.',
      'Sonra bağça və məktəb qeydiyyatı üçün lazımi orqanlara müraciət edilir. Bağçalar hər biri ödənişlidir. 3-6 yaş aralığında qeydiyyatdan keçib çek əldə etmək mümkündür.',
      'Bağçalar lazım olan sənədlərin siyahısını verir. Beləliklə bağça məsələsi həll olur. Bu proses tezliklə aparılır. Təəssüf ki, Almaniyada sənədləşmə prosesi çox vaxt aparır.',
      'Məktəbə qeydiyyat isə ilk öncə rayon üzrə qeydiyyat şöbəsində olur. Pasportlar ilə oraya yaxınlaşırsınız. Uşaq qeydiyyata alınır və sonra rayonun Rathausuna göndərilir. Bir neçə həftə sonra ən yaxın məktəbə göndəriş vərəqi gelir.',
      'Bir neçə həftədən sonra uşaq dərslərə başlayır. Bu prosesdə 1 aya qədər vaxt lazım ola bilər.',
      'Ümid edirəm ki, bu yazımda kiminsə köməyi olacaq. Uğurlar hər birinizə.'
    ]
  },
  mietevohnung: {
    title: 'Almaniyada kirayə ev tapmaq problemi',
    paragraphs: [
      'Bildiyiniz kimi Almaniya sosial dövlətə malikdir. Burada aşağı gəlirli ailələr üçün bir çox yardım formaları var. Amma bütün sənədlər qaydasında olmalıdır.',
      'Yeni gələnlər üçün ən böyük problem kirayə mənzil tapmaqdır. Almaniyada kirayə mənzil tapmaq çox çətindir. Bunun bəzi səbəbləri var.',
      'Təhsil yolu ilə gəldikdə, sənədləriniz qaydasında olana kimi şirkətlərdən mənzil kirayələmək demək olar mümkün deyil. Həmçinin gəlirləriniz aşağı olduğu üçün şirkətlər və fiziki şəxslər sizə ev vermək istəmir. Çox hallarda yalnız ikinci kirayəçi kimi tapa bilərsiniz.',
      'Mən özüm Facebook qruplarından birində uyğun variant tapdım. Gəldim onlarla qaldım. 2 otaqlı evdə 8 nəfər qalırdıq. Aylığı 350 euro hesablanırdı. Bu arada bir çox hallarda ikinci kirayəçi sistemi işlədir.',
      'İş vizasına gələndə işiniz asanlaşır. Gəliriniz yaxşı olduqda fiziki şəxslərdən ev tapmaq daha asan olur. Amma yəqin ki, minimum 3 aylıq maaş sənədi tələb olunur.',
      'Bir çox hallarda ikincil kirayəçi sistemində qarışdırıcılar olur. Bəzən ev üçün “hava parası” da tələb olunur. Bu birdəfəlik ödənişdir və geri qaytarılmır.',
      'Ən vacib məqam: kirayə götürərkən əsas kirayəçi müqaviləsini tələb etməkdir. Çünki bəzən ikinci kirayəçi sizə 3-cü kirayəçi kimi müqavilə bağlayıb depositi götürüb aradan çıxa bilər.',
      'Berlində kirayə mənzil tapmaq çox çətindir. Şirkətlərdə seçimdə random sistem işləyir. Bu seçimlərdə müəyyən kriteriyalara cavab verməlisiniz ki, siyahıya düşəsiniz.',
      'Tələbələr üçün kampalar və digər yerli yardım sistemləri də mövcuddur. Peşə təhsili ilə gələnlər isə müəyyən üstünlüklərə malik olurlar.'
    ]
  }
};

const repoBase = (typeof window !== 'undefined' && window.location.pathname.startsWith('/ausbildungaserbaycan')) ? '/ausbildungaserbaycan' : '';
const withBase = (path) => {
  if (!path || !path.startsWith('/')) return path;
  return repoBase ? `${repoBase}${path}` : path;
};
const withoutBase = (path) => {
  if (!repoBase) return path;
  return path.startsWith(repoBase) ? path.slice(repoBase.length) || '/' : path;
};
const resolveAsset = (path) => withBase(path);

function Link({ href, children, className = '' }) {
  const navigate = (event) => {
    if (href.startsWith('/')) {
      event.preventDefault();
      const target = withBase(href);
      window.history.pushState({}, '', target);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };
  return <a className={className} href={withBase(href)} onClick={navigate}>{children}</a>;
}

function Layout({ children }) {
  return <div className="mx-auto max-w-5xl px-4 text-stone-800">
    <header className="my-6 flex justify-center rounded-xl bg-gradient-to-r from-stone-950 via-red-400 to-yellow-300 p-4 shadow-lg">
      <Link href="/"><img width="300" src={resolveAsset('/photos/Başlıksız-1 (2).png')} alt="Yolumuz Almaniyaya" /></Link>
    </header>
    <div className="h-48 overflow-hidden rounded-xl shadow-lg sm:h-72"><img className="h-full w-full object-cover" src={resolveAsset('/photos/berlin.png')} alt="Berlin" /></div>
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
    const article = blogArticles[normalizedSlug] || blogArticles[slugKey] || null;
    return <>
      <h1 className="text-3xl font-bold">{article?.title || title}</h1>
      <div className="space-y-4 rounded-xl border border-stone-200 bg-stone-50 p-4 shadow-sm">
        {article?.paragraphs?.map((paragraph, index) => (
          <p key={`${article.title}-${index}`} className="text-justify leading-7 text-stone-800">{paragraph}</p>
        )) || <p>Bu bölmədə Almaniyada yaşayış və gündəlik həyatla bağlı faydalı məlumatlar paylaşılır.</p>}
      </div>
    </>;
  }

  const sections = interviewSections[slugKey] || interviewSections.vorstellug;

  return <>
    <h1 className="text-3xl font-bold">{title}</h1>
    <p>Müsahibəyə hazırlıq üçün nümunə suallar və cavablar.</p>
    <div className="space-y-6">
      {sections.map((section, sectionIndex) => (
        <div key={`${title}-${sectionIndex}`} className="rounded-xl border border-stone-200 bg-stone-50 p-4 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-red-700">{section.title}</h2>
          {section.audio && <audio className="mb-3 w-full max-w-lg" controls src={resolveAsset(section.audio)}>Audio dəstəklənmir.</audio>}
          {section.answerAudio && <audio className="mb-3 w-full max-w-lg" controls src={resolveAsset(section.answerAudio)}>Cavab audio dəstəklənmir.</audio>}
          <div className="space-y-3">
            {section.items.map((item, itemIndex) => (
              <div key={`${section.title}-${itemIndex}`} className="rounded-lg border border-stone-200 bg-white p-3">
                <p><strong>{itemIndex + 1}.</strong> {item.q}</p>
                <p className="mt-1 text-stone-700"><strong>Cavab:</strong> {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>;
}
function getInitialPath() {
  const params = new URLSearchParams(window.location.search);
  const routeFromQuery = params.get('route');
  if (routeFromQuery) {
    const rawPath = decodeURIComponent(routeFromQuery);
    const normalized = withoutBase(rawPath.startsWith('/ausbildungaserbaycan') ? rawPath.replace('/ausbildungaserbaycan', '') : rawPath);
    const finalPath = normalized.replace(/\/$/, '') || '/';
    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete('route');
    window.history.replaceState({}, '', cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
    return finalPath;
  }
  const pathname = window.location.pathname;
  const withoutRepo = pathname.startsWith('/ausbildungaserbaycan') ? pathname.replace('/ausbildungaserbaycan', '') : pathname;
  return withoutRepo.replace(/\/$/, '') || '/';
}

function App() {
  const [path, setPath] = useState(getInitialPath());
  useEffect(() => {
    const update = () => setPath(getInitialPath());
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  const page = path === '/' ? <Home /> : path === '/about' ? <About /> : path === '/blog' ? <Blog /> : path === '/destek' ? <Support /> : path === '/contact' ? <Contact /> : path === '/interviu' ? <><h1 className="text-3xl font-bold">Hazırlıq</h1><ButtonList items={interviewItems} /></> : path.startsWith('/blog/') ? <Detail type="blog" slug={path.split('/').pop()} /> : path.startsWith('/interv-vor/') ? <Detail type="interview" slug={path.split('/').pop()} /> : <Home />;
  return <Layout>{page}</Layout>;
}
createRoot(document.getElementById('root')).render(<App />);
