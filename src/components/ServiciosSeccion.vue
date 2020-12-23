<template>
    <div>
        <div id="header" class="header">

        <a href="#inicio" class="logo">Reclute<span>Me</span></a>

        <nav>

            <ul class="navBar">
                <li><a href="/">Inicio</a></li>
                <li><a href="/#servicios">Servicios</a></li>
                <li><a href="/#testimonios">Testimonios</a></li>
                <li><a href="/#equipo">Equipo</a></li>
                <li><a href="#detailServ"> <button onclick="document.getElementById('botonLogin').style.display='block'" style="width:auto;" class="button1">Login</button> </a></li>
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

<!-- Sección de servicios detallados -->

    <section class="detailServ" id="detailServ">

        <div class="contenedorServ" >
            <div class="serv" v-for="(articulo, index) of articulos" :key="index">

                <div class="boxServ">
                    <img :src="articulo.urlImagen" alt="">
                </div>

                <div class="contenidoServ">
                    <h2>{{articulo.nombre}}</h2>
                    <p>{{articulo.descripcion}}</p>
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
    name: 'ServiciosSeccion',
    data: () => ({
    articulos: null,
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
 }),
       created(){
            this.$axios.get('/articulo/list')
              .then( (response) => {
                  this.articulos = response.data
                  
              })
        },
  
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