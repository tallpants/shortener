const urlBox = $('#url-input');
const submitButton = $('#submit');

submitButton.on('click', () => {
  $.ajax({
    type: 'POST',
    url: 'https://shrter.herokuapp.com/api/shorten',
    data: JSON.stringify({ url: urlBox.val() }),
    contentType: 'application/json; charset=utf-8',
    success: () => { },
    error: () => { } 
  });
});


function ajaxSuccess(data) {
  
}