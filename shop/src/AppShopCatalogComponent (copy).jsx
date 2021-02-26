import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './pages/main/header/components/HeaderComponent';
import Catalog from './pages/main/catalog/components/CatalogComponent';
import Footer from './pages/main/footer/components/FooterComponent';
import ElectricalGoodsAndLights from './pages/catalog/components/ElectricalGoodsAndLightsComponent';
import Garden from './pages/catalog/components/GardenComponent';
import HouseholdAppliancies from './pages/catalog/components/HouseholdApplianciesComponent';
import Kitchen from './pages/catalog/components/KitchenComponent';
import Decor from './pages/catalog/components/DecorComponent';
import Colors from './pages/catalog/components/ColorsComponent';
import HouseholdGoods from './pages/catalog/components/HouseholdGoodsComponent';
import DecorationMaterials from './pages/catalog/components/DecorationMaterialsComponent';
import SanitaryEngineering from './pages/catalog/components/SanitaryEngineeringComponent';
import About from './pages/about/components/AboutComponent';
import aboutUS from './assets/header/about-us.png';
import ConnectedBasket from './pages/basket/containers/ConnectedBasketComponent';
import createStore from './redux/store';
import serverUrl from './common/constants/urls';

const store = createStore();

export function AppShopCatalog() {
  const products = '/products';

  async function getProductsRequest(
  ) {
    try {
      const response = await axios.get(`${serverUrl}${products}`);
      const result = response.data;
      return result;
    } catch (error) {
      return (error.message);
    }
  }
  console.log(getProductsRequest());

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/">
          <Redirect to="/main-page" />
        </Route>
        <Route path="/main-page">
          <Header linkItem={<img src={aboutUS} alt="О нас" />} link="/about" disabled={false} />
          <Catalog />
          <Footer />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/basket">
          <ConnectedBasket />
        </Route>
        <Route path="/electrical-goods-and-lights">
          <ElectricalGoodsAndLights />
        </Route>
        <Route path="/garden">
          <Garden />
        </Route>
        <Route path="/household-appliancies">
          <HouseholdAppliancies />
        </Route>
        <Route path="/kitchen">
          <Kitchen />
        </Route>
        <Route path="/decor">
          <Decor />
        </Route>
        <Route path="/colors">
          <Colors />
        </Route>
        <Route path="/household-goods">
          <HouseholdGoods />
        </Route>
        <Route path="/decoration-materials">
          <DecorationMaterials />
        </Route>
        <Route path="/sanitary-engineering">
          <SanitaryEngineering />
        </Route>
      </Provider>
    </BrowserRouter>
  );
}

export default AppShopCatalog;
