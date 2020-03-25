const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur("Oviraptor", "carnivore", 30);
    dinosaur2 = new Dinosaur("Diplodocus", "herbivore", 50);
    dinosaur3 = new Dinosaur('T-Rex', 'carnivore', 100);
    dinosaurArray= [dinosaur1, dinosaur2, dinosaur3];
    park= new Park("Please don't sue us", 10, dinosaurArray);
  })

  it('should have a name', function() {
    const parkName= park.name;
    assert.strictEqual(parkName, "Please don't sue us");
  });

  it('should have a ticket price', function(){
    const ticketPrice= park.ticketPrice;
    assert.strictEqual(ticketPrice, 10);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurCollection, dinosaurArray);
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinosaur4 = new Dinosaur('Triceratops', 'herbivore', 70);
    park.addDinosaur(dinosaur4);
    dinosaurArray.push(dinosaur4);
    assert.deepStrictEqual(park.dinosaurCollection, dinosaurArray)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur(dinosaur2);
    dinosaurArrayRemoved= [dinosaur1, dinosaur3];
    assert.deepStrictEqual(park.dinosaurCollection, dinosaurArrayRemoved)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const mostPopularDinosaur = park.findPopularDinosaur();
    assert.strictEqual(mostPopularDinosaur, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const diplodocusDinosaurs= park.findDinosaursBySpecies("Diplodocus");
    assert.deepStrictEqual(diplodocusDinosaurs[0], dinosaur2);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const totalVisitors= park.calculateTotalVisitsPerDay();
    assert.strictEqual(totalVisitors, 180);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const totalVisitors= park.calculateTotalVisitsPerYear();
    assert.strictEqual(totalVisitors, 180*365);
  });

  it('should be able to calculate total revenue for one year', function(){
    const totalRevenue = park.caluclateTicketRevenuePerYear();
    const totalVisitors= park.calculateTotalVisitsPerYear();
    const totalRevnueExpected= totalVisitors*10;
    assert.strictEqual(totalRevenue, totalRevnueExpected);
  });

  it('should be able to remove all dinosaurs of a certain species', function() {
    const dinosaursRemoved= park.removeAllDinosaursOfSpecies('T-rex');
    dinosaurArray.splice(2,1);
    assert.deepStrictEqual(dinosaursRemoved, dinosaurArray);
  });

  it('should return a count of all counts of diets of dinosaurs', function(){
    const diets= park.getDinosaursDiets();
    const expectedDiets= {'carnivore':2, 'herbivore':1, 'omnivore':0}
    assert.deepStrictEqual(diets, expectedDiets);
  });

});
