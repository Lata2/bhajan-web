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
    id: "uturn",
    title: "Radha Rani Lage",
    thumbnail: "https://img.dharvix.com/radha%20rani%20lage%20thumbnail.png",
    banner: "https://img.dharvix.com/radha%20rani%20banner.png",
    poster: "https://img.dharvix.com/Radha%20Rani%20Lage%20poster.png",
    hlsUrl: "https://vz-09e89c39-9c8.b-cdn.net/c82e3cf6-a9f3-42d4-9d06-76491760af8c/playlist.m3u8",
    tag: "Krishna Bhajan",
    releaseYear: 2017,
    description:
      "Ek bhaav-vibhor Krishna bhajan jo Shyam ke prati ananya samarpan aur bharose ko darshata hai.",
  },
  {
    id: "avadh-main-ram",
    title: "Awadh Main Ram",
    thumbnail: "https://img.dharvix.com/awadh%20min%20ram%20thumbnail.png",
    banner: "https://img.dharvix.com/awadh%20main%20ram%20banner.png",
    poster: "https://img.dharvix.com/Awadh%20main%20ram%20aye%20hain%20Poster.png",
    hlsUrl: "https://vz-09e89c39-9c8.b-cdn.net/2b0b4575-6bfe-4cfe-ae33-1e19b3e13fa2/playlist.m3u8",
    tag: "Ram Bhajan",
    releaseYear: 2023,
    description:
      "Ek man-mohak bhajan jisme Prabhu Shri Ram ke Ayodhya aagaman ki anandmay leela ka varnan hai.",
  },
  {
    id: "ganesh-aarti",
    title: "Ganesh Aarti",
    thumbnail: "https://img.dharvix.com/ganesh%20aarti%20thumbnail.png",
    banner: "https://img.dharvix.com/ganesh%20aarti%20banner.png",
    poster: "https://img.dharvix.com/ganesh%20aarti%20poster.png",
    hlsUrl: "https://vz-09e89c39-9c8.b-cdn.net/070531ec-3c50-48be-8796-12af7ab6eaa0/playlist.m3u8",
    tag: "Ganesh Bhajan",
    releaseYear: 2021,
    description:
      "Bhagwan Shri Ganesh ki pavitra aarti jo har shubh karya se pehle gaayi jaati hai aur mangal ka vardaan deti hai.",
  },
  {
    id: "bhakt-ke-bas-mein-hain-bhagwan",
    title: "Bhakt Ke Bas Mein Hain Bhagwan",
    thumbnail: "https://img.dharvix.com/bhakat%20ke%20bas%20main%20thumbnail.png",
    banner: "https://img.dharvix.com/bhakat%20ke%20banner.png",
    poster: "https://img.dharvix.com/bhakat%20ke%20pster.png",
    hlsUrl: "https://vz-09e89c39-9c8.b-cdn.net/109300ae-c515-4a77-9bc8-834bde6549e6/playlist.m3u8",
    tag: "Krishna Bhajan",
    releaseYear: 1998,
    description:
      "Bhakti aur samarpan ka sundar bhajan jo batata hai ki sachchi shraddha se Bhagwan bhi bhakt ke vash mein ho jaate hain.",
  },
  {
    id: "charan-ho-raghav-ke",
    title: "Charan Ho Raghav Ke",
    thumbnail: "https://img.dharvix.com/charan%20hain%20raghav%20ke%20thumbnail.png",
    banner: "https://img.dharvix.com/charan%20hain%20raghav%20ke%20banner.png",
    poster: "https://img.dharvix.com/charan%20hain%20raghav%20ke%20poster.png",
    hlsUrl: "https://vz-09e89c39-9c8.b-cdn.net/7021c22a-1865-404e-8249-716a7e1def88/playlist.m3u8",
    tag: "Ram Bhajan",
    releaseYear: 2019,
    description:
      "Prabhu Shri Ram ke charanon ki mahima aur unki sharan mein milne wali shanti ko darshata madhur bhajan.",
  },
];