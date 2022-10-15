export interface OtherPlace {
  Nom: string;
  'Numéro téléphone': number | null;
  Adresse: string;
  'Distance du lieu (en km)': number;
  'Temps en voiture du lieu (en minutes)': number;
  Plan: string;
  'Site internet': string;
  'Info complémentaires': string;
  'Prix indicatif': number | null;
}

export const otherPlaces: OtherPlace[] = [
  {
    Nom: 'La Foulerie',
    'Numéro téléphone': 617829904,
    Adresse: '57 Chem. de la Foulerie, 78830 Bullion',
    'Distance du lieu (en km)': 5,
    'Temps en voiture du lieu (en minutes)': 8,
    Plan: 'https://www.google.com/maps/place/La+Foulerie/@48.6198876,1.9954996,17z/data=!3m1!4b1!4m8!3m7!1s0x47e42c00f6b57e47:0xc4f7a4beeddad38e!5m2!4m1!1i2!8m2!3d48.6198899!4d1.995436?hl=fr-FR',
    'Site internet': 'https://foulerie.fr/',
    'Info complémentaires': 'Accessible, grand parking',
    'Prix indicatif': 128,
  },
  {
    Nom: 'Le Barn',
    'Numéro téléphone': 186380000,
    Adresse: 'Le Moulin de Brétigny, 78830 Bonnelles',
    'Distance du lieu (en km)': 2.9,
    'Temps en voiture du lieu (en minutes)': 5,
    Plan: 'https://www.google.com/maps/place/Le+Barn/@48.6020849,2.0073897,17z/data=!3m1!4b1!4m8!3m7!1s0x47e42c15458ee513:0x31499c8ccd39af0!5m2!4m1!1i2!8m2!3d48.602085!4d2.0118744?hl=fr-FR',
    'Site internet': 'http://lebarnhotel.com/',
    'Info complémentaires': 'Juste à côté, parking gratuit',
    'Prix indicatif': 176,
  },
  {
    Nom: 'La Villa Rochette',
    'Numéro téléphone': 984141656,
    Adresse: "La Villa Rochette, 13 Rue d'Adelaiau, 91470 Forges-les-Bains",
    'Distance du lieu (en km)': 8.8,
    'Temps en voiture du lieu (en minutes)': 12,
    Plan: "https://www.google.com/maps/place/La+Villa+Rochette+-+S%C3%A9minaires+d%E2%80%99entreprise,+R%C3%A9ceptions+%26+Chambres+d'h%C3%B4tes+-+Paris+sud+-+Essonne+91/@48.625596,2.1019229,17z/data=!3m1!4b1!4m8!3m7!1s0x47e5d498983b3307:0x5bea44816035f334!5m2!4m1!1i2!8m2!3d48.625596!4d2.1041116?hl=fr-FR",
    'Site internet': 'http://www.lavillarochette.fr/',
    'Info complémentaires': 'Parking gratuit',
    'Prix indicatif': 109,
  },
  {
    Nom: "Ferme d'Armenon",
    'Numéro téléphone': 164910045,
    Adresse: '91470 Les Molières',
    'Distance du lieu (en km)': 9.6,
    'Temps en voiture du lieu (en minutes)': 13,
    Plan: "https://www.google.com/maps/place/Ferme+d'Armenon/@48.6679548,2.0844474,17z/data=!3m1!4b1!4m8!3m7!1s0x47e5d52da44cff5f:0x27747548ab2d86d7!5m2!4m1!1i2!8m2!3d48.6679548!4d2.0866361?hl=fr-FR",
    'Site internet': 'http://www.lafermedarmenon.com/',
    'Info complémentaires': 'Parking gratuit, calme',
    'Prix indicatif': null,
  },
  {
    Nom: "L'Hibernie",
    'Numéro téléphone': 130595571,
    Adresse: '7 Rue de la Pie, 78730 Rochefort-en-Yvelines',
    'Distance du lieu (en km)': 6.2,
    'Temps en voiture du lieu (en minutes)': 8,
    Plan: "https://www.google.com/maps/place/L'Hibernie/@48.5861005,1.986854,17z/data=!3m1!4b1!4m8!3m7!1s0x47e42e81faffc011:0x9f480a1d10707db0!5m2!4m1!1i2!8m2!3d48.5860813!4d1.9889679?hl=fr-FR",
    'Site internet': 'http://www.l-hibernie.fr/',
    'Info complémentaires': 'Plutôt cher, parking à 150m',
    'Prix indicatif': 136,
  },
  {
    Nom: 'Nid de Rochefort',
    'Numéro téléphone': 178970282,
    Adresse: '15 Chem. sous la ville, 78730 Rochefort-en-Yvelines',
    'Distance du lieu (en km)': 5.3,
    'Temps en voiture du lieu (en minutes)': 7,
    Plan: 'https://www.google.com/maps/place/Nid+de+Rochefort/@48.5857956,1.9852513,17z/data=!3m1!4b1!4m8!3m7!1s0x47e42e81ec83875f:0x24464c2c1f8b82e1!5m2!4m1!1i2!8m2!3d48.585799!4d1.9874216?hl=fr-FR',
    'Site internet': 'http://www.lenidderochefort.fr/',
    'Info complémentaires':
      "Peu visible depuis l'extérieur, mais semble avoir des chambres pour famille nombreuse, parking un peu loin",
    'Prix indicatif': 102,
  },
  {
    Nom: 'Aux Hôtes de Guy le Rouge',
    'Numéro téléphone': 130419072,
    Adresse: '73 Rue Guy le Rouge, 78730 Rochefort-en-Yvelines',
    'Distance du lieu (en km)': 6,
    'Temps en voiture du lieu (en minutes)': 7,
    Plan: 'https://www.google.com/maps/place/Aux+H%C3%B4tes+de+Guy+le+Rouge/@48.5825804,1.9816614,17z/data=!3m1!4b1!4m8!3m7!1s0x47e42e80b406ee07:0xcd7c303e999ed902!5m2!4m1!1i2!8m2!3d48.5825803!4d1.9838501?hl=fr-FR',
    'Site internet': 'http://www.auxhotesdeguylerouge.com/',
    'Info complémentaires':
      'Pas vu grand chose de l’extérieur. Mais facilement accessible',
    'Prix indicatif': null,
  },
  {
    Nom: "Chambre d'Hôtes du Château",
    'Numéro téléphone': 678071328,
    Adresse: '38 Rue de Chartres, 91410 Dourdan',
    'Distance du lieu (en km)': 13.7,
    'Temps en voiture du lieu (en minutes)': 16,
    Plan: "https://www.google.com/maps/place/Chambre+d'H%C3%B4tes+du+Ch%C3%A2teau/@48.5302169,2.0094409,17z/data=!3m1!4b1!4m8!3m7!1s0x47e4326d935dfcc3:0x10c42370f4b13bb!5m2!4m1!1i2!8m2!3d48.5302169!4d2.0116296?hl=fr-FR",
    'Site internet': 'http://www.chambredhotedourdan.com/',
    'Info complémentaires':
      "On voit pas de l'extérieur, mais semble y avoir un parking gratuit. Situé dans le centre ville de Dourdan",
    'Prix indicatif': 75,
  },
  {
    Nom: 'HOTEL BEST WESTERN BLANCHE DE CASTILLE',
    'Numéro téléphone': 160811910,
    Adresse: '7 Rue Demetz, 91410 Dourdan',
    'Distance du lieu (en km)': 13.8,
    'Temps en voiture du lieu (en minutes)': 17,
    Plan: 'https://www.google.com/maps/place/HOTEL+BEST+WESTERN+BLANCHE+DE+CASTILLE/@48.529041,2.0102518,17z/data=!3m1!4b1!4m8!3m7!1s0x47e433b0240dce01:0xd9b3cd7315174bac!5m2!4m1!1i2!8m2!3d48.529041!4d2.0124405?hl=fr-FR',
    'Site internet': 'http://hotel.hotel-blanchedecastille.fr/',
    'Info complémentaires':
      'Facilement accessible. Parking gratuit et dans le centre ville de Dourdan',
    'Prix indicatif': 101,
  },
  {
    Nom: "Le Logis d'Arnière",
    'Numéro téléphone': 683561563,
    Adresse: '1 Rue du Pont Rue, 91410 Saint-Cyr-sous-Dourdan',
    'Distance du lieu (en km)': 9,
    'Temps en voiture du lieu (en minutes)': 11,
    Plan: "https://www.google.com/maps/place/Le+Logis+d'Arni%C3%A8re/@48.56712,2.0312553,17z/data=!3m1!4b1!4m8!3m7!1s0x47e42d09ea0bf557:0x8e949229ec1e40ca!5m2!4m1!1i2!8m2!3d48.56712!4d2.033444?hl=fr-FR",
    'Site internet': 'http://www.arniere.com/',
    'Info complémentaires':
      'Facilement accessible, parking, sur une belle route ',
    'Prix indicatif': 103,
  },
  {
    Nom: 'Le Moulin Bleu',
    'Numéro téléphone': 670318243,
    Adresse: '87 Rue du Pont Rue, 91410 Saint-Cyr-sous-Dourdan',
    'Distance du lieu (en km)': 9.5,
    'Temps en voiture du lieu (en minutes)': 14,
    Plan: 'https://www.google.com/maps/place/Le+Moulin+Bleu/@48.5661277,2.0483057,17z/data=!3m1!4b1!4m8!3m7!1s0x47e42dde164fa27d:0x785309638abf72e8!5m2!4m1!1i2!8m2!3d48.5661277!4d2.0504944?hl=fr-FR',
    'Site internet':
      'https://le-moulin-bleu-87-rue-du-pont-rue-saint-cyr-sous-dourdan.business.site/?utm_source=gmb&utm_medium=referral',
    'Info complémentaires':
      'Parking, semble y avoir des chambres pour famille nombreuse',
    'Prix indicatif': 131,
  },
  {
    Nom: 'Camping de la bruyère',
    'Numéro téléphone': 164589272,
    Adresse: 'Rte des Bruyères, 91530 Le Val-Saint-Germain',
    'Distance du lieu (en km)': 8.7,
    'Temps en voiture du lieu (en minutes)': 12,
    Plan: 'https://www.google.com/maps/place/Camping+de+la+bruy%C3%A8re/@48.5877328,2.0891114,17z/data=!3m1!4b1!4m5!3m4!1s0x47e5d32c9972026b:0x754c5ea8333010bf!8m2!3d48.5877329!4d2.0935961?hl=fr-FR',
    'Site internet':
      'https://www.campingfrance.com/recherchez-votre-camping/ile-de-france/essonne/le-val-saint-germain/camping-des-bruyeres',
    'Info complémentaires':
      'Camping 1 étoile, Accessible, grand, cul de sac. Bungalow + possibilité de planter tente ',
    'Prix indicatif': null,
  },
  {
    Nom: 'Ibis budget Rambouillet',
    'Numéro téléphone': 892683184,
    Adresse: 'Za Du Bel Air, Rue Joseph Jacquard, 78120 Rambouillet',
    'Distance du lieu (en km)': 21.3,
    'Temps en voiture du lieu (en minutes)': 25,
    Plan: 'https://www.google.com/maps/place/Ibis+budget+Rambouillet/@48.6239016,1.8254267,17z/data=!3m1!4b1!4m8!3m7!1s0x47e4241d9910c129:0x4ef1a2147c6dfba3!5m2!4m1!1i2!8m2!3d48.6239017!4d1.8299114?hl=fr-FR',
    'Site internet':
      'https://all.accor.com/hotel/2560/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps&y_source=1_MTUzNjAxOTQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    'Info complémentaires': 'Plus loin mais moins cher',
    'Prix indicatif': 53,
  },
  {
    Nom: 'Ibi Rambouillets',
    'Numéro téléphone': 130417850,
    Adresse:
      'Gps = Rn, 2 Rue Pierre Métairie, 10 ZA du Bel Air, 78120 Rambouillet',
    'Distance du lieu (en km)': 20.9,
    'Temps en voiture du lieu (en minutes)': 24,
    Plan: 'https://www.google.com/maps/place/H%C3%B4tel+ibis+Rambouillet/@48.6215181,1.8239297,17z/data=!3m1!4b1!4m8!3m7!1s0x47e4240324033ad3:0xc8df6e7bc4d9d43e!5m2!4m1!1i2!8m2!3d48.6215181!4d1.8261184?hl=fr-FR',
    'Site internet':
      'https://all.accor.com/hotel/0687/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps&y_source=1_MTUzNjIyNjQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D',
    'Info complémentaires': 'Plus loin mais moins cher',
    'Prix indicatif': 59,
  },
  {
    Nom: 'Studio écurie château ',
    'Numéro téléphone': null,
    Adresse: '3 allée de la duchesse Bonnelles',
    'Distance du lieu (en km)': 3,
    'Temps en voiture du lieu (en minutes)': 5,
    Plan: 'https://www.google.com/maps/place/3+All.+de+la+Duchesse,+78830+Bonnelles/@48.6148983,2.0202165,15z/data=!4m5!3m4!1s0x47e42b88264d7479:0xe6bc45b13109dfaf!8m2!3d48.6213326!4d2.0231694?hl=fr-FR',
    'Site internet':
      'https://www.booking.com/hotel/fr/la-louveterie-studio-dans-les-ecuries-du-chateau.fr.html?sid=88747fb6becb73140968ce3655463e05&aid=356118&ucfs=1&arphpl=1&checkin=2023-06-24&checkout=2023-06-25&dest_id=-1413589&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=fd5a7085d14a0132&srepoch=1665331212&soh=1&from_sustainable_property_sr=1&from=searchresults#no_availability_msg',
    'Info complémentaires': '2 personnes - 1 lit double',
    'Prix indicatif': 53,
  },
];
