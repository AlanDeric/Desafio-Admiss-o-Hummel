import './App.css';
import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './Integration/api'
import imagens from './images/Camiseta.jpg'
import cor1 from './images/Camiseta-branca.jpg'
import cor2 from './images/camiseta-coral.jpg'
import cor3 from './images/camisa_preto_1.jpg'
import foto2 from'./images/camisa-lado.jpg'
import meia from './images/football-sock2.jpg'
import swal from 'sweetalert'





  // async componentDidMount(){
  //   const response = await prod.get('')
  //   console.log(response.data)

  // }

  export default class SimpleSlider extends Component {
  render(){


    const carousel  = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000
    };
    const mostrarAlerta =() =>{
      swal({
        position: 'top-end',
        icon: 'success',
        title: 'Item adicionado a sacola',
        showConfirmButton: false,
        timer: 2000
      })
    }

    return(
      <div>
      <header className="Hummel-Header">
        <div className="Hummel-QuickReplacement">
          <p><svg xmlns="http://www.w3.org/2000/svg" width="18.504" height="16.963" viewBox="0 0 18.504 16.963"><g transform="translate(0 -21.322)"><g transform="translate(0 21.322)"><g transform="translate(0 0)"><path className="a" d="M156.271,23.635h-4.315l1-1a.771.771,0,1,0-1.09-1.09l-2.313,2.313c-.018.018-.035.037-.051.056l-.021.027c-.008.011-.017.022-.024.033s-.014.022-.02.034l-.018.031c-.006.011-.011.023-.017.035s-.011.022-.016.033-.008.023-.013.034-.009.024-.013.037-.006.023-.009.035-.007.025-.009.038,0,.027-.006.041,0,.022,0,.034,0,.05,0,.075h0q0,.038,0,.075c0,.011,0,.023,0,.034s0,.027.006.041.006.026.009.038.005.023.009.035.008.025.013.037.008.023.013.034.01.022.016.034.011.023.017.035.012.021.018.031.013.023.02.034.016.022.024.033l.02.027q.024.029.051.057l2.313,2.313a.771.771,0,1,0,1.09-1.09l-1-1h4.307a4.622,4.622,0,0,1,4.626,4.626,4.184,4.184,0,0,1-1.233,2.965.771.771,0,0,0,1.091,1.09A5.725,5.725,0,0,0,162.43,29.8,6.164,6.164,0,0,0,156.271,23.635Z" transform="translate(-143.926 -21.322)"></path><path className="a" d="M12.953,147.679c.008-.011.017-.022.024-.033s.014-.022.02-.034.013-.02.018-.031.011-.023.017-.035.011-.022.015-.033.009-.023.013-.035.009-.024.013-.037.006-.023.009-.035.007-.025.009-.038,0-.027.006-.041,0-.022,0-.034a.776.776,0,0,0,0-.152c0-.011,0-.022,0-.034s0-.027-.006-.041-.006-.025-.009-.038-.005-.023-.009-.035-.008-.024-.013-.037-.008-.023-.013-.035-.01-.022-.015-.033-.011-.024-.017-.035L13,146.824c-.007-.011-.013-.023-.02-.034s-.016-.022-.024-.033l-.021-.028q-.024-.029-.05-.056h0l-2.313-2.313a.771.771,0,0,0-1.09,1.09l1,1H6.168a4.622,4.622,0,0,1-4.626-4.626,4.184,4.184,0,0,1,1.233-2.965.771.771,0,0,0-1.091-1.09A5.725,5.725,0,0,0,0,141.821a6.164,6.164,0,0,0,6.16,6.168h4.315l-1,1a.771.771,0,1,0,1.09,1.09l2.313-2.313h0c.018-.018.035-.037.051-.056Z" transform="translate(0 -133.339)"></path></g></g></g></svg>
              troca grátis com segurança e tranquilidade
          </p>
        </div>

        <div className="content">
            <div className="Mobile-sandwich">
                <span className="material-icons">list</span>
            </div>
            <div className="Logo">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="179.748" height="33.493" viewBox="0 0 179.748 33.493"><g transform="translate(-374.844 -373.276)"><g transform="translate(374.844 373.276)"><path className="a" d="M422.746,379.77a3.247,3.247,0,1,0-3.249-3.25A3.252,3.252,0,0,0,422.746,379.77Z" transform="translate(-400.686 -373.276)"></path><path className="a" d="M412.23,419.282c-.217.331-.7,1.065-1.019,1.614l6.738,6.741,6.74-6.741c-.317-.549-.8-1.283-1.017-1.614L417.949,425Z" transform="translate(-395.891 -399.901)"></path><path className="a" d="M416.194,406.571l4.643,4.647,4.636-4.636-4.64-6.564Z" transform="translate(-398.775 -388.752)"></path><path className="a" d="M416.082,434.869l-7.643-7.645a8.1,8.1,0,0,0,7.615,10.766,8.1,8.1,0,0,0,7.676-10.766Z" transform="translate(-394.025 -404.498)"></path><path className="a" d="M447.122,376.963c-6.82-4.4-11.95,3.341-17.03,7.094a37.139,37.139,0,0,0,3.828,5.387c1.979,2.181,3.639,3.068,6.4,3.02a8.431,8.431,0,0,0,6.3-3.288,8.188,8.188,0,0,0,1.554-5.12H434.058c2.152-1.692,4.487-4.24,6.936-5.386a5.1,5.1,0,0,1,5.99,1.86,6.146,6.146,0,0,1,1.188,3.526l2.756,0A8.339,8.339,0,0,0,447.122,376.963Z" transform="translate(-406.818 -374.65)"></path><path className="a" d="M391.86,389.444a37.16,37.16,0,0,0,3.828-5.387c-5.08-3.753-10.211-11.49-17.03-7.094a8.339,8.339,0,0,0-3.806,7.092l2.756,0a6.146,6.146,0,0,1,1.188-3.526,5.1,5.1,0,0,1,5.99-1.86c2.448,1.146,4.784,3.694,6.936,5.386H377.608a8.19,8.19,0,0,0,1.554,5.12,8.431,8.431,0,0,0,6.3,3.288C388.221,392.512,389.882,391.625,391.86,389.444Z" transform="translate(-374.844 -374.65)"></path></g><path className="a" d="M588.412,389.97v14.7a2.5,2.5,0,0,1-2.64,2.476h-1.441a2.5,2.5,0,0,1-2.64-2.476V391.738c0-.884-.744-1.061-1.277-1.061h-.3c-.516,0-1.264.177-1.264,1.067v12.928a2.5,2.5,0,0,1-2.64,2.476H574.7a2.5,2.5,0,0,1-2.571-2.475V391.738c0-.884-.761-1.061-1.273-1.061h-.313c-.536,0-1.269.177-1.269,1.061v12.934a2.5,2.5,0,0,1-2.639,2.475h-1.441a2.5,2.5,0,0,1-2.639-2.475v-14.7c0-3.042,1.332-5.489,5.937-5.489h14.358C587.047,384.48,588.412,386.927,588.412,389.97Zm17.871,8.789h-9.277s0,1.236,0,1.407a.961.961,0,0,0,.922,1.067c.4,0,11.341.024,11.341.024a2.343,2.343,0,0,1,2.476,2.314v1.263a2.343,2.343,0,0,1-2.476,2.314H595.776c-2.513,0-5.49-1.168-5.49-5.2V389.685c0-3.949,2.907-5.2,5.49-5.2h10.508c2.513,0,5.489,1.168,5.489,5.2v3.87C611.773,397.591,608.8,398.759,606.283,398.759Zm-.855-7.009v-.261a1.043,1.043,0,0,0-1.165-1.119h-6.091a1.043,1.043,0,0,0-1.165,1.119v1.38h7.275A1.037,1.037,0,0,0,605.428,391.75Zm12.3-15.356h-1.441a2.5,2.5,0,0,0-2.64,2.475v25.8a2.5,2.5,0,0,0,2.64,2.476h1.441a2.5,2.5,0,0,0,2.64-2.476v-25.8A2.5,2.5,0,0,0,617.726,376.394Zm-87.421,8.087h-1.441a2.5,2.5,0,0,0-2.639,2.475v12.83a1.136,1.136,0,0,1-1.277,1.165h-5.091a1.131,1.131,0,0,1-1.276-1.165v-12.83a2.5,2.5,0,0,0-2.64-2.475H514.5a2.5,2.5,0,0,0-2.64,2.475v14.7c0,2.513,1.332,5.489,5.937,5.489h9.209c4.6,0,5.937-2.976,5.937-5.489v-14.7A2.5,2.5,0,0,0,530.305,384.481Zm24.809,0H540.756c-4.6,0-5.937,2.447-5.937,5.489v14.7a2.5,2.5,0,0,0,2.64,2.475H538.9a2.5,2.5,0,0,0,2.64-2.475V391.738c0-.884.733-1.061,1.269-1.061h.314c.512,0,1.273.177,1.273,1.061v12.934a2.5,2.5,0,0,0,2.571,2.475h1.512a2.5,2.5,0,0,0,2.64-2.476V391.744c0-.89.748-1.067,1.265-1.067h.3c.533,0,1.277.177,1.277,1.061v12.934a2.5,2.5,0,0,0,2.64,2.476h1.441a2.5,2.5,0,0,0,2.64-2.476v-14.7C560.678,386.927,559.314,384.48,555.115,384.48Zm-51.071,0h-8.829v-5.611a2.5,2.5,0,0,0-2.639-2.475h-1.441a2.5,2.5,0,0,0-2.64,2.475v25.8a2.5,2.5,0,0,0,2.64,2.476h1.441a2.5,2.5,0,0,0,2.639-2.476V390.785h6.77a1.122,1.122,0,0,1,1.276,1.165v12.722a2.5,2.5,0,0,0,2.64,2.476h1.441a2.5,2.5,0,0,0,2.64-2.476v-14.7C509.981,387.457,508.649,384.481,504.044,384.481Z" transform="translate(-65.774 -1.804)"></path></g></svg>
              </a>
            </div>
            <nav className="Nav-items">
                <ul className="main-menu-all-items">
                    <li className="main-menu-item">
                       <a href="/roupas/Masculino?map=c,specificationFilter_26">masculino</a>
                    </li>
                    <li className="main-menu-item">
                       <a href="/roupas/Feminino?map=c,specificationFilter_26">feminino</a>
                    </li>
                    <li className="main-menu-item"> 
                        <a href="/roupas/Infantil?map=c,specificationFilter_26">infantil</a>
                    </li>
                    <li className="main-menu-item">
                        <a href="/sale">Sale</a>
                    </li>
                </ul>
                <div className="Search-handler">
                  <div className="Search-input">
                    <div className="Search-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15.69" height="16.268" viewBox="0 0 15.69 16.268"><defs></defs><path className="a" d="M9.322,9.965a5.655,5.655,0,1,1,1.993-4.307A5.632,5.632,0,0,1,9.322,9.965l4.868,4.8Z" transform="translate(0.75 0.75)"/></svg>
                    </div>
                    <input className="Search"placeholder="Digite sua busca aqui"></input>
                  </div>
                </div>
                <div className="ProfileHandler">
                  <div className="Profile"></div>
                      <div className="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.251" height="32.1" viewBox="0 0 31.251 32.1"><g transform="translate(-48.55 3)"><path d="M71.8,25.221,70.126,6.349a.717.717,0,0,0-.723-.657h-3.53a5.7,5.7,0,0,0-11.4,0h-3.53a.726.726,0,0,0-.723.657L48.55,25.221v.066A4.088,4.088,0,0,0,52.857,29.1H67.494A4.088,4.088,0,0,0,71.8,25.287ZM60.176,1.446a4.258,4.258,0,0,1,4.253,4.247H55.923A4.258,4.258,0,0,1,60.176,1.446Zm7.319,26.2H52.857A2.657,2.657,0,0,1,50,25.311L51.61,7.138h2.867V9.674a.723.723,0,0,0,1.446,0V7.138h8.505V9.674a.723.723,0,0,0,1.446,0V7.138h2.867l1.614,18.179A2.657,2.657,0,0,1,67.494,27.648Z"></path><circle cx="9" cy="9" r="9" transform="translate(61.801 -3)"></circle></g></svg>
                      </div>
                </div>
            </nav>
        </div>
      </header>
      <section>

              <div className="content-ModelProd">
                <div className="content-product">
                  <div className="Product-inner">
                      <a href="/">
                        <img className="T-shirt" src={imagens}></img>
                      </a>
                      <div className="product-miniatur">
                        <img className="shirt-side" src={foto2}></img>
                      </div>
                  </div>
                  
                </div>
                  <div className="content-right-product">
                    <div className="Product-container">
                    <div className="title-breadcrumb">              
                      <ul>
                        <li> Hummel</li>
                        <li> Roupas</li>
                        <li> Camisetas</li>
                      </ul>
                    </div>
                    <div className="content-name-product">
                        <div className="fn productName  Camiseta-Hummel-Brick-Infantil ">Camiseta Hummel Brick Infantil</div>
                    </div>
                    <div className="Sku-content">
                        <div className="SKUID"> SKU BR000081-M_6</div>
                    </div>
                    <div className="content-price">
                      <span id="Fullprice"> R$ 64,90</span>
                      <span id="Finalprice"> R$ 29,90</span>
                    </div>
                    <div className="Size-variation">
                      <div className="Size-handler">Tamanho
                      <ul className="Size-content">
                        <li>6</li>
                        <li>8</li>
                        <li>10</li>
                        <li>12</li>
                        <li>14</li>
                      </ul>
                      </div>
                    </div>
                    <div className="sku-options">
                      <div className="sku-colors">Cores
                        <ul className="render-skus">
                          <li>
                              <a href="/">
                                <img src={cor1}></img>
                              </a>
                          </li>
                          <li>
                            <a href="/">
                                <img src={cor2}></img>
                              </a>
                          </li>

                          <li>
                            <a href="/">
                                <img src={cor3}></img>
                              </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="buy-handler">
                      <button onClick={mostrarAlerta} className="buy-content">Adicionar a sacola</button>
                    </div>
                    <div className="description-handler">
                      <div className="description-content">
                        <h3>Descrição</h3>
                        <div className="product-description">A camiseta infantil Brick, tem modelagem adequada para as crianças um visual despojado e o icônico logo da hummel na parte frontal. É uma camiseta causal, super confortável e com um design clássico.... </div>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
            </section>
      <section className="description-complete">
        <div content-description-prod>
          <h2>Descrição</h2>
          <div className="product-full-description">A camiseta infantil Brick, tem modelagem adequada para as crianças um visual despojado e o icônico logo da hummel na parte frontal. É uma camiseta causal, super confortável e com um design clássico.</div>
          <div className="product-especifications">Características</div>
          <table className="product-table-especs">
            <tbody>
              <tr>
                <th>Gênero</th>
                <td>infantil</td>
              </tr>
              <tr>
                <th>Cor</th>
                <td>Cinza</td>
              </tr>
              <tr>
                <th>Características</th>
                <td>• modelagem infantil</td>
                <td>• extremamente confortável</td>
                <td>• design clássico</td>
              </tr>
              <tr>
                <th>Composição</th>
                <td>88% Algodão, 12% Poliéster</td>
              </tr>
              <tr>
                <th>Guia de Tamanhos</th>
                <td>
                  <table className="size-table">
                    <tbody className="body-size-table">
                    <th className="head-table">
                      <td></td>
                      <td>Comprimento</td>
                      <td>Torax</td>
                      <td>Cintura</td>
                      <td>Quadril</td>
                    </th>
                    <th>
                     
                      <td>P</td>
                      <td>178</td>
                      <td>94</td>
                      <td>82</td>
                      <td>97</td>
                    </th>
                    <th>
                    
                      <td>M</td>
                      <td>182</td>
                      <td>186</td>
                      <td>190</td>
                      <td>194</td>
                    </th>
                    <th>
                    
                      <td>G</td>
                      <td>186</td>
                      <td>104</td>
                      <td>92</td>
                      <td>107</td>
                    </th>
                    <th>
                    
                      <td>GG</td>
                      <td>190</td>
                      <td>110</td>
                      <td>98</td>
                      <td>113</td>
                    </th>
                    <th>
                     
                      <td>EGG</td>
                      <td>194</td>
                      <td>116</td>
                      <td>104</td>
                      <td>119</td>
                    </th>
                    <th>
                     
                      <td>EEGG</td>
                      <td>194</td>
                      <td>122</td>
                      <td>110</td>
                      <td>125</td>
                    </th>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      <section className="Slider-section">
        <div>
        <h1>Você pode gostar</h1>
      <div className="Carousel">
              <Slider {...carousel}>
      <div className="Slider-handler">
            <h3>
              <img src={imagens}></img>
            </h3>
          </div>
          <div className="Slider-handler">
            <h3>
            <img src={cor1}></img>
            </h3>
          </div>
          <div className="Slider-handler">
            <h3>
            <img src={meia}></img>
            </h3>
          </div>
          <div className="Slider-handler">
            <h3>
            <img src={cor3}></img>
            </h3>
          </div>
          <div className="Slider-handler">
            <h3><img src={cor2}></img></h3>
          </div>
          <div className="Slider-handler">
            <h3><img src={imagens}></img></h3>
          </div>
      </Slider>
      </div>
      </div>
      </section>
    </div>
    );
  }
};
