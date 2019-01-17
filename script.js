var food = ['--Select--','Sushi', 'Hamburger', 'Jasper', 'Leaves', "Luke's Toenails",
    'Honey', 'Small Children', 'Porterhouse Steak', 'Snails'];

$(document).ready(function() {
    var tiger = new Tiger('initial');
    var bear = new Bear('initial');
    var giraffe = new Giraffe('initial');
    var unicorn = new Unicorn('initial');
    var bee = new Bee('initial');
    $('#foodChoice').hide();
    $('#removeAnimal').hide();
    $('#feed').hide();
    $('h3').hide();
    //manage this
    allAnimals = [[tiger, 'initial'], [bear, 'initial'], [giraffe, 'initial'], [unicorn, 'initial'],[bee, 'initial']];
    $('#addAnimal').click(function () {
        var name = $('#name').val();
        var animal = $('#animalChoice').val();
        addAnimal(animal,name);
    });
    $('#foodChoice').change(function () {
        var typeOfFood = $(this).val();
        for(var i=5; i<allAnimals.length; i++){
            allAnimals[i][0].eat(food[typeOfFood]);
        }
    });
});

//creates new animals
function addAnimal(animal,name) {
    var newAnimal;
    var animal = parseInt(animal);
    switch(animal) {
        case 0:
            newAnimal = new Tiger(name);
            break;
        case 1:
            newAnimal = new Bear(name);
            break;
        case 2:
            newAnimal = new Giraffe(name);
            break;
        case 3:
            newAnimal = new Unicorn(name);
            break;
        case 4:
            newAnimal = new Bee(name);
    }
    $('#foodChoice').show();
    $('#removeAnimal').show();
    $('h3').show();
    $('h3').css('text-align','center');
    $('#feed').show();
    $('#feed').css("border","solid black 3px");
    $('#feed').css("margin","100px");
    $('#feed').css('text-align','center');
    $('#animals').empty();
    allAnimals.push([newAnimal, name]);
    listAnimals(name);
    $('#feed').append('<div>You have added ' + name + ' the ' + newAnimal.type + ' to your Zoo</div>');
}

//need this??
function listAnimals(name) {
    var numberOfAnimals = allAnimals.length;
    for(var i=5; i<numberOfAnimals; i++){
        console.log(allAnimals);
        $('#animals').append('<div id="' + i + '" class="differentAnimals">This is ' + allAnimals[i][1] + ' your ' + allAnimals[i][0].type + '</div>');
    }
    $('.differentAnimals').click(function () {
        $(this).remove();
        var number = $(this).attr('id');
        var deletedAnimal = allAnimals[number][0];
        $('#feed').append('<div>You have removed ' + name + ' the ' + deletedAnimal.type + ' from your Zoo</div>');
        allAnimals.splice(number,1);
    });
    $('.differentAnimals').css('border-style','solid');
    $('.differentAnimals').css('border-color','red');
    $('.differentAnimals').css('margin','5px');
}

//classes
var numberOfAnimals = 0;
class Animal {

    constructor(name) {
        this.name = name;
        numberOfAnimals++;
   }
   static getNumberOfAnimals(){
        return numberOfAnimals;
   }
    sleep() {
        $('#feed').append('<div>' + this.name +' sleeps for 8 hours</div>');
    }
    eat(food) {
        if(food == this.favoriteFood){
            $('#feed').append('<div> YUM!!' + this.name + 'wants more ' + food + '</div>');
        }else{
            this.sleep();
        }
    }

}
class Tiger extends Animal {

    constructor(name) {
        super(name);
        this.favoriteFood = 'Porterhouse Steak';
        this.name = name;
        this.type = "Tiger";
    }
}


class Bear extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        this.favoriteFood = 'Small Children';
        this.type = 'Bear';
    }
    sleep() {
        $('#feed').append('<div>' + this.name + ' hibernates for 4 months</div>');
    }
}

class Unicorn extends Animal{

    constructor(name){
        super(name);
        this.name = name;
        this.favoriteFood = 'Sushi';
        this.type = "Unicorn";
    }
    sleep() {
        $('#feed').append('<div>' + this.name +' sleeps in a cloud</div>');
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name);
        this.name = name;
        this.favoriteFood = 'Leaves';
        this.type = "Giraffe";
    }
    eat(food){
        if(food == this.favoriteFood){
            super.eat(food)
        }else{
            $('#feed').append('<div>YUCK!!! ' + this.name + ' will not eat ' + food + '</div>');
        }
    }
}

class Bee extends Animal{
    constructor (name){
        super(name);
        this.name = name;
        this.favoriteFood = 'Snails';
        this.type = "Bee";
    }
    sleep(){
        $('#feed').html('<div>' + this.name +' never sleeps</div>');
    }
    eat(food){
        if(food == this.favoriteFood){
            super.eat(food)
        }else{
            $('#feed').append('<div>YUCK!!! ' + this.name + ' will not eat ' + food + '</div>');
        }
    }
}