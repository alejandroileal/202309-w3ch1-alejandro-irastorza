import { CharacterMaster } from './personaje';

export class Asesor extends CharacterMaster {
  dialogue = 'No sé por qué, pero creo que voy a morir pronto';

  constructor(
    name: string,
    family: string,
    age: number,
    lifeStatus: boolean,
    emoji: string,
    skillLevel: number
  ) {
    super(name, family, age, lifeStatus, emoji);
    this.skillLevel = skillLevel;
  }
}
