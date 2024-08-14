// 0 - Bajar repo, hacer hola mundo console.log
console.log('Hola Mundo')

// 2 - Funciones:
// add(firstOperator, secondOperator),
// subtract(firstOperator, secondOperator),
// divide(firstOperator, secondOperator),
// multiply(firstOperator, secondOperator)
function add(first,second){
    return first + second
}
function subtract(first,second){
    return first - second
}
function divide(first,second){
    return first / second
}
function multiply(first,second){
    return first * second
}

console.log("add", add(2,3))
console.log("subtract",subtract(2,3))
console.log("divide",divide(2,3))
console.log("multiply",multiply(2,3))


// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

function dress(temperature, isRaining){
    if (isRaining){
        console.log("llevar paraguas☂️")
    }
    if (temperature < 10){
        console.log("ir en auto🚗")
    }
    else if(temperature > 30){
        console.log("ir de short🩳")
    }
    else if(temperature == 30){
        console.log("usar lentes 🕶")
    }
}
dress(30, true)

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)
function calculate(operation, firstOperator, secondOperator){
    switch (operation) {
        case "add":
            return add(firstOperator,secondOperator)
            
        case "subtract":
            return subtract(firstOperator,secondOperator)
            
        case "divide":
            return divide(firstOperator,secondOperator)
            
        case "multiply":
            return multiply(firstOperator,secondOperator)

        default:
            break;
    }
}
console.log(calculate("multiply",3,4))
console.log(calculate("divide",3,4))
console.log(calculate("add",3,4))
console.log(calculate("subtract",3,4))


// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])
function eating(name, foods){
    let string = ""
    string += name
    foods.forEach(element => {
        string += " " + element
        
    });
    return string

}
console.log(eating("nombre", ['🍔','🍟','🍗',]))

// 6 - Funcion
// finalCountDown(count)
function finalCountDown(int){
    while (int > 0){
        console.log(int)
        int--
    }

}
finalCountDown(10)

// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S

function getGrade(score){
    if (0 <= score && score <= 40){
        return "D"
    }
    else if (41 <= score && score <= 60){
        return "R"
    }
    else if (61 <= score && score <= 74){
        return "B"
    }
    else if (75 <= score && score <= 84){
        return "BMB"
    }
    else if (85 <= score && score <= 96){
        return "MB"
    }
    else if (97 <= score && score <= 100){
        return "S"
    }
    else{
        return "Ingrese un numero valido"
    }

}
console.log(getGrade(69))


// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles

function fillCart(name, articlesCollection){
    let person = {name: '', cart: []}
    person.name = name
    articlesCollection.forEach(element => {
        person.cart.push(element)
        
    });
    return person

}
console.log(fillCart("nombre", [{article: '👟', amount: 1, price: 25}]))

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(array){
    let cont = 0
    array.forEach(element => {
        if (element == '🍌'){
            cont ++
        }
    });
    return cont
}
const banana = ['🥑','🍌','🥭', '🍌']
console.log(countBanana(banana))

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

function getTotal(inventory){
    let total = 0
    inventory.forEach(element => {
        total += (element.price * element.quantity)
        
    });
    return total
}
const inventory = [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]
console.log(getTotal(inventory))

