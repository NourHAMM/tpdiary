<template>

  <v-container>

    <v-row justify="center">

      <v-btn color="blue dark-5" @click.stop="adding = true">Enter Diary Log</v-btn>

      <v-dialog v-model="adding" max-width="480">

        <v-card>

          <v-card-title  class="headline" >Add Diary Logs</v-card-title>

          <v-card-text>

            <v-form>
                      
              <v-text-field v-model="newProduct.name" label="Logs Nature: GoodDeed, Grafteful for & Reading" />

              <v-textarea v-model="newProduct.description" label="Description" />

              <v-text-field v-model="newProduct.date" label="Enter Date" />

             

            </v-form>

          </v-card-text>

          <v-card-actions>

            <v-spacer />

            <v-btn text color="red darken-1" @click="clear">Cancel</v-btn>

            <v-btn text color="blue darken-1" @click="add">Add</v-btn>
            
          </v-card-actions>

        </v-card>

      </v-dialog>

    </v-row>

    <v-row justify="center" class="mt-8">

       <h1 class="mb-4">All Diary Logs</h1>

      <v-col cols="12">

        <v-data-table :headers="productsHeaders" :items="products" class="elevation-1"></v-data-table>

      </v-col>

    </v-row>

   
  </v-container>

</template>







<script>

import { db } from '../plugins/firebase'

export default {

  name: 'Inventory',

  data() {

    return {

      adding: false,

      newProduct: {

        name: '',

        description: '',

        date: 'ex 12-12-20',

      

      },

      productsHeaders: [

        { text: 'Log Nature', value: 'name' },

        { text: 'Description', value: 'description' },

        { text: 'Date', value: 'date' },

       

      ],

      products: [],

      orders: [],

    }

  },

  created() {

    this.bind()

  },

  methods: {

    clear() {

      this.newProduct = {

        name: '',

        description: '',

        date: 'ex 12-12-20',

       

      }

      this.adding = false

    },

    async add() {

      await db.collection('products').add(this.newProduct)

      this.clear()

    },

    async bind() {

      await this.$bind('products', db.collection('products'))

   

    },

  },

}

</script>