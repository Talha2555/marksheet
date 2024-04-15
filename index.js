import inquirer from "inquirer";
//asking for roll no
let roll = await inquirer.prompt({
    type: "number",
    name: "num1",
    message: "Please enter your roll number:"
});
console.log(roll);
let rollNo = roll.num1;
console.log(rollNo);
//checking the roll no
if (rollNo == 32233) {
    //Asking for marks
    let marks = await inquirer.prompt([
        { name: "typescript",
            type: "number",
            message: "Please enter your typescript number: ",
        },
        { name: "python",
            type: "number",
            message: "Please enter your python number: ",
        },
        { name: "csharp",
            type: "number",
            message: "Please enter your csharp number: ",
        }
    ]);
    //extract marks
    let ts = marks.typescript;
    let pyth = marks.python;
    let c_sharp = marks.csharp;
    //percentage
    let totalMarks = 300;
    let obtainedMarks = ts + pyth + c_sharp;
    let percent = (obtainedMarks / totalMarks) * 100;
    //answer 
    console.log("Name: Talha Khan");
    console.log("fatherName: Mubeen");
    console.log(` your typescript marks = ${ts} out of 100`);
    console.log(` your python marks = ${pyth} out of 100`);
    console.log(` your csharp marks = ${c_sharp} out of 100`);
    console.log(`Obtained marks = ${obtainedMarks} Total Marks = ${totalMarks}`);
    console.log(`percentage = ${percent}`);
    if (percent >= 80) {
        console.log("Congratulations ! you got A++ Grade");
    }
    else if (percent >= 70) {
        console.log("Congratulations ! you got A Grade");
    }
    else if (percent >= 60) {
        console.log("Congratulations ! you got B Grade \nNeed some Hard Work");
    }
    else if (percent >= 50) {
        console.log("You Got C Grade\n poor result! Need Attention and Hard Word");
    }
    else if (percent >= 40) {
        console.log("You Got D Grade\n poor result! Need Attention and Hard Word");
    }
    else {
        console.log("You Got Failed in your Exams\nNeed Attention and Hard Word");
    }
}
else {
    console.log("Invalid Roll number");
}
