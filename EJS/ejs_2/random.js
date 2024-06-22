function generateBandName() {
    // Define word lists for different parts of the band name
    const adjectives = ["Electric", "Screaming", "Cosmic", "Mellow", "Groovy", "Heavy", "Death", "Power"];
    const nouns = ["Giraffes", "Zebras", "Unicorns", "Robots", "Pandas", "Wizards", "Ninjas", "Pilots"];
    const suffixes = ["Explosion", "Attack", "Overdrive", "Club", "Union", "Collective", "Dreams", "Nightmares"];
  
    // Function to randomly select a word from a list
    function pickRandomWord(list) {
      return list[Math.floor(Math.random() * list.length)];
    }
  
    // Combine words with optional space between adjective and noun
    const useSpace = Math.random() < 0.5; // 50% chance of using a space
    const adjective = pickRandomWord(adjectives);
    const noun = pickRandomWord(nouns);
    const suffix = pickRandomWord(suffixes);
  
    const bandName = `${useSpace ? adjective + " " : adjective}${noun}${suffix}`;
  
    // Return the generated band name
    return bandName;
  }
  
  // Generate a band name and display it in the console
  const newBandName = generateBandName();
  console.log("Your new band name is:", newBandName);
  