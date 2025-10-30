
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });



    const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", () => {
      alert("Thanks for visiting, Sheena! You can email me at hermetaniosheena@gmail.com 💌");
    });
