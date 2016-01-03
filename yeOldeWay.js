var greatOldOnes = [
  { id: 1, name: 'Cthulhu', rating: 5, description: 'A mix between a giant human, an octopus, and a dragon. He is usually depicted as being over hundreds of meters tall, with webbed human-looking arms, legs, and a pair of rudimentary wings on his back.' }
, { id: 2, rating: 2, name: 'Byatis', description: 'Appears as a gigantic multicolored toad with one eye, a proboscis, crab-like claws, and tentacles below the mouth.' }
, { id: 3, name: 'Dythalla', rating: 1, description: 'A gigantic saurian creature similar to Bokrug, but terrestrial, and endowed with a mane of tentacles.' }
, { id: 4, name: 'Zalgo', rating: 5, description: 'Released when you are not consistent with asynchronous APIs.  Also Zalgo is a meme where a person takes a popular picture/comic and corrupts it, with scary results.' }
, { id: 5, name: 'PHP', rating: 0, description: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.' }      
]

var names = []
for (var i=0; i < greatOldOnes.length; ++i) {
  names.push(greatOldOnes[i].name)
}

console.log(names)
