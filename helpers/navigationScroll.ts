export const scrollButtonUp = ( evento: any, scrollAnimation: number ) => {
    
    const element = evento.target;
    const id = element.getAttribute('href');
    // const to = document.querySelector(id).offsetTop;

    console.log(id)

    window.scroll({
        top: scrollAnimation -100,
        behavior: "smooth"
    });

}