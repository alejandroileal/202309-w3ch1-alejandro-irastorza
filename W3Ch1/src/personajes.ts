import { Asesor } from './Asesor';
import { Luchador } from './Luchador';
import { King } from './rey';

export function characters() {
  const king = new King('Joffrey', 'Baratheon', 70, true, '👑', 34);

  const fighter = new Luchador('Jaime', 'Lannister', 25, true, '🗡', 'knife', 9);

  const adviser = new Asesor('Tyrion', 'Lannister', 54, true, '🎓', 9);

  const characters = [king, fighter, adviser];
  return characters;
}
