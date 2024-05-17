let frutta = {};
let verdura = {};
let punti_Frutta = 0;
let punti_Verdura = 0;
let indiceFrutta = 0;
let indiceVerdura = 0;
function add_ver(){
    if(document.getElementById("btn_add_ver").innerText == "Addestra")
        document.getElementById("btn_add_ver").innerText = "Verifca";
    else
        document.getElementById("btn_add_ver").innerText = "Addestra";
}
function avvia(){
    document.getElementById("sec_alimento").classRemove = "animazione";
    //Cambio Icona
    let icona = Math.round(Math.random()*25);
    document.getElementById("alimento").innerHTML = emoji[icona];

    //Animazione

    document.getElementById("sec_alimento").className = "animazione";
    
    if(punti_Frutta + punti_Verdura == 10)
    {
        alert("Hai fatto: " + punti_Frutta+punti_Verdura);
        punti_Frutta = 0;
        punti_Verdura = 0;
    }
}
function img_frutti(){
    if(document.getElementById("btn_add_ver").innerText == "Addestra")
    {
        frutta[indiceFrutta] = document.getElementById("alimento").innerHTML;
        console.log(frutta[indiceFrutta]);
        indiceFrutta++;
    }
    else
    {
        let j = 0;
        let trovato = false;
        do
        {
            if(document.getElementById("alimento").innerHTML == frutta[j])
                trovato = true;
            else
                j++;
        }
        while(!trovato && j < frutta.length);
        if(trovato)
        {
            punti_Frutta++;
            console.log(punti_Frutta);
        }
    }
}
function img_verdure(){
    if(document.getElementById("btn_add_ver").innerText == "Addestra")
    {
        verdura[indiceVerdura] = document.getElementById("alimento").innerHTML;
        console.log(verdura[indiceVerdura]);
        indiceVerdura++;
    }
    else
    {
        let j = 0;
        let trovato = false;
        do
        {
            if(document.getElementById("alimento").innerHTML == verdura[j])
                trovato = true;
            else
                j++;
        }
        while(!trovato && j < verdura.length);
        if(trovato)
        {
            punti_Verdura++;
            console.log(punti_Verdura);
        }
    }
}
let emoji = [
    "🥕",
    "🍎",
    "🍅",
    "🍌",
    "🥬",
    "🥑",
    "🍇",
    "🍑",
    "🥬",
    "🍓",
    "🍉",
    "🧅",
    "🌰",
    "🍋",
    "🍑",
    "🥥",
    "🥔",
    "🧄",
    "🥝",
    "🍐",
    "🥦",
    "🍍",
    "🍒",
    "🥭",
    "🍆",
    "🥜"
];

let alimenti = [
    {
        "desc": "carota",
        "emo": "🥕"
    },
    {
        "desc": "mela",
        "emo": "🍎"
    },
    {
        "desc": "pomodoro",
        "emo": "🍅"
    },
    {
        "desc": "banana",
        "emo": "🍌"
    },
    {
        "desc": "insalata",
        "emo": "🥬"
    },
    {
        "desc": "avocado",
        "emo": "🥑"
    },
    {
        "desc": "uva",
        "emo": "🍇"
    },
    {
        "desc": "albicocca",
        "emo": "🍑"
    },
    {
        "desc": "verza",
        "emo": "🥬"
    },
    {
        "desc": "fragola",
        "emo": "🍓"
    },
    {
        "desc": "mirtillo",
        "emo": "🫐"
    },
    {
        "desc": "anguria",
        "emo": "🍉"
    },
    {
        "desc": "cipolla",
        "emo": "🧅"
    },
    {
        "desc": "castagna",
        "emo": "🌰"
    },
    {
        "desc": "oliva",
        "emo": "🫒"
    },
    {
        "desc": "limone",
        "emo": "🍋"
    },
    {
        "desc": "pesca",
        "emo": "🍑"
    },
    {
        "desc": "fagiolo",
        "emo": "🫘"
    },
    {
        "desc": "cocco",
        "emo": "🥥"
    },
    {
        "desc": "patata",
        "emo": "🥔"
    },
    {
        "desc": "aglio",
        "emo": "🧄"
    },
    {
        "desc": "peperone",
        "emo": "🫑"
    },
    {
        "desc": "kiwi",
        "emo": "🥝"
    },
    {
        "desc": "pera",
        "emo": "🍐"
    },
    {
        "desc": "piselli",
        "emo": "🫛"
    },
    {
        "desc": "broccolo",
        "emo": "🥦"
    },
    {
        "desc": "ananas",
        "emo": "🍍"
    },
    {
        "desc": "ciliegia",
        "emo": "🍒"
    },
    {
        "desc": "mango",
        "emo": "🥭"
    },
    {
        "desc": "melanzana",
        "emo": "🍆"
    },
    {
        "desc": "arachide",
        "emo": "🥜"
    }
];