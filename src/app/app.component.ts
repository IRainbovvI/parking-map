import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { take } from 'rxjs';
import { Marker, Markers } from './models';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  data!: Markers;
  markerArr: Array<Marker> = [];
  markerPosArr: Array<any> = [];
  center!: any;
  options = { disableDefaultUI: true, zoom: 18 };
  filterType = '1';
  battery = 0;
  info!: string;

  constructor(private httpService: HttpService) {}

  openInfo(marker: MapMarker, i: number) {
    this.markerArr[1].type = '';
    this.info = `
    <p>Type: ${this.markerArr[i].type}</p>
    <p>Status: ${this.markerArr[i].status}</p>
    <p>Name: ${this.markerArr[i].name}</p>
    <p>Plates Number: ${this.markerArr[i].platesNumber}</p>
    
    `;
    this.infoWindow.open(marker);
  }

  redrawMap(data: { filterType: string; battery: number }) {
    this.filterType = data.filterType;
    this.battery = data.battery;
  }

  ngOnInit() {
    this.httpService
      .getData()
      .pipe(take(1))
      .subscribe((res) => {
        this.data = res as Markers;
        this.markerArr = this.data.objects;
        let centerLat = 0;
        let centerLng = 0;

        this.markerArr.map((item) => {
          centerLat += item.location.latitude;
          centerLng += item.location.longitude;
          item.position = new google.maps.LatLng({
            lat: item.location.latitude,
            lng: item.location.longitude,
          });
        });

        this.center = new google.maps.LatLng({
          lat: centerLat / this.markerArr.length,
          lng: centerLng / this.markerArr.length,
        });
      });
  }
}
