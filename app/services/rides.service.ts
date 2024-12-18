import { Observable } from '@nativescript/core';
import { Corrida } from '../models/corrida.model';

export class RidesService extends Observable {
    private static instance: RidesService;
    
    private constructor() {
        super();
    }

    public static getInstance(): RidesService {
        if (!RidesService.instance) {
            RidesService.instance = new RidesService();
        }
        return RidesService.instance;
    }

    public getCorridas(): Array<Corrida> {
        return [
            {
                horario: "14:30",
                distancia: "5.2 km",
                origem: "Shopping Center",
                destino: "Aeroporto",
                valor: "R$ 35,00",
                status: "verde"
            },
            {
                horario: "13:15",
                distancia: "3.8 km",
                origem: "Centro",
                destino: "Universidade",
                valor: "R$ 25,00",
                status: "amarelo"
            }
        ];
    }
}