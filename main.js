

const a=["Ja chcę powiedzieć jedną rzecz: ","Trzeba powiedzieć jasno: ","Jak powiedział wybitny krakowianin Stanisław Lem: ","Proszę mnie dobrze zrozumieć: ","Ja chciałem państwu przypomnieć, że: ","Niech państwo nie mają złudzeń: ","Powiedzmy to wyraźnie: "]

const b=["przedstawiciele czerwonej hołoty ","ci wszyscy (tfu!) geje ","funkcjonariusze reżymowej telewizji ", "tak zwani ekolodzy ","co wszyscy (tfu!) demokraci ","agenci bezpieki ", "feminazistki "];

const c=["zupełnie bezkarnie ", "całkowicie bezczelnie ", "o poglądach na lewo od komunizmu ", "celowo i świadomie " ,"z premedytacją ", "od czasów Okrągłego Stołu " ,"w ramach postępu "]

const d=["nawołują do podniesienia podatków ", "próbują wyrzucić kierowców z miast ", "próbują skłócić Polskę z Rosją ", "głoszą brednie o globalnym ociepleniu ", "zakazują posiadania broni ", "nie dopuszczają prawicy do władzy ", "uczą dzieci homoseksualizmu "]

const e=["bo dzięki temu mogą kraść ", "bo dostają za to pieniądze ", "bo tak się uczy w państwowej szkole ", "bo bez tego (tfu!) demokracja nie może istnieć ", "bo głupich jest więcej niż mądrych ", "bo chcą tworzyć raj na ziemi ", "bo chcą niszczyć cywilizacją białego człowieka "]

const f=["przez kolejne kadencje ", "o czym się nie mówi ", "i właśnie dlatego Europa umiera ", "ale przyjdą Muzułmanie i zrobią porządek ", "- tak samo jak za Hitlera ", "- proszę zobaczyć co się dzieje na Zachodzie jeśli mi państwo nie wierzą ", "co lat temu sto nikomu nie przyszłoby do glowy "]

const arr =[a,b,c,d,e,f]


  randomMessage=()=>{
    let message="";
    for(let i=0;i<arr.length;i++){
      let rand=Math.floor(Math.random()*(arr[i].length));
      message+=arr[i][rand]
    }
    
    mainPrompt.textContent= message;
  }

const mainButton=document.querySelector(".mainButton");
const mainPrompt=document.querySelector(".mainPrompt");
mainButton.addEventListener("click",randomMessage)