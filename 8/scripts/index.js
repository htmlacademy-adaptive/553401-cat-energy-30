var e=document.querySelector(".page-header__menu"),t=e.querySelector(".page-header__toggle"),n=document.querySelector(".contacts__map");e.classList.remove("page-header__menu--no-js");n.classList.remove("contacts__map--no-js");t.addEventListener("click",s=>{s.preventDefault(),e.classList.toggle("is-open"),t.classList.toggle("is-open")});
