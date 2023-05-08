const getPokemon = async (pokename) => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
    
    if (resp.status == 200){
        return resp.data
    }
    return "error"
};




let formSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    let pname = event.target[0].value;
    let fixed_pname = pname.toLowerCase();
    let poke_info = await getPokemon(fixed_pname);
    let poke_name =  poke_info.name
    let poke_img =  poke_info.sprites.other['official-artwork']['front_default']
    


    form.reset();
    let new_h4 = document.createElement('h4');
    new_h4.innerHTML = poke_name;
    document.body.append(new_h4);
    let new_img = document.createElement('img');
    new_img.setAttribute('src', poke_img);
    document.body.append(new_img);
}



let form = document.getElementById('pokeForm');
form.addEventListener('submit', formSubmit)