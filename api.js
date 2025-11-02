


   document.getElementById("search").addEventListener("click",e=>{
    getMovie();
    document.getElementById("inp").value = "";
   })
   document.getElementById("inp").addEventListener("keypress", e => {
    if(e.key === "Enter"){
        getMovie();
        document.getElementById("inp").value = "";
    }
   })

function getMovie() {
   const mname =  document.getElementById("inp").value.trim();
   if(!mname){
    return;
   }


const url = `https://imdb.iamidiotareyoutoo.com/search?q=${mname}`

fetch(url)
.then(res=> res.json())
.then(data => {
    console.log(data)
    document.querySelector(".results").innerHTML = ""
    
    data.description.forEach(movie => {

        document.querySelector(".results").innerHTML += `<div class="card">
                <div class="moviename">
                    <h1>${movie["#AKA"]}</h1>
                    <p> Starring ${movie["#ACTORS"]} </p>
                    <div><a href= "${movie["#IMDB_URL"]}" target = "_blank " > Watch Now </a></div>
                </div>

                
                
                 
                <div class="image">
                    <img  src="${movie["#IMG_POSTER"]}" alt="poster">
                </div>
            </div>`
        
    });
})

}

