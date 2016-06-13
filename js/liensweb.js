var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

listeLiens.forEach(function (lien) {

    var divElt = document.createElement("div");
    divElt.classList.add("lien");

    var titreLien = document.createElement("a");
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.textContent = lien.titre;
    titreLien.href = lien.url;
    // var titreEpais = document.createElement("strong");
    //titreEpais.appendChild(titreLien);
    //divElt.appendChild(titreEpais);
    titreLien.style.fontWeight = "bold";
    divElt.appendChild(titreLien);

    var adresseLien = document.createElement("span");
    adresseLien.textContent = lien.url;
    adresseLien.style.marginLeft = "0.5%";
    divElt.appendChild(adresseLien);

    var retourLigne = document.createElement("br");
    var auteurLien = document.createElement("span");
    auteurLien.textContent = "Ajouté par " + lien.auteur;
    divElt.appendChild(retourLigne);
    divElt.appendChild(auteurLien);

    document.getElementById("contenu").appendChild(divElt);

});