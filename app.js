console.log("Sanity Check: JS is working!");
var $pokemonList;
var allPokemons = [];
$(document).ready(function(){
  $pokemonList = $("#target");

  $.ajax({
    method: 'GET',
    url: 'http://super-crud.herokuapp.com/api/pokemon',
    success: handleSuccess,
    error: handleError
  });

function handleSuccess(json){
  allPokemons = json;
  allPokemons.pokemons.forEach(function(pokemon){
  $pokemonList.append(`<div class="card-panel">
    <p>
    <b class="project-title">${pokemon.name}</b>
    <button class="edit-project-submit-button" data-id="${pokemon._id}" ><i class="fas fa-save fa-lg"></i></button>
    <button class="edit-project-button"><i class="far fa-edit fa-lg"></i></button>
    <button class="delete-button" data-id=${pokemon._id}><i class="fas fa-trash-alt fa-lg"></i></button>
    </p>
    <hr><p>Pokedex# : ${pokemon.pokedex}</p>
    <p>Evolved From: ${pokemon.evolves_from}</p>
    <img src="${pokemon.image}">
    <br>
    </div>`);

  })
};

function handleError(json){

};



})
