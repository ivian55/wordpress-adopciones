document.addEventListener("DOMContentLoaded", function () {

  var mapas = {
    general: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-01.png",
    ibarra: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-02.png",
    tena: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-03.png",
    ambato: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-04.png",
    portoviejo: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-05.png",
    babahoyo: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-06.png",
    cuenca: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-07.png",
    loja: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-08.png",
    quito: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-09.png",
    guayaquil: "https://www.desarrollohumano.gob.ec/wp-content/uploads/2026/05/mapa-1Adopciones-web-10.png"
  };

  var datos = {
    quito: { ciudad: "QUITO", cobertura: "Pichincha", telefono: "02 2905004" },
    ibarra: { ciudad: "IBARRA", cobertura: "Carchi - Esmeraldas / Imbabura - Sucumbíos", telefono: "06 2641246 Ext. 3070" },
    tena: { ciudad: "TENA", cobertura: "Pichincha excepto Quito / Napo - Orellana", telefono: "06 2847454 Ext. 3757" },
    ambato: { ciudad: "AMBATO", cobertura: "Pastaza - Cotopaxi / Tungurahua - Chimborazo", telefono: "03 2410377 - 03 2410306 Ext. 105 - 107" },
    portoviejo: { ciudad: "PORTOVIEJO", cobertura: "Manabí - Santo Domingo de los Tsáchilas", telefono: "05 2564336 - 05 2563577 / 05 2564190 Ext. 4564" },
    babahoyo: { ciudad: "BABAHOYO", cobertura: "Los Ríos - Santa Elena / Bolívar - Galápagos - Guayas", telefono: "05 2735872" },
    cuenca: { ciudad: "CUENCA", cobertura: "Azuay - Cañar / Morona Santiago", telefono: "07 2888421 - 07 2888413 Ext. 131 - 132" },
    loja: { ciudad: "LOJA", cobertura: "El Oro - Loja / Zamora Chinchipe", telefono: "07 2545533 - 07 2581064 Ext. 141" },
    guayaquil: { ciudad: "GUAYAQUIL", cobertura: "Guayas - Durán / Samborondón", telefono: "04 3714780 Ext. 10506 - 10505" }
  };

  var mapa = document.getElementById("adopMapaPrincipal");
  var cards = document.querySelectorAll(".adop-uta-card");
  var ciudad = document.getElementById("adopInfoCiudad");
  var cobertura = document.getElementById("adopInfoCobertura");
  var telefono = document.getElementById("adopInfoTelefono");

  if (!mapa || !cards.length || !ciudad || !cobertura || !telefono) {
    return;
  }

  function activarUTA(clave) {
    if (!datos[clave] || !mapas[clave]) return;

    cards.forEach(function (card) {
      card.classList.toggle("is-active", card.getAttribute("data-uta") === clave);
    });

    mapa.classList.add("is-changing");

    setTimeout(function () {
      mapa.src = mapas[clave];
      mapa.alt = "Mapa de cobertura UTA " + datos[clave].ciudad;

      ciudad.textContent = datos[clave].ciudad;
      cobertura.textContent = datos[clave].cobertura;
      telefono.textContent = datos[clave].telefono;

      mapa.classList.remove("is-changing");
    }, 160);
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      activarUTA(card.getAttribute("data-uta"));
    });
  });

});