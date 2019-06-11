$(function () {
    var header = $(".desktop-nav");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scroll")
        } else {
            header.removeClass("scroll")
        }
    })
});
document.addEventListener("DOMContentLoaded", start);
let kurser = {};
let footerSektion = [];

function start() {
    document.querySelector(".uil-bars").addEventListener("click", visMenu);

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu)
    }

    function showKurser() {
        footerSektion.forEach(footer => {
            console.log(footerSektion);
            document.querySelector(".open-hours").innerHTML = footerSektion[0].aabningstider;
            document.querySelector(".noget-andet").innerHTML = footerSektion[0].kontakt;
            document.querySelector(".facebook").href = footerSektion[0].facebook;
            document.querySelector(".instagram").href = footerSektion[0].instagram
        });
        console.log("Kurser");
        console.log(kurser);
        let dest = document.querySelector(".kurser-container");
        let temp = document.querySelector("template");
        kurser.forEach(kursus => {
            let klon = temp.cloneNode(!0).content;
            klon.querySelector(".beskrivelse1").innerHTML = kursus.kurser_beskrivelse_1;
            klon.querySelector(".billede p").innerHTML = kursus.kursus_beskrivelse_2;
            klon.querySelector(".pris").innerHTML = "Pris pr. deltager: " + kursus.kursus_pris;
            klon.querySelector(".billede").style.backgroundImage = `url('${kursus.kursus_billede.guid}')`;
            //            klon.querySelector(".tilmelding").innerHTML = kursus.content.rendered;
            dest.appendChild(klon)
        })
    }
    async function getJson() {
        console.log("hent data");
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/kurser";
        let footerUrl = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/footer";
        let jsonData = await fetch(url);
        let footerJson = await fetch(footerUrl);
        kurser = await jsonData.json();
        footerSektion = await footerJson.json();
        showKurser()
    }
    getJson()
}


function sidenVises() {
    console.log("Siden vises");
    document.querySelector(".hank").addEventListener("click", visTxtHank);
    document.querySelector(".maling").addEventListener("click", visTxtMaling);
    document.querySelector(".ler").addEventListener("click", visTxtLer);
    document.querySelector(".brand").addEventListener("click", visTxtBrand);
}

function visTxtHank() {
    if (hankTekst.classList.contains("hidden")) {
        hankTekst.classList.remove("hidden");
    } else {
        hankTekst.classList.add("hidden");
    }
}

function visTxtMaling() {
    if (malingTekst.classList.contains("hidden")) {
        malingTekst.classList.remove("hidden");
    } else {
        malingTekst.classList.add("hidden");
    }
}

function visTxtLer() {
    if (lerTekst.classList.contains("hidden")) {
        lerTekst.classList.remove("hidden");
    } else {
        lerTekst.classList.add("hidden");
    }
}

function visTxtBrand() {
    if (brandTekst.classList.contains("hidden")) {
        brandTekst.classList.remove("hidden");
    } else {
        brandTekst.classList.add("hidden");
    }
}
