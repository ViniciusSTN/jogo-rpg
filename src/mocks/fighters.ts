import { UserCharacterType } from "../Types/fighters";

export const fighters: UserCharacterType[] = [
  {
    name: 'Pablo Kabal',
    photo: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/marcal.webp?alt=media&token=7ebbbe5c-d19c-460c-8960-a7669770bdad',
    defaultGif: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/marcal-guarda.gif?alt=media&token=a4323a96-5e48-426c-9c7d-4dc743d8e221',
    skillGif: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/marcal-golpe.gif?alt=media&token=1b637e87-727b-442e-b6af-f300bb35b02c',
    hp: 1000,
    audio: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/marcal.m4a?alt=media&token=ba24bf4c-5930-4826-bd40-05185971bcea',
    skills: [
      {
        name: 'carteirada',
        attack: 150,
        healing: 0,
        criticalChance: 10,
        dodgeChance: 15,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/carteira.png?alt=media&token=08cdf1a3-68fa-4f10-9a3d-5565801b0c29'
      },
      {
        name: 'hotmart',
        attack: 90,
        healing: 20,
        criticalChance: 15,
        dodgeChance: 20,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/hotmart.png?alt=media&token=2f4e19b6-81c0-45d1-9cf2-794551198b74'
      },
      {
        name: 'pix',
        attack: 200,
        healing: 0,
        criticalChance: 5,
        dodgeChance: 25,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/pix.png?alt=media&token=c1e95dd9-2d9c-4b22-aa2c-ffa74e966641'
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
    photo: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/datena.webp?alt=media&token=31c98c81-0db5-4322-b74c-66114be1beb7',
    defaultGif: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/datena-guarda.gif?alt=media&token=7a0edb32-05ae-43a3-9ac9-9e0a39566abd',
    skillGif: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/datena-golpe.gif?alt=media&token=3e80f521-1384-414b-a932-dba1a713bb43',
    hp: 1200,
    audio: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/datena.m4a?alt=media&token=75a73505-2566-4160-a2bc-5898252e1e7c',
    skills: [
      {
        name: 'cadeirada',
        attack: 120,
        healing: 0,
        criticalChance: 20,
        dodgeChance: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/cadeira.png?alt=media&token=f5c2e682-9c94-43ba-a1be-37b4f3c7afc7'
      },
      {
        name: 'mesa',
        attack: 110,
        healing: 10,
        criticalChance: 10,
        dodgeChance: 15,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/mesa.png?alt=media&token=9c5ce670-5321-434f-8976-3842b1c72522'
      },
      {
        name: 'camera',
        attack: 150,
        healing: 0,
        criticalChance: 5,
        dodgeChance: 20,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/camera.avif?alt=media&token=f66e0e5e-9730-4971-b3d7-bae86729c535'
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
    photo: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/bolsonaro.webp?alt=media&token=c45e9310-1dea-408d-8753-831ba66e356c',
    defaultGif: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/bolsonaro-guarda.gif?alt=media&token=887999be-9fac-4047-a7dc-bfeb0c423ca0',
    skillGif: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/bolsonaro-golpe.gif?alt=media&token=8b2d3b08-a6e0-4564-b3e3-4887edc3e20b',
    hp: 1200,
    audio: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/bolsonaro.m4a?alt=media&token=0169ff91-9af6-488a-8b04-7e75180c65fa',
    skills: [
      {
        name: 'espadada',
        attack: 120,
        healing: 0,
        criticalChance: 20,
        dodgeChance: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/espada.png?alt=media&token=9589bc0a-0c2d-4c84-bf75-414fe54f7263'
      },
      {
        name: 'cloroquina',
        attack: 110,
        healing: 10,
        criticalChance: 10,
        dodgeChance: 15,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/cloroquina.png?alt=media&token=14476aed-159e-4a03-8caf-e73fd83c7fe2'
      },
      {
        name: 'nerf',
        attack: 150,
        healing: 0,
        criticalChance: 5,
        dodgeChance: 20,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/nerf.png?alt=media&token=755609c6-93de-47b5-a94a-60c88b57e794'
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
    photo: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/lula.webp?alt=media&token=2342db44-697f-42a6-ba51-95155782bd79',
    defaultGif: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/lula-guarda.gif?alt=media&token=f9b01ba8-4d8f-408f-92cf-c0a82b7ffb51',
    skillGif: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/lula-golpe.gif?alt=media&token=34a34e29-4718-46fe-841d-22df482aa6d3',
    hp: 1200,
    audio: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/lula.m4a?alt=media&token=6a9647ff-385f-4264-b900-54ff9d6dd8a4',
    skills: [
      {
        name: 'dedo',
        attack: 120,
        healing: 0,
        criticalChance: 20,
        dodgeChance: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/dedo.png?alt=media&token=1f8f946d-8a42-4a39-97d6-1c6413c5ec84'
      },
      {
        name: 'pinga',
        attack: 110,
        healing: 10,
        criticalChance: 10,
        dodgeChance: 15,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/corote.png?alt=media&token=72be82f1-6e91-4749-ad67-7cdd64644dde'
      },
      {
        name: 'picanha',
        attack: 150,
        healing: 0,
        criticalChance: 5,
        dodgeChance: 20,
        img: 'https://firebasestorage.googleapis.com/v0/b/mortal-debate.appspot.com/o/picanha.png?alt=media&token=b5e8e15d-988d-4148-9a8f-ee47e18c893a'
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
