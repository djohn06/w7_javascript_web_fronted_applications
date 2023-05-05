class NotesModel {
  constructor() {
    this.model = [];
  }

  getNotes() {
    return this.model;
  }

  addNote(notes) {
    return this.model.push(notes);
  }

  reset() {
    this.model = [];
  }
}

module.exports = NotesModel;