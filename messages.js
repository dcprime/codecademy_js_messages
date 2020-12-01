const fortune = {
    youWill: ['encounter a bear', 'kiss a mysterious stranger', 'smack your head', 'regret your life choices', 'discover a new shade of brown', 'clutch your butt cheeks', 'find a new use for meatballs', 'shout YEEEAAAHHH BOYYYY!!!', 'discharge both nostrils', 'narrowly avoid death'],

    after: ['opening a dimensional portal', 'eating an overripe banana', 'pooping', 'making a second piece of toast', 'smelling your own armpits', 'scratching a mosquito bite', 'calculating PI to 12 digits', 'picking your nose', 'drinking from a puddle', 'staring into the face of death'],

    location: ['the Death Star', 'the United States of America', 'a damp cave', 'a parallel dimension', 'the second worst outhouse you\'ve ever seen', 'a truly scary Costco bathroom', 'the grocery store checkout line', 'a field of sunflowers', 'your bedroom', 'a kitchen that smells like fart'],

    createMessage(){
        const rand1 = Math.floor(Math.random() * (this.youWill.length));
        const rand2 = Math.floor(Math.random() * (this.after.length));
        const rand3 = Math.floor(Math.random() * (this.location.length));

        return `You will ${this.youWill[rand1]} after ${this.after[rand2]} in ${this.location[rand3]}.`
    }
};

console.log('This is your fortune:');
console.log(fortune.createMessage());