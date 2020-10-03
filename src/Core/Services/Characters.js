import { marvelApi } from 'Core/External/MarvelApi'
import { ApiParser } from 'Core/Parser/Api'
import { CharacterParser } from 'Core/Parser/Character'

const serverPayload = {
  offset: 40,
  limit: 20,
  total: 1493,
  count: 20,
  results: [
    {
      id: 1010905,
      name: 'Amun',
      description: "Amun is a ruthless teenage assassin, employed by the Sisterhood of the Wasp to serve under the mage Vincent after Araña interrupted the ritual to initiate the Wasp's new chosen one.",
      modified: '1969-12-31T19:00:00-0500', thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010905',
      comics: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010905/comics',
        items: [],
        returned: 0
      },
      series: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010905/series',
        items: [],
        returned: 0
      },
      stories: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010905/stories',
        items: [],
        returned: 0
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010905/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/140/amun?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Amun?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010905/amun?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1009152,
      name: 'Ancient One',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009152',
      comics: {
        available: 29,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009152/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/62140',
            name: 'Doctor Strange and the Sorcerers Supreme Vol. 1: Out of Time (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20234',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #7'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20245',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20172',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #13'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20182',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #22'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20183',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #23'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20194',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #33'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20195',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #34'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20207',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #45'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20209',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #47'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20217',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #54'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20218',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #55'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20250',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #84'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20251',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #85'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20253',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #87'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20254',
            name: 'Doctor Strange, Sorcerer Supreme (1988) #88'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20090',
            name: 'Doctor Strange (1974) #12'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20091',
            name: 'Doctor Strange (1974) #13'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20097',
            name: 'Doctor Strange (1974) #19'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/50874',
            name: 'Guardians of the Galaxy (1990) #19'
          }
        ],
        returned: 20
      },
      series: {
        available: 10,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009152/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3740',
            name: 'Doctor Strange (1974 - 1988)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22767',
            name: 'Doctor Strange and the Sorcerers Supreme Vol. 1: Out of Time (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3741',
            name: 'Doctor Strange, Sorcerer Supreme (1988 - 1996)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/21012',
            name: 'Doctor Strange: Masterworks Vol. 7 (2016)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/19019',
            name: 'Guardians of the Galaxy (1990 - 1994)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/19020',
            name: 'Guardians of the Galaxy Annual (1991)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23063',
            name: "Guidebook to The Marvel Cinematic Universe - Marvel's Doctor Strange (2017)"
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1468',
            name: 'Marvel Masterworks: Doctor Strange Vol. (2005)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2076',
            name: 'Strange Tales (1951 - 1968)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3648',
            name: 'What If? (1989 - 1998)'
          }
        ],
        returned: 10
      },
      stories: {
        available: 34,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009152/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10258',
            name: 'Cover #10258',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10263',
            name: 'If Kaluu Should Triumph...',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10292',
            name: 'Umar Walks the Earth!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/10333',
            name: 'This Dream---This Doom!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/39010',
            name: 'What if Wolverine had Become Lord of the Vampires?',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43011',
            name: 'Doctor Strange (1974) #12',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43012',
            name: 'Final Curtain!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43040',
            name: 'Doctor Strange (1974) #13',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43041',
            name: 'Planet Earth is No More!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43052',
            name: 'Doctor Strange (1974) #19',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43053',
            name: 'Lo, the Powers Changeth!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43211',
            name: 'TBOTV:The Curse of the Darkhold Part V, The Torch is Passed',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43237',
            name: 'TBOTV:Legends and Lore of the Dark Dimension, Part 2',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43240',
            name: 'TBOTV:Legends and Lore of the Dark Dimension, Part 3',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43266',
            name: 'The Alexandrain Quatrain',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43269',
            name: 'Is There a Doctor Not In The House?',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43293',
            name: "Death's Greatest Hits",
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43297',
            name: 'Strange Bedfellows II',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43314',
            name: 'From Here...To There...To Eternity',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43317',
            name: 'World Enough, And Time...',
            type: 'interiorStory'
          }
        ],
        returned: 20
      },
      events: {
        available: 2,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009152/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War'
          }
        ],
        returned: 2
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/145/ancient_one?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Ancient_One?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009152/ancient_one?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1016824,
      name: 'Ancient One (Ultimate)',
      description: '',
      modified: '2012-07-10T19:15:49-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016824',
      comics: {
        available: 2,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016824/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15771',
            name: 'Ultimate Marvel Team-Up (2001) #12'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5132',
            name: 'Ultimate Marvel Team-Up Ultimate Collection (Trade Paperback)'
          }
        ],
        returned: 2
      },
      series: {
        available: 2,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016824/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2311',
            name: 'Ultimate Marvel Team-Up (2001 - 2002)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1823',
            name: 'Ultimate Marvel Team-Up Ultimate Collection (2006)'
          }
        ],
        returned: 2
      },
      stories: {
        available: 1,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016824/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/32118',
            name: '[untitled]',
            type: 'interiorStory'
          }
        ],
        returned: 1
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016824/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/145/ancient_one?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1016824/ancient_one_ultimate?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1011396,
      name: 'Angel (Thomas Halloway)',
      description: '',
      modified: '2014-03-05T13:14:48-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011396',
      comics: {
        available: 10,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011396/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20636',
            name: 'Incredible Hercules (2008) #114'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3973',
            name: 'MARVEL MASTERWORKS: GOLDEN AGE MARVEL COMICS VOL. 2 HC (Hardcover)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16736',
            name: 'Marvel Mystery Comics (1939) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16758',
            name: 'Marvel Mystery Comics (1939) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16733',
            name: 'Marvel Mystery Comics (1939) #27'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/26595',
            name: 'The Marvels Project (2009) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/28927',
            name: 'The Marvels Project (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/26599',
            name: 'The Marvels Project (2009) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/26600',
            name: 'The Marvels Project (2009) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30554',
            name: 'The Marvels Project (2009) #7'
          }
        ],
        returned: 10
      },
      series: {
        available: 5,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011396/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3762',
            name: 'Incredible Hercules (2008 - 2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1730',
            name: 'MARVEL MASTERWORKS: GOLDEN AGE MARVEL COMICS VOL. 2 HC (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2981',
            name: 'Marvel Mystery Comics (1939 - 1949)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8395',
            name: 'The Marvels Project (2009 - 2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10470',
            name: 'The Marvels Project (2011)'
          }
        ],
        returned: 5
      },
      stories: {
        available: 9,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011396/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/34538',
            name: 'Cover #34538',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/34565',
            name: 'Cover #34565',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/34757',
            name: '[untitled]',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44256',
            name: 'Herc 3 of 4',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/58499',
            name: 'Cover #58499',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/58507',
            name: 'Cover #58507',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/58509',
            name: 'Cover #58509',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/63049',
            name: 'The Marvels Project: Birth Of The Super Heroes TPB',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/69934',
            name: 'Cover #69934',
            type: 'cover'
          }
        ],
        returned: 9
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011396/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1011396/angel_thomas_halloway?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Angel_(Thomas_Halloway)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1011396/angel_thomas_halloway?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1011338,
      name: 'Angel (Ultimate)',
      description: '',
      modified: '2014-03-05T13:15:49-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/50/531769ae4399f',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011338',
      comics: {
        available: 19,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011338/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15715',
            name: 'Ultimate X-Men (2001) #24'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15716',
            name: 'Ultimate X-Men (2001) #25'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/211',
            name: 'Ultimate X-Men (2001) #40'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2227',
            name: 'Ultimate X-Men (2001) #61'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2475',
            name: 'Ultimate X-Men (2001) #63'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2476',
            name: 'Ultimate X-Men (2001) #64'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3037',
            name: 'Ultimate X-Men (2001) #65'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4041',
            name: 'Ultimate X-Men (2001) #69'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4153',
            name: 'Ultimate X-Men (2001) #70'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16453',
            name: 'Ultimate X-Men (2001) #86'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20638',
            name: 'Ultimate X-Men (2001) #91'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20967',
            name: 'Ultimate X-Men (2001) #93'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21177',
            name: 'Ultimate X-Men (2001) #94'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21326',
            name: 'Ultimate X-Men (2001) #95'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21507',
            name: 'Ultimate X-Men (2001) #96'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21709',
            name: 'Ultimate X-Men (2001) #97'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/23572',
            name: 'Ultimate X-Men (2001) #100'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15918',
            name: 'Ultimate X-Men Annual (2005) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5057',
            name: 'Ultimate X-Men Vol. 14: Phoenix? (Trade Paperback)'
          }
        ],
        returned: 19
      },
      series: {
        available: 3,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011338/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/474',
            name: 'Ultimate X-Men (2001 - 2009)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1055',
            name: 'Ultimate X-Men Annual (2005 - 2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1662',
            name: 'Ultimate X-Men Vol. 14: Phoenix? (2006)'
          }
        ],
        returned: 3
      },
      stories: {
        available: 32,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011338/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1454',
            name: 'Ultimate X-Men (2001) #61',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1455',
            name: '1 of 5 - Escape of Magneto',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1458',
            name: 'Ultimate X-Men (2001) #63',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1459',
            name: '3 of 5 - Magnetic North',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1460',
            name: 'Ultimate X-Men (2001) #64',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1461',
            name: '4 of 5 - Magnetic North',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1462',
            name: 'Ultimate X-Men (2001) #65',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1463',
            name: '5 of 5 - Magnetic North',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1470',
            name: 'Ultimate X-Men (2001) #69',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1471',
            name: '1 of 3 -',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1472',
            name: 'Ultimate X-Men (2001) #70',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1473',
            name: '2 of 3 -',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2041',
            name: 'Ultimate X-Men (2001) #40',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/31888',
            name: '[UNCANNY X-MEN #416 Preview]',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/31899',
            name: '[UNCANNY X-MEN #416 Preview]',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33168',
            name: 'Sentinels 3 of 5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36757',
            name: 'Ultimate X-Men Annual (2005) #1',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36758',
            name: 'Interior #36758',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44259',
            name: 'Ultimate X-Men (2001) #91',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44260',
            name: 'Apocalypse Now 3 of 5',
            type: 'interiorStory'
          }
        ],
        returned: 20
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011338/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1/angel?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Angel_(Ultimate)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1011338/angel_ultimate?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1009153,
      name: 'Angel (Warren Worthington III)',
      description: '',
      modified: '2012-05-30T14:06:57-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009153',
      comics: {
        available: 114,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009153/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/60507',
            name: 'All-New Wolverine (2015) #17'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21197',
            name: 'Angel: Revelations (2008) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21345',
            name: 'Angel: Revelations (2008) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21525',
            name: 'Angel: Revelations (2008) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21725',
            name: 'Angel: Revelations (2008) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21953',
            name: 'Angel: Revelations (2008) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65055',
            name: 'Astonishing X-Men (2017) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65405',
            name: 'Astonishing X-Men (2017) #7'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66299',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8055',
            name: 'Champions (1975) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8066',
            name: 'Champions (1975) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8067',
            name: 'Champions (1975) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8068',
            name: 'Champions (1975) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8069',
            name: 'Champions (1975) #7'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8070',
            name: 'Champions (1975) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8056',
            name: 'Champions (1975) #10'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8058',
            name: 'Champions (1975) #12'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8059',
            name: 'Champions (1975) #13'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8061',
            name: 'Champions (1975) #15'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8063',
            name: 'Champions (1975) #17'
          }
        ],
        returned: 20
      },
      series: {
        available: 45,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009153/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20682',
            name: 'All-New Wolverine (2015 - 2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4811',
            name: 'Angel: Revelations (2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23262',
            name: 'Astonishing X-Men (2017 - 2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24018',
            name: 'Astonishing X-Men by Charles Soule Vol. 1: Life of X (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2001',
            name: 'Champions (1975 - 1978)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1635',
            name: 'Decimation: Generation M (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3743',
            name: 'Defenders (1972 - 1986)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22406',
            name: 'Defenders Epic Collection: Ashes, Ashes… (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/30527',
            name: 'Empyre: X-Men (2020)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2012',
            name: 'Fantastic Four Annual (1963 - 1994)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2435',
            name: 'Fantastic Four Omnibus Vol. 2 (2007)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/341',
            name: 'FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 2 TPB (2004)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/21726',
            name: 'Gambit Annual (2000)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13853',
            name: 'Gambit: From the Marvel Vault (2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/973',
            name: 'Generation M (2005 - 2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4819',
            name: 'Genext (2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23096',
            name: 'Iceman (2017 - 2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13344',
            name: 'Iceman and Angel (2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2983',
            name: 'Incredible Hulk Annual (1976 - 1994)'
          }
        ],
        returned: 20
      },
      stories: {
        available: 119,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009153/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4058',
            name: 'Cover #4058',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5489',
            name: '4 of 5 - 5XLS',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5491',
            name: '5 of 5 - 5XLS - Generation M',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5992',
            name: '1 of 1 - The Peach Boy',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12765',
            name: 'Fantastic Four (1961) #250',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12766',
            name: 'X-Factor',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15346',
            name: 'Fantastic Four Annual (1963) #3',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15347',
            name: 'Bedlam at the Baxter Builing',
            type: ''
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15379',
            name: 'Uncanny X-Men (1963) #100',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15602',
            name: 'Uncanny X-Men (1963) #61',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20434',
            name: 'Cover #20434',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20436',
            name: 'Cover #20436',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20440',
            name: 'From Beyond the Stars...The Stranger Strikes!',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20442',
            name: 'Cover #20442',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20446',
            name: 'Cover #20446',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20450',
            name: 'Cover #20450',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20456',
            name: 'Cover #20456',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20458',
            name: 'Cover #20458',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20460',
            name: 'Cover #20460',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/20462',
            name: 'Cover #20462',
            type: 'cover'
          }
        ],
        returned: 20
      },
      events: {
        available: 5,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009153/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/316',
            name: 'X-Men: Battle of the Atom'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/306',
            name: 'X-Men: Schism'
          }
        ],
        returned: 5
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/1/angel?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Angel_(Warren_Worthington_III)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009153/angel_warren_worthington_iii?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1017574,
      name: 'Angela (Aldrif Odinsdottir)',
      description: '',
      modified: '2014-11-17T17:45:37-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/00/545a82f59dd73',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017574',
      comics: {
        available: 36,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017574/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/51201',
            name: '1602 Witch Hunter Angela (2015) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/56505',
            name: 'Angela: Queen of Hel (2015) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71308',
            name: 'Asgardians of the Galaxy (2018) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71310',
            name: 'Asgardians of the Galaxy (2018) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71311',
            name: 'Asgardians of the Galaxy (2018) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71312',
            name: 'Asgardians of the Galaxy (2018) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71313',
            name: 'Asgardians of the Galaxy (2018) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73994',
            name: 'Asgardians of the Galaxy (2018) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73995',
            name: 'Asgardians of the Galaxy (2018) #7'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73996',
            name: 'Asgardians of the Galaxy (2018) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73998',
            name: 'Asgardians of the Galaxy (2018) #10'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/71309',
            name: 'Asgardians Of The Galaxy Vol. 1: The Infinity Armada (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43301',
            name: 'Guardians of the Galaxy (2013) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43300',
            name: 'Guardians of the Galaxy (2013) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43296',
            name: 'Guardians of the Galaxy (2013) #10'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/43295',
            name: 'Guardians of the Galaxy (2013) #11'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/60980',
            name: 'Guardians of the Galaxy (2015) #18'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/60676',
            name: 'GUARDIANS OF THE GALAXY VOL. 4 HC (Hardcover)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/60168',
            name: 'Guardians of The Galaxy: New Guard Vol. 3 - Civil War II (Hardcover)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/60169',
            name: 'Guardians of the Galaxy: New Guard Vol. 3 - Civil War II (Trade Paperback)'
          }
        ],
        returned: 20
      },
      series: {
        available: 14,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017574/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/19244',
            name: '1602 Witch Hunter Angela (2015)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20696',
            name: 'Angela: Queen of Hel (2015 - 2016)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/25996',
            name: 'Asgardians of the Galaxy (2018 - Present)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/25997',
            name: 'Asgardians Of The Galaxy Vol. 1: The Infinity Armada (2019)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16410',
            name: 'Guardians of the Galaxy (2013 - 2015)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20465',
            name: 'Guardians of the Galaxy (2015 - 2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22420',
            name: 'GUARDIANS OF THE GALAXY VOL. 4 HC (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22117',
            name: 'Guardians of The Galaxy: New Guard Vol. 3 - Civil War II (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22118',
            name: 'Guardians of the Galaxy: New Guard Vol. 3 - Civil War II (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22121',
            name: "Mighty Thor Vol. 3: The Asgard/Shi'ar War (2018)"
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22120',
            name: "Mighty Thor Vol. 3: The Asgard/Shi'ar War (2017)"
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18681',
            name: 'Original Sin (2014)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27891',
            name: 'Strikeforce (2019 - 2020)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24308',
            name: 'Thor (2018 - 2019)'
          }
        ],
        returned: 14
      },
      stories: {
        available: 36,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017574/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/96952',
            name: 'Cover #96952',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/96954',
            name: 'Guardians of the Galaxy #10',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/96962',
            name: 'Cover #96962',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/96964',
            name: 'Cover #96964',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/111122',
            name: 'cover from new series (2015) #6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/113693',
            name: 'ORIGINAL SIN 5.1 ',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/113708',
            name: 'ORIGINAL SIN 5.2 (SIN, WITH DIGITAL CODE)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/113729',
            name: 'ORIGINAL SIN 5.3 (SIN, WITH DIGITAL CODE)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/113773',
            name: 'ORIGINAL SIN 5.4 (SIN, WITH DIGITAL CODE)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/113810',
            name: 'ORIGINAL SIN 5.5 (SIN, WITH DIGITAL CODE)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/113979',
            name: 'cover from 1602 Witch Hunter Angela (2015) #4',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/121290',
            name: 'Original Sin (2014) #8 Cover',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/123865',
            name: 'cover from Angela: Queen of Hel (2015) #5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/130833',
            name: 'cover from Guardians of the Galaxy: New Guard (2017)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/130835',
            name: 'cover from Guardians of the Galaxy: New Guard (2017)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/130839',
            name: 'cover from Mighty Thor (2017)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/130841',
            name: 'cover from Mighty Thor (2017)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/131821',
            name: 'cover from Guardians of the Galaxy: New Guard (2017)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/132413',
            name: 'cover from Guardians of the Galaxy (2015) #18',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/154813',
            name: 'cover from Thor (2018) #8',
            type: 'cover'
          }
        ],
        returned: 20
      },
      events: {
        available: 1,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017574/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
            name: 'Original Sin'
          }
        ],
        returned: 1
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1017574/angela_aldrif_odinsdottir?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1017574/angela_aldrif_odinsdottir?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1010674,
      name: 'Anita Blake',
      description: '',
      modified: '2004-04-14T00:00:00-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c0038fa14452',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010674',
      comics: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010674/comics',
        items: [],
        returned: 0
      },
      series: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010674/series',
        items: [],
        returned: 0
      },
      stories: {
        available: 49,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010674/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/6285',
            name: 'Cover #6285',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7932',
            name: 'Cover #7932',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33070',
            name: '2XLS - The First Death 2 of 2',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33374',
            name: '12XLS 8 of 12',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44350',
            name: '12XLS 8 of 12',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44711',
            name: '12XLS 9 of 12',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/46887',
            name: '12XLS 11 of 12',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/47188',
            name: '12XLS 12 of 12',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/49008',
            name: '15XLS 1 of 15',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50014',
            name: '15XLS 2 of 15',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/51012',
            name: '15XLS 3 of 15',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/51361',
            name: '5XLS 4 of 5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/52361',
            name: '5XLS 5 of 5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/53269',
            name: '5XLS 1 of 5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/53270',
            name: '5XLS 1 of 5',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/53271',
            name: '5XLS 1 of 5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/53678',
            name: '5XLS 2 of 5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/53679',
            name: '5XLS 2 of 5',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/53989',
            name: 'Cover #53989',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/53991',
            name: 'Cover #53991',
            type: 'cover'
          }
        ],
        returned: 20
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010674/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/3428/anita_blake?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Blake,_Anita_(Anita_Blake_Universe)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010674/anita_blake?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1009346,
      name: 'Anne Marie Hoag',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009346',
      comics: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009346/comics',
        items: [],
        returned: 0
      },
      series: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009346/series',
        items: [],
        returned: 0
      },
      stories: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009346/stories',
        items: [],
        returned: 0
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009346/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/2714/anne_marie_hoag?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009346/anne_marie_hoag?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1009154,
      name: 'Annihilus',
      description: '',
      modified: '2013-11-20T17:06:36-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/f0/528d31f20a2f6',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009154',
      comics: {
        available: 65,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009154/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55364',
            name: 'All-New, All-Different Avengers (2015) #11'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4788',
            name: 'Annihilation (2006) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5230',
            name: 'Annihilation (2006) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5529',
            name: 'Annihilation (2006) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5795',
            name: 'Annihilation (2006) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4473',
            name: 'Annihilation: Nova (2006) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4218',
            name: 'Annihilation: Silver Surfer (2006) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4315',
            name: 'Annihilation: Silver Surfer (2006) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66602',
            name: 'Annihilation: The Complete Collection Vol. 1 (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4822',
            name: 'Annihilation: The Nova Corps (2006) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2055',
            name: 'Essential Fantastic Four Vol. 4 (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15537',
            name: 'Fantastic Four (1998) #19'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15561',
            name: 'Fantastic Four (1998) #40'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15563',
            name: 'Fantastic Four (1998) #42'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15564',
            name: 'Fantastic Four (1998) #43'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/15565',
            name: 'Fantastic Four (1998) #44'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12982',
            name: 'Fantastic Four (1961) #179'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13063',
            name: 'Fantastic Four (1961) #251'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13064',
            name: 'Fantastic Four (1961) #252'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13065',
            name: 'Fantastic Four (1961) #253'
          }
        ],
        returned: 20
      },
      series: {
        available: 30,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009154/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20443',
            name: 'All-New, All-Different Avengers (2015 - 2016)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3613',
            name: 'Annihilation (2006 - 2007)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1081',
            name: 'Annihilation: Nova (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1078',
            name: 'Annihilation: Silver Surfer (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24256',
            name: 'Annihilation: The Complete Collection Vol. 1 (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1115',
            name: 'Annihilation: The Nova Corps (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1263',
            name: 'Essential Fantastic Four Vol. 4 (2005)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/421',
            name: 'Fantastic Four (1998 - 2012)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2121',
            name: 'Fantastic Four (1961 - 1998)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2123',
            name: 'Fantastic Four (1996 - 1997)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2012',
            name: 'Fantastic Four Annual (1963 - 1994)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1424',
            name: 'Fantastic Four Visionaries: John Byrne Vol. 3 (2004)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13577',
            name: 'Iron Man (1996 - 1998)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/991',
            name: 'Last Planet Standing (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3719',
            name: 'Marvel Fanfare (1982 - 1992)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/49',
            name: 'Marvel Mangaverse Vol. I (2002)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2275',
            name: 'Marvel Mangaverse: Fantastic Four (2002)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1437',
            name: 'Marvel Masterworks: The Fantastic Four Vol. 8 (2005)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2059',
            name: 'Paradise X (2002 - 2003)'
          }
        ],
        returned: 20
      },
      stories: {
        available: 82,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009154/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5594',
            name: '3 of 5 XLS',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5596',
            name: '4 of 5 XLS',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5598',
            name: '5 of 5 XLS',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5927',
            name: 'Annihilation: Silver Surfer (2006) #2',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5929',
            name: 'Annihilation: Silver Surfer (2006) #3',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5960',
            name: '3 of 6 - Annihilation',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5962',
            name: '4 of 6 - Annihilation',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5966',
            name: '6 of 6 - End of Story',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/6149',
            name: 'Cover #6149',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12584',
            name: 'Fantastic Four (1961) #179',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12585',
            name: 'A Robinson Crusoe in the Negative Zone!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12768',
            name: 'Fantastic Four (1961) #251',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12769',
            name: 'Into the Negative Zone',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12770',
            name: 'Fantastic Four (1961) #252',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12771',
            name: 'Cityscape',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12772',
            name: 'Fantastic Four (1961) #253',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12773',
            name: 'Quest',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12774',
            name: 'Fantastic Four (1961) #254',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12775',
            name: 'The Minds of Mantracora',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/12776',
            name: 'Fantastic Four (1961) #255',
            type: 'cover'
          }
        ],
        returned: 20
      },
      events: {
        available: 1,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009154/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/229',
            name: 'Annihilation'
          }
        ],
        returned: 1
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009154/annihilus?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Annihilus?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009154/annihilus?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1011301,
      name: 'Anole',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4c002e635ddd9',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011301',
      comics: {
        available: 5,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011301/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/73064',
            name: 'Age Of X-Man: Nextgen (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24173',
            name: 'Runaways (2008) #10'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/26970',
            name: 'Uncanny X-Men (1963) #517'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/79949',
            name: 'X-Men (2019) #11'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/79950',
            name: 'X-Men (2019) #12'
          }
        ],
        returned: 5
      },
      series: {
        available: 4,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011301/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26372',
            name: 'Age Of X-Man: Nextgen (2019)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5338',
            name: 'Runaways (2008 - 2009)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27567',
            name: 'X-Men (2019 - 2020)'
          }
        ],
        returned: 4
      },
      stories: {
        available: 5,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011301/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/53571',
            name: 'Interior #53571',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/59253',
            name: 'Interior #59253',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/162802',
            name: 'cover from AGE OF X-MAN: TBD B TPB (2019) #1',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/176967',
            name: 'cover from X-Men (2019) #11',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/176969',
            name: 'cover from X-Men (2019) #12',
            type: 'cover'
          }
        ],
        returned: 5
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011301/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/155/anole?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Anole?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1011301/anole?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1010802,
      name: "Ant-Man (Eric O'Grady)",
      description: '',
      modified: '2014-03-05T13:20:04-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010802',
      comics: {
        available: 42,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010802/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/36765',
            name: 'Ant-Man & the Wasp (2010) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/36764',
            name: 'Ant-Man & the Wasp (2010) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/36763',
            name: 'Ant-Man & the Wasp (2010) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37655',
            name: 'Ant-Man & Wasp: Small World (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
            name: 'Avengers: The Initiative (2007) #14'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
            name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
            name: 'Avengers: The Initiative (2007) #17'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
            name: 'Avengers: The Initiative (2007) #18'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
            name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
            name: 'Avengers: The Initiative (2007) #19'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22912',
            name: 'Avengers: The Initiative (2007) #20'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39955',
            name: 'Fear Itself: The Fearless (2011) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/34543',
            name: 'I Am an Avenger (2010) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5199',
            name: 'Irredeemable Ant-Man (2006) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5360',
            name: 'Irredeemable Ant-Man (2006) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5628',
            name: 'Irredeemable Ant-Man (2006) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5775',
            name: 'Irredeemable Ant-Man (2006) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5938',
            name: 'Irredeemable Ant-Man (2006) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6076',
            name: 'Irredeemable Ant-Man (2006) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6210',
            name: 'Irredeemable Ant-Man (2006) #7'
          }
        ],
        returned: 20
      },
      series: {
        available: 13,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010802/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13082',
            name: 'Ant-Man & the Wasp (2010 - 2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13540',
            name: 'Ant-Man & Wasp: Small World (2010 - Present)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
            name: 'Avengers: The Initiative (2007 - 2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14804',
            name: 'Fear Itself: The Fearless (2011 - 2012)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/11872',
            name: 'I Am an Avenger (2010 - 2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/977',
            name: 'Irredeemable Ant-Man (2006 - 2007)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2423',
            name: 'Irredeemable Ant-Man Vol. 1: Low-Life (2007)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/5202',
            name: 'Marvel Adventures Super Heroes (2008 - 2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13602',
            name: 'Onslaught Unleashed (2010 - 2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18681',
            name: 'Original Sin (2014)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9799',
            name: 'Secret Avengers (2010 - 2012)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/18527',
            name: 'Thunderbolts (2006 - 2012)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14016',
            name: 'X-Men: God Loves, Man Kills (2011 - 2019)'
          }
        ],
        returned: 13
      },
      stories: {
        available: 41,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010802/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5496',
            name: 'Irredeemable Ant-Man (2006) #1',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5498',
            name: 'Irredeemable Ant-Man (2006) #2',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5500',
            name: 'Irredeemable Ant-Man (2006) #3',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5502',
            name: 'Irredeemable Ant-Man (2006) #4',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7767',
            name: 'Irredeemable Ant-Man (2006) #5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/7769',
            name: 'Irredeemable Ant-Man (2006) #6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8237',
            name: 'Irredeemable Ant-Man (2006) #7',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8239',
            name: '6 of 6 - Story A',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/8641',
            name: 'Irredeemable Ant-Man (2006) #8',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/32343',
            name: 'Irredeemable Ant-Man (2006) #9',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/32573',
            name: 'Irredeemable Ant-Man (2006) #10',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/32953',
            name: 'Irredeemable Ant-Man (2006) #11',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33255',
            name: 'Irredeemable Ant-Man (2006) #12',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
            name: 'Avengers: The Initiative (2007) #14 - Int',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
            name: 'Avengers: The Initiative (2007) #17 - Int',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
            name: 'Avengers: The Initiative (2007) #18 - Int',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
            name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
            name: 'Avengers: The Initiative (2007) #19 - Int',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50870',
            name: 'Avengers: The Initiative (2007) #20 - Int',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50955',
            name: '24XLS 6 of 24',
            type: 'cover'
          }
        ],
        returned: 20
      },
      events: {
        available: 7,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010802/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
            name: 'Dark Reign'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
            name: 'Original Sin'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/309',
            name: 'Shattered Heroes'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
            name: 'Siege'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
            name: 'World War Hulk'
          }
        ],
        returned: 7
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1010802/ant-man_eric_ogrady?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Ant-Man_(Eric_O%27Grady)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010802/ant-man_eric_ogrady?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1010801,
      name: 'Ant-Man (Scott Lang)',
      description: '',
      modified: '2017-01-31T11:03:40-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010801',
      comics: {
        available: 114,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010801/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/60151',
            name: 'A YEAR OF MARVELS TPB (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17743',
            name: 'A-Next (1998) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17744',
            name: 'A-Next (1998) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17745',
            name: 'A-Next (1998) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17746',
            name: 'A-Next (1998) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17747',
            name: 'A-Next (1998) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17748',
            name: 'A-Next (1998) #7'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17749',
            name: 'A-Next (1998) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17750',
            name: 'A-Next (1998) #9'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17740',
            name: 'A-Next (1998) #10'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17741',
            name: 'A-Next (1998) #11'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17742',
            name: 'A-Next (1998) #12'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37256',
            name: 'Alias (2001) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37267',
            name: 'Alias (2001) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37277',
            name: 'Alias (2001) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37255',
            name: 'Alias Omnibus (Hardcover)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16899',
            name: 'Amazing Spider-Man Annual (1964) #24'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55334',
            name: 'The Astonishing Ant-Man Vol. 3: The Trial of Ant-Man (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/81176',
            name: 'Ant-Man (2020) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/55329',
            name: 'The Astonishing Ant-Man (2015) #1'
          }
        ],
        returned: 20
      },
      series: {
        available: 48,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010801/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22102',
            name: 'A YEAR OF MARVELS TPB (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3620',
            name: 'A-Next (1998 - 1999)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/672',
            name: 'Alias (2001 - 2003)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13383',
            name: 'Alias Omnibus (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23058',
            name: 'All-New Guardians of the Galaxy (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
            name: 'Amazing Spider-Man Annual (1964 - 2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/29032',
            name: 'Ant-Man (2020)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24290',
            name: 'Ant-Man & the Wasp (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24415',
            name: 'Ant-Man & the Wasp: Living Legends (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24323',
            name: 'Ant-Man and the Wasp Adventures (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24413',
            name: 'Ant-Man and the Wasp: Lost And Found (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24418',
            name: 'Ant-Man: Astonishing Origins (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
            name: 'Avengers (1998 - 2004)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24446',
            name: 'Avengers By Jonathan Hickman Omnibus Vol. 2 (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3971',
            name: 'Avengers Fairy Tales (2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20711',
            name: 'Captain America: Sam Wilson (2015 - 2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24551',
            name: 'Color Your Own Ant-Man and the Wasp (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23913',
            name: 'Deadpool Classic Vol. 21: DvX (2018)'
          }
        ],
        returned: 20
      },
      stories: {
        available: 136,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010801/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
            name: 'Avengers (1998) #74',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13209',
            name: 'Fantastic Four (1961) #384',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13210',
            name: 'My Enemy, My Son!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13215',
            name: 'Fantastic Four (1961) #385',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13216',
            name: 'Into the Deep!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13222',
            name: 'Fantastic Four (1961) #386',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13223',
            name: 'And Then Came Despair',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13229',
            name: 'Fantastic Four (1961) #387',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13231',
            name: 'Nobody Gets Out Alive!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13236',
            name: 'Fantastic Four (1961) #388',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13237',
            name: 'Deadly Is the Dark Raider',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13243',
            name: 'Fantastic Four (1961) #389',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13244',
            name: 'Behold a Fatal Future!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13251',
            name: 'Fantastic Four (1961) #390',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13252',
            name: '"Past Deceptions and Future Lies!"',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13258',
            name: 'Fantastic Four (1961) #391',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13259',
            name: 'If Death Be Our Destiny--!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13264',
            name: 'Fantastic Four (1961) #392',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13265',
            name: 'The Final Gantlet!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/13270',
            name: 'Fantastic Four (1961) #393',
            type: 'cover'
          }
        ],
        returned: 20
      },
      events: {
        available: 2,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010801/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
            name: 'Secret Empire'
          }
        ],
        returned: 2
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1010801/ant-man_scott_lang?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Ant-Man_(Scott_Lang)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010801/ant-man_scott_lang?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1011208,
      name: 'Anthem',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011208',
      comics: {
        available: 11,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011208/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16005',
            name: 'The Order (2007) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16188',
            name: 'The Order (2007) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16594',
            name: 'The Order (2007) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16595',
            name: 'The Order (2007) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17283',
            name: 'The Order (2007) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17416',
            name: 'The Order (2007) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17651',
            name: 'The Order (2007) #7'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20695',
            name: 'The Order (2007) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20889',
            name: 'The Order (2007) #9'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21020',
            name: 'The Order (2007) #10'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20734',
            name: 'The Order Vol. 1: The Next Right Thing (Trade Paperback)'
          }
        ],
        returned: 11
      },
      series: {
        available: 2,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011208/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2537',
            name: 'The Order (2007 - 2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3877',
            name: 'The Order Vol. 1: The Next Right Thing (2008)'
          }
        ],
        returned: 2
      },
      stories: {
        available: 20,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011208/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/32683',
            name: 'The Order (2007) #1',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/32684',
            name: '12XLS 1 of 12; THE INITIATIVE BANNER',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33066',
            name: 'The Order (2007) #2',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33067',
            name: '12XLS 2 of 12; THE INITIATIVE BANNER',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33467',
            name: 'The Order (2007) #3',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33468',
            name: 'THE INITIATIVE BANNER',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33469',
            name: 'The Order (2007) #4',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/33470',
            name: 'THE INITIATIVE BANNER',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36218',
            name: 'The Order (2007) #5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36219',
            name: 'Interior #36219',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36517',
            name: 'The Order (2007) #6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36518',
            name: 'Interior #36518',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36947',
            name: 'The Order (2007) #7',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/36948',
            name: 'Interior #36948',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44384',
            name: 'The Order (2007) #8',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44385',
            name: '1 of 5',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44730',
            name: 'The Order (2007) #9',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44731',
            name: '2 of 5',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/45741',
            name: 'The Order (2007) #10',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/45742',
            name: '3 of 5',
            type: 'interiorStory'
          }
        ],
        returned: 20
      },
      events: {
        available: 1,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011208/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
            name: 'Initiative'
          }
        ],
        returned: 1
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/158/anthem?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Anthem?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1011208/anthem?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1009156,
      name: 'Apocalypse',
      description: '',
      modified: '2014-05-28T12:41:41-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/e0/526166076a1d0',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009156',
      comics: {
        available: 114,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009156/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72959',
            name: 'Age of X-Man: Apocalypse & the X-Tracts (2019) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/72963',
            name: 'Age of X-Man: Apocalypse & the X-Tracts (2019) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29205',
            name: 'Avengers (2010) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29206',
            name: 'Avengers (2010) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/34142',
            name: 'Avengers (2010) #3 (ROMITA JR. VARIANT)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7459',
            name: 'Cable (1993) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24171',
            name: 'Cable (2008) #14'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24172',
            name: 'Cable (2008) #14 (MW, 50/50 Variant)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24631',
            name: 'Cable (2008) #15'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24632',
            name: 'Cable (2008) #15 (MW, 50/50 Variant)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7410',
            name: 'Cable (1993) #35'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7444',
            name: 'Cable (1993) #66'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7454',
            name: 'Cable (1993) #75'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/39445',
            name: 'Essential X-Factor Vol. 2 (All-New Edition) (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/76729',
            name: 'Excalibur (2019) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/76731',
            name: 'Excalibur (2019) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/76732',
            name: 'Excalibur (2019) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/76734',
            name: 'Excalibur (2019) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/78389',
            name: 'Excalibur (2019) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/84380',
            name: 'Excalibur (2019) #12'
          }
        ],
        returned: 20
      },
      series: {
        available: 53,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009156/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/26335',
            name: 'Age of X-Man: Apocalypse & the X-Tracts (2019)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1995',
            name: 'Cable (1993 - 2002)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/4002',
            name: 'Cable (2008 - 2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/14400',
            name: 'Essential X-Factor Vol. 2 (All-New Edition) (2011 - Present)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/27547',
            name: 'Excalibur (2019 - Present)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/20418',
            name: 'Extraordinary X-Men Vol. 3: Kingdoms Fall (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22173',
            name: 'Further Adventures of Cyclops & Phoenix (1996)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2021',
            name: 'Incredible Hulk (1962 - 1999)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/8138',
            name: 'Mystic Comics 70th Anniversary Special (2009)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/787',
            name: 'Official Handbook of the Marvel Universe (2004)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2057',
            name: 'Onslaught: Marvel Universe (1996)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22174',
            name: 'Rise of Apocalypse (1996 - 1997)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/17927',
            name: "Stryfe's Strike File (1993)"
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/16414',
            name: 'Uncanny Avengers (2012 - 2014)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9976',
            name: 'Uncanny X-Force (2010 - 2012)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1075',
            name: 'What If? X-Men Age of Apocalypse (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2425',
            name: 'What If?: Event Horizon (2007)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2262',
            name: 'Wolverine (1988 - 2003)'
          }
        ],
        returned: 20
      },
      stories: {
        available: 115,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009156/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/477',
            name: 'Cover #477',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/664',
            name: 'X-MEN (2004) #183',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/666',
            name: 'X-MEN (2004) #184',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/668',
            name: 'X-MEN (2004) #185',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3425',
            name: 'Cover #3425',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3588',
            name: 'Cover #3588',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3592',
            name: 'Cover #3592',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/3866',
            name: 'Cover #3866',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4153',
            name: 'Cover #4153',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4223',
            name: 'Cover #4223',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4430',
            name: 'Cover #4430',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4513',
            name: 'Cover #4513',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4612',
            name: 'Cover #4612',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4614',
            name: 'Cover #4614',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/5919',
            name: 'Cover #5919',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/19075',
            name: '...Meet War!',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22203',
            name: 'Whose Death Is It, Anyway?',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22207',
            name: 'Die, Mutants, Die!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22210',
            name: 'The Horsemen of Apocalypse',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22221',
            name: 'You Say You Want Some Evolution?',
            type: 'interiorStory'
          }
        ],
        returned: 20
      },
      events: {
        available: 6,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009156/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
            name: 'Acts of Vengeance!'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
            name: 'Evolutionary War'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
            name: 'Fall of the Mutants'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/298',
            name: 'Messiah War'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
            name: 'Onslaught'
          }
        ],
        returned: 6
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/comics/characters/1009156/apocalypse?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Apocalypse_(En_Sabah_Nur)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009156/apocalypse?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1011253,
      name: 'Apocalypse (Ultimate)',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011253',
      comics: {
        available: 3,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011253/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20638',
            name: 'Ultimate X-Men (2000) #91'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20830',
            name: 'Ultimate X-Men (2000) #92'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20967',
            name: 'Ultimate X-Men (2000) #93'
          }
        ],
        returned: 3
      },
      series: {
        available: 1,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011253/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/474',
            name: 'Ultimate X-Men (2000 - 2009)'
          }
        ],
        returned: 1
      },
      stories: {
        available: 6,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011253/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44259',
            name: 'Ultimate X-Men (2001) #91',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44260',
            name: 'Apocalypse Now 3 of 5',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44611',
            name: 'Ultimate X-Men (2001) #92',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/44612',
            name: 'Apocalypse Now 4 of 5',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/45246',
            name: 'Ultimate X-Men (2001) #93',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/45247',
            name: '4 of 4 Apocalypse Now',
            type: 'interiorStory'
          }
        ],
        returned: 6
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011253/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/166/apocalypse?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Apocalypse%20(Ultimate)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1011253/apocalypse_ultimate?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1010866,
      name: 'Aqueduct',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/50/4c0035b3630cd',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010866',
      comics: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010866/comics',
        items: [],
        returned: 0
      },
      series: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010866/series',
        items: [],
        returned: 0
      },
      stories: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010866/stories',
        items: [],
        returned: 0
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010866/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/169/aqueduct?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Aqueduct?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010866/aqueduct?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1010773,
      name: 'Arachne',
      description: '',
      modified: '2013-10-24T13:07:59-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/70/5269526591794',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010773',
      comics: {
        available: 6,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010773/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30309',
            name: 'Amazing Spider-Man (1999) #634'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30310',
            name: 'Amazing Spider-Man (1999) #635'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30311',
            name: 'Amazing Spider-Man (1999) #636'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30312',
            name: 'Amazing Spider-Man (1999) #637'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29773',
            name: 'Herc (2010) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37899',
            name: 'Amazing Spider-Man (1999) #5'
          }
        ],
        returned: 6
      },
      series: {
        available: 2,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010773/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9898',
            name: 'Herc (2010 - 2011)'
          }
        ],
        returned: 2
      },
      stories: {
        available: 8,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010773/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/64692',
            name: 'Herc (2010) #8',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/64693',
            name: 'Herc (2010) #8 - Int',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/69444',
            name: 'Amazing Spider-Man (1999) #634',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/69446',
            name: 'Amazing Spider-Man (1999) #635',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/69447',
            name: 'Amazing Spider-Man (1999) #635 - Int',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/69448',
            name: 'Amazing Spider-Man (1999) #636',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/69450',
            name: 'Amazing Spider-Man (1999) #637',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/94843',
            name: 'Amazing Spider-Man (1999) #5',
            type: 'cover'
          }
        ],
        returned: 8
      },
      events: {
        available: 1,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010773/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/305',
            name: 'Spider-Island'
          }
        ],
        returned: 1
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/173/arachne?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Arachne_(Julia_Carpenter)?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1010773/arachne?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1017438,
      name: 'Araña',
      description: '',
      modified: '2013-12-17T15:58:26-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017438',
      comics: {
        available: 22,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017438/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/21003',
            name: 'Amazing Spider-Girl (2006) #19'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22903',
            name: 'Amazing Spider-Girl (2006) #27'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30311',
            name: 'Amazing Spider-Man (1999) #636'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/30312',
            name: 'Amazing Spider-Man (1999) #637'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2311',
            name: 'ARANA VOL. 2: IN THE BEGINNING DIGEST (Digest)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3497',
            name: 'ARANA VOL. 3: NIGHT OF THE HUNTER DIGEST (Digest)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1589',
            name: 'Arana: The Heart of the Spider (2005) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1679',
            name: 'Arana: The Heart of the Spider (2005) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1778',
            name: 'Arana: The Heart of the Spider (2005) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1881',
            name: 'Arana: The Heart of the Spider (2005) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1983',
            name: 'Arana: The Heart of the Spider (2005) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2086',
            name: 'Arana: The Heart of the Spider (2005) #6'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2258',
            name: 'Arana: The Heart of the Spider (2005) #7'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2364',
            name: 'Arana: The Heart of the Spider (2005) #8'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2530',
            name: 'Arana: The Heart of the Spider (2005) #9'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2531',
            name: 'Arana: The Heart of the Spider (2005) #10'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3066',
            name: 'Arana: The Heart of the Spider (2005) #11'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3165',
            name: 'Arana: The Heart of the Spider (2005) #12'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37044',
            name: 'Avengers Academy Giant-Size (2010) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/67950',
            name: 'Captain Marvel: Carol Danvers - The Ms. Marvel Years Vol. 2 (Trade Paperback)'
          }
        ],
        returned: 20
      },
      series: {
        available: 8,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017438/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1126',
            name: 'Amazing Spider-Girl (2006 - 2009)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
            name: 'Amazing Spider-Man (1999 - 2013)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1454',
            name: 'ARANA VOL. 2: IN THE BEGINNING DIGEST (2005)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1562',
            name: 'ARANA VOL. 3: NIGHT OF THE HUNTER DIGEST (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/853',
            name: 'Arana: The Heart of the Spider (2005)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13250',
            name: 'Avengers Academy Giant-Size (2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24528',
            name: 'Captain Marvel: Carol Danvers - The Ms. Marvel Years Vol. 2 (2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/813',
            name: 'Marvel Team-Up (2004 - 2006)'
          }
        ],
        returned: 8
      },
      stories: {
        available: 20,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017438/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4131',
            name: '1 of 3',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4133',
            name: '2 of 4 - League of Losers',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4436',
            name: '1 of 6 - Freshman Flu',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4438',
            name: '2 of 6 - Freshman Flu',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4440',
            name: '3 of 6 - In the Beginning',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4444',
            name: '4 of 6 - In the Beginning',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4446',
            name: '5 of 6 - In the Beginning',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4448',
            name: '6 of 6 - In the Beginning',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4450',
            name: '1 of 6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4452',
            name: '2 of 6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4454',
            name: '3 of 6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4456',
            name: '4 of 6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4458',
            name: '5 of 6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/4460',
            name: '6 of 6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/45556',
            name: 'Spider-Girl vs. Arana 1 of 1',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/50852',
            name: '2 of 6',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/69448',
            name: 'Amazing Spider-Man (1999) #636',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/69450',
            name: 'Amazing Spider-Man (1999) #637',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/82123',
            name: 'Avengers Academy Giant-Size #1',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/147544',
            name: 'cover from CAPTAIN MARVEL: CAROL DANVERS - THE MS. MARVEL YEARS VOL. 2 TPB (2018) #2',
            type: 'cover'
          }
        ],
        returned: 20
      },
      events: {
        available: 0,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017438/events',
        items: [],
        returned: 0
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/176/araa?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1017438/araa?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    },
    {
      id: 1009158,
      name: 'Arcade',
      description: '',
      modified: '1969-12-31T19:00:00-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c0042091ab69',
        extension: 'jpg'
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009158',
      comics: {
        available: 29,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009158/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/37996',
            name: 'Age of X: Alpha (2010) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17712',
            name: 'Agent X (2002) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20586',
            name: 'Classic X-Men (1986) #30'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65504',
            name: 'Deadpool & X-Force Omnibus (Hardcover)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/61483',
            name: 'Elektra (2017) #3'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/61484',
            name: 'Elektra (2017) #4'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/61485',
            name: 'Elektra (2017) #5'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/62143',
            name: 'Elektra: Always Bet On Red (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/8591',
            name: 'Excalibur (1988) #125'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/62154',
            name: 'Gwenpool, The Unbelievable Vol. 3: Totally In Continuity (Trade Paperback)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1587',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (Hardcover)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17693',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 6 HC (Hardcover)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64576',
            name: 'Spider-Man/Deadpool (2016) #21'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/64948',
            name: 'Spider-Man/Deadpool (2016) #22'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/70714',
            name: 'The Amazing Spider-Man (2018) #18'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/70716',
            name: 'The Amazing Spider-Man (2018) #20'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/60680',
            name: 'The Unbelievable Gwenpool (2016) #13'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13686',
            name: 'Uncanny X-Men (1963) #145'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13687',
            name: 'Uncanny X-Men (1963) #146'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/13688',
            name: 'Uncanny X-Men (1963) #147'
          }
        ],
        returned: 20
      },
      series: {
        available: 20,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009158/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13603',
            name: 'Age of X: Alpha (2010)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/459',
            name: 'Agent X (2002 - 2004)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3751',
            name: 'Classic X-Men (1986 - 1990)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23832',
            name: 'Deadpool & X-Force Omnibus (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22561',
            name: 'Elektra (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22770',
            name: 'Elektra: Always Bet On Red (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2011',
            name: 'Excalibur (1988 - 1998)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22781',
            name: 'Gwenpool, The Unbelievable Vol. 3: Totally In Continuity (2017)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1440',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 2 HC (2005)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3460',
            name: 'MARVEL MASTERWORKS: THE UNCANNY X-MEN VOL. 6 HC (2008)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/19679',
            name: 'Spider-Man/Deadpool (2016 - 2019)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24396',
            name: 'The Amazing Spider-Man (2018 - Present)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/21490',
            name: 'The Unbelievable Gwenpool (2016 - 2018)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1723',
            name: 'Uncanny X-Men Omnibus Vol. 1 (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3633',
            name: 'X-Force (1991 - 2004)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2265',
            name: 'X-Men (1991 - 2001)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1774',
            name: 'X-Men: Mutant Genesis (2006)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2102',
            name: 'X-Men: Prime (1995)'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1685',
            name: 'X-Men: The Complete Age of Apocalypse Epic Book 4 (2006)'
          }
        ],
        returned: 20
      },
      stories: {
        available: 29,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009158/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15428',
            name: 'UNCANNY X-MEN (1963) #122',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15429',
            name: 'Cry For The Children!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15431',
            name: 'UNCANNY X-MEN (1963) #123',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/15433',
            name: 'UNCANNY X-MEN (1963) #124',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/22463',
            name: 'Tying the Knot',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/24495',
            name: 'Racing the Night',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/27794',
            name: 'Kidnapped!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/27795',
            name: 'X-Men vs. Murderworld (Guess Who Wins?)',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/27796',
            name: 'Murderworld!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/27798',
            name: 'Rogue Storm!',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/29116',
            name: 'A Villains Gallery',
            type: 'pinup'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/37531',
            name: 'AGENT X (2002) #5',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/37532',
            name: "Dead Man's Switch Part Five",
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/38264',
            name: 'Arcade--Shatterstar--Murderworld',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43937',
            name: 'Play With Me',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/43939',
            name: 'Back Cover',
            type: 'backcovers'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/83523',
            name: 'Age of X: Alpha (2010) #1',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/83524',
            name: 'Interior #83524  ',
            type: 'interiorStory'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/131829',
            name: 'cover from Gwenpool (2016) #13',
            type: 'cover'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/133395',
            name: 'cover from Elektra (2016) #3',
            type: 'cover'
          }
        ],
        returned: 20
      },
      events: {
        available: 2,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009158/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
            name: 'Age of X'
          }
        ],
        returned: 2
      },
      urls: [
        {
          type: 'detail',
          url: 'http://marvel.com/characters/178/arcade?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Arcade?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        },
        {
          type: 'comiclink',
          url: 'http://marvel.com/comics/characters/1009158/arcade?utm_campaign=apiRef&utm_source=3d3079013e78882d7fc9df01b057dad0'
        }
      ]
    }
  ]
}

export const CharactersService = {
  listCharacters () {
    return Promise.resolve(ApiParser.paginatedContent(CharacterParser.list)(serverPayload))
    // return marvelApi.get('/characters').then(ApiParser.paginatedContent())
  }
}
