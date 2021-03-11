import './App.css';
import Header from './Components/Header/index';
import Layout from './Components/Layout/index';
import Footer from './Components/Footer/index';
import LayoutImage from './assets/bg3.jpg';

const  App = () => {
 
  return (
    <>
      <Header title="Времена года" descr="Описание времен года" />
      <Layout title="Осень" descr="рисунок"  colorBg ="white" urlBg={LayoutImage}  />
      <Layout title="Зима" descr="Какая чудная погода"  colorBg ="green" />
      <Layout title="Весна" descr="Все тает" colorBg ="#e2e2e2" urlBg={LayoutImage} />
      <Footer />
    </>
  );
}

export default App;
