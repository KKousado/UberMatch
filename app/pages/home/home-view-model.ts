import { Observable } from '@nativescript/core';
import { Corrida } from '../../models/corrida.model';
import { RidesService } from '../../services/rides.service';
import { calcularValorTotal, formatarMoeda } from '../../utils/calculations';

export class HomeViewModel extends Observable {
    private _corridas: Array<Corrida>;
    private _ganhosDia: string = "R$ 0,00";
    private _corridasDia: number = 0;
    private _mediaCorrida: string = "R$ 0,00";
    private ridesService: RidesService;

    constructor() {
        super();
        this.ridesService = RidesService.getInstance();
        this._corridas = [];
        this.carregarDados();
    }

    get corridas(): Array<Corrida> {
        return this._corridas;
    }

    get ganhosDia(): string {
        return this._ganhosDia;
    }

    get corridasDia(): number {
        return this._corridasDia;
    }

    get mediaCorrida(): string {
        return this._mediaCorrida;
    }

    private carregarDados() {
        this._corridas = this.ridesService.getCorridas();
        this.calcularEstatisticas();
        this.notifyPropertyChange('corridas', this._corridas);
    }

    private calcularEstatisticas() {
        const total = calcularValorTotal(this._corridas);
        this._corridasDia = this._corridas.length;
        
        this._ganhosDia = formatarMoeda(total);
        this._mediaCorrida = formatarMoeda(total / this._corridasDia);

        this.notifyPropertyChange('ganhosDia', this._ganhosDia);
        this.notifyPropertyChange('corridasDia', this._corridasDia);
        this.notifyPropertyChange('mediaCorrida', this._mediaCorrida);
    }
}