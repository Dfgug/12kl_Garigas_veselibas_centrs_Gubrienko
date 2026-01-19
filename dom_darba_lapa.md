Darbs ar DOM elementiem un dinamiska satura veidošana

Vārds, uzvārds: Kirill Gubrienko  
Datums: 2026-01-19

1. uzdevums – DOM jēdziens (teorija)

1.1. Kas ir DOM?
DOM (Document Object Model) ir tīmekļa dokumenta strukturēts objektu modelis, kas attēlo HTML elementus koka veidā. Tas ļauj JavaScript programmām piekļūt lapas saturam un to mainīt.

1.2. Kāpēc DOM ir nepieciešams dinamiskos tīmekļa produktos?
DOM ir nepieciešams, lai varētu dinamiski mainīt lapas saturu, struktūru un stilus bez lapas pārlādes, reaģējot uz lietotāja darbībām.

2. uzdevums – DOM elementu atlase

2.1. Nosauc vismaz 3 DOM elementu atlases metodes:
1. document.getElementById()
2. document.querySelector()
3. document.getElementsByClassName()

2.2. Kuru atlases metodi Tu šodien izmantoji visbiežāk? Kāpēc?
Visbiežāk izmantoju document.querySelector(), jo ar to var atlasīt elementus gan pēc ID, klases, gan citiem CSS selektoriem.

3. uzdevums – Esoša HTML elementa maiņa ar JavaScript

javascript
const title = document.getElementById('title');

title.textContent = 'Hello world!';
title.style.color = 'blue';
title.style.fontSize = '32px';

3.1. Apraksti, kas notiek lapā, kad šis kods tiek izpildīts:
Tiek atrasts HTML elements ar ID title, tam tiek nomainīts teksts un mainīta krāsa un fonta izmērs.

4. uzdevums – Dinamiska HTML elementa izveide

javascript
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Paragraph.';

document.body.appendChild(newParagraph);

5. uzdevums – HTML elementa noņemšana

javascript
document.body.removeChild(newParagraph);

6. uzdevums – DOM nozīme dinamiskā produktā

6.1. Raksturo DOM manipulāciju nozīmi dinamiskos tīmekļa produktos.
DOM manipulācijas ļauj izstrādāt interaktīvas un lietotājam draudzīgas tīmekļa lietotnes. Ar to palīdzību var mainīt saturu reāllaikā bez lapas pārlādes. Tas uzlabo lietošanas pieredzi un padara lietotni ātrāku. DOM ir pamats lielākajai daļai mūsdienu JavaScript ietvaru.

7. uzdevums – Refleksija

Šajā stundā es iemācījos, kā ar JavaScript atlasīt HTML elementus, mainīt to saturu un stilus, kā arī izveidot un noņemt elementus no lapas, izmantojot DOM.

