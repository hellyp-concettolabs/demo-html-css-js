document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.minicard');
    let currentCardIndex = 0;
    const circles = document.querySelectorAll('.div1');
        circles.forEach((circle, i) => {
        if (i === 0) {
            circle.classList.add('active');
        }
    });

    document.querySelector('.circle').addEventListener('click', (event) => {
        if (event.target.classList.contains('div1')) {
          const index = Array.from(event.target.parentNode.children).indexOf(event.target);
          currentCard = index;
          showCard(currentCard);
        }
      });

    let toggles = document.getElementsByClassName('que');
    let contentDiv = document.getElementsByClassName('ans');
    let sym = document.getElementsByClassName("symbol2");
    let symbol = document.getElementById("symbol2");
    
    for(let i=0; i<toggles.length; i++){
        if(i === 0){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#25AAE1";
            sym[i].style.border = "1px solid #25AAE1";
            symbol.textContent = "-";
        }
    }

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
        const circles = document.querySelectorAll('.div1');
        circles.forEach((circle, i) => {
        if (i === index) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
        });
    }
    const nextButton = document.getElementById('nextButton');
    
    nextButton.addEventListener('click', function() {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        showCard(currentCardIndex);
    });

    const prevButton = document.getElementById('prevButton');

    prevButton.addEventListener('click',function(){
        currentCardIndex = (currentCardIndex -1 + cards.length) % cards.length;
        showCard(currentCardIndex)
    })



});

let toggles = document.getElementsByClassName('que');
let contentDiv = document.getElementsByClassName('ans');
let icons = document.getElementById("symbol2");
let sym = document.getElementsByClassName("symbol2");

document.querySelectorAll('.faq').forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log("hello");
        
    });
});




for(let i=0; i<toggles.length; i++){

    toggles[i].addEventListener('click', ()=>{
        const symbol = document.querySelectorAll('.symbol2')[i];
        //symbol.innerHTML = symbol.innerHTML === '+' ? '-' : '+';
        if (symbol.innerHTML === '+') {
            symbol.innerHTML = '-';
        } else if (symbol.innerHTML === '-'){
            symbol.innerHTML = '+'
        }else{
            symbol.innerHTML = '+'
        }
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#25AAE1";
            sym[i].style.border = "1px solid #25AAE1";
            const symbol = document.querySelectorAll('.symbol2')[i];
            //symbol.innerHTML = symbol.innerHTML === '+' ? '-' : '+';
            if (symbol.innerHTML === '+') {
                symbol.innerHTML = '-';
            }

            
            for(let j=0; j<contentDiv.length; j++){
                if(j!==i){
                    contentDiv[j].style.height = "0px";
                    toggles[j].style.color = "black";
                    sym[j].style.border = "1px solid black";
                    const symbol = document.querySelectorAll('.symbol2')[j];
                    if(symbol.innerHTML === '-'){
                        symbol.innerHTML = '+'
                    }else{
                        symbol.innerHTML = '+'
                    }
                }
            }
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
        }


    });
}

// const hide = document.getElementById('hide');
//     hide.addEventListener('click',function() {
//         //console.log("hidden")
//         if(document.getElementById('minus').src = "Path 2090.png"){
//             console.log("hidden")
//             const btn = document.querySelector('.symbol');
//             //btn.classList.add('symbol2')
//             btn.style.border = "1px solid black"
//             btn.style.padding = "9px 9px 1px"
//             const que = document.querySelector('.que');
//             que.style.color = "black"
//             const btn1 = document.getElementById('minus');
//             btn1.src = "../Path 2091.png"
//             let ans1 = document.querySelector(".ans");
//             ans1.style.display = 'none';
//             //console.log(ans)
//         }else if(document.getElementById('minus').src = "../Path 2091.png"){
//                 console.log("hello");
//                 let ans1 = document.querySelector(".ans");
//                 ans1.style.display = 'block';
//         }
//         else{
//                 let ans1 = document.querySelector(".ans");
//                 ans1.style.display = 'block';
//         }
//     })

