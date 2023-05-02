const NotesModel = require('./notesModel');

describe("notes_app", () => {
  it('returns empty array', () => {
    model = new NotesModel;
    expect(model.getNotes()).toEqual([]);
  })

  it('adds a note to the array', () => {
    model = new NotesModel;
    model.addNotes('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  })

  it('resets notes array', () => {
    model = ['Buy milk', 'Go to the gym'];
    model.reset();
    expect(getNotes()).toEqual
  })
})