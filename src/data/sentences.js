export const germanSentences = [
  // NOMINATIVE EXAMPLES (all genders + pronouns)
  {
    id: 1,
    german: [
      { text: "Der große Mann", case: "nominative", gender: "masculine" },
      { text: " arbeitet heute." }
    ],
    english: "The tall man works today.",
    explanation: "Der große Mann (masculine nominative subject with adjective)"
  },
  {
    id: 2,
    german: [
      { text: "Die schöne Frau", case: "nominative", gender: "feminine" },
      { text: " singt laut." }
    ],
    english: "The beautiful woman sings loudly.",
    explanation: "Die schöne Frau (feminine nominative subject with adjective)"
  },
  {
    id: 3,
    german: [
      { text: "Das kleine Kind", case: "nominative", gender: "neuter" },
      { text: " spielt draußen." }
    ],
    english: "The small child plays outside.",
    explanation: "Das kleine Kind (neuter nominative subject with adjective)"
  },
  {
    id: 4,
    german: [
      { text: "Ich", case: "nominative" },
      { text: " lese gerne Bücher." }
    ],
    english: "I like to read books.",
    explanation: "Ich (first person singular nominative pronoun)"
  },
  {
    id: 5,
    german: [
      { text: "Du", case: "nominative" },
      { text: " bist sehr nett." }
    ],
    english: "You are very nice.",
    explanation: "Du (second person singular nominative pronoun)"
  },
  {
    id: 6,
    german: [
      { text: "Er", case: "nominative" },
      { text: " kommt später." }
    ],
    english: "He comes later.",
    explanation: "Er (third person masculine nominative pronoun)"
  },
  {
    id: 7,
    german: [
      { text: "Sie", case: "nominative" },
      { text: " tanzt wunderbar." }
    ],
    english: "She dances wonderfully.",
    explanation: "Sie (third person feminine nominative pronoun)"
  },
  {
    id: 8,
    german: [
      { text: "Es", case: "nominative" },
      { text: " regnet stark." }
    ],
    english: "It rains heavily.",
    explanation: "Es (third person neuter nominative pronoun)"
  },
  {
    id: 9,
    german: [
      { text: "Wir", case: "nominative" },
      { text: " fahren nach Berlin." }
    ],
    english: "We drive to Berlin.",
    explanation: "Wir (first person plural nominative pronoun)"
  },
  {
    id: 10,
    german: [
      { text: "Ihr", case: "nominative" },
      { text: " seid die Besten!" }
    ],
    english: "You (all) are the best!",
    explanation: "Ihr (second person plural nominative pronoun)"
  },
  {
    id: 11,
    german: [
      { text: "Sie", case: "nominative" },
      { text: " spielen Fußball." }
    ],
    english: "They play soccer.",
    explanation: "Sie (third person plural nominative pronoun)"
  },

  // ACCUSATIVE EXAMPLES (all genders + pronouns)
  {
    id: 12,
    german: [
      { text: "Ich sehe " },
      { text: "den alten Mann", case: "accusative" },
      { text: "." }
    ],
    english: "I see the old man.",
    explanation: "den alten Mann (masculine accusative direct object with adjective)"
  },
  {
    id: 13,
    german: [
      { text: "Er kauft " },
      { text: "die rote Blume", case: "accusative" },
      { text: "." }
    ],
    english: "He buys the red flower.",
    explanation: "die rote Blume (feminine accusative direct object with adjective)"
  },
  {
    id: 14,
    german: [
      { text: "Wir finden " },
      { text: "das neue Buch", case: "accusative" },
      { text: " interessant." }
    ],
    english: "We find the new book interesting.",
    explanation: "das neue Buch (neuter accusative direct object with adjective)"
  },
  {
    id: 15,
    german: [
      { text: "Sie kennt " },
      { text: "mich", case: "accusative" },
      { text: " sehr gut." }
    ],
    english: "She knows me very well.",
    explanation: "mich (first person singular accusative pronoun)"
  },
  {
    id: 16,
    german: [
      { text: "Ich rufe " },
      { text: "dich", case: "accusative" },
      { text: " morgen an." }
    ],
    english: "I'll call you tomorrow.",
    explanation: "dich (second person singular accusative pronoun)"
  },
  {
    id: 17,
    german: [
      { text: "Wir besuchen " },
      { text: "ihn", case: "accusative" },
      { text: " am Wochenende." }
    ],
    english: "We visit him on the weekend.",
    explanation: "ihn (third person masculine accusative pronoun)"
  },
  {
    id: 18,
    german: [
      { text: "Er liebt " },
      { text: "sie", case: "accusative" },
      { text: " sehr." }
    ],
    english: "He loves her very much.",
    explanation: "sie (third person feminine accusative pronoun)"
  },
  {
    id: 19,
    german: [
      { text: "Ich nehme " },
      { text: "es", case: "accusative" },
      { text: " mit." }
    ],
    english: "I take it with me.",
    explanation: "es (third person neuter accusative pronoun)"
  },
  {
    id: 20,
    german: [
      { text: "Sie fragen " },
      { text: "uns", case: "accusative" },
      { text: " nach dem Weg." }
    ],
    english: "They ask us for directions.",
    explanation: "uns (first person plural accusative pronoun)"
  },
  {
    id: 21,
    german: [
      { text: "Ich sehe " },
      { text: "euch", case: "accusative" },
      { text: " im Park." }
    ],
    english: "I see you (all) in the park.",
    explanation: "euch (second person plural accusative pronoun)"
  },
  {
    id: 22,
    german: [
      { text: "Der Lehrer prüft " },
      { text: "sie", case: "accusative" },
      { text: " heute." }
    ],
    english: "The teacher tests them today.",
    explanation: "sie (third person plural accusative pronoun)"
  },

  // DATIVE EXAMPLES (all genders + pronouns)
  {
    id: 23,
    german: [
      { text: "Ich helfe " },
      { text: "dem kranken Mann", case: "dative" },
      { text: "." }
    ],
    english: "I help the sick man.",
    explanation: "dem kranken Mann (masculine dative after verb 'helfen' with adjective)"
  },
  {
    id: 24,
    german: [
      { text: "Er schenkt " },
      { text: "der netten Frau", case: "dative" },
      { text: " Blumen." }
    ],
    english: "He gives flowers to the nice woman.",
    explanation: "der netten Frau (feminine dative indirect object with adjective)"
  },
  {
    id: 25,
    german: [
      { text: "Wir geben " },
      { text: "dem müden Kind", case: "dative" },
      { text: " ein Spielzeug." }
    ],
    english: "We give the tired child a toy.",
    explanation: "dem müden Kind (neuter dative indirect object with adjective)"
  },
  {
    id: 26,
    german: [
      { text: "Sie gibt " },
      { text: "mir", case: "dative" },
      { text: " ein Geschenk." }
    ],
    english: "She gives me a gift.",
    explanation: "mir (first person singular dative pronoun)"
  },
  {
    id: 27,
    german: [
      { text: "Ich bringe " },
      { text: "dir", case: "dative" },
      { text: " das Buch." }
    ],
    english: "I bring you the book.",
    explanation: "dir (second person singular dative pronoun)"
  },
  {
    id: 28,
    german: [
      { text: "Wir folgen " },
      { text: "ihm", case: "dative" },
      { text: " zur Schule." }
    ],
    english: "We follow him to school.",
    explanation: "ihm (third person masculine dative pronoun)"
  },
  {
    id: 29,
    german: [
      { text: "Er antwortet " },
      { text: "ihr", case: "dative" },
      { text: " höflich." }
    ],
    english: "He answers her politely.",
    explanation: "ihr (third person feminine dative pronoun)"
  },
  {
    id: 30,
    german: [
      { text: "Ich begegne " },
      { text: "ihm", case: "dative" },
      { text: " oft." }
    ],
    english: "I often encounter it.",
    explanation: "ihm (third person neuter dative pronoun - same form as masculine)"
  },
  {
    id: 31,
    german: [
      { text: "Sie danken " },
      { text: "uns", case: "dative" },
      { text: " herzlich." }
    ],
    english: "They thank us warmly.",
    explanation: "uns (first person plural dative pronoun)"
  },
  {
    id: 32,
    german: [
      { text: "Ich vertraue " },
      { text: "euch", case: "dative" },
      { text: " völlig." }
    ],
    english: "I trust you (all) completely.",
    explanation: "euch (second person plural dative pronoun)"
  },
  {
    id: 33,
    german: [
      { text: "Der Chef gibt " },
      { text: "ihnen", case: "dative" },
      { text: " eine Chance." }
    ],
    english: "The boss gives them a chance.",
    explanation: "ihnen (third person plural dative pronoun)"
  },

  // GENITIVE EXAMPLES (all genders + pronouns)
  {
    id: 34,
    german: [
      { text: "Das Auto " },
      { text: "des reichen Mannes", case: "genitive" },
      { text: " ist teuer." }
    ],
    english: "The rich man's car is expensive.",
    explanation: "des reichen Mannes (masculine genitive showing possession with adjective)"
  },
  {
    id: 35,
    german: [
      { text: "Die Tasche " },
      { text: "der jungen Frau", case: "genitive" },
      { text: " ist elegant." }
    ],
    english: "The young woman's bag is elegant.",
    explanation: "der jungen Frau (feminine genitive showing possession with adjective)"
  },
  {
    id: 36,
    german: [
      { text: "Die Farbe " },
      { text: "des neuen Hauses", case: "genitive" },
      { text: " gefällt mir." }
    ],
    english: "I like the color of the new house.",
    explanation: "des neuen Hauses (neuter genitive showing possession with adjective)"
  },
  {
    id: 37,
    german: [
      { text: "Anstatt " },
      { text: "meiner", case: "genitive" },
      { text: " kam er." }
    ],
    english: "Instead of me, he came.",
    explanation: "meiner (first person singular genitive pronoun after preposition 'anstatt')"
  },
  {
    id: 38,
    german: [
      { text: "Trotz " },
      { text: "deiner", case: "genitive" },
      { text: " Hilfe scheiterte er." }
    ],
    english: "Despite your help, he failed.",
    explanation: "deiner (second person singular genitive pronoun after preposition 'trotz')"
  },
  {
    id: 39,
    german: [
      { text: "Wegen " },
      { text: "seiner", case: "genitive" },
      { text: " Krankheit blieb er zu Hause." }
    ],
    english: "Because of his illness, he stayed home.",
    explanation: "seiner (third person masculine genitive pronoun after preposition 'wegen')"
  },
  {
    id: 40,
    german: [
      { text: "Während " },
      { text: "ihrer", case: "genitive" },
      { text: " Abwesenheit passierte es." }
    ],
    english: "During her absence, it happened.",
    explanation: "ihrer (third person feminine genitive pronoun after preposition 'während')"
  },
  {
    id: 41,
    german: [
      { text: "Innerhalb " },
      { text: "seiner", case: "genitive" },
      { text: " Grenzen ist es sicher." }
    ],
    english: "Within its borders, it is safe.",
    explanation: "seiner (third person neuter genitive pronoun after preposition 'innerhalb')"
  },
  {
    id: 42,
    german: [
      { text: "Anstelle " },
      { text: "unser", case: "genitive" },
      { text: " kommen sie." }
    ],
    english: "Instead of us, they come.",
    explanation: "unser (first person plural genitive pronoun after preposition 'anstelle')"
  },
  {
    id: 43,
    german: [
      { text: "Wegen " },
      { text: "euer", case: "genitive" },
      { text: " Verspätung warten wir." }
    ],
    english: "Because of your (all) delay, we wait.",
    explanation: "euer (second person plural genitive pronoun after preposition 'wegen')"
  },
  {
    id: 44,
    german: [
      { text: "Trotz " },
      { text: "ihrer", case: "genitive" },
      { text: " Proteste ging es weiter." }
    ],
    english: "Despite their protests, it continued.",
    explanation: "ihrer (third person plural genitive pronoun after preposition 'trotz')"
  },

  // MIXED CASE EXAMPLES with complex sentences
  {
    id: 45,
    german: [
      { text: "Der kluge Student", case: "nominative" },
      { text: " gibt " },
      { text: "der freundlichen Lehrerin", case: "dative" },
      { text: " " },
      { text: "das schwere Buch", case: "accusative" },
      { text: " " },
      { text: "seines Vaters", case: "genitive" },
      { text: "." }
    ],
    english: "The smart student gives his father's heavy book to the friendly teacher.",
    explanation: "Mixed cases: Der kluge Student (nom), der freundlichen Lehrerin (dat), das schwere Buch (acc), seines Vaters (gen)"
  },
  {
    id: 46,
    german: [
      { text: "Die elegante Dame", case: "nominative" },
      { text: " schenkt " },
      { text: "ihrem kleinen Enkel", case: "dative" },
      { text: " " },
      { text: "die goldene Uhr", case: "accusative" },
      { text: " " },
      { text: "ihrer Großmutter", case: "genitive" },
      { text: "." }
    ],
    english: "The elegant lady gives her grandmother's golden watch to her little grandson.",
    explanation: "Mixed cases: Die elegante Dame (nom), ihrem kleinen Enkel (dat), die goldene Uhr (acc), ihrer Großmutter (gen)"
  },
  {
    id: 47,
    german: [
      { text: "Ich", case: "nominative" },
      { text: " zeige " },
      { text: "dir", case: "dative" },
      { text: " " },
      { text: "das alte Foto", case: "accusative" },
      { text: " " },
      { text: "meines besten Freundes", case: "genitive" },
      { text: "." }
    ],
    english: "I show you the old photo of my best friend.",
    explanation: "Mixed cases: Ich (nom pronoun), dir (dat pronoun), das alte Foto (acc), meines besten Freundes (gen)"
  },
  {
    id: 48,
    german: [
      { text: "Sie", case: "nominative" },
      { text: " erzählt " },
      { text: "uns", case: "dative" },
      { text: " " },
      { text: "die spannende Geschichte", case: "accusative" },
      { text: " " },
      { text: "ihres mutigen Bruders", case: "genitive" },
      { text: "." }
    ],
    english: "She tells us the exciting story of her brave brother.",
    explanation: "Mixed cases: Sie (nom pronoun), uns (dat pronoun), die spannende Geschichte (acc), ihres mutigen Bruders (gen)"
  }
];