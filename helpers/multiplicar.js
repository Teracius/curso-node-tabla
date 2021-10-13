const fs = require("fs");
const colors = require('colors');
colors.enable();
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

const crearArchivo = async(base = 5,l,h=10) => {
    try{
  console.log("================");
  console.log("Tabla del: ".trap, base);
  console.log("================");
  let salida = "";

  for (let i = 1; i <= h; i++) {

    salida += `${base} x ${i} = ${base * i}\n`;
  }
if(l){
  console.log(colors.info(salida));
}else{
  console.log(colors.error('No se imprimo papu'))
}

  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
//   console.log(`tabla-${base}.txt creado`);
return `tabla-${base}.txt`;
    }catch(err){
        throw err;
    }
};

// const crearArchivo = (base = 5) => {
//   const promesa = new Promise((resolve, reject) => {
//     console.log("================");
//     console.log("Tabla del: ", base);
//     console.log("================");
//     let salida = "";

//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }
//     console.log(salida);

//     //   console.log(salida);
//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     // console.log(`tabla-${base}.txt creado`);

//     resolve(`tabla-${base}.txt creado`);
//   });
//   return promesa;
// };

module.exports = {
  crearArchivo,
};
