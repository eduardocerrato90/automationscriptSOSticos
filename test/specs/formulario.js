import {personas} from '../../info'
//import {canton, cedula, centro, distrito, emailAddress, otraSenas, provincia, submitButton, telefono } from '../pageobjects/form';
import {obetnerLocations} from '../pageobjects/helpers';
import Form_Page from '../pageobjects/form'

const formpage = new Form_Page()

before(function() {
    browser.url('https://dev.sosticos.com/');
    $("[type='submit']").click();
    browser.pause(1000);
    $("[type='text']").setValue('test@test.com');
    $("[type='button']").click();
    browser.pause(20000);
})

console.log(personas);

for(let persona of personas){
    describe('Automatizar el registro de beneficiarios', () => {
        it('debe ingresar la data de todos los beneficiarios uno por uno', () => {
            //browser.pause(2000);
            browser.url('https://dev.sosticos.com/beneficiaries/create');
            browser.pause(1000);
            //emailAddress.setValue('eduardodcerrato@gmail.com');
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN');
            formpage.emailAddress.setValue(persona.email);
            formpage.name.setValue(persona.nombre);
            formpage.cedula.setValue(persona.cedula);
            formpage.telefono.setValue(persona.telefono);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 2');
            const {provincia,canton,distrito} = obetnerLocations(persona);
            console.log('ESTO ES MI INDICE'  + provincia);
            console.log('ESTO ES EL OBTNER EL CANTON', canton);
            console.log('ESTO ES EL INDICE DEL DISTRITO  ', distrito);
            formpage.provincia.selectByIndex(provincia);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 2.2');
            //browser.pause(6000);
            console.log(persona.canton);
            formpage.canton.selectByIndex(canton);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 3');
            //browser.pause(6000);
            formpage.distrito.selectByIndex(distrito);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 3.2');
            //browser.pause(6000);
            formpage.otraSenas.setValue(persona.otrasSenas);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 4');
            //browser.pause(3000);
            //formpage.centro.selectByIndex(obtenerIndiceDeCentro(personas[0].centroDeAcopio));
            formpage.centro.setValue(persona.centroDeAcopio);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 5');
            browser.keys(['\uE015','\uE007']);
            //browser.pause(3000);
            formpage.estado.moveTo();
            formpage.estado.selectByIndex(1);
            //browser.pause(3000);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 6');
            formpage.necesidades.setValue(persona.necesidades);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 7');
            // browser.pause(3000);
            formpage.submitButton.click();
            browser.pause(2000);
            console.log('ESTO SIGNIFICA QUE VAMOS BIEN parte 8');

            expect($('#client-snackbar')).to.exist;
            var resultado = $('#client-snackbar').getText()
            expect(resultado).to.equal('Beneficiario creado');
        });
    });
}

