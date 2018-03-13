console.log("Sanity Check: JS is working!");
var $pokemonList;
var allPokemons = [];
$(document).ready(function(){
  $pokemonList = $("#target");

  $.ajax({
    method: 'GET',
    url: 'http://super-crud.herokuapp.com/api/pokemon',
    success: handleSuccess,
    error: function(){
      console.log("Error occurred!");
    }
  });

  $('#newForm').on('submit', function(e) {
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      method: 'POST',
      url: 'http://super-crud.herokuapp.com/api/pokemon',
      data: $(this).serialize(),
      success:function(pokemon){
        $('#newForm input').val('');
        allPokemons.push(pokemon)

        newPostHTML=`<div class="card-panel">
          <p>
          <b class="project-title">${pokemon.name}</b>
          <button class="edit-project-submit-button" data-id="${pokemon._id}" ><i class="fas fa-save fa-lg"></i></button>
          <button class="edit-project-button"><i class="far fa-edit fa-lg"></i></button>
          <button class="delete-button" data-id=${pokemon._id}><i class="fas fa-trash-alt fa-lg"></i></button>
          </p>
          <hr><p>Pokedex#: ${pokemon.pokedex}</p>
          <p>Evolves from: ${pokemon.evolves_from}</p>
          <img src="${pokemon.image}">
          <br>
          </div>`

        $pokemonList.append(newPostHTML);
      },
      error: function(){
        console.log("Error occurred!");
      }
  })

})

function handleSuccess(json){
  allPokemons = json.pokemons;
  allPokemons.forEach(function(pokemon){
  $pokemonList.append(`<div class="card-panel">
    <p>
    <b class="project-title">${pokemon.name}</b>
    <button class="edit-project-submit-button" data-id="${pokemon._id}" ><i class="fas fa-save fa-lg"></i></button>
    <button class="edit-project-button"><i class="far fa-edit fa-lg"></i></button>
    <button class="delete-button" data-id=${pokemon._id}><i class="fas fa-trash-alt fa-lg"></i></button>
    </p>
    <hr><p>Pokedex#: ${pokemon.pokedex}</p>
    <p>Evolves from: ${pokemon.evolves_from}</p>
    <img src="${pokemon.image}">
    <br>
    </div>`);

  })
};

function handleError(json){

};




})
