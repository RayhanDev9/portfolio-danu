const BASE = import.meta.env.BASE_URL;
const DIR = `${BASE}img/desain-horison-altama-pandeglang`;
const VENDOR = `${BASE}img/vendor-experienc`;
const PROFILE = `${BASE}img/profile`;

export const horisonData = {
  hero: {
    brandName: "HORISON",
    subtitle: "ALTAMA PANDEGLANG",
    description:
      "Hotel Horison Altama Pandeglang is a hotel located in Pandeglang, Banten, offering comfortable accommodation and facilities to meet guests' needs for leisure, business, and other activities. The hotel provides a modern atmosphere, friendly service, and a comfortable environment for visitors.",
    logo: `${VENDOR}/horison.png`,
    instagramHandle: "horisonaltamapandeglang",
    personImage: `${PROFILE}/danu.png`,
    previewBanners: [
      {
        title: "Meeting Room Package",
        price: "IDR 300.000",
        image: `${DIR}/meeting-room/meeting-room-2.png`,
        tag: "MEETING ROOM",
      },
      {
        title: "Marry Me - Wedding Package",
        price: "IDR 14.800.000",
        image: `${DIR}/weeding/weeding-1.png`,
        tag: "WEDDING",
      },
    ],
  },
  meetingRoom: {
    sectionTitle: "DESIGN",
    sectionSubtitle: "MEETING ROOM",
    featuredBanner: `${DIR}/meeting-room/metting-room-1.png`,
    cards: [
      {
        id: 1,
        title: "Meeting at Horison",
        image: `${DIR}/meeting-room/meeting-room-2.png`,
        price: "IDR 300.000",
      },
      {
        id: 2,
        title: "Meeting Package Fullboard",
        image: `${DIR}/meeting-room/meeting-room-4.png`,
        price: "IDR 450.000",
      },
      {
        id: 3,
        title: "Meeting Package Facilities",
        image: `${DIR}/meeting-room/meetingroom-3.png`,
        price: "IDR 300.000",
      },
      {
        id: 4,
        title: "Meeting Room Showcase",
        image: `${DIR}/meeting-room/metting-room-5.png`,
        price: "IDR 300.000",
      },
    ],
  },
  wedding: {
    sectionTitle: "DESIGN",
    sectionSubtitle: "WEDDING",
    thumbnails: [
      {
        id: 1,
        title: "Marry Me - Lilly Package",
        image: `${DIR}/weeding/weeding-1.png`,
        price: "IDR 14.800.000",
      },
      {
        id: 2,
        title: "Marry Me - Package Details",
        image: `${DIR}/weeding/weeding-3.png`,
        price: "IDR 14.800.000 nett",
      },
    ],
    mainPoster: `${DIR}/weeding/weeding-2.png`,
  },
  hotelRoom: {
    sectionTitle: "DESIGN",
    sectionSubtitle: "HOTEL ROOM",
    promoPosters: [
      {
        id: 1,
        title: "Independence Day Escape",
        price: "Starts From IDR 517.845",
        image: `${DIR}/hotel-room/hotel-room-1.jpg`,
      },
      {
        id: 2,
        title: "July Day Staycation",
        price: "Starts From IDR 575.000",
        image: `${DIR}/hotel-room/hotel-room-2.jpg`,
      },
      {
        id: 3,
        title: "Novation Staycation",
        price: "Start From IDR 585.000",
        image: `${DIR}/hotel-room/hotel-room-1.jpg`,
      },
    ],
  },
};
