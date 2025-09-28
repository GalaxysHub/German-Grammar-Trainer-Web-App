// Helper function to detect gender from German articles and nouns
export const detectGender = (text) => {
  const lowerText = text.toLowerCase().trim();
  
  // Definite articles
  if (lowerText.startsWith('der ') || lowerText.startsWith('dem ') || lowerText.startsWith('den ') || lowerText.startsWith('des ')) {
    return 'masculine';
  }
  if (lowerText.startsWith('die ') || lowerText.startsWith('der ') && (lowerText.includes(' frau') || lowerText.includes(' dame') || lowerText.includes(' mutter') || lowerText.includes(' tochter') || lowerText.includes(' schwester'))) {
    return 'feminine';
  }
  if (lowerText.startsWith('das ')) {
    return 'neuter';
  }
  
  // Indefinite articles
  if (lowerText.startsWith('ein ') || lowerText.startsWith('einen ') || lowerText.startsWith('einem ') || lowerText.startsWith('eines ')) {
    // Check noun endings for gender hints
    if (lowerText.includes('mann') || lowerText.includes('vater') || lowerText.includes('sohn') || lowerText.includes('bruder') || lowerText.includes('onkel')) {
      return 'masculine';
    }
    if (lowerText.includes('frau') || lowerText.includes('mutter') || lowerText.includes('tochter') || lowerText.includes('schwester') || lowerText.includes('dame')) {
      return 'feminine';
    }
    if (lowerText.includes('kind') || lowerText.includes('baby') || lowerText.includes('haus') || lowerText.includes('buch') || lowerText.includes('auto')) {
      return 'neuter';
    }
  }
  
  // Eine is always feminine
  if (lowerText.startsWith('eine ') || lowerText.startsWith('einer ')) {
    return 'feminine';
  }
  
  // Common masculine nouns
  if (lowerText.includes('mann') || lowerText.includes('vater') || lowerText.includes('sohn') || 
      lowerText.includes('bruder') || lowerText.includes('onkel') || lowerText.includes('lehrer') ||
      lowerText.includes('student') || lowerText.includes('chef') || lowerText.includes('besitzer') ||
      lowerText.includes('professor') || lowerText.includes('enkel')) {
    return 'masculine';
  }
  
  // Common feminine nouns
  if (lowerText.includes('frau') || lowerText.includes('mutter') || lowerText.includes('tochter') || 
      lowerText.includes('schwester') || lowerText.includes('dame') || lowerText.includes('lehrerin') ||
      lowerText.includes('blume') || lowerText.includes('tasche') || lowerText.includes('uhr') ||
      lowerText.includes('kirche') || lowerText.includes('schule') || lowerText.includes('geschichte') ||
      lowerText.includes('großmutter')) {
    return 'feminine';
  }
  
  // Common neuter nouns
  if (lowerText.includes('kind') || lowerText.includes('baby') || lowerText.includes('haus') || 
      lowerText.includes('buch') || lowerText.includes('auto') || lowerText.includes('foto') ||
      lowerText.includes('spielzeug') || lowerText.includes('geschenk')) {
    return 'neuter';
  }
  
  return null; // Unknown gender
};

// Helper function to detect if a word is a pronoun
export const detectPronoun = (text) => {
  const lowerText = text.toLowerCase().trim();
  
  // Personal pronouns
  const personalPronouns = [
    'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie',
    'mich', 'dich', 'ihn', 'uns', 'euch',
    'mir', 'dir', 'ihm', 'ihr', 'uns', 'euch', 'ihnen',
    'meiner', 'deiner', 'seiner', 'ihrer', 'unser', 'euer'
  ];
  
  // Interrogative pronouns
  const interrogativePronouns = ['wer', 'wen', 'wem', 'wessen'];
  
  // Possessive pronouns
  const possessivePronouns = [
    'mein', 'dein', 'sein', 'ihr', 'unser', 'euer',
    'meine', 'deine', 'seine', 'ihre', 'unsere', 'eure',
    'meinen', 'deinen', 'seinen', 'ihren', 'unseren', 'euren',
    'meinem', 'deinem', 'seinem', 'ihrem', 'unserem', 'eurem',
    'meines', 'deines', 'seines', 'ihres', 'unseres', 'eures'
  ];
  
  return personalPronouns.includes(lowerText) || 
         interrogativePronouns.includes(lowerText) ||
         possessivePronouns.includes(lowerText);
};

// Helper function to get all cases, genders, and pronouns from a sentence
export const getSentenceMetadata = (sentence) => {
  const cases = new Set();
  const genders = new Set();
  let hasPronouns = false;
  
  sentence.german.forEach(part => {
    if (part.case) {
      cases.add(part.case);
      const gender = part.gender || detectGender(part.text);
      if (gender) {
        genders.add(gender);
      }
      
      // Check if this part is a pronoun
      if (part.isPronoun || detectPronoun(part.text)) {
        hasPronouns = true;
      }
    }
  });
  
  return {
    cases: Array.from(cases),
    genders: Array.from(genders),
    hasPronouns
  };
};