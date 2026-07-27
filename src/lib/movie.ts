export type Movie = {
  id: string;
  title: string;
  thumbnail: string;
  banner: string;
  hlsUrl: string;
  tag?: string;
  poster?: string;
  releaseYear?: number;
  description?: string;
};

export const movies: Movie[] = [
  {
    id: 'uturn',
    title: 'Shyam Tum Sena Zariya',
    thumbnail: '/assets/bhajan-posters/vp1.png',
    banner: '/assets/bhajan-posters/vb1.png',
    poster: '/assets/bhajan-posters/vp1.png',
    hlsUrl:
      'https://dxc62cy2vpupe.cloudfront.net/clean24feb1/shyamtumsenazariya/index.m3u8',
    tag: 'Krishna Bhajan',
    releaseYear: 2017,
    description:
      'Ek bhaav-vibhor Krishna bhajan jo Shyam ke prati ananya samarpan aur bharose ko darshata hai. Madhur swar aur hriday ko chhoo jaane wale bol bhakt ke man ki vyakulta aur prabhu ki sharan mein milne wali shanti ko sundar roop se prastut karte hain.',
  },
  {
    id: 'Avathara',
    title: 'Chup Chup Khade Ho',
    thumbnail: '/assets/bhajan-posters/vp4.png',
    banner: '/assets/bhajan-posters/vb4.png',
    poster: '/assets/bhajan-posters/vp4.png',
    hlsUrl:
      'https://dxc62cy2vpupe.cloudfront.net/clean24feb1/chupchupkhadeho/index.m3u8',
    tag: 'Krishna Bhajan',
    releaseYear: 2023,
    description:
      'Ek man-mohak bhajan jisme Kanha ki chup-chaap khadi murti ke saamne bhakt apna dil khol kar rakh deta hai. Sur aur taal ka aisa sangam jo bhakti-bhaav ko aur gehra kar deta hai, aur suntay hi man Krishna-bhakti mein leen ho jaata hai.',
  },
  {
    id: 'prince',
    title: 'Hanuman Chalisa',
    thumbnail: '/assets/bhajan-posters/vp5.png',
    banner: '/assets/bhajan-posters/vb5.png',
    poster: '/assets/bhajan-posters/vp5.png',
    hlsUrl:
      'https://dxc62cy2vpupe.cloudfront.net/clean24feb1/hanumanchalisa1/index.m3u8',
    tag: 'Hanuman Bhajan',
    releaseYear: 2021,
    description:
      'Shri Hanuman ji ki mahima aur shakti ka guṇgaan karti ye chalisa har bhakt ke jeevan mein sahas, raksha aur sakaratmakta laane wali maani jaati hai. Roz sunne se man mein bhay door hokar atoot vishwas aur bal ka sanchar hota hai.',
  },
  {
    id: 'love-story-1998',
    title: 'Kaba Aogi Sherawali',
    thumbnail: '/assets/bhajan-posters/vp3.png',
    banner: '/assets/bhajan-posters/vb3.png',
    poster: '/assets/bhajan-posters/vp3.png',
    hlsUrl:
      'https://dxc62cy2vpupe.cloudfront.net/clean24feb1/kabaaogisherawali/index.m3u8',
    tag: 'Mata Bhajan',
    releaseYear: 1998,
    description:
      'Sherawali Maa ke darshan ki tadap aur unke aashirwad ki chahat mein rache is bhajan mein bhakt ka atoot vishwas jhalakta hai. Sur-lay ka aisa sangam jo Mata Rani ke bhakton ke dil ko sukoon aur sambal deta hai.',
  },
  {
    id: 'alpha',
    title: 'Radha Krishna',
    thumbnail: '/assets/bhajan-posters/vp2.png',
    banner: '/assets/bhajan-posters/vb2.png',
    poster: '/assets/bhajan-posters/vp2.png',
    hlsUrl:
      'https://dxc62cy2vpupe.cloudfront.net/clean24feb1/radhakrishna1/index.m3u8',
    tag: 'Radha Krishna Bhajan',
    releaseYear: 2019,
    description:
      'Radha aur Krishna ke divya prem aur unke anokhe milan ko samarpit ek madhur bhajan. Iske bol prem, samarpan aur bhakti ke us gehre rishtay ko dikhate hain jo yugon se bhakton ke dilon mein basa hua hai.',
  },
];