const defaultStyle = {
  fontSize: 10,
  fontWeight: 400,
  fontFamily: 'Lato',
};

let INKIVE;

class TextSeparator {
  constructor({ textContent, styles, font_size, font_weight, font_family, fakeCharsIndices }) {
    this.textContent = textContent.replaceAll (String.fromCharCode (194), '');
    this.styles = styles;
    this.fontSize = font_size;
    this.fontWeight = font_weight;
    this.fontFamily = font_family;
    this.fakeCharsIndices = fakeCharsIndices;

    // this.paragraphs = textContent.split ('\n');
    this.maxWidth = 410.7;

    this.charData = {};
    this.separatedText = [];

    this.globalIndex = 0;
    this.lineIndex = 0;

    this.currentWidth = 0;

    this.countPerformance = 0;
  }

  initializeTextMetrics() {
    INKIVE = INKIVE || {};
    INKIVE.Text = INKIVE.Text || {};
    INKIVE.Text.textMetricsCache = INKIVE.Text.textMetricsCache || {};

    // Try to fetch from document
    if (!INKIVE.Text.textMetricsCache.hiddenElement) {
      INKIVE.Text.textMetricsCache.hiddenElement = document.querySelector('text#text-metrics');
    }

    // Not found, create it
    if (!INKIVE.Text.textMetricsCache.hiddenElement) {
      const hiddenElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      hiddenElement.id = 'text-metrics';
      hiddenElement.setAttribute('style', 'visibility: hidden');

      document.querySelector('#svgcontent').append(hiddenElement);
      INKIVE.Text.textMetricsCache.hiddenElement = hiddenElement;
    }

    INKIVE.Text.textMetricsCache.hiddenElement.innerHTML = null;
    INKIVE.Text.textMetricsCache.hiddenElement.setAttribute('font-size', this.fontSize || defaultStyle.fontSize);
    INKIVE.Text.textMetricsCache.hiddenElement.setAttribute('font-weight', this.fontWeight || defaultStyle.fontWeight);
    INKIVE.Text.textMetricsCache.hiddenElement.setAttribute('font-family', this.fontFamily || defaultStyle.fontFamily);
  }

  getMaxWidth() {
    return this.maxWidth;
  }

  splitParagraphs(paragraphs) {
    const that = this;
    for (let paraIndex = 0; paraIndex < paragraphs.length; paraIndex++) {
      const words = paragraphs[paraIndex].split('\u00A0');
      const maxWidth = that.getMaxWidth();

      that.splitWords(words, maxWidth);

      that.lineIndex += 1;
    }
  }

  splitWords(words, maxWidth) {
    const that = this;
    that.currentWidth = 0;
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
      const isLastWord = that.checkLastElement(wordIndex, words.length);
      const word = isLastWord ? words[wordIndex] : that.addSpaceToWord(words[wordIndex]);
      const isWordAdded = that.checkWordIsAdded(word, maxWidth);

      isWordAdded || that.addWord(word);
    }
    return true;
  }

  checkWordIsAdded(word, maxWidth) {
    const that = this;

    let wordWidth = 0;
    let isAdded = false;
    for (let charIndex = 0; charIndex < word.length; charIndex++) {
      const charWidth = that.calculateCharWidth(charIndex, word[charIndex]);
      const isLastChar = that.checkLastElement(charIndex, word.length);

      wordWidth += charWidth;
      isAdded = isLastChar && that.checkWordIsAddedToNextLine(word, wordWidth, maxWidth);
    }
    return isAdded;
  }

  checkWordIsAddedToNextLine(word, wordWidth, maxWidth) {
    const that = this;
    that.currentWidth += wordWidth;

    return that.currentWidth > maxWidth ? that.addToNextLine(word, wordWidth) : false;
  }

  addToNextLine(word, wordWidth) {
    const that = this;

    that.lineIndex += 1;
    that.currentWidth = wordWidth;

    return that.addWord(word);
  }

  calculateCharWidth(charIndex, char) {
    const that = this;

    const fakeIndex = that.realCharIndexToFake(that.globalIndex + charIndex);
    const activeStyle = that.getActiveStyle(fakeIndex);
    const defaultWidth = that.getDefaultWidth(char, that.fontFamily);

    return that.convertCharWidth(defaultWidth, activeStyle);
  }

  addWord(word) {
    const that = this;

    that.separatedText[that.lineIndex] = that.separatedText[that.lineIndex] || [];
    that.separatedText[that.lineIndex].push(word);
    that.globalIndex += word.length;

    return true;
  }

  getDefaultWidth(char, fontFamily) {
    const that = this;
    that.charData[fontFamily] = that.charData[fontFamily] || {};
    that.charData[fontFamily][char] = that.charData[fontFamily][char] || that.calculateCharBBox(char, fontFamily);

    return that.charData[fontFamily][char];
  }

  calculateCharBBox(char, fontFamily) {
    this.countPerformance += 1;
    const hiddenElement = INKIVE.Text.textMetricsCache.hiddenElement;
    hiddenElement.setAttribute('font-size', `${defaultStyle.fontSize}px`);
    hiddenElement.setAttribute('font-weight', defaultStyle.fontWeight);
    hiddenElement.setAttribute('font-family', fontFamily);
    hiddenElement.textContent = char;

    const bBoxWidth = hiddenElement.getBBox().width;
    hiddenElement.innerHTML = null;

    return bBoxWidth;
  }

  addSpaceToWord(word) {
    return word + '\u00A0';
  }

  checkLastElement(elementIndex, arrayLength) {
    return elementIndex >= arrayLength - 1;
  }

  fakeCharIndexToReal(index) {
    const fakeCharsIndices = this.fakeCharsIndices;
    if (!fakeCharsIndices || !fakeCharsIndices.length) return index;

    let realIndex = index;
    for (let i = 0; i < fakeCharsIndices.length; i++) {
      if (fakeCharsIndices[i] >= index) break;
      realIndex--;
    }

    return realIndex;
  }

  realCharIndexToFake(index) {
    const fakeCharsIndices = this.fakeCharsIndices;
    if (!fakeCharsIndices || !fakeCharsIndices.length) return index;

    let fakeIndex = index;
    for (let i = 0; i < fakeCharsIndices.length; i++) {
      if (fakeCharsIndices[i] < fakeIndex) fakeIndex++;
      else break;
    }

    return fakeIndex;
  }

  getActiveStyle(currentIndex) {
    const styles = this.styles;
    const activeStyle = {
      fontSize: this.fontSize,
      fontWeight: this.fontWeight,
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

    return activeStyle;
  }

  getFontWeight(fontWeight) {
    return parseInt(fontWeight) ? parseInt(fontWeight) : getNumericFontWeight(fontWeight);
  }

  getNumericalFontWeight(fontWeight) {
    // CSS syntax
    // font-weight: normal|bold|bolder|lighter|number|initial|inherit;
    const defaultFontWeight = {
      normal: 400,
      bold: 700,
    };

    return defaultFontWeight[fontWeight] || defaultFontWeight.normal;
  }

  convertCharWidth(defaultWidth, activeStyle) {
    const that = this;
    const activeFontSize = parseFloat(activeStyle.fontSize);
    const activeFontWeight = that.getNumericalFontWeight(activeStyle.fontWeight);

    const fontWeightFactor = activeFontWeight > 400 ? 1.06 : 1;
    const fontSizeFactor = activeFontSize / 10;

    return defaultWidth * fontSizeFactor * fontWeightFactor;
  }
}

const text = {
  textContent:
    'Section 1:  Product Safety Sign And Label System \nIf and when required, appropriate safety labels have been included in the rectangular margin blocks throughout this manual. Safety labels are vertically orientated rectangles as shown in the representative examples (below), consisting of three panels encircled by a narrow border. The panels contain four messages which communicate:\n.The level of hazard seriousness.\n.The nature of the hazard.\n.The consequences of human or product interaction with the hazard.\n.The instructions, if necessary, on how to avoid the hazard.\nThe top panel contains a pictorial, which communicates the nature of the hazard and the possible consequence of human, or product interaction with the hazard. In some instances of human hazards the pictorial may, instead, depict what preventative measures to take, such as wearing protective equipment.\nThe bottom panel may contain an instruction message on how to avoid the hazard. In case of human hazard, the message may also contain a more precise definition of the hazard, and the consequences of human interaction with the hazard, than can be communicated solely by the pictorial.\n1. DANGER - Immediate hazards which WILL result in personal injury or death.\n2. WARNING - Hazards or unsafe practices which COULD result in personal injury or death.\n3. CAUTION - Hazards or unsafe practices which COULD result in minor personal injury.\n4. ATTENTION - Hazards or unsafe practices, which COULD result in product or property damage.\n!DANGER\nDo not remove bolts if pressure in line, as this will result in severe personal injury or death.\n!WARNING\nKnow all valve exhaust/leakage points to avoid possible severe personal injury or death.\n! CAUTION\nWear necessary protective equipment to prevent possible injury.\n! ATTENTION\nDo not drop or strike valve.',
  styles: [
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
  ],
  font_size: 10,
  font_weight: 400,
  font_family: 'Lato',
  fakeCharsIndices: [49, 382, 416, 443, 510, 571, 874, 1158, 1235, 1324, 1410, 1504, 1512, 1609, 1618, 1707, 1717, 1781, 1793, 1822],
};
const textSeparator = new TextSeparator(text);

textSeparator.initializeTextMetrics();

const paragraphs = text.textContent.replaceAll (String.fromCharCode (194), '').split('\n');

textSeparator.splitParagraphs(paragraphs);
