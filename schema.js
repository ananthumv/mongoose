const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://ananthumv8:ananthumv8@cluster1.eguuxrs.mongodb.net/practiceDB?retryWrites=true&w=majority');
  
}

const { Schema } = mongoose;



// const blogSchema = new Schema({
//   title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });
// const Blog = mongoose.model('Blog', blogSchema);
// const bloger = new Blog({title: "bloger", author : "jose"})
// bloger.save()
// const Blogs =  Blog.find()
// console.log(Blogs)




// const animalSchema = new Schema({ name: String, type: String },
//     {
//       methods: {
//         findSimilarTypes(cb) {
//           return mongoose.model('Animal').find({ type: this.type }, cb);
//         }
//       }
//     });
    
    // animalSchema.methods.findSimilarTypes = function(cb) {
    //   return mongoose.model('Animal').find({ type: this.type }, cb);
    // };

// const Animal = mongoose.model('Animal', animalSchema);
// const dog = new Animal({ type: 'dog' });
// const pug = new Animal({ name: 'pug',type: 'dog' });
// pug.save()
// dog.findSimilarTypes((err, dogs) => {
//     console.log(dogs); 
//   });




// const personSchema = new Schema({
//     name: {
//       first: String,
//       last: String
//     }
//   });
  
//   const Person = mongoose.model('Person', personSchema);

//   const axl = new Person({
//     name: { first: 'Axl', last: 'Rose' }
//   });

//   console.log(axl.name.first + ' ' + axl.name.last);





// const personSchema = new Schema({
//     name: {
//       first: String,
//       last: String
//     }
//  },
//  {
//     virtuals: {
//       fullName: { 
//         get() {
//           return this.name.first + ' ' + this.name.last;
//         }
//       }
//     }
//   }
// );
//   const Person = mongoose.model('Person', personSchema);

//   const axl = new Person({
//     name: { first: 'Axl', last: 'Rose' }
//   });

// personSchema.virtual('fullName').get(function() {
//     return this.name.first + ' ' + this.name.last;
//   });
//   console.log(axl.fullName);



const schema = new Schema({ name: String });

console.log(schema.path('name').instance)