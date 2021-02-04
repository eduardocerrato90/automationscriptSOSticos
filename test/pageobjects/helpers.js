//import {cantonesId, distritoId, centroId, provinciaId} from './dropdownId';
import {all, provincias, cantones, distritos} from './locations';

export function obtenerIndiceDeCanton(provincia, canton) {
    let indice;
    const cantonesKeys = Object.keys(all[provincia]);
    cantonesKeys.map(function(key, index) {
        const valor = cantones[key];
        if (valor.toLowerCase() === canton.toLowerCase()) {
            indice = key 
        }
      });
    return indice
}

export function obtenerIndiceDeDistrito(provincia, canton, distrito) {
    let indice;
    const distritosKeys = Object.keys(all[provincia][canton]);
    distritosKeys.map(function(key, index) {
        const valor = distritos[key];
        if (valor.toLowerCase() === distrito.toLowerCase()) {
            indice = key 
        }
      });
    return indice
}

export function obtenerIndiceDeProvincia(provincia) {
    let indice;
    Object.keys(provincias).map(function(key, index) {
        const valor = provincias[key];
        if (valor.toLowerCase() === provincia.toLowerCase()) {
            indice = key 
        }
      });
    return indice
}

export function obetnerLocations(persona) {
    const indiceProvincia = obtenerIndiceDeProvincia(persona.provincia);
    const indiceCanton = obtenerIndiceDeCanton(indiceProvincia, persona.canton);
    const indiceDistrito = obtenerIndiceDeDistrito(indiceProvincia, indiceCanton, persona.distrito);
    return {
        provincia: parseInt(indiceProvincia),
        canton: parseInt(indiceCanton.substring(1)),
        distrito: parseInt(indiceDistrito.substring(3)),
    }
}