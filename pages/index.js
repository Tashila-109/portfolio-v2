import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content='' />
        <meta name='description' content='' />
        <script type='text/javascript' src='/js/jquery.min.js'></script>
        <script type='text/javascript' src='/js/plugins.js'></script>
        <script type='text/javascript' src='/js/scripts.js'></script>
      </Head>

      {/* <!--loader--> */}
      <div className='loader-wrap'>
        <div className='pin'></div>
      </div>
      {/* <!--loader end--> */}
      {/* <!-- Main  --> */}
      <div id='main'>
        {/* <!-- header--> */}
        <header className='main-header'>
          <a className='logo-holder' href='index.html'>
            <img src='/images/logo.png' alt='' />
          </a>
          {/* <!-- nav-button-wrap--> */}
          <div className='nav-button but-hol'>
            <span className='nos'></span>
            <span className='ncs'></span>
            <span className='nbs'></span>
            <div className='menu-button-text'>Menu</div>
          </div>
          {/* <!-- nav-button-wrap end--> */}
          <div className='header-social'>
            <ul>
              <li>
                <a href='#' target='_blank'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='#' target='_blank'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#' target='_blank'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#' target='_blank'>
                  <i className='fab fa-vk'></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <!--  showshare -->   */}
          <div className='show-share showshare'>
            <i className='fal fa-retweet'></i>
            <span>Share This</span>
          </div>
          {/* <!--  showshare end --> */}
        </header>
        {/* <!--  header end --> */}
        {/* <!--  navigation bar --> */}
        <div className='nav-overlay'>
          <div className='tooltip color-bg'>Close Menu</div>
        </div>
        <div className='nav-holder'>
          <a className='header-logo' href='index.html'>
            <img src='images/logo2.png' alt='' />
          </a>
          <div className='nav-title'>
            <span>Menu</span>
          </div>
          <div className='nav-inner-wrap'>
            <nav className='nav-inner sound-nav' id='menu'>
              <ul>
                <li>
                  <a href='#' className='act-link'>
                    Home
                  </a>
                  {/* <!--level 2 --> */}
                  <ul>
                    <li>
                      <a href='index.html'>Half Slider</a>
                    </li>
                    <li>
                      <a href='index2.html' className='act-link'>
                        Half Image
                      </a>
                    </li>
                    <li>
                      <a href='index3.html'>Impulse Image</a>
                    </li>
                    <li>
                      <a href='index4.html'>Fullscreen Image</a>
                    </li>
                    <li>
                      <a href='index5.html'>Fullscreen Slider</a>
                    </li>
                    <li>
                      <a href='index6.html'>Slideshow</a>
                    </li>
                    <li>
                      <a href='index7.html'>Fullscreen Carousel</a>
                    </li>
                    <li>
                      <a href='index8.html'>Video</a>
                    </li>
                  </ul>
                  {/* <!--level 2 end --> */}
                </li>
                <li>
                  <a href='#'>Portfolio</a>
                  {/* <!--level 2 --> */}
                  <ul>
                    <li>
                      <a href='portfolio.html'>Masonry</a>
                    </li>
                    <li>
                      <a href='portfolio2.html'>Masonry 2</a>
                    </li>
                    <li>
                      <a href='portfolio3.html'>Boxed</a>
                    </li>
                    <li>
                      <a href='portfolio4.html'>Boxed 2 </a>
                    </li>
                    <li>
                      <a href='portfolio5.html'>Parallax</a>
                    </li>
                    <li>
                      <a href='portfolio6.html'>Parallax dark</a>
                    </li>
                    <li>
                      <a href='portfolio8.html'>List</a>
                    </li>
                    <li>
                      <a href='#'>Single</a>
                      {/* <!--level 3 --> */}
                      <ul>
                        <li>
                          <a href='portfolio-single.html'>Carousel</a>
                        </li>
                        <li>
                          <a href='portfolio-single2.html'>Carousel 2</a>
                        </li>
                        <li>
                          <a href='portfolio-single3.html'>Gallery</a>
                        </li>
                        <li>
                          <a href='portfolio-single4.html'>Gallery 2</a>
                        </li>
                        <li>
                          <a href='portfolio-single5.html'>Slider</a>
                        </li>
                        <li>
                          <a href='portfolio-single6.html'>Showcase</a>
                        </li>
                        <li>
                          <a href='portfolio-single7.html'>Fullscreen Slider</a>
                        </li>
                        <li>
                          <a href='portfolio-single8.html'>Video</a>
                        </li>
                      </ul>
                      {/* <!--level 3 end --> */}
                    </li>
                  </ul>
                  {/* <!--level 2 end -->
                            </li> */}
                  <li>
                    <a href='services.html'>Services</a>
                  </li>
                  <li>
                    <a href='contacts.html'>Contacts</a>
                  </li>
                  <li>
                    <a href='blog.html'>Blog</a>
                  </li>
                  <li>
                    <a href='#'>Pages</a>
                    {/* <!--level 2 --> */}
                    <ul>
                      <li>
                        <a href='services2.html'>Services 2</a>
                      </li>
                      <li>
                        <a href='blog-single.html'>Blog single</a>
                      </li>
                      <li>
                        <a href='team.html'>Team</a>
                      </li>
                      <li>
                        <a href='team-single.html'>Team Single</a>
                      </li>
                      <li>
                        <a href='coming-soon.html'>Coming soon</a>
                      </li>
                      <li>
                        <a href='404.html'>404</a>
                      </li>
                    </ul>
                    {/* <!--level 2 end --> */}
                  </li>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!--  navigation bar end --> */}
        {/* <!-- wrapper--> */}
        <div id='wrapper'>
          {/* <!-- scroll-nav-wrap--> */}
          <div className='scroll-nav-wrap fl-wrap'>
            <div className='scroll-down-wrap'>
              <div className='mousey'>
                <div className='scroller'></div>
              </div>
              <span>Scroll Down</span>
            </div>
            <nav className='scroll-nav scroll-init'>
              <ul>
                <li>
                  <a className='scroll-link act-link' href='#sec1'>
                    Hero
                  </a>
                </li>
                <li>
                  <a className='scroll-link' href='#sec2'>
                    About
                  </a>
                </li>
                <li>
                  <a className='scroll-link' href='#sec3'>
                    Resume
                  </a>
                </li>
                <li>
                  <a className='scroll-link' href='#sec4'>
                    Skills
                  </a>
                </li>
                <li>
                  <a className='scroll-link' href='#sec5'>
                    Projects
                  </a>
                </li>
                <li>
                  <a className='scroll-link' href='#sec6'>
                    Clients
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- scroll-nav-wrap end--> */}
          {/* <!-- hero-wrap--> */}
          <div className='hero-wrap' id='sec1' data-scrollax-parent='true'>
            {/* <!-- hero-inner--> */}
            <div className='hero-inner fl-wrap full-height'>
              <div className='half-hero-wrap'>
                <h1>
                  Hey there!
                  <br />
                  I'm Martin SpectraIndependent <span> Digital Designer </span>
                </h1>
                <h4>I create web and graphic design</h4>
                <div className='clearfix'></div>
                <a href='#sec2' className='custom-scroll-link btn float-btn flat-btn color-btn mar-top'>
                  Let's Start
                </a>
              </div>
              <div className='half-bg-dec' data-ran='12'></div>
              <div className='half-bg'>
                <div className='bg' data-bg='images/bg/1.jpg' data-scrollax="properties: { translateY: '250px' }"></div>
                <div className='overlay'></div>
              </div>
              {/* <!--hero dec--> */}
              <div className='hero-decor-let'>
                <div>Web Design</div>
                <div>
                  <span>Ui/Ux Design</span>
                </div>
                <div>Branding</div>
                <div>
                  <span>Ecommerce</span>
                </div>
              </div>
              <div className='hero-decor-numb'>
                <span>40.7143528 </span>
                <span>-74.0059731 </span>{' '}
                <a href='https://www.google.com.ua/maps/' target='_blank' className='hero-decor-numb-tooltip'>
                  Based In NewYork
                </a>
              </div>
              <div className='pattern-bg'></div>
              <div className='hero-line-dec'></div>
            </div>
            {/* <!--hero dec end--> */}
          </div>
          {/* <!-- hero-wrap end--> */}
          {/* <!-- Content--> */}
          <div className='content'>
            {/* <!-- section--> */}
            <section data-scrollax-parent='true' id='sec2'>
              <div className='section-subtitle' data-scrollax="properties: { translateY: '-250px' }">
                {' '}
                <span>//</span>Words About{' '}
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-5'>
                    <div className='collage-image fl-wrap'>
                      <div className='collage-image-title' data-scrollax="properties: { translateY: '150px' }">
                        Solonick.
                      </div>
                      <img src='images/all/1.jpg' className='respimg' alt='' />
                    </div>
                  </div>
                  <div className='col-md-7'>
                    <div className='main-about fl-wrap'>
                      <h5>In pellentesque viverra purus</h5>
                      <h2>
                        Innovative solutions
                        <br />
                        to boost <span> your creative </span> projects
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam
                        erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In
                        fermentum facilisis massa, a consequat purus viverra.
                      </p>
                      {/* <!-- features-box-container -->  */}
                      <div className='features-box-container fl-wrap'>
                        <div className='row'>
                          {/* <!--features-box -->  */}
                          <div className='features-box col-md-6'>
                            <div className='time-line-icon'>
                              <i className='fal fa-desktop'></i>
                            </div>
                            <h3>Web Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. </p>
                          </div>
                          {/* <!-- features-box end  -->  */}
                          {/* <!--features-box -->  */}
                          <div className='features-box col-md-6'>
                            <div className='time-line-icon'>
                              <i className='fal fa-mobile-android'></i>
                            </div>
                            <h3>Ui/Ux Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. </p>
                          </div>
                          {/* <!-- features-box end  -->  */}
                          {/* <!--features-box -->  */}
                          <div className='features-box col-md-6'>
                            <div className='time-line-icon'>
                              <i className='fab fa-pagelines'></i>
                            </div>
                            <h3>Branding</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. </p>
                          </div>
                          {/* <!-- features-box end  -->                                 */}
                          {/* <!--features-box -->  */}
                          <div className='features-box col-md-6'>
                            <div className='time-line-icon'>
                              <i className='fal fa-shopping-bag'></i>
                            </div>
                            <h3>Ecommerce</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. </p>
                          </div>
                          {/* <!-- features-box end  -->   */}
                        </div>
                      </div>
                      {/* <!-- features-box-container end  --> */}
                      <a href='portfolio.html' className='btn float-btn flat-btn color-btn'>
                        My Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='bg-parallax-module'
                data-position-top='90'
                data-position-left='25'
                data-scrollax="properties: { translateY: '-250px' }"
              ></div>
              <div
                className='bg-parallax-module'
                data-position-top='70'
                data-position-left='70'
                data-scrollax="properties: { translateY: '150px' }"
              ></div>
              <div className='sec-lines'></div>
            </section>
            {/* <!-- section end--> */}
            {/* <!-- section--> */}
            <section className='parallax-section dark-bg sec-half parallax-sec-half-right' data-scrollax-parent='true'>
              <div className='bg par-elem' data-bg='images/bg/1.jpg' data-scrollax="properties: { translateY: '30%' }"></div>
              <div className='overlay'></div>
              <div className='container'>
                <div className='section-title'>
                  <h2>
                    Some Interisting <span>Facts </span> <br /> About Me
                  </h2>
                  <p>
                    {' '}
                    We have a wide range of pneumatic and vacuum components and conveyor belts and systems specifically suiting the precise
                    needs of the print and packaging industry.{' '}
                  </p>
                  <div className='horizonral-subtitle'>
                    <span>Numbers</span>
                  </div>
                </div>
                <div className='fl-wrap facts-holder'>
                  {/* <!-- inline-facts --> */}
                  <div className='inline-facts-wrap'>
                    <div className='inline-facts'>
                      <div className='milestone-counter'>
                        <div className='stats animaper'>
                          <div className='num' data-content='0' data-num='145'>
                            0
                          </div>
                        </div>
                      </div>
                      <h6>Finished projects</h6>
                    </div>
                  </div>
                  {/* <!-- inline-facts end --> */}
                  {/* <!-- inline-facts  --> */}
                  <div className='inline-facts-wrap'>
                    <div className='inline-facts'>
                      <div className='milestone-counter'>
                        <div className='stats animaper'>
                          <div className='num' data-content='0' data-num='357'>
                            0
                          </div>
                        </div>
                      </div>
                      <h6>Happy customers</h6>
                    </div>
                  </div>
                  {/* <!-- inline-facts end --> */}
                  {/* <!-- inline-facts  --> */}
                  <div className='inline-facts-wrap'>
                    <div className='inline-facts'>
                      <div className='milestone-counter'>
                        <div className='stats animaper'>
                          <div className='num' data-content='0' data-num='825'>
                            0
                          </div>
                        </div>
                      </div>
                      <h6>Working hours</h6>
                    </div>
                  </div>
                  {/* <!-- inline-facts end --> */}
                  {/* <!-- inline-facts  --> */}
                  <div className='inline-facts-wrap'>
                    <div className='inline-facts'>
                      <div className='milestone-counter'>
                        <div className='stats animaper'>
                          <div className='num' data-content='0' data-num='1124'>
                            0
                          </div>
                        </div>
                      </div>
                      <h6>Coffee Cups</h6>
                    </div>
                  </div>
                  {/* <!-- inline-facts end --> */}
                </div>
              </div>
            </section>
            {/* <!-- section end--> */}
            {/* <!-- section--> */}
            <section data-scrollax-parent='true' id='sec3'>
              <div className='section-subtitle' data-scrollax="properties: { translateY: '-250px' }">
                My Resume <span>//</span>
              </div>
              <div className='container'>
                {/* <!-- section-title --> */}
                <div className='section-title fl-wrap'>
                  <h3>Some Words About Me</h3>
                  <h2>
                    My Awesome <span> Story</span>
                  </h2>
                  <p>
                    We have a wide range of pneumatic and vacuum components and conveyor belts and systems specifically suiting the precise
                    needs of the print and packaging industry.
                  </p>
                </div>
                {/* <!-- section-title end --> */}
                {/* <!-- custom-inner-holder --> */}
                <div className='custom-inner-holder'>
                  {/* <!-- custom-inner -->	 */}
                  <div className='custom-inner'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='custom-inner-header workres'>
                          <i className='fa fa-briefcase'></i>
                          <h3> Work in company "Dolore"</h3>
                          <span> 2012-2017 </span>
                        </div>
                        <div className='ci-num'>
                          <span>01. -</span>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <img src='images/all/1.jpg' className='respimg' data-scrollax="properties: { translateY: '-170px' }" alt='' />
                      </div>
                      <div className='col-md-4'>
                        <div className='custom-inner-content fl-wrap'>
                          <h4>Complete the project "domik"</h4>
                          <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                            some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                            to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                            text.{' '}
                          </p>
                          <ul>
                            <li>Door portals plan</li>
                            <li>Furniture specifications</li>
                            <li>Interior design</li>
                          </ul>
                          <a href='#' className='cus-inner-head-link color-bg'>
                            Details +{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- custom-inner end --> */}
                  {/* <!-- custom-inner -->	 */}
                  <div className='custom-inner'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='custom-inner-header educ'>
                          <i className='fal fa-university'></i>
                          <h3> Course designer - San Diego</h3>
                          <span> 2011-2013 </span>
                        </div>
                        <div className='ci-num'>
                          <span>02. - </span>
                        </div>
                      </div>
                      <div className='col-md-5'>
                        <div className='custom-inner-content fl-wrap'>
                          <h4>Passage of Lorem Ipsum</h4>
                          <p>
                            We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air
                            Moved divide midst us fifth sea have face which male fifth said seas rule above. Quis nostrud exercitation
                            ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                          </p>
                          <a href='#' className='cus-inner-head-link color-bg'>
                            Details +{' '}
                          </a>
                        </div>
                      </div>
                      <div className='col-md-3'>
                        <img src='images/all/2.jpg' className='respimg' data-scrollax="properties: { translateY: '270px' }" alt='' />
                      </div>
                    </div>
                  </div>
                  {/* <!-- custom-inner end --> */}
                  {/* <!-- custom-inner --> */}
                  <div className='custom-inner'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='custom-inner-header workres'>
                          <i className='fa fa-briefcase'></i>
                          <h3> Work in company "Generators"</h3>
                          <span> 2010-2013 </span>
                        </div>
                        <div className='ci-num'>
                          <span>03. - </span>
                        </div>
                      </div>
                      <div className='col-md-8'>
                        <div className='custom-inner-content fl-wrap'>
                          <h4>Making this the first</h4>
                          <p>
                            We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air
                            Moved divide midst us fifth sea have face which male fifth said seas rule above. All the Lorem Ipsum generators
                            on the Internet tend .
                          </p>
                          <ul>
                            <li>Door portals plan</li>
                            <li>Furniture specifications</li>
                            <li>Interior design</li>
                          </ul>
                          <p>
                            {' '}
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the
                            first true generator on the Internet. It uses a dictionary of over 200 Latin words
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- custom-inner end --> */}
                  {/* <!-- custom-inner --> */}
                  <div className='custom-inner'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div className='custom-inner-header workres'>
                          <i className='fa fa-briefcase'></i>
                          <h3> Work in company "Available"</h3>
                          <span> 2011-2013 </span>
                        </div>
                        <div className='ci-num'>
                          <span>04. - </span>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <img src='images/all/1.jpg' className='respimg' data-scrollax="properties: { translateY: '100px' }" alt='' />
                      </div>
                      <div className='col-md-4'>
                        <div className='custom-inner-content fl-wrap'>
                          <h4>Complete the project "domik"</h4>
                          <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                            some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                            to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                            text.{' '}
                          </p>
                          <ul>
                            <li>Door portals plan</li>
                            <li>Furniture specifications</li>
                            <li>Interior design</li>
                          </ul>
                          <a href='#' className='cus-inner-head-link color-bg'>
                            Details +{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- custom-inner end --> */}
                </div>
                {/* <!-- custom-inner-holder --> */}
                <a href='#' className='btn float-btn flat-btn color-btn mar-top'>
                  Download Resume
                </a>
              </div>
              <div className='sec-lines'></div>
            </section>
            {/* <!-- section end--> */}
            {/* <!-- section  --> */}
            <section className='dark-bg sinsec-dec sinsec-dec2'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='video-box fl-wrap'>
                      <img src='images/all/2.jpg' className='respimg' alt='' />
                      <a className='video-box-btn color-bg image-popup' href='https://vimeo.com/110234211'>
                        <i className='fal fa-play' aria-hidden='true'></i>
                      </a>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='video-promo-text fl-wrap mar-top'>
                      <h3>My Video Presentation </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam
                        erat volutpat.{' '}
                      </p>
                      <a href='#' className='btn float-btn flat-btn color-btn mar-top'>
                        My Youtube Chanel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='half-bg-dec single-half-bg-dec' data-ran='12'></div>
              <div className='sec-lines'></div>
            </section>
            {/* <!-- sectio endn--> */}
            {/* <!-- section--> */}
            <section data-scrollax-parent='true'>
              <div className='section-subtitle' data-scrollax="properties: { translateY: '-250px' }">
                <span>//</span>How I Work
              </div>
              <div className='container'>
                {/* <!-- section-title --> */}
                <div className='section-title fl-wrap'>
                  <h3>How i Work</h3>
                  <h2>
                    My Working <span>Process</span>
                  </h2>
                  <p>
                    In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                    commodo gravida.{' '}
                  </p>
                </div>
                {/* <!-- section-title end --> */}
                {/* <!--process-wrap  --> */}
                <div className='process-wrap fl-wrap'>
                  <ul>
                    <li>
                      <div className='time-line-icon'>
                        <i className='fab fa-slideshare'></i>
                      </div>
                      <h4>Discuss the project</h4>
                      <div className='process-details'>
                        <h6>Duis autem vel eum iriure dolor</h6>
                        <p>
                          Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                          dolor.
                        </p>
                        <a href='#'>More Details</a>
                      </div>
                      <span className='process-numder'>01.</span>
                    </li>
                    <li>
                      <div className='time-line-icon'>
                        <i className='fal fa-laptop'></i>
                      </div>
                      <h4>Develop & elaborate</h4>
                      <div className='process-details'>
                        <h6>In ut odio libero, at vulputate urna. </h6>
                        <p>
                          Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                          dolor.
                        </p>
                        <a href='#'>More Details</a>
                      </div>
                      <span className='process-numder'>02.</span>
                    </li>
                    <li>
                      <div className='time-line-icon'>
                        <i className='fal fa-flag-checkered'></i>
                      </div>
                      <h4>Final approvement</h4>
                      <div className='process-details'>
                        <h6>Nulla posuere sapien vitae lectus suscipit</h6>
                        <p>
                          Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                          dolor.
                        </p>
                        <a href='#'>More Details</a>
                      </div>
                      <span className='process-numder'>03.</span>
                    </li>
                  </ul>
                </div>
                {/* <!--process-wrap   end--> */}
                <div className='fl-wrap mar-top'>
                  <div className='srv-link-text'>
                    <h4>Need more info ? Visit my services page : </h4>
                    <a href='services.html' className='btn float-btn flat-btn color-btn'>
                      My Services
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='bg-parallax-module'
                data-position-top='90'
                data-position-left='30'
                data-scrollax="properties: { translateY: '-150px' }"
              ></div>
              <div
                className='bg-parallax-module'
                data-position-top='80'
                data-position-left='80'
                data-scrollax="properties: { translateY: '350px' }"
              ></div>
              <div className='sec-lines'></div>
            </section>
            {/* <!-- section end --> */}
            {/* <!-- section--> */}
            <section className='parallax-section dark-bg sec-half parallax-sec-half-left' data-scrollax-parent='true' id='sec4'>
              <div className='bg par-elem' data-bg='images/bg/1.jpg' data-scrollax="properties: { translateY: '30%' }"></div>
              <div className='overlay'></div>
              <div className='container'>
                <div className='section-title'>
                  <h2>
                    My Own <span> Developer's </span> and <br /> Design Skills{' '}
                  </h2>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat
                    volutpat.{' '}
                  </p>
                  <div className='horizonral-subtitle'>
                    <span>Power</span>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- section end --> */}
            {/* <!-- section --> */}
            <section data-scrollax-parent='true'>
              <div className='section-subtitle right-pos' data-scrollax="properties: { translateY: '-250px' }">
                <span>//</span>attainments
              </div>
              <div className='container'>
                {/* <!-- Skills--> */}
                <div className='fl-wrap mar-bottom skill-wrap'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='pr-title fl-wrap'>
                        <h3>Design Skills</h3>
                        <span>Lorem Ipsum generators on the Internet king this the first true generator</span>
                      </div>
                      <div className='ci-num'>
                        <span>01. - </span>
                      </div>
                    </div>
                    <div className='col-md-8'>
                      {/* <!-- skills  --> */}
                      <div className='piechart-holder animaper' data-skcolor='#FAC921'>
                        <div className='row'>
                          {/* <!-- 1  --> */}
                          <div className='piechart'>
                            <span className='chart' data-percent='85'>
                              <span className='percent'></span>
                            </span>
                            <h4>Design</h4>
                          </div>
                          {/* <!-- 1 end --> */}
                          {/* <!-- 2  --> */}
                          <div className='piechart'>
                            <span className='chart' data-percent='95'>
                              <span className='percent'></span>
                            </span>
                            <h4>Branding</h4>
                          </div>
                          {/* <!-- 2 end  --> */}
                          {/* <!-- 3  --> */}
                          <div className='piechart'>
                            <span className='chart' data-percent='80'>
                              <span className='percent'></span>
                            </span>
                            <div className='clearfix'></div>
                            <h4>Ecommerce</h4>
                          </div>
                          {/* <!-- 3  end--> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- skills  end--> */}
                  </div>
                </div>
                {/* <!--  Skills  end--> */}
                {/* <!--  Skills--> */}
                <div className='fl-wrap mar-bottom   mar-top skill-wrap'>
                  <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                      <div className='pr-title fl-wrap'>
                        <h3>Developer Skills</h3>
                        <span>Lorem Ipsum generators on the Internet king this the first true generator</span>
                      </div>
                      <div className='ci-num'>
                        <span>02. - </span>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='skillbar-box animaper'>
                        {/* <!-- skill 1--> */}
                        <div className='custom-skillbar-title'>
                          <span>Photoshop</span>
                        </div>
                        <div className='skill-bar-percent'>95%</div>
                        <div className='skillbar-bg' data-percent='95%'>
                          <div className='custom-skillbar'></div>
                        </div>
                        {/* <!-- skill 2--> */}
                        <div className='custom-skillbar-title'>
                          <span>Jquery</span>
                        </div>
                        <div className='skill-bar-percent'>65%</div>
                        <div className='skillbar-bg' data-percent='65%'>
                          <div className='custom-skillbar'></div>
                        </div>
                        {/* <!-- skill 3--> */}
                        <div className='custom-skillbar-title'>
                          <span>HTML5</span>
                        </div>
                        <div className='skill-bar-percent'>75%</div>
                        <div className='skillbar-bg' data-percent='75%'>
                          <div className='custom-skillbar'></div>
                        </div>
                        {/* <!-- skill 1--> */}
                        <div className='custom-skillbar-title'>
                          <span>PHP</span>
                        </div>
                        <div className='skill-bar-percent'>71%</div>
                        <div className='skillbar-bg' data-percent='71%'>
                          <div className='custom-skillbar'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--  Skills  end--> */}
                {/* <!--  Skills--> */}
                <div className='fl-wrap   mar-top skill-wrap'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='pr-title fl-wrap'>
                        <h3>Language Skills</h3>
                        <span>Lorem Ipsum generators on the Internet king this the first true generator</span>
                      </div>
                      <div className='ci-num'>
                        <span>03. - </span>
                      </div>
                    </div>
                    <div className='col-md-8'>
                      {/* <!-- skills  --> */}
                      <div className='piechart-holder animaper' data-skcolor='#FAC921'>
                        <div className='row'>
                          {/* <!-- 1  --> */}
                          <div className='piechart'>
                            <span className='chart' data-percent='85'>
                              <span className='percent'></span>
                            </span>
                            <h4>French</h4>
                          </div>
                          {/* <!-- 1 end --> */}
                          {/* <!-- 2  --> */}
                          <div className='piechart'>
                            <span className='chart' data-percent='95'>
                              <span className='percent'></span>
                            </span>
                            <h4>Dutch</h4>
                          </div>
                          {/* <!-- 2 end  --> */}
                          {/* <!-- 3  --> */}
                          <div className='piechart'>
                            <span className='chart' data-percent='80'>
                              <span className='percent'></span>
                            </span>
                            <div className='clearfix'></div>
                            <h4>Portugese</h4>
                          </div>
                          {/* <!-- 3  end--> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- skills  end--> */}
                  </div>
                </div>
                {/* <!-- Skills  end--> */}
              </div>
              <div
                className='bg-parallax-module'
                data-position-top='50'
                data-position-left='20'
                data-scrollax="properties: { translateY: '-250px' }"
              ></div>
              <div
                className='bg-parallax-module'
                data-position-top='40'
                data-position-left='70'
                data-scrollax="properties: { translateY: '150px' }"
              ></div>
              <div
                className='bg-parallax-module'
                data-position-top='80'
                data-position-left='80'
                data-scrollax="properties: { translateY: '350px' }"
              ></div>
              <div
                className='bg-parallax-module'
                data-position-top='95'
                data-position-left='40'
                data-scrollax="properties: { translateY: '-550px' }"
              ></div>
              <div className='sec-lines'></div>
            </section>
            {/* <!-- section end --> */}
            {/* <!--section --> */}
            <section className='dark-bg' id='sec5'>
              <div className='fet_pr-carousel-title'>
                <div className='fet_pr-carousel-title-item'>
                  <h3>My Featured Projects</h3>
                  <p>
                    In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                    commodo gravida.
                  </p>
                  <a href='portfolio.html' className='btn float-btn flat-btn color-btn mar-top'>
                    My Portfolio
                  </a>
                </div>
              </div>
              {/* <!--slider-carousel-wrap --> */}
              <div className='slider-carousel-wrap fl-wrap'>
                {/* <!--fet_pr-carousel --> */}
                <div className='fet_pr-carousel cur_carousel-slider-container fl-wrap'>
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='fet_pr-carousel-box'>
                      <div className='fet_pr-carousel-box-media fl-wrap'>
                        <img src='images/folio/web/slider/1.jpg' className='respimg' alt='' />
                        <a href='images/folio/web/slider/1.jpg' className='fet_pr-carousel-box-media-zoom   image-popup'>
                          <i className='fal fa-search'></i>
                        </a>
                      </div>
                      <div className='fet_pr-carousel-box-text fl-wrap'>
                        <h3>
                          <a href='portfolio-single.html'>Lokomotive Project</a>
                        </h3>
                        <div className='fet_pr-carousel-cat'>
                          <a href='#'>Branding</a> <a href='#'>Web Design</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--slick-item end --> */}
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='fet_pr-carousel-box'>
                      <div className='fet_pr-carousel-box-media fl-wrap'>
                        <img src='images/folio/web/slider/1.jpg' className='respimg' alt='' />
                        <a href='https://vimeo.com/183619886' className='fet_pr-carousel-box-media-zoom   image-popup'>
                          <i className='fal fa-play'></i>
                        </a>
                      </div>
                      <div className='fet_pr-carousel-box-text fl-wrap'>
                        <h3>
                          <a href='portfolio-single.html'>Architecture Agensy</a>
                        </h3>
                        <div className='fet_pr-carousel-cat'>
                          <a href='#'>Photography</a> <a href='#'>Web Design</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--slick-item end --> */}
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='fet_pr-carousel-box'>
                      <div className='fet_pr-carousel-box-media fl-wrap'>
                        <img src='images/folio/web/slider/1.jpg' className='respimg' alt='' />
                        <a href='images/folio/web/slider/1.jpg' className='fet_pr-carousel-box-media-zoom   image-popup'>
                          <i className='fal fa-search'></i>
                        </a>
                      </div>
                      <div className='fet_pr-carousel-box-text fl-wrap'>
                        <h3>
                          <a href='portfolio-single.html'>Corporate website</a>
                        </h3>
                        <div className='fet_pr-carousel-cat'>
                          <a href='#'>Branding</a> <a href='#'>Web</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--slick-item end --> */}
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='fet_pr-carousel-box'>
                      <div className='fet_pr-carousel-box-media fl-wrap'>
                        <img src='images/folio/web/slider/1.jpg' className='respimg' alt='' />
                        <a href='images/folio/web/slider/1.jpg' className='fet_pr-carousel-box-media-zoom   image-popup'>
                          <i className='fal fa-search'></i>
                        </a>
                      </div>
                      <div className='fet_pr-carousel-box-text fl-wrap'>
                        <h3>
                          <a href='portfolio-single.html'>Mobile ui Interface</a>
                        </h3>
                        <div className='fet_pr-carousel-cat'>
                          <a href='#'>UI/UX</a> <a href='#'>Web Design</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--slick-item end --> */}
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='fet_pr-carousel-box'>
                      <div className='fet_pr-carousel-box-media fl-wrap'>
                        <img src='images/folio/web/slider/1.jpg' className='respimg' alt='' />
                        <a href='images/folio/web/slider/1.jpg' className='fet_pr-carousel-box-media-zoom   image-popup'>
                          <i className='fal fa-search'></i>
                        </a>
                      </div>
                      <div className='fet_pr-carousel-box-text fl-wrap'>
                        <h3>
                          <a href='portfolio-single.html'>Fashion Agensy</a>
                        </h3>
                        <div className='fet_pr-carousel-cat'>
                          <a href='#'>Development</a> <a href='#'>Web Design</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--slick-item end --> */}
                </div>
                {/* <!--fet_pr-carousel end --> */}
                <div className='sp-cont sp-arr sp-cont-prev'>
                  <i className='fal fa-long-arrow-left'></i>
                </div>
                <div className='sp-cont sp-arr sp-cont-next'>
                  <i className='fal fa-long-arrow-right'></i>
                </div>
              </div>
              {/* <!--slider-carousel-wrap end--> */}
              <div className='fet_pr-carousel-counter'></div>
            </section>
            {/* <!-- section end -->   */}
            {/* <!--section --> */}
            <section data-scrollax-parent='true' id='sec6'>
              <div className='section-subtitle' data-scrollax="properties: { translateY: '-250px' }">
                Testimonials<span>//</span>
              </div>
              <div className='container'>
                <div className='section-title fl-wrap'>
                  <h3>Reviews</h3>
                  <h2>
                    My Clients and <span>Testimonials</span>
                  </h2>
                  <p>
                    In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                    commodo gravida.{' '}
                  </p>
                </div>
              </div>
              <div className='clearfix'></div>
              {/* <!--slider-carousel-wrap --> */}
              <div className='slider-carousel-wrap text-carousel-wrap fl-wrap'>
                <div className='text-carousel-controls fl-wrap'>
                  <div className='container'>
                    <div className='sp-cont  sp-cont-prev'>
                      <i className='fal fa-long-arrow-left'></i>
                    </div>
                    <div className='sp-cont   sp-cont-next'>
                      <i className='fal fa-long-arrow-right'></i>
                    </div>
                  </div>
                </div>
                <div className='text-carousel cur_carousel-slider-container fl-wrap'>
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='text-carousel-item'>
                      <div className='popup-avatar'>
                        <img src='images/avatar/1.jpg' alt='' />
                      </div>
                      <div className='listing-rating card-popup-rainingvis' data-starrating2='5'>
                        {' '}
                      </div>
                      <div className='review-owner fl-wrap'>
                        Milka Antony - <span>Happy Client</span>
                      </div>
                      <p>
                        {' '}
                        "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam
                        suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat."
                      </p>
                      <a href='#' className='testim-link'>
                        Via Facebook
                      </a>
                    </div>
                  </div>
                  {/* <!--slick-item end --> */}
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='text-carousel-item'>
                      <div className='popup-avatar'>
                        <img src='images/avatar/1.jpg' alt='' />
                      </div>
                      <div className='listing-rating card-popup-rainingvis' data-starrating2='4'>
                        {' '}
                      </div>
                      <div className='review-owner fl-wrap'>
                        Milka Antony - <span>Happy Client</span>
                      </div>
                      <p>
                        {' '}
                        "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam
                        suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat."
                      </p>
                      <a href='#' className='testim-link'>
                        Via Facebook
                      </a>
                    </div>
                  </div>
                  {/* <!--slick-item end --> */}
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='text-carousel-item'>
                      <div className='popup-avatar'>
                        <img src='images/avatar/1.jpg' alt='' />
                      </div>
                      <div className='listing-rating card-popup-rainingvis' data-starrating2='5'>
                        {' '}
                      </div>
                      <div className='review-owner fl-wrap'>
                        Milka Antony - <span>Happy Client</span>
                      </div>
                      <p>
                        {' '}
                        "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam
                        suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat."
                      </p>
                      <a href='#' className='testim-link'>
                        Via Facebook
                      </a>
                    </div>
                  </div>
                  {/* <!--slick-item end -->                                                          */}
                  {/* <!--slick-item --> */}
                  <div className='slick-item'>
                    <div className='text-carousel-item'>
                      {/* <div className="popup-avatar"><img src="images/avatar/1.jpg" alt=""></div> */}
                      <div className='listing-rating card-popup-rainingvis' data-starrating2='5'>
                        {' '}
                      </div>
                      <div className='review-owner fl-wrap'>
                        Milka Antony - <span>Happy Client</span>
                      </div>
                      <p>
                        {' '}
                        "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam
                        suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonu mmy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat."
                      </p>
                      <a href='#' className='testim-link'>
                        Via Facebook
                      </a>
                    </div>
                  </div>
                  {/* <!--slick-item end -->                                    */}
                </div>
              </div>
              {/* <!--slider-carousel-wrap end--> */}
              {/* <!-- client-list --> */}
              <div className='fl-wrap'>
                <div className='container'>
                  <ul className='client-list client-list-white'>
                    <li>
                      <a href='#' target='_blank'>
                        <img src='images/clients/1.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <img src='images/clients/1.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <img src='images/clients/1.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <img src='images/clients/1.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank'>
                        <img src='images/clients/1.png' alt='' />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- client-list end--> */}
              </div>
              <div className='sec-lines'></div>
            </section>
            {/* <!-- section end --> */}
            {/* <!-- section--> */}
            <section className='dark-bg2 small-padding order-wrap'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h3>Ready To order Your Project ?</h3>
                  </div>
                  <div className='col-md-4'>
                    <a href='contacts.html' className='btn flat-btn color-btn'>
                      Get In Touch
                    </a>{' '}
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- section end--> */}
          </div>
          {/* <!-- Content end --> */}
          {/* <!-- footer--> */}
          <div className='height-emulator fl-wrap'></div>
          <footer className='main-footer fixed-footer'>
            {/* <!--footer-inner-->  */}
            <div className='footer-inner fl-wrap'>
              <div className='container'>
                <div className='partcile-dec' data-parcount='90'></div>
                <div className='row'>
                  <div className='col-md-2'>
                    <div className='footer-title fl-wrap'>
                      <span>Solonick</span>
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className='footer-header fl-wrap'>
                      <span>01.</span>Last Twitts
                    </div>
                    <div className='footer-box fl-wrap'>
                      <div className='twitter-swiper-container fl-wrap' id='twitts-container'></div>
                      <a href='#' className='btn float-btn trsp-btn'>
                        Follow
                      </a>
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className='footer-header fl-wrap'>
                      <span>02.</span> Subscribe / Contacts
                    </div>
                    {/* <!-- footer-box-->  */}
                    <div className='footer-box fl-wrap'>
                      <p>
                        Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by
                        email.
                      </p>
                      <div className='subcribe-form fl-wrap'>
                        <form id='subscribe' className='fl-wrap'>
                          <input className='enteremail' name='email' id='subscribe-email' placeholder='email' spellCheck='false' type='text' />
                          <button type='submit' id='subscribe-button' className='subscribe-button'>
                            <i className='fal fa-paper-plane'></i> Send{' '}
                          </button>
                          <label htmlFor='subscribe-email' className='subscribe-message'></label>
                        </form>
                      </div>
                      {/* <!-- footer-contacts--> */}
                      <div className='footer-contacts fl-wrap'>
                        <ul>
                          <li>
                            <i className='fal fa-phone'></i>
                            <span>Phone :</span>
                            <a href='#'>+489756412322</a>
                          </li>
                          <li>
                            <i className='fal fa-envelope'></i>
                            <span>Email :</span>
                            <a href='#'>yourmail@domain.com</a>
                          </li>
                          <li>
                            <i className='fal fa-map-marker'></i>
                            <span>Address</span>
                            <a href='#'>USA 27TH Brooklyn NY</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- footer end -->*/}
                      {/* <!-- footer-socilal -->*/}
                      <div className='footer-socilal fl-wrap'>
                        <ul>
                          <li>
                            <a href='#' target='_blank'>
                              <i className='fab fa-facebook-f'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#' target='_blank'>
                              <i className='fab fa-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#' target='_blank'>
                              <i className='fab fa-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#' target='_blank'>
                              <i className='fab fa-vk'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- footer-socilal end -->   */}
                    </div>
                    {/* <!-- footer-box end-->  */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!--footer-inne endr-->  */}
            {/* <!--subfooter-->  */}
            <div className='subfooter fl-wrap'>
              <div className='container'>
                {/* <!-- policy-box--> */}
                <div className='policy-box'>
                  <span>&#169; Solonick 2018 / All rights reserved. </span>
                </div>
                {/* <!-- policy-box end--> */}
                <a href='#' className='to-top color-bg'>
                  <i className='fal fa-angle-up'></i>
                  <span></span>
                </a>
              </div>
            </div>
            {/* <!--subfooter end-->  */}
          </footer>
          {/* <!-- footer end--> */}
          {/* <!-- contact-btn -->	 */}
          <a className='contact-btn color-bg' href='contacts.html'>
            <i className='fal fa-envelope'></i>
            <span>Get in Touch</span>
          </a>
          {/* <!-- contact-btn end -->	       */}
        </div>
        {/* <!--   content end --> */}
        {/* <!-- share-wrapper --> */}
        <div className='share-wrapper isShare'>
          <div className='share-title'>
            <span>Share</span>
          </div>
          <div className='close-share soa'>
            <span>Close</span>
            <i className='fal fa-times'></i>
          </div>
          <div className='share-inner soa'>
            <div className='share-container'></div>
          </div>
        </div>
        {/* <!-- share-wrapper end -->	 */}
      </div>
      {/* <!-- Main end --> */}
      {/* <!--=============== scripts  ===============--> */}
    </div>
  );
}
