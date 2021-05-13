// Milestone 1:

// Partendo dalla seguente struttura dati 

var icone = [
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

// var markup =  
// `
// <div class="card my-5 mx-3 py-4 text-center shadow-sm" style="width: 14rem;">
//     <i style="color: ${icona.colore};" class="${icona.family} ${icona.prefix}${icona.name}"></i>
//     <div class="">
//         <span style="font-size: .8rem ;" class="card-text text-uppercase font-weight-bold">${icona.name}</span>
//     </div>
//  </div>
// ` ;



// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone

// var selezione = document.getElementById("exampleFormControlSelect1") ;

// selezione.addEventListener("change" , function() {

//         document.getElementById("contenitore_card").innerHTML = "" ;

//         icone.forEach((icona) => {

//             // Milestone 2 Coloriamo le icone per tipo
        
//             if (selezione.value === "animal") {
//                 icona.colore = "blue"

//                 document.getElementById("contenitore_card").insertAdjacentHTML("beforeend" , 
//             `
//             <div class="card my-5 mx-3 py-4 text-center shadow-sm" style="width: 14rem;">
//                 <i style="color: ${icona.colore};" class="${icona.family} ${icona.prefix}${icona.name}"></i>
//                 <div class="">
//                     <span style="font-size: .8rem ;" class="card-text text-uppercase font-weight-bold">${icona.name}</span>
//                 </div>
//              </div>
//             `
//             )
//             }else if (selezione.value === "vegetable") {
//                 icona.colore = "orange"

//                 document.getElementById("contenitore_card").insertAdjacentHTML("beforeend" , 
//             `
//             <div class="card my-5 mx-3 py-4 text-center shadow-sm" style="width: 14rem;">
//                 <i style="color: ${icona.colore};" class="${icona.family} ${icona.prefix}${icona.name}"></i>
//                 <div class="">
//                     <span style="font-size: .8rem ;" class="card-text text-uppercase font-weight-bold">${icona.name}</span>
//                 </div>
//              </div>
//             `
//             )
//             }else if (selezione.value === "user") {
//                 icona.colore = "purple"

//                 document.getElementById("contenitore_card").insertAdjacentHTML("beforeend" , 
//             `
//             <div class="card my-5 mx-3 py-4 text-center shadow-sm" style="width: 14rem;">
//                 <i style="color: ${icona.colore};" class="${icona.family} ${icona.prefix}${icona.name}"></i>
//                 <div class="">
//                     <span style="font-size: .8rem ;" class="card-text text-uppercase font-weight-bold">${icona.name}</span>
//                 </div>
//              </div>
//             `
//             )
//             } 

//         }) ;

// })


var selezione = document.getElementById("exampleFormControlSelect1") ;

selezione.addEventListener("change" , function () {

    document.getElementById("contenitore_card").innerHTML=""

    icone.forEach((icona) => {

        // Milestone 2 Coloriamo le icone per tipo

        if (icona.type === "animal") {
            icona.colore = "blue" 
        }else if (icona.type === "user") {
            icona.colore = "blueviolet" 
        }else {
            icona.colore = "orange"
        }

        var markup = 
        `
        <div class="card mb-5 mt-4 mx-4 py-4 px-5 text-center shadow-sm" style="width: 15rem;">
            <i style="color: ${icona.colore};" class="${icona.family} ${icona.prefix}${icona.name}"></i>
            <div class="">
                <span style="font-size: .8rem ;" class="card-text text-uppercase font-weight-bold">${icona.name}</span>
            </div>
        </div>
        `
        ;

        if(selezione.value === "animal" && icona.type === "animal") {

            document.getElementById("contenitore_card").insertAdjacentHTML("beforeend" , markup)

        }else if (selezione.value === "vegetable" && icona.type === "vegetable") {

            document.getElementById("contenitore_card").insertAdjacentHTML("beforeend" , markup)
        
        }else if (selezione.value === "user" && icona.type === "user") {

            document.getElementById("contenitore_card").insertAdjacentHTML("beforeend" , markup)
        
        }else if (selezione.value === "All") {

            document.getElementById("contenitore_card").insertAdjacentHTML("beforeend" , markup)

        }

    }) 

})





