import React from 'react';
import ReactDOM from 'react-dom';
import ProductGrid from './components/ProductGrid';

//const  data = [{
//    productName : 'Movia Sauvignon Goriska Brda 2015',
//    price : '$22.16',
//    img: {
//        src : 'https://cdn1.southernglazers.com/assets/items/898231/images/front-full-bottle/small-(375x375)?IuxyWItud5EyxRl8jRNzEw3CFqCKXVyewBeNV1etZySQ_y_gXWQ9xxA2MaQt5oUk4Ia6BGqHZRfd2MRg5PDExGDrI_Us3gWQqpA',
//        title : 'Movia Sauvignon Goriska Brda 2015'
//    },
//    pdp_url : '/wines-sauvignon-blanc/movia-sauvignon-goriska-brda-2015/898231.html',
//    countryOrRegion : 'Slovenia',
//    productSize : '750 ml'
//},{
//    productName : 'Paul Dolan Vineyards Sauvignon Blanc Potter Valley',
//    price : '$14.01',
//    img: {
//        src : 'https://cdn1.southernglazers.com/assets/items/396560/images/front-full-bottle/small-(375x375)?IuxyWItud5EyxRl8jRNzEw3CFqCKXVyewBeNV1etZySQ_y_gXWQ9xxA2MaQt5oUk4Ia6BGqHZRfd2MRg5PDExGDrI_Us3gWQqpA',
//        title : 'Paul Dolan Vineyards Sauvignon Blanc Potter Valley'
//    },
//    pdp_url : '/wines-sauvignon-blanc/movia-sauvignon-goriska-brda-2015/898231.html',
//    countryOrRegion : 'USA',
//    productSize : '750 ml'
//},{
//    productName : 'Brancott Estate Sauvignon Blanc Chosen Rows Marlborough',
//    price : '$34.99',
//    img: {
//        src : 'https://cdn1.southernglazers.com/assets/items/391939/images/front-full-bottle/small-(375x375)?IuxyWItud5EyxRl8jRNzEw3CFqCKXVyewBeNV1etZySQ_y_gXWQ9xxA2MaQt5oUk4Ia6BGqHZRfd2MRg5PDExGDrI_Us3gWQqpA',
//        title : 'Brancott Estate Sauvignon Blanc Chosen Rows Marlborough'
//    },
//    pdp_url : '/wines-sauvignon-blanc/movia-sauvignon-goriska-brda-2015/898231.html',
//    countryOrRegion : 'New Zealand',
//    productSize : '750 ml'
//},{
//    productName : 'Astica Sauvignon Blanc Cuyo',
//    price : '$4.99',
//    img: {
//        src : 'https://cdn1.southernglazers.com/assets/items/152865/images/front-full-bottle/small-(375x375)?IuxyWItud5EyxRl8jRNzEw3CFqCKXVyewBeNV1etZySQ_y_gXWQ9xxA2MaQt5oUk4Ia6BGqHZRfd2MRg5PDExGDrI_Us3gWQqpA',
//        title : 'Astica Sauvignon Blanc Cuyo'
//    },
//    pdp_url : '/wines-sauvignon-blanc/movia-sauvignon-goriska-brda-2015/898231.html',
//    countryOrRegion : 'Argentina',
//    productSize : '750 ml'
//}];

//********************************************************************************************************************************
const data = [
  {
    imageurl:
      "https://images-na.ssl-images-amazon.com/images/I/71XzSPb%2Bt1L._UL1500_.jpg",
    id: "1",
    name: "Pencil",
    price: 1.84,
    description:
      "Perfect for those who !",

  },
  {
    imageurl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1667077/2018/2/8/11518090736106-Roadster-Men-Black-Shadow-Checks-Casual-Shirt-1211518090735845-1.jpg",
    id: "2",
    name: "Housing",
    price: 0.96,
    description:
      "Housing provided for out",

  },
  {
    imageurl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg",
    id: "3",
    name: "Computer Rental",
    price: 300.04,
    description: "Don't have a computer",

  },
  {
    imageurl:
      "https://images-na.ssl-images-amazon.com/images/I/71XzSPb%2Bt1L._UL1500_.jpg",
    id: "4",
    name: "Coffee",
    price: 2.8,
    description: "Wake up!",

  },
  {
    imageurl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1265389/2018/2/7/11517995810352-Highlander-Black-Slim-Fit-Casual-Shirt-1061517995810069-1.jpg",
    id: "5",
    name: "Snacks",
    price: 0.8,
    description: "Free snacks!",

  },
  {
    imageurl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg",
    id: "6",
    name: "Rubber Duckies",
    price: 3.5,
    description: "To help you solve your ",

  },
  {
    imageurl:
      "https://images-na.ssl-images-amazon.com/images/I/71XzSPb%2Bt1L._UL1500_.jpg",
    id: "7",
    name: "Fidget Spinner",
    price: 21.99,
    description: "Because we like to pretend ",

  },
  {
    imageurl:
      "https://images-na.ssl-images-amazon.com/images/I/71XzSPb%2Bt1L._UL1500_.jpg",
    id: "8",
    name: "Sticker Set",
    price: 14.99,
    description: "To prove to other devs",

  }
];
//********************************************************************************************************************************
//export default products;


/*class ProductTile extends React.Component{
    render(){
        return (<div className="product-tile">
                    <div class="product-image"><img src={this.props.product.imgSrc} alt={this.props.product.imgAlt}/></div>
                    <div class="tile-body">
                        <h3>{this.props.product.productName}</h3>
                        <div class="product-price-container">{this.props.product.price}</div>
                    </div>
                </div>);
    }
}*/

/*class ProductTile extends React.Component{
	 componentDidMount() {
		    fetch("https://dev08-apacestore-pandora.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Search-ShowJson")
		      .then(res => res.json())
		      .then(
		        (result) => {
		          this.setState({
		            isLoaded: true,
		            data: result.data
		          });
		        },
		        // Note: it's important to handle errors here
		        // instead of a catch() block so that we don't swallow
		        // exceptions from actual bugs in components.
		        (error) => {
		          this.setState({
		            isLoaded: true,
		            error
		          });
		        }
		      )
		  }

    render(){
        return (<ProductGrid products={data}/>,document.getElementById('react-app-plp'));
    }
}*/
//export default data; 
ReactDOM.render(<ProductGrid products={data} />,document.getElementById('react-app-plp'));