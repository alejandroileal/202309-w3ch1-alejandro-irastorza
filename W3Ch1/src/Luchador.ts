import { CharacterMaster } from './personaje';

export class Luchador extends CharacterMaster {
  dialogue = 'Primero pego, luego pregunto';
  charToAdvice = 'rey, luchador, asesor o escudero';

  constructor(
    name: string,
    family: string,
    age: number,
    lifeStatus: boolean,
    emoji: string,
    weapon: string,
    skillLevel: number
  ) {
    super(name, family, age, lifeStatus, emoji);
    this.weapon = weapon;
    this.skillLevel = skillLevel;
  }
}
