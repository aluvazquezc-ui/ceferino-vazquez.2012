function datoCurioso() {
  let datos = [
    '🏆 Ganó el Mundial con Argentina en 2022.',
    '⚽ Tiene más de 900 goles oficiales.',
    '🥇 Ganó ocho Balones de Oro.',
    '🇦🇷 Es el máximo goleador de la Selección Argentina.',
    '😊 Usa la camiseta número 10.',
  ];

  let numero = Math.floor(Math.random() * datos.length);

  document.getElementById('dato').innerHTML = datos[numero];
}
