import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const accesos = [
            {
                id: 1,
                fechaCreacion: '17/03/2018',
                numSolicitud: '458721546',
                idEstacion: '17025',
                nombreEstacion: 'MTSO Barquisimeto',
                nombresApellidosSolicitante: 'Adrian Montes',
                cedulaSolicitante: '9525657',
                fechasSolicitud: {
                    desde: '21/07/2018',
                    hasta: '22/07/2018',
                },
                nombresApellidosResponsable: 'Lermit Martinez',
                cedulaResponsable: '12456789',
                vehiculo: {
                    marca: 'Ford',
                    modelo: 'Exolorer',
                    color: 'Negra',
                    placas: 'AB500RK',
                },
                aprobador: 'Richmar Lizcano',
                codigoAprobador: 'E10235',
                aprobacion: true
            },
            {
                id: 2,
                fechaCreacion: '20/05/2018',
                numSolicitud: '456528297',
                idEstacion: '10025',
                nombreEstacion: 'Petare Sur',
                nombresApellidosSolicitante: 'Sebastian Reyes',
                cedulaSolicitante: '14568787',
                fechasSolicitud: {
                    desde: '01/05/2018',
                    hasta: '04/05/2018',
                },
                nombresApellidosResponsable: 'Luis Acosta',
                cedulaResponsable: '4569874',
                vehiculo: {
                    marca: 'Chevrolet',
                    modelo: 'Century',
                    color: 'Marron',
                    placas: 'IAZ255',
                },
                aprobador: 'Nedwin Mora',
                codigoAprobador: 'E05265',
                aprobacion: false
            },
            {
                id: 3,
                fechaCreacion: '08/02/2018',
                numSolicitud: '458745681',
                idEstacion: '15010',
                nombreEstacion: 'Cerro Café',
                nombresApellidosSolicitante: 'Carmen Iturbe',
                cedulaSolicitante: '9525657',
                fechasSolicitud: {
                    desde: '04/06/2018',
                    hasta: '05/06/2018',
                },
                nombresApellidosResponsable: 'Lermit Martinez',
                cedulaResponsable: '12456789',
                vehiculo: {
                    marca: 'Ford',
                    modelo: 'Exolorer',
                    color: 'Negra',
                    placas: 'AB500RK',
                },
                aprobador: 'Arnaldo Darias',
                codigoAprobador: 'E02565',
                aprobacion: true
            },
            {
                id: 4,
                fechaCreacion: '27/10/2018',
                numSolicitud: '589426570',
                idEstacion: '11018',
                nombreEstacion: 'Chaure',
                nombresApellidosSolicitante: 'Nohemí J. Perez',
                cedulaSolicitante: '9525657',
                fechasSolicitud: {
                    desde: '13/07/2018',
                    hasta: '14/07/2018',
                },
                nombresApellidosResponsable: 'Lermit Martinez',
                cedulaResponsable: '12456789',
                vehiculo: {
                    marca: 'Ford',
                    modelo: 'Exolorer',
                    color: 'Negra',
                    placas: 'AB500RK',
                },
                aprobador: 'Andrés Rodriguez',
                codigoAprobador: 'E10235',
                aprobacion: false
            },
        ];

        return { accesos };

    }
}
