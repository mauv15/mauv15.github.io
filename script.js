const url="https://pokeapi.co/api/v2/pokemon/";
const contenedor= document.getElementById('pokemon-container');

const colores={
    'grass':'#7AC74C',
    'fire' :'#EE8130',
    'water':'#6390F0',
    'normal':'#A8A77A',
    'electric':'#F7D02C',
    'ice':'#96D9D6',
    'fighting':'#C22E28',
    'poison':'#A33EA1',
    'ground':'#E2BF65',
    'flying':'#A98FF3',
    'psychic':'#F95587',
    'bug':'#A6B91A',
    'rock':'#B6A136',
    'ghost':'#735797',
    'dragon':'#6F35FC',
    'dark':'#705746',
    'steel':'#B7B7CE',
    'fairy':'#D685AD',
}


const obtenerPokemon = async (numeroPokemon)=>{
    let respuesta= await fetch(url+numeroPokemon+"/");
    let datos= await respuesta.json();
    console.log(datos);
    crearPokemon(datos);
};


const crearPokemon= (datosPokemon) =>{
    let tipo= datosPokemon.types[0].type.name;
    let color= colores[tipo];
    let template=`<div class='pokemon-item' '>
                    <div class="front" style='background-color:${color}; >
                    <h3>${datosPokemon.name}</h3>
                    <img class='pokemon-img'
                    src='${datosPokemon.sprites.front_default}'/>         
                    <p>Tipo: ${tipo}</p> 
                    </div>
                    <div class="back">
                    <h3>${datosPokemon.name}</h3>
                    src='${datosPokemon.sprites.front_default}'/> 
                    <p>Tipo: ${tipo}</p> 
                    </div>
                    </div>`;
    let div= document.createElement('div'); 
    div.innerHTML = template;
    // contenedor.innerHTML = "";
    contenedor.appendChild(div);         
};

for(let i=1;i<=1025;i++){
    obtenerPokemon(i);
}

function buscadorPokemon(){
    // contenedor.innerHTML = "";
    var search = document.getElementById("search").value;
    console.log(search);
    // obtenerPokemon(search);

    if (search == ""){
        contenedor.innerHTML = "";
        for(let i=1;i<=1025;i++){
            obtenerPokemon(i);
        }
    } else {
        contenedor.innerHTML = "";
        obtenerPokemon(search);
    }
}