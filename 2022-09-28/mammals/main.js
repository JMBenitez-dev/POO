"use strict";
exports.__esModule = true;
var carnivoreClass_1 = require("./files.js/carnivoreClass");
var herbivoreClass_1 = require("./files.js/herbivoreClass");
var omnivoreClass_1 = require("./files.js/omnivoreClass");
var animal1 = new carnivoreClass_1.Carnivore('Leon', 25, 'Carnivoro', 'Terrestre', 190, true);
var animal2 = new carnivoreClass_1.Carnivore('Foca', 20, 'Carnivoro', 'Acuatico', 85, false);
var animal3 = new herbivoreClass_1.Hervibore('Caballo', 10, 'Herviboro', 'Terrestre', 150, true);
var animal4 = new herbivoreClass_1.Hervibore('Elefante Africano', 60, 'Herviboro', 'Terrestre', 5000, false);
var animal5 = new omnivoreClass_1.Omnivore('Oso', 15, 'Omnivoro', 'Terreste', 400, true);
var animal6 = new omnivoreClass_1.Omnivore('Perro', 5, 'Omnivoro', 'Terrestre', 7, true);
console.log(animal1.getAge());
