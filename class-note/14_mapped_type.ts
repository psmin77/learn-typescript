type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroesAge =  { [K in Heroes]: number };
const ages: HeroesAge = {
  Hulk: 33,
  Capt: 100,
  Thor: 1000,
}