// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer (name, tech) {
    this.name = name;
    this.tech = tech;
    // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
    this.introduction = () => {
        console.log(`Hi, I'm ${name} and I work with ${tech}`)
    }
}

// TODO: Create a new object using the 'Developer' constructor
let codeBro = new Developer("Austin", "JavaScript")
// TODO: Call the 'introduction()' method on the new object
codeBro.introduction();