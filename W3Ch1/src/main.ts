import './style.css';
import { Character, renderCharacters } from './characters';

function main() {
  console.log('Loaded Main :)');

  let domCharacterListElement =
    document.querySelector<HTMLDivElement>('.characters-list');

  if (domCharacterListElement === null) return;

  const characters = [
    new Character('Joffrey Baratheon', 'rey', 50, true),
    new Character('Jaime Lannister', 'luchador', 35, true),
    new Character('Daenerys Targaryen', 'luchadora', 29, true),
    new Character('Tyrion Lannister', 'asesor de Daenerys', 43, true),
    new Character('Bronn', 'escudero de Jaime', 43, true),
  ];

  renderCharacters(characters, domCharacterListElement);
}

main();
