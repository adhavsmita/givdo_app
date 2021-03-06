import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Friends page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  friends = [
    { id: 1, name: 'Hudson Marinho',   photo: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/15135885_10211374182932589_8708865600205752698_n.jpg?oh=de2eb36822682431284320c218e2b7e8&oe=59B7F8B8', achievements: [{ name: 'Philanthropist',  slug: '7-philanthropist' }] },
    { id: 2, name: 'Diego Toral',      photo: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/602488_477489475607742_1408376692_n.jpg?oh=9bb5866243c4ac33eee8cd65592eb238&oe=59E44309', achievements: [{ name: 'Philanthropist',  slug: '7-philanthropist' }] },
    { id: 3, name: 'Érica Santos',     photo: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/12347631_987859657938232_2582073700173906987_n.jpg?oh=58f7b357107fd78e438d5868e3dc93af&oe=59E0D5CA', achievements: [{ name: 'Philanthropist',  slug: '7-philanthropist' }] },
    { id: 4, name: 'Lydia Montagnese', photo: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-1/12509698_10205801074281193_4044016314830940422_n.jpg?oh=81b149f971c0cb7c72ad05a6f668b724&oe=59DF3C19', achievements: [{ name: 'Philanthropist',  slug: '7-philanthropist' }] },

    { id: 5, name: 'Hudson Marinho',   photo: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/15135885_10211374182932589_8708865600205752698_n.jpg?oh=de2eb36822682431284320c218e2b7e8&oe=59B7F8B8', achievements: [{ name: 'Philanthropist',  slug: '7-philanthropist' }] },
    { id: 6, name: 'Diego Toral',      photo: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/602488_477489475607742_1408376692_n.jpg?oh=9bb5866243c4ac33eee8cd65592eb238&oe=59E44309', achievements: [{ name: 'Philanthropist',  slug: '7-philanthropist' }] },
    { id: 7, name: 'Érica Santos',     photo: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/12347631_987859657938232_2582073700173906987_n.jpg?oh=58f7b357107fd78e438d5868e3dc93af&oe=59E0D5CA', achievements: [{ name: 'Philanthropist',  slug: '7-philanthropist' }] },
    { id: 8, name: 'Lydia Montagnese', photo: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-1/12509698_10205801074281193_4044016314830940422_n.jpg?oh=81b149f971c0cb7c72ad05a6f668b724&oe=59DF3C19', achievements: [{ name: 'Philanthropist',  slug: '7-philanthropist' }] },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Friends');
  }

  goback(){
    console.log('back');
  }
}
