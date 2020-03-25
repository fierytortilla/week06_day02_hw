const Park = function (name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
}
  
// Add a dinosaur to its collection of dinosaurs
// - Remove a dinosaur from its collection of dinosaurs
// - Find the dinosaur that attracts the most visitors
// - Find all dinosaurs of a particular species
// - Calculate the total number of visitors per day
// - Calculate the total number of visitors per year
// - Calculate the total revenue from ticket sales for one year

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
    const indexOfDinosaur= this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(indexOfDinosaur, 1);
}

Park.prototype.findPopularDinosaur = function(){
    const arrayVisits= this.dinosaurCollection.sort(function (a, b) {
        return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
    })
    return arrayVisits[0];
}

Park.prototype.findDinosaursBySpecies = function(speciesName){
    const dinosaursOfSpecies= [];
    for(dinosaur of this.dinosaurCollection){
        if(dinosaur.species==speciesName){
            dinosaursOfSpecies.push(dinosaur);
        }
    }
    return dinosaursOfSpecies;
}

Park.prototype.calculateTotalVisitsPerDay = function(){
    totalVisitsPerDay=0;
    for(dinosaur of this.dinosaurCollection){
        totalVisitsPerDay+=dinosaur.guestsAttractedPerDay;
    }
    return totalVisitsPerDay;
}

Park.prototype.calculateTotalVisitsPerYear = function(){
    totalVisitsPerDay=0;
    for(dinosaur of this.dinosaurCollection){
        totalVisitsPerDay+=dinosaur.guestsAttractedPerDay;
    }
    return totalVisitsPerDay*365;
}

Park.prototype.caluclateTicketRevenuePerYear= function(){
    totalVisitsPerDay=0;
    for(dinosaur of this.dinosaurCollection){
        totalVisitsPerDay+=dinosaur.guestsAttractedPerDay;
    }
    return totalVisitsPerDay*this.ticketPrice*365;
}

// A park must be able to:

// - Remove all dinosaurs of a particular species
// - Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type  
// Example: `{ 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }`

Park.prototype.removeAllDinosaursOfSpecies = function(speciesName){
    for(var i=0; i< this.dinosaurCollection;i++){
        if(this.dinosaurCollection[i].species===speciesName){
            this.dinosaurCollection.splice(i, i+1);
        }
    }
    return this.dinosaurCollection;
}

Park.prototype.getDinosaursDiets = function(){
    diets= {'carnivore':0, 'herbivore':0, 'omnivore':0}
    for(dinosaur of this.dinosaurCollection){
        if(dinosaur.diet==='carnivore'){
            diets['carnivore']+=1;
        } else if(dinosaur.diet==='herbivore'){
            diets['herbivore']+=1;
        } else {
            diets['omnivore']+=1;
        }
    }
    return diets;
}

module.exports = Park;
