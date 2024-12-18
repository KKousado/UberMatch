import { requestPermissions as requestLocationPermissions } from '@nativescript/geolocation';
import { LocalNotifications } from '@nativescript/local-notifications';

export async function requestPermissions() {
    try {
        // Solicitar permissão de localização
        await requestLocationPermissions();
        
        // Solicitar permissão para notificações
        await LocalNotifications.requestPermission();
    } catch (error) {
        console.error('Erro ao solicitar permissões:', error);
    }
}