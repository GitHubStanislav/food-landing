function cards() {
  // class for cards
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 37;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
             ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
          `;
      this.parent.append(element);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Menu "Fitness"',
    `Menu "Fitness" - is a new approach to cooking: more
               fresh vegetables and fruits. Product of active and healthy people. it
               brand new product with best price and high quality!`,
    9,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Menu 'Premium'",
    ` In the Premium menu, we use not only beautiful packaging design,
               but also the quality of the food. Red fish, seafood,
               fruits - restaurant menu without going to a restaurant!`,
    14,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    "Lenten menu",
    ` The Lenten menu is a careful selection of ingredients: full
               no animal products, almond milk,
               oats, coconut or buckwheat, the right amount of protein due to tofu
               and imported vegetarian steaks.`,
    21,
    ".menu .container",
    "menu__item"
  ).render();
}

export default cards;
