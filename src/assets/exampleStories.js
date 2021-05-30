import colors from "../config/colors";
import illustrations from "../config/illustrations";

export default [
  {
    id: 1,
    title: "Odwaga",
    description: "Historia o pewności siebie",
    characterName: "Niepewna Ania",
    content: {
      challenge:
        "Pewnego dnia dowiedziała się o Hackathonie. Z jednej strony bardzo chciała spróbować w nim wziąć udział...",
      emotions:
        "Jednak czuła strach. Nie miała zespołu, jedyne co miała to niedopracowany pomysł. Co jeśli pomysł okaże się być klapą, nikt nie dołączy do jej zespołu i inni ją wyśmieją?",
      solution:
        'Poszukała odwagi w sobie. Powiedziała: ,,Nie dowiesz się jeśli nie spróbujesz! Co złego może się stać? Bój się i rób." ',
      result:
        "Dołączyła do hackathonu i poznała dużo osób w takiej sytuacji jak ona, znalazła też osoby chcące pracować nad jej pomysłem. Jej pomysł okazał się tak dobry, że dostała się do finałowej 15",
    },
    primaryColor: colors.lightBlue,
    secondaryColor: colors.peach,
    illustration: illustrations.girl1,
  },
  {
    id: 2,
    title: "Kariera",
    description: "O rozpoczęciu kariery w IT",
    characterName: "Niezdecydowana Marta",
    content: {
      challenge: "Chciała wejść do świata IT.",
      emotions: "Czuła ekscytację i strach, bo nie wiedziała jak zacząć.",
      solution: "Popytała więc swoich znajomych i dostała mnóstwo wsparcia.",
      result:
        "Poczuła się wzmocniona, bo zrozumiała, że jej przyjaciele są jej cennym zasobem.",
    },
    primaryColor: colors.peach,
    secondaryColor: colors.secondPurple,
    illustration: illustrations.girl2,
  },
  {
    id: 3,
    title: "Kariera",
    description: "O pierwszej pracy",
    characterName: "Cicha Nina",
    content: {
      challenge:
        "Chciała zostać prawdziwą programistką - dostać się na pierwszy staż programistyczny",
      emotions:
        "Była niepewna swoich umiejętności, bała się bycia negatywnie ocenioną przez bardziej doświadczonych ludzi.",
      solution:
        "Powiedziała sobie, że nie ma nic do stracenia - nawet jeśli wypadnie okropnie to nikt o tym nie będzie pamiętał, a firm szukających stażystów jest mnóstwo!",
      result:
        "Przejście przez ten proces dało jej dużo cennych lekcji i doświadczenia. Dzięki temu wie, czego oczekiwać na rozmowach i w pracy oraz podbudowała pewność siebie.",
    },
    primaryColor: colors.peach,
    secondaryColor: colors.secondPurple,
    illustration: illustrations.girl2,
  },
];
