import './App.css';
import Header from './pages/header.js'
import LikeButton from './pages/like_button.js'
function App() {
  return (
    <div data-aos="fade-down" className="App">
      <Header/>

      <div id="news-structure"></div>
      <div id="interval"></div>
      <p data-aos="fade-up" data-aos-duration="750" id="introducing-text">Magic Benefits</p>
      <div data-aos="fade-up" data-aos-duration="750" id="benefits-container">
        <div id="benefit-structure">
          <img id="benefits-image" src={require('./static/img/Blog.png')} />
          <p id="benefits-title"></p>
          <p id="benefits-description"></p>
        </div>
        <div id="benefit-structure">
          <img id="benefits-image" src={require('./static/img/Blog.png')} />
          <p id="benefits-title"></p>
          <p id="benefits-description"></p>
        </div>
        <div id="benefit-structure">
          <img id="benefits-image" src={require('./static/img/Blog.png')} />
          <p id="benefits-title"></p>
          <p id="benefits-description"></p>
        </div>
        <div id="benefit-structure">
          <img id="benefits-image" src={require('./static/img/Blog.png')} />
          <p id="benefits-title"></p>
          <p id="benefits-description"></p>
        </div>
      </div>

      <div id="interval"></div>
      <p data-aos="fade-up" data-aos-duration="750" id="introducing-text">Magic Blog</p>
      <div data-aos="fade-up" data-aos-duration="750" id="blog-container">
        <div id="blog-structure">
          <p id="blog-title"></p>
          <p id="blog-description"></p>
          <img id="blog-image" src={require('./static/img/Blog.png')} />
          <LikeButton />
        </div>
        <div id="blog-structure">
          <p id="blog-title"></p>
          <p id="blog-description"></p>
          <img id="blog-image" src={require('./static/img/Blog.png')} />
          <LikeButton />
        </div>
        <div id="blog-structure">
          <p id="blog-title"></p>
          <p id="blog-description"></p>
          <img id="blog-image" src={require('./static/img/Blog.png')} />
          <LikeButton />
        </div>
      </div>

      <div id="interval"></div>
      <p data-aos="fade-up" data-aos-duration="750" id="introducing-text">About Magic</p>
      <div data-aos="fade-up" data-aos-duration="750" id="about-structure">
        <div id="about-description"></div>
      </div>

      <div id="interval"></div>
      <p data-aos="fade-up" data-aos-duration="750" id="introducing-text">Magic Products</p>
      <div data-aos="fade-up" data-aos-duration="750" id="products-container">
        <div id="products-structure">
          <p id="products-title"></p>
          <p id="products-description"></p>
          <img id="blog-image" src={require('./static/img/Blog.png')} />
          <LikeButton />
        </div>
        <div id="products-structure">
          <p id="products-title"></p>
          <p id="products-description"></p>
          <img id="blog-image" src={require('./static/img/Blog.png')} />
          <LikeButton />
        </div>
        <div id="products-structure">
          <p id="products-title"></p>
          <p id="products-description"></p>
          <img id="blog-image" src={require('./static/img/Blog.png')} />
          <LikeButton />
        </div>
      </div>

      <div id="footer-structure"></div>
    </div>
  )
}

export default App;
