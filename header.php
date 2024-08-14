<!DOCTYPE html>
<html lang="en-US">

<head>
  <title>Vallfield - capital, transactions, and tech</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="author" content="ragnar" />

  <!-- switzer font css -->
  <link
    rel="stylesheet"
    href="./fe/fonts/css/switzer.css"
    type="text/css"
    media="all" />
  <!-- font awesome css -->
  <link
    rel="stylesheet"
    href="./fe/fonts/css/font-awesome.min.css"
    type="text/css"
    media="all" />
  <!-- bootstrap grid css -->
  <link
    rel="stylesheet"
    href="./fe/css/plugins/bootstrap-grid.css"
    type="text/css"
    media="all" />
  <!-- swiper css -->
  <link
    rel="stylesheet"
    href="./fe/css/plugins/swiper.min.css"
    type="text/css"
    media="all" />
  <!-- magnific popup -->
  <link
    rel="stylesheet"
    href="./fe/css/plugins/magnific-popup.css"
    type="text/css"
    media="all" />
  <!-- plax css -->
  <link
    rel="stylesheet"
    href="./fe/css/style.css"
    type="text/css"
    media="all" />

  <!-- Favicon -->
  <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
  <link rel="icon" href="favicon.png" type="image/x-icon" />
  <style>
        /* Scoped Preloader Styles */
        .preloader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #111;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .preloader {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .preloader .letter {
            font-size: 8vw; /* Responsive font size based on viewport width */
            font-weight: bold;
            color: #fff;
            opacity: 0;
            animation: preloaderFadeIn 1s ease-in-out forwards;
        }

        /* Animation */
        @keyframes preloaderFadeIn {
            0% {
                opacity: 0;
                transform: translateY(50px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Sequential Animation Delay */
        .preloader .letter:nth-child(1) { animation-delay: 0.1s; }
        .preloader .letter:nth-child(2) { animation-delay: 0.2s; }
        .preloader .letter:nth-child(3) { animation-delay: 0.3s; }
        .preloader .letter:nth-child(4) { animation-delay: 0.4s; }
        .preloader .letter:nth-child(5) { animation-delay: 0.5s; }
        .preloader .letter:nth-child(6) { animation-delay: 0.6s; }
        .preloader .letter:nth-child(7) { animation-delay: 0.7s; }
        .preloader .letter:nth-child(8) { animation-delay: 0.8s; }
        .preloader .letter:nth-child(9) { animation-delay: 0.9s; }

        /* Media Queries for Smaller Devices */
        @media (max-width: 600px) {
            .preloader .letter {
                font-size: 12vw; /* Increase font size for very small screens */
            }
        }

        @media (min-width: 1200px) {
            .preloader .letter {
                font-size: 4vw; /* Decrease font size for larger screens */
            }
        }
    </style>
</head>

<body>
  <!-- wrapper -->
  <div
    id="smooth-wrapper"
    class="mil-wrapper"
    style="background-color: #4D1F1F">
    <!-- preloader -->
    <!-- <div class="mil-preloader">
      <div class="mil-load"></div>
      <p class="h2 mil-mb-30">
        <span class="mil-light mil-counter" data-number="100">100</span><span class="mil-light">%</span>
      </p>
      
    </div> -->
    <!-- preloader end -->
    <div class="preloader-container" id="preloader">
      <div class="preloader">
        <div class="letter">V</div>
        <div class="letter">A</div>
        <div class="letter">L</div>
        <div class="letter">L</div>
        <div class="letter">F</div>
        <div class="letter">I</div>
        <div class="letter">E</div>
        <div class="letter">L</div>
        <div class="letter">D</div>
      </div>
    </div>

    <!-- scroll progress -->
    <div class="mil-progress-track">
      <div class="mil-progress"></div>
    </div>
    <!-- scroll progress end -->

    <!-- back to top -->
    <div class="progress-wrap active-progress"></div>

    <!-- top panel end -->
    <div class="mil-top-panel mil-dark-2">
      <div class="container">
        <a href="./index-2.html" class="mil-logo">
          <img src="./fe/img/logo.png" alt="Plax" width="83" height="32" />
        </a>
        <nav class="mil-top-menu">
          <ul>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./about.html">About</a>
            </li>
            <li>
              <a href="./services.html">Services</a>
            </li>
            <li class="mil-has-children">
              <a href="#.">Blog</a>
              <ul>
                <li><a href="./blog.html">Blog list</a></li>
                <li><a href="./publication.html">Blog details</a></li>
              </ul>
            </li>
            <li>
              <a href="./contact.html">Contact</a>
            </li>
            <li class="mil-has-children">
              <a href="#.">Pages</a>
              <ul>
                <li><a href="./career.html">Career</a></li>
                <li><a href="./career-details.html">Career details</a></li>
                <li><a href="./price.html">Pricing</a></li>
                <li><a href="./account/index">Register</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="mil-menu-buttons">
          <a href="./account/index" class="mil-btn mil-sm">Log in</a>
          <div class="mil-menu-btn">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <!-- top panel end -->