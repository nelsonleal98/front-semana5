<template>
    <div>
       <v-data-table
      :headers="headers"
      :items="articulos"
      :loading ="cargando"
      loading-text="Cargando...Por favor espere..."
      sort-by="id"
      class="elevation-1"
      
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Articulos</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Agregar Articulo
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                      <v-text-field
                        v-model="editedItem.codigo"
                        label="Codigo del articulo"
                      ></v-text-field>
                  </v-row>
                  <v-row>
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre del articulo"
                      ></v-text-field>
                  </v-row>
                  <v-row>
                      <v-textarea
                        v-model="editedItem.descripcion"
                        label="Descripción"
                        counter="240"
                      ></v-textarea>
                  </v-row>
                  <v-row>
                      <v-text-field
                        v-model="editedItem.urlImagen"
                        label="URL de la imagen"
                      ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-select
                      v-model="editedItem.categoria"
                      label="Categoria"
                      :items="categorias"
                      item-text="nombre"
                      item-value="id"
                      return-object
                    ></v-select>
                  </v-row>
                  
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">¿Desea cambiar el estado del articulo?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-checkbox-marked-circle-outline
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
    </div>
</template>
<script>
//import axios from "axios";
export default {
  
    data: () => ({
    dialog: false,
    dialogDelete: false,
    cargando: true,
    iconocambio: '',
    headers: [
      {
        text: 'Articulo',
        align: 'start',
        sortable: false,
        value: 'nombre',
      },
      { text: 'ID', value: 'id', sortable: false},
      { text: 'codigo', value: 'codigo' },
      { text: 'Descripción', value: 'descripcion', sortable: false },
      { text: 'Imagen', value: 'urlImagen', sortable: false},
      { text: 'Categoria', value: 'categoria.nombre' },
      { text: 'Estado', value: 'estado' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    articulos: [],
    categorias: [],
    editedIndex: -1,
    editedItem: {
      id: 0,
      nombre: '',
      descripcion: '',
      urlImagen: '',
      estado: 0,
      categoria: {
        id: 0,
        nombre: '',
        estado: 0,
      }
    },
    defaultItem: {
      id: 0,
      nombre: '',
      descripcion: '',
      urlImagen: '',
      estado: 0,
      categoria: {
        id: 0,
        nombre: '',
        estado: 0,
      }
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nuevo Articulo' : 'Editar Articulo'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.cargando = 'loading'
      this.listCategorias()
      this.list()
    },
    list(){
      
      this.$axios.get('/articulo/list')
        .then( (response) => {
            this.articulos = response.data
            this.cargando = false
        })
        .catch(error =>{
          return error
        })
      
    },

    listCategorias(){
      
      this.$axios.get('/categoria/list')
        .then( (response) => {
            this.categorias = response.data
        })
        .catch(error =>{
          return error
        })
      
    },

    editItem (item) {
      
      this.editedIndex = this.articulos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true

      
    },

    deleteItem (item) {
      this.editedIndex = this.articulos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      if(this.editedItem.estado === 1){
          this.$axios.put('/articulo/deactivate', {id: this.editedItem.id})
          .then( () =>{
        this.list()
      })
      }else{
          this.$axios.put('/articulo/activate', {id: this.editedItem.id})
          .then( () =>{
        this.list()
      })
      }
      
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        //Editar en base de datos
      let objetoBusqueda = {
        codigo: this.editedItem.codigo,
        nombre: this.editedItem.nombre,
        descripcion: this.editedItem.descripcion,
        urlImagen: this.editedItem.urlImagen,
        categoriaId: this.editedItem.categoria.id,
        id: this.editedItem.id
      }
      this.$axios.put('/articulo/update',objetoBusqueda)
      .then( () =>{
        this.list()
      })
        Object.assign(this.articulos[this.editedIndex], this.editedItem)
      } else {
        //Editar en base de datos
        let objetoBusqueda = {
        codigo: this.editedItem.codigo,
        nombre: this.editedItem.nombre,
        descripcion: this.editedItem.descripcion,
        urlImagen: this.editedItem.urlImagen,
        categoriaId: this.editedItem.categoria.id,
        estado: 1
      }
      this.$axios.post('/articulo/add',objetoBusqueda)
      .then( () =>{
        this.list()
      })
        this.articulos.push(this.editedItem)
      }
      //Actualizar la tabla
      
      this.close()
    },
  },
}
</script>