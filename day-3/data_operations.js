
// Assignment - 1

let users = [
    {'name': 'Arun', age: 21, 'gender': 'male', 'location': 'Chennai'},
    {'name': 'Dexter', age: 12, 'gender': 'male', 'location': 'Dearborn'},
    {'name': 'Haris', age: 19, 'gender': 'male', 'location': 'Michigan'},
    {'name': 'Kelly', age: 20, 'gender': 'male', 'location': 'Miami'},
    {'name': 'Erica', age: 25, 'gender': 'female', 'location': 'Texas'},
    {'name': 'Jacob', age: 13, 'gender': 'male', 'location': 'New York'},
    {'name': 'Lavanya', age: 32, 'gender': 'female', 'location': 'Bangalore'},
    {'name': 'Divya', age: 18, 'gender': 'female', 'location': 'Germany'},
    {'name': 'Preethi', age: 29, 'gender': 'female', 'location': 'Chennai'},
    {'name': 'Evanjilin', age: 24, 'gender': 'female', 'location': 'Bangalore'},
    {'name': 'Warren', age: 13, 'gender': 'male', 'location': 'France'},
    {'name': 'Ralph', age: 9, 'gender': 'male', 'location': 'British'},
    {'name': 'Zak', age: 39, 'gender': 'male', 'location': 'Australia'},
    {'name': 'Bilal', age: 42, 'gender': 'male', 'location': 'Dubai'},
    {'name': 'Aminah', age: 17, 'gender': 'female', 'location': 'Switerland'}
]

console.log(users.length)

function isAdult(user) {
    return user.age >= 18;
}

mapUsers = users.map(user=>{
    return isAdult(user);
})

console.log(mapUsers);

let adultUsers = users.filter(user =>{
    return user.age >= 18;
})

console.log(adultUsers);

function getFullName(user) {
    return user.name + " " + user.location
}

fullName = users.map(user=>{
    return getFullName(user);
})

console.log(fullName);

// Part 2: Chaining User Data Operations
function filterByGender(user, filter_gender) {
    return user.gender == filter_gender;
}

let filteredData = users.map(user => {
    return filterByGender(user, "male");
})

console.log(filteredData);

let femaleUsers = users.filter(user => {
    return filterByGender(user, "female");
}).map((user) => {
    return getFullName(user);
});

console.log(femaleUsers);

// Part 3: Movie Data Array Manipulation
movies = [
    {"name": "The Shawshank Redemption", "year": 1994, "genre": "Drama", "rating": 4.2},
    {"name": "The Godfather", "year": 1972, "genre": "Drama", "rating": 3.4},
    {"name": "The Dark Knight", "year": 2008, "genre": "Action", "rating": 4.5},
    {"name": "Schinidler's List", "year": 1993, "genre": "Drama", "rating": 4.1},
    {"name": "The Godfather Part II", "year": 1974, "genre": "Drama", "rating": 3.1},
    {"name": "The Lord of Rings", "year": 2003, "genre": "Drama", "rating": 4.1},
    {"name": "12 Angry Men", "year": 1957, "genre": "Action", "rating": 4.2},
    {"name": "Pulp Fiction", "year": 1994, "genre": "Comedy", "rating": 3.4},
    {"name": "Inception", "year": 2010, "genre": "Drama", "rating": 4.2},
    {"name": "Fight Club", "year": 1999, "genre": "Action", "rating": 4.6},
    {"name": "Forrest Grump", "year": 1994, "genre": "Comedy", "rating": 4.4},
]

function filterByGenre(movie, genre) {
    return movie.genre == genre;
}

let actionMovies = movies.map((movie) => {
    if (filterByGenre(movie=movie, genre="Action")) {
        return movie;
    }
    else {
        return {};
    }
});


// let actionMovies =  movies.filter(movie => {
//     return filterByGender(movie, "Action");
// }).map((movie) => {
//     return movie.name;
// })

console.log(actionMovies);

// Part 5: Integration and Output
