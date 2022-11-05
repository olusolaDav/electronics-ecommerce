import './home.scss'
import CardModel from '../../components/card/Card';
import card from '../../static/card';
import Categogies from '../../components/categories/Categories';
import Header from '../../components/header/Header';
import HeaderCover from '../../components/hero/Header-cover';
import Title from '../../components/title/Title';
import Selling from '../../components/selling/Selling';
import ProductHeading from '../../components/product-heading/Product-heading';
import Testimony from '../../components/testimony/Testimony';
import Services from "../../components/services/Services";
import Partners from '../../components/partners/Partners';
import Footer from '../../components/footer/Footer';


function Home() {
  const condition = true

    return (
      <div className="home">
        <Header />

        <HeaderCover />

        <Title />
        <div className="category--container">
          {card.categories.map((product, key) => {
            return (
              <Categogies
                key={key}
                imgUrl={product.imgUrl}
                body={product.body}
                alt={product.alt}
              />
            );
          })}
        </div>

        <Selling />

        <ProductHeading />
        <div className="product--container">
          {card.products.map((d, key) => {
            return (
              <CardModel
                condition={condition}
                key={key}
                imgUrl={d.imgUrl}
                body={d.body}
                alt={d.alt}
                price={d.price}
                review={d.review}
              />
            );
          })}
        </div>

        <Testimony />

        <Services />

        <div className="partners--container">
          {card.partners.map((data, key) => {
            return <Partners imgUrl={data.imgUrl} key={key} alt={data.alt} />;
          })}
        </div>

      
      
            <Footer />
         
       
      </div>
    );
}

export default Home;