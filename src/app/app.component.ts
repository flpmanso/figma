import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  cards: object[] = [
    {
      header: 'Search Data',
      text: 'Dont worry if your data is very large, the Data Warehouse provides a search engine,' +
        ' wich is useful for making it easier to find data effectively saving time ',
      img: 'assets/layout/images/card31.png',
      background: 'rgba(215, 252, 251, 0.4)'
    },
    {
      header: '24 Hours Access',
      text: 'Access is given 24 hours a full morning to night and meet again in the morning, ' +
        'giving you comfort when you need data when urgent',
      img: 'assets/layout/images/card32.png',
      background: 'rgba(246, 168, 248, 0.4)'
    },
    {
      header: 'Print Out',
      text: 'Print our service gives you vonvenience if someday you neeed print data, just edit it all and just print it.',
      img: 'assets/layout/images/card33.png',
      background: 'rgba(251, 215, 252, 0.4)'
    },
    {
      header: 'Security Code',
      text: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured' +
        ' with a code or password tha you created, so only you can open the file.',
      img: 'assets/layout/images/card34.png',
      background: 'rgba(168, 248, 246, 0.4)'
    },
  ];

  ngOnInit(): void {
    console.log(this.cards);
  }

  title = 'figma';
}
