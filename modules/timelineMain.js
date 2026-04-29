import { init } from "./scroller.js";            
import { dataFetch } from "./timelineApi.js";
import { createMap } from "./mapbox.js";

const main = document.querySelector("main");
const scroll = main.querySelector("#scroll");
const article = scroll.querySelector("article");

const run = async () => {
    const data = await dataFetch();

    const { markersById, map } = createMap(data)

    const container = article.querySelector(".tournament-years");
    
    container.innerHTML = data.map(item => `
        <div class="year" data-step="${item.id}">
            <div class="year-content">
                <div class="year-content-container">
                    <h1>${item.header}</h1>
                    <div id="timeline-host-flag-container">${item.flagSrc}</div>
                </div>
                <p>${item.para}</p>
                <p><span id="year-fact">Did You Know?</span><br>${item.fact}</p>
                <img id="timeline-main-img" src="${item.imgSrc}" alt="${item.imgAlt}">
            </div>
        </div>    
    `).join("");
    
    init(markersById, map);
};
run();

export { run };    