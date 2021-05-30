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
    title: "Wiara",
    description: "Jak uwierzyć w siebie?",
    characterName: "Jola z Łabędziego Jeziora",
    content: {
      challenge:
        "Po miesiącach treningów miała możliwość wzięcia udziału w konkursie tanecznym",
      emotions:
        "Pojawiła się jednak niepewność: przecież tam będą dziewczyny tańczące dużo dłużej niż ona - czy nie wypadnie tragicznie na ich tle?",
      solution:
        "Spytała się o radę znajomych z kursu tanecznego. Wszyscy jej powiedzieli, by spróbowała - Jola tańczy świetnie jak na początkującą!",
      result:
        "Jola uwierzyła w siebie i wzięła udział w konkursie. Mimo że nie wygrała, wcale nie wypadła tragicznie tak jak myślała - jednak wyniosła dużo cennych doświadczeń i wiedzy na przyszłość.",
    },
    primaryColor: colors.lightBlue,
    secondaryColor: colors.white,
    illustration: illustrations.girl3,
  },
  {
    id: 3,
    title: "Kariera",
    description: "O rozpoczęciu kariery w IT",
    characterName: "Nieśmiała Zuzia",
    content: {
      challenge: "Miała wielkie marzenie: zostać programistką!",
      emotions:
        "Bała się, że bliscy ją wyśmieją oraz że okaże się, że się nie nadaje",
      solution:
        "Zapisała się na darmowy kurs dla kobiet chcących rozpocząć karierę w IT",
      result:
        "Dowiedziała się jak wygląda świat IT oraz poznała wiele kobiet z podobnymi marzeniami, z którymi teraz może się nawzajem wspierać i uczyć od siebie!",
    },
    primaryColor: colors.peach,
    secondaryColor: colors.secondPurple,
    illustration: illustrations.girl2,
  },
];
