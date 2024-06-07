type user1 ={ name:string;age:number;height:number;colour:string;}


let person:user1={
    name:"anaya",
    age:22,
    height:5.8,
    colour:"fair",
}
console.log(person.height);

type car={name:string;model:string;speed:number}

let parado:car =
{
    name:"parado",
    model:"best",
    speed:1800,
}
console.log(parado.model);
let byek:car=
{
name:"honda",
model:"2024",
speed:2000,
}
console.log(byek);
//typr intersection

let bioData : user1 & car =
{
    name:"wamiq",
    model:"2024",
    age:25,
    colour:"fair",
    height:5,
    speed:2000

}




    





