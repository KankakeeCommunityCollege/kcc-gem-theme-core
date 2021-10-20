function createMessage() {
  const boxDiv = document.createElement('div');
  const backgroundDiv = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const button = document.createElement('button');
  const text1 = '<strong>Alert:</strong>&nbsp;You are using an outdated browser.'
  const text2 = 'To ensure <em>www.kcc.edu</em> displays and behaves correctly, please download and use a modern browser: <a href="https://browsehappy.com" target="_blank" rel="noopener noreferrer">browsehappy.com</a>';
  const pStyles = 'color:#721c24;font-size:1.5rem;';
  const buttonJs = 'var bg=document.getElementById(\'bg\');var div=document.getElementById(\'box\');bg.parentNode.removeChild(bg);box.parentNode.removeChild(box);window.sessionStorage.setItem(\'browserWarned\', \'true\');'
  const styles = {
    p1: pStyles,
    p2: pStyles,
    boxDiv: 'position:fixed;top:15%;left:0;right:0;background-color:#f8d7da;border-width:2px;border-style:solid;border-color:#721c24;border-radius:10px;max-width:800px;z-index:2000;',
    backgroundDiv: 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:2000;background-color:#000;opacity:.75;',
    button: 'position:absolute;bottom:1.5rem;right:1.5rem;',
  }

  boxDiv.id = 'box';
  backgroundDiv.id = 'bg';

  button.classList.add('btn', 'btn-outline-primary')
  button.setAttribute('role', 'button');
  button.setAttribute('onclick', buttonJs);
  button.style = styles.button;
  button.innerHTML = 'Understood';

  p1.style = styles.p1;
  p1.innerHTML = text1;
  p2.style = styles.p2;
  p2.classList.add('mb-5');
  p2.innerHTML = text2;
  boxDiv.style = styles.boxDiv;
  boxDiv.classList.add('mx-2', 'p-3', 'mx-md-3', 'mx-lg-auto', 'p-md-4', 'p-lg-5');
  backgroundDiv.style = styles.backgroundDiv;
  boxDiv.appendChild(p1);
  boxDiv.appendChild(p2);
  boxDiv.appendChild(button);
  document.body.insertAdjacentElement('afterbegin', boxDiv);
  document.body.insertAdjacentElement('afterbegin', backgroundDiv);
}

document.addEventListener('DOMContentLoaded', function () {
  const storage = window.sessionStorage;
  !storage.getItem('browserWarned') ? createMessage() : null;
});