export interface NFTDropCollection {
  imageUrl: string;
  name: string;
  price: number;
  items: number;
  minted: number;
}

export const nftCollections: NFTDropCollection[] = [
  {
    imageUrl:
      "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&dpr=1&w=3840",
    name: "CryptoPunks",
    price: 10,
    items: 10000,
    minted: 8000,
  },
  {
    imageUrl:
      "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=3840",
    name: "Bored Ape Yacht Club",
    price: 15,
    items: 10000,
    minted: 9500,
  },
  {
    imageUrl: "https://raw.seadn.io/files/fa5cd7a2d530b5e0667b39b13d6b3bae.svg",
    name: "BitmapPunks",
    price: 5,
    items: 20000,
    minted: 15000,
  },
  {
    imageUrl:
      "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&dpr=1&w=3840",
    name: "Cool Cats",
    price: 8,
    items: 10000,
    minted: 7000,
  },
];
