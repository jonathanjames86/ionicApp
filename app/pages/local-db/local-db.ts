import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Animation } from '../animation/animation'
import { Camera, Geolocation } from 'ionic-native';


declare var google;


@Component({
  templateUrl: 'build/pages/local-db/local-db.html',

})
export class LocalDb {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  animation = Animation;
  public base64Image: string;
  constructor(private navCtrl: NavController) {

  }
//
//   ionViewLoaded(){
//     this.loadMap();
//   }
//
//   ///Using Geolocation to find current Position
//   loadMap(){
//     Geolocation.getCurrentPosition().then((position) => {
//       let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//       let mapOptions = {
//         center: latLng,
//         zoom: 15,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       }
//       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//     }, (err) => {
//       console.log(err);
//     });
//   }
//   addMarker(){
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//   });
//   let content = "<h4>Information!</h4>";
//   this.addInfoWindow(marker, content);
//
// }
//   addInfoWindow(marker, content){
//     let infoWindow = new google.maps.InfoWindow({
//       content: content
//     });
//     google.maps.event.addListener(marker, 'click', () => {
//       infoWindow.open(this.map, marker);
//     });
//   }
  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
}
