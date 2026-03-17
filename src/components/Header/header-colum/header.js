document.addEventListener("DOMContentLoaded", () => {
  const languageTab = () => {
    const languagesItem = document.querySelectorAll(".languages__link");
    languagesItem.forEach((item) => {
      item.addEventListener("click", () => {
        if (!item.classList.contains("active")) {
          languagesItem.forEach((item) => {
            item.classList.remove("active");
          });
          item.classList.add("active");
        }
      });
    });
  };

  languageTab();

  const burger = () => {
    const burgerBtn = document.querySelector(".burger");
    const navMenu = document.querySelector(".catalog");
    burgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      burgerBtn.classList.toggle("active");
      if (burgerBtn.classList.contains("active")) {
      }
    });
  };

  burger();

  const sersh = () => {
    const sershMobBTN = document.querySelector(".header__search-btn");
    const wrapperSershMob = document.querySelector(".header__box-detals");

    sershMobBTN.addEventListener("click", () => {
      wrapperSershMob.classList.toggle("active");
    });
  };

  sersh();

  const burgerBobMenu = () => {
    const sershMobBTN = document.querySelector(".burger__mobile-btn");
    const meneWrapper = document.querySelector(".burger-mobile");
    const headerDesktop = document.querySelector(".header__desktop");
    const headerMobile = document.querySelector(".header__mobile");
    const burgerClouse = document.querySelector(".burger-mobile__image-clouse");
    const wrapperSershMob = document.querySelector(".header__box-detals");

    sershMobBTN.addEventListener("click", () => {
      meneWrapper.classList.add("active");
      if (meneWrapper.classList.contains("active")) {
        headerDesktop.classList.add("disabled");
        headerMobile.classList.add("disabled");
        document.body.classList.add("locked");
        wrapperSershMob.classList.remove("active");
      }
    });

    burgerClouse.addEventListener("click", () => {
      meneWrapper.classList.remove("active");
      if (!meneWrapper.classList.contains("active")) {
        headerDesktop.classList.remove("disabled");
        headerMobile.classList.remove("disabled");
        document.body.classList.remove("locked");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) {
        meneWrapper.classList.remove("active");
        headerDesktop.classList.remove("disabled");
        headerMobile.classList.remove("disabled");
        document.body.classList.remove("locked");
      }
    });
  };

  burgerBobMenu();

  const burgerMenuTable = () => {
    const sershMobBtn = document.querySelector(".burger-mobile__table");
    const arrowAnimation = document.querySelector(".burger-mobile__arrow");
    const menuItem = document.querySelector(".spoller__catalog-mobile");

    sershMobBtn.addEventListener("click", () => {
      if (!menuItem.classList.contains("active")) {
        arrowAnimation.classList.add("active");
        menuItem.classList.add("active");
      } else {
        arrowAnimation.classList.remove("active");
        menuItem.classList.remove("active");
      }
    });
  };

  burgerMenuTable();

 const mobileMenu = () => {
  const spollerTriggers = document.querySelectorAll(".js-title");

  const spollerTriggerDisable = (trigger) => {
    trigger.disabled = true;
    setTimeout(() => {
      trigger.disabled = false;
    }, 500);
  };

  const spollerOpen = (trigger, body) => {
    body.style.height = body.scrollHeight + "px";
    trigger.classList.add("open"); // добавляем класс open
  };

  const spollerClose = (trigger, body) => {
    body.style.height = body.scrollHeight + "px";
    setTimeout(() => {
      body.style.height = "0";
      trigger.classList.remove("open"); // убираем класс open
    }, 0);
  };

  const setHeightOnTransitionEnd = (body) => {
    body.addEventListener("transitionend", () => {
      if (body.style.height !== "0px") {
        body.style.height = "auto";
      }
    });
  };

  const spollerToggle = (trigger) => {
    const body = trigger.closest(".spoller__item").querySelector(".spoller__body");
    setHeightOnTransitionEnd(body);

    if (trigger.classList.contains("open")) {
      spollerClose(trigger, body);
    } else {
      spollerOpen(trigger, body);
    }

    spollerTriggerDisable(trigger);
  };

  spollerTriggers.forEach((trigger) => {
    // добавим стрелку, если её нет
    if (!trigger.querySelector(".arrow")) {
      const arrow = document.createElement("span");
      arrow.classList.add("arrow"); // CSS класс для стрелки
      trigger.appendChild(arrow);
    }

    trigger.addEventListener("click", (e) => {
      spollerToggle(e.currentTarget);
    });
  });
};

mobileMenu();


  
});
