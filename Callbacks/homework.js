const makeHomework = (course, callback) => {
    console.log(`Okay, ok, I'm going to do my ${course} homework now`);
    setTimeout(() => callback(), 2000);
}

const doneWithHomework = () => {
    console.log("Look, Mom, I'm done with my homework!")
}
makeHomework("math", doneWithHomework);