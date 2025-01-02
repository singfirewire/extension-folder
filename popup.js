document.getElementById('openDevice').addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://101-iot.vercel.app/TRC/' });
});
