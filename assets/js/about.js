const counters = document.querySelectorAll(".stat-card h3");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 50));

        const timer = setInterval(()=>{

            current += increment;

            if(current >= target){

                current = target;
                clearInterval(timer);

            }

            counter.textContent = current;

        },30);

        observer.unobserve(counter);

    });

});

counters.forEach(counter=>observer.observe(counter));