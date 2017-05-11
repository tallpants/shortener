const urlBox = $('#url-input');
const submitButton = $('#submit');

submitButton.on('click', () => {
  let requestBody = { 'url': urlBox.val() };
  $.post('https://shrter.herokuapp.com/api/shorten', requestBody, (data) => {
    console.log(typeof data);
    console.log(data);
  }, 'json');
});