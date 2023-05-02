class NotesModel {
  constructor() {
    this.model = [];
  }

  getNotes() {
    return this.model;
  }

  addNotes(notes) {
    return this.model.push(notes);
  }

  reset() {
    this.model = [];
  }
}

module.exports = NotesModel;