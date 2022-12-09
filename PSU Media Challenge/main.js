let button = document.querySelector('button');

function handleClick(event) {
  var email = prompt('Enter your pdx email: ');
  if (email === null) {
    return;
  } else if (email == '') {
    document.write('Enter a valid email address.');
    return;
  } else {
    document.write('Thank you for RSVPing to the Student Media Exhibition!');
    return;
  }
}

button.addEventListener('click', handleClick);
