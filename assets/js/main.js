// Milestone 1:

// Partendo dalla seguente struttura dati 

const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Mostriamo in pagina tutte le icone disponibili come da layout.

icone.forEach((icona) => {

    // Milestone 2 Coloriamo le icone per tipo

    if (icona.type === "animal") {
        icona.colore = "blue" 
    }else if (icona.type === "user") {
        icona.colore = "blueviolet" 
    }else {
        icona.colore = "orange"
    }
    
    document.getElementById("contenitore_card").insertAdjacentHTML("beforeend" , 
    `
    <div class="card my-5 mx-3 py-4 text-center shadow-sm" style="width: 14rem;">
        <i style="color: ${icona.colore};" class="${icona.family} ${icona.prefix}${icona.name}"></i>
        <div class="">
            <span style="font-size: .8rem ;" class="card-text text-uppercase font-weight-bold">${icona.name}</span>
        </div>
     </div>
    `
    )

}) ;

// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone



