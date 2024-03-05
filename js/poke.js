function loadpk(){
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url + inputname.value.trim())
    .then((response) =>{
        if(!response.ok) {
            alert("Não foi possivel encontrar o pokemon");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("nome").innerHTML = data['name'];
        document.getElementById("numero").innerHTML = data['id'];
        console.log(data);
        let img2 = data['sprites']['back_default'];
        document.getElementById('pic2').setAttribute('src',img2)
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src',img)
    })
    .catch((erro) => {
        console.log("erro");
    })
}
let inputname = document.getElementById("inputname")
document.getElementById('btn1').onclick = loadpk;