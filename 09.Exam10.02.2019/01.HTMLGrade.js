function solve(exam, homeworks, neededH) {
    let examPoints = +exam*9/40;
    if (examPoints === 90) {
        console.log('6.00')
    } else {
        let bonusPoints = 10;
        if (neededH >0 && homeworks<=neededH) {
            bonusPoints = +homeworks*10/+neededH;
        } 
            let totalPoints = examPoints+bonusPoints;
            let grade = 3 + 2 * (totalPoints-100/5) / (100 / 2);
            if (grade < 3) {
                console.log(2.00)
            } else if (grade >=6.00) {
                console.log('6.00')
            } else {
                console.log(grade.toFixed(2));
            }
    }
    
}

 solve(300, 8, 5) //90t