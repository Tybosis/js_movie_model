function Movie(title, year) {
  this.title = title;
  this.year = year;
  this.rating = rating;
  this.comparison = comparison;
};

var rating = function() {
  if(this.year % 10 == 0) {
    return 10
  } else {
    return (this.year % 10)
  }
};

var comparison = function(second_movie) {
  if(this.rating() > second_movie.rating()) {
    return this.title + " was better!"
  } else if (this.rating() < second_movie.rating()) {
    return second_movie.title + " was better!"
  } else {
    return "These movies were about the same..."
  }
};

module.exports = Movie;
