function Monchromebook() {

    alert("bonjour sur le site des chromebook");
    alert("vous voulez un chromebook ?");
    alert("si oui vous vous trouvez au bon endroit");
    alert("bonne visite sur le site")
  }
  var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value == 'Démarrer la machine') {
    btn.value = 'Arrêter la machine';
    txt.textContent = 'La machine est démarrée !';
  } else {
    btn.value = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}
