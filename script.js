// Simple form handler for MEDIA MAD MEN
function mmmSendMessage(event) {
  event.preventDefault();
  document.querySelector('.mmm-contact-form').reset();
  document.getElementById('mmm-form-success').style.display = 'block';
  setTimeout(function() {
    document.getElementById('mmm-form-success').style.display = 'none';
  }, 4000);
  return false;
} 