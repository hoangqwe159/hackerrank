class Helper {
  constructor (name) {
    this.name = name;
  }

  debounce (func, timeout) {
    let timer;
    const that = this;

    function sum (a, b) {
      console.log(that);
      return 0;
    }

    sum(1)


    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log(this)
        func.apply(window, args);
      })
    }
  }

  printName (message) {
    console.log(message + ' ' + this.name);
  }
}


window.name = 'Hoang'
let textHelper = new Helper('text');
let imageHelper = new Helper('image');

const debounceText = textHelper.debounce(imageHelper.printName, 100);

debounceText('alo1')
debounceText('alo12')
debounceText('alo123')

