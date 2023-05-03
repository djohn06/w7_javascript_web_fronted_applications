const NotesModel = require('./notesModel')

console.log("The notes app is running");

model = new NotesModel
  model.addNotes('Buy milk');
  model.addNotes('Go to the gym');
console.log(model.getNotes());