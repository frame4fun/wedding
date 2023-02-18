import Montrachet from '../assets/castleRooms/montrachet.webp';
import Presidentielle from '../assets/castleRooms/presidentielle.webp';
import Double from '../assets/castleRooms/double.webp';
import Quadruple from '../assets/castleRooms/quadruple.webp';
import Glycines from '../assets/castleRooms/glycines.webp';
import Nenuphars from '../assets/castleRooms/nenuphars.webp';

export interface CastleRoom {
  Nom: string;
  Info: string;
  Prix: number;
  Image: string;
}

export interface CastleCategory {
  title: string;
  description?: string;
  rooms: CastleRoom[];
}

export const castleCategories: CastleCategory[] = [
  {
    title: 'Les chambres du château',
    description: '2 chambres très spacieuses au 1er étage du Château',
    rooms: [
      {
        Nom: 'Chambre Montrachet',
        Info: 'Chambre double avec vue sur le jardin à la française.',
        Prix: 245,
        Image: Montrachet,
      },
      {
        Nom: 'Chambre Présidentielle',
        Info: 'Chambre spacieuse avec vue panoramique sur tout le parc.',
        Prix: 295,
        Image: Presidentielle,
      },
    ],
  },
  {
    title: 'Les chambres de la dépendance',
    description: '3 chambres doubles de 14m2 et 1 chambre quadruple de 20m2',
    rooms: [
      {
        Nom: 'Chambre double',
        Info: "Certaines possèdent 2 lits simples, d'autres un lit double.",
        Prix: 100,
        Image: Double,
      },
      {
        Nom: 'Chambre quadruple',
        Info: '2 lits simples et 1 lit double',
        Prix: 170,
        Image: Quadruple,
      },
    ],
  },
  {
    title: 'Les chambres du hameau',
    rooms: [
      {
        Nom: 'Les Glycines',
        Info: '4 personnes, 2 lits doubles, 19m2',
        Prix: 170,
        Image: Glycines,
      },
    ],
  },
];
