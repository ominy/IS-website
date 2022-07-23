<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="bg1">
        <a class="logo">Ideal<span>Shotz</span></a>
        <nav>
            <ul>
                <!--<li><a href="index.html">Home</a></li>-->
                <li><a href="albums.html">Albums</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="contacts.html">Contacts</a></li>
            </ul>
        </nav>
    </div>
    <div class="separator"></div>
    <div class="listsection bg2">
        <strong class="head">Защо да изберете нас?</strong>
       <ul>
           <li>
                <strong>Опит в снимането на коли, модели, градска среда и природа</strong>
                <p>От години се занимаваме с фотография. Започнахме с градска фотография и впоследствие продължихме да правим снимки на пейзажи, коли и хора.</p>
           </li>
           <li>
               <strong>Възможност за снимане от всякакъв ъгъл</strong>
               <p>Разполагаме със техника, с която можем да снимаме както от земя така и от въздух. Можете да запомните събитието със снимки и видеа от дрон.</p>
           </li>
           <li>
               <strong>Млади, но с желание за развитие</strong>
               <p>Ние сме група от младежи, които се занимават с фотография вече няколко години. Работим с голямо желание и задължително се стремим да постигнем исканите от клиента резултати.</p>
           </li>
       </ul> 
    </div>
    <div class="separator"></div>
    <div class="opinions bg3">
        <strong class="head">Мнения за нас</strong>
        <ul>
            <li>
                <div class="opinion">
                    <blockquote>Останах много доволен от направените снимки. Всичко стана много бързо и качествено. Обработиха снимките и видеата само за ден.</blockquote>
                    <cite>П. Д.</cite>
                </div>
            </li>
            <li>
                <div class="opinion">
                    <blockquote>Екипът на Ideal Shotz подхожда с голямо желание и старание към всяка задача. Отделиха дълги часове, за да постигнем желаното и обработката на снимките стана в рамките на броени дни! Изключителна работа, силно препоръчвам! от</blockquote>
                    <cite>Strive for Style</cite>
                </div>
            </li>
            <li>
                <div class="opinion">
                    <blockquote>Останахме доволни от качеството и работата на младежите! Бяха много точни и свършиха работата навреме. Снимките перфектно отговарят на изискванията ни. Препоръчваме!</blockquote>
                    <cite>As Warrior</cite>
                </div>
            </li>
        </ul>
    </div>
    <footer style="position: relative;">
        <a href="https://www.instagram.com/ideal_shotz/" class="fa-brands fa-instagram fa-xl"></a>
        <a href="https://www.facebook.com/Ideal-Shotz-110269604537971" class="fa-brands fa-facebook fa-xl"></a>
        <a href="#" class="fa-brands fa-youtube fa-xl"></a>
        <a href="mailto:shotz.ideal@gmail.com" class="fa-solid fa-envelope fa-xl"></a>
    </footer>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-animation: 0.5s introCircle ease-in;
          animation: 0.5s introCircle ease-in;
  background-color: black;
}

.bg1 {
  min-height: 100%;
  background-image: url("../albums/DSC04753.jpg");
}

.bg2 {
  background-image: url("../albums/DSC_0590.jpg");
}

.bg3 {
  background-image: url("../albums/DSC04753.jpg");
}

.bg1, .bg2, .bg3 {
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
}

.separator {
  height: 10%;
  background-color: #141414;
}

nav {
  text-transform: uppercase;
  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  opacity: 0;
  -webkit-animation: 2s intro 0.3s forwards;
          animation: 2s intro 0.3s forwards;
}

nav ul li {
  padding: 1em;
}

nav ul li a {
  display: block;
  text-decoration: none;
  position: relative;
  font-weight: bold;
  padding: 0.3em 0;
  color: white;
}

nav ul li a:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.125em;
  background-color: red;
  opacity: 0;
  -webkit-transition: opacity 300ms, -webkit-transform 300ms;
  transition: opacity 300ms, -webkit-transform 300ms;
  transition: opacity 300ms, transform 300ms;
  transition: opacity 300ms, transform 300ms, -webkit-transform 300ms;
  -webkit-transform-origin: center;
          transform-origin: center;
  -webkit-transform: scale(0);
          transform: scale(0);
  border-radius: 5em;
}

nav ul li a:hover:after, nav ul li a:focus:after {
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}

.logo {
  position: absolute;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  top: 20%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  opacity: 0;
  -webkit-animation: 1s intro 0.25s forwards;
          animation: 1s intro 0.25s forwards;
}

.logo span {
  color: red;
}

.listsection {
  color: white;
  padding: 12% 0;
}

.listsection .head {
  padding: 0 0 7%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 2.4rem;
  font-weight: normal;
}

.listsection ul {
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 0;
  margin: 0 15%;
}

.listsection ul li {
  margin: 0 1em;
}

.listsection ul li strong {
  font-size: 1.5rem;
}

.opinions {
  color: white;
  padding: 12% 0;
}

.opinions .head {
  padding: 0 0 7%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 2.4rem;
  font-weight: normal;
}

.opinions ul {
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 0;
  margin: 0 15%;
}

.opinions ul li {
  margin: 0 1em;
  padding: 0 1em 0;
}

.opinions ul li .opinion {
  border-left: solid red 0.275em;
  padding-left: 1em;
}

.opinions ul li .opinion strong {
  font-size: 1.5rem;
}

.opinions ul li .opinion blockquote {
  margin: 0;
}

@-webkit-keyframes intro {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes intro {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes introCircle {
  from {
    -webkit-clip-path: circle(0%);
            clip-path: circle(0%);
  }
  to {
    -webkit-clip-path: circle(100%);
            clip-path: circle(100%);
  }
}

@keyframes introCircle {
  from {
    -webkit-clip-path: circle(0%);
            clip-path: circle(0%);
  }
  to {
    -webkit-clip-path: circle(100%);
            clip-path: circle(100%);
  }
}
/*# sourceMappingURL=mainn.css.map */
</style>
