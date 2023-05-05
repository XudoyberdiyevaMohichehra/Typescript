// const title = {
//     name: 'web'
// }
// console.log(obj.names);

// console.log('hello');

// interface obj {
//     name: string,
//     age: number,
//     info: any
// }

// let title: obj = {
//     name: 'a',
//     age: 1,
//     info: function(){}
// }
// console.log(title);

//generic function
// function Get<T>(params: T[]): T[] {
//     return new Array().concat(params)
// }
// let num = Get<number>([1, 2, 3])
// let str = Get<string>(['olma'])
// console.log(num);
// console.log(str);

// class

interface Persontype {
    id:number;
    name: string;
    surname:string;
    test:number;
}

class Person implements Persontype{
    constructor(id: number, name: string, surname: string, test: number  ){
        this.id= 1;
        this.name= 'name';
        this.surname= 'surname';
        this.test= 12;
    }
    id: number;
    name: string;
    surname: string;
    test: number;
}
