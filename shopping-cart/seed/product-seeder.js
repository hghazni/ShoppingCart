var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
        new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic',
        description: 'Awesome Game!!!!',
        price: 20.99
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic 2',
        description: 'Awesome Game BABEH!!!!',
        price: 3.99
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic 3',
        description: 'Awesome Game HEY HEY!!!!',
        price: 10.99
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic 4',
        description: 'Awesome Game WUTWUT!!!!',
        price: 27.99
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic 5',
        description: 'Awesome Game JANJKDNA!!!!',
        price: 5.99
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic 6',
        description: 'Awesome Game YO YO!!!!',
        price: 1.99
    })

];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length ) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}