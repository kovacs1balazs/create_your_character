function init() {

    const root = document.getElementById("root");
     
    //Creating Character Form
    root.insertAdjacentHTML("beforeend", `
    
            <form id="form">
                <h2>Character Name:</h2>
                <input type="text" id="cName">
                
                <h2>Race</h2>
                
                <select id="race">
                <option></option>
                <option>Human</option>
                <option>Centaur</option>
                <option>Gnome</option>
                <option>Elf</option>
                </select>
                
                <h2>Gender</h2>

                <select id="gender">
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                </select>

                <h2>Class</h2>

                <select id="class">
                    <option></option>
                    <option>Fighter</option>
                    <option>Ranger</option>
                    <option>Barbarian</option>
                    <option>Wizard</option>
                    <option>Monk</option>
                </select>
            </form>          
            `);

    //Creating Character Card with details

    root.insertAdjacentHTML("beforeend", `
            
            <div id="characterCard">
                <div id="name"></div>
                <div id="racePicture"></div>
                <div id="genderPic"></div>
                <div id="cardClass"></div>
            </div>
                    `);
    //Defining variables
    let characterNameInput = document.getElementById("cName");
    let selectRace = document.getElementById("race");
    let selectClass = document.getElementById("class")
    let selectGender = document.getElementById("gender");

    let cardName = document.getElementById("name");
    let cardRacePicture = document.getElementById("racePicture");
    let cardGenderPicture = document.getElementById("genderPic");
    let cardClassName = document.getElementById("cardClass");

    const form = document.getElementById("form")    
    
    form.addEventListener('change', () => console.log("Form has been changed"));

    //Creating character card 
    
    characterNameInput.addEventListener('input', () => {
        cardName.innerText = characterNameInput.value;
    })

    
    const genderSelector = () =>{
        if(selectGender.value === "Male") {
            cardGenderPicture.innerHTML = "<img src='https://img.icons8.com/ios-glyphs/60/000000/male.png'>";
        }else {
            cardGenderPicture.innerHTML = "<img src='https://img.icons8.com/glyph-neue/64/000000/female.png'>";
        }
    }
    selectGender.addEventListener('change', genderSelector);
    
    
    const raceSelector = () =>{
        if (selectRace.value === "Human") {
            cardRacePicture.innerHTML = "<img src='https://5e.tools/img/races/PHB/Human.png' width='100' height='auto'>";
        }
        if (selectRace.value === "Centaur") {
            cardRacePicture.innerHTML = "<img src='https://5e.tools/img/races/GGR/Centaur.png' width='100' height='auto'>";
        }
        if (selectRace.value === "Gnome") {
            cardRacePicture.innerHTML = "<img src='https://5e.tools/img/races/PHB/Gnome.png' width='100' height='auto'>";
        }
        if (selectRace.value === "Elf") {
            cardRacePicture.innerHTML = "<img src='https://5e.tools/img/races/PHB/Elf.png' width='100' height='auto'>";
        }
    }
    selectRace.addEventListener('change', raceSelector);

    
    const classSelector = () =>{
        if (selectClass.value === "Fighter"){
            cardClassName.innerHTML = "<img src='https://img.icons8.com/external-flat-icons-maxicons/85/000000/external-fighter-japan-flat-flat-icons-maxicons.png'>"
        }
        if (selectClass.value === "Ranger"){
            cardClassName.innerHTML = "<img src='https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-sheriff-law-and-crime-icongeek26-linear-colour-icongeek26.png'>"
        }
        if (selectClass.value === "Barbarian"){
            cardClassName.innerHTML = "<img src='https://img.icons8.com/dotty/80/000000/viking-helmet.png'>"
        }
        if (selectClass.value === "Wizard"){
            cardClassName.innerHTML = "<img src='https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-wizard-fairytale-wanicon-lineal-wanicon.png'>"
        }
        if (selectClass.value === "Monk"){
            cardClassName.innerHTML = "<img src='https://img.icons8.com/external-outline-juicy-fish/60/000000/external-monk-avatars-outline-outline-juicy-fish.png'>"
        }
        
    }
    selectClass.addEventListener('change', classSelector);
    

}




window.addEventListener('load', init);