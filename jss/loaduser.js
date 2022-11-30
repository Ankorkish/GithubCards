window.onload = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
    let name = prompt("What is your name on Github");
    fetch(`https://api.github.com/users/${name}`).then(
        value => value.json()
    ).then(
        value => {
            document.querySelector(".div-image > img").src = value["avatar_url"];

            document.querySelector(".name").textContent = value["login"];
            document.querySelector(".repos").firstElementChild.href = `https://github.com/${name}`;
            document.querySelector(".bio").textContent = value["bio"] == null  ? `${name} has no bio` :  value["bio"] ;
            let date = new Date(Date.parse(value["created_at"]));
            document.querySelector(".date").textContent = `${date.getFullYear()} ${monthNames[date.getMonth()]} ${date.getDay() + 1}`;
        }
    )
}




function changeGradient(e){
    let color = Math.floor(240 * Math.random());
    let colorarr = [];
    for(let i = 0; i < 3; i++){
        colorarr.push(getColor(color + i * 40))
    }
    for(let i = 1; i <= 3; i++){
        document.documentElement.style.setProperty(`--border-color-${i}`, colorarr[i-1]);
    }
}

function getColor(color){ 
    return "hsl(" + color + ',' +
               (70 + 5 * Math.random()) + '%,' + 
               (50 + 10 * Math.random()) + '%)'
  }
  

  