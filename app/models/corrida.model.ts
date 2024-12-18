export interface Corrida {
    horario: string;
    distancia: string;
    origem: string;
    destino: string;
    valor: string;
    status: 'verde' | 'amarelo' | 'vermelho';
}