// the process.argv allows you to harvest parameters for the command line.
// like if you types form the command line;
// C:/yada\yada\Week2> node process one two
// the one and the two would be considered command line arguments
// and you could use them inside the application. Becomes super important
// when creating a CLI (Command Line Interface)

const [firstArg,secondArg,thirdArg,fourthArg, fifthArg] = process.argv;
console.log(process.argv);
console.log(`FIRST :` + firstArg);
console.log(`SECOND :` + secondArg);
console.log(`The final two args are: ${thirdArg} ${fourthArg} ${fifthArg}`);