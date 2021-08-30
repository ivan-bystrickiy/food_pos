const ERR_500 = {
  code: 500,
  message: "Internal Server Error",
};

let ID = 1;

const categories = [
  {
    id: 1,
    name: "Hot Dishes",
  },
  {
    id: 2,
    name: "Cold Dishes",
  },
  {
    id: 3,
    name: "Soup",
  },
  {
    id: 4,
    name: "Grill",
  },
  {
    id: 5,
    name: "Appetizer",
  },
  {
    id: 6,
    name: "Dessert",
  },
];

const product = (name = "", price = 2, blows = 20, category = 1) => ({
  id: ID++,
  name: name,
  price: price,
  blows: blows,
  category_id: category,
});

const PRODUCTS = [
  product("Spicy seasoned seafood noodles", 2.29, 20, 1),
  product("Salted Pasta with mushroom sauce", 2.69, 11, 2),
  product("Spicy seasoned seafood noodles", 2.29, 20, 3),
  product("Spicy seasoned seafood noodles", 2.29, 20, 4),
  product("Spicy seasoned seafood noodles", 2.29, 20, 5),
  product("Spicy seasoned seafood noodles", 2.29, 20, 6),
  product("Spicy seasoned seafood noodles", 2.29, 20, 1),
  product("Spicy seasoned seafood noodles", 2.29, 20, 2),
  product("Spicy seasoned seafood noodles", 2.29, 20, 3),
  product("Spicy seasoned seafood noodles", 2.29, 20, 2),
  product("Spicy seasoned seafood noodles", 2.29, 20, 4),
  product("Spicy seasoned seafood noodles", 2.29, 20, 2),
  product("Spicy seasoned seafood noodles", 2.29, 20, 5),
  product("Spicy seasoned seafood noodles", 2.29, 20, 1),
  product("Spicy seasoned seafood noodles", 2.29, 20, 2),
].map((p, idx) => ({
  ...p,
  image: require(`../static/products/${
    idx + 1 > 9 ? idx + 1 : "0" + (idx + 1)
  }.png`).default,
}));

export const api = {
  getProducts() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (Math.random() > 0.01) {
          resolve({
            products: PRODUCTS,
          });
        }

        reject({
          error: ERR_500,
        });
      }, Math.floor(Math.random() * 3) * 1000);
    });
  },
  getCategories() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (Math.random() > 0.01) {
          resolve({
            categories: categories,
          });
        }

        reject({
          error: ERR_500,
        });
      }, Math.floor(Math.random() * 3) * 1000);
    });
  },
};
