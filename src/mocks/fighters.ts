import { UserCharacterType } from "../Types/fighters";

export const fighters: UserCharacterType[] = [
  {
    name: 'Pablo Kabal',
    photo: 'public/marcal.webp',
    defaultGif: 'marcal-guarda.gif',
    skillGif: 'marcal-golpe.gif',
    hp: 1000,
    audio: 'public/marcal.m4a',
    skills: [
      {
        name: 'carteirada',
        attack: 150,
        healing: 0,
        criticalChance: 10,
        dodgeChance: 15,
        img: 'public/carteira.png'
      },
      {
        name: 'hotmart',
        attack: 90,
        healing: 20,
        criticalChance: 15,
        dodgeChance: 20,
        img: 'public/hotmart.png'
      },
      {
        name: 'pix',
        attack: 200,
        healing: 0,
        criticalChance: 5,
        dodgeChance: 25,
        img: 'public/pix.png'
      },
      {
        name: 'cura',
        attack: 0,
        healing: 140,
        criticalChance: 0,
        dodgeChance: 0,
      }
    ]
  },
  {
    name: 'Dapena',
    photo: 'public/datena.webp',
    defaultGif: 'datena-guarda.gif',
    skillGif: 'datena-golpe.gif',
    hp: 1200,
    audio: 'public/datena.m4a',
    skills: [
      {
        name: 'cadeirada',
        attack: 120,
        healing: 0,
        criticalChance: 20,
        dodgeChance: 0,
        img: 'public/cadeira.png'
      },
      {
        name: 'mesa',
        attack: 110,
        healing: 10,
        criticalChance: 10,
        dodgeChance: 15,
        img: 'public/mesa.png'
      },
      {
        name: 'camera',
        attack: 150,
        healing: 0,
        criticalChance: 5,
        dodgeChance: 20,
        img: 'public/camera.avif'
      },
      {
        name: 'cura',
        attack: 0,
        healing: 140,
        criticalChance: 0,
        dodgeChance: 0,
      }
    ]
  },
  {
    name: 'Bozonaro',
    photo: 'public/bolsonaro.webp',
    defaultGif: 'bolsonaro-guarda.gif',
    skillGif: 'bolsonaro-golpe.gif',
    hp: 1200,
    audio: 'public/bolsonaro.m4a',
    skills: [
      {
        name: 'espadada',
        attack: 120,
        healing: 0,
        criticalChance: 20,
        dodgeChance: 0,
        img: 'public/espada.png'
      },
      {
        name: 'cloroquina',
        attack: 110,
        healing: 10,
        criticalChance: 10,
        dodgeChance: 15,
        img: 'public/cloroquina.png'
      },
      {
        name: 'nerf',
        attack: 150,
        healing: 0,
        criticalChance: 5,
        dodgeChance: 20,
        img: 'public/nerf.png'
      },
      {
        name: 'cura',
        attack: 0,
        healing: 140,
        criticalChance: 0,
        dodgeChance: 0,
      }
    ]
  },
  {
    name: 'Molusco',
    photo: 'public/lula.webp',
    defaultGif: 'lula-guarda.gif',
    skillGif: 'lula-golpe.gif',
    hp: 1200,
    audio: 'public/lula.m4a',
    skills: [
      {
        name: 'dedo',
        attack: 120,
        healing: 0,
        criticalChance: 20,
        dodgeChance: 0,
        img: 'public/dedo.png'
      },
      {
        name: 'pinga',
        attack: 110,
        healing: 10,
        criticalChance: 10,
        dodgeChance: 15,
        img: 'public/corote.png'
      },
      {
        name: 'picanha',
        attack: 150,
        healing: 0,
        criticalChance: 5,
        dodgeChance: 20,
        img: 'public/picanha.png'
      },
      {
        name: 'cura',
        attack: 0,
        healing: 140,
        criticalChance: 0,
        dodgeChance: 0,
      }
    ]
  },
]
