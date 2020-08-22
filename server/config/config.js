//=================================//
//CONFUGURANDO A PORTA DE USO      //
//=================================//
process.env.PORT = process.env.PORT || 3000;

//=================================//
//entorno
//=================================//

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================================//
//base de dados
//=================================//

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = 'mongodb+srv://marcioho:An@jul1a@cluster0.7ojww.mongodb.net/cafe';
}

process.env.URLDB = urlDB;