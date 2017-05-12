const urlBox = $('#url-input');
const submitButton = $('#submit');
const successBox = $('#success-alert-box');
const errorBox = $('#failure-alert-box');

submitButton.on('click', () => {
  $.ajax({
    type: 'POST',
    url: 'https://shrter.herokuapp.com/api/shorten',
    data: JSON.stringify({ url: urlBox.val() }),
    contentType: 'application/json; charset=utf-8',
    success: ajaxSuccess,
    error: ajaxError
  });
});

function ajaxSuccess(data) {
  successBox.attr('hidden', true);
  errorBox.attr('hidden', true);

  let url = 'https://shrtner.herokuapp.com/' + data.key;
  successBox.html('<strong>Success: </strong> <a href="' + url + '"> ' + url + ' </a>');
  successBox.removeAttr('hidden');
}

function ajaxError(data) {
  successBox.attr('hidden', true);
  errorBox.html('<strong>Error: </strong> Expected a URL');
  errorBox.removeAttr('hidden');
}