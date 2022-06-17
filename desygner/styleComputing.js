({
    plugins: ['jsdom-quokka-plugin'],
    jsdom: {html: `<div id="test">Hello</div>`}
})

const textarea = {
  font_size: 10,
  font_weight: 'normal'
};

const styles = [
  {start: 6, end: 11, attribute: 'font-weight', value: 'bold'},
  {start: 14, end: 16, attribute: 'font-weight', value: 'bold'},
  {start: 23, end: 24, attribute: 'font-size', value: 12},
  {start: 23, end: 24, attribute: 'font-weight', value: 'bold'},
  {start: 23, end: 24, attribute: 'font-style', value: 'normal'},
  {start: 26, end: 34, attribute: 'font-size', value: 12},
  {start: 36, end: 38, attribute: 'font-family', value: 'Anton'},
  {start: 36, end: 38, attribute: 'font-weight', value: '400'},
  {start: 43, end: 45, attribute: 'font-weight', value: 'bold'},
  {start: 57, end: 59, attribute: 'font-weight', value: 'bold'},
  {start: 62, end: 80, attribute: 'font-weight', value: 'bold'},
  {start: 82, end: 85, attribute: 'font-family', value: 'Anton'},
  {start: 82, end: 85, attribute: 'font-weight', value: '400'},
  {start: 82, end: 85, attribute: 'font-style', value: 'normal'},
  {start: 87, end: 95, attribute: 'font-size', value: 10},
  {start: 96, end: 98, attribute: 'font-size', value: 20},
];

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

const paragraph =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';
const maxWidth = 587.5474243164062;

const expected = [
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
  'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ',
  'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
];

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

for (let wordIndex = 0; wordIndex < paragraph.length; wordIndex++) {
  const activeStyle = getActiveStyle(0, wordIndex);
  const tspan = document.createElement ('span');
  tspan.style.fontSize = `${activeStyle.fontSize}px`;
  tspan.style.fontWeight = activeStyle.fontWeight;
  tspan.textContent = paragraph[wordIndex];
  hiddenElement.appendChild (tspan);
  console.log(tspan.getBoundingClientRect().width);
  if (hiddenElement.getBoundingClientRect().width > maxWidth) {
    console.log(paragraph.slice(0, i));
    break;
  }
}

console.log(hiddenElement.textContent);


function getActiveStyle (startIndex, c) {
  const currentIndex = startIndex + c;
  const activeStyle = {
    fontSize: textarea.font_size,
    fontWeight: textarea.font_weight
  };

  if (!styles.length || currentIndex > styles[styles.length - 1].end) {
    return activeStyle;
  }

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    if (currentIndex < styles[i].start) return activeStyle;

    if (currentIndex >= style.start && currentIndex < style.end) {
      if (style.attribute === 'font-size') activeStyle.fontSize = style.value;
      if (style.attribute === 'font-weight') activeStyle.fontWeight = style.value;
    }
  }

  return activeStyle
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
