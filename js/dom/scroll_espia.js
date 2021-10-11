const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries)=>{
        //console.log("entries", entries);

        entries.forEach((entry)=>{
        //console.log("Entry", entry)
        const id = entry.target.getAttribute("id");
        //console.log(id);

        if(entry.isIntersecting){
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
        }else{
            d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
        }
        });
    };

    const observer = new IntersectionObserver(cb, {
        /* propiedades que recibe el objeto IntersectionObserver */
        //root
        //rootMargin:"-250px",
        threshold:[0.5, 0.75],


    });
    //console.log("Observer", observer);

    $sections.forEach((el)=> observer.observe(el));
}