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

// Helper function to get all cases and genders from a sentence
export const getSentenceMetadata = (sentence) => {
  const cases = new Set();
  const genders = new Set();
  
  sentence.german.forEach(part => {
    if (part.case) {
      cases.add(part.case);
      const gender = part.gender || detectGender(part.text);
      if (gender) {
        genders.add(gender);
      }
    }
  });
  
  return {
    cases: Array.from(cases),
    genders: Array.from(genders)
  };
};