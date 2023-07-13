
let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
document.getElementById("demo").innerHTML =
"Hello " + person;
}

class start{

    constructor(){
        this.playerName =`${person}`
        this.botName = "robot"
        this.botOption;
        this.playerOption;
        this.winner = ""
    }

    get getbotOption(){
        return this.botOption;
    }

    set setbotOption(option){
        this.botOption = option;
    }

    get getplayerOption (){
        return this.playerOption
    }
       set setplayerOption (option){
        this.playerOption = option;
       }

       botBrain() {
        const option = ["✌", "✊", "🖐"];
       const bot = option[Math.floor(Math.random() * option.length)];
         return bot;

  
       }

       win (){
        
//  if(localStorage.getItem == ("skor")){
//     skor.textContent= `${plus}`
//  }
        
        if(this.botOption=="🖐"&& this.playerOption== "✌" ){
           return this.winer = this.playerName
        
        }

        if(this.botOption=="🖐"&& this.playerOption== "✊" ){
           return this.winer = this.botName
        }

        if(this.botOption=="✌"&& this.playerOption== "🖐" ){
           return this.winer = this.botName
        }

        if(this.botOption=="✌"&& this.playerOption== "✊" ){
           return this.winer = this.playerName
        }

        if(this.botOption=="✊"&& this.playerOption=="🖐" ){
           return this.winer = this.playerName
        }

        if(this.botOption=="✊"&& this.playerOption== "✌" ){
           return this.winer = this.botName
        }else{
            return this.winer = "seri"
        }

       }

       hasil (){
        if (this.winer == "seri"){
            return ` seri`;
        
        }else{
            return `${this.winer}  menang`;
        }

       }

    
       

}


function pickoption (params){
const star = new start();
star.setplayerOption = params
star.setbotOption = star.botBrain();
 star.win();
//  console.log(`player: ${star.getplayerOption} Vs bot:${star.getbotOption}`)
//  console.log("akhir",star.hasil())


 const ingame = document.getElementById('ingame');
 const result = document.getElementById('result');
 ingame.textContent= "......"
    result.textContent= "......"
 setTimeout(() => {
    ingame.textContent = `anda${star.getplayerOption} vs bot ${star.getbotOption}`
result.textContent = star.hasil();
   }, 200);





}
