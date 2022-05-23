
// //-----------RETO 1-------------//
// const url = "https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json";

// d3.json(url).then(data => {
//     const canvas = d3.select("#canvas");

//     const width = 700;
//     const height = 500;
//     const margin = { top: 10, left: 50, bottom: 40, right: 10 };
//     const iwidth = width - margin.left - margin.right;
//     const iheight = height - margin.top - margin.bottom;

//     const svg = canvas.append("svg");
//     svg.attr("width", width);
//     svg.attr("height", height);

//     let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

//     const x = d3.scaleLinear()
//         .domain([0, 980000])
//         .range([0, iwidth]);

//     const y = d3.scaleBand()
//         .domain(data.map(d => d.name))
//         .range([0, iheight])
//         .padding(0.1);

//     const bars = g.selectAll("rect").data(data);

//     bars.enter().append("rect")
//         .attr("class", "bar")
//         .style("fill", "red")
//         .attr("x", () => x(0))
//         .attr("y", d => y(d.name))
//         .attr("height", y.bandwidth())
//         .attr("width", d => x(d.value))

//     g.append("g")
//         .classed("x--axis", true)
//         .call(d3.axisBottom(x))
//         .attr("transform", `translate(0, ${iheight})`);

//     g.append("g")
//         .classed("y--axis", true)
//         .call(d3.axisLeft(y));

//     g.append("text")
//         .attr("text-anchor", "middle")
//         .style("font-size", "14px")
//         .attr("x", 370)
//         .attr("y", 15)
//         .text("Number of refugees VS. Country of Origin");

//     g.append("text")
//         .attr("class", "x label")
//         .attr("text-anchor", "end")
//         .style("font-size", "14px")
//         .attr("x", 390)
//         .attr("y", 485)
//         .text("Number of Refugees");

//     g.append("text")
//         .attr("class", "y label")
//         .attr("text-anchor", "end")
//         .style("font-size", "14px")
//         .attr("x", -170)
//         .attr("y", -70)
//         .attr("transform", "rotate(-90)")
//         .text("Country of Origin");
// });


//-----------RETO 2-------------//


const url = "https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json";

d3.json(url).then(data => {
    const canvas = d3.select("#canvas");

    const width = 750;
    const height = 550;
    const margin = { top: 20, left: 50, bottom: 60, right: 50 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([iheight, 0])

    const x = d3.scaleLinear()
        .domain([0, 38000])
        .range([0, iwidth]);

    let arrayPopulations = []
    data.forEach((e) => {
        arrayPopulations.push(parseInt(e.population));
    });

    const circles = g.selectAll("circle").data(data);

    circles.enter().append("circle")
        .attr("class", "point")
        .style("fill", "yellow")
        .attr("cx", d => x(d.purchasingpower))
        .attr("cy", d => y(d.lifeexpectancy))
        .attr("r", d => (d.population / Math.max.apply(null, arrayPopulations)) * 100);

    circles.enter().append("text")
        .attr("x", d => x(d.purchasingpower))
        .attr("y", d => y(d.lifeexpectancy))
        .style("font-size", "14px")
        .text(d => d.country);

    g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);

    g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));

    g.append("text")
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .attr("x", 370)
        .attr("y", 5)
        .text("Life Expentancy VS. Adquisition Power");

    g.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .style("font-size", "14px")
        .attr("x", 410)
        .attr("y", 505)
        .text("Adquisition Power");

    g.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .style("font-size", "14px")
        .attr("x", -200)
        .attr("y", -40)
        .attr("transform", "rotate(-90)")
        .text("Life Expentancy");
});