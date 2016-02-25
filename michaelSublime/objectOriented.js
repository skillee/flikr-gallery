// EXCERCISE 1
var person = {
	name: "Michael",
	location: "LA",
	hobbies: ["running", "skipping", "laughing"],
	pet: {
		dog: true
	},
	party: function(){
		 console.log("ALL THE TIME!");
		 return "ALL THE TIME!";

	}
};


// var someFunc = person.party;
// person.party();

// var freestanding_fn = function(){
//   console.log(arguments, this);
// };

// freestanding_fn("These are the arguments...", "What is the calling context? -->");

// var obj = {
//   key1: 'value 1',
//   key2: 'value 2',
//   method: function(){
//     console.log("I'm being invoked in the context of...", this);
//   }
// };

// obj.method();

// person.work = function(){
//   console.log("Welcome to McDonald's, I'm " + this.name + ". May I take your order?");
//   console.log("Enjoy this beautiful day in " + this.location);
//   console.log("Would you like to hear a story about " + this.cat.name + " and his " + this.cat.hobbies[1]);
// };
// person.work();







// EXCERCISE 2

// person.work = function(){
//   console.log("I live in " + this.location + " and I like to party " + this.party());
// };

// // person.work();

// person.workout = function(){
//   console.log( this.hobbies[1]," ",this.location);
// };

// // person.workout();

// person.float_through_life_on_autopilot = function(){
//   this.work();
//   this.workout();
//   this.party();
// };

// person.float_through_life_on_autopilot();






// EXCERCISE 3
// var car = {
//   type: "Honda Civic",
//   position: 1,
//   speed: 120,
//   speedInc : function( increase ){
//     this.speed += increase;
//   },
//   move: function(){
//     var prev = this.position;
//     this.position = this.position + this.speed;
//     console.log(this.type + " is moving from " + prev + " to " + this.position);
//   }
// };

// console.log(car.move());
// console.log(car);
// console.log(car.move());
// console.log(car);

// car.speedInc( 100 );
// console.log(car.move());
// console.log(car);






// EXCERCISE 4

// var dog = {
//   name : "Simba",
//   location : "Houston",
//   party : person.party,
//   favFood : "Beef",
//   eat : function(){
//     this.hungry = false;
//     return this.favFood;
//   },
//   hungry : true,
//   go_to_park : function(){
//     this.hungry = true;
//     return this.location;
//   }
// };

// console.log(dog.eat());
// console.log(dog.hungry);





// var move_fn = function(){
//   var prev = this.position;
//   this.position = this.position + 1;
//   console.log(this.type + " is moving from " + prev + " to " + this.position);
// };

// var car = {
//   type: "Honda Civic",
//   position: 1,
//   move: move_fn
// };








// EXCERCISE 5
// var food = function(){
// 	this.hungry = false;
// 	return this.favFood;
// };

// var dogWalk = function(){
//     this.hungry = true;
//     return this.location;
// };

// var dog = {
//   name : "Simba",
//   location : "Houston",
//   party : person.party,
//   favFood : "Beef",
//   eat : food,
//   hungry : true,
//   go_to_park : dogWalk
// };

// console.log(dog.eat());









// EXCERCISE 6
// var dog2 = {
// 	foods: food,
// 	hungry: "All the time!",
// 	go_to_park: dogWalk,
// 	favFood: "Cheerios",
// 	location: "LA"
// };

// console.log(dog.eat());


// var move_fn = function(){
//   this.position++;
//   if(this.speed < 4){
//   	this.position = "last";
//   }
// };

// var car1 = {
//   type: "Honda Civic",
//   speed: 5,
//   position: 1,
//   move: move_fn
// };

// var car2 = {
//   type: "Toyota Corolla",
//   speed: 3,
//   position: 6,
//   move: move_fn
// };

// console.log(car2.move());
// console.log(car2);


// var meow = function(){
// 	return this.name + " meowed";
// };

// cat = {
// 	name: "Cat in the Hat",
// 	location: "Hat",
// 	Hobbies: "Singing",
// 	purr: meow
// };

// cat2 = {
// 	name: "Spawn of Satan",
// 	location: "Hell",
// 	Hobbies: "Murder",
// 	purr: meow
// };

// console.log(cat2.purr());






//DECORATOR PATTERN

//  var car1 = {
//    type: "Honda Civic",
//    speed: 5,
//    position: 1
//    //move: move_fn
//  };

//  var car2 = {
//    type: "Toyota Corolla",
//    speed: 3,
//    position: 6
//    //move: move_fn
//  };

// var test = 5;

// var changeFive = function(){
//   test--;
// };

// var reverse_adder = function( obj ){
//   obj.reverse = function(){
//     this.position = this.position - this.speed;
//   };
//   obj.reverse();
// };

// console.log(car2.position);
// reverse_adder( car2 );
// console.log(car2.position);
// reverse_adder( car2 );
// console.log(car2.position);








// EXCERCISE 7

var dog2 = {
	// foods: food,
	hungry: "All the time!",
	// go_to_park: dogWalk,
	favFood: "Cheerios",
	location: "LA"
};

var fetch_adder = function(obj){
	if(obj.fetch){
    console.log("inside if");
		obj.fetch++;
	} else {
    console.log("inside else");
		obj.fetch = 1;
	}
};
console.log(dog2.fetch);
fetch_adder(dog2);
console.log(dog2.fetch);
fetch_adder(dog2);
console.log(dog2.fetch);