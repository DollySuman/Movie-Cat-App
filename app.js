const movies = ["Frozen2","Toy Story 3","Iron Man 2"]
const movies = [{
    name: "Frozen 2",
    desc: "About Frozen 2",
    img: ""
}]

const title = () =>{
    movies.forEach(movie =>{

        
        
        document.querySelector(".head").innerHTML += `<div class="card">
        <div class="moviename">
        <h1>${movie}</h1>
        <p>Cars 2 was Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellendus minus consequuntur, enim sed corporis autem rem necessitatibus ut dolores exercitationem sunt fuga culpa?
        
        </p>
        </div>
        
        <div class="image">
        <img  src="https://c8.alamy.com/comp/HXJR8W/release-date-june-2017-title-cars-3-studio-pixar-director-brian-fee-HXJR8W.jpg" alt="poster">
        </div>
        </div>`
        })
    }

    title();

    console.log(movies)