const input = process.argv[2];

function generatePermutations(input) {
  if (input.length > 2) {
    const lastCharacter = input.slice(-1);
    const permutationsWithoutLastCharacter = generatePermutations(
      input.slice(0, input.length - 1)
    );
    const permutations = [];
    permutationsWithoutLastCharacter.forEach((value) => {
      for (let i = 0; i <= value.length; i++) {
        permutations.push(
          value.slice(0, i) + lastCharacter + value.slice(i, value.length)
        );
      }
    });
    return permutations;
  } else {
    return [
      `${input.charAt(0)}${input.charAt(1)}`,
      `${input.charAt(1)}${input.charAt(0)}`,
    ];
  }
}

console.log(generatePermutations(input));
