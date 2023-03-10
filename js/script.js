window.onload = function () {
    fetch("/data.json").then((res) => {
        return res.json()
    })
        .then((data) => {
            let items = document.getElementById("resultsItems");
            
            let averageScore = 0;

            for (const item of data) {
                let resultItem = document.querySelector(".clone").cloneNode(true);
                resultItem.classList.remove("hidden", "clone");
                
                let name = resultItem.querySelector(".name");
                
                let icon = document.createElement("img");
                icon.src = item.icon;
                icon.alt = item.category + " icon";
                name.appendChild(icon);

                name.innerHTML += item.category;
                averageScore += item.score
                resultItem.querySelector(".result").innerText = item.score;
                resultItem.querySelector(".hidden").classList.remove("hidden");

                switch(item.category) {
                    case "Reaction":
                        resultItem.classList.add("bg--red");
                        name.classList.add("accent--red");
                        break;
                    case "Memory":
                        resultItem.classList.add("bg--yellow");
                        name.classList.add("accent--yellow");
                        break;
                    case "Verbal":
                        resultItem.classList.add("bg--green");
                        name.classList.add("accent--green");
                        break;
                    case "Visual":
                        resultItem.classList.add("bg--blue");
                        name.classList.add("accent--blue");
                        break;
                }

                items.appendChild(resultItem);
            }
            averageScore = Math.round(averageScore / data.length);
            document.getElementById("averageScore").innerText= averageScore;
        })
}