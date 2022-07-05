function words(a){
    return a.split(" ");
};
//const words = (i) => i.split(" ") example of shorter code

function sentence(b){
    return b.join(" ");
};

function yell(c){
    return c.toUpperCase();
};

function whisper(d){
    return "*"+d.toLowerCase()+"*";
};

const capitalize = (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()

