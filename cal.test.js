
 class Calculator {
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
    divide(a, b) {
      return a / b;
    }
  }
  
  


let cal=new Calculator;

describe('cal test',()=>{
test('adding 2 +4 should return 6',()=>{

    //arrange and act
    let result=cal.add(2,4);
//assert
    expect(result).toBe(6);
})

test('subtracting 8-4 should return 4',()=>{
    
        //arrange and act
        let result=cal.subtract(8,4);
        //assert
        expect(result).toBe(4);
    })

    test('multiplying 2*4 should return 8',()=>{
        //arrange and act
        let result=cal.multiply(2,4);
        //assert
        expect(result).toBe(8);
    }
    )
    test('dividing 8/4 should return 2',()=>{   
        //arrange and act
        let result=cal.divide(8,4);
        //assert
        expect(result).toBe(2);
    }
    )
})