/**
 * @jest-environment jsdom
 */

const fs = require('fs'); // 'fs' is a built in node module which is required to read non-JavaScript files.
const View = require('./view');

describe('Page view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  })

  it('displays 2 paragraphs', () => {
    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('displays a third paragraph', () => {
    // Arrange
    const view = new View();
    // Act
    view.addParagraph();
    // Assert
    expect(document.querySelectorAll('p').length).toBe(3);
  })

  it('clears all paragraphs', () => {
    // Arrange
    const view = new View();
    // Act
    view.clearParagraphs();
    // Assert
    expect(document.querySelectorAll('p').length).toBe(0);
  })
});