let yeni_btn = document.getElementById("yeni_btn");
let main_container = document.getElementById("main_container");
let currentIndex = 0;
let tebrik_p=document.getElementById("tebrik_p")
let bildirim_p=document.getElementById("bildirim_p")


// var sorular = [
//   { soru: "Bu ülkenin başkenti neresidir?", ipucu: "Avrupa kıtasında yer alır ve Eiffel Kulesi'ne ev sahipliği yapar.", cevap: "paris" },
//   { soru: "En büyük gezegen hangisidir?", ipucu: "Diğer adıyla 'Büyük Gezegen'.", cevap: "jupiter" },
//   { soru: "Bu ünlü ressam hangi ülkenin vatandaşıdır?", ipucu: "17. yüzyılın Hollandalı ressamı, 'Gece Devriyesi' tablosunun yaratıcısı.", cevap: "rembrandt" },
//   { soru: "Bu ünlü bilim adamı, kütle ve enerji arasındaki ünlü ilişkiyi formüle etti. Kimdir?", ipucu: "'E=mc^2' formülü ile tanınır.", cevap: "albert einstein" },
//   { soru: "Hangi şehir, İtalya'nın başkentidir?", ipucu: "Tarihi bir amfi tiyatrosu olan 'Colosseum' ile ünlüdür.", cevap: "roma" },
//   { soru: "Hangi renk, gökkuşağının en kısa dalga boyuna sahiptir?", ipucu: "Güneş ışığının ayrışması sırasında mavi renk önce gelir.", cevap: "mavi" },
//   { soru: "Bu hayvan, memelilerin en büyüğüdür. Kimdir?", ipucu: "Büyük dişleri ve hortumuyla tanınır.", cevap: "fil" },
//   { soru: "Hangi gezegen, Güneş Sistemi'ndeki en sıcak gezegendir?", ipucu: "Büyük kırmızı lekesi ile bilinir.", cevap: "venus" },
//   { soru: "Bu roman karakteri, kitabın yazarı tarafından 'Sherlock Holmes' adlı seride yaratılmıştır.", ipucu: "Ünlü bir dedektiftir ve '221B Baker Street' adresinde yaşar.", cevap: "sherlock holmes" },
//   { soru: "Hangi element, tabloda 'Fe' simgesi ile gösterilir?", ipucu: "Kan hücrelerinde oksijen taşımaktan sorumlu olan metal.", cevap: "demir" }
// ];
var sorular = [
    { clue: "It has pages and you can find many stories inside.", answer: "book", guess: "Guess the word: " },
    { clue: "You write with it and it has an eraser on top.", answer: "pencil", guess: "Guess the word: " },
    { clue: "This is a piece of land with its own government.", answer: "country", guess: "Guess the word: " },
    { clue: "It has wings and feathers, often seen in the sky.", answer: "bird", guess: "Guess the word: " },
    { clue: "You use it to cut paper in a straight line.", answer: "scissors", guess: "Guess the word: " },
    { clue: "A large body of water, often with waves.", answer: "ocean", guess: "Guess the word: " },
    { clue: "You wear it on your head to protect yourself from the sun.", answer: "hat", guess: "Guess the word: " },
    { clue: "A small, buzzing insect that produces honey.", answer: "bee", guess: "Guess the word: " },
    { clue: "A round object that you can bounce and throw.", answer: "ball", guess: "Guess the word: " },
    { clue: "A mode of transportation with two wheels.", answer: "bike", guess: "Guess the word: " },
    { clue: "A device used for communication that fits in your pocket.", answer: "phone", guess: "Guess the word: " },
    { clue: "A hot beverage made from leaves, often served with sugar and milk.", answer: "tea", guess: "Guess the word: " },
    { clue: "A reptile that moves slowly and carries its home on its back.", answer: "turtle", guess: "Guess the word: " },
    { clue: "A celestial body that orbits the Earth and provides light at night.", answer: "moon", guess: "Guess the word: " },
    { clue: "You use it to clean your teeth, often with toothpaste.", answer: "toothbrush", guess: "Guess the word: " },
    { clue: "A place where you can borrow and return books.", answer: "library", guess: "Guess the word: " },
    { clue: "A sweet, frozen treat that comes in various flavors.", answer: "ice cream", guess: "Guess the word: " },
    { clue: "A type of footwear worn on the feet.", answer: "shoe", guess: "Guess the word: " },
    { clue: "A large, four-legged mammal often kept as a pet.", answer: "dog", guess: "Guess the word: " },
    { clue: "A musical instrument with black and white keys.", answer: "piano", guess: "Guess the word: " },
    { clue: "Try to guess the word: It is a beverage often served hot or cold, and it comes from the leaves of a plant.", answer: "tea", guess: "Guess the word: " }
  ];
  

function Oyunubasla(){
    soruyuGoster()
}

function soruyuGoster(){
    let soru_p=document.getElementById("soru_p")
    soru_p.innerText=sorular[currentIndex].guess
    let ipucu_p=document.getElementById("ipucu_p")
    ipucu_p.innerText=sorular[currentIndex].clue
    // tebrik_p.style.display="none"


}


function kontrolEt(){
    let cevap_id=document.getElementById("cevap_id")
    let kullaniciCevap=cevap_id.value.toLowerCase()

    if(kullaniciCevap===sorular[currentIndex].answer){
        tebrik_p.style.display="block"
        bildirim_p.style.display="none"
        cevap_id.value=""
        if(currentIndex<sorular.length){
            currentIndex++
            soruyuGoster()
        }
        else{
            alert("oyun bitti")
        }

    }
    else{
        cevap_id.value=""
        tebrik_p.style.display="none"
        bildirim_p.style.display="block"

    }
}

Oyunubasla()