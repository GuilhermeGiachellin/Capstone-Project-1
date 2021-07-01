const speakerInfo = [{
    imagePath: './assets/SnapshootPortfolio.png',
    name: 'Theseus',
    title: 'Son of Zeus',
    description: 'Hero of Athens, killed the Minotaur',   
  }, {
    imagePath: './assets/SnapshootPortfolio2.png',
    name: 'Gilgamesh',    
    title: 'King of Uruk',
    description: 'Once a tyrant, traveled to the underworld to see Enkidu again',    
  }, {
    imagePath: './assets/SnapshootPortfolio3.png',
    name: 'Hercules',    
    title: 'Son of Zeus',
    description: 'Completed the 12 jobs became king, was tricked by Hera',   
  }, {
    imagePath: './assets/SnapshootPortfolio4.png',
    name: 'Perseus',    
    title: 'Son of Zeus',
    description: 'Killer of Medusa and used her head to save Argos',    
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
  for (let i = 0; i < workInfo.length; i += 1) {
    // create o que eu preciso aqui
    const speakerLi = create('li');
    const speakerImgCnt = create('div');
    const speakerImg = create('img');
    const speakerInfoCnt = create('div');
    const speakerName = create('h4');
    const speakerTitle = create('p');
    const speakerLine = create('hr');
    const speakerQual = create('p');
    
    linksArray.push([mainUl, worksBox]);
    linksArray.push([worksBox, imgWrk, 'desktop_img']);
    linksArray.push([worksBox, contentDiv]);
    linksArray.push([contentDiv, wrkTitle, 'worksh1', workInfo[i].title]);
    linksArray.push([contentDiv, featureUl]);
    linksArray.push([featureUl, featureLi1, null, workInfo[i].features[0]]);
    linksArray.push([featureLi2, imgDot1]);
    linksArray.push([featureUl, featureLi2, 'qualifications', workInfo[i].features[1]]);
    linksArray.push([featureLi3, imgDot1]);
    linksArray.push([featureUl, featureLi3, 'qualifications', workInfo[i].features[2]]);
    linksArray.push([contentDiv, infoText, 'p', workInfo[i].description]);
    linksArray.push([contentDiv, languagesUl, 'languages']);
    linksArray.push([languagesUl, languagesLi1, null, workInfo[i].lenguages[0]]);
    linksArray.push([languagesUl, languagesLi2, null, workInfo[i].lenguages[1]]);
    linksArray.push([languagesUl, languagesLi3, null, workInfo[i].lenguages[2]]);
    linksArray.push([contentDiv, btnH2]);
    linksArray.push([btnH2, btnA, 'works_btn', 'See Project']);
    imgWrk.src = workInfo[i].imagePath;
    imgWrk.alt = 'preview work';     
  }
  constructor(linksArray);
  