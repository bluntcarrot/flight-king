<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md10
        lg9

      >
        <material-card>
          <v-card-title class="v-card--material__header v-card v-sheet theme--dark search-offset elevation-10">
            
              <v-flex
                xs12
              >
                <v-img
                  :src="imgLink"
                  aspect-ratio="1"
                  max-height="125"
                  width="125"
                  class=""
                  center
                >
                </v-img>
              </v-flex>
            <div>
              <!-- <img :src="imgLink" /> -->
              <!-- <h3 class="headline mb-0">Flight King</h3> -->
              <div> <p>Search Flights</p> </div>
            </div>

            <br>
            <v-container
              fill-height
              fluid
              grid-list-xl>
              <!-- <v-layout wrap> -->
              <v-layout row wrap>

                <v-flex
                  xs12
                  md2
                  d-flex
                  class="small-input">
                  <div style="text-align: center;">
                  <div style="display: inline-block; width:100px;">
                  <v-select
                    v-model="roundTrip"
                    :items="['Round trip','One way']"
                    background-color="inherit"
                    append-icon=""
                    color="inherit"
                    width="100%"
                    dense
                    label=""
                    value="round"
                    @change="tripChange"
                  >
                    <template v-slot:selection="{ item, index }">
                      <div style="background:inherit !important;display:inherit;width:100%;">
                        <v-chip
                          v-if="index === 0"
                          color="white"
                          class="small"
                          text-color="#211CA6">
                          <span><strong style="font-size:13px;">{{ item }}</strong></span>
                        </v-chip>
                        <div class="v-input__append-inner">
                          <div class="v-input__icon v-input__icon--append">
                            <i aria-hidden="true" class="v-icon mdi mdi-menu-down theme--light inherit--text"></i>
                          </div>
                        </div>
                      </div>
                    </template>
                  </v-select>
                  </div>
                  </div>
                </v-flex>


                <v-flex
                  xs12
                  md6
                  offset-md4
                  d-flex
                  class="small-input"
                  style="padding-top:2px;">
                  <!-- style="padding-top:2px; margin-left: auto;"> -->
                  <div class="text-xs-center">
                    <label><small><strong>Passengers</strong></small></label>
                    <br>

                    <div>
                      <v-chip
                        color="white"
                        text-size="font-size: 1.5em;"
                        text-color="#211CA6"
                        @click="showModifyPassengers('Remove')"
                      >
                        <div style="font-size: 1.5em !important;font-weight: 600;">&nbsp;-&nbsp;</div>
                      </v-chip> {{ passengerTotal }}
                      <v-chip
                        color="white"
                        text-color="#211CA6"
                        @click="showModifyPassengers('Add')"
                      >
                        <div style="font-size: 1.5em !important;font-weight: 500;">&nbsp;+&nbsp;</div>
                      </v-chip>
                    </div>

                  </div>
                </v-flex>

              </v-layout>
            </v-container>

            <v-container
              fill-height
              fluid
              grid-list-xl
              v-show="modifyAddPassengers || modifyRemovePassengers">
              <v-layout wrap>

                <v-flex
                  v-show="modifyAddPassengers"
                  xs14
                  class="py-2 text-xs-center">
                    <v-alert
                      color="white"
                      outline
                      icon="mdi-plus"
                      :value="true"
                      type="success"
                    >
                      <p>Add Passenger</p>
                      <span style="background:inherit;">
                        <v-btn flat value="adult" @click="modifyPassengerTotal('adults', false)">
                          <strong>{{ adults }}
                          Adults</strong>
                        </v-btn>
                        <v-btn flat value="children" @click="modifyPassengerTotal('children', false)">
                          <strong>{{ children }}
                          Children</strong>
                        </v-btn>
                        <v-btn flat value="infant" @click="modifyPassengerTotal('infants', false)">
                          <strong>{{ infants }}
                          Infants</strong>
                        </v-btn>
                      </span>
                   </v-alert>
                </v-flex>

                <v-flex
                  v-show="modifyRemovePassengers"
                  xs14
                  class="py-2 text-xs-center">
                    <v-alert
                      color="white"
                      outline
                      :value="true"
                      icon="mdi-minus"
                      type="error"
                    >
                      <p>Remove Passenger</p>
                      <span style="background:inherit;">
                        <v-btn flat value="adult" @click="modifyPassengerTotal('adults', true)">
                          <strong>{{ adults }}
                          Adults</strong>
                        </v-btn>
                        <v-btn flat value="children" @click="modifyPassengerTotal('children', true)">
                          <strong>{{ children }}
                          Children</strong>
                        </v-btn>
                        <v-btn flat value="infant" @click="modifyPassengerTotal('infants', true)">
                          <strong>{{ infants }}
                          Infants</strong>
                        </v-btn>
                      </span>
                   </v-alert>
                </v-flex>

              </v-layout>
            </v-container>
          </v-card-title>

          <v-form>
            <v-container py-0>
              <v-layout wrap>

                <v-flex
                  xs12
                  md6
                >
                  <label style="color: rgba(0,0,0,.54);"><small>From</small></label>
                  <model-list-select
                    :list="fromResults"
                    :custom-text="optionDisplayToFromText"
                    v-model="searchFrom"
                    class="purple-input"
                    option-value="code"
                    placeholder="Departing From"
                    @searchchange="onFromChange"/>
                </v-flex>

                <v-flex
                  xs12
                  md6
                >
                  <label style="color: rgba(0,0,0,.54);"><small>To</small></label>
                  <model-list-select
                    :list="toResults"
                    :custom-text="optionDisplayToFromText"
                    v-model="searchTo"
                    class="purple-input"
                    option-value="code"
                    placeholder="Arriving at"
                    @searchchange="onToChange"
                    @select="onSelect"/>
                </v-flex>

                <v-flex
                  xs12
                  md6>
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="departureDate"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="departureDate"
                        label="Departure Date"
                        prepend-icon="mdi-airplane-takeoff"
                        readonly
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="departureDate"
                      no-title
                      scrollable>
                      <v-spacer/>
                      <v-btn
                        flat
                        color="primary"
                        @click="menu = false">Cancel</v-btn>
                      <v-btn
                        flat
                        color="primary"
                        @click="$refs.menu.save(departureDate)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-flex>

                <v-flex
                  v-show="showReturn"
                  xs12
                  md6>
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="returnDate"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="returnDate"
                        label="Return Date"
                        prepend-icon="mdi-airplane-landing"
                        readonly
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="returnDate"
                      no-title
                      scrollable>
                      <v-spacer/>
                      <v-btn
                        flat
                        color="primary"
                        @click="menu2 = false">Cancel</v-btn>
                      <v-btn
                        flat
                        color="primary"
                        @click="$refs.menu2.save(returnDate)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>

                </v-flex>

                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn
                    class="mx-0 font-weight-light custom-background"
                    round
                    color=""
                    @click="searchFlights"
                  >
                    Search
                  </v-btn>
                  <br>

                  <div
                    v-show="loading"
                    style="text-align: center;">
                    <v-progress-circular
                      :size="50"
                      :width="3"
                      indeterminate
                    />
                  </div>

                </v-flex>

              </v-layout>

            </v-container>
          </v-form>
        </material-card>
      </v-flex>

      <v-flex
        md12
      >
        <material-card
          color=""
          title="Available Flights"
          text=""
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light custom-color text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <!-- <tr @click="onRowClick(items, item)"> -->
              <tr>

                <td>
                  <v-btn
                    class="mx-0 font-weight-light"
                    round
                    color="#211CA6"
                    @click="bookFlight(item.deep_link)"
                  >
                    Book
                  </v-btn>
                </td>

                <td style="font-weight:700;font-size:18px !important;">${{ item.price }}</td>

                <!-- <td>
                  {{ new Date(item.dTimeUTC).getHours() == 0 ? 12 : (new Date(item.dTimeUTC).getHours() > 12 ? new Date(item.dTimeUTC).getHours() - 12 : new Date(item.dTimeUTC).getHours()) }}:{{ new Date(item.dTimeUTC).getMinutes() < 10 ? '0' + new Date(item.dTimeUTC).getMinutes() : new Date(item.dTimeUTC).getMinutes() }}
                  - {{ new Date(item.aTimeUTC).getHours() == 0 ? 12 : (new Date(item.aTimeUTC).getHours() > 12 ? new Date(item.aTimeUTC).getHours() - 12 : new Date(item.dTimeUTC).getHours()) }}:{{ new Date(item.aTimeUTC).getMinutes() < 10 ? '0' + new Date(item.aTimeUTC).getMinutes() : new Date(item.aTimeUTC).getMinutes() }}
                </td> -->

                <!-- <td>{{ item.route.length > 1 ? (item.route.length-1 + " Stop") : "Direct Flight" }}</td> -->

                <td>{{ item.fly_duration }}</td>

                <td>
                  <div
                    v-for="route in item.route"
                    v-if="route.return===0"
                    :key="route.id"
                    class="dt-row">
                    <p><img :src="'https://images.kiwi.com/airlines/32/'+route.airline+'.png'"> {{ route.cityFrom }} <strong>{{ route.flyFrom }}</strong> - {{ route.cityTo }} <strong>{{ route.flyTo }}</strong></p>
                  </div>
                </td>

                <td>
                  <div
                    :id="item.id+'up'"
                    class="hide flex ma-2"
                    @click="toggleFlightDetails(item.id)">
                    <span class="v-tooltip v-tooltip--top">
                      <span><i
                        aria-hidden="true"
                        class="v-icon mdi mdi-arrow-up theme--light"/></span>
                    </span>
                  </div>

                  <div
                    v-show="showFlightDetailsToggle"
                    :id="item.id+'down'"
                    class="flex ma-2"
                    @click="toggleFlightDetails(item.id)">
                    <span class="v-tooltip v-tooltip--top">
                      <span><i
                        aria-hidden="true"
                        class="v-icon mdi mdi-arrow-down theme--light"/></span>
                    </span>
                  </div>
                </td>

                <!-- <td>
                  <div class="dt-row" v-for="route in item.route" v-if="route.return===1">
                    <p>{{route.cityFrom}} <strong>{{route.flyFrom}}</strong> - {{route.cityTo}} <strong>{{route.flyTo}}</strong></p>
                  </div>
                </td> -->
              </tr>
              <tr
                :id="item.id"
                style="display:none;background:whitesmoke;">
                <td/>
                <td/>
                <td>{{ item.return_duration }}</td>
                <td>
                  <div
                    v-for="route in item.route"
                    v-if="route.return===1"
                    :key="route.id"
                    class="dt-row">
                    <p><img
                      :src="'https://images.kiwi.com/airlines/32/'+route.airline+'.png'"
                      style="padding:2px;"> {{ route.cityFrom }} <strong>{{ route.flyFrom }}</strong> - {{ route.cityTo }} <strong>{{ route.flyTo }}</strong></p>
                  </div>
                </td>
                <td/>

              </tr>
            </template>
          </v-data-table>

          <div
            v-show="loading"
            style="text-align: center;">
            <v-progress-circular
              :size="70"
              :width="3"
              indeterminate
            />
          </div>

        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import { INITIAL_LOCATION_DATA } from '../utils/consts'
import { ModelListSelect } from 'vue-search-select'

export default {
  components: {
    ModelListSelect
  },
  data () {
    return {
      imgLink: './img/Flight-King.png',
      showFlightDetailsToggle: true,
      showReturn: true,
      modifyAddPassengers: false,
      modifyRemovePassengers: false,
      //modifyPassengersText: 'Add',
      adults: 1, // Default is 1 adult passenger
      children: 0,
      infants: 0,
      passengerTotal: 1,
      roundTrip: 'Round trip',
      flightData: [],
      airportData: [],
      menu: false,
      menu2: false,
      searchFrom: '',
      lastSearchFrom: '',
      searchTo: '',
      lastSearchTo: '',
      toResults: [],
      fromResults: [],
      departureDate: new Date().toISOString().substr(0, 10),
      returnDate: new Date().toISOString().substr(0, 10),
      initialLocation: INITIAL_LOCATION_DATA,
      loading: false,
      headers: [
        {
          sortable: false,
          text: '',
          value: ''
        },
        {
          sortable: true,
          text: 'Price',
          value: 'price'
        },
        // {
        //   sortable: false,
        //   text: 'Time',
        //   value: 'time'
        // },
        // {
        //   sortable: false,
        //   text: '# of Stops',
        //   value: 'time'
        // },
        {
          sortable: true,
          text: 'Flight Duration',
          value: 'fly_duration'
        },
        {
          sortable: false,
          text: 'Route',
          value: 'city'
        },
        {
          sortable: false,
          text: '',
          value: ''
        }
      ],
      items: []
    }
  },
  mounted () {
    // axios
    // .get('https://api.ipdata.co/?api-key=test')
    // .then(response => (console.log(JSON.stringify(response.data, null, 4))))

    // TO DO: get location data and populate from select with closest airport
    console.log(this.initialLocation)
    console.log(this.flightData)

    this.items = this.flightData
  },
  methods: {

    searchFlights () {
      if (this.searchFrom.length > 0 && this.searchTo.length > 0) {
        this.loading = true
        console.log(this.searchFrom + 1)
        console.log(this.searchTo + 1)
        console.log(this.departureDate)
        console.log(this.returnDate)

        let flightType = (this.roundTrip === 'Round trip' ? 'round' : 'oneway')

        let paramsObj = {
          fly_from: this.searchFrom,
          fly_to: this.searchTo,
          date_from: this.dateFormat(this.departureDate),
          date_to: this.dateFormat(this.departureDate),
          return_to: (flightType === 'oneway' ? null : this.dateFormat(this.returnDate)),
          return_from: (flightType === 'oneway' ? null : this.dateFormat(this.returnDate)),
          curr: 'USD',
          flight_type: flightType,
          adults: this.adults,
          children: this.children,
          infants: this.infants,
          partner: 'picky'
        }

        axios
          .get('https://api.skypicker.com/flights', {
            params: paramsObj
          })
          .then(response => {
            this.items = response.data.data
            this.loading = false
            this.showFlightDetailsToggle = (this.roundTrip === 'Round trip')
          })
      }
    },

    toggleFlightDetails (id) {
      if (document.getElementById(id + 'down').classList.contains('hide')) {
        document.getElementById(id + 'down').classList.remove('hide')
        document.getElementById(id + 'up').classList.add('hide')
      } else {
        document.getElementById(id + 'down').classList.add('hide')
        document.getElementById(id + 'up').classList.remove('hide')
      }
      document.getElementById(id).style.display = document.getElementById(id).style.display === 'none' ? 'table-row' : 'none'
    },

    bookFlight (link) {
      window.open(link)
    },

    dateFormat (dateString) {
      let formattedDate = new Date(dateString)
      let dd = formattedDate.getDate()
      let mm = formattedDate.getMonth() + 1 // January is 0

      let yyyy = formattedDate.getFullYear()
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      formattedDate = dd + '/' + mm + '/' + yyyy
      console.log(formattedDate)
      return formattedDate
    },

    filterAirportData (locations) {
      let onlyAirports = []
      for (let location in locations) {
        if (locations[location].type === 'airport') {
          console.log(locations[location])
          onlyAirports.push(locations[location])
        }
      }
      return onlyAirports
    },

    tripChange (tripOption) {
      this.showReturn = (tripOption === 'Round trip')
    },

    onSelect (a, b, c) {
      console.log(a)
      console.log(b)
      console.log(c)
      debugger
    },

    onToChange (searchTerm) {
      if (typeof searchTerm !== 'undefined') {
        if (searchTerm.length > 1) {
          // if(this.lastSearchTo !== "" && searchTerm.indexOf(this.lastSearchTo) > -1) {
          //   return
          // }
          this.lastSearchTo = searchTerm
          axios
            .get('https://api.skypicker.com/locations?term=' + encodeURIComponent(searchTerm) + '&limit=10&active_only=true&sort=rank')
            .then(response => (this.toResults = this.filterAirportData(response.data.locations)))
        }
      }
    },

    onFromChange (searchTerm) {
      if (typeof searchTerm !== 'undefined') {
        if (searchTerm.length > 1) {
          // if(this.lastSearchFrom !== "" && searchTerm.indexOf(this.lastSearchFrom) > -1) {
          //   return
          // }
          this.lastSearchFrom = searchTerm
          axios
            .get('https://api.skypicker.com/locations?term=' + encodeURIComponent(searchTerm) + '&limit=10&active_only=true&sort=rank')
            .then(response => (this.fromResults = this.filterAirportData(response.data.locations)))
        }
      }
    },

    optionDisplayToFromText (location) {
      return `${location.name} - ${location.code}`
    },

    showModifyPassengers (context) {
      // TO DO : implement proper errors
      let currentTotal = this.adults + this.children + this.infants

      if (context === 'Remove') {
        if (this.modifyRemovePassengers === false && currentTotal < 2) {
          alert('Minimum of 1 passenger.')
          return
        }
        this.modifyAddPassengers = false
        this.modifyRemovePassengers = !this.modifyRemovePassengers
      }
      if (context === 'Add') {
        if (this.modifyAddPassengers === false && currentTotal > 8) {
          alert('Maximum of 9 passengers allowed.')
          return
        }
        this.modifyRemovePassengers = false
        this.modifyAddPassengers = !this.modifyAddPassengers
      }
    },

    modifyPassengerTotal (passengerType, isRemove) {
      // TO DO : implement proper errors
      let currentTotal = this.adults + this.children + this.infants

      if (!isRemove) {
        if (currentTotal > 8) {
          alert('Maximum of 9 passengers allowed.')
          return
        }
        this[passengerType] = this[passengerType] + 1
      } else {
        if (currentTotal < 2) {
          alert('Minimum of 1 passenger.')
          return
        }
        if (this[passengerType] === 0 && passengerType !== 'adults') {
          alert('0 is the minimum.')
          return
        }
        if (this[passengerType] === 1 && passengerType === 'adults') {
          alert('At least 1 adult is required.')
          return
        }
        this[passengerType] = this[passengerType] - 1
      }
      this.passengerTotal = this.adults + this.children + this.infants
    }

    // onRowClick (rows, row) {
    //   console.log(rows)
    //   console.log(row)
    // },

    // async fetchAirportData () {
    //   let response = await axios.get('/airports.js')
    //   return response.data
    // }

  }
  // created () {
  //   // this.fetchAirportData()
  //   //   .then(response => this.airportData = response)
  //   //   .catch(err => console.log(err))
  //   //console.log(this.airportData);
  // }
}
</script>

<style>
.small-input .theme--light.v-text-field>.v-input__control>.v-input__slot:before {
  border-color: transparent !important;
}
/* 
new colors: 
linear-gradient(60deg,#211CA6,#2151A3)!important */
  .v-card--material__header {
    background: linear-gradient(60deg,#211CA6,#2151A3)!important;
  }

  .custom-color {
    color: #211CA6 !important;
  }

  .custom-background {
    background: #2151A3 !important;
  }

  .search-offset {
    top: -50px !important;
    margin-bottom: -20px !important;
  }

  .small-input .v-select {
    /* height: calc(1.5em + .5rem + 13px);
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem; */
  }

  .small-input .mdi-menu-down {
    /* background: white !important; */
    color: white !important;
    caret-color: white !important;
  }

  .small-input .v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after {
    /* color: rgb(87, 184, 87) !important; */
    color: transparent !important;
  }

  .small-input.v-text-field.v-input--is-focused>
    .v-input__control>
    .v-input__slot:after {
    /* color: #211CA6; */
  }

  .small-input .theme--light.v-text-field>.v-input__control>.v-input__slot:before {
    /* border-color: #211CA6 !important; */
  }

  .v-picker--date button .v-btn__content {
    color: black !important;
  }

  .dt-row {
    padding: 2px;
  }

  .hide {
    display: none;
  }

  .v-select__slot .small {
    height: 42px !important;
  }
</style>
