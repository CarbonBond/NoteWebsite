import './baseSite.css';
import { noteManager, noteDom } from './note.js';

const main = () => {
  const container = document.querySelector('#container');
  const siteBody = document.createElement('div');
  siteBody.classList.add('siteBody');
  container.appendChild(siteBody);

  // hamburger button for Note Directory
  const noteDirectoryButton = document.createElement('div');
  noteDirectoryButton.classList.add('noteDirectoryButton');
  siteBody.appendChild(noteDirectoryButton);

  // Note directory holder.
  const noteDirectoryContainer = document.createElement('div');
  noteDirectoryContainer.classList.add('noteDirectoryContainer');
  siteBody.appendChild(noteDirectoryContainer);

  // Note directory.
  const noteDirectory = document.createElement('div');
  noteDirectory.classList.add('noteDirectory');
  noteDirectoryContainer.appendChild(noteDirectory);

  // Note Container
  const noteContainer = document.createElement('div');
  noteContainer.classList.add('noteContainer');
  noteDirectory.appendChild(noteContainer);

  // noteBody
  const noteBody = document.createElement('div');
  noteBody.classList.add('noteBody');
  siteBody.appendChild(noteBody);

  noteDirectoryButton.addEventListener('click', () => {
    noteDirectoryContainer.classList.toggle('hidden');
  });

  const noteAddContainer = document.createElement('div');
  noteDirectory.appendChild(noteAddContainer);
  noteAddContainer.classList.add('noteAddContainer');

  const addDir = document.createElement('div');
  noteAddContainer.appendChild(addDir);
  addDir.textContent = 'Add';
  addDir.classList.add('add');
  addDir.setAttribute('note', 'root');
  addDir.addEventListener('click', (e) => {
    const form = noteDom.addForm(e);
    const formButton = form.querySelector('.formButton');
    const formName = form.querySelector('.formName');
    function noteSubmit() {
      noteManager.addNote(formName.value);
      form.remove();
    }
    formButton.addEventListener('click', () => {
      noteSubmit();
    });
    formName.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        noteSubmit();
      }
    });
  });
};

export default main;
