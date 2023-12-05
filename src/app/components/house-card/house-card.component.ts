import { Component } from '@angular/core';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.scss']
})
export class HouseCardComponent {
  homeList = [
    { tile: 'Cottage', subTitle: 'Ensoleillé',image:"chambre-spacieuse3", avatar: 'avatar', description: 'Une retraite champêtre entourée de nature et de couleurs florales' },
    { tile: 'Villa', subTitle: 'Océane',image:"vision-du-monde", avatar: 'avatar', description: 'Une oasis contemporaine offrant une vue infinie sur les vagues océaniques.' },
    { tile: 'Refuge', subTitle: 'Montagnard',image:"terrasse-luxieuse", avatar: 'avatar', description: 'Un havre alpin au charme authentique avec des panoramas à couper le souffle.' },
    { tile: 'Espace Urbain', subTitle: 'Éclatant',image:"villa-design-cannes", avatar: 'avatar', description: "Un loft citadin où l'architecture industrielle rencontre la lumière naturelle." }
  ];
}
