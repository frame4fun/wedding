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
  description?: string;
  rooms: CastleRoom[];
}

export const castleCategories: CastleCategory[] = [
  {
    title: 'Les chambres du château',
    description: '6 chambres très spacieuses au 1er étage du Château',
    rooms: [
      {
        Nom: 'Chambre Chambertin',
        Info: 'Chambre spacieuse avec vue sur le parc et la forêt.',
        Prix: 245,
        Image: Chambertin,
      },
      {
        Nom: 'Chambre Richebourg',
        Info: 'Chambre double avec vue sur le Jardin à la française',
        Prix: 245,
        Image: Richebourg,
      },
      {
        Nom: 'Chambre des Clos',
        Info: 'Chambre qui peut également convenir pour les personnes à mobilité réduite.',
        Prix: 200,
        Image: LesClos,
      },
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
    description: '16 chambres doubles de 14m2 et 1 chambre quadruple de 20m2',
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
      {
        Nom: 'Les Nénuphars',
        Info: '3 personnes, 1 lit double et 1 lit simple, 15m2',
        Prix: 130,
        Image: Nenuphars,
      },
    ],
  },
];
