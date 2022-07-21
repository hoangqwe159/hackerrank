const pages = {
  101: [
    {
      id: 'svg_1',
      parent: null,
      child: '101-svg_2',
    },
    {
      id: 'svg_2',
      parent: '101-svg_1',
      child: '102-svg_2',
    },
    {
      id: 'svg_3',
      parent: null,
      child: '102-svg_4',
    },
    {
      id: 'svg_4',
      parent: null,
      child: '103-svg_2',
    },
  ],
  102: [
    {
      id: 'svg_1',
      parent: '101-svg_2',
      child: '102-svg_2',
    },
    {
      id: 'svg_2',
      parent: '102-svg_1',
      child: '102-svg_3',
    },
    {
      id: 'svg_3',
      parent: '102-svg_2',
      child: '104-svg_1',
    },
    {
      id: 'svg_4',
      parent: '101-svg_3',
      child: '103-svg_1',
    },
  ],
  103: [
    {
      id: 'svg_1',
      parent: '102-svg_4',
      child: '104-svg_2',
    },
    {
      id: 'svg_2',
      parent: '101-svg_4',
      child: '104-svg_5',
    },
  ],
  104: [
    {
      id: 'svg_1',
      parent: '102-svg_3',
      child: '105-svg_3',
    },
    {
      id: 'svg_2',
      parent: '103-svg_1',
      child: '104-svg_3',
    },
    {
      id: 'svg_3',
      parent: '104-svg_2',
      child: '104-svg_4',
    },
    {
      id: 'svg_4',
      parent: '104-svg_3',
      child: '105-svg_4',
    },
    {
      id: 'svg_5',
      parent: '103-svg_2',
      child: '104-svg_6',
    },
    {
      id: 'svg_6',
      parent: '104-svg_5',
      child: '104-svg_7',
    },
    {
      id: 'svg_7',
      parent: '104-svg_6',
      child: '104-svg_8',
    },
    {
      id: 'svg_8',
      parent: '104-svg_7',
      child: '107-svg_2',
    },
  ],
  105: [
    {
      id: 'svg_1',
      parent: '105-svg_2',
      child: '106-svg_1',
    },
    {
      id: 'svg_2',
      parent: '105-svg_3',
      child: '105-svg_1',
    },
    {
      id: 'svg_3',
      parent: '104-svg_1',
      child: '105-svg_2',
    },
    {
      id: 'svg_4',
      parent: '104-svg_4',
      child: '106-svg_3',
    },
  ],
  106: [
    {
      id: 'svg_1',
      parent: '105-svg_1',
      child: '106-svg_2',
    },
    {
      id: 'svg_2',
      parent: '106-svg_1',
      child: '107-svg_1',
    },
    {
      id: 'svg_3',
      parent: '105-svg_4',
      child: '108-svg_1',
    },
  ],
  107: [
    {
      id: 'svg_1',
      parent: '106-svg_2',
      child: null,
    },
    {
      id: 'svg_2',
      parent: '104-svg_8',
      child: '107-svg_3',
    },
    {
      id: 'svg_3',
      parent: '107-svg_2',
      child: '107-svg_4',
    },
    {
      id: 'svg_4',
      parent: '107-svg_3',
      child: '109-svg_1',
    },
  ],
  108: [
    {
      id: 'svg_1',
      parent: '106-svg_3',
      child: null,
    }
  ],
  109: [
    {
      id: 'svg_1',
      parent: '107-svg_4',
      child: '110-svg_1',
    },
  ],
  110: [
    {
      id: 'svg_1',
      parent: '109-svg_1',
      child: '110-svg_2',
    },
    {
      id: 'svg_2',
      parent: '110-svg_1',
      child: '110-svg_3',
    },
    {
      id: 'svg_3',
      parent: '110-svg_2',
      child: null,
    },
  ],
};

const fetchedPages = {};
const textChain = [];
let countFetch = 0;

function switchToPage(pageId) {
  const currentPageId = pageId;
  const currentPage = pages[currentPageId];

  const textOverflows = currentPage.filter((text) => !text.child || !text.child.includes(currentPageId));
  for (let i = 0; i < textOverflows.length; i++) {
    let currentText = textOverflows[i];
    const childString = currentText.child;
    const childPage = getPageId(childString);

    if (childString && childPage && !fetchedPages[childPage]) {
      fetchedPages[childPage] = getPageContentById(childPage);
      for (let page in fetchedPages) {
        switchToPage(page);
      }
    }
  }

  
}

function calculateTextChain() {
  const multiplePagesChain = [];
  // console.log(fetchedPages);
  for (let pageId in fetchedPages) {
    const currentPage = fetchedPages[pageId];
    const textOverflows = currentPage.filter((text) => !text.child || !text.child.includes(pageId));
    const singlePageChain = [];
    for (let i = 0; i < textOverflows.length; i++) {
      singlePageChain[i] = [];
      let currentText = textOverflows[i];
  
  
      while (currentText) {
        const textId = currentText.id;
        singlePageChain[i].unshift(`${pageId}-${textId}`);
  
        const parent = currentText.parent;
        currentText = isCurrentPage(parent, pageId)
          ? currentPage.find(text => text.id === getTextId(parent))
          : null;
      }
    }

    multiplePagesChain.push(singlePageChain);
  }
  console.log(multiplePagesChain);
}

function getPageContentById(pageId) {
  countFetch += 1;
  return pages[pageId];
}

function getTextId(idString) {
  if (typeof idString !== 'string') return;
  const textId = idString.split('-');
  return textId.length > 1 ? textId[1] : idString;
}

function getPageId(idString) {
  if (typeof idString !== 'string') return;
  const textId = idString.split('-');
  return textId.length > 1 ? textId[0] : idString;
}

function isCurrentPage (idString, currentPageId) {
  if (typeof idString !== 'string') return false;
  return idString.includes(currentPageId);
}

const currentPageId = '103';
fetchedPages[currentPageId] = pages[currentPageId];
switchToPage(currentPageId);
// console.log(fetchedPages);
calculateTextChain();
