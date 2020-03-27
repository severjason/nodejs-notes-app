const {addNote, removeNote, listNotes, readNote} = require('./notes');
const yargs = require('yargs');


yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({title, body}) => addNote(title, body),
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title to be removed',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({title}) => removeNote(title),
});

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({title}) => readNote(title),
});

yargs.command({
  command: 'list',
  describe: 'Notes list',
  handler: () => listNotes(),
});


yargs.parse();
