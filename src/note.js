import './note.css';
import domManager from './domManager.js';

const noteManager = (() => {
  let noteList = {};

  const addNote = (noteName, note) => {
    if (noteName != '' && typeof noteName == 'string') {
      let noteClass = domManager.makeValidSelector(noteName);
      let newNote = {
        name: `${noteName}`,
        id: '',
        cardList: {},
        noteFolder: {},
      };
      addCard(newNote, 'Default');
      if (typeof note == 'object') {
        noteClass = addDuplicateNumber(noteClass, note.noteFolder);
        newNote.id = `${note.id}-${noteClass}`;
        note.noteFolder[noteClass] = newNote;
        noteDom.addDirectory(note.noteFolder[noteClass], note.id);
      } else {
        noteClass = addDuplicateNumber(noteClass, noteList);
        newNote.id = noteClass;
        noteList[noteClass] = newNote;
        noteDom.addDirectory(noteList[noteClass], 'root');
      }
    } else {
      console.error('noteManager.addNote: Incorrect type');
    }
  };
  const removeNote = (note) => {
    delete noteList[note.id];
  };

  const addCard = (note, cardName) => {
    let cardID = cardName.replaceAll(' ', '');
    cardID = addDuplicateNumber(cardID, note.cardList);
    note.cardList[cardID] = {
      name: cardName,
      id: cardID,
      location: [600, 300],
      content: { textBox: '' },
    };
    return cardID;
  };

  const getAllNotes = (list) => {
    let allNotes = [];
    for (let note in list) {
      console.log(`${Object.keys(list[note].noteFolder).length}`);
      if (Object.keys(list[note].noteFolder).length > 0) {
        let anotherList = getAllNotes(list[note].noteFolder);
        for (let anotherNote in anotherList) {
          allNotes.push(anotherList[anotherNote]);
        }
      }
      allNotes.push(list[note]);
    }
    return allNotes;
  };

  const updateNoteName = (note, name) => {
    note.name = name;
  };

  return {
    addNote,
    removeNote,
    addCard,
    getAllNotes,
    updateNoteName,
  };
})();

const noteDom = (() => {
  function createToolMenu(location, note) {
    const noteToolBox = document.createElement('div');
    noteToolBox.classList.add('noteToolBox');

    const noteToolMenu = domManager.createElementDOM(
      'div',
      'noteToolMenu',
      'noteTool'
    );
    noteToolMenu.textContent = 'M';
    noteToolMenu.addEventListener('click', () => {
      const noteToolHide = noteToolBox.querySelectorAll('.noteToolHide');
      noteToolHide.forEach((item) => {
        item.classList.toggle('hide');
      });
    });

    const noteToolDelete = domManager.createElementDOM(
      'div',
      'noteToolDelete',
      'noteToolHide',
      'noteTool',
      'hide'
    );
    noteToolDelete.textContent = 'D';
    noteToolDelete.addEventListener('click', () => {
      noteManager.removeNote(note);
      domManager.deleteElement(note.id, true);
      domManager.deleteElement(location.classList[0], true);
    });

    const noteToolAddCard = domManager.createElementDOM(
      'div',
      'noteToolAddCard',
      'noteTool',
      'noteToolHide',
      'hide'
    );
    noteToolAddCard.textContent = 'A';
    noteToolAddCard.addEventListener('click', (e) => {
      const form = noteDom.addForm(e);
      const formButton = form.querySelector('.formButton');
      const formName = form.querySelector('.formName');
      formButton.addEventListener('click', () => {
        noteSubmit();
      });
      formName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          noteSubmit();
        }
      });
      function noteSubmit() {
        addCardDOM(
          note,
          noteManager.addCard(note, formName.value, 'textBox'),
          location.querySelector('.noteContent')
        );
        form.remove();
      }
    });

    noteToolBox.appendChild(noteToolMenu);
    noteToolBox.appendChild(noteToolDelete);
    noteToolBox.appendChild(noteToolAddCard);
    location.appendChild(noteToolBox);
  }

  const addDirectory = (note, location) => {
    const noteContainer = document.querySelector('.noteContainer');
    const noteMain = domManager.createElementDOM(
      'div',
      note.id,
      'directoryNote'
    );
    const noteHead = domManager.createElementDOM('div', 'noteHead');
    const noteFoot = domManager.createElementDOM('div', 'noteFoot');
    const noteName = domManager.createElementDOM('div', 'noteName');
    const noteAdd = domManager.createElementDOM('div', 'noteAdd');

    noteHead.appendChild(noteName);
    noteHead.appendChild(noteAdd);
    noteMain.appendChild(noteHead);
    noteMain.appendChild(noteFoot);
    noteName.textContent = note.name;
    noteAdd.textContent = '+';
    noteMain.setAttribute('note', note.id);
    if (location == 'root') {
      noteContainer.appendChild(noteMain);
    } else if (location != null && location != undefined && location != '') {
      const noteLocation = noteContainer.querySelector(`.${location}`);
      const footer = noteLocation.querySelector('.noteFoot');
      footer.appendChild(noteMain);
    }

    noteAdd.addEventListener('click', (e) => {
      const form = noteDom.addForm(e);
      const formButton = form.querySelector('.formButton');
      const formName = form.querySelector('.formName');
      formButton.addEventListener('click', () => {
        noteSubmit();
      });
      formName.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          noteSubmit();
        }
      });
      function noteSubmit() {
        noteManager.addNote(formName.value, note);
        form.remove();
      }
    });

    noteName.addEventListener('click', (item) => {
      if (noteName.getAttribute('selected') != 'true') {
        updateNoteContent(note, noteName);
      }
    });
    noteName.addEventListener('dblclick', (e) => {
      noteName.setAttribute('contentEditable', 'true');
      noteName.focus();
    });

    noteName.addEventListener('keydown', (e) => {
      if (noteName.getAttribute('contentEditable')) {
        if (e.key == 'Enter') {
          console.table(note);
          noteName.setAttribute('contentEditable', 'false');
          noteManager.updateNoteName(note, noteName.textContent);
          console.table(note);
        }
      }
    });
  };

  function updateNoteContent(note, noteName) {
    //TEST
    domManager.deleteElement('noteCards', true);
    const noteBody = document.querySelector('.noteBody');
    const noteContent = domManager.createElementDOM('div', 'noteContent');
    const noteCards = domManager.createElementDOM('div', 'noteCards');
    noteBody.appendChild(noteCards);

    createToolMenu(noteCards, note);
    noteCards.appendChild(noteContent);
    document.querySelectorAll('.noteName').forEach((item) => {
      item.classList.remove('underlined');
      item.setAttribute('selected', 'false');
    });
    noteName.classList.add('underlined');
    noteName.setAttribute('selected', 'true');
    for (let card in note.cardList) {
      addCardDOM(note, card, document.querySelector('.noteContent'));
    }
  }
  const addCardDOM = (note, card, domLocation) => {
    const cardDOM = domManager.createElementDOM('div', 'card', card);
    domLocation.appendChild(cardDOM);
    cardDOM.style.width = '300px';
    cardDOM.style.height = '300px';
    console.log(note['cardList'][card].location[0]);
    cardDOM.style.left = `${note.cardList[card].location[0]}px`;
    cardDOM.style.top = `${note.cardList[card].location[1]}px`;
    const header = domManager.createElementDOM('div', 'cardHeader');
    cardDOM.appendChild(header);

    cardDOM.setAttribute('draggable', 'true');

    const boundingRect = domLocation.getBoundingClientRect();

    domLocation.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    domLocation.ondrop = (e) => {
      e.preventDefault();

      const cardX = e.dataTransfer.getData('cardX');
      const cardY = e.dataTransfer.getData('cardY');
      const cardTarget = e.dataTransfer.getData('cardDOM');
      console.log(cardTarget);
      const cardList = domLocation.querySelectorAll(`.card.${cardTarget}`);
      const targetDOM = cardList[0];
      note.cardList[cardTarget].location[0] = e.x - boundingRect.x - cardX;
      note.cardList[cardTarget].location[1] = e.y - boundingRect.y - cardY;
      console.table({ Card: card, Location: note.cardList[card].location });
      targetDOM.style.left = `${note.cardList[cardTarget].location[0]}px`;
      targetDOM.style.top = `${note.cardList[cardTarget].location[1]}px`;
    };
    cardDOM.addEventListener('dragstart', (e) => {
      const boundingCardRect = cardDOM.getBoundingClientRect();
      let cardX = e.x - boundingCardRect.x;
      let cardY = e.y - boundingCardRect.y;
      e.dataTransfer.setData('cardX', cardX);
      e.dataTransfer.setData('cardY', cardY);
      e.dataTransfer.setData('cardDOM', e.target.classList[1]);
    });

    const footer = domManager.createElementDOM('div', 'cardFooter');
    cardDOM.appendChild(footer);

    addCardTitle(note.cardList[card], header, card);
    addCardTextbox(note.cardList[card], footer, 'Test');
  };
  const addCardTitle = (card, location, text) => {
    const title = domManager.createElementDOM('div', 'cardTitle');
    header.appendChild(title);
    title.textContent = note.cardList[card].name;
  };
  const addCardTextbox = (card, location, text) => {
    const textBox = domManager.createElementDOM('textarea', 'cardTextBox');
    location.appendChild(textBox);
    textBox.innerHTML = card.content[`textBox`];

    textBox.addEventListener('keyup', (e) => {
      card.content.textBox = textBox.value;
    });
  };
  const addForm = (e) => {
    const formContainer = domManager.createElementDOM('div', 'formContainer');
    formContainer.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    document.querySelector('.siteBody').appendChild(formContainer);

    const form = document.createElement('form');
    formContainer.appendChild(form);
    const formNameLabel = document.createElement('label');
    formNameLabel.setAttribute('for', 'Name');
    formNameLabel.textContent = 'Name:';
    form.appendChild(formNameLabel);
    const formName = domManager.createElementDOM('input', 'formName');
    formName.type = 'text';
    formName.classList.add('Name');

    form.appendChild(formName);
    const formButton = domManager.createElementDOM('input', 'formButton');

    formButton.type = 'button';
    formButton.value = 'Submit';
    form.appendChild(formButton);

    formName.focus();
    formName.select();

    const mediaQuery = window.matchMedia('(min-width: 900px)');
    if (mediaQuery.matches) {
      const siteBody = document.querySelector('.siteBody');
      if (siteBody.offsetWidth - formContainer.offsetWidth > e.x) {
        // Left side of Window
        formContainer.style.top = `${e.y}px`;
        formContainer.style.left = `${e.x}px`;
      } else {
        // right side of window
        formContainer.style.top = `${e.y}px`;
        formContainer.style.left = `${e.x - formContainer.offsetWidth}px`;
      }
    } else {
      formContainer.style.left = `0px`;
      formContainer.style.top = `0px`;
    }

    return formContainer;
  };
  return {
    addDirectory,
    addCardDOM,
    addForm,
  };
})();

function addDuplicateNumber(stringItem, itemList) {
  let count = 0;
  let countStart = 0;
  let checkNoMatch = 0;
  while (!checkNoMatch) {
    for (let i = 0; i < Object.keys(itemList).length; i += 1) {
      const item = Object.keys(itemList)[i];
      if (item === stringItem) {
        count += 1;
        if (!countStart) {
          stringItem += '0';
          stringItem += count;
          countStart = 1;
        } else {
          stringItem = stringItem.substring(0, stringItem.lastIndexOf('0') + 1);
          stringItem += count;
        }
      }
    }
    checkNoMatch = 1;
    for (let item in itemList) {
      if (item == stringItem) {
        checkNoMatch = 0;
      }
    }
  }
  return stringItem;
}

export { noteManager, noteDom };
