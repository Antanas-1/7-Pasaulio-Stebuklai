document.addEventListener("DOMContentLoaded", function() {
    const wonders = [
        {
            name: "Cheopso piramidė",
            description: "Cheopso piramidė yra viena iš seniausių pasaulio stebuklų ir viena iš tikrųjų išlikusių. Ji buvo pastatyta apie 2580 m. pr. Kr., kad būtų kapavietė faraonui Cheopsui. Piramidė buvo 146 metrų aukščio ir laikyta didžiausia piramidė Egipte.",
            imageIndex: 0
        },
        {
            name: "Halikarnaso mauzoliejus",
            description: "Halikarnaso mauzoliejus buvo kapavietė, pastatyta apie 350 m. pr. Kr. persų karaliui Mausolui ir jo žmonai Artemisiai. Jo architektūra buvo originali, su nuostabiomis skulptūromis ir aukso elementais. Tai buvo viena iš septynių pasaulio stebuklų.",
            imageIndex: 1
        },
        {
            name: "Aleksandrijos švyturys",
            description: "Aleksandrijos švyturys, pastatytas apie 280 m. pr. Kr. Aleksandrijos uoste, buvo vienas aukščiausių ir pirmųjų švyturių senovės pasaulyje. Jo aukštis siekė apie 130 metrų, ir jis padėjo laivams saugiai pasiekti uostą.",
            imageIndex: 2
        },
        {
            name: "Dzeuso skulptūra",
            description: "Dzeuso skulptūra, sukurta graikų skulptoriaus Fidijo apie 435 m. pr. Kr. Olimpijos šventykloje, buvo 12 metrų aukščio ir vaizdavo Dzeusą – senovės Graikijos dievą. Skulptūra buvo sukurta iš aukso ir dramblio kaulo.",
            imageIndex: 3
        },
        {
            name: "Kabantieji Babilono sodai",
            description: "Kabantieji Babilono sodai buvo pastatyti apie 600 m. pr. Kr. Babilone, užsakytas karaliaus Nabuchodonosoro II. Tai buvo inžinerinis stebuklas, kuris atrodė tarsi kabantys sodai, pripildyti augalų ir medžių.",
            imageIndex: 4
        },
        {
            name: "Rodo kolosas",
            description: "Rodo kolosas buvo milžiniška bronzinė skulptūra, vaizduojanti Saulės dievą Heliją. Skulptūra stovėjo prie Rodo uosto ir buvo apie 33 metrų aukščio. Po žemės drebėjimo 226 m. pr. Kr. kolosas sugriuvo.",
            imageIndex: 5
        },
        {
            name: "Artemidės šventykla",
            description: "Artemidės šventykla buvo viena iš didžiausių šventyklų senovės pasaulyje. Ji buvo pastatyta apie 550 m. pr. Kr. Efeze ir skirta graikų deivei Artemidei. Šventykla buvo papuošta aukso skulptūromis ir buvo laikoma stebuklu.",
            imageIndex: 6
        }
    ];

    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Gizeh_Cheops_BW_1.jpg/250px-Gizeh_Cheops_BW_1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Halikarnaso_mauzoliejus_%28prof._Adlerio_rekonstrukcija_1908_m.%29.jpg",
       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/A_coruna_torre_de_hercules_sunset_edit.jpg/220px-A_coruna_torre_de_hercules_sunset_edit.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Statue_of_Zeus.jpg/300px-Statue_of_Zeus.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/250px-Hanging_Gardens_of_Babylon.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Colosse_de_Rhodes_%28Barclay%29.jpg/200px-Colosse_de_Rhodes_%28Barclay%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Temple_of_Artemis.jpg/300px-Temple_of_Artemis.jpg",
    ];

    let currentIndex = 0;

    function displayWonder(index) {
        const wonderCard = document.getElementById("wonder-container");
        const wonder = wonders[index];

        wonderCard.innerHTML = `
            <img src="${images[wonder.imageIndex]}" alt="${wonder.name}">
            <h3>${wonder.name}</h3>
            <p>${wonder.description}</p>
        `;
    }

    displayWonder(currentIndex);

    document.getElementById("next-btn").addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= wonders.length) currentIndex = 0;
        displayWonder(currentIndex);
    });

    document.getElementById("prev-btn").addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = wonders.length - 1;
        displayWonder(currentIndex);
    });
});
