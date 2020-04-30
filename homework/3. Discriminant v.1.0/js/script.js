function solveEquation(a, b, c) {
    let discriminant;
    let x1;
    let x2;
    let x;

    // b*b заменить на b**2
    discriminant = (b * b) - (4 * a * c);

    console.log(`${a}x^2 + ${b}x + ${c} = ${discriminant}`);

    if (discriminant > 0) {

        x1 = ((-b) + (discriminant ** 0.5)) / (2 * a);
        x2 = ((-b) - (discriminant ** 0.5)) / (2 * a);

        console.log(`x1 = ${x1}, x2 = ${x2}`);

    } else if (discriminant === 0) {

        x = -b / (2 * a);

        console.log(`x = ${x}`);

    } else if (discriminant < 0) {
        console.log(`No roots! \nBecause Discriminant < 0`)
    }
    // show on the web page
    let printResult = document.getElementById('result');
    printResult.innerHTML = `${a}x^2 + ${b}x + ${c} = ${discriminant} <br> x1 = ${x1}, x2 = ${x2}`;
}

solveEquation(1, 5, 6);

