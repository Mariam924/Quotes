
var Quote= document.getElementById('newQuote');
var author= document.getElementById('author');
var counter= document.getElementById('counter');
var clicks = -1;

function displayQuote(){
    const Quotes = [
    'You only live once, but if you do it right, once is enough.', 
    'A friend is someone who knows all about you and still loves you.',
    'Then what’s the sweet, goopy stuff old people eat for dessert?" "Pudding.',
    'The problem with having problems is that ‘someone’ always has it worse.',
    'They didn’t teach poker skills in law school, but they damn well should.',
    'Always forgive your enemies; nothing annoys them so much.'];
    const Authors=[
        'Mae West',
        'Elbert Hubbard',
        'Tammie Painter',
        'Tiffany Madison',
        'Amy Pennza',
        'Oscar Wilde',
    ];
    const counters=[
        '728',
        '321',
        '415',
        '222',
        '185',
        '612',
    ]
    clicks ++;
    if(clicks>= Quotes.length){
        clicks = 0;
    }
    Quote.innerHTML = Quotes[clicks];
    author.innerHTML = Authors[clicks];
    counter.innerHTML = counters[clicks];
    
}