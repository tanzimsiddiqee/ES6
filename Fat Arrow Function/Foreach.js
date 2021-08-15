var js ={
    name: "Javasrcpt",
    libraries: ["React", "Angular", "Vue"],
    printFunction: function(){
        this.libraries.forEach((a) => {
            console.log(`${this.name} loves ${a}`);
        })
    }
}

js.printFunction();