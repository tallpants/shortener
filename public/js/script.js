const urlBox = $('#url-input');
const submitButton = $('#submit');
const successBox = $('#success-alert-box');
const failureBox = $('#failure-alert-box');

submitButton.on('click', () => {
  $.ajax({
    type: 'POST',
    url: 'https://shrter.herokuapp.com/api/shorten',
    data: JSON.stringify({ url: urlBox.val() }),
    contentType: 'application/json; charset=utf-8',
    success: (data) => {
      if (!successBox.attr('hidden')) {
        successBox.attr('hidden', true);
      }

      let url = 'https://shrtner.herokuapp.com/' + key;
      successBox.text('<strong>Success:</strong> <a href="' + url + '">' + url + '</a>');
      successBox.removeAttr('hidden');
    },
    error: () => { } 
  });
});

// submitButton.on('click', () => {
//   if (successBox.attr('hidden')) {
//     successBox.removeAttr('hidden');
//   } else {
//     successBox.attr('hidden', true);
//   }
// });


function ajaxSuccess(data) {

}