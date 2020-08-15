/*
  Object are collection of properties (key and Value )
 {} = object literals 
 Objects does not encode order = arrays does 
 When we create an object the keys are automatically converted to strings {expect symbols }
 Accessing Object can be (objectName.key or ObjectName['passin key'])

 One property in Object does not need a comman 
 */

let personObj = {
  name: 'Person',
  age: 30,
  profession: 'Student',
  location: 'Accra',
  Skill: 'Software Engineer',
}

let comments = {
  username: 'sillyGoesHere',
  downVoes: 19,
  upVotes: 2000,
  netScoe: 120,
  commentText: 'Tastes like chicken soup',
  tages: ['#haspupy', '#fuunycode', '#constant'],
  isGilded: false,
  contry: 'Ghana',
}

// Accessing approach (Objectname.key)
let registrationForm = {
  firstName: 'James',
  lastName: 'Alex',
  age: 20,
  password: {
    password: 'cominghome123',
    confirmpassword: 'cominghome123',
  },
  useremail: 'hellouser@gmail.com',
  userCounty: 'Ghana',
  nationality: 'Ghanian',
  phoneNumber: '2033002332',
  levels: [100, 200, 300, 400],
}

registrationForm.firstName
registrationForm.lastName
registrationForm.age

// Accessing approach (Objectname['parseIn'])
let registrationForm2 = {
  100: 'Ghana',
  90: 'China',
  80: 'India',
  70: 'Korea',
  60: 'South Ocean',
  50: 'Cananda',
}

registrationForm2['100']
registrationForm2['50']
registrationForm2['70']

// Updating Object
registrationForm.firstName = 'Akooses'
registrationForm.lastName = 'Centries'
registrationForm.age = 30

const userReviews = {};
userReviews['startRating'] = 4.5;
userReviews['totalCounts'] = 100;
userReviews['product'] = 'Lenovo Yoga';
userReviews['structure'] = 'objects';


// Array + Objects 
const shoppingCart = [
    {
        product : 'Jenga Classic',
        price : 6.88,
        quantity : 1 ,
    },
    {
        product : 'Fire Stick',
        price : 29.99,
        quantity : 3 , 
    },
    {
        product : 'Candle Boal',
        price : 20.22,
        quantity : 19
    }
]

// Accessing approach 
shoppingCart[0];
shoppingCart[1];


/* Looping over Objects 
    Object.keys()
    Object.values() and 
    Object.entries()
*/


/*
  For of will iterate over the actual values in the array 
  In a string (each character) in an array each (iterable ) 
*/

  const moviesReview = {
      Arrival : 9.5,
      Alien  : 9,
      Amelie : 8,
      'In Burges' : 9,
      Amadeus : 10 ,
     'Kill Bill' : 8,
     'Little Miss Sunshine' : 8.5
  }

  for (let movie of Object.keys(moviesReview)){
      console.log(movie);
  }

  let rating = Object.values(moviesReview);
  total = 0;
  for(let r of rating){
      total = r + total;
  } 

  let averageRa = total / rating.length;
  console.log(averageRa);

  for(let movie1 of Object.values(moviesReview)){
      console.log(movie1);
  }


  // Loop over the keys 

/*
  For in will iterate over the actual key in the array 
*/
for (let key in registrationForm) {
    console.log(`Obj ${key} : Key :${registrationForm[key]}`)
  }
  
  for (let key in personObj) {
    console.log(`${key} : ${personObj[key]}`)
  }
