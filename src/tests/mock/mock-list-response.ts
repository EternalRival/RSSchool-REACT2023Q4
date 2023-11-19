import { ApiShowSummary } from '../../shared/api/myshows/types/api-show-summary.type'
import { GetResponse } from '../../shared/api/myshows/types/get-response.type'

export const mockListJson: [
  GetResponse<number>,
  GetResponse<ApiShowSummary[]>,
] = [
  {
    jsonrpc: '2.0',
    result: 66068,
    id: 1,
  },
  {
    jsonrpc: '2.0',
    result: [
      {
        id: 7718,
        title: 'Sherlock',
        titleOriginal: 'Sherlock',
        status: 'Canceled/Ended',
        totalSeasons: 4,
        year: 2010,
        watching: 412461,
        voted: 224257,
        rating: 4.73,
        images: [
          '9492ce09d3a31c32ba559f5936dac888.jpg',
          '6f65c09731780f38fcfd1eb13e2f46f7.jpg',
          'd1d9e8a4b5f53c48fcf41311e17c77fa.jpg',
          'b515afd004b8a71dc47520d330dfd453.jpg',
          '076a546fa74e98b80c3635a5a3975dff.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/9/49/9492ce09d3a31c32ba559f5936dac888.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 11945,
        title: 'Game of Thrones',
        titleOriginal: 'Game of Thrones',
        status: 'Canceled/Ended',
        totalSeasons: 8,
        year: 2010,
        watching: 377672,
        voted: 197720,
        rating: 4.66,
        images: ['dd10e6a042a3766f7c3173a1397dcd0d.jpg'],
        image:
          'https://media.myshows.me/shows/small/d/d1/dd10e6a042a3766f7c3173a1397dcd0d.jpg',
        onlineCount: null,
        promoUrl:
          'https://www.kinopoisk.ru/film/464963/watch/?utm_source=myshows\u0026utm_medium=paid_performance\u0026utm_campaign=got8_new\u0026utm_content=main_page_popular_promo\u0026utm_term=un_registered\u0026source=kinopoisk_paid_performance_myshows_got8_new_main_page_popular_promo_un_registered\u0026erid=4CQwVszH9pHnuvjy7wZ',
        category: 'show',
      },
      {
        id: 2,
        title: 'The Big Bang Theory',
        titleOriginal: 'The Big Bang Theory',
        status: 'Canceled/Ended',
        totalSeasons: 12,
        year: 2007,
        watching: 303573,
        voted: 158739,
        rating: 4.5,
        images: ['2a93287bc53bbfc4467095edbc9088cc.jpg'],
        image:
          'https://media.myshows.me/shows/small/2/a9/2a93287bc53bbfc4467095edbc9088cc.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 45,
        title: 'Supernatural',
        titleOriginal: 'Supernatural',
        status: 'Canceled/Ended',
        totalSeasons: 15,
        year: 2005,
        watching: 300889,
        voted: 148394,
        rating: 4.27,
        images: ['fc37c340d1d6e0f4ba1860efa6635ab6.jpg'],
        image:
          'https://media.myshows.me/shows/small/f/c3/fc37c340d1d6e0f4ba1860efa6635ab6.jpg',
        onlineCount: null,
        promoUrl:
          'https://hd.kinopoisk.ru/film/4901b2e6dc7be0eda7432eedca82a783?season=15\u0026episode=1\u0026utm_source=myshows\u0026utm_medium=paid_performance\u0026utm_campaign=supernatural\u0026utm_content=main_page_popular_promo\u0026utm_term=un_registered\u0026source=kinopoisk_paid_performance_myshows_supernatural_main_page_popular_promo_un_registered\u0026erid=4CQwVszH9pKzQ8iyFrw',
        category: 'show',
      },
      {
        id: 304,
        title: 'Misfits',
        titleOriginal: 'Misfits',
        status: 'Canceled/Ended',
        totalSeasons: 5,
        year: 2009,
        watching: 281500,
        voted: 141732,
        rating: 4.18,
        images: [
          '123145dc590e00e6c762a53f0b54983b.jpg',
          'c5fe0cf776e720e3e7c966657fe8303a.jpg',
          '3765979aeb4aff41d3511f501b9e0380.jpg',
          '4a9ba4c8321d42fb5be6bc52a7f6e310.jpg',
          'c04ca80f963623168f87d7e3c2531fa2.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/1/23/123145dc590e00e6c762a53f0b54983b.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 187,
        title: 'Breaking Bad',
        titleOriginal: 'Breaking Bad',
        status: 'Canceled/Ended',
        totalSeasons: 5,
        year: 2008,
        watching: 276579,
        voted: 138603,
        rating: 4.56,
        images: ['0c29613f893decccc881252ef9ad6f33.jpg'],
        image:
          'https://media.myshows.me/shows/small/0/c2/0c29613f893decccc881252ef9ad6f33.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 8,
        title: 'Lost',
        titleOriginal: 'Lost',
        status: 'Canceled/Ended',
        totalSeasons: 6,
        year: 2004,
        watching: 268585,
        voted: 138799,
        rating: 4.42,
        images: [
          '749eec18eb58e856bdea8e19833d2fa1.jpg',
          '72477a2e85e032e3530e43e9cec61d7a.jpg',
          'f89d47691ba1b5bf6f30c2f935eb15a2.jpg',
          'd1cae1cb927d65d2aa417d02a4759faf.jpg',
          '83ae9d71a4fe2d2797f1c82c3d3e23b0.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/7/49/749eec18eb58e856bdea8e19833d2fa1.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 1,
        title: 'House M.D.',
        titleOriginal: 'House M.D.',
        status: 'Canceled/Ended',
        totalSeasons: 8,
        year: 2004,
        watching: 261116,
        voted: 136671,
        rating: 4.62,
        images: [
          '073db039e64c1d43e75b9f69952b661a.jpg',
          'a7136522c87dbad1fcc10a6857869fc4.jpg',
          '0f4fc20aa4ed5c7611f37b32d6195083.jpg',
          '3b04ba7b76c55f877cfa3a303d7e2577.jpg',
          '84f4aae4bbdb17ccd3168ae65ff35de4.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/0/73/073db039e64c1d43e75b9f69952b661a.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 19638,
        title: 'American Horror Story',
        titleOriginal: 'American Horror Story',
        status: 'Returning Series',
        totalSeasons: 12,
        year: 2011,
        watching: 251619,
        voted: 114687,
        rating: 4.17,
        images: ['5a151b3a165235cd37444f0f0757e27b.jpg'],
        image:
          'https://media.myshows.me/shows/small/5/a1/5a151b3a165235cd37444f0f0757e27b.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 5317,
        title: 'The Walking Dead',
        titleOriginal: 'The Walking Dead',
        status: 'Canceled/Ended',
        totalSeasons: 11,
        year: 2010,
        watching: 237335,
        voted: 114704,
        rating: 4.12,
        images: ['4547889b9ebd60520e677044042f7ba3.jpg'],
        image:
          'https://media.myshows.me/shows/small/4/54/4547889b9ebd60520e677044042f7ba3.jpg',
        onlineCount: null,
        promoUrl:
          'https://hd.kinopoisk.ru/film/41e866c577c74a4cb43cee67e33ee175?utm_source=myshows\u0026utm_medium=paid_performance\u0026utm_campaign=the_walking_dead\u0026utm_content=main_page_popular_promo\u0026utm_term=un_registered\u0026source=kinopoisk_paid_performance_myshows_the_walking_dead_main_page_popular_promo_un_registered\u0026erid=4CQwVszH9pN9t8oSkFH',
        category: 'show',
      },
      {
        id: 48017,
        title: 'Stranger Things',
        titleOriginal: 'Stranger Things',
        status: 'Returning Series',
        totalSeasons: 5,
        year: 2016,
        watching: 224489,
        voted: 103693,
        rating: 4.59,
        images: ['915b56d169568a7431e671770d426f60.jpg'],
        image:
          'https://media.myshows.me/shows/small/9/15/915b56d169568a7431e671770d426f60.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 3,
        title: 'Lie to Me',
        titleOriginal: 'Lie to Me',
        status: 'Canceled/Ended',
        totalSeasons: 3,
        year: 2009,
        watching: 215620,
        voted: 107070,
        rating: 4.29,
        images: [
          '87fc3bfbf6f569ece9966a9913c0a502.jpg',
          '4e10112cc6e111453dbce8e023e05c8f.jpg',
          '36681ea925090f4f3ca6ba03ace5cd39.jpg',
          '75b5f50cb35a71e668ec32bbe14975d2.jpg',
          '7387ba705a855b0c68708d72607210e6.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/8/7f/87fc3bfbf6f569ece9966a9913c0a502.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 22410,
        title: 'Black Mirror',
        titleOriginal: 'Black Mirror',
        status: 'TBD/On The Bubble',
        totalSeasons: 6,
        year: 2011,
        watching: 213457,
        voted: 92447,
        rating: 4.5,
        images: ['43d8990d7bf50bb21da691f9ddafd509.jpg'],
        image:
          'https://media.myshows.me/shows/small/4/3d/43d8990d7bf50bb21da691f9ddafd509.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 20,
        title: 'Friends',
        titleOriginal: 'Friends',
        status: 'Canceled/Ended',
        totalSeasons: 10,
        year: 1994,
        watching: 213436,
        voted: 112382,
        rating: 4.76,
        images: [
          '3902fe3a363a08eb23b02d0743a2461d.jpg',
          'bfb0737ecd5357a9a0b38df4dd83e8c4.jpg',
          '756a772ace39c1f91b88d20848baf4af.jpg',
          'e21f42929b919cffc7d68b1c21f72cb2.jpg',
          '12a5d8aa550f55de4c7e9e79f91c7bfc.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/3/90/3902fe3a363a08eb23b02d0743a2461d.jpg',
        onlineCount: null,
        promoUrl:
          'https://www.kinopoisk.ru/film/77044/watch/?utm_source=myshows\u0026utm_medium=paid_performance\u0026utm_campaign=friends\u0026utm_content=main_page_popular_promo\u0026utm_term=un_registered\u0026source=kinopoisk_paid_performance_myshows_friends_main_page_popular_promo_un_registered',
        category: 'show',
      },
      {
        id: 136,
        title: 'The Vampire Diaries',
        titleOriginal: 'The Vampire Diaries',
        status: 'Canceled/Ended',
        totalSeasons: 8,
        year: 2009,
        watching: 207373,
        voted: 99642,
        rating: 4.08,
        images: [
          '820cfc454b115f23cb9b6a0fb8cd8549.jpg',
          '5cbb4a909e565d9d46e73308233b78ca.jpg',
          '634a89f02f6ced78d1e5e34f41f7b5b4.jpg',
          '5e318959b918536f8d65ae9077aa5f56.jpg',
          'b2303fe99730586a510a36adcdd6941f.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/8/20/820cfc454b115f23cb9b6a0fb8cd8549.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 71,
        title: 'How I Met Your Mother',
        titleOriginal: 'How I Met Your Mother',
        status: 'Canceled/Ended',
        totalSeasons: 9,
        year: 2005,
        watching: 203781,
        voted: 107234,
        rating: 4.55,
        images: [
          'deaf1f9b397829ea23dc90991c90bbbc.jpg',
          '7beaf49d396dbb763dd5fa1271c89b63.jpg',
          '4175cdf335cdc18896837b060eee3c12.jpg',
          '0959604f4ce4e7e8d312b8ef84b57084.jpg',
          '0a7c40ba87393e384c8494e4a9a284c9.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/d/ea/deaf1f9b397829ea23dc90991c90bbbc.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 9118,
        title: 'Shameless',
        titleOriginal: 'Shameless',
        status: 'Canceled/Ended',
        totalSeasons: 11,
        year: 2011,
        watching: 193614,
        voted: 86888,
        rating: 4.59,
        images: ['ea46cd91168bea7a0e6aa09a1d17a1e2.jpg'],
        image:
          'https://media.myshows.me/shows/small/e/a4/ea46cd91168bea7a0e6aa09a1d17a1e2.jpg',
        onlineCount: null,
        promoUrl:
          'https://hd.kinopoisk.ru/film/42136048353b48cfa4225742c71e341e?utm_source=myshows\u0026utm_medium=paid_performance\u0026utm_campaign=shameless11\u0026utm_content=main_page_popular_promo\u0026utm_term=un_registered\u0026source=kinopoisk_paid_performance_myshows_shameless11_main_page_popular_promo_un_registered\u0026erid=4CQwVszH9pN7PW2NYJ5',
        category: 'show',
      },
      {
        id: 7,
        title: 'Dexter',
        titleOriginal: 'Dexter',
        status: 'Canceled/Ended',
        totalSeasons: 9,
        year: 2006,
        watching: 189455,
        voted: 94587,
        rating: 4.37,
        images: [
          '1db28eb1387f379e320ea8d1ab9f4337.jpg',
          '76f18a51101e999e8553f03edf0c66a9.jpg',
          '6c9f42dc7671b74752248da250525483.jpg',
          '3a9b70b87f5ddf24aadc9f117c57cbc7.jpg',
          '86cb7ca8b4ab6512830a5065d919aef0.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/1/db/1db28eb1387f379e320ea8d1ab9f4337.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 26428,
        title: 'True Detective',
        titleOriginal: 'True Detective',
        status: 'Returning Series',
        totalSeasons: 4,
        year: 2014,
        watching: 174674,
        voted: 78110,
        rating: 4.51,
        images: [
          '8b0dae9bcfc6d889a2760a4c30eb7f91.jpg',
          '85a375f836203b61594137719d6846b6.jpg',
          '68402cd5f00614415ebebd03c5ede330.jpg',
          'ba5cae5030a76228f0a01f890ba09a01.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/8/b0/8b0dae9bcfc6d889a2760a4c30eb7f91.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 55,
        title: 'Scrubs',
        titleOriginal: 'Scrubs',
        status: 'Canceled/Ended',
        totalSeasons: 9,
        year: 2001,
        watching: 170788,
        voted: 88893,
        rating: 4.62,
        images: ['3218792d85d3a7d35f72aeab0f73ec5d.jpg'],
        image:
          'https://media.myshows.me/shows/small/3/21/3218792d85d3a7d35f72aeab0f73ec5d.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 30443,
        title: 'Hannibal',
        titleOriginal: 'Hannibal',
        status: 'Canceled/Ended',
        totalSeasons: 3,
        year: 2013,
        watching: 159673,
        voted: 73056,
        rating: 4.29,
        images: [
          'ee415da4a054992d8134315b43001dca.jpg',
          '4167bcbe6c3902db7d78898199b9228b.jpg',
          '3b38af827d483359f675ac241d4a283a.jpg',
          '714b0a71607b2629956c6051074c3dc0.jpg',
          '71e0b6617593b06a4cf86d79b124212b.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/e/e4/ee415da4a054992d8134315b43001dca.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 59512,
        title: 'Sex Education',
        titleOriginal: 'Sex Education',
        status: 'Canceled/Ended',
        totalSeasons: 4,
        year: 2019,
        watching: 157466,
        voted: 68830,
        rating: 4.52,
        images: ['1643076861bb18165735f2b1809d0189.jpg'],
        image:
          'https://media.myshows.me/shows/small/1/64/1643076861bb18165735f2b1809d0189.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 17483,
        title: 'Once Upon a Time',
        titleOriginal: 'Once Upon a Time',
        status: 'Canceled/Ended',
        totalSeasons: 7,
        year: 2011,
        watching: 155096,
        voted: 67415,
        rating: 4.04,
        images: ['2c6846f8e0451ecb3bd00b72db4534f3.jpg'],
        image:
          'https://media.myshows.me/shows/small/2/c6/2c6846f8e0451ecb3bd00b72db4534f3.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 33416,
        title: 'Peaky Blinders',
        titleOriginal: 'Peaky Blinders',
        status: 'Canceled/Ended',
        totalSeasons: 6,
        year: 2013,
        watching: 154638,
        voted: 55935,
        rating: 4.56,
        images: [
          '87ab0bc77f133fb61695e4b5959d2d8f.jpg',
          '29e7fd7654fb7671a02ed4be16fa5fe6.jpg',
          '8ad1fb3ef07e6d9290f178af357f87a6.jpg',
          '8b0e8b6d5df72cf12237012784146506.jpg',
          'bbee753283e3db223685ad0081a4cd92.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/8/7a/87ab0bc77f133fb61695e4b5959d2d8f.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 43786,
        title: 'Lucifer',
        titleOriginal: 'Lucifer',
        status: 'Canceled/Ended',
        totalSeasons: 6,
        year: 2016,
        watching: 152175,
        voted: 59918,
        rating: 4.34,
        images: ['05724c51ed568f0c03539763fbcd806e.jpg'],
        image:
          'https://media.myshows.me/shows/small/0/57/05724c51ed568f0c03539763fbcd806e.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 15912,
        title: 'Teen Wolf',
        titleOriginal: 'Teen Wolf',
        status: 'Canceled/Ended',
        totalSeasons: 6,
        year: 2011,
        watching: 151171,
        voted: 69412,
        rating: 4.25,
        images: [
          '5a5e9ad21a8791543141dd867ec41521.jpg',
          '6875a7b8a4e1cbbce95709bad35e17a1.jpg',
          '53a2b018451a957360e082992c1d1868.jpg',
          'ee99582965dab7ad1fd1ebd89e125015.jpg',
          'c7eef6141c0e29f46ebfe401603203eb.jpg',
        ],
        image:
          'https://media.myshows.me/shows/small/5/a5/5a5e9ad21a8791543141dd867ec41521.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 60164,
        title: 'Chernobyl',
        titleOriginal: 'Chernobyl',
        status: 'Canceled/Ended',
        totalSeasons: 1,
        year: 2019,
        watching: 150530,
        voted: 71021,
        rating: 4.72,
        images: ['22d5550c0256b4fc9ad3dda787099428.jpg'],
        image:
          'https://media.myshows.me/shows/small/2/2d/22d5550c0256b4fc9ad3dda787099428.jpg',
        onlineCount: null,
        promoUrl:
          'https://www.kinopoisk.ru/film/1227803/watch/?utm_source=myshows\u0026utm_medium=paid_performance\u0026utm_campaign=%D1%81hernobyl\u0026utm_content=main_page_popular_promo\u0026utm_term=un_registered\u0026source=kinopoisk_paid_performance_myshows_%D1%81hernobyl_main_page_popular_promo_un_registered',
        category: 'show',
      },
      {
        id: 227,
        title: 'Gossip Girl',
        titleOriginal: 'Gossip Girl',
        status: 'Canceled/Ended',
        totalSeasons: 6,
        year: 2007,
        watching: 149098,
        voted: 67469,
        rating: 4.15,
        images: ['40246a16b23ed5c4c87ae8dfe04cd22d.jpg'],
        image:
          'https://media.myshows.me/shows/small/4/02/40246a16b23ed5c4c87ae8dfe04cd22d.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
      {
        id: 331,
        title: 'Doctor Who',
        titleOriginal: 'Doctor Who',
        status: 'Returning Series',
        totalSeasons: 15,
        year: 2005,
        watching: 149018,
        voted: 72409,
        rating: 4.56,
        images: ['caaab448e00bfbb60894053b9485c955.jpg'],
        image:
          'https://media.myshows.me/shows/small/c/aa/caaab448e00bfbb60894053b9485c955.jpg',
        onlineCount: null,
        promoUrl:
          'https://hd.kinopoisk.ru/film/42f2dbf8769771ee8e369dae46e6e677?utm_source=myshows\u0026utm_medium=paid_performance\u0026utm_campaign=doctorwho13\u0026utm_content=main_page_popular_promo\u0026utm_term=all\u0026source=kinopoisk_paid_performance_myshows_doctorwho13_main_page_popular_promo_all\u0026erid=4CQwVszH9pNAsuH21RR',
        category: 'show',
      },
      {
        id: 25561,
        title: 'Gravity Falls',
        titleOriginal: 'Gravity Falls',
        status: 'Canceled/Ended',
        totalSeasons: 2,
        year: 2012,
        watching: 146824,
        voted: 76039,
        rating: 4.78,
        images: ['e47c3386832b8399ee0a8c8ccb0770d2.jpg'],
        image:
          'https://media.myshows.me/shows/small/e/47/e47c3386832b8399ee0a8c8ccb0770d2.jpg',
        onlineCount: null,
        promoUrl: null,
        category: 'show',
      },
    ],
    id: 2,
  },
]

export const mockList =
  'result' in mockListJson[1] ? mockListJson[1].result : []

export const mockListItem = mockList[0]
