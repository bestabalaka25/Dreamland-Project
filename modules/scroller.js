import scrollama from "scrollama";

const main = document.querySelector("main");
const scroll = main.querySelector("#scroll");
const figure = scroll.querySelector("figure");

const scroller = scrollama();

const init = (markersById, map) => {
    
    const handleStepEnter = (response) => {
        console.log(response.element.dataset.step);
        response.element.classList.add("is-active");

        figure.querySelector("p").textContent = `${response.element.dataset.step}`; 
        
        Object.keys(markersById).map(id => {
            markersById[id].map(marker => {
                id === response.element.dataset.step ? 
                marker.addTo(map) && map.flyTo({center: marker.getLngLat(), essential: true, zoom: 4.5, speed: 0.4, pitch: 30, padding:{right: 600, top: 300}}) && marker.getElement().classList.remove("is-active")
                :   
                marker.getElement().classList.add("is-active");
            })
        });
    }   

    const handleStepExit = (response) => {
        response.element.classList.remove("is-active");
    }

    scroller
        .setup({
            step: ".year",
            offset: .1,
            debug: false
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);
}

export { init };