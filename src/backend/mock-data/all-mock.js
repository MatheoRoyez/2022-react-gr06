export const specificCSR = {
  data: [
    {
      id: 1,
      icon: "#4D908E",
      name: "CO2 uitstoot",
      sdgNumber: "1",
      date: "2022-04-10",
      value: "273.00",
      threshold: {
        behaviour: "lowerThanValue",
        value: "50.00",
      },
      history: [
        {
          csrHistoryId: 3,
          date: "2022-04-10",
          thresholdValue: "50.00",
          thresholdType: "smallerthan",
          value: "10",
        },
        {
          csrHistoryId: 4,
          date: "2022-05-10",
          thresholdValue: "50.00",
          thresholdType: "smallerthan",
          value: "15",
        },
        {
          csrHistoryId: 5,
          date: "2022-06-10",
          thresholdValue: "50.00",
          thresholdType: "smallerthan",
          value: "30",
        },
        {
          csrHistoryId: 6,
          date: "2022-07-10",
          thresholdValue: "50.00",
          thresholdType: "smallerthan",
          value: "55",
        },
      ],
      children: [
        // {
        //   datasourceId: 3,
        //   name: "datasourcename",
        //   soort: "soort",
        // },
        {
          csrComponentId: 2,
          icon: "#4D908E",
          name: "Uitstoot bedrijfswagens 1",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
        {
          csrComponentId: 3,
          icon: "#4D908E",
          name: "Uitstoot vee 2",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
        {
          csrComponentId: 4,
          icon: "#4D908E",
          name: "Uitstoot vee 4",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
        {
          csrComponentId: 5,
          icon: "#4D908E",
          name: "Uitstoot vee 5",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
        {
          csrComponentId: 6,
          icon: "#4D908E",
          name: "Uitstoot vee 6",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
      ],
    },

    {
      id: 2,
      icon: "#4D908E",
      name: "Milieu",
      sdgNumber: "1",
      date: "2022-04-10T22:00:00.000Z",
      value: "273.00",
      threshold: {
        behaviour: "lowerThanValue",
        value: "50.00",
      },
      children: [
        // {
        //   datasourceId: 3,
        //   name: "datasourcename",
        //   soort: "soort",
        // },
        {
          csrComponentId: 2,
          icon: "#4D908E",
          name: "Uitstoot bedrijfswagens 1",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
        {
          csrComponentId: 3,
          icon: "#4D908E",
          name: "Uitstoot vee 2",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
        {
          csrComponentId: 4,
          icon: "#4D908E",
          name: "Uitstoot vee 4",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
        {
          csrComponentId: 5,
          icon: "#4D908E",
          name: "Uitstoot vee 5",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
        {
          csrComponentId: 6,
          icon: "#4D908E",
          name: "Uitstoot vee 6",
          sdgNumber: "1.b",
          value: 10,
          threshold: {
            behaviour: "lowerThanValue",
            value: "50.00",
          },
        },
      ],
    },
  ],
};

export const SdgForCategory = {
  data: [
    {
      id: 99,
      description:
        "Maak steden en menselijke nederzettingen inclusief, veilig, veerkrachtig en duurzaam.",
      icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
      name: "Duurzame steden en gemeenschappen",
      number: "13",
      color: "orange",
    },
    {
      id: 2,
      description:
        "Maak steden en menselijke nederzettingen inclusief, veilig, veerkrachtig en duurzaam.",
      icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
      name: "Duurzame steden en gemeenschappen",
      number: "11",
      color: "blue",
      children: [
        {
          id: 100,
          description:
            "Tegen 2030 voor iedereen toegang voorzien tot adequate, veilige en betaalbare huisvesting en basisdiensten, en sloppenwijken verbeteren.",
          number: "11.1",
        },
        {
          id: 106,
          description:
            "Tegen 2030 toegang voorzien tot veilige, betaalbare, toegankelijke en duurzame vervoerssystemen voor iedereen, waarbij de verkeersveiligheid verbeterd wordt, met name door het openbaar vervoer uit te breiden, met aandacht voor de behoeften van mensen in kwetsbare situaties, vrouwen, kinderen, personen met een handicap en ouderen.",
          number: "11.2",
        },
        {
          id: 102,
          description:
            "Tegen 2030 inclusieve en duurzame stadsontwikkeling en capaciteit opbouwen voor participatieve, geïntegreerde en duurzame planning en beheer van menselijke nederzettingen in alle landen.",
          number: "11.3",
        },
        {
          id: 103,
          description:
            "De inspanningen verhogen om het culturele en natuurlijke erfgoed van de wereld te beschermen en veilig te stellen.",
          number: "11.4",
        },
      ],
    },
    {
      id: 61,
      description:
        "Verzeker toegang tot betaalbare, betrouwbare, duurzame en moderne energie voor iedereen.",
      icon: "/content/images/SDG/SDG-icon-NL-RGB-07.jpg",
      name: "Betaalbare en duurzame energie",
      number: "7",
      color: "red",
      children: [
        {
          id: 62,
          description:
            "Tegen 2030 universele toegang tot betaalbare, betrouwbare en moderne energiediensten garanderen.",
          number: "7.1",
        },
        {
          id: 63,
          description:
            "Tegen 2030 in aanzienlijke mate het aandeel hernieuwbare energie in de globale energiemix verhogen.",
          number: "7.2",
        },
        {
          id: 65,
          description:
            "Tegen 2030 de globale snelheid van verbetering in energie-efficiëntie verdubbelen.",
          number: "7.3",
        },
        {
          id: 66,
          description:
            "Tegen 2030 de internationale samenwerking verhogen om toegang te vergemakkelijken tot onderzoek en technologie inzake schone energie, met inbegrip van de hernieuwbare energie, de energiedoeltreffendheid en de geavanceerde en schonere fossiele brandstoffentechnologie, en de investering promoten in energie-infrastructuur en schone energietechnologie.",
          number: "7.a",
        },
        {
          id: 64,
          description:
            "Tegen 2030 de infrastructuur uitbreiden en de technologie upgraden om moderne en duurzame energiediensten te kunnen aanbieden aan alle ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, de kleine eilandstaten in ontwikkeling en door land ingesloten ontwikkelingslanden, in overeenstemming met hun respectieve steunprogramma's.",
          number: "7.b",
        },
      ],
    },
    {
      id: 80,
      description:
        "Bouw veerkrachtige infrastructuur, bevorder inclusieve en duurzame industrialisering en stimuleer innovatie.",
      icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
      name: "Industrie, innovatie en infrastructuur",
      number: "9",
      color: "purple",
      children: [
        {
          id: 82,
          description:
            "Ontwikkelen van kwalitatieve, betrouwbare, duurzame en veerkrachtige infrastructuur, met inbegrip van regionale en grensoverschrijdende infrastructuur, ter ondersteuning van de economische ontwikkeling en het menselijk welzijn, met klemtoon op een betaalbare en billijke toegang voor iedereen.",
          number: "9.1",
        },
        {
          id: 86,
          description:
            "Bevorderen van inclusieve en duurzame industrialisering en, tegen 2030, het aandeel in de werkgelegenheid en het bruto binnenlands product van de industrie aanzienlijk doen toenemen, in overeenstemming met de nationale omstandigheden, en dat aandeel verdubbelen in de minst ontwikkelde landen.",
          number: "9.2",
        },
        {
          id: 87,
          description:
            "De toegang vergroten van kleinschalige industriële en andere ondernemingen, in het bijzonder in de ontwikkelingslanden, tot financiële diensten, inclusief betaalbare kredietverlening, alsook hun integratie in waardeketens en markten.",
          number: "9.3",
        },
        {
          id: 81,
          description:
            "Tegen 2030 de infrastructuur moderniseren en industrieën aanpassen om hen duurzaam te maken, waarbij de focus ligt op een grotere doeltreffendheid bij het gebruik van hulpbronnen en van schonere en milieuvriendelijke technologieën en industriële processen, waarbij alle landen de nodige actie ondernemen volgens hun eigen respectieve mogelijkheden.",
          number: "9.4",
        },
        {
          id: 83,
          description:
            "Verbeteren van het wetenschappelijk onderzoek, moderniseren van de technologische capaciteiten van industriesectoren in alle landen, in het bijzonder in ontwikkelingslanden, waarbij ook tegen 2030 innovatie wordt aangemoedigd en op aanzienlijke wijze het aantal onderzoeks- en ontwikkelingswerkers per miljoen inwoners wordt verhoogd en waarbij ook meer wordt uitgegeven aan publiek en privaat onderzoek en ontwikkeling.",
          number: "9.5",
        },
        {
          id: 85,
          description:
            "De duurzame en veerkrachtige ontwikkeling van infrastructuur mogelijk maken in ontwikkelingslanden aan de hand van extra financiële, technologische en technische steun aan Afrikaanse landen, de minst ontwikkelde landen, de door land ingesloten ontwikkelingslanden en de kleine eilandstaten in ontwikkeling.",
          number: "9.a",
        },
        {
          id: 84,
          description:
            "Ondersteunen van de binnenlandse technologische ontwikkeling, onderzoek en innovatie in ontwikkelingslanden, ook door een gunstig beleidsklimaat te garanderen voor, onder andere, industriële diversificatie en waardetoevoeging aan handelsproducten.",
          number: "9.b",
        },
      ],
    },
  ],
  count: 4,
};

export const categoryAll = {
  data: [
    {
      id: 1,
      name: "Name1",
      icon: "red",
      mvo_ids: [],
    },
    {
      id: 2,
      name: "Name2",
      icon: "blue",
      mvo_ids: [],
    },
    {
      id: 3,
      name: "Name3",
      icon: "orange",
      mvo_ids: [],
    },
    {
      id: 4,
      name: "Name4",
      icon: "red",
      mvo_ids: [],
    },
    {
      id: 5,
      name: "Name5",
      icon: "blue",
      mvo_ids: [],
    },
    {
      id: 6,
      name: "Name6",
      icon: "orange",
      mvo_ids: [],
    },
    {
      id: 7,
      name: "Name7",
      icon: "red",
      mvo_ids: [],
    },
    {
      id: 8,
      name: "Name8",
      icon: "blue",
      mvo_ids: [],
    },
  ],
  count: 3,
};

export const csrs = {
  data: [
    {
      id: 1,
      icon: "#4D908E",
      name: "CO2 uitstoot",
      sdgNumber: "13",
      value: "273.00",
      threshold: {
        id: 3,
        behaviour: "lowerThanValue",
        value: "50.00",
      },
    },
    {
      id: 3,
      icon: "RED",
      name: "Bedrijfwagens",
      sdgNumber: "9",
      value: "20.00",
      threshold: {
        id: 4,
        behaviour: "lowerThanValue",
        value: "60.00",
      },
    },
    {
      id: 4,
      icon: "#4D908E",
      name: "CO2 uitstoot",
      sdgNumber: "9",
      value: "273.00",
      threshold: {
        id: 3,
        behaviour: "lowerThanValue",
        value: "50.00",
      },
    },
    {
      id: 5,
      icon: "RED",
      name: "Bedrijfwagens",
      sdgNumber: "7",
      value: "20.00",
      threshold: {
        id: 4,
        behaviour: "lowerThanValue",
        value: "60.00",
      },
    },
    {
      id: 6,
      icon: "#4D908E",
      name: "CO2 uitstoot",
      sdgNumber: "1",
      value: "273.00",
      threshold: {
        id: 3,
        behaviour: "lowerThanValue",
        value: "50.00",
      },
    },
    {
      id: 7,
      icon: "RED",
      name: "Bedrijfwagens",
      sdgNumber: "3",
      value: "20.00",
      threshold: {
        id: 4,
        behaviour: "lowerThanValue",
        value: "60.00",
      },
    },
    {
      id: 8,
      icon: "#4D908E",
      name: "CO2 uitstoot",
      sdgNumber: "13",
      value: "273.00",
      threshold: {
        id: 3,
        behaviour: "lowerThanValue",
        value: "50.00",
      },
    },
    {
      id: 9,
      icon: "#4D908E",
      name: "CO2 uitstoot",
      sdgNumber: "1",
      value: "273.00",
      threshold: {
        id: 3,
        behaviour: "lowerThanValue",
        value: "50.00",
      },
    },
  ],
};
