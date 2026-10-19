
const planets = {
    Mercury: {
        nickname: "The swift planet",
        discovered: "Known since antiquity",
        type: "Terristrial planet",
        description: "The smallest planet and closest to the Sun. Its crater-covered surface experiences extreme temperature changes.",
        diameter:"4,879km",
        distance:"0.39 AU",
        day:"176 Earth days",
        year:"88 Earth days",
        moons: 0,
        atmosphere:"Extremely thin exosphere",
        temperature:"About -180°C to 430°C",
        feature:"Caloris Basin",
        funFact: "Despite being closest to the sun, Mercury is not the hottest planet."

    },
    Venus: {
        nickname: "Earth's twin",
        discovered: "Known since antiquity",
        type: "Terristrial planet",
        description: "A rocky world covered by thick clouds and an extremely hot atmosphere..",
        diameter:"12,104km",
        distance:"0.72 AU",
        day:"177 Earth days",
        year:"225 Earth days",
        moons: 0,
        atmosphere:"Mostly carbon dioxide",
        temperature:"About 465°C at the surface",
        feature:"Vast volcanic plains",
        funFact: "Venus is the hottest planet in the solar system(I am more hotter than venus ;)"
    },

    Earth: {
        nickname: "The blue planet",
        discovered: "Known since antiquity",
        type: "Terristrial planet",
        description: "Our home world, with liquid water on the surface and the only confirmed life.1",
        diameter:"12,756km",
        distance:"1 AU",
        day:"24 hours",
        year:"365.25 days",
        moons: 1,
        atmosphere:"Mostly nitrogen and oxygen",
        temperature:"Global average about 15°C",
        feature:"Oceans of liquid water",
        funFact: "Earth is the only planet currently known to support life."
    },

    Mars: {
        nickname: "The red planet",
        discovered: "Known since antiquity",
        type: "Terristrial planet",
        description: "A cold, rocky world whose iron-rich dust gives its surface a reddish colour. smallest planet and closest to the Sun. Its crater-covered surface experiences extreme temperature changes.",
        diameter:"6,729km",
        distance:"1.52 AU",
        day:"24.7 hours",
        year:"687 Earth days",
        moons: 2,
        atmosphere:"Thin, mostly carbon dioxide",
        temperature:"Average about -65°C",
        feature:"Olympus Mons, a giant volcano1",
        funFact: "Mars has seasons and polar ice caps."
    },

    Jupiter: {
        nickname: "King of the planets",
        discovered: "Known since antiquity",
        type: "Gas giant",
        description: "The largest planet, with colourful cloud bands and enormous storms.e smallest planet and closest to the Sun. Its crater-covered surface experiences extreme temperature changes.",
        diameter:"142,984km",
        distance:"5.20 AU",
        day:"About 9.9 hours",
        year:"11.86 Earth years",
        moons: 101,
        atmosphere:"Mostly hydrogen and helium",
        temperature:"Cloud tops around -145°C",
        feature:"The Great Red Spot",
        funFact: "Jupiter has a powerful magnetic field and a faint ring system."

    },

    Saturn: {
        nickname: "The Ringed Planet",
        discovered: "Known since antiquity",
        type: "Gas giant",
        description: "A giant planet famous for its extensive rings made mainly of icy particles.",
        diameter:"12o,536km",
        distance:"9.58 AU",
        day:"About 10.7 hours ",
        year:"29.4 Earth years",
        moons: 285,
        atmosphere:"Mostly hydrogen and helium",
        temperature:"Cloud tops around -178°C",
        feature: "Its spectacular ring system",
        funFact: "Saturn is less dense than water on average."
    },

    Uranus: {
        nickname: "The Sideways planet",
        discovered: "1781 by William Herschel",
        type: "Ice gaint",
        description: "A blue-green ice giant that rotates with an extreme axial tilt.",
        diameter:"51,118km",
        distance:"19.2 AU",
        day:"About 17.2 hours",
        year:"84 Earth years",
        moons: 29,
        atmosphere:"Hydrogen, helium and methane",
        temperature:"Cloud tops around -224°C",
        feature:"Its  extreme axial tilt",
        funFact: "Uranus was the first planet discovered with a telescope."
    },

    Neptune: {
        nickname: "The Windy planet",
        discovered: "1846; mathematically predicted before observation",
        type: "Ice giant",
        description: "A distant blue world known for its very fast winds and cold atmosphere.",
        diameter:"49,528km",
        distance:"30.05 AU",
        day:" About 16.1 hours",
        year:"165 Earth years",
        moons: 2,
        atmosphere:"Hydrogen, helium and methane",
        temperature:"Cloud tops around -214°C",
        feature:"Extremly fast atmospheric winds",
        funFact: "Neptune's existence was predicted using mathematical calculations."
    },

    Pluto: {
        nickname: "The Dwarf planet",
        discovered: "1930 by Clyde Tombaugh",
        type: "Dwarft planet",
        description: "An icy world in the Kuiper Belt beyond Neptune.",
        diameter:"2,376km",
        distance:"39.5 AU average",
        day:" About 6.4 Earth days",
        year:"248 Earth years",
        moons: 5,
        atmosphere:"Thin, Mainly hydrogen is present",
        temperature:"Around -230°C",
        feature:"Sputnik Planitia, an icy basin",
        funFact: "Pluto was reclassified as a dwarf planet in 2006."
    },

    Eris: {
        nickname: "The Distant Dwarf",
        discovered: "January 5, 2005 (images taken in 2003)",
        type: "Dwart planet",
        description: "A remote, icy world beyond Neptune that helped change how we classify planets.",
        diameter:"Aporxx. 2,326km",
        distance:"About 68 AU",
        day:" 25.9 hours",
        year:"557 Earth years",
        moons: 1,
        atmosphere:"May temporarily form as frozen gases warm",
        temperature:"Around -217°C to -243°C",
        feature:"A highly elongated orbit",
        funFact: "Its discovery helped lead to Pluto's reclassification in 2006."
        
    },

    
    Sedna: {
        nickname: "The Frozen Frontier",
        discovered: "November 14, 2003",
        type: "Distant trans-Neptunian object",
        description: "Sedna is an extremely distant icy world with an unusually elongated orbit that takes it far beyond the known planetary region.",
        diameter:"About` 1,000km",
        distance:"About 500 AU",
        day:" Uncertain; estimates have varied",
        year:"About 11,400 Earth years",
        moons: "None confirmed",
        atmosphere:"No substantial atmosphere confirmed",
        temperature:"Extremely cold; generally below -240°C",
        feature:"An exceptionally elongated orbit",
        funFact: "At its farthest, Sedna travels roughly 900 times Earth's distance from the Sun."
        
    },

    
    Gonggong: {
        nickname: "The Red Wanderer",
        discovered: "2007",
        type: "Dwarf-planet candidate; scattered-disc object",
        description: "Gonggong is a distant, reddish world thought to contain a mixture of rock and ice.",
        diameter:"Aporxx. 1,230km",
        distance:"About 67 AU",
        day:" About 22.4 hours",
        year:"About 550 Earth years",
        moons: "1 Xiangliu",
        atmosphere:"No confirmed substantial atmosphere",
        temperature:"xtremely cold; roughly -220°C or colder",
        feature:"A reddish surface and distant orbit",
        funFact: "Its moon is named Xiangliu, a figure associated with Gonggong in Chinese mythology."
        
    },

    
    Quaoar: {
        nickname: "The Icy Kuiper World",
        discovered: "June 4, 2002",
        type: "Kuiper Belt object; dwarf-planet candidate",
        description: "Quaoar is an icy world beyond Neptune that has a small moon and a known ring system.",
        diameter:"Aporxx. 1,100km",
        distance:"About 43.5 AU",
        day:" 17.7 hours",
        year:"285 Earth years",
        moons: "1 Weywot",
        atmosphere:"No confirmed substantial atmosphere",
        temperature:"Around -220°C",
        feature:"A rare ring system for such a small distant object",
        funFact: "Quaoar's rings orbit unusually far from the object's surface."
        
    },

    
    Orcus: {
        nickname: "The Anti-Pluto",
        discovered: "February 17, 2004",
        type: "Kuiper Belt object; dwarf-planet candidate",
        description: "Orcus is an icy world whose orbit is similar to Pluto's, but positioned differently around the Sun.",
        diameter:"Aporxx. 910km",
        distance:"About 39 AU",
        day:" 10.5 hours",
        year:"245 Earth years",
        moons: 1,
        atmosphere:"No confirmed substantial atmosphere",
        temperature:"Around -220°C",
        feature:"Its orbital relationship with Neptune resembles Pluto's",
        funFact: "Orcus is sometimes nicknamed Anti-Pluto because of its orbital relationship with Neptune.`"
        
    },
     
    "2002 MS4": {
    nickname: "The Distant Ice World",
    discovered: "June 18, 2002",
    type: "Large trans-Neptunian object",
    description: "2002 MS4 is a large, distant object in the outer Solar System whose surface and physical properties are still being studied.",
    diameter: "About 930 km",
    distance: "About 42 AU on average",
    day: "Not precisely established",
    year: "About 270 Earth years",
    moons: "None confirmed",
    atmosphere: "Unknown; no substantial atmosphere confirmed",
    temperature: "Extremely cold, likely around -220°C",
    feature: "One of the larger known objects beyond Neptune",
    funFact: "Its official designation includes the year it was discovered: 2002."
}
    

    


    
};

function showPlanet(name) {
    const info = planets[name];

    document.getElementById("planetName").textContent =
    name.toUpperCase();

    document.getElementById("planetDescription").textContent =
    info.description;


    document.getElementById("planetMoons").textContent =
        "Nickname:" + info.nickname +
        "Discovered:" + info.discovered +
        "Type:" + info.type +
        "Diameter:" + info.diameter +
        "Distance:" + info.distance +
        "Day:" + info.day +
        "Year:" + info.year +
        "Moons:" + info.moons +
        "Atomosphere:" + info.atmosphere +
        "Temeprature:" + info.temperature +
        "Notable Feature:" + info.feature +
        "Fun Fact:" + info.funFact;


    }
