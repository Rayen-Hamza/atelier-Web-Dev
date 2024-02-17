
function genererNombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function jeuDuChiffreCache(difficulte) {
    let nombreATrouver;
    let nombreTentatives;
  
    
    switch (difficulte) {
      case "Facile":
        nombreATrouver = genererNombreAleatoire(1, 10);
        nombreTentatives = 3;
        break;
      case "Intermédiaire":
        nombreATrouver = genererNombreAleatoire(1, 50);
        nombreTentatives = 5;
        break;
      case "Difficile":
        nombreATrouver = genererNombreAleatoire(1, 100);
        nombreTentatives = 7;
        break;
      default:
        alert("Niveau de difficulté invalide !");
        return;
    }
  
    let tentative = 0;
    let trouve = false;
  
    while (tentative < nombreTentatives && !trouve) {
      let tentativeUtilisateur = parseInt(prompt(`Tentative ${tentative + 1}/${nombreTentatives} : Entrez un nombre entre 1 et ${difficulte === "Facile" ? 10 : (difficulte === "Intermédiaire" ? 50 : 100)}`));
      if (isNaN(tentativeUtilisateur)) {
        alert("Veuillez entrer un nombre valide !");
        continue;
      }
  
      if (tentativeUtilisateur === nombreATrouver) {
        alert("Félicitations, vous avez trouvé le nombre !");
        trouve = true;
      } else if (tentativeUtilisateur < nombreATrouver) {
        alert("Le nombre est plus grand !");
      } else {
        alert("Le nombre est plus petit !");
      }
  
      tentative++;
    }
  
    if (!trouve) {
      alert(`Désolé, vous avez épuisé toutes vos tentatives. Le nombre était ${nombreATrouver}.`);
    }
  
   
    let rejouer = confirm("Voulez-vous jouer à nouveau ?");
    if (rejouer) {
      let niveau = prompt("Choisissez le niveau de difficulté (Facile, Intermédiaire, Difficile) :");
      jeuDuChiffreCache(niveau);
    }
  }
  
 
  let niveau = prompt("Choisissez le niveau de difficulté (Facile, Intermédiaire, Difficile) :");
  jeuDuChiffreCache(niveau);
  
