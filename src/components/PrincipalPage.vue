<template>
    <div class="container-principal">
   
<div id="header" class="header">

        <a href="#inicio" class="logo">Reclute<span>Me</span></a>

        <nav>

            <ul class="navBar">
                <li><a href="#banner">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#testimonios">Testimonios</a></li>
                <li><a href="#equipo">Equipo</a></li>
                <li><a href="#"> <button onclick="document.getElementById('botonLogin').style.display='block'" style="width:auto;" class="button1">Login</button> </a></li>
            </ul>

        </nav>

</div>

<!-- Boton Login Form -->
	<div id="botonLogin" class="popLogin"> 

		<v-form
      ref="form"
      v-model="form"
      class="contenidoLogin"
      >
            <div class="imgBox"> 
				<span onclick="document.getElementById('botonLogin').style.display='none'" class="close">×</span> 
			</div> 

			<div class="container"> 
				<label><b>Usuario o e-mail</b></label> 
        <v-text-field
                        v-model="login.email"
                        :rules="[rules.email]"
                        placeholder="name@example.com"
                        type="email"
                      ></v-text-field>
				<!-- <input class="input-t" v-model="login.email" type="text" placeholder="Escribe tu usuario o email" name="uname" required>  -->

				<label><b>Contraseña</b></label> 
        <v-text-field
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        v-model="login.password"
                        :rules="[rules.required]"
                        placeholder="Escribe tu contraseña"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        @keyup.enter="iniciarSesion"
                      ></v-text-field>
				<!-- <input class="input-p" @click:append="show1 = !show1" @keyup.enter="iniciarSesion" v-model="login.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"  placeholder="Escribe tu contraseña" name="psw" required>  -->
        
			</div> 
       <div class="container" style="background-color:white"> 
        <v-btn
                :disabled="!form"
                  type="button"
                  class="button"
                  color= "#0088A9"
                  @click="iniciarSesion"
                >
                  Iniciar Sesión
                </v-btn>
				<!-- <button @click="iniciarSesion" type="button" class="button" >Iniciar Sesión</button>  -->
       </div>     
		</v-form>
	</div> 

  <!-- --------------- Sección de Banner y Slider ---------------  -->
  <section class="banner" id="banner">
      <div class="cont-slider">
      <v-app id="inspire">
          
            <v-carousel hide-delimiters
            show-arrows-on-hover
            height="750">
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
            >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div 
              align="center"
              justify="center"
              class="info-slider"
              >
                <h2 class="nombreCompañia"> {{item.titulo}} </h2>
                <p class="presentacion"> {{item.text}}</p>
                <a class="mas" href=""> DIME MÁS</a>
              </div>
            </v-row>
            </v-carousel-item>
            </v-carousel>
        </v-app>
        </div>

    </section>
<!-- --------------- Sección de Servicios ---------------  -->
    
    <section class="servicios" id="servicios">
        <div class="tituloServicios">

            <h2> <span>S</span>ervicios</h2>
            <p>Disfruta de los servicios que tenemos para ti</p>

        </div>

        <div class="tresServ">
            <div class="box">

                <div class="imgServ">
                    <img src="./images/serv1.jpg" alt="">
                </div>
                
                <div class="nombreServicio">
                    <h3>Talento en Redes</h3>
                </div>

            </div>

            <div class="box">

                <div class="imgServ">
                    <img src="./images/serv2.jpg" alt="">
                </div>
                
                <div class="nombreServicio">
                    <h3>Reclutamiento</h3>
                </div>

            </div>

            <div class="box">

                <div class="imgServ">
                    <img src="./images/serv3.jpg" alt="">
                </div>
                
                <div class="nombreServicio">
                    <h3>Capacitaciones</h3>
                </div>

            </div>
            
        </div>

        <div class="masServ">
            <a href="/servicios" class="mas">Ver Mas</a>
        </div>
    </section>

<!-- --------------- Sección de testimonios ---------------  -->

    <section class="testimonios" id="testimonios">
        <div class="tituloTestimonios">

            <h2> <span>T</span>estimonios</h2>
            <p>Enterate de lo que dicen nuestros clientes</p>

        </div>

        <div class="contenido">
            <div class="box">

                <div class="imgTest">
                    <img src="./images/tes1.jpg">
                </div>

                <div class="textTest">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi expedita perferendis quisquam, molestias cumque impedit vitae dolorum inventore adipisci aperiam aut minima veritatis provident illo. Nam voluptas adipisci vero ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>

                    <h3>CEO Postobon</h3>
                </div>

            </div>

            <div class="box">

                <div class="imgTest">
                    <img src="./images/tes2.jpg">
                </div>

                <div class="textTest">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi expedita perferendis quisquam, molestias cumque impedit vitae dolorum inventore adipisci aperiam aut minima veritatis provident illo. Nam voluptas adipisci vero ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>

                    <h3>CEO Petrobras</h3>
                </div>
                
            </div>

            <div class="box">

                <div class="imgTest">
                    <img src="./images/tes3.jpg" alt="">
                </div>

                <div class="textTest">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi expedita perferendis quisquam, molestias cumque impedit vitae dolorum inventore adipisci aperiam aut minima veritatis provident illo. Nam voluptas adipisci vero ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>

                    <h3>CEO Imusa</h3>
                </div>
                
            </div>

        </div>

        

    </section>

<!-- --------------- Sección de Equipo ---------------  -->

<section class="equipo" id="equipo">
    <div class="tituloTeams">

        <h2> <span>N</span>uestro <span>E</span>quipo</h2>
        <p>Tienes el mejor personal a tu disposición</p>

    </div>

    <div class="integrantes">
        <div class="box">

            <div class="imgTeams">
                <img src="./images/Daniel.png" alt="">
            </div>

            <div class="integrante">
                <h3>Daniel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div>

        <div class="box">
            
            <div class="imgTeams">
                <img src="./images/Luis.png" alt="">
            </div>

            <div class="integrante">
                <h3>Luis Alberto</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div>

        <div class="box">
            
            <div class="imgTeams">
                <img src="./images/Luisa.png" alt="">
            </div>

            <div class="integrante">
                <h3>Luisa</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div>

        <div class="box">
            
            <div class="imgTeams">
                <img src="./images/Nelson.png" alt="">
            </div>

            <div class="integrante">
                <h3>Nelson</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div>

        <div class="box">
            
            <div class="imgTeams">
                <img src="./images/Miguel.png" alt="">
            </div>

            <div class="integrante">
                <h3>Miguel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div>

    </div>
</section>

<!-- --------------- Sección Footer ---------------  -->

<footer class="footer">
    <div class="footerI">

        <a href="#banner" class="logoFooter">Todo<span>Tech</span></a>
        <p>Empresa dedicada a la venta de tecnología. Especializada en partes para computadores personales para el hogar y la oficina, perifericos, matenimientos y reparaciones.</p>
    
    </div>

    <div class="footerI">
            <li>
            <h2>Nuestros Productos</h2>

            <ul class="lista">
                <li><a href="#">Monitores</a></li>
                <li><a href="#">Componentes CPU</a></li>
                <li><a href="#">Accesorios</a></li>
                <li><a href="#">Monitores</a></li>
                <li><a href="#">Camaras</a></li>
            </ul>
            </li>
    </div>

    <div class="footerI">
        <li>   
            <h2>Mapa del Sitio</h2>

            <ul class="lista">
                <li><a href="#banner">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#noticias">Noticias</a></li>
                <li><a href="#equipo">Equipo</a></li>
                <li><a href="#oficina">Oficina</a></li>
                <li><a href="#hogar">Hogar</a></li>
            </ul>
        </li> 

    </div>

    <div class="footerI">
        <li>
            <h2>Dirección</h2>

            <ul class="lista">
                <li><a href="#">Av. Almendritas N° 89 - 16</a></li>
                <li><a href="#">Barrio Almendron</a></li>
                <li><a href="#">Macondo</a></li>
                <li><a href="#">Colombia</a></li>
            </ul>

        </li>
    </div>
</footer>

<div class="footerDerechos">
    <p>Todos los Derechos Reservados &copy; 2020</p>
</div>
  </div>
</template>

<script>

  export default {
    name: 'PrincipalPage',
 data: () => ({
     current: 0,
     show1: false,
     show1: false,
      form: false,
      email: undefined,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        required: v => !!v || 'This field is required',
      },
     login:{
              email: '',
              password: '',
          },
     items: [
        {
          src: './images/section3.jpg',
          titulo: 'La mejor asesoría',
          text: 'Somos la compañia número uno en el país en asesoría para contrataciones. Tenemos expertos en todo el sector que te ayudaran a reclutar el mejor talento mediante el uso de redes sociales. Consulta con nuestros expertos.',

        },
        {
          src: './images/section2.jpg',
          titulo: 'Recluta con facilidad',
          text: 'Promueve el hábito en tu empresa para que todos tus empleados enganchen futuros candidatos para tu empresa',
        },
        {
          src: './images/section1.jpg',
          titulo: '¿Redes sociales y empleo?',
          text: 'Así es, las redes sociales son el nuevo Boom del siglo XXI en procesos de selección y empleabilidad',
        },
      ],
          
 }),
      
  
  methods:{
            
          async iniciarSesion(){
              //Funcion de iniciar sesion
              
            try{
                /* Esto funciona
                let response = await this.$axios.post( '/usuario/login', this.login )
                let token = response.data.tokenReturn;
                let usuario = response.data.usuario; */

                this.$axios.post('/usuario/login', this.login)

                .then((response) =>{
                    let token = response.data.tokenReturn;
                    let usuario = response.data.user;
                    let razon = response.data.reason;
                    if(token){
                        localStorage.setItem('token', token)
                        localStorage.setItem('usuario',JSON.stringify(usuario))
                        swal("Exito!", "Ha iniciado sesión correctamente!", "success");
                        this.$router.push('/administracion/home')
                    }

                })
                .catch(error =>{
                    swal("Oops!", "Usuario o Contraseña incorrectos o inactivos!", "error");
                })

                
            }catch (error){
                swal("Oops!", "Something went wrong!", "error");
            }
          },

      }
  }
</script>

<style>


@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap");

* {
  font-family: "Poppins", sans-serif;
  margin: 0px;
  padding: 0px;
  /* box-sizing: border-box; */
}
.container-principal{
  height: 100%;
}
/* body {
  min-height: 1000px;
} */

p {
  font-weight: 300;
  color: white;
}

.header {
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000; /*para poner el header encima de todo*/
  transition: 0.7s;
  padding: 30px 100px;
}

.header .navBar li a:hover {
  color: yellow;
}

/* ------------ CAMBIOS DE ESTILO PARA EL NAVBAR FLOTANTE ------------ */

.header.headerFlotante {
  background: white;
  padding: 10px 100px;
  box-shadow: lightslategray;
}

.header.headerFlotante .logo {
  color: black;
}

.header.headerFlotante .logo span {
  color: blue;
}

.header.headerFlotante .navBar li a {
  color: black;
}

.header.headerFlotante .navBar li a:hover {
  color: blue;
}

/* ------------ HASTA AQUI ------------ */

.logo {
  color: white;
  font-size: 2em;
  font-weight: 800;
  text-decoration: none;
}

.logo span {
  color: yellow;
  text-decoration: none;
  font-size: 1.2em;
}

.navBar {
  position: relative;
  display: flex;
  align-items: center;
}

.navBar li {
  list-style: none;
  margin-left: 40px;
  align-items: center;
}

.navBar li a {
  text-decoration: none;
  color: white;
  font-weight: 300;
  font-size: 1.2em;
}

.navBar button {
  padding: 5px 25px;
  font-size: 1em;
  background: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.navBar button:hover {
  background: rgba(0, 136, 169, 0.8);
  text-decoration: none;
  color: white;
}

/* 100 vh para que la imagen ocupe todo el alto disponible para la sección*/

.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background-image: url(./images/section1.jpg);*/
  background-size: cover;
}
.cont-slider{
    width: 100%;
}

.slogan {
  text-align: center;
  color: white;
  max-width: 1200px;
}

/*tamaño 6 veces el tamaño de la fuente del documento*/
.nombreCompañia {
  font-size: 5em;
  color: white;
  text-align: center;
}

.presentacion {
  font-size: 1em;
  color: white;
}

.mas {
  font-size: 1em;
  display: inline-block;
  margin-top: 15px;
  background: yellow;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 10px 20px;
  transition: 0.7s;
  font-weight: 500;
}

.mas:hover {
  letter-spacing: 4px;
}

/* ------------ESTILOS PARA LA SECCIÓN QUIENES SOMOS------------ */

/*section {
  padding: 100px;
}*/

.about {
  padding-top: 50px;
  height: 100%;
}


.aboutColumn {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.aboutColumn .descripcionP {
  padding-left: 10px;
  width: 600px;
}
.aboutColumn .descripcionI {
  padding-left: 50px;
  width: 400px;
}

.tituloAbout {
  color: black;
  font-size: 3em;
  font-weight: 400;
}

.tituloAbout span {
  color: blue;
  font-weight: 800;
}

.descripcion .box .imgQuienesSomos{
  width: 800px;
  height: 600px;

}
.descripcionP p {
  color: black;
  font-size: 18px;
  text-align: justify;
  margin-bottom: 20px;
}

/* ------------ESTILOS PARA LA SECCIÓN SERVICIOS------------ */

.tituloServicios {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tituloServicios p {
  color: white;
  margin-bottom: 15px;
}

.tituloServicios h2 {
  color: white;
  font-size: 3em;
  font-weight: 400;
  margin-top: 40px;
}

.tituloServicios span {
  color: yellow;
  font-weight: 800;
}

.servicios .tresServ {
  justify-content: center;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}

.servicios .tresServ .box {
  width: 340px;
  margin: 20px;
  border: 15px solid white;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.08);
}

.servicios .tresServ .box .imgServ {
  width: 100%;
  position: relative;
  height: 300px;
}

.servicios .tresServ .box .imgServ img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.servicios .tresServ .box .nombreServicio {
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.servicios .tresServ .box .nombreServicio h3 {
  font-weight: 400;
}

.servicios {
  background: url(./images/section.jpg);
  background-size: cover;
}

.masServ {
  text-align: center;
  padding-bottom: 30px;
}

/* ------------ESTILOS PARA LA SECCIÓN TESTIMONIOS------------ */

.tituloTestimonios {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
}

.tituloTestimonios p {
  color: black;
  margin-bottom: 15px;
}

.tituloTestimonios h2 {
  color: black;
  font-size: 3em;
  font-weight: 400;
}

.tituloTestimonios span {
  color: blue;
  font-weight: 800;
}

.testimonios .contenido {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.testimonios .contenido .box {
  margin: 20px;
  padding: 40px;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #142850;
}

.testimonios .contenido .box .imgTest {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
}

.testimonios .contenido .box .imgTest img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonios .contenido .box .textTest {
  text-align: center;
}

.testimonios .contenido .box .textTest p {
  font-style: italic;
}

.testimonios .contenido .box .textTest h3 {
  margin-top: 20px;
  font-weight: 400;
  font-size: 22px;
  color: white;
}

/* ------------ESTILOS PARA LA SECCIÓN EQUIPO------------ */

.equipo {
  background: url(./images/section4.jpg);
  background-size: cover;
}

.tituloTeams {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
}

.tituloTeams h2 {
  color: white;
  font-size: 3em;
  font-weight: 400;
}

.tituloTeams span {
  color: yellow;
  font-weight: 800;
}

.equipo .integrantes {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.equipo .integrantes .box {
  width: 340px;
  margin: 20px;
  padding: 40px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.equipo .integrantes .box .imgTeams {
  width: 200px;
  height: 300px;
  position: relative;
  margin-bottom: 0;
}

.equipo .integrantes .box .imgTeams img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.equipo .integrantes .box .integrante {
  text-align: center;
}

.equipo .integrantes .box .integrante h3 {
  font-weight: 400;
  font-size: 1.7em;
  margin-top: 30px;
}

.equipo .integrantes .box .integrante p {
  color: black;
  font-weight: 200;
  font-size: 1em;
  margin-top: 5px;
}

.equipo .tituloTeams h2 {
  margin-top: 30px;
}

/* ------------ESTILOS PARA LA SECCIÓN FOOTER------------ */

.footer {
  display: flex;
  flex-flow: row;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
}

.logoFooter {
  color: black;
  font-size: 1.4em;
  font-weight: 800;
  text-decoration: none;
}

.logoFooter span {
  color: blue;
  text-decoration: none;
  font-size: 1.2em;
}

.footerI p {
  color: black;
}

.footer .footerI {
  width: 420px;
  margin: 20px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.footer .footerI .lista li {
  list-style: none;
  text-decoration: none;
}

.footer .footerI .lista a {
  text-decoration: none;
}

.footer .footerI li {
  list-style: none;
}

.footer .footerI h2 {
  font-weight: 300;
}

.footerDerechos p {
  color: black;
  text-align: center;
}

.footerDerechos {
  margin-bottom: 20px;
}

/* ------------ SECCION ESTILOS DEL SLIDER ------------ */

.info-slider{
    width: 1000px;
}

#slider,
.wrap,
.slide-content {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}

.wrap {
  position: relative;
}

.slide {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide1 {
  background-image: url("./images/section3.jpg");
}
.slide2 {
  background-image: url("./images/section2.jpg");
}
.slide3 {
  background-image: url("./images/section1.jpg");
}

.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: cover;
}

.slide-content span {
  font-size: 5rem;
  color: #fff;
}

.arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -35px;
  width: 0;
  height: 0;
  border-style: solid;
}

#arrow-left {
  border-width: 30px 40px 30px 0;
  border-color: transparent #fff transparent transparent;
  left: 0;
  margin-left: 30px;
}

#arrow-right {
  border-width: 30px 0 30px 40px;
  border-color: transparent transparent transparent #fff;
  right: 0;
  margin-right: 30px;
}

.slide-content span {
  font-size: 2em;
}

/* ----------------------------------- ESTILOS FORM DEL LOGIN ------------------------------------- */

.input-t,
.input-p {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.h1 {
  margin: 8px 36%;
  background-color: white;
}

.button1:hoverf {
  opacity: 0.8;
}

.registratebtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f5584d;
}

.imgBox {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

.popLogin {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 60px;
}

.contenidoLogin {
  background-color: #fefefe;
  margin: 5% auto 15% auto;

  border: 1px solid #888;
  width: 400px;
  margin-left: 35%;
  border: 6px solid #edebec;
}

.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

.button {
  background-color: rgba(0, 136, 169, 1);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  opacity: 0.8;
}

/* -------------------- ESTILOS PAGINA DE SERVICIOS DETALLADOS ------------------ */

.servicesSheet {
  padding: 10px 100px;
}

.detailServ {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(./images/section1.jpg);
  background-size: cover;
}

.contenedorServ {
  position: relative;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  flex-wrap: wrap;
}

.contenedorServ p {
  color: black;
}

.contenedorServ .serv {
  position: relative;
  background-color: white;
  max-width: 1000px;
  margin: 10px;
  padding: 15px;
  display: flex;
}

.contenedorServ .serv .boxServ {
  max-width: 150px;
  flex: 0 0 150px;
}

.contenedorServ .serv .boxServ img {
  max-width: 100%;
  height: 150px;
}

.contenedorServ .serv .contenidoServ {
  margin-left: 20px;
}


</style>