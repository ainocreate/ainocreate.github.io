const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
    });

const links = document.querySelectorAll(".nav-links a");

links.forEach((link)=> {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

const cards = document.querySelectorAll(".work-card");
const modal = document.querySelector(".modal-overlay");

if (modal) {
   const modalImg = modal.querySelector(".modal-thumb img");
   const modalTitle = modal.querySelector(".work-title");
   const modalMeta = modal.querySelector(".work-meta");
   const modalDesc = modal.querySelector(".work-desc");
   const closeBtn = modal.querySelector(".modal-close");
   const prevBtn = modal.querySelector(".modal-prev");
   const nextBtn = modal.querySelector(".modal-next");
   const modalCount = modal.querySelector(".modal-count");
   let current = 0;


  function showCard(index) {
    const card = cards[index];  
    const img = card.querySelector("img");
    const desc = card.querySelector(".work-desc");
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalTitle.textContent = card.querySelector(".work-title").textContent;
        modalMeta.textContent= card.querySelector(".work-meta").textContent;

        if (desc) {
            modalDesc.innerHTML = desc.innerHTML;
        } else {
            modalDesc.innerHTML = "";
        }
        modalCount.textContent = (index + 1) + " / " + cards.length;
        current = index;
        } 
    
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            showCard(index);
            modal.classList.add("open");                 
    });
   });


   prevBtn.addEventListener("click", () => {
    let prev = current - 1;
    if (prev < 0) {
        prev = cards.length - 1;
    }
    showCard(prev);
   });

   nextBtn.addEventListener("click", () => {
    let next = current + 1;
    if (next === cards.length) {
        next = 0;
    }
    showCard(next);
   });

   document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) {
        return;
    }

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    } else if (e.key === "ArrowRight") {
        nextBtn.click();
    } else if (e.key === "Escape") {
        modal.classList.remove("open");
    }
   });


   closeBtn.addEventListener("click", () => {
       modal.classList.remove("open");
   });

   modal.addEventListener("click", (e) => {
       if (e.target === modal) {
           modal.classList.remove("open");
       }
   });
}