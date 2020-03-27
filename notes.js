const fs = require('fs');
const {success, error, important} = require('./mgs');

const FILE_NAME = 'notes.json';

const getNotes = () => console.log('Your notes...');

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync(FILE_NAME).toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(FILE_NAME, dataJSON);
};

const addNote = (title = '', body = '') => {
  const notes = loadNotes();
  if (!notes.some(note => note.title === title)) {
    saveNotes([...notes, {title, body}]);
    console.log(success('Note added!'));
  } else {
    console.log(error('This title taken'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  if (filteredNotes.length !== notes.length) {
    saveNotes(notes.filter(note => note.title !== title));
    console.log(success('Note removed!'));
  } else {
    console.log(error('Note not found!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length) {
    console.log(important('Your notes:'));
    notes.forEach(({title}, index) => {
      console.log(`${index + 1}. ${title}`);
    })
  } else {
    console.log(important('No notes for now...'));
  }
};

const readNote = (title) => {
  const note =loadNotes().find(note => note.title === title);
  debugger;
  if (note) {
    console.log(important(note.title));
    console.log(note.body);
  } else {
    console.log(error('Note not found!'));
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
