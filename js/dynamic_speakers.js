const speakerInfo = [{
  imagePath: './assets/theseus.jpg',
  name: 'Theseus',
  title: 'Son of Zeus',
  description: 'Hero of Athens, killed the Minotaur',
}, {
  imagePath: './assets/gilgamesh.jpg',
  name: 'Gilgamesh',
  title: 'King of Uruk',
  description: 'Once a tyrant, traveled to the underworld to see Enkidu again',
}, {
  imagePath: './assets/hercules.jpg',
  name: 'Hercules',
  title: 'Son of Zeus',
  description: 'Completed the 12 jobs became king, was tricked by Hera',
}, {
  imagePath: './assets/perseus.jpg',
  name: 'Perseus',
  title: 'Son of Zeus',
  description: 'Killer of Medusa and used her head to save Argos',
}, {
  imagePath: './assets/athena.jpg',
  name: 'Athena',
  title: 'God of Wisdom',
  description: 'Once a tyrant, traveled to the underworld to see Enkidu again',
}, {
  imagePath: './assets/zeus.jpg',
  name: 'Zeus',
  title: 'God of Gods',
  description: 'Completed the 12 jobs became king, was tricked by Hera',
}];

const mainUl = document.getElementById('speaker_ul');
function create(obj) { return document.createElement(obj); }

function constructor(obj) {
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i].length === 2) {
      obj[i][0].appendChild(obj[i][1]);
    } else if (obj[i].length === 3) {
      const [a, b, c] = obj[i];
      a.appendChild(b);
      b.className = c;
    } else if (obj[i].length === 4) {
      const [a, b, c, d] = obj[i];
      if (c == null) {
        a.appendChild(b);
        b.innerHTML = d;
      } else {
        a.appendChild(b);
        b.className = c;
        b.innerHTML = d;
      }
    } else if (obj[i].length === 5) {
      const [a, b, c, d, e] = obj[i];
      if (c == null && d == null) {
        a.appendChild(b);
        b.id = e;
      } else if (c == null) {
        a.appendChild(b);
        b.innerHTML = d;
        b.id = e;
      } else if (d == null) {
        obj[i][0].appendChild(b);
        b.className = c;
        b.id = e;
      } else {
        obj[i][0].appendChild(b);
        b.innerHTML = d;
        b.className = c;
        b.id = e;
      }
    }
  }
}
const linksArray = [];
for (let i = 0; i < speakerInfo.length; i += 1) {
  // Creating the speaker list
  const speakerLi = create('li');
  const speakerImgCnt = create('div');
  const speakerImg = create('img');
  const speakerInfoCnt = create('div');
  const speakerName = create('h4');
  const speakerTitle = create('p');
  const speakerLine = create('hr');
  const speakerQual = create('p');

  linksArray.push([mainUl, speakerLi, 'speakers']);
  linksArray.push([speakerLi, speakerImgCnt]);
  linksArray.push([speakerImgCnt, speakerImg, 'img_speaker']);
  linksArray.push([speakerLi, speakerInfoCnt, 'speaker_info']);
  linksArray.push([speakerInfoCnt, speakerName, null, speakerInfo[i].name]);
  linksArray.push([speakerInfoCnt, speakerTitle, 'speaker_title', speakerInfo[i].title]);
  linksArray.push([speakerInfoCnt, speakerLine]);
  linksArray.push([speakerInfoCnt, speakerQual, null, speakerInfo[i].description]);
  speakerImg.src = speakerInfo[i].imagePath;
  speakerImg.alt = 'speaker';
}

constructor(linksArray);
