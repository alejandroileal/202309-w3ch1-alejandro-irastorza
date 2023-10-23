export class Character {
  name: string;
  family: string;
  age: number;
  lifeStatus: boolean;

  constructor(name: string, family: string, age: number, lifeStatus: boolean) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.lifeStatus = lifeStatus;
  }
}

export function renderCharacters(
  characters = Array,
  selector = HTMLAllCollection
) {
  for (const char of characters) {
    selector.innerHTML += `<li class="character col">
        <div class="card character__card">
          <img src="./src/img/no-one.jpg" alt="Nombre y familia del personaje"
            class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${char.name} (${char.family})</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${char.age} años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: X</li>
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;
  }
}
