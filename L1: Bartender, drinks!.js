// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

function getDrinkByProfession(param){
    switch(param.toLowerCase()){
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}