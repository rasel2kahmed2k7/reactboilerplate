import React,{Component} from 'react';
import LeftMenue from './components/includes/leftMenue';
import Header from './components/includes/header';
import FooterSection from './components/includes/FooterSection';
import Footer from './components/includes/Footer';

class App extends Component{
  render(){
    return (
      <div className="App">
          <div className="wrapper fixed__footer">
       

        <Header/>


        <div className="body__overlay"></div>
        <div className="offset__wrapper">
            <div className="search__area">
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-12" >
                            <div className="search__inner">
                                <form action="#" method="get">
                                    <input placeholder="Search here... " type="text"/>
                                    <button type="submit"></button>
                                </form>
                                <div className="search__close__btn">
                                    <span className="search__close__btn_icon"><i className="zmdi zmdi-close"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offsetmenu">
                <div className="offsetmenu__inner">
                    <div className="offsetmenu__close__btn">
                        <a href="#"><i className="zmdi zmdi-close"></i></a>
                    </div>
                    <div className="off__contact">
                        <div className="logo">
                            <a href="index.html">
                                <img src="images/logo/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <ul className="sidebar__thumd">
                        <li><a href="#"><img src="images/sidebar-img/1.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/2.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/3.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/4.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/5.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/6.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/7.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/8.jpg" alt="sidebar images"/></a></li>
                    </ul>
                    <div className="offset__widget">
                        <div className="offset__single">
                            <h4 className="offset__title">Language</h4>
                            <ul>
                                <li><a href="#"> Engish </a></li>
                                <li><a href="#"> French </a></li>
                                <li><a href="#"> German </a></li>
                            </ul>
                        </div>
                        <div className="offset__single">
                            <h4 className="offset__title">Currencies</h4>
                            <ul>
                                <li><a href="#"> USD : Dollar </a></li>
                                <li><a href="#"> EUR : Euro </a></li>
                                <li><a href="#"> POU : Pound </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset__sosial__share">
                        <h4 className="offset__title">Follow Us On Social</h4>
                        <ul className="off__soaial__link">
                            <li><a className="bg--twitter" href="#"  title="Twitter"><i className="zmdi zmdi-twitter"></i></a></li>
                            
                            <li><a className="bg--instagram" href="#" title="Instagram"><i className="zmdi zmdi-instagram"></i></a></li>

                            <li><a className="bg--facebook" href="#" title="Facebook"><i className="zmdi zmdi-facebook"></i></a></li>

                            <li><a className="bg--googleplus" href="#" title="Google Plus"><i className="zmdi zmdi-google-plus"></i></a></li>

                            <li><a className="bg--google" href="#" title="Google"><i className="zmdi zmdi-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="shopping__cart">
                <div className="shopping__cart__inner">
                    <div className="offsetmenu__close__btn">
                        <a href="#"><i className="zmdi zmdi-close"></i></a>
                    </div>
                    <div className="shp__cart__wrap">
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <a href="#">
                                    <img src="images/product/sm-img/1.jpg" alt="product images"/>
                                </a>
                            </div>
                            <div className="shp__pro__details">
                                <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$105.00</span>
                            </div>
                            <div className="remove__btn">
                                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <a href="#">
                                    <img src="images/product/sm-img/2.jpg" alt="product images"/>
                                </a>
                            </div>
                            <div className="shp__pro__details">
                                <h2><a href="product-details.html">Brone Candle</a></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$25.00</span>
                            </div>
                            <div className="remove__btn">
                                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                    </div>
                    <ul className="shoping__total">
                        <li className="subtotal">Subtotal:</li>
                        <li className="total__price">$130.00</li>
                    </ul>
                    <ul className="shopping__btn">
                        <li><a href="cart.html">View Cart</a></li>
                        <li className="shp__checkout"><a href="checkout.html">Checkout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <section className="categories-slider-area bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-8 col-xs-12 float-left-style">
                        <div className="slider__container slider--one">
                            <div className="slider__activation__wrap owl-carousel owl-theme">
                                <div className="slide slider__full--screen slider-height-inherit slider-text-right" style={{background: 'rgba(0, 0, 0, 0) url(images/slider/bg/1.png) no-repeat scroll center center / cover'}}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-10 col-lg-8 col-md-offset-2 col-lg-offset-4 col-sm-12 col-xs-12">
                                                <div className="slider__inner">
                                                    <h1>New Product <span className="text--theme">Collection</span></h1>
                                                    <div className="slider__btn">
                                                        <a className="htc__btn" href="cart.html">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

<LeftMenue/>



                </div>
            </div>
        </section>
 <FooterSection/>
 <Footer/>



        
    </div>
    <div id="quickview-wrapper">
        <div className="modal fade" id="productModal" tabindex="-1" role="dialog">
            <div className="modal-dialog modal__container" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-product">
                            <div className="product-images">
                                <div className="main-image images">
                                    <img alt="big images" src="images/product/big-img/1.jpg"/>
                                </div>
                            </div>
                            <div className="product-info">
                                <h1>Simple Fabric Bags</h1>
                                <div className="rating__and__review">
                                    <ul className="rating">
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                    </ul>
                                    <div className="review">
                                        <a href="#">4 customer reviews</a>
                                    </div>
                                </div>
                                <div className="price-box-3">
                                    <div className="s-price-box">
                                        <span className="new-price">$17.20</span>
                                        <span className="old-price">$45.00</span>
                                    </div>
                                </div>
                                <div className="quick-desc">
                                    Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.
                                </div>
                                <div className="select__color">
                                    <h2>Select color</h2>
                                    <ul className="color__list">
                                        <li className="red"><a title="Red" href="#">Red</a></li>
                                        <li className="gold"><a title="Gold" href="#">Gold</a></li>
                                        <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                        <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                    </ul>
                                </div>
                                <div className="select__size">
                                    <h2>Select size</h2>
                                    <ul className="color__list">
                                        <li className="l__size"><a title="L" href="#">L</a></li>
                                        <li className="m__size"><a title="M" href="#">M</a></li>
                                        <li className="s__size"><a title="S" href="#">S</a></li>
                                        <li className="xl__size"><a title="XL" href="#">XL</a></li>
                                        <li className="xxl__size"><a title="XXL" href="#">XXL</a></li>
                                    </ul>
                                </div>
                                <div className="social-sharing">
                                    <div className="widget widget_socialsharing_widget">
                                        <h3 className="widget-title-modal">Share this product</h3>
                                        <ul className="social-icons">
                                            <li><a target="_blank" title="rss" href="#" className="rss social-icon"><i className="zmdi zmdi-rss"></i></a></li>
                                            <li><a target="_blank" title="Linkedin" href="#" className="linkedin social-icon"><i className="zmdi zmdi-linkedin"></i></a></li>
                                            <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest"></i></a></li>
                                            <li><a target="_blank" title="Tumblr" href="#" className="tumblr social-icon"><i className="zmdi zmdi-tumblr"></i></a></li>
                                            <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="addtocart-btn">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default App;
