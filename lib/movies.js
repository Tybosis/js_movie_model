function Movie(title, year) {
  this.title = title;
  this.year = year;
};

Movie.prototype.rating = function() {
  if(this.year % 10 == 0) {
    return 10
  } else {
    return (this.year % 10)
  }
};

Movie.prototype.comparison = function(second_movie) {
  if(this.rating() > second_movie.rating()) {
    return this.title + " was better!"
  } else if (this.rating() < second_movie.rating()) {
    return second_movie.title + " was better!"
  } else {
    return "These movies were about the same..."
  }
};

Movie.prototype.toString = function() {
  var string = ""
  for (var property in this) {
    if (this.hasOwnProperty(property)) {
      string = string + this[property] + ", "
    };
  };
  return string.slice(0, -2);
}

module.exports = Movie;
