import './style.css';
import { Rey, renderInfo, renderOverlay } from './rey';
import { characters } from './personajes';

function main() {
  console.log('Loaded Main :)');

  let domCharacterListElement =
    document.querySelector<HTMLDivElement>('.characters-list');

  let domCharacterOverlay =
    document.querySelector<HTMLDivElement>('.list-unstyled');

  if (domCharacterListElement === null) return;
  if (domCharacterOverlay === null) return;

  console.log(characters());
}

main();
