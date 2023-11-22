const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;

}

// Add methods to prototype
//1
ScranAdvisor.prototype.numberOfRestaurants = function(){
     return this.restaurants.length;
}
//2

ScranAdvisor.prototype.findRestaurantsByName = function(name){
    return this.restaurants.find(restaurant =>restaurant.name === name)
    //The arrow function is a conscise way of writing a callback function. It takes the parameter 'restaurant' and checks the if the `name' property 
    //of that 'restaurant' is equal to the provided 'name' variable.If the condition is true for any element in that array the element will be returned by the 'find'method
}

ScranAdvisor.prototype.findNameOfAllRestaurants = function(){
    return this.restaurants.map(restaurant => restaurant.name);
}

ScranAdvisor.prototype.findAllRestaurantsInGlasglow = function(location){
    return this.restaurants.filter(restaurant=> restaurant.location.town === location)
}


// find is just a for looop


module.exports = ScranAdvisor;