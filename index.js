const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://ananthumv8:ananthumv8@cluster1.eguuxrs.mongodb.net/practiceDB?retryWrites=true&w=majority');
  
}
// const kittySchema = new mongoose.Schema({ 
//     name: String
//   });
// const Kitten = mongoose.model('Kitten', kittySchema);

// const silence = new Kitten({ name: 'Silence' });
//    console.log(silence.name)
//  kittySchema.methods.speak = function speak() {
//   const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
// };
  
// const Kitten = mongoose.model('Kitten', kittySchema);
// const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak();
//  fluffy.save();
// fluffy.speak();
// const kittens =  Kitten.find();
// console.log(kittens);
