import { AccessibilityService } from '@nativescript/core';

export function configurarAcessibilidade(elemento: any, descricao: string) {
    if (elemento) {
        elemento.accessibilityLabel = descricao;
        elemento.accessibilityRole = "button";
        elemento.accessibilityLiveRegion = "polite";
    }
}