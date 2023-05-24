function hello(){
    return "hello";
}

it('should return the word "hello"', ()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("hello");
})