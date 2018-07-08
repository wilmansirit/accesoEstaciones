
export class Acceso {

    fechaCreacion: string;
    numSolicitud: string;
    idEstacion: string;
    nombreEstacion: string;
    nombresApelidosSolicitante: string;
    cedulaSolicitante: string;
    fechasSolicitud: {
        desde: string;
        hasta: string;
    };
    nombresApellidosResponsable: string;
    cedulaResponsable: string;
    vehiculo: {
        marca: string; 
        modelo: string; 
        color: string; 
        placas: string;
    };
    aprobador: string;
    codigoAprobado: string;
    aprobacion: boolean;
}