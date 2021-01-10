import { Component, OnInit, Injectable  } from '@angular/core';
import {environment} from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { UsuariosService} from 'src/app/usuarios.service';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { UbicacionesService } from '../services/ubicaciones.service';
import { Ubication } from '../models/Ubication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-ordes',
  templateUrl: './request-ordes.component.html',
  styleUrls: ['./request-ordes.component.css']
})
export class RequestOrdesComponent implements OnInit {
  map: Mapboxgl.Map;
  latitud:number
  longitud:number
  addrees:string;
  token:string;
  id_user_:string;
  user_data:any;
  marker
  public formGroup = new FormGroup({

    address: new FormControl('', [
        Validators.required,
    ])

});
  constructor(private usuarioService:UsuariosService,
    private UbicacionesService:UbicacionesService,
    private router:Router) {

  }

  ngOnInit() {
    this.user_data= JSON.parse(localStorage.getItem('usuario'));
    this.token=this.user_data.token;
    this.id_user_ = this.user_data.id;
    (Mapboxgl as any).accessToken =environment.mapBoxkey
    this.map = new  Mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-93.1075127,16.7534462], // starting position LNG LT
      zoom:15.42// starting zoom
    });
    this.UbicacionCercana()
    this.map.addControl(new Mapboxgl.FullscreenControl());
    this.map.addControl(new Mapboxgl.NavigationControl());
    this.map.on('click', (e) => {
      console.log(e.lngLat.lat, e.lngLat.lng)
      if(this.marker != null){
        this.marker.remove()
      }
      this.Marcador(e.lngLat.lng, e.lngLat.lat)
      this.getAddrees(e.lngLat.lng, e.lngLat.lat)
    });
  }

  Marcador(lng: number, lat: number){
    console.log(lng, lat)
    this.marker = new Mapboxgl.Marker({
      draggable: true,
      color: 'green'
      }).setLngLat([lng, lat]).addTo( this.map );

    this.marker.on('drag', () => {
      console.log(this.marker.getLngLat());
      });
    console.log(this.marker);
  }

  getAddrees(lng: number, lat: number){
    this.latitud = 0.0;
        this.longitud = 0.0;
        this.addrees = '';
    this.usuarioService.getAddress(lng, lat).subscribe((data:any) => {
      console.log(data.features[0].place_name);
      this.latitud = lat;
          this.longitud = lng;
          this.addrees = data.features[0].place_name;
      this.formGroup.controls.address.setValue(data.features[0].place_name);
    })
  }

  setUbicacion(){
    console.log('direccion ::> ',this.addrees, 'Latitud ::> ',this.latitud, 'Longitud ::> ',this.longitud)
    let ubicacion = new Ubication(parseInt(this.id_user_), this.latitud, this.longitud, this.addrees, 1, 0);
    console.log(ubicacion);
    this.UbicacionesService.addUbicacion(this.token, ubicacion).subscribe( 
      response=>{
      console.log("respuesta ",response);
      this.router.navigate(['/order-steps/ubicaciones']);
    },error=>{
      console.log("error resepuesta",error);
    });
  }

  UbicacionCercana(){
    const geo = new Mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true,
      },
      fitBoundsOptions: {
        maxZoom:15
      },
      trackUserLocation: true,
      showUserLocation: false
      })
    this.map.addControl(geo)
    geo.on('geolocate', function(position){
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log('lat, lng', this.latitude, this.longitude);
    });
  }
  
  save_ubication(){
    console.log("save ubicaciones");
  }
  next(){
    console.log("saltar ubicaciones ubicaciones");
    this.router.navigate(['order-steps/ubicaciones']);
  }
}
