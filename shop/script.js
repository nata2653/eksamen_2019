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
let info = [];
let shop = [];
let footerSektion = [];
document.addEventListener("DOMContentLoaded", start);
let urlParams = new URLSearchParams(window.location.search);
let sejt = urlParams.get('sejt');
document.addEventListener("DOMContentLoaded", start);

function fadeIn() {
    document.querySelector(".se_mere").style.display = "block";
    document.querySelector(".se_mere").style.zIndex = "99"
}

function fadeOut() {
    document.querySelector(".se_mere").style.display = "none"
}

function start() {
    console.log(sejt);
    console.log("start");
    document.querySelector(".uil-bars").addEventListener("click", visMenu);

    function visMenu() {
        console.log("nej");
        document.querySelector(".mobile-nav").classList.toggle("hide-mobile-nav");
        document.querySelector(".uil").classList.toggle("fa-bars");
        document.querySelector(".uil").classList.toggle("uil-multiply");
        document.querySelector(".uil-multiply").addEventListener("click", visMenu)
    }

    function showShop() {
        console.log("shop");
        console.log(shop);
        let dest = document.querySelector(".produkter-container");
        let temp = document.querySelector("template");
        footerSektion.forEach(footer => {
            console.log(footerSektion);
            document.querySelector(".open-hours").innerHTML = footerSektion[0].aabningstider;
            document.querySelector(".noget-andet").innerHTML = footerSektion[0].kontakt;
            document.querySelector(".facebook").href = footerSektion[0].facebook;
            document.querySelector(".instagram").href = footerSektion[0].instagram
        });
        shop.forEach(produkt => {
            let klon = temp.cloneNode(!0).content;
            klon.querySelector(".produkt h1").innerHTML = produkt.title.rendered;
            klon.querySelector(".produkt img").src = produkt.billede.guid;
            klon.querySelector(".pris").innerHTML = produkt.pris + (" ,-");
            dest.appendChild(klon);
            dest.lastElementChild.addEventListener("click", () => {
                location.href = "produkt.html?titel=" + produkt.title.rendered
            })
        })
    }

    function showInfo() {
        console.log(info);
        document.querySelector(".shop_tekst p").innerHTML = info[0].content.rendered
    }
    async function getJson() {
        console.log("hent data");
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/produkter";
        let footerUrl = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/footer";
        let jsonData = await fetch(url);
        let footerJson = await fetch(footerUrl);
        shop = await jsonData.json();
        footerSektion = await footerJson.json();
        showShop()
    }
    async function getInfo() {
        console.log("hent info");
        let url = "https://janhol.dk/kea/keramiker/wordpress/wp-json/wp/v2/shop_beskrivelse";
        let jsonData = await fetch(url);
        info = await jsonData.json();
        showInfo()
    }
    getInfo();
    getJson()
}
