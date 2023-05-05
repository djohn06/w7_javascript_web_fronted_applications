class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    const message = document.querySelector('#message-input').value;
    const messageEl = document.createElement('div');
    console.log('Thanks for clicking me!');

    messageEl.id = 'message';
    messageEl.textContent = message;

    document.querySelector('#message-input').value = '';

    document.querySelector('#main-container').append(messageEl);
  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;