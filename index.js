import myBookShowList from './modules/myBookShowList.js';
import myShowContactView from './modules/myShowContactView.js';
import myAddBookList from './modules/myAddBookList.js';
import myRedirectButton from './modules/myRedirectButton.js';
import BookCollection from './modules/BookCollection.js';

import { DateTime } from './modules/luxon.js';

const date = document.getElementById('date');
const luxon = DateTime.now().toJSDate();

date.innerText = luxon;

const bookCollection = new BookCollection();
bookCollection.init();

myShowContactView();
myRedirectButton();
myBookShowList();
myAddBookList();
