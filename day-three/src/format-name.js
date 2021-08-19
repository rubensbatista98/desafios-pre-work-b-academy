const prepositions = ["de", "da", "do", "dos"];

export function formatName(name) {
  const formattedName = name
    .split(" ")
    .map((namePart) => {
      if (namePart === "") {
        return namePart;
      }

      const partInLowerCase = namePart.toLowerCase();

      if (prepositions.includes(partInLowerCase)) {
        return partInLowerCase;
      }

      const partFirstLetter = partInLowerCase[0];
      const partWithourFirstLetter = partInLowerCase.slice(1);

      return partFirstLetter.toUpperCase() + partWithourFirstLetter;
    })
    .join(" ");

  return formattedName;
}
