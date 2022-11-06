import Chambertin from '../assets/castleRooms/chambertin.webp';
import Richebourg from '../assets/castleRooms/richebourg.webp';
import LesClos from '../assets/castleRooms/lesclos.webp';
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
  description: string;
  rooms: CastleRoom[];
  plan?: string;
}

export const castleCategories: CastleCategory[] = [
  {
    title: 'Les chambres du château',
    description: 'ffgjfgnfj',
    rooms: [
      {
        Nom: 'Chambre Chambertin',
        Info: 'Au 1er étage du château, chambre spacieuse avec vue sur le parc et la forêt.',
        Prix: 245,
        Image: Chambertin,
      },
      {
        Nom: 'Chambre Richebourg',
        Info: 'Au 1er étage du château, chambre double avec vue sur le Jardin à la française',
        Prix: 245,
        Image: Richebourg,
      },
      {
        Nom: 'Chambre des Clos',
        Info: 'Au 1er étage du château, chambre qui peut également convenir pour les personnes à mobilité réduite.',
        Prix: 200,
        Image: LesClos,
      },
      {
        Nom: 'Chambre Montrachet',
        Info: 'Au 1er étage du château, chambre double avec vue sur le jardin à la française.',
        Prix: 245,
        Image: Montrachet,
      },
      {
        Nom: 'Chambre Présidentielle',
        Info: 'Au 1er étage du château, chambre spacieuse avec vue panoramique sur tout le parc.',
        Prix: 295,
        Image: Presidentielle,
      },
    ],
  },
  {
    title: 'Les chambres de la dépendance',
    description: 'ffgjfgnfj',
    rooms: [
      {
        Nom: 'Chambre double',
        Info: "Dependance du chateau, 16 chambres doubles de 14m2, certaines avec 2 lits simples, d'autres avec 2 lits doubles. Salle de bain privative. Possibilité d'ajouter un lit simple dans certaines chambres pour 30 euros.",
        Prix: 100,
        Image: Double,
      },
      {
        Nom: 'Chambre quadruple',
        Info: 'Dependance du chateau, 1 chambre quadruple de 20m2, 2 lits simples et 1 lit double. Salle de bain privative',
        Prix: 170,
        Image: Quadruple,
      },
    ],
  },
  {
    title: 'Les chambres du hameau',
    description: 'ffgjfgnfj',
    rooms: [
      {
        Nom: 'Les Glycines',
        Info: 'Hameau du chateau, 4 personnes, 2 lits doubles, 19m2',
        Prix: 170,
        Image: Glycines,
      },
      {
        Nom: 'Les Nénuphars',
        Info: 'Hameau du chateau, 3 personnes, 1 lit double et 1 lit simple, 15m2',
        Prix: 130,
        Image: Nenuphars,
      },
    ],
  },
];
