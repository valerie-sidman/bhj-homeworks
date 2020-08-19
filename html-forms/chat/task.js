const responseMessages = [
  'Рандомное сообщение №1',
  'Рандомное сообщение №2',
  'Рандомное сообщение №3',
  'Рандомное сообщение №4',
  'Рандомное сообщение №5'
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
})

const chatWidgetInput = document.querySelector('.chat-widget__input');
chatWidgetInput.addEventListener('keydown', (event) => {
  if (event.keyCode == 13) {
    if (chatWidgetInput.value != '') {
      const time = new Date();
      const hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
      const minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
      const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
      const messages = document.querySelector( '.chat-widget__messages' );
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${hour}:${minute}:${seconds}</div>
          <div class="message__text">
            ${chatWidgetInput.value}
          </div>
        </div>
      `;
      chatWidgetInput.value = '';
      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${hour}:${minute}:${seconds}</div>
          <div class="message__text">
            ${responseMessages[getRandomInt(0, 5)]}
          </div>
        </div>
      `;
    }
  }
})
