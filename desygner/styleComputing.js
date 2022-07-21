({
  plugins: ['jsdom-quokka-plugin'],
  jsdom: {
    userAgent: 'quokka.js',
    html: `<div id="testDiv">Hello</div>`,
    config: {
      pretendToBeVisual: true,
      runScripts: 'dangerously',
      url: 'http://localhost/3001',
    },
  },
});

const textarea = {
  font_size: 18,
  font_family: 'Lato',
  font_weight: '400',
};

// const styles = [
//   {start: 6, end: 11, attribute: 'font-weight', value: 'bold'},
//   {start: 14, end: 16, attribute: 'font-weight', value: 'bold'},
//   {start: 23, end: 24, attribute: 'font-size', value: 12},
//   {start: 23, end: 24, attribute: 'font-weight', value: 'bold'},
//   {start: 23, end: 24, attribute: 'font-style', value: 'normal'},
//   {start: 26, end: 34, attribute: 'font-size', value: 12},
//   {start: 36, end: 38, attribute: 'font-family', value: 'Anton'},
//   {start: 36, end: 38, attribute: 'font-weight', value: '400'},
//   {start: 43, end: 45, attribute: 'font-weight', value: 'bold'},
//   {start: 57, end: 59, attribute: 'font-weight', value: 'bold'},
//   {start: 62, end: 80, attribute: 'font-weight', value: 'bold'},
//   {start: 82, end: 85, attribute: 'font-family', value: 'Anton'},
//   {start: 82, end: 85, attribute: 'font-weight', value: '400'},
//   {start: 82, end: 85, attribute: 'font-style', value: 'normal'},
//   {start: 87, end: 95, attribute: 'font-size', value: 10},
//   {start: 96, end: 98, attribute: 'font-size', value: 20},
// ];

// const fontSize = styles.filter(style => style.attribute === 'font-size');
// const fontWeight = styles.filter(style => style.attribute === 'font-weight');
// const fontFamily = styles.filter(style => style.attribute === 'font-family');

// activeStyle = getActiveStyle(0, 2)
// activeStyle = getActiveStyle(0, 5)
// activeStyle = getActiveStyle(0, 6)
// activeStyle = getActiveStyle(0, 7)
// activeStyle = getActiveStyle(0, 12)
// activeStyle = getActiveStyle(0, 40)
// activeStyle = getActiveStyle(0, 50)
// activeStyle = getActiveStyle(0, 60)
// activeStyle = getActiveStyle(0, 80)

// activeStyle = getActiveStyle(0, 10)

// console.log(searchIndex);
// console.log(styles.length);

// console.log(activeStyle);

let textContent =
  'Section 1:  Product Safety Sign And Label System \nIf and when required, appropriate safety labels have been included in the rectangular margin blocks throughout this manual. Safety labels are vertically orientated rectangles as shown in the representative examples (below), consisting of three panels encircled by a narrow border. The panels contain four messages which communicate:\n.The level of hazard seriousness.\n.The nature of the hazard.\n.The consequences of human or product interaction with the hazard.\n.The instructions, if necessary, on how to avoid the hazard.\nThe top panel contains a pictorial, which communicates the nature of the hazard and the possible consequence of human, or product interaction with the hazard. In some instances of human hazards the pictorial may, instead, depict what preventative measures to take, such as wearing protective equipment.\nThe bottom panel may contain an instruction message on how to avoid the hazard. In case of human hazard, the message may also contain a more precise definition of the hazard, and the consequences of human interaction with the hazard, than can be communicated solely by the pictorial.\n1. DANGER - Immediate hazards which WILL result in personal injury or death.\n2. WARNING - Hazards or unsafe practices which COULD result in personal injury or death.\n3. CAUTION - Hazards or unsafe practices which COULD result in minor personal injury.\n4. ATTENTION - Hazards or unsafe practices, which COULD result in product or property damage.\n!DANGER\nDo not remove bolts if pressure in line, as this will result in severe personal injury or death.\n!WARNING\nKnow all valve exhaust/leakage points to avoid possible severe personal injury or death.\n! CAUTION\nWear necessary protective equipment to prevent possible injury.\n! ATTENTION\nDo not drop or strike valve.';

textContent =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';
textContent = textContent.replaceAll (String.fromCharCode (194), '');

const paragraphs = textContent.split ('\n');

let styles = [
  {
    start: 0,
    end: 36,
    attribute: 'font-size',
    value: 24,
  },
  {
    start: 0,
    end: 36,
    attribute: 'fill',
    value: '#0d4c8b',
  },
  {
    start: 36,
    end: 42,
    attribute: 'font-size',
    value: 24,
  },
  {
    start: 36,
    end: 42,
    attribute: 'fill',
    value: '#0d4c8b',
  },
  {
    start: 42,
    end: 49,
    attribute: 'font-size',
    value: 24,
  },
  {
    start: 42,
    end: 49,
    attribute: 'fill',
    value: '#0d4c8b',
  },
  {
    start: 1493,
    end: 1494,
    attribute: 'font-family',
    value: 'Helvetica',
  },
  {
    start: 1493,
    end: 1494,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1493,
    end: 1494,
    attribute: 'font-weight',
    value: 'bold',
  },
  {
    start: 1493,
    end: 1494,
    attribute: 'fill',
    value: '#ffffff',
  },
  {
    start: 1494,
    end: 1500,
    attribute: 'font-family',
    value: 'Helvetica',
  },
  {
    start: 1494,
    end: 1500,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1494,
    end: 1500,
    attribute: 'font-weight',
    value: 'bold',
  },
  {
    start: 1494,
    end: 1500,
    attribute: 'fill',
    value: '#ffffff',
  },
  {
    start: 1596,
    end: 1597,
    attribute: 'font-family',
    value: 'Helvetica',
  },
  {
    start: 1596,
    end: 1597,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1596,
    end: 1597,
    attribute: 'font-weight',
    value: 'bold',
  },
  {
    start: 1597,
    end: 1604,
    attribute: 'font-family',
    value: 'Helvetica',
  },
  {
    start: 1597,
    end: 1604,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1597,
    end: 1604,
    attribute: 'font-weight',
    value: 'bold',
  },
  {
    start: 1604,
    end: 1692,
    attribute: 'font-weight',
    value: 'normal',
  },
  {
    start: 1692,
    end: 1693,
    attribute: 'font-family',
    value: 'MCM-Icons',
  },
  {
    start: 1692,
    end: 1693,
    attribute: 'font-size',
    value: 17,
  },
  {
    start: 1692,
    end: 1693,
    attribute: 'font-weight',
    value: 'normal',
  },
  {
    start: 1693,
    end: 1694,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1693,
    end: 1694,
    attribute: 'font-weight',
    value: 'bold',
  },
  {
    start: 1694,
    end: 1701,
    attribute: 'font-family',
    value: 'Helvetica',
  },
  {
    start: 1694,
    end: 1701,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1694,
    end: 1701,
    attribute: 'font-weight',
    value: 'bold',
  },
  {
    start: 1764,
    end: 1765,
    attribute: 'font-family',
    value: 'MCM-Icons',
  },
  {
    start: 1764,
    end: 1765,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1764,
    end: 1765,
    attribute: 'font-weight',
    value: 'normal',
  },
  {
    start: 1764,
    end: 1765,
    attribute: 'fill',
    value: '#ffffff',
  },
  {
    start: 1765,
    end: 1766,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1765,
    end: 1766,
    attribute: 'font-weight',
    value: 'bold',
  },
  {
    start: 1765,
    end: 1766,
    attribute: 'fill',
    value: '#ffffff',
  },
  {
    start: 1766,
    end: 1775,
    attribute: 'font-family',
    value: 'Helvetica',
  },
  {
    start: 1766,
    end: 1775,
    attribute: 'font-size',
    value: 14,
  },
  {
    start: 1766,
    end: 1775,
    attribute: 'font-weight',
    value: 'bold',
  },
  {
    start: 1766,
    end: 1775,
    attribute: 'fill',
    value: '#ffffff',
  },
];

styles = [];

const fakeCharsIndices = [
  49,
  382,
  416,
  443,
  510,
  571,
  874,
  1158,
  1235,
  1324,
  1410,
  1504,
  1512,
  1609,
  1618,
  1707,
  1717,
  1781,
  1793,
  1822,
];

const hiddenElement = document.querySelector ('#text-metrics');

// document.body.append (hiddenElement);
// document.querySelector('#testDiv').textContent = textContent;
// console.log(document.body.innerHTML);

// console.log(document.querySelector('#testDiv').getBoundingClientRect());

// Default normal 10px
const charData = {};

const result = [];
let globalIndex = 0;
let lineIndex = 0;

for (let paraIndex = 0; paraIndex < paragraphs.length; paraIndex++) {
  const paragraph = paragraphs[paraIndex];
  const words = paragraph.split ('\u00A0');
  const maxWidth = 306;

  let currentWidth = 0;

  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    let shouldAddWord = true;
    let wordWidth = 0;
    const isLastWord = checkLastWord (wordIndex, words.length);
    const word = addSpaceToWord (words[wordIndex], isLastWord);

    for (let charIndex = 0; charIndex < word.length; charIndex++) {
      const char = word[charIndex];
      const fakeIndex = realCharIndexToFake (globalIndex + charIndex);
      const activeStyle = getActiveStyle (fakeIndex);
      const fontFamily = textarea.font_family;
      mapCharWidth (char, fontFamily);

      const defaultWidth = charData[fontFamily][char];
      const charWidth = convertCharWidth (defaultWidth, activeStyle);
      wordWidth += charWidth;
      if (charIndex === word.length - 1) {
        currentWidth += wordWidth;

        if (currentWidth > maxWidth) {
          shouldAddWord = false;
          lineIndex += 1;
          if (!result[lineIndex]) result[lineIndex] = [];
          result[lineIndex].push (word);
          globalIndex += word.length;
          currentWidth = wordWidth;
          break;
        }
      }
    }

    if (shouldAddWord) {
      if (!result[lineIndex]) result[lineIndex] = [];
      result[lineIndex].push (word);
      globalIndex += word.length;
    }
  }
  lineIndex += 1;
}

console.log (result);

function mapCharWidth (char, fontFamily) {
  if (!charData[fontFamily]) {
    charData[fontFamily] = {};
  }

  if (!charData[fontFamily][char]) {
    hiddenElement.setAttribute ('font-size', '10px');
    hiddenElement.setAttribute ('font-weight', '400');
    hiddenElement.setAttribute ('font-family', fontFamily);
    hiddenElement.textContent = char;

    charData[fontFamily][char] = hiddenElement.getBBox ().width;
    hiddenElement.innerHTML = null;
  }
}

function addSpaceToWord (word, isLastWord) {
  return isLastWord ? word : word + '\u00A0';
}

function checkLastWord (wordIndex, wordsLength) {
  return wordIndex >= wordsLength - 1;
}

function fakeCharIndexToReal (index) {
  if (!fakeCharsIndices || !fakeCharsIndices.length) return index;

  let realIndex = index;
  for (let i = 0; i < fakeCharsIndices.length; i++) {
    if (fakeCharsIndices[i] >= index) break;
    realIndex--;
  }

  return realIndex;
}

function realCharIndexToFake (index) {
  if (!fakeCharsIndices || !fakeCharsIndices.length) return index;

  let fakeIndex = index;
  for (let i = 0; i < fakeCharsIndices.length; i++) {
    if (fakeCharsIndices[i] < fakeIndex) fakeIndex++;
    else break;
  }

  return fakeIndex;
}

function getActiveStyle (currentIndex) {
  const activeStyle = {
    fontSize: textarea.font_size,
    fontWeight: textarea.font_weight,
  };

  if (!styles.length || currentIndex > styles[styles.length - 1].end) {
    return activeStyle;
  }

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    if (currentIndex < styles[i].start) return activeStyle;

    if (currentIndex >= style.start && currentIndex < style.end) {
      if (style.attribute === 'font-size') activeStyle.fontSize = style.value;
      if (style.attribute === 'font-weight')
        activeStyle.fontWeight = style.value;
    }
  }

  return activeStyle;
}

function getFontWeight (fontWeight) {
  return !!parseInt (fontWeight)
    ? parseInt (fontWeight)
    : getNumericFontWeight (fontWeight);
}

function getNumericalFontWeight (fontWeight) {
  // CSS syntax
  // font-weight: normal|bold|bolder|lighter|number|initial|inherit;
  const defaultFontWeight = {
    normal: 400,
    bold: 700,
  };

  return defaultFontWeight[fontWeight] || defaultFontWeight.normal;
}

function convertCharWidth (defaultWidth, activeStyle) {
  const activeFontSize = parseFloat (activeStyle.fontSize);
  const activeFontWeight = getNumericalFontWeight (activeStyle.fontWeight);

  const fontWeightFactor = activeFontWeight > 400 ? 1.06 : 1;
  const fontSizeFactor = activeFontSize / 10;

  return defaultWidth * fontSizeFactor * fontWeightFactor;
}

function flatten (arr) {
  return arr.reduce (
    (acc, cur) => acc.concat (Array.isArray (cur) ? flatten (cur) : cur),
    []
  );
}

function getLineBBox (textarea, startIndex, txt, quickMode) {
  if (!txt || txt.length === 0) return null;
  const text = txt.trimEnd ();
  if (text.length === 0) return null;

  // Try to fetch from document
  if (!INKIVE.Text.textMetricsCache.hiddenElement) {
    INKIVE.Text.textMetricsCache.hiddenElement = document.querySelector (
      'text#text-metrics'
    );
  }

  // Not found, create it
  if (!INKIVE.Text.textMetricsCache.hiddenElement) {
    const hiddenElement = document.createElement ('p');
    hiddenElement.id = 'text-metrics';
    hiddenElement.style.cssText = `
        position: fixed;
        white-space: nowrap;
        font-stretch: 100%;
        text-align: center;
        visibility: hidden;
      `;
    document.body.append (hiddenElement);
    INKIVE.Text.textMetricsCache.hiddenElement = hiddenElement;
  }

  INKIVE.Text.textMetricsCache.hiddenElement.innerHTML = '';

  INKIVE.Text.textMetricsCache.hiddenElement.style.fontFamily =
    textarea.font_family;
  const fontWeight = textarea.font_weight ? textarea.font_weight : 400;
  INKIVE.Text.textMetricsCache.hiddenElement.style.fontWeight = fontWeight;

  // Used by quick mode to cache the result
  let fontSizeIndex;

  if (quickMode) {
    const endIndex = startIndex + text.length;

    let fontSize = textarea.font_size || 0;
    let fontWeight = 0;

    // Get the largest font size in the line
    for (let i = 0; i < textarea.styles.length; i++) {
      const style = textarea.styles[i];

      const isFontSize = style.attribute === 'font-size';
      const isFontWeight = style.attribute === 'font-weight';
      if (!isFontSize && !isFontWeight) continue;

      const leftSide = startIndex >= style.end && endIndex >= style.end;
      const rightSide = startIndex <= style.start && endIndex <= style.start;
      const intersectionMode = !(leftSide || rightSide);
      if (!intersectionMode) continue;

      if (isFontSize && style.value > fontSize) {
        fontSize = style.value;
      }

      if (isFontWeight) {
        const fontWeightNumericValue = getFontWeightNumericValue (style.value);
        if (fontWeightNumericValue > fontWeight)
          fontWeight = fontWeightNumericValue;
      }
    }
    fontSize = fontSize > 0 ? fontSize : textarea.font_size;
    fontWeight = fontWeight > 0 ? fontWeight : textarea.font_weight;

    fontSizeIndex = fontSize | 0;
    const cachedValue =
      INKIVE.Text.textMetricsCache[fontSizeIndex] &&
      INKIVE.Text.textMetricsCache[fontSizeIndex][text];
    if (cachedValue) {
      return cachedValue;
    }

    INKIVE.Text.textMetricsCache.hiddenElement.textContent = text;
    INKIVE.Text.textMetricsCache.hiddenElement.style.fontSize = `${fontSize}px`;
    INKIVE.Text.textMetricsCache.hiddenElement.style.fontWeight = `${fontWeight}`;
  } else {
    let ativefontSize = textarea.font_size;
    let ativefontWeight = textarea.font_weight;
    let tspan = document.createElement ('span');
    tspan.style.fontSize = `${ativefontSize}px`;
    tspan.style.fontWeight = ativefontWeight;

    for (let c = 0; c < text.length; c++) {
      const nextFontSize = getActiveFontSize (c);
      const nextFontWeight = getActiveFontWeight (c);

      const isDifferentFontSize = ativefontSize !== nextFontSize;
      const isDifferentFontWeight = ativefontWeight !== nextFontWeight;
      if (isDifferentFontSize || isDifferentFontWeight) {
        if (tspan.textContent.length) {
          INKIVE.Text.textMetricsCache.hiddenElement.appendChild (tspan);
        }

        tspan = document.createElement ('span');

        isDifferentFontSize && (ativefontSize = nextFontSize);
        isDifferentFontWeight && (ativefontWeight = nextFontWeight);
        tspan.style.fontSize = `${ativefontSize}px`;
        tspan.style.fontWeight = ativefontWeight;
      }

      tspan.textContent += text[c];
    }

    if (tspan.textContent.length) {
      INKIVE.Text.textMetricsCache.hiddenElement.appendChild (tspan);
    }
  }

  const bbox = INKIVE.Text.textMetricsCache.hiddenElement.getBoundingClientRect ();

  if (quickMode) {
    // Initialize the cache
    if (!INKIVE.Text.textMetricsCache[fontSizeIndex]) {
      INKIVE.Text.textMetricsCache[fontSizeIndex] = {};
    }

    // Cache the result for later usages
    INKIVE.Text.textMetricsCache[fontSizeIndex][text] = bbox;
  }

  return bbox;

  function getFontWeightNumericValue (styleValue) {
    const fontWeightValue = {
      bold: 700,
      normal: 400,
    };

    return fontWeightValue[styleValue]
      ? fontWeightValue[styleValue]
      : parseFloat (styleValue);
  }

  function getActiveFontSize (c) {
    for (let i = 0; i < textarea.styles.length; i++) {
      const style = textarea.styles[i];

      const k = startIndex + c;
      if (
        style.attribute === 'font-size' &&
        k >= style.start &&
        k < style.end
      ) {
        return style.value;
      }
    }

    return textarea.font_size;
  }

  function getActiveFontWeight (c) {
    for (let i = 0; i < textarea.styles.length; i++) {
      const style = textarea.styles[i];

      const k = startIndex + c;
      if (
        style.attribute === 'font-weight' &&
        k >= style.start &&
        k < style.end
      ) {
        return style.value;
      }
    }

    return textarea.font_weight;
  }
}
