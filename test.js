const { sum } = require('./app.js');

test ('add 14 + 9 to equal to 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test ('1 dollar should be 127.9 yen', function(){
    const { fromDollarToYen } = require ('./app.js')
    const yen = fromDollarToYen(3.5)
    const expected =3.5*127.9;

}) 

test ('1 yen should be 0.8 pound', function(){
    const { fromYenToPound } = require ('./app.js')
    const pound = fromYenToPound(3.5)
    const expected = 3.5*0.8;
})