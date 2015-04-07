var expect = require('chai').expect;
var Movie = require('../lib/movies.js');

describe('Movie', function() {
  it('should have a title and a year', function() {
    var jaws = new Movie('Jaws', 1975);

    expect(jaws).to.have.property('title').that.equals('Jaws');
    expect(jaws).to.have.property('year').that.equals(1975);
  }),

  it('should have a method that calculates a rating', function() {
    var memento = new Movie('Memento', 2000);

    memento.rating();
    expect(memento).to.have.property('rating');
    expect(memento.rating()).to.equal(10);
  }),

  it('should have a method that can compare ratings', function() {
    var rosemary = new Movie("Rosemary's Baby", 1968);
    var nightmare = new Movie("Nightmare on Elm Street", 1984);

    expect(rosemary.comparison(nightmare)).to.equal("Rosemary's Baby was better!");
  }),

  it('should have a to string method', function() {
    var avatar = new Movie("Avatar", 2009)
    expect(avatar.toString()).to.equal("Avatar, 2009");
  });
});
