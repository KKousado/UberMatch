export function calcularValorTotal(corridas: Array<{ valor: string }>): number {
    return corridas.reduce((total, corrida) => {
        return total + parseFloat(corrida.valor.replace('R$ ', '').replace(',', '.'));
    }, 0);
}

export function formatarMoeda(valor: number): string {
    return `R$ ${valor.toFixed(2)}`;
}