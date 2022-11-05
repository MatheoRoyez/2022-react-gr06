// export const ACTION = Object.freeze({
//   GETALL: "HTTPS://LOCALHOST:7000/API/SDG/",
//   GETID: "HTTPS://LOCALHOST:7000/API/SDG/:ID",
//   GETSUBSDGS: "HTTPS://LOCALHOST:7000/API/SDG/:ID/SUB",
//   GETPARENT: "HTTPS://LOCALHOST:7000/API/SDG/:ID/PARENT",
//   GETFACTS: "HTTPS://CAT-FACT.HEROKUAPP.COM/FACTS"
// })

import axios from "axios";

export const get = async (action) => {
  const data = await axios.get(action).then((data) => data.data);
  return data;
};


export const getAll = () => {
  return {
    data: [
      {
        sdgId: 1,
        description: "Beëindig armoede overal en in al haar vormen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-01.jpg",
        name: "Geen armoede",
        number: "1",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 2,
        description:
          "Solide beleidskaders creëren op nationaal, regionaal en internationaal niveau, die zijn gebaseerd op ontwikkelingsstrategieën ten gunste van de armen en het genderbeleid, om de versnelde investering te ondersteunen in acties die gericht zijn op het uitroeien van de armoede.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-01.jpg",
        name: "Geen armoede",
        number: "1.b",
        categoryId: null,
        parentId: "1",
      },
      {
        sdgId: 3,
        description:
          "Zorgen voor een aanzienlijke mobilisatie van middelen afkomstig uit verschillende bronnen, ook via versterkte ontwikkelingssamenwerking, om adequate en voorspelbare middelen te voorzien voor ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, om programma's en beleidslijnen te implementeren die een einde moeten maken aan armoede in al haar vormen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-01.jpg",
        name: "Geen armoede",
        number: "1.a",
        categoryId: null,
        parentId: "1",
      },
      {
        sdgId: 4,
        description:
          "Tegen 2030 de weerbaarheid opbouwen van de armen en van zij die zich in kwetsbare situaties bevinden en hun blootstelling aan en kwetsbaarheid voor met klimaatgerelateerde extreme gebeurtenissen en andere economische, sociale en ecologische schokken en rampen beperken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-01.jpg",
        name: "Geen armoede",
        number: "1.5",
        categoryId: null,
        parentId: "1",
      },
      {
        sdgId: 5,
        description:
          "Tegen 2030 het aandeel mannen, vrouwen en kinderen van alle leeftijden die volgens de nationale definities in armoede leven in al haar dimensies, minstens tot de helft terugbrengen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-01.jpg",
        name: "Geen armoede",
        number: "1.2",
        categoryId: null,
        parentId: "1",
      },
      {
        sdgId: 6,
        description:
          "Nationaal toepasbare sociale beschermingssystemen en maatregelen implementeren voor iedereen, met inbegrip van sociale beschermingsvloeren, en tegen 2030 een aanzienlijke dekkingsgraad realiseren van de armen en de kwetsbaren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-01.jpg",
        name: "Geen armoede",
        number: "1.3",
        categoryId: null,
        parentId: "1",
      },
      {
        sdgId: 7,
        description:
          "Tegen 2030 extreme armoede uitroeien voor alle mensen wereldwijd, die met minder dan $ 1,25 per dag moeten rondkomen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-01.jpg",
        name: "Geen armoede",
        number: "1.1",
        categoryId: null,
        parentId: "1",
      },
      {
        sdgId: 8,
        description:
          "Er tegen 2030 voor zorgen dat alle mannen en vrouwen, in het bijzonder de armen en de kwetsbaren, gelijke rechten hebben op economische middelen, alsook toegang tot basisdiensten, eigenaarschap en controle over land en andere vormen van eigendom, nalatenschap, natuurlijke hulpbronnen, gepaste nieuwe technologie en financiële diensten, met inbegrip van microfinanciering.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-01.jpg",
        name: "Geen armoede",
        number: "1.4",
        categoryId: null,
        parentId: "1",
      },
      {
        sdgId: 9,
        description:
          "Beëindig honger, bereik voedselzekerheid en verbeterde voeding en promoot duurzame landbouw",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 10,
        description:
          "Tegen 2030 een einde maken aan honger en voor iedereen, in het bijzonder de armen en de mensen die leven in kwetsbare situaties, met inbegrip van kinderen, toegang garanderen tot veilig, voedzaam en voldoende voedsel en dit het hele jaar lang.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2.1",
        categoryId: null,
        parentId: "9",
      },
      {
        sdgId: 11,
        description:
          "Tegen 2030 de landbouwproductiviteit en de inkomens verdubbelen voor kleinschalige voedselproducenten, in het bijzonder vrouwen, inheemse bevolkingen, familieboeren, veefokkers en vissers, onder meer door een veilige en gelijke toegang tot land, andere productieve hulpbronnen en inputs, kennis, financiële diensten, markten en opportuniteiten die toegevoegde waarde bieden en ook buiten de landbouw tewerkstelling genereren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2.3",
        categoryId: null,
        parentId: "9",
      },
      {
        sdgId: 12,
        description:
          "Corrigeren en voorkomen van handelsbeperkingen en scheefgegroeide situaties op de wereldlandbouwmarkten, door onder andere tegelijk alle vormen van landbouwexportsubsidies en alle exportmaatregelen met een gelijkaardig effect af te schaffen, in overeenstemming met het mandaat van de Ontwikkelingsronde in Doha.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2.b",
        categoryId: null,
        parentId: "9",
      },
      {
        sdgId: 13,
        description:
          "Tegen 2030 een einde maken aan alle vormen van malnutritie, waarbij ook tegen 2025 voldaan moet kunnen worden aan de internationaal overeengekomen doelstellingen met betrekking tot groeiachterstand en ondergewicht bij kinderen onder de 5 jaar",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2.2",
        categoryId: null,
        parentId: "9",
      },
      {
        sdgId: 14,
        description:
          "Maatregelen aannemen die de correcte werking moeten garanderen van de voedselgrondstoffenmarkten en hun afgeleiden en een snelle toegang tot marktinformatie bevorderen, met inbegrip van informatie over voedselreserves, om de extreme volatiliteit van de voedselprijzen te helpen beperken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2.c",
        categoryId: null,
        parentId: "9",
      },
      {
        sdgId: 15,
        description:
          "Verhogen van de investeringen, door versterkte internationale samenwerking, in landelijke infrastructuur, landbouwkundig onderzoek en uitgebreide diensten, technologische ontwikkeling en genetische databanken voor planten en vee om de landbouwkundige productiecapaciteit in ontwikkelingslanden, in het bijzonder in de minst ontwikkelde landen, te versterken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2.a",
        categoryId: null,
        parentId: "9",
      },
      {
        sdgId: 16,
        description:
          "Tegen 2020 duurzame voedselproductiesystemen garanderen en veerkrachtige landbouwpraktijken implementeren die de productiviteit en de productie kunnen verhogen, die helpen bij het in stand houden van ecosystemen, die de aanpassingscapaciteit verhogen in de strijd tegen klimaatverandering, extreme weersomstandigheden, droogte, overstromingen en andere rampen en die op een progressieve manier de kwaliteit van het land en de bodem verbeteren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2.4",
        categoryId: null,
        parentId: "9",
      },
      {
        sdgId: 17,
        description:
          "Tegen 2020 de genetische diversiteit in stand houden van zaden, cultuurgewassen en gefokte en gedomesticeerde dieren en hun in het wild levende verwanten, ook aan de hand van zaad- en plantenbanken die op een degelijke manier beheerd en gediversifieerd worden op nationaal, regionaal en internationaal niveau",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-02.jpg",
        name: "Geen honger",
        number: "2.5",
        categoryId: null,
        parentId: "9",
      },
      {
        sdgId: 18,
        description:
          "Verzeker een goede gezondheid en promoot welzijn voor alle leeftijden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 19,
        description:
          "Zorgen voor een universele gezondheidsdekking, met inbegrip van de bescherming tegen financiële risico's, toegang tot kwaliteitsvolle essentiële gezondheidszorgdiensten en toegang tot de veilige, doeltreffende, kwaliteitsvolle en betaalbare essentiële geneesmiddelen en vaccins voor iedereen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.8",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 20,
        description:
          "Tegen 2030 de globale moedersterfte terugdringen tot minder dan 70 per 100.000 levendgeborenen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.1",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 21,
        description:
          "Tegen 2030 universele toegang tot seksuele en reproductieve gezondheidszorgdiensten garanderen, met inbegrip van diensten voor gezinsplanning, informatie en opvoeding, en voor de integratie van reproductieve gezondheid in nationale strategieën en programma's.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.7",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 22,
        description:
          "Tegen 2030 de vroegtijdige sterfte gelinkt aan niet-overdraagbare ziekten met een derde inperken via preventie en behandeling, en mentale gezondheid en welzijn bevorderen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.4",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 23,
        description:
          "De preventie en behandeling versterken van misbruik van verslavende middelen, met inbegrip van drugsgebruik en het schadelijk gebruik van alcohol.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.5",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 24,
        description:
          "Tegen 2030 een einde maken aan vermijdbare overlijdens van pasgeborenen en kinderen onder de 5 jaar, waarbij alle landen er moeten naar streven om het sterftecijfer van baby's minstens tot 12 per 1000 levendgeborenen te beperken alsook het sterftecijfer van kinderen jonger dan 5 jaar eveneens in te perken tot maximum 25 per 1000 levendgeborenen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.2",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 25,
        description:
          "Het onderzoek en de ontwikkeling ondersteunen van vaccins en geneesmiddelen voor overdraagbare en niet-overdraagbare ziekten die in hoofdzaak ontwikkelingslanden treffen, toegang verschaffen tot betaalbare essentiële geneesmiddelen en vaccins, volgens de richtlijnen van de Verklaring van Doha aangaande het TRIPS-akkoord en Volksgezondheid. De Verklaring bevestigt het recht van ontwikkelingslanden om ten volle gebruik te maken van de bepalingen van de Overeenkomst aangaande de Handelsaspecten van de Intellectuele Eigendom (TRAIPR) die afwijkingen toelaat voor de bescherming van de volksgezondheid",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.b",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 26,
        description:
          "Tegen 2030 in aanzienlijke mate het aantal sterfgevallen en ziekten verminderen als gevolg van gevaarlijke chemicaliën en de vervuiling en besmetting van lucht, water en bodem.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.9",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 27,
        description:
          "Waar nodig de implementatie van de kaderovereenkomst van de Wereldgezondheidsorganisatie over tabakscontrole versterken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.a",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 28,
        description:
          "De financiering van de gezondheidszorg aanzienlijk opvoeren, net als de aanwerving, de ontwikkeling, de opleiding en het lange tijd in dienst houden van gezondheidswerkers in ontwikkelingslanden, in het bijzonder in de minst ontwikkelde landen en de kleine eilandstaten in ontwikkeling.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.c",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 29,
        description:
          "Tegen 2030 de globale moedersterfte terugdringen tot minder dan 70 per 100.000 levendgeborenen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.6",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 30,
        description:
          "Tegen 2030 een einde maken aan epidemieën zoals aids, tuberculose, malaria en verwaarloosde tropische ziekten, alsook hepatitis, door water overgebrachte ziekten en andere overdraagbare ziekten bestrijden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-03.jpg",
        name: "Goede gezondeheid en welzijn",
        number: "3.3",
        categoryId: null,
        parentId: "18",
      },
      {
        sdgId: 31,
        description:
          "Verzeker gelijke toegang tot kwaliteitsvol onderwijs en bevorder levenslang leren voor iedereen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 32,
        description:
          "Er tegen 2030 voor zorgen dat alle jongeren en een groot aantal volwassenen, zowel mannen als vrouwen, geletterd en rekenvaardig zijn.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.6",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 33,
        description:
          "Bouwen en verbeteren van onderwijsfaciliteiten die aandacht hebben voor kinderen, mensen met een beperking en gendergelijkheid en die een veilige, geweldloze, inclusieve en doeltreffende leeromgeving bieden voor iedereen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.a",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 34,
        description:
          "Er tegen 2030 voor zorgen dat alle leerlingen kennis en vaardigheden verwerven die nodig zijn om duurzame ontwikkeling te bevorderen, onder andere via vorming omtrent duurzame ontwikkeling en duurzame levenswijzen, mensenrechten, gendergelijkheid, de bevordering van een cultuur van vrede en geweldloosheid, wereldburgerschap en de waardering van culturele diversiteit en van de bijdrage van de cultuur tot de duurzame ontwikkeling.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.7",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 35,
        description:
          "Tegen 2030 op aanzienlijke wijze de toevloed verhogen van gekwalificeerde leraren, ook via internationale samenwerking voor lerarenopleidingen in ontwikkelingslanden, in het bijzonder in de minst ontwikkelde landen en de kleine eilandstaten in ontwikkeling.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.c",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 36,
        description:
          "Tegen 2030 gelijke toegang garanderen voor alle vrouwen en mannen tot betaalbaar en kwaliteitsvol technisch, beroeps- en hoger onderwijs, met inbegrip van de universiteit.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.3",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 37,
        description:
          "Er tegen 2030 voor zorgen dat alle meisjes en jongens op een vrije, billijke en kwalitatief hoogstaande manier lager en middelbaar onderwijs kunnen afwerken, wat moet kunnen leiden tot relevante en doeltreffende leerresultaten.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.1",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 38,
        description:
          "Er tegen 2030 voor zorgen dat alle meisjes en jongens in hun vroege kindertijd toegang hebben tot een kwalitatieve ontwikkeling, zorg en opvoeding voorafgaand aan de lagere school zodat ze klaar zijn voor het basisonderwijs.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.2",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 39,
        description:
          "Tegen 2030 genderongelijkheden wegwerken in het onderwijs en zorgen voor gelijke toegang tot alle niveaus inzake onderwijs en beroepsopleiding voor de kwetsbaren, met inbegrip van mensen met een handicap, inheemse bevolkingen en kinderen in kwetsbare situaties.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.5",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 40,
        description:
          "Tegen 2030 het aantal jongeren en volwassenen met relevante vaardigheden, met inbegrip van technische en beroepsvaardigheden, voor tewerkstelling, degelijke jobs en ondernemerschap aanzienlijk opdrijven.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.4",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 41,
        description:
          "Tegen 2020 het aantal studiebeurzen wereldwijd en substantieel verhogen dat beschikbaar is voor ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, de kleine eilandstaten in ontwikkeling en de Afrikaanse landen, voor toegang tot het hoger onderwijs, met inbegrip van beroepsopleiding en programmaës omtrent informatie en communicatietechnologie, techniek, ingenieurswezen en wetenschappen, in ontwikkelde landen en andere ontwikkelingslanden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-04.jpg",
        name: "Kwaliteitsonderwijs",
        number: "4.b",
        categoryId: null,
        parentId: "31",
      },
      {
        sdgId: 42,
        description:
          "Bereik gendergelijkheid en empowerment voor alle vrouwen en meisjes.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 43,
        description:
          "Erkennen en naar waarde schatten van onbetaalde zorg en thuiswerk door het voorzien van openbare diensten, infrastructuur en een sociaal beschermingsbeleid en door de bevordering van gedeelde verantwoordelijkheden binnen het gezin en de familie, zoals dat nationaal van toepassing is.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.4",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 44,
        description:
          "Verzekeren van universele toegang tot seksuele en reproductieve gezondheid en reproductieve rechten zoals overeengekomen in het kader van het Actieprogramma van de Internationale Conferentie over Bevolking en Ontwikkeling en het Peking-Actieplatform en de slotdocumenten van hun desbetreffende conferenties.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.6",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 45,
        description:
          "Uit de wereld helpen van alle schadelijke praktijken, zoals kind-, vroege en gedwongen huwelijken en vrouwelijke genitale verminking.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.3",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 46,
        description:
          "Het gebruik doen toenemen van innovatieve technologie, in het bijzonder de informatie- en communicatietechnologie, om te komen tot een grotere empowerment van vrouwen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.b",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 47,
        description:
          "Hervormingen doorvoeren waarbij vrouwen gelijke rechten krijgen op economische middelen, naast toegang tot eigenaarschap en controle over land en andere vormen van eigendom, financiële diensten, erfenissen en natuurlijke hulpbronnen, in overeenstemming met nationaal recht.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.a",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 48,
        description:
          "Een gezond beleid en afdwingbare wetgeving goedkeuren en versterken voor de bevordering van gendergelijkheid en de empowerment van alle vrouwen en meisjes op alle niveaus.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.c",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 49,
        description:
          "Een einde maken aan alle vormen van discriminatie jegens vrouwen en meisjes, overal.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.1",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 50,
        description:
          "Alle vormen van geweld tegen vrouwen en meisjes in de openbare en de privésfeer uitroeien, ook inzake vrouwenhandel en seksuele en andere soorten uitbuiting.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.2",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 51,
        description:
          "Verzekeren van de volledige en doeltreffende deelname van vrouwen en voor gelijke kansen inzake leiderschap op alle niveaus van de besluitvorming in het politieke, economische en openbare leven.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-05.jpg",
        name: "Gendergelijkheid",
        number: "5.5",
        categoryId: null,
        parentId: "42",
      },
      {
        sdgId: 52,
        description:
          "Verzeker toegang tot duurzaam beheer van water en sanitatie voor iedereen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 53,
        description:
          "Tegen 2030 de waterkwaliteit verbeteren door verontreiniging te beperken, de lozing van gevaarlijke chemicaliën en materialen een halt toe te roepen en de uitstoot ervan tot een minimum te beperken waarbij ook het aandeel van onbehandeld afvalwater wordt gehalveerd en recyclage en veilige hergebruik wereldwijd aanzienlijk worden verhoogd.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6.3",
        categoryId: null,
        parentId: "52",
      },
      {
        sdgId: 54,
        description:
          "Tegen 2030 komen tot toegang tot gepaste en degelijke sanitaire voorzieningen en hygiëne voor iedereen en een einde maken aan openbare ontlasting, waarbij speciale aandacht wordt besteed aan de behoeften van vrouwen en meisjes en mensen in kwetsbare situaties.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6.2",
        categoryId: null,
        parentId: "52",
      },
      {
        sdgId: 55,
        description:
          "Tegen 2030 komen tot een universele en gelijke toegang tot veilig en betaalbaar drinkwater voor iedereen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6.1",
        categoryId: null,
        parentId: "52",
      },
      {
        sdgId: 56,
        description:
          "Tegen 2030 in aanzienlijke mate de efficiëntie van het watergebruik verhogen in alle sectoren en het duurzaam winnen en verschaffen van zoetwater garanderen om een antwoord te bieden op de waterschaarste en om het aantal mensen dat af te rekenen heeft met waterschaarste, aanzienlijk te verminderen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6.4",
        categoryId: null,
        parentId: "52",
      },
      {
        sdgId: 57,
        description:
          "De deelname versterken en ondersteunen van plaatselijke gemeenschappen bij de verbetering van het waterbeheer en van de sanitaire voorzieningen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6.b",
        categoryId: null,
        parentId: "52",
      },
      {
        sdgId: 58,
        description:
          "Tegen 2030 het geïntegreerde beheer van de waterhulpbronnen implementeren op alle niveaus, ook via gerichte grensoverschrijdende samenwerking.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6.5",
        categoryId: null,
        parentId: "52",
      },
      {
        sdgId: 59,
        description:
          "Tegen 2030 de internationale samenwerking en de capaciteitsopbouwende ondersteuning uitbreiden voor de ontwikkelingslanden voor activiteiten die betrekking hebben op water en sanitaire voorzieningen en programma's, met inbegrip van technologieën voor waterwinning, ontzilting, waterefficiëntie, afvalwaterzuivering, recyclage en hergebruik.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6.a",
        categoryId: null,
        parentId: "52",
      },
      {
        sdgId: 60,
        description:
          "Tegen 2020 de op water gebaseerde ecosystemen beschermen en herstellen, met inbegrip van bergen, bossen, moerassen, rivieren, grondwaterlagen en meren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-06.jpg",
        name: "Schoon water en sanitair",
        number: "6.6",
        categoryId: null,
        parentId: "52",
      },
      {
        sdgId: 61,
        description:
          "Verzeker toegang tot betaalbare, betrouwbare, duurzame en moderne energie voor iedereen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-07.jpg",
        name: "Betaalbare en duurzame energie",
        number: "7",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 62,
        description:
          "Tegen 2030 de infrastructuur uitbreiden en de technologie upgraden om moderne en duurzame energiediensten te kunnen aanbieden aan alle ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, de kleine eilandstaten in ontwikkeling en door land ingesloten ontwikkelingslanden, in overeenstemming met hun respectieve steunprogramma's.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-07.jpg",
        name: "Betaalbare en duurzame energie",
        number: "7.b",
        categoryId: null,
        parentId: "61",
      },
      {
        sdgId: 63,
        description:
          "Tegen 2030 in aanzienlijke mate het aandeel hernieuwbare energie in de globale energiemix verhogen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-07.jpg",
        name: "Betaalbare en duurzame energie",
        number: "7.2",
        categoryId: null,
        parentId: "61",
      },
      {
        sdgId: 64,
        description:
          "Tegen 2030 de globale snelheid van verbetering in energie-efficiëntie verdubbelen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-07.jpg",
        name: "Betaalbare en duurzame energie",
        number: "7.3",
        categoryId: null,
        parentId: "61",
      },
      {
        sdgId: 65,
        description:
          "Tegen 2030 universele toegang tot betaalbare, betrouwbare en moderne energiediensten garanderen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-07.jpg",
        name: "Betaalbare en duurzame energie",
        number: "7.1",
        categoryId: null,
        parentId: "61",
      },
      {
        sdgId: 66,
        description:
          "Tegen 2030 de internationale samenwerking verhogen om toegang te vergemakkelijken tot onderzoek en technologie inzake schone energie, met inbegrip van de hernieuwbare energie, de energiedoeltreffendheid en de geavanceerde en schonere fossiele brandstoffentechnologie, en de investering promoten in energie-infrastructuur en schone energietechnologie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-07.jpg",
        name: "Betaalbare en duurzame energie",
        number: "7.a",
        categoryId: null,
        parentId: "61",
      },
      {
        sdgId: 67,
        description:
          "Bevorder aanhoudende, inclusieve en duurzame economische groei, volledige en productieve tewerkstelling en waardig werk voor iedereen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 68,
        description:
          "Versterken van de mogelijkheden van de plaatselijke financiële instellingen om toegang tot het bankwezen, de verzekeringen en financiële diensten voor allen aan te moedigen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.10",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 69,
        description:
          "Tot meer economische productiviteit komen door diversificatie, technologische modernisatie en innovatie, ook door de klemtoon te leggen op sectoren met hoge toegevoegde waarde en arbeidsintensieve sectoren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.2",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 70,
        description:
          "Tegen 2030 beleidslijnen uitwerken en implementeren ter ondersteuning van het duurzaam toerisme dat jobs creëert en plaatselijke cultuur en producten bevordert.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.9",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 71,
        description:
          "Tegen 2020 een globale strategie voor jongerentewerkstelling ontwikkelen en die operationeel maken en het Globale Jobspact van de Internationale Arbeidsorganisatie implementeren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.b",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 72,
        description:
          "De economische groei per capita in stand houden in overeenstemming met de nationale omstandigheden en, in het bijzonder, minstens 7% aangroei van het bruto binnenlands product per jaar in de minst ontwikkelde landen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.1",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 73,
        description:
          "Tegen 2030 geleidelijk aan de wereldwijde efficiëntie, productie en consumptie van hulpbronnen verbeteren en streven naar de ontkoppeling van economische groei en achteruitgang van het milieu, volgens het 10-jarig Programmakader voor Duurzame Consumptie en Productie, waarbij de ontwikkelde landen de leiding nemen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.4",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 74,
        description:
          "De arbeidsrechten beschermen en veilige en gezonde werkomgevingen bevorderen voor alle werknemers, met inbegrip van migrerende werknemers, in het bijzonder vrouwelijke migranten, en zij die zich in precaire werkomstandigheden bevinden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.8",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 75,
        description:
          "Onmiddellijke en effectieve maatregelen nemen om gedwongen arbeid uit de wereld te helpen, een einde te maken aan moderne slavernij en mensensmokkel en het verbod en de afschaffing van de ergste vormen van kinderarbeid veiligstellen, met inbegrip van het rekruteren en inzetten van kindsoldaten, en tegen 2025 een einde stellen aan kinderarbeid in al haar vormen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.7",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 76,
        description:
          "Bevorderen van op ontwikkeling toegespitste beleidslijnen die productieve activiteiten ondersteunen, alsook de creatie van waardige jobs, ondernemerschap, creativiteit en innovatie, en de formalisering en de groei aanmoedigen van micro-, kleine en middelgrote ondernemingen, ook via toegang tot financiële diensten.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.3",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 77,
        description:
          "Verhogen van de Aid for Trade voor ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, ook via het verbeterde geïntegreerde kader voor handelsgerelateerde bijstand aan de minst ontwikkelde landen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.a",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 78,
        description:
          "Tegen 2030 komen tot een volledige en productieve tewerkstelling en waardig werk voor alle vrouwen en mannen, ook voor jonge mensen en personen met een handicap, alsook een gelijk loon voor werk van gelijke waarde.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.5",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 79,
        description:
          "Tegen 2020 het aandeel aanzienlijk terugschroeven van jongeren die niet aan het werk zijn, geen onderwijs volgen en niet met een opleiding bezig zijn.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-08.png",
        name: "Eerlijk werk en economische groei",
        number: "8.6",
        categoryId: null,
        parentId: "67",
      },
      {
        sdgId: 80,
        description:
          "Bouw veerkrachtige infrastructuur, bevorder inclusieve en duurzame industrialisering en stimuleer innovatie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
        name: "Industrie, innovatie en infrastructuur",
        number: "9",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 81,
        description:
          "Verbeteren van het wetenschappelijk onderzoek, moderniseren van de technologische capaciteiten van industriesectoren in alle landen, in het bijzonder in ontwikkelingslanden, waarbij ook tegen 2030 innovatie wordt aangemoedigd en op aanzienlijke wijze het aantal onderzoeks- en ontwikkelingswerkers per miljoen inwoners wordt verhoogd en waarbij ook meer wordt uitgegeven aan publiek en privaat onderzoek en ontwikkeling.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
        name: "Industrie, innovatie en infrastructuur",
        number: "9.5",
        categoryId: null,
        parentId: "80",
      },
      {
        sdgId: 82,
        description:
          "De duurzame en veerkrachtige ontwikkeling van infrastructuur mogelijk maken in ontwikkelingslanden aan de hand van extra financiële, technologische en technische steun aan Afrikaanse landen, de minst ontwikkelde landen, de door land ingesloten ontwikkelingslanden en de kleine eilandstaten in ontwikkeling.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
        name: "Industrie, innovatie en infrastructuur",
        number: "9.a",
        categoryId: null,
        parentId: "80",
      },
      {
        sdgId: 83,
        description:
          "Bevorderen van inclusieve en duurzame industrialisering en, tegen 2030, het aandeel in de werkgelegenheid en het bruto binnenlands product van de industrie aanzienlijk doen toenemen, in overeenstemming met de nationale omstandigheden, en dat aandeel verdubbelen in de minst ontwikkelde landen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
        name: "Industrie, innovatie en infrastructuur",
        number: "9.2",
        categoryId: null,
        parentId: "80",
      },
      {
        sdgId: 84,
        description:
          "De toegang vergroten van kleinschalige industriële en andere ondernemingen, in het bijzonder in de ontwikkelingslanden, tot financiële diensten, inclusief betaalbare kredietverlening, alsook hun integratie in waardeketens en markten.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
        name: "Industrie, innovatie en infrastructuur",
        number: "9.3",
        categoryId: null,
        parentId: "80",
      },
      {
        sdgId: 85,
        description:
          "Ontwikkelen van kwalitatieve, betrouwbare, duurzame en veerkrachtige infrastructuur, met inbegrip van regionale en grensoverschrijdende infrastructuur, ter ondersteuning van de economische ontwikkeling en het menselijk welzijn, met klemtoon op een betaalbare en billijke toegang voor iedereen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
        name: "Industrie, innovatie en infrastructuur",
        number: "9.1",
        categoryId: null,
        parentId: "80",
      },
      {
        sdgId: 86,
        description:
          "Tegen 2030 de infrastructuur moderniseren en industrieën aanpassen om hen duurzaam te maken, waarbij de focus ligt op een grotere doeltreffendheid bij het gebruik van hulpbronnen en van schonere en milieuvriendelijke technologieën en industriële processen, waarbij alle landen de nodige actie ondernemen volgens hun eigen respectieve mogelijkheden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
        name: "Industrie, innovatie en infrastructuur",
        number: "9.4",
        categoryId: null,
        parentId: "80",
      },
      {
        sdgId: 87,
        description:
          "Ondersteunen van de binnenlandse technologische ontwikkeling, onderzoek en innovatie in ontwikkelingslanden, ook door een gunstig beleidsklimaat te garanderen voor, onder andere, industriële diversificatie en waardetoevoeging aan handelsproducten.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-09.jpg",
        name: "Industrie, innovatie en infrastructuur",
        number: "9.b",
        categoryId: null,
        parentId: "80",
      },
      {
        sdgId: 88,
        description: "Dring ongelijkheid in en tussen landen terug.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 89,
        description:
          "Gelijke kansen verzekeren en ongelijkheden wegwerken, ook door het afvoeren van discriminerende wetten, beleidslijnen en praktijken en door het bevorderen van de geschikte wetgeving, beleidslijnen en acties in dit opzicht.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.3",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 90,
        description:
          "Een verbeterde vertegenwoordiging verzekeren en een beter gehoor geven aan de ontwikkelingslanden bij de besluitvorming in mondiale, internationale economische en financiële instellingen om te komen tot meer doeltreffende, geloofwaardige, verantwoordelijke en legitieme instellingen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.6",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 91,
        description:
          "Tegen 2030 de sociale, economische en politieke inclusie van iedereen mogelijk maken en bevorderen, ongeacht leeftijd, geslacht, handicap, ras, etniciteit, herkomst, godsdienst of economische of andere status.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.2",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 92,
        description:
          "Beleid voeren dat geleidelijk tot een grotere gelijkheid leidt, in het bijzonder inzake fiscaliteit, lonen en sociale bescherming.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.4",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 93,
        description:
          "De regulering en monitoring verbeteren van de globale financiële markten en instellingen en de implementatie versterken van dergelijke reguleringen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.5",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 94,
        description:
          "Officiële ontwikkelingsbijstand en financiële stromen aanmoedigen, met inbegrip van directe buitenlandse investeringen, voor staten waar de behoefte het grootst is, in het bijzonder in de minst ontwikkelde landen, de Afrikaanse landen, de kleine eilandstaten in ontwikkeling en de door land ingesloten ontwikkelingslanden, in overeenstemming met hun nationale plannen en programma's.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.b",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 95,
        description:
          "Tegen 2030 de transactiekosten van overschrijvingen van migranten reduceren tot minder dan 3% en transfer vanuit landen met kosten hoger dan 5% elimineren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.c",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 96,
        description:
          "Het beginsel implementeren van speciale en gedifferentieerde behandeling voor ontwikkelingslanden, in het bijzonder de minst ontwikkelde landen, in overeenstemming met de overeenkomsten van de Wereldhandelsorganisatie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.a",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 97,
        description:
          "Tegen 2030 geleidelijk tot een inkomenstoename van de onderste 40% van de bevolking komen tegen een ritme dat hoger ligt dan het nationale gemiddelde, en die toename ook in stand houden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.1",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 98,
        description:
          "Een ordelijke, veilige, regelmatige en verantwoordelijke migratie en mobiliteit van mensen mogelijk maken, ook via de implementatie van geplande en degelijk beheerde migratiebeleidslijnen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-10.jpg",
        name: "Ongelijkheid verminderen",
        number: "10.7",
        categoryId: null,
        parentId: "88",
      },
      {
        sdgId: 99,
        description:
          "Maak steden en menselijke nederzettingen inclusief, veilig, veerkrachtig en duurzaam.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
        name: "Duurzame steden en gemeenschappen",
        number: "11",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 100,
        description:
          "Tegen 2030 universele toegang voorzien tot veilige, inclusieve en toegankelijke, groene en openbare ruimtes, in het bijzonder voor vrouwen en kinderen, ouderen en personen met een handicap.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
        name: "Duurzame steden en gemeenschappen",
        number: "11.7",
        categoryId: null,
        parentId: "99",
      },
      {
        sdgId: 101,
        description:
          "Tegen 2030 voor iedereen toegang voorzien tot adequate, veilige en betaalbare huisvesting en basisdiensten, en sloppenwijken verbeteren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
        name: "Duurzame steden en gemeenschappen",
        number: "11.1",
        categoryId: null,
        parentId: "99",
      },
      {
        sdgId: 102,
        description:
          "Tegen 2030 toegang voorzien tot veilige, betaalbare, toegankelijke en duurzame vervoerssystemen voor iedereen, waarbij de verkeersveiligheid verbeterd wordt, met name door het openbaar vervoer uit te breiden, met aandacht voor de behoeften van mensen in kwetsbare situaties, vrouwen, kinderen, personen met een handicap en ouderen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
        name: "Duurzame steden en gemeenschappen",
        number: "11.2",
        categoryId: null,
        parentId: "99",
      },
      {
        sdgId: 103,
        description:
          "Tegen 2030 de nadelige milieu-impact van steden per capita reduceren, ook door bijzondere aandacht te besteden aan de luchtkwaliteit en aan het gemeentelijk en ander afvalbeheer.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
        name: "Duurzame steden en gemeenschappen",
        number: "11.6",
        categoryId: null,
        parentId: "99",
      },
      {
        sdgId: 104,
        description:
          "Tegen 2030 inclusieve en duurzame stadsontwikkeling en capaciteit opbouwen voor participatieve, geïntegreerde en duurzame planning en beheer van menselijke nederzettingen in alle landen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
        name: "Duurzame steden en gemeenschappen",
        number: "11.3",
        categoryId: null,
        parentId: "99",
      },
      {
        sdgId: 105,
        description:
          "De inspanningen verhogen om het culturele en natuurlijke erfgoed van de wereld te beschermen en veilig te stellen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
        name: "Duurzame steden en gemeenschappen",
        number: "11.4",
        categoryId: null,
        parentId: "99",
      },
      {
        sdgId: 106,
        description:
          "Tegen 2030 het aantal doden en getroffenen aanzienlijk verminderen en in aanzienlijke mate de rechtstreekse economische impact op het bruto binnenlands product terugschroeven dat veroorzaakt wordt door rampen, met inbegrip van rampen die met water verband houden, waarbij de klemtoon ligt op het beschermen van de armen en van mensen in kwetsbare situaties.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-11.jpg",
        name: "Duurzame steden en gemeenschappen",
        number: "11.5",
        categoryId: null,
        parentId: "99",
      },
      {
        sdgId: 107,
        description: "Verzeker duurzame consumptie- en productiepatronen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12",
        categoryId: "2",
        parentId: null,
      },
      {
        sdgId: 108,
        description:
          "Tegen 2030 garanderen dat mensen overal beschikken over relevantie informatie over en zich bewust zijn van duurzame ontwikkeling en levensstijlen die in harmonie zijn met de natuur.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.8",
        categoryId: "2",
        parentId: "107",
      },
      {
        sdgId: 109,
        description:
          "Tegen 2030 de voedselverspilling in winkels en bij consumenten per capita halveren en voedselverlies reduceren in de productie- en bevoorradingsketens, met inbegrip van verliezen na de oogst.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.3",
        categoryId: "2",
        parentId: "107",
      },
      {
        sdgId: 110,
        description:
          "Duurzame praktijken bij overheidsopdrachten bevorderen in overeenstemming met nationale beleidslijnen en prioriteiten.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.7",
        categoryId: "2",
        parentId: "107",
      },
      {
        sdgId: 111,
        description:
          "Het 10-jarig Programmakader inzake Duurzame Consumptie- en Productiepatronen implementeren, waarbij alle landen actie ondernemen, en waarbij de ontwikkelde landen de leiding nemen, rekening houdend met de ontwikkeling en de mogelijkheden van de ontwikkelingslanden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.1",
        categoryId: "2",
        parentId: "107",
      },
      {
        sdgId: 112,
        description:
          "Inefficiënte subsidies voor fossiele brandstoffen die afvalproducerende consumptie aanmoedigen rationaliseren, door storende marktinvloeden uit de wereld te helpen, in overeenstemming met de nationale omstandigheden, ook door het belastingsysteem te herstructureren en deze schadelijke subsidies te laten uitdoven, waar deze bestaan, waarbij rekening wordt gehouden met de specifieke noden en omstandigheden in de ontwikkelingslanden en waarbij de mogelijke negatieve invloeden worden geminimaliseerd op hun ontwikkeling op een manier die de armen en de getroffen gemeenschappen beschermt.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.c",
        categoryId: null,
        parentId: "107",
      },
      {
        sdgId: 113,
        description:
          "Tegen 2030 de afvalproductie aanzienlijk beperken via preventie, vermindering, recyclage en hergebruik.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.5",
        categoryId: null,
        parentId: "107",
      },
      {
        sdgId: 114,
        description:
          "Tegen 2020 komen tot een milieuvriendelijk beheer van chemicaliën en van alle afval gedurende hun hele levenscyclus, in overeenstemming met afgesproken internationale kaderovereenkomsten, en de uitstoot aanzienlijk beperken in lucht, water en bodem om hun negatieve invloeden op de menselijke gezondheid en het milieu zoveel mogelijk te beperken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.4",
        categoryId: null,
        parentId: "107",
      },
      {
        sdgId: 115,
        description:
          "Bedrijven aanmoedigen, in het bijzonder grote en transnationale bedrijven, om duurzame praktijken aan te nemen en duurzaamheidsinformatie te integreren in hun rapporteringscyclus.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.6",
        categoryId: null,
        parentId: "107",
      },
      {
        sdgId: 116,
        description:
          "Ondersteunen van ontwikkelingslanden ter versterking van hun wetenschappelijke en technologische mogelijkheden om de richting uit te gaan van meer duurzame consumptie- en productiepatronen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.a",
        categoryId: null,
        parentId: "107",
      },
      {
        sdgId: 117,
        description:
          "Tegen 2030 het duurzame beheer en het efficiënte gebruik van natuurlijke hulpbronnen realiseren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.2",
        categoryId: null,
        parentId: "107",
      },
      {
        sdgId: 118,
        description:
          "Ontwikkelen en implementeren van instrumenten om de impact te monitoren van duurzame ontwikkeling op duurzaam toerisme dat werkgelegenheid creëert en de plaatselijke cultuur en producten promoot.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-12.jpg",
        name: "Verantwoorde comsumptie en productie",
        number: "12.b",
        categoryId: null,
        parentId: "107",
      },
      {
        sdgId: 119,
        description:
          "Neem dringend actie om klimaatverandering en haar impact te bestrijden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-13.jpg",
        name: "Klimaatactie",
        number: "13",
        categoryId: "1",
        parentId: null,
      },
      {
        sdgId: 120,
        description:
          "Maatregelen inzake klimaatverandering integreren in nationale beleidslijnen, strategieën en planning.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-13.jpg",
        name: "Klimaatactie",
        number: "13.2",
        categoryId: "1",
        parentId: "119",
      },
      {
        sdgId: 121,
        description:
          "De verbintenis  uitvoeren die door de ontwikkelde landen in het kader van het Raamverdrag van de Verenigde Naties inzake Klimaatverandering genomen werd omtrent de doelstelling om tegen 2020 gezamenlijk jaarlijks $ 100 miljard bijeen te brengen uit allerlei bronnen, om tegemoet te komen aan de behoeften van de ontwikkelingslanden in de context van aanzienlijke mitigatieacties en van transparantie inzake implementatie, en om door deze kapitalisatie het Groene Klimaatfonds zo snel mogelijk volledig operationeel te maken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-13.jpg",
        name: "Klimaatactie",
        number: "13.a",
        categoryId: "1",
        parentId: "119",
      },
      {
        sdgId: 122,
        description:
          "De opvoeding, bewustwording en de menselijke en institutionele capaciteit verbeteren met betrekking tot mitigatie, adaptatie, impactvermindering en vroegtijdige waarschuwing inzake klimaatverandering.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-13.jpg",
        name: "Klimaatactie",
        number: "13.3",
        categoryId: "1",
        parentId: "119",
      },
      {
        sdgId: 123,
        description:
          "De veerkracht en het aanpassingsvermogen versterken van met klimaat in verband te brengen gevaren en natuurrampen in alle landen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-13.jpg",
        name: "Klimaatactie",
        number: "13.1",
        categoryId: "1",
        parentId: "119",
      },
      {
        sdgId: 124,
        description:
          "Mechanismen promoten om de capaciteit te vergroten in het kader van doeltreffende aan klimaatverandering gekoppelde planning en beheer in de minst ontwikkelde landen en de kleine eilandstaten in ontwikkeling, waarbij ook wordt gefocust op vrouwen, jongeren en lokale en gemarginaliseerde gemeenschappen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-13.jpg",
        name: "Klimaatactie",
        number: "13.b",
        categoryId: "1",
        parentId: "119",
      },
      {
        sdgId: 125,
        description:
          "Behoud en maak duurzaam gebruik van oceanen, zeeën en maritieme hulpbronnen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 126,
        description:
          "Tegen 2020 op een doeltreffende manier de visvangst reguleren en een einde maken aan overbevissing, aan illegale, niet-aangegeven en ongereguleerde visserij en aan destructieve visserijpraktijken, en op wetenschap gebaseerde beheerplannen implementeren, om de visvoorraden zo snel mogelijk te herstellen, op zijn minst op niveaus die een maximale duurzame opbrengst kunnen garanderen zoals bepaald door hun biologische kenmerken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.4",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 127,
        description:
          "De wetenschappelijke kennis vergroten, onderzoekscapaciteit ontwikkelen en mariene technologie overdragen, waarbij rekening wordt gehouden met de criteria en richtlijnen van de Intergouvernementele Oceanografische Commissie inzake de overdracht van mariene technologie, om de gezondheid van de oceaan te verbeteren en de bijdrage te verruimen van de mariene biodiversiteit tot de ontwikkeling van ontwikkelingslanden, in het bijzonder kleine eilandstaten in ontwikkeling en de minst ontwikkelde landen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.a",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 128,
        description:
          "Tegen 2025 de vervuiling van de zee voorkomen en in aanzienlijke mate verminderen, in het bijzonder als gevolg van activiteiten op het land, met inbegrip van vervuiling door ronddrijvend afval en voedingsstoffen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.1",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 129,
        description:
          "Tegen 2030 de economische voordelen vergroten voor kleine eilandstaten in ontwikkeling en voor de minst ontwikkelde landen van het duurzaam gebruik van mariene rijkdommen, ook via het duurzaam beheer van visserij, aquacultuur en toerisme.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.7",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 130,
        description:
          "Toegang verschaffen aan kleinschalige ambachtelijke vissers tot mariene hulpbronnen en markten.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.b",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 131,
        description:
          "Het behoud en het duurzaam gebruik van oceanen en hulpbronnen versterken door het implementeren van internationaal recht zoals dat wordt weerspiegeld in het VN-Zeerechtverdrag, dat een wettelijk kader voorziet voor het behoud en het duurzaam gebruik van oceanen en hun hulpbronnen, zoals ook wordt vermeld in paragraaf 158 van ",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.c",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 132,
        description:
          "Tegen 2020 bepaalde vormen van visserijsubsidies afschaffen die bijdragen tot overcapaciteit en overbevissing, een einde maken aan subsidies die bijdragen tot illegale, niet-aangegeven en ongereguleerde visserij en geen nieuwe vergelijkbare subsidies invoeren, erkennen dat een passende en doeltreffende speciale en gedifferentieerde behandeling van de ontwikkelingslanden en van de minst ontwikkelde landen integraal deel zou moeten uitmaken van de onderhandelingen inzake visserijsubsidies van de Wereldhandelsorganisatie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.6",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 133,
        description:
          "Tegen 2020 op een duurzame manier zee- en kustecosystemen beheren en beschermen om aanzienlijke negatieve gevolgen te vermijden, ook door het versterken van hun veerkracht, en actie ondernemen om deze te herstellen en om te komen tot gezonde en productieve oceanen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.2",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 134,
        description:
          "Tegen 2020 minstens 10% van de kust- en zeegebieden behouden, in overeenstemming met het nationale en internationale recht en gebaseerd op de beste beschikbare wetenschappelijke informatie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.5",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 135,
        description:
          "De impact van de verzuring van de oceanen minimaliseren en aanpakken, ook via verhoogde wetenschappelijke samenwerking op alle niveaus.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-14.jpg",
        name: "Leven in het water",
        number: "14.3",
        categoryId: null,
        parentId: "125",
      },
      {
        sdgId: 136,
        description:
          "Bescherm, herstel en bevorder het duurzaam gebruik van ecosystemen op het vasteland, beheer bossen en wouden duurzaam, bestrijd woestijnvorming, stop landdegradatie en draai het terug en roep het verlies aan biodiversiteit een halt toe.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 137,
        description:
          "Tegen 2020 de implementatie bevorderen van het duurzaam beheer van alle soorten bossen, de ontbossing een halt toeroepen, verloederde bossen herstellen en op duurzame manier bebossing en herbebossing mondiaal opvoeren.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.2",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 138,
        description:
          "De wereldwijde inspanningen ter bestrijding van stroperij en illegale handel in beschermde diersoorten opvoeren, ook door verhoging van de capaciteit van plaatselijke gemeenschappen in hun streven naar kansen inzake een duurzaam bestaan.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.c",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 139,
        description:
          "Tegen 2030 het behoud garanderen van de ecosystemen in de bergen, met inbegrip van hun biodiversiteit, om hun vermogen te versterken voordelen te genereren die essentieel zijn voor duurzame ontwikkeling.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.4",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 140,
        description:
          "Dringende en doortastende actie ondernemen om de aftakeling in te perken van natuurlijke leefgebieden, het verlies van biodiversiteit een halt toe te roepen en, tegen 2020, de met uitsterven bedreigde soorten te beschermen en hun uitsterven te voorkomen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.5",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 141,
        description:
          "Tegen 2020 ecosysteem- en biodiversiteitswaarden integreren in nationale en plaatselijke planning, ontwikkelingsprocessen, strategieën en plannen inzake armoedebestrijding.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.9",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 142,
        description:
          "Tegen 2020 maatregelen invoeren om de invoering van invasieve uitheemse soorten in land- en waterecosystemen te beperken en hun impact op aanzienlijke wijze te beperken, en de prioritaire soorten controleren of uitroeien.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.8",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 143,
        description:
          "Tegen 2030 de woestijnvorming tegengaan, aangetast land en gedegradeerde bodem herstellen, ook land dat wordt aangetast door woestijnvorming, droogte en overstromingen, en streven naar een wereld die qua landdegradatie neutraal is.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.3",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 144,
        description:
          "Aanzienlijke middelen mobiliseren vanuit allerlei bronnen en op alle niveaus om duurzaam bosbeheer te financieren en gepaste stimuli te verschaffen aan ontwikkelingslanden om een dergelijk beheer te organiseren, ook voor behoud en herbebossing.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.b",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 145,
        description:
          "Financiële hulpbronnen mobiliseren en aanzienlijk verhogen vanuit allerlei bronnen om de biodiversiteit en de ecosystemen te vrijwaren en op duurzame wijze te gebruiken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.a",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 146,
        description:
          "Tegen 2020 het behoud, herstel en het duurzaam gebruik van terrestrische en inlandse zoetwaterecosystemen en hun diensten waarborgen, in het bijzonder bossen, moeraslanden, bergen en droge gebieden, in lijn met de verplichtingen van de internationale overeenkomsten.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.1",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 147,
        description:
          "Dringend actie ondernemen om een einde te maken aan stroperij en de handel in beschermde planten- en diersoorten en zowel de vraag naar als het aanbod van illegale producten afkomstig van deze planten- en diersoorten aan te pakken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.7",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 148,
        description:
          "Bevorderen van het eerlijk en billijk verdelen van de voordelen die voortvloeien uit het gebruik van genetische hulpbronnen en bevorderen van gepaste toegang tot dergelijke hulpbronnen, zoals internationaal overeengekomen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-15.jpg",
        name: "Leven op het land",
        number: "15.6",
        categoryId: null,
        parentId: "136",
      },
      {
        sdgId: 149,
        description:
          "Bevorder vreedzame en inclusieve samenlevingen met het oog op duurzame ontwikkeling, verzeker toegang tot justitie voor iedereen en bouw op alle niveaus doeltreffende, verantwoordelijke en toegankelijke instellingen uit.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 150,
        description:
          "Een einde maken aan het misbruik, de exploitatie, de handel en van alle vormen van geweld tegen en het martelen van kinderen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.2",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 151,
        description:
          "Ontvankelijke, inclusieve, participatieve en representatieve besluitvorming op alle niveaus garanderen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.7",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 152,
        description:
          "Verruimen en versterken van de participatie van de ontwikkelingslanden in de instellingen van mondiaal bestuur.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.8",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 153,
        description:
          "Bevorderen en afdwingen van niet-discriminerende wetten en beleidslijnen voor duurzame ontwikkeling.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.b",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 154,
        description:
          "Doeltreffende, verantwoordelijke en transparante instellingen ontwikkelen op alle niveaus.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.6",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 155,
        description:
          "De rechtsregels bevorderen op nationaal en internationaal niveau en gelijke toegang tot het rechtssysteem voor iedereen garanderen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.3",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 156,
        description:
          "Op duurzame wijze een einde maken aan corruptie en omkoperij in al hun vormen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.5",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 157,
        description:
          "Tegen 2030 een wettelijke identiteit voorzien voor iedereen, met inbegrip van geboorteregistratie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.9",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 158,
        description:
          "Versterken van de relevante nationale instellingen, ook via internationale samenwerking, voor het opbouwen van capaciteit op alle niveaus, in het bijzonder in de ontwikkelingslanden, om geweld te voorkomen en terrorisme en misdaad te bestrijden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.a",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 159,
        description:
          "Tegen 2030 ongewettigde financiële en wapenstromen aanzienlijk indijken, het herstel en de teruggave van gestolen goederen versterken en alle vormen van georganiseerde misdaad bestrijden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-16.jpg",
        name: "Vrede, justitie en sterke publieke diensten",
        number: "16.4",
        categoryId: null,
        parentId: "149",
      },
      {
        sdgId: 160,
        description:
          "Versterk de implementatiemiddelen en revitaliseer het wereldwijd partnerschap voor duurzame ontwikkeling.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17",
        categoryId: null,
        parentId: null,
      },
      {
        sdgId: 161,
        description:
          "Bijkomende financiële middelen voor ontwikkelingslanden mobiliseren vanuit verschillende bronnen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.3",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 162,
        description:
          "De internationale steun verhogen voor het implementeren van doeltreffende en doelgerichte capaciteitsopbouw in ontwikkelingslanden ter ondersteuning van nationale plannen die erop gericht zijn om alle Duurzame Ontwikkelingsdoelstellingen te implementeren, ook via de Noord-Zuid-, Zuid-Zuid- en trilaterale samenwerking.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.9",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 163,
        description:
          "Tegen 2030 voortbouwen op bestaande initiatieven om metingen te ontwikkelen met betrekking tot de vooruitgang van duurzame ontwikkeling die kunnen dienen als aanvulling op het bruto binnenlands product, en de statistische capaciteitsopbouw ondersteunen in ontwikkelingslanden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.19",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 164,
        description:
          "Doeltreffende openbare, publiek-private en maatschappelijke partnerschappen aanmoedigen en bevorderen, voortbouwend op de ervaring en het netwerk van partnerschappen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.17",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 165,
        description:
          "Een universeel, op regels gebaseerd, open, niet-discriminerend en billijk multilateraal handelssysteem bevorderen onder de Wereldhandelsorganisatie, ook via het volbrengen van de onderhandelingen onder de Ontwikkelingsagenda van Doha van deze organisatie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.10",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 166,
        description:
          "De technologiebank en het mechanisme voor het opbouwen van wetenschappelijke, technologische en innoverende capaciteit voor de minst ontwikkelde landen volledig operationeel maken tegen 2017 en het gebruik opdrijven van de technologie die dit mogelijk moet maken, in het bijzonder de informatie- en communicatietechnologie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.8",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 167,
        description:
          "Ontwikkelingslanden bijstaan in hun streven naar schuldhoudbaarheid op lange termijn via gecoördineerde beleidslijnen waarbij aandacht wordt besteed aan het aanmoedigen van de schuldfinanciering, de schuldverlichting en de schuldherstructurering, indien van toepassing, en de externe schuld aanpakken van arme landen met een grote schuldenlast om hun schuldencrisis in te perken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.4",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 168,
        description:
          "Versterken van de binnenlandse middelenmobilisatie (DRM), ook via internationale steun aan ontwikkelingslanden, om de binnenlandse capaciteit te verbeteren voor het innen van belastingen en andere inkomsten.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.1",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 169,
        description:
          "De globale macro-economische stabiliteit versterken, ook via beleidscoördinatie en beleidscoherentie.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.13",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 170,
        description:
          "Versterken van de Noord-Zuid-, de Zuid-Zuid- en de regionale en internationale trilaterale samenwerking inzake wetenschap, technologie en innovatie en vergemakkelijken van de toegang daartoe",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.6",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 171,
        description:
          "De export van ontwikkelingslanden aanzienlijk doen toenemen, in het bijzonder met de bedoeling om het aandeel van de minst ontwikkelde landen in de mondiale export tegen 2020 te verdubbelen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.11",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 172,
        description:
          "De beleidsruimte en het leiderschap van elke land respecteren om beleidslijnen uit te werken en om duurzame ontwikkeling te implementeren om een einde te maken aan armoede.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.15",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 173,
        description:
          "De ontwikkeling, overdracht, verspreiding en verdeling van ecologische technologieën aan ontwikkelingslanden volgens gunstige voorwaarden, ook inzake gunstige en preferentiële bepalingen, zoals wederzijds overeengekomen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.7",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 174,
        description:
          "Het Globaal Partnerschap voor duurzame ontwikkeling versterken, aangevuld door partnerschappen met meerdere belanghebbenden (multi-stakeholderpartnerschappen) en kennis, expertise, technologie en financiële hulpmiddelen mobiliseren en delen met het oog op het bereiken van de Duurzame Ontwikkelingsdoelstellingen in alle landen, in het bijzonder in de ontwikkelingslanden.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.16",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 175,
        description:
          "Tijdig de implementatie realiseren van belasting- en quotavrije markttoegang op blijvende wijze voor alle minst ontwikkelde landen, in overeenstemming met de beslissingen van de Wereldhandelsorganisatie, ook door ervoor te zorgen dat de voorkeursregels die van oorsprong van toepassing zijn op import van de minst ontwikkelde landen, transparant en eenvoudig zijn, en bijdragen tot het vergemakkelijken van markttoegang.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.12",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 176,
        description:
          "Ontwikkelde landen dienen ten volle hun verbintenissen aangaande officiële ontwikkelingshulp te implementeren, waaronder ook de verbintenis van vele ontwikkelde landen om 0,7% van het bruto nationaal inkomen te besteden aan officiële ontwikkelingshulp voor ontwikkelingslanden (ODA/GNI) en 0,15% tot 0,20% ontwikkelingshulp aan de minst ontwikkelde landen",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.2",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 177,
        description: "Beleidscoherentie voor duurzame ontwikkeling versterken.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.14",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 178,
        description:
          "Regelingen goedkeuren en uitvoeren die investeringen in de minst ontwikkelde landen moeten bevorderen.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.5",
        categoryId: null,
        parentId: "160",
      },
      {
        sdgId: 179,
        description:
          "Tegen 2020 de steun voor capaciteitsopbouw verhogen aan ontwikkelingslanden, inclusief de minst ontwikkelde landen en de kleine eilandstaten in ontwikkeling, om de beschikbaarheid van hoogwaardige, actuele en betrouwbare gegevens opgedeeld naar inkomen, gender, leeftijd, ras, etnische afkomst, migratiestatus, handicap, geografische locatie en andere kenmerken relevant in een nationale context, aanzienlijk op te drijven.",
        icon: "/content/images/SDG/SDG-icon-NL-RGB-17.jpg",
        name: "Partnerschap om doelstellingen te bereiken",
        number: "17.18",
        categoryId: null,
        parentId: "160",
      },
    ],
  };
};

export default get;
