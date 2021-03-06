function solveEquation(a, b, c) {
    let discriminant, x1, x2, x;

    // b*b заменить на b**2
    discriminant = (b * b) - (4 * a * c);

    // console.log(`${a}x^2 + ${b}x + ${c} = ${discriminant}`);
    
    if (discriminant > 0) {

        x1 = (-b + (discriminant ** 0.5)) / (2 * a);
        x2 = ((-b) - (discriminant ** 0.5)) / (2 * a);

        return console.log([x1, x2]);
        // console.log(`x1 = ${x1}, x2 = ${x2}`);

    } else if (discriminant === 0) {

        x = -b / (2 * a);

        return console.log([x]);
        // console.log(`x = ${x}`);

    } else if (discriminant < 0) {
        
        return console.log([]); 
        // console.log(`No roots! \nBecause Discriminant < 0`)
    }

    if (a !== isFinite || b !== isFinite || c !== isFinite) {
        return console.log([]);
    }
};

solveEquation(3, -4, 1);
solveEquation(4, -4, 1);
solveEquation(1, -4, 10);
solveEquation('e', -4, 'd');