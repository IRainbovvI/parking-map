export interface Markers {
  objects: Array<Marker>;
}

export interface Marker {
  discriminator: string;
  platesNumber: string;
  sideNumber: string;
  color: string;
  type: string;
  picture: {
    id: string;
    name: string;
    extension: null | string;
    contentType: null | string;
  };
  rangeKm: number;
  batteryLevelPct: number;
  reservationEnd: null | string;
  reservation: null | string;
  status: string;
  locationDescription: null | string;
  address: null | string;
  mapColor: {
    rgb: string;
    alpha: number;
  };
  promotion: null | string;
  id: string;
  name: string;
  description: null | string;
  location: {
    latitude: number;
    longitude: number;
  };
  metadata: null | string;
  position?: any;
}

export interface Position {
  lat: number;
  lng: number;
}
