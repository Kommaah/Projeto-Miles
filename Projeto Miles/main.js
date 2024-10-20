document.getElementById('expand-button').addEventListener('click', function() {
   const additionalButtons = document.getElementById('additional-buttons');
   if (additionalButtons.style.display === 'none') {
       additionalButtons.style.display = 'flex';
   } else {
       additionalButtons.style.display = 'none';
   }
});