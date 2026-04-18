// 🎬 MÜZE DURAK VERİLERİ

const episodes = [

  {
    id: 1,

    title: "Eşiğe Giriş",

    story: "Bu kapıdan giren yalnızca bir mekâna değil, zamanın derinliklerine adım atar. Sessiz taşlar, yüzyılların hikâyesini fısıldar.",

    // 🎥 arka plan
    image: "/muze/images/1.jpg",

    // 🖼️ carousel görselleri
    images: [
      "/muze/images/1.jpg",
      "/muze/images/1_2.jpg",
      "/muze/images/1_3.jpg"
    ],

    // 🎧 sahne sesi
    audio: "/muze/audio/1.mp3",

    // 🧠 AI rehber bağlamı
    context: "Külliyenin ana giriş kapısıdır. Ziyaretçinin müze deneyimine başladığı ilk noktadır.",

    // 🧭 (ileride harita için)
    location: {
      lat: 41.67,
      lng: 26.56
    }
  },

  {
    id: 2,

    title: "Darüşşifa",

    story: "Burada yalnızca beden değil, ruh da tedavi edilirdi. Suyun sesi, musiki ve ilim bir araya gelerek şifa dağıtırdı.",

    image: "/muze/images/2.jpg",

    images: [
      "/muze/images/2.jpg",
      "/muze/images/2_2.jpg",
      "/muze/images/2_3.jpg"
    ],

    audio: "/muze/audio/2.mp3",

    context: "Osmanlı döneminde hastaların müzikle tedavi edildiği sağlık merkezi.",

    location: {
      lat: 41.671,
      lng: 26.561
    }
  },

  {
    id: 3,

    title: "Musiki Odası",

    story: "Nağmeler burada yalnızca kulağa değil, kalbe dokunurdu. Her makam bir şifa, her ses bir huzur kaynağıydı.",

    image: "/muze/images/3.jpg",

    images: [
      "/muze/images/3.jpg",
      "/muze/images/3_2.jpg"
    ],

    audio: "/muze/audio/3.mp3",

    context: "Hastaların müzikle tedavi edildiği özel oda.",

    location: {
      lat: 41.672,
      lng: 26.562
    }
  },

  {
    id: 4,

    title: "Medrese",

    story: "İlim burada nefes alırdı. Talebeler, geceleri kandil ışığında bilgiyi arar, sabahları yeni bir hikmetle uyanırdı.",

    image: "/muze/images/4.jpg",

    images: [
      "/muze/images/4.jpg",
      "/muze/images/4_2.jpg"
    ],

    audio: "/muze/audio/4.mp3",

    context: "Osmanlı döneminde eğitim verilen medrese alanı.",

    location: {
      lat: 41.673,
      lng: 26.563
    }
  },

  {
    id: 5,

    title: "İmaret",

    story: "Bu ocakta yalnızca yemek değil, merhamet de pişerdi. Yoksullar burada doyurulur, gönüller burada ısınırdı.",

    image: "/muze/images/5.jpg",

    images: [
      "/muze/images/5.jpg",
      "/muze/images/5_2.jpg"
    ],

    audio: "/muze/audio/5.mp3",

    context: "Külliyenin aşevi. İhtiyaç sahiplerine yemek dağıtılan yer.",

    location: {
      lat: 41.674,
      lng: 26.564
    }
  }

];
