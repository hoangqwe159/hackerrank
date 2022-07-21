const defaultStyle = {
  fontSize: 10,
  fontWeight: 400,
  fontFamily: 'Lato'
};

let INKIVE;

class TextSeparator {
  constructor({ textContent, styles, font_size, font_weight, font_family, fakeCharsIndices }) {
    this.textContent = textContent;
    this.styles = styles;
    this.fontSize = font_size;
    this.fontWeight = font_weight;
    this.fontFamily = font_family;
    this.fakeCharsIndices = fakeCharsIndices;

    // this.paragraphs = textContent.split ('\n');
    this.maxWidth = 300;

    this.charData = {};
    this.separatedText = [];

    this.globalIndex = 0;
    this.lineIndex = 0;

    this.currentWidth = 0;
  }

  initializeTextMetrics () {
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

    console.log(document.body.innerHTML);
  }

  getMaxWidth () {
    return this.maxWidth;
  }

  splitParagraphs (paragraphs) {
    const that = this;
    for (let paraIndex = 0; paraIndex < paragraphs.length; paraIndex++) {
      const words = paragraphs[paraIndex].split('\u00A0');
      const maxWidth = getMaxWidth ();

      splitWords(words, maxWidth);

      that.lineIndex += 1;
    }
  }

  splitWords (words, maxWidth) {
    const that = this;
    that.currentWidth = 0;
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
      const isLastWord = checkLastElement(wordIndex, words.length);
      const word = isLastWord ? words[wordIndex] : addSpaceToWord(words[wordIndex]);
      const isWordAdded = checkWordIsAdded(word, maxWidth);

      isWordAdded || addWord(word);
    }
    return true;
  }

  checkWordIsAdded (word, maxWidth) {
    let wordWidth = 0;
    let isAdded = false;
    for (let charIndex = 0; charIndex < word.length; charIndex++) {
      const charWidth = calculateCharWidth(charIndex, word[charIndex]);
      const isLastChar = checkLastElement(charIndex, word.length);

      wordWidth += charWidth;
      isAdded = isLastChar && checkWordIsAddedToNextLine(word, wordWidth, maxWidth);
    }
    return isAdded;
  }

  checkWordIsAddedToNextLine (word, wordWidth, maxWidth) {
    const that = this;
    that.currentWidth += wordWidth;

    return that.currentWidth > maxWidth ? addToNextLine(word, wordWidth) : false;
  }

  addToNextLine (word, wordWidth) {
    const that = this;

    that.lineIndex += 1;
    that.currentWidth = wordWidth;

    return addWord(word);
  }

  calculateCharWidth (charIndex, char) {
    const that = this;

    const fakeIndex = realCharIndexToFake(that.globalIndex + charIndex);
    const activeStyle = getActiveStyle(fakeIndex);
    const defaultWidth = getDefaultWidth(char, that.fontFamily);

    return convertCharWidth(defaultWidth, activeStyle);
  }

  addWord (word) {
    const that = this;

    that.separatedText[that.lineIndex] = that.separatedText[that.lineIndex] || [];
    that.separatedText[that.lineIndex].push(word);
    that.globalIndex += word.length;

    return true;
  }

  getDefaultWidth (char, fontFamily) {
    const that = this;
    that.charData[fontFamily] = that.charData[fontFamily] || {};
    that.charData[fontFamily][char] = that.charData[fontFamily][char] || calculateCharBBox (char, fontFamily);

    return that.charData[fontFamily][char];
  }

  calculateCharBBox (char, fontFamily) {
    const hiddenElement = INKIVE.Text.textMetricsCache.hiddenElement;
    hiddenElement.setAttribute('font-size', `${defaultStyle.fontSize}px`);
    hiddenElement.setAttribute('font-weight', defaultStyle.fontWeight);
    hiddenElement.setAttribute('font-family', fontFamily);
    hiddenElement.textContent = char;

    const bBoxWidth = hiddenElement.getBBox().width;
    hiddenElement.innerHTML = null;

    return bBoxWidth;
  }

  addSpaceToWord (word) {
    return word + '\u00A0';
  }

  checkLastElement (elementIndex, arrayLength) {
    return elementIndex >= arrayLength - 1;
  }

  fakeCharIndexToReal (index) {
    const fakeCharsIndices = this.fakeCharsIndices;
    if (!fakeCharsIndices || !fakeCharsIndices.length) return index;

    let realIndex = index;
    for (let i = 0; i < fakeCharsIndices.length; i++) {
      if (fakeCharsIndices[i] >= index) break;
      realIndex--;
    }

    return realIndex;
  }

  realCharIndexToFake (index) {
    const fakeCharsIndices = this.fakeCharsIndices;
    if (!fakeCharsIndices || !fakeCharsIndices.length) return index;

    let fakeIndex = index;
    for (let i = 0; i < fakeCharsIndices.length; i++) {
      if (fakeCharsIndices[i] < fakeIndex) fakeIndex++;
      else break;
    }

    return fakeIndex;
  }

  getActiveStyle (currentIndex) {
    const styles = this.styles;
    const activeStyle = {
      fontSize: this.fontSize,
      fontWeight: this.fontWeight
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

  getFontWeight (fontWeight) {
    return parseInt(fontWeight) ? parseInt(fontWeight) : getNumericFontWeight(fontWeight);
  }

  getNumericalFontWeight (fontWeight) {
    // CSS syntax
    // font-weight: normal|bold|bolder|lighter|number|initial|inherit;
    const defaultFontWeight = {
      normal: 400,
      bold: 700
    };

    return defaultFontWeight[fontWeight] || defaultFontWeight.normal;
  }

  convertCharWidth (defaultWidth, activeStyle) {
    const activeFontSize = parseFloat(activeStyle.fontSize);
    const activeFontWeight = getNumericalFontWeight(activeStyle.fontWeight);

    const fontWeightFactor = activeFontWeight > 400 ? 1.06 : 1;
    const fontSizeFactor = activeFontSize / 10;

    return defaultWidth * fontSizeFactor * fontWeightFactor;
  }
}
