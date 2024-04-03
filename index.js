import alfy from 'alfy'

const smolBigLetters = { 'A': 'ᵃ', 'B': 'ᵇ', 'C': 'ᶜ', 'D': 'ᵈ', 'E': 'ᵉ', 'F': 'ᶠ', 'G': 'ᵍ', 'H': 'ʰ', 'I': 'ⁱ', 'J': 'ʲ', 'K': 'ᵏ', 'L': 'ˡ', 'M': 'ᵐ', 'N': 'ⁿ', 'O': 'ᵒ', 'P': 'ᵖ', 'Q': 'ᑫ', 'R': 'ʳ', 'S': 'ˢ', 'T': 'ᵗ', 'U': 'ᵘ', 'V': 'ᵛ', 'W': 'ʷ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ'}
const smolLetters = { 'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ', 'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᑫ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ', 'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ' }
const smolNumbers = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }
const smolSpeshulChars = { '(': '⁽', ')': '⁾', '+': '⁺', '-': '⁻', '=': '⁼'}
const newLine = { '\\': '\n'}

const smolize = (str) => str
  .split('')
  .map(char => smolBigLetters[char] || char)
  .map(char => smolLetters[char] || char)
  .map(char => smolNumbers[char] || char)
  .map(char => smolSpeshulChars[char] || char)
  .map(char => newLine[char] || char)
  .join('')

alfy.output([{
  title: 'Smolerize',
  subtitle: smolize(alfy.input),
  arg: smolize(alfy.input)
}])