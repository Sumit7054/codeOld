let person ={
    Name: "David Warner",
    skills: ["Frontend", "Backend"],
    sayhello(){
        console.log("Hi my name is " + this.Name + " and I have tech skills such as "+ this.skills[0]+ " and "+ this.skills[1]+".");
    }
}

function greet()
{
    console.log("Hello, Hi, Danke!!");
}

person.greetwithhello=greet;

person.greetwithhello();

person.sayhello();