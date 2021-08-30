import React, { useEffect, useState } from "react";

import BaseTemplate from "../_templates/base/BaseTemplate";
import { Cart } from "../../blocks/cart/Cart";
import { Checkout } from "../../blocks/checkout/Checkout";
import { Input } from "../../ui/input/Input";
import { ProductCard } from "../../blocks/product-card/ProductCard";
import { Select } from "../../ui/select/Select";
import { Tabs } from "../../ui/tabs/Tabs";
import { api } from "../../../api";

const { TabItem } = Tabs;

function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [products, setProducts] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [categories, setCategories] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [search, setSearch] = useState("");
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false)

  const [deliveryType, setDeliveryType] = useState("dinein");

  useEffect(() => {
    // Начинаю загрузку
    setProducts({ ...products, loading: true });
    setCategories({ ...categories, loading: true });

    Promise.all([api.getCategories(), api.getProducts()])
      .then((res) => {
        // Записываю список продуктов в стейт
        setCategories({
          ...categories,
          items: res[0].categories,
          loading: false,
        });

        // Записываю список продуктов в стейт
        setProducts({
          ...products,
          items: res[1].products,
          loading: false,
        });
      })
      .catch((err) => {
        // Записываю ошибку в стейт
        setCategories({
          ...categories,
          error: err[0].error,
          loading: false,
        });

        // Записываю ошибку в стейт
        setProducts({
          ...products,
          error: err[1].error,
          loading: false,
        });
      });
  }, []);

  const filteredProducts = products.items
    .filter((product) => {
      return product.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
    })
    .filter((product) => {
      return product.category_id === categories.items[activeTab].id
    })

  return (
    <BaseTemplate>
      <div className="p-24">
        {/* Title & Search */}
        <div className="row mb-3">
          <div className="col-6">
            <h1 className="h1 mb-1">Jaegar Resto</h1>
            <div className="text-white2">
              {new Date().toLocaleDateString("US-us", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div className="col-6">
            <Input
              placeholder="Search for food, coffe, etc.."
              className="ml-auto w-max-content"
              icon="Home"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {/* Tabs */}
        <Tabs
          className="mb-3"
          value={activeTab}
          onChange={(idx) => setActiveTab(idx)}
        >
          {categories.items.map((c) => (
            <TabItem label={c.name} />
          ))}
        </Tabs>
        {/* Products */}
        <div className="row mb-5">
          <div className="col-6">Products</div>
          <div className="col-6">
            <Select
              defaultValue={deliveryType}
              onChange={(newValue) => setDeliveryType(newValue)}
              className="ml-auto"
              style={{
                width: 120,
                maxWidth: "100%",
              }}
            >
              <Select.Option label="Dine In" value="dinein" />
              <Select.Option label="To Go" value="togo" />
              <Select.Option label="Delivery" value="delivery" />
            </Select>
          </div>
        </div>
        <div className="row">
          {products.loading ? (
            <div>Loading...</div>
          ) : products.error ? (
            <div>{products.error.message}</div>
          ) : (
            filteredProducts.map((product) => (
              <div className="col-12 col-md-4 col-xl-3">
                <ProductCard
                  data={product}
                  key={product.id}
                  deliveryType={deliveryType}
                />
              </div>
            ))
          )}
        </div>
      </div>
      <Cart onShowCheckout={() => setIsCheckoutVisible(true)} />
      <Checkout visible={isCheckoutVisible} hide={() => setIsCheckoutVisible(false)} />
    </BaseTemplate>
  );
}

export default HomePage;
