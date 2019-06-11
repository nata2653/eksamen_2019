document.addEventListener("DOMContentLoaded", sidenVises);

let hankTekst = document.querySelector(".hank-txt");
let malingTekst = document.querySelector(".maling-txt");
let lerTekst = document.querySelector(".ler-txt");
let brandTekst = document.querySelector(".brand-txt");

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
