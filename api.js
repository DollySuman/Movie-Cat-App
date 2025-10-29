fetch("https://imdb.iamidiotareyoutoo.com/search?q=Iron%20Man")
.then(res => res.json())
.then(data => {
    data.description.forEach(movie => {
        console.log(movie["#TITLE"]);
        document.querySelector(".head").innerHTML += `<div class="card">
                <div class="moviename">
                    <h1>${movie["#TITLE"]}</h1>
                    <h2> Starring ${movie["#ACTORS"]}</h2>
                    <h4>Released in the Year - ${movie["#YEAR"]}</h4>
                    <h6>The IMDB rank of this movie is : ${movie["#RANK"]}</h6>
                    
                    <h2><a href="${movie["#IMDB_URL"]}" target = "_blank" >Visit IMDB</a></h2>
                    
                        
                    </p>
                </div>
                
            </div>`
        
            // Also make buttons and add event listeners to them
            
            // Next step is you learn to create your own api with images of the movie and then make a movie datanase 
    });
})