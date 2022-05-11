let string='jodobia';
let capitalise=(string)=>{
    return string.charAt(0).toUpperCase();
}

    test('capitalise should return J',()=>{
        //arrange and act
        let result=capitalise(string);
        //assert
        expect(result).toBe('J');
    }   
    )
