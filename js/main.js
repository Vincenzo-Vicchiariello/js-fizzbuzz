for (var i = 1; i < 101; i++) {
    if (i == 69) console.log("Nice.")
    else if (i % 3 == 0) console.log("Fizz")
    else if (i % 5 == 0) console.log("Buzz")
    else if (i % 15 == 0) console.log("FizzBuzz")

    else console.log(i)


}


for (var i = 1; i < 101; i++) {
    if (i == 69) document.getElementById("fb").innerHTML += `
    <div class="square cs magenta shadow-sm">
        <p>Nice.</p>
    </div>
    `;
    else if (i % 15 == 0) document.getElementById("fb").innerHTML += `
    <div class="square cs red shadow-sm">
        <p>FizzBuzz</p>
    </div>
    `;
    else if (i % 5 == 0) document.getElementById("fb").innerHTML += `
    <div class="square cs orange shadow-sm">
        <p>Buzz</p>
    </div>
    `;
    else if (i % 3 == 0) document.getElementById("fb").innerHTML += `
    <div class="square cs yellow shadow-sm">
        <p>Fizz</p>
    </div>
    `;

    else document.getElementById("fb").innerHTML += `
    <div class="square cs shadow-sm">
        <p>${i}</p>
    </div>
    `;


}