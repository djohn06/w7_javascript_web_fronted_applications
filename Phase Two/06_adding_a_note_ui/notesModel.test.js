const NotesModel = require('./notesModel');

describe("notes_app", () => {
  it('returns empty array', () => {
    model = new NotesModel;
    expect(model.getNotes()).toEqual([]);
  })

  it('adds two notes to the array', () => {
    model = new NotesModel;
    model.addNotes('Buy milk');
    model.addNotes('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('resets notes array', () => {
    model = new NotesModel
    model.addNotes('Buy milk');
    model.addNotes('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
})