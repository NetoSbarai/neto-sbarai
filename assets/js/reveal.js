const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);

        }

    });

},{
    threshold:.15
});

reveals.forEach(section=>{

    revealObserver.observe(section);

});