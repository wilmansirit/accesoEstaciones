
export class Acceso {
    id: number;
    fechaCreacion: string;
    numSolicitud: string;
    idEstacion: string;
    nombreEstacion: string;
    nombresApellidosSolicitante: string;
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
