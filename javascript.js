const heart = document.getElementById("mainHeart");
const tree = document.getElementById("tree");
const bigName = document.getElementById("bigName");
const bouquet = document.getElementById("bouquet");
const flowerMessage = document.getElementById("flowerMessage");

// 🌟 Crear estrellas
for(let i=0;i<100;i++){
    let star = document.createElement("div");
    star.className="star";
    star.style.left = Math.random()*100+"vw";
    star.style.top = Math.random()*100+"vh";
    star.style.animationDuration = (Math.random()*3+1)+"s";
    document.getElementById("stars").appendChild(star);
}

// ❤️ Corazón inicial click
heart.addEventListener("click", showTree);

function showTree(){
    const rect = heart.getBoundingClientRect();

    // 💥 Explosión de mini corazones
    for(let i=0;i<25;i++){
        let mini = document.createElement("div");
        mini.className = "explode-heart";

        mini.style.left = rect.left + rect.width/2 + "px";
        mini.style.top = rect.top + rect.height/2 + "px";

        let x = (Math.random()*400 - 200) + "px";
        let y = (Math.random()*400 - 200) + "px";
        mini.style.setProperty('--x', x);
        mini.style.setProperty('--y', y);

        document.body.appendChild(mini);
        setTimeout(()=> mini.remove(),1200);
    }

    heart.style.display="none";

    // ⏱ Después de la explosión, aparecerán los corazones del árbol
    setTimeout(()=>{
        tree.style.display="block";
        let heartsArr = [];
        for(let i=0;i<40;i++){
            setTimeout(()=>{
                let h = document.createElement("div");
                h.className="small-heart";
                h.style.left = (Math.random()*300-150)+"px";
                h.style.bottom = (Math.random()*300)+"px";
                tree.appendChild(h);
                heartsArr.push(h);
            }, i*80);
        }

        // Mostrar nombre PENÉLOPE
        bigName.style.animation = "showName 2s forwards";

        // ⏱ Después de que el nombre termina, desaparecen el nombre y los corazones
        setTimeout(()=>{
            bigName.style.opacity = 0;
            heartsArr.forEach(h=> h.remove());

            // Mostrar ramo de flores animado
            bouquet.classList.add("show");

            // Hacer cada flor clicable
            const flowers = bouquet.querySelectorAll(".flower");
            flowers.forEach(flower=>{
                flower.addEventListener("click", ()=>{
                    const msg = flower.getAttribute("data-msg");
                    flowerMessage.innerText = msg;

                    // Animación de flor saliendo
                    flower.style.position = "absolute";
                    const rect = flower.getBoundingClientRect();
                    flower.style.left = rect.left + "px";
                    flower.style.top = rect.top + "px";
                    flower.style.transition = "all 1s ease";
                    flower.style.transform = "translateY(-200px) scale(1.5)";
                    setTimeout(()=> flower.remove(),1000);
                });
            });

        },2200); // un poco más que la animación del nombre
    },1200); // espera a que termine la explosión
}