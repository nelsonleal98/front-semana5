<template>

    <div>
        <div class="container">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-dark">Email address</label>
            <input v-model="login.email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label text-dark">Password</label>
            <input @keyup.enter="iniciarSesion" v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button @click="iniciarSesion" type="submit" class="btn btn-dark">Iniciar Sesion</button>
    </div>
    </div>

</template>

<script>
import swal from 'sweetalert';

export default {

  name: 'Login',
  data() {
      return{
          login:{
              email: '',
              password: '',
          }
      }
      
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
          }
      }
}
</script>

