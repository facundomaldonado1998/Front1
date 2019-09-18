export class Reclamo {
    id: number;
    lat: number;
    lng: number;
    descripcion: string;
    contribuyente: Contribuyente;
}

export class Contribuyente {
    id: number;
    nombre: string;
    apellido: string;
}

export class Marcador {
    lat: number;
    lng: number;
}