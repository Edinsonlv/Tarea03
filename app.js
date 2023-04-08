const lluviaDeIdeasCena = require('./library.js');

async function announceDinner() {
  const comida = await lluviaDeIdeasCena();
  console.log(`voy a hacer${comida} para la cena.`);
}



function nativePromiseDinner() {
    lluviaDeIdeasCena().then((comida) => {
        console.log(`voy a hacer${comida} para la cena.`);
    });
  }

  nativePromiseDinner()