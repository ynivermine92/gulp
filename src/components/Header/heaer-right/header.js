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
            const body = trigger
                .closest(".spoller__item")
                .querySelector(".spoller__body");
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

    const megaMenuHeight = () => {
        const catalog = document.querySelector(".catalog");

        if (catalog) {
            const setEqualHeight = () => {
                const categories = catalog.querySelectorAll(".catalog__category");
                let maxHeight = 0;

                categories.forEach((cat) => (cat.style.height = "auto"));

                categories.forEach((cat) => {
                    if (cat.offsetParent !== null) {
                        maxHeight = Math.max(maxHeight, cat.scrollHeight);
                    }
                });

                categories.forEach((cat) => {
                    if (cat.offsetParent !== null) {
                        cat.style.height = maxHeight + "px";
                    }
                });
            };

            if (catalog.classList.contains("active")) {
                setEqualHeight();
            }

            const observer = new MutationObserver(() => {
                if (catalog.classList.contains("active")) {
                    setEqualHeight();
                } else {
                    // Сброс при закрытии меню
                    catalog.querySelectorAll(".catalog__category").forEach((cat) => {
                        cat.style.height = "";
                    });
                }
            });

            observer.observe(catalog, {
                attributes: true,
                attributeFilter: ["class"],
            });
        }
    };

    megaMenuHeight();


    const catalogNav = () => {


        const level1 = document.querySelectorAll('.catalog__category-one .catalog__item');
        const level2 = document.querySelectorAll('.catalog__category-two .catalog__item');
        const level3 = document.querySelectorAll('.catalog__category-three .catalog__item');

        // helper
        const toggle = (elements, condition) => {
            elements.forEach(el => {
                el.classList.toggle('active', condition(el));
            });
        };

        // ===== 1 УРОВЕНЬ =====
        level1.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const { catId } = item.dataset;
                level1.forEach((item) => {
                    item.classList.remove('target')
                })


                if (item === e.target) {
                    item.classList.add('target')
                }
                toggle(level2, el => el.dataset.catId === catId);
                // сброс 3 уровня
                level3.forEach(el => el.classList.remove('active'));
            });
        });

        // ===== 2 УРОВЕНЬ =====
        level2.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const { catId, tag } = item.dataset;
                level2.forEach((item) => {
                    item.classList.remove('target')
                })
                if (item === e.target) {
                    item.classList.add('target')
                }
                toggle(level3, el =>
                    el.dataset.catId === catId &&
                    el.dataset.tag === tag
                );
            });
        });


    }
    catalogNav()



});
