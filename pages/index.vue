<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <v-select
              v-model="message2"
              :items="['en', 'vi']"
              label="Lang"
              @change="changeLang(message2)"
            />
            <p>{{ $t('test.title2') }}: {{ message2 }}</p>
          </v-col>
          <v-col class="shrink">
            <v-tooltip right>
              <span>Source</span>
            </v-tooltip>
            <v-row justify="center">
              <v-dialog v-model="dialog1" max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn color="red lighten-2" dark v-on="on">
                    {{ $t('button.test') }}
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Use Google's location service?
                  </v-card-title>
                  <v-card-text>{{ message }}</v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="green darken-1" text @click="dialog1 = false">
                      Disagree
                    </v-btn>
                    <v-btn color="green darken-1" text @click="dialog1 = false">
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialog2" max-width="290">
                <template v-slot:activator="{ on }">
                  <v-btn color="red lighten-2" dark v-on="on">
                    Click Me
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Use Google's location service?
                  </v-card-title>

                  <v-card-text>{{ message }}</v-card-text>

                  <v-card-actions>
                    <v-spacer />

                    <v-btn color="green darken-1" text @click="dialog2 = false">
                      Disagree
                    </v-btn>

                    <v-btn color="green darken-1" text @click="dialog2 = false">
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialog3" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn slot="activator" color="primary" dark v-on="on">
                    Open Dialog
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">User Profile</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex md4 sm6 xs12>
                          <v-text-field label="Legal first name" required />
                        </v-flex>
                        <v-flex md4 sm6 xs12>
                          <v-text-field
                            hint="example of helper text only on focus"
                            label="Legal middle name"
                          />
                        </v-flex>
                        <v-flex md4 sm6 xs12>
                          <v-text-field
                            hint="example of persistent helper text"
                            label="Legal last name"
                            persistent-hint
                            required
                          />
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Email" required />
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Password" required type="password" />
                        </v-flex>
                        <v-flex sm6 xs12>
                          <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age"
                            required
                          />
                        </v-flex>
                        <v-flex sm6 xs12>
                          <v-select
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            autocomplete
                            chips
                            label="Interests"
                            multiple
                          />
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="blue darken-1" text @click.native="dialog3 = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click.native="dialog3 = false">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
            />
            <figure class="picture">
              <picture>
                <source data-srcset="~/assets/images/test-image.jpg?webp" type="image/webp">
                <source data-srcset="~/assets/images/test-image.jpg" type="image/jpg">
                <img
                  alt="Alternate text for the image"
                  class="lazyload"
                  data-src="~/assets/images/test-image.jpg"
                >
              </picture>
            </figure>
            <figure class="picture">
              <img
                alt="Alternate text for the image"
                class="lazyload"
                data-src="~/assets/images/test-image.jpg"
              >
            </figure>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data () {
    return ({
      message2: '',
      drawer: null,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      message: 'Test message',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    })
  },
  methods: {
    changeLang (lang) {
      this.$store.commit('SET_LANG', lang)
      this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
    }
  }
}
</script>
