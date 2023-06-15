// Récupérer les références des éléments du jeu
const playerHealthElement = document.getElementById('player-health');
const monsterHealthElement = document.getElementById('monster-health');
const attackBtn = document.getElementById('attack-btn');
const specialAttackBtn = document.getElementById('special-attack-btn');
const healBtn = document.getElementById('heal-btn');
const giveUpBtn = document.getElementById('give-up-btn');

// Variables pour stocker les points de vie du joueur et du monstre
let playerHealth = 100;
let monsterHealth = 100;

// Fonction pour gérer l'attaque du joueur
function attackMonster() {
  const damage = Math.floor(Math.random() * 10) + 1; // Dommages aléatoires entre 1 et 10
  monsterHealth -= damage;
  if (monsterHealth <= 0) {
    monsterHealth = 0;
    endGame('Player wins!');
  }
  monsterHealthElement.textContent = monsterHealth;
}

// Fonction pour gérer l'attaque spéciale du joueur
function specialAttackMonster() {
  const minDamage = 10;
  const maxDamage = 20;
  const growDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  monsterHealth -= growDamage;
  if (monsterHealth <= 0) {
    monsterHealth = 0;
    endGame('Player wins!');
  }
  monsterHealthElement.textContent = monsterHealth;
}
  // Logique pour l'attaque spéciale du joueur...


// Fonction pour gérer la guérison du joueur
function healPlayer() {
  const healAmount = 10;

  if (playerHealth === 100) {
    return;
  }

  playerHealth += healAmount;

  if (playerHealth > 100) {
    playerHealth = 100;
  }

  playerHealthElement.textContent = playerHealth;
}

function endGame(message) {
  // Logique pour afficher le message de fin de jeu...
}


// Événements de clic pour les boutons d'attaque
attackBtn.addEventListener('click', attackMonster);
specialAttackBtn.addEventListener('click', specialAttackMonster);
healBtn.addEventListener('click', healPlayer);
giveUpBtn.addEventListener('click', function () {
  endGame('Monster wins!');
});

