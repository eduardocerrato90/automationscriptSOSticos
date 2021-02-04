const {google} = require('googleapis');
const keys = require('./keys.json');
const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

let fs = require('fs');
//let info = fs.readFileSync('info.json');
//console.log(info);


client.authorize(function(err,tokens0){

    if(err){
        console.log(err);
        return;
    } else {
        console.log('Conected');
        gsrun(client);
    }
});

async function gsrun(cl){

    const gsapi = google.sheets({version:'v4', auth: cl});

    const opt = {
        spreadsheetId: keys.sheetId,
        range:'Listado'
    };
    console.log("VALIDATING SHEET ID" , keys.sheetId);
    let data = await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
    let mapeados = [];
    const arreglofinal = data.data.values.slice(1);
    arreglofinal.forEach(function(valor){
            const personaTemp = {
                email: valor[0],
                nombre: valor[1],
                cedula: valor[2],
                telefono: valor[3],
                provincia: valor[4],
                canton: valor[5],
                distrito: valor[6],
                otrasSenas: valor[7],
                centroDeAcopio: valor[8],
                estado: valor[9],
                necesidades: valor[10]
            };
         mapeados.push(personaTemp);
    })
    let sample = JSON.stringify(mapeados, null, 2);
    //console.log(sample);
    fs.writeFileSync('info.js', "export const personas = " + sample, console.log('finalizado'));

}

//In development process
// const updateOptions = {
//     spreadsheetId: keys.sheetID,
//         range:'Listado',
//         valueInputOption: 'USER_ENTERED',
//         resource: { values: userStatus}
// };

// let response = await gsapi.spreadsheets.values.update(updateOptions);