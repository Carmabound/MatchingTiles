const log = (text) => {
    const parent = document.querySelector('#events');
    const el = document.createElement('li');
    el.innerHTML = text;

    parent.appendChild(el);
    parent.scrollTop = parent.scrollHeight;
};

const onChatSubmitted = (sock) => (e) => {
    e.preventDefault();

    const input = document.querySelector('#chat');
    const text = input.value;
    input.value = '';

    sock.emit('message', text);
};

(() => {
    //log('welcome');

    //const sock = io();
    const sock = io('http://192.168.0.125:8080');// home internet


    sock.on('message', log);

    document
        .querySelector('#chat-form')
        .addEventListener('submit', onChatSubmitted(sock));
})();