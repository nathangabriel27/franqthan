import images from '../constants/imagensBase64'

const usersProfile = [
  {
    id: 27,
    name: 'Nathan Gabriel',
    username: 'nathangabriel27',
    photoProfile: 'https://avatars0.githubusercontent.com/u/43018177?v=4',
    bio: 'Tequileiro a mais de 5 anos. Serviços de garçon e hotelaria. 🥃🥃🍹🍹🍹🍹 ',
    tags: ['TEQUILEIRO', 'DRINKEIRO', 'ARTISTADEDRINKS', 'GARÇO', 'BARMEN', 'PROFISSIONAL'],
    city: 'Belo Horizonte',
    whatsapp: '31994827158',
    instagran: 'nathangabriel27',
    FavoriteDrinks: [
      {
        idFavoriteDrink: 1,
        nameFavoriteDrink: 'nathan teste',
        photoFavoriteDrink: '',
        creatorFavoriteDrink: 'criador nathan',
        photoProfileCreator: '',
      },
      {
        idFavoriteDrink: 2,
        nameFavoriteDrink: 'nathan teste2',
        photoFavoriteDrink: '',
        creatorFavoriteDrink: 'criador nathan2',
        photoProfileCreator: '',
      }
    ],
    followers: [
      {
        name: 'Diogo coutinho',
        username: 'diogocoutinho',
        follow: true,
        followPhoto: 'https://avatars2.githubusercontent.com/u/40130983?v=4'
      },
      {
        name: 'Mozart Souza',
        username: 'mojomiojo',
        follow: false,
        followPhoto: 'https://avatars1.githubusercontent.com/u/42383407?v=4'
      },
      {
        name: 'Maykon cole',
        username: 'maykoncole',
        follow: false,
        followPhoto: 'https://avatars1.githubusercontent.com/u/9042508?v=4'
      },
      {
        name: 'Hudson Carlos',
        username: 'HudsonCarlos',
        follow: true,
        followPhoto: 'https://avatars1.githubusercontent.com/u/33984189?v=4'
      },
      {
        name: 'Higor santana',
        username: 'higor21ss',
        follow: false,
        followPhoto: 'https://avatars0.githubusercontent.com/u/42822012?v=4'
      },
    ],
    drinks: [
      {
        id: 1,
        drinkName: 'Primeiro drink do nathan',
        evaluation: '0,5',
        likes: 1,
        autor: 'Nathan',
        autorUsername: 'nathangabriel27',
        ingredient: '1 laranja pera grande, 1/2 limão, 1 e 1/2 doses de vodka absolut raspberri, 6 doses de vodka absolut citron açúcar, cubos de gelo.',
        photoDrink: 'https://sodrink-storage-image.s3.amazonaws.com/bb8daa25d4e14a24afb7707565a817a9',
        ingredientsList: ['Limao Siciliano', 'Açucar', 'Canela em pau', 'Gelo', '50ml de Jack daniel"s Honney', 'Refrigerante Citrus'],
        preparation: 'Você coloca alguns cubos de limão siciliano no copo; acrescenta açúcar a gosto; macera os dois; adiciona algumas gotas de limão taiti; enche o copo de gelo; bota 50ml de Jack Daniel’s; mistura tudo com uma coqueteleira; e completa com refrigerante citrus.',
        portion: 5,
        time: 10,
        tags: ['Gelo', 'Whisky', 'Bebidaquente', 'Forte', 'Patrocinado', 'Limão'],
        comments: [
          {
            nameUserComments: 'Nathan Gabriel',
            commentsText: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica ',
          },
          {
            nameUserComments: 'Gabriel',
            commentsText: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica ',
          },
          {
            nameUserComments: 'Joao Zinho',
            commentsText: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica ',
          },
          {
            nameUserComments: 'Maria Aparecida',
            commentsText: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica ',
          },
        ]
      },
    ],


  },
]
export { usersProfile }