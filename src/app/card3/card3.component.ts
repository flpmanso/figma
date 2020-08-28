import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component implements OnInit {

  cards: any[] = [
    {
      littleContainer: 'littleContainer1',
      header: 'Search Data',
      text: 'Dont worry if your data is very large, the Data Warehouse provides a search engine,' +
        ' wich is useful for making it easier to find data effectively saving time ',
      img: 'assets/layout/images/card31.png',
      retangulo: 'assets/layout/images/retanguloCard31.png',
      vector: 'vector',
      elipse: 'elipse'
    }
    ,
    {
      littleContainer: 'littleContainer2',
      header: '24 Hours Access',
      text: 'Access is given 24 hours a full morning to night and meet again in the morning, ' +
        'giving you comfort when you need data when urgent',
      img: 'assets/layout/images/card32.png',
      retangulo: 'assets/layout/images/retanguloCard32.png',
      vector: 'vector2',
    },
    {
      littleContainer: 'littleContainer3',
      header: 'Print Out',
      text: 'Print our service gives you vonvenience if someday you neeed print data, just edit it all and just print it.',
      img: 'assets/layout/images/card33.png',
      retangulo: 'assets/layout/images/retanguloCard33.png',
      elipseG: 'elipseG3'

    },
    {
      littleContainer: 'littleContainer4',
      header: 'Security Code',
      text: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured' +
        ' with a code or password tha you created, so only you can open the file.',
      img: 'assets/layout/images/card34.png',
      retangulo: 'assets/layout/images/retanguloCard34.png',
      vector: 'vector4',
      elipseG: 'elipseG4'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
