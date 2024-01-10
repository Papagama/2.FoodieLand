const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav__btn");
const navBtnImg = document.querySelector("#nav__btn__img");


navBtn.onclick = () =>
{
    if (nav.classList.toggle('open'))
    {
        navBtnImg.src = "../images/cross.svg";
    }
    else
    {
        navBtnImg.src = "../images/burger.svg"
    }

}