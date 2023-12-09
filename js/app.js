const zmones = [

    {
        vardas: 'Andrius',
        amzius: 21,
        miestas: 'Vilnius'
    },
    {
        vardas: 'Marius',
        amzius: 40,
        miestas: 'Kaunas'
    },
    {
        vardas: 'Giedre',
        amzius: 18,
        miestas: 'Alytus'
    },
    {
        vardas: 'Tadas',
        amzius: 30,
        miestas: 'Kedainiai'
    },
    {
        vardas: 'Arvydas',
        amzius: 51,
        miestas: 'Klaipeda'
    },
    {
        vardas: 'Egidijus',
        amzius: 20,
        miestas: 'Plunge'
    },

]

for (let i = 0;i < zmones.length; i++){

    const ul = document.createElement('ul');
    ul.setAttribute('class','data')
    document.querySelector('body').appendChild(ul);

    const name = document.createElement('li');
    name.textContent = "Vardas : " + zmones[i].vardas;
    ul.appendChild(name);

    const age = document.createElement('li');
    age.textContent = "Amzius : " + zmones[i].amzius;
    ul.appendChild(age);

    const city = document.createElement('li');
    city.textContent = "Miestas : " + zmones[i].miestas;
    ul.appendChild(city);
}

function filtras(){
    let input = document.getElementById('find');
    let filter = input.value.toUpperCase();
    let ul = document.getElementsByClassName('data');
    for(let i = 0; i < ul.length; i++){
        let li = ul[i].getElementsByTagName('li');
        for(let x = 0; x < li.length; x++) {
            let name_li = li[x];
            let name_text = name_li.textContent || name_li.innerText;
            if(name_text.toUpperCase().indexOf(filter) >= 0){
                ul[i].style.display="";
                break;
            }else{
                ul[i].style.display="none";
            }
        }
    }
}