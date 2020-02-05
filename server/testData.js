const Product = require('./models/product.model');

const loadTestData = async () => {

    const data = [
        {
            id: '1',
            name: 'Shoes 1',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/man1.jpeg'},
            price: 35,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '2',
            name: 'Dress 2',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/woman2.jpeg'},
            price: 25,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '3',
            name: 'Shirt 3',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/man3.jpeg'},
            price: 155,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '4',
            name: 'Gloves 4',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/woman4.jpeg'},
            price: 18,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '5',
            name: 'Belt 5',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/man5.jpeg'},
            price: 98,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '6',
            name: 'Jacket 6',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/woman6.jpeg'},
            price: 67,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '7',
            name: 'Jacket 7',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/man7.jpeg'},
            price: 42,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '8',
            name: 'Skirt 8',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/woman8.jpeg'},
            price: 29,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '9',
            name: 'Trousers 9',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/man9.jpeg'},
            price: 77,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '10',
            name: 'Jacket 10',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/woman10.jpeg'},
            price: 34,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '11',
            name: 'Jacket 11',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/woman11.jpg'},
            price: 33,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '12',
            name: 'T shirt 12',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/man12.jpg'},
            price: 27,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '13',
            name: 'T shirt 13',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/woman13.jpeg'},
            price: 81,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '14',
            name: 'Blouse 14',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/woman14.jpeg'},
            price: 26,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '15',
            name: 'Sunglasses 15',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/man15.jpeg'},
            price: 18,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '16',
            name: 'Sunglasses 16',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/woman16.jpeg'},
            price: 7,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '17',
            name: 'Hat 17',
            brand: 'Mountain market',
            model: 'woman',
            picture: { src: '../../../picture/woman17.jpeg'},
            price: 14,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            id: '18',
            name: 'Hat 18',
            brand: 'Mountain market',
            model: 'man',
            picture: { src: '../../../picture/man18.jpeg'},
            price: 59,
            quantity: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante nunc, elementum eu justo id, accumsan mattis risus. Etiam bibendum risus eu enim ullamcorper, ac dapibus velit pulvinar. Phasellus ultrices ut odio aliquet elementum. Nunc at sem ac risus porta pharetra non id risus. Suspendisse et finibus urna, et eleifend purus. Sed rutrum purus non nisi venenatis blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        }
    ]

try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log('No products. Loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData;