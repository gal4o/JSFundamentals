function solve(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let  sent = arr[i];
        let pattern = /[A-Za-z]+/gmi;
        let m;
while ((m = pattern.exec(sent)) !== null) {
    if (m.index === pattern.lastIndex) {
        regex.lastIndex++;
    }
    m.forEach((match, groupIndex) => {
        if (!output.includes(match.toLowerCase())) {
            output.push(`${match.toLowerCase()}`);
        }
        
    });
}
    }
    console.log(output.join(', '));
}
solve(
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.','Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.','Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.','Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.','Morbi in ipsum varius, pharetra diam vel, mattis arcu.','Integer ac turpis commodo, varius nulla sed, elementum lectus.','Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
)