const urlBox = $('#url-input');
const submitButton = $('#submit');

submitButton.on('click', () => {
  console.log($('#url-input').val());
});