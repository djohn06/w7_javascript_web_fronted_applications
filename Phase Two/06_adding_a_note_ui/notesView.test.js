/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('views', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })

  it('returns list of notes', () => {
    // Arrange
    view = new NotesView
    model = new NotesModel
    // Add
    model.addNotes("The first note in the list");
    model.addNotes("The second note in the list");
    view.displayNotes();
    // Assert
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })
})