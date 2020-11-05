function create() {
    for (i = 0; i < data.length; i++) {
        var div_results = document.querySelector('#results');
        var card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute("id", `${data[i].id}`);
        var card__image = document.createElement('div');
        card__image.classList.add('card__image');
        var card__content = document.createElement('div');
        card__content.classList.add("card__content");
        var h2 = document.createElement('h2');
        var p = document.createElement('p');
        card__content.appendChild(h2);
        card__content.appendChild(p);
        card.appendChild(card__image);
        card.appendChild(card__content);
        div_results.appendChild(card);

        var k = 0;
        var breeds = data[i]["breeds"][k++]["name"];
        h2.innerHTML = breeds;

        var texts = data[i]["breeds"];
        var texts1 = data[i]["breeds"];
        var texts2 = data[i]["breeds"];
        var m = 0;
        var t = 0;
        var r = 0;
        var newTexts1 = texts1[m++]["life_span"];
        var newTexts2 = texts2[t++]["breed_group"];
        var newTexts = texts[r++]["bred_for"];
        p.innerHTML = newTexts1 + '<br>' + newTexts + '<br>' + newTexts2;

        var url = data[i]['url'];
        card__image.style.backgroundImage = "url('" + url + "')"; /* <---tricky :D */
    }
}
create();



const search = document.getElementById('search');
const results = document.getElementById('results');
const char = document.getElementById('char');



function dataCheck(name, character){
    for(var i = 0; i < data.length; i++){ 
        var dogs = data[i].breeds[0];
        if(dogs.name.toLowerCase().includes(name.toLowerCase()) && dogs.temperament.includes(character)){
            document.getElementById(data[i].id).style.display="block"
        } else {
            document.getElementById(data[i].id).style.display="none"
        }
    }
}
 
search.addEventListener('input', function(e){
    dataCheck(e.target.value, char.value)
});
 
char.addEventListener('change', function(e){
    dataCheck(search.value, e.target.value);
});
