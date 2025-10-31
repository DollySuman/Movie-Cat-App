// fetch("https://imdb.iamidiotareyoutoo.com/search?q=Iron%20Man")
// .then(res => res.json())
// .then(data => {
//     data.description.forEach(movie => {
//         console.log(movie["#TITLE"]);
//         document.querySelector(".head").innerHTML += `<div class="card">
//                 <div class="moviename">
//                     <h1>${movie["#TITLE"]}</h1>
//                     <h2> Starring ${movie["#ACTORS"]}</h2>
//                     <h4>Released in the Year - ${movie["#YEAR"]}</h4>
//                     <h6>The IMDB rank of this movie is : ${movie["#RANK"]}</h6>
                    
//                     <h2><a href="${movie["#IMDB_URL"]}" target = "_blank" >Visit IMDB</a></h2>
                    
                        
//                     </p>
//                 </div>
                
//             </div>`
        
//             // Also make buttons and add event listeners to them
            
//             // Next step is you learn to create your own api with images of the movie and then make a movie datanase 
//     });
// })


   document.getElementById("search").addEventListener("click",getMovie)
   document.getElementById("inp").addEventListener("keypress", e => {
    if(e.key === "Enter"){
        getMovie();
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

// Now next step is to remove the previous cards why nuw movie name is entered and search moviess other than Iron man