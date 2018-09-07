function rodaMaico() {
    let result;



    let isInteger = 1;
    let isFloat = 1.0;
    let isString = "oasidhosahd";
    let isChar = "A";
    let isBoolean = false; //false
    let isObject;


    function getCarModel(car) {
        return car.model;
    }

    function startCar(car) {
        if (car.ligado == false) {
            car.ligado = true;
            console.log("O Carro Ligou");
        } else {
            console.log("O Carro ja esta ligado");
        }
    }
    function turnOffCar(car) {
        if (car.ligado == true) {
            car.ligado = false;
            console.log("O Carro Desligou");
        } else {
            console.log("O carro esta deligado, seu imbecil!"
            )
        }

    }

    let array1 = ["1","2","3"];
    let array2 = ["4","5","6"];
    let array3 = ["7","8","9"];

    1 - 3 = 7;
    2 - 3 = 8;

    function Matrix(col, row, ...arr) {
        return 7;
    }

    array.forEach(element => {
        element++
    });


    matrix(1,3, array1,array2,array3)


    for (let index1 = 0; index1 < array.length; index1++) {
        for (let index2 = 0; index2 < array.length; index2++) {
            
        }

    }



    let carro2 = {
        driver: "",
        model: "Cherry",
        cor: "roxo",
        ligado: false,
        velocidadeMaxima: 18,
        capacidadeGasolina: 1.5,
    };

    let driverPaulo = {
        car: "",
        statusCar: false
    };
    let driverMaico = {
        car: "",
        statusCar: false
    };

    console.log("========================================");

    let carro1 = {
        driver: "",
        model: "BMW",
        cor: "Vermelha",
        ligado: false,
        velocidadeAtual: 0,
        velocidadeMaxima: 100,
        capacidadeGasolina: 10.5,
    };

    function acelera12(car) {
        let aumentoVelocidade = 33;
        let diminuoCombustivel = 12;

        if (car.ligado == true) {
            if (car.velocidadeAtual <= car.velocidadeMaxima) {
                car.velocidadeAtual = car.velocidadeAtual + aumentoVelocidade;
                car.capacidadeGasolina -= aumentoConsumoCombustivel;
                if (car.velocidadeAtual >= car.velocidadeMaxima) {
                    car.velocidadeAtual = car.velocidadeMaxima;
                    console.log(car.velocidadeAtual)
                }  else { console.log("Velocidade Maxima Atingida") }
            }

        } else { console.log("O carro esta desligado.") }
        console.log(car.velocidadeAtual)
    }

    function acelera1(car) {
        if (car.ligado == false) {
            return;
        }

        
        if (car.velocidadeAtual >= car.velocidadeMaxima) {
            return;
        }

        car.velocidadeAtual++;

        console.log(car.velocidadeAtual)
    }


    acelera1(carro1);
    startCar(carro1);
    acelera1(carro1);
    console.log(carro1.velocidadeAtual)

    for (let index = 0; index < 105; index = index + 1) {
        acelera1(carro1);
        
    }
 
    console.log(carro1.velocidadeAtual)















    return result;
}





console.log(rodaMaico())
