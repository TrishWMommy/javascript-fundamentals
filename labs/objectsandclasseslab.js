/* Object Initializer version */
const cats = {
    caring:
    'affectionate',
    playful:
    'adventurous'
};


console.log(cats.catsplayful);

cats['caring'] == 'purrs';
console.log(cats['caring']);

cats['playful'] = 'twists';
cats['adventurous'] = 'hunts';



/* Class decleration */
class guitar {
    #tone;
    #volume;
    presence;
    balance;
    constructor(tone, volume) {
        this.tone = tone;
        this.volume = volume;
} // end constructor


/* getters */
get tone() { return this.#tone; }
get volume() { return this.#volume; }

/* setters */
set tone(tone) {
    this.#tone = tone;
} // end set tone

set volume(volume) {
    this.#volume = volume;
} // end set volume

/* Method */
calculatedArea() {
    return this.#tone * this.#volume;
} // end method


} // end class