<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      v-resize="onResize"
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
              />
            </v-flex>
            <div>
              <div> <p>Search Flights</p> </div>
            </div>

            <br>
            <v-container
              fill-height
              fluid
              grid-list-xl>
              <v-layout
                row
                wrap>

                <v-flex
                  xs12
                  sm2
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
                                <i
                                  aria-hidden="true"
                                  class="v-icon mdi mdi-menu-down theme--light inherit--text"/>
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
                  sm6
                  md6
                  offset-sm4
                  d-flex
                  class="small-input"
                >
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
              v-show="modifyAddPassengers || modifyRemovePassengers"
              fill-height
              fluid
              grid-list-xl>
              <v-layout wrap>

                <v-flex
                  v-show="modifyAddPassengers"
                  xs14
                  class="py-2 text-xs-center">
                  <v-alert
                    :value="true"
                    color="white"
                    outline
                    icon="mdi-plus"
                    type="success"
                  >
                    <p>Add Passenger</p>
                    <span style="background:inherit;">
                      <v-btn
                        flat
                        value="adult"
                        @click="modifyPassengerTotal('adults', false)">
                        <strong>{{ adults }}
                          Adults</strong>
                      </v-btn>
                      <v-btn
                        flat
                        value="children"
                        @click="modifyPassengerTotal('children', false)">
                        <strong>{{ children }}
                          Children</strong>
                      </v-btn>
                      <v-btn
                        flat
                        value="infant"
                        @click="modifyPassengerTotal('infants', false)">
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
                    :value="true"
                    color="white"
                    outline
                    icon="mdi-minus"
                    type="error"
                  >
                    <p>Remove Passenger</p>
                    <span style="background:inherit;">
                      <v-btn
                        flat
                        value="adult"
                        @click="modifyPassengerTotal('adults', true)">
                        <strong>{{ adults }}
                          Adults</strong>
                      </v-btn>
                      <v-btn
                        flat
                        value="children"
                        @click="modifyPassengerTotal('children', true)">
                        <strong>{{ children }}
                          Children</strong>
                      </v-btn>
                      <v-btn
                        flat
                        value="infant"
                        @click="modifyPassengerTotal('infants', true)">
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
                  />
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
                    :loading="loading"
                    class="mx-0 font-weight-light custom-background"
                    round
                    color=""
                    @click="searchFlights"
                  >
                    Search
                  </v-btn>

                  <br>

                </v-flex>

              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>

      <v-flex
        xs12
        md11
      >
        <material-card
          color=""
          title="Available Flights"
          text=""
        >
          <v-layout
            column
          >
            <v-data-table
              :headers="headers"
              :items="items"

              :loading="loading"
              :hide-headers="isMobile"
              :class="{mobile: isMobile}"
            >
              <!-- TO DO: RESPONSE EXAMPLE: https://codepen.io/Jayesh_v/pen/xmModE -->
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
                <tr v-if="!isMobile">

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
                        <small>Hide Return Flight</small>
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
                        <small>Show Return Flight</small>
                      </span>
                    </div>
                  </td>
                </tr>
                <!-- START Responsive row -->
                <tr v-else>
                  <td>
                    <ul class="flex-content">
                      <li
                        class="flex-item"
                        data-label=""
                        style="text-align:center;">
                        <v-btn
                          class="mx-0 font-weight-light"
                          round
                          color="#211CA6"
                          @click="bookFlight(item.deep_link)"
                        >
                          Book
                        </v-btn>
                      </li>
                      <li
                        class="flex-item"
                        data-label="Price"
                        style="font-weight:700;font-size:18px !important;">${{ item.price }}</li>
                      <li
                        class="flex-item"
                        data-label="Flight Duration">{{ item.fly_duration }}</li>
                      <li
                        class="flex-item"
                        data-label="Route">
                        <div
                          v-for="route in item.route"
                          v-if="route.return===0"
                          :key="route.id"
                          class="dt-row">
                          <p><img :src="'https://images.kiwi.com/airlines/32/'+route.airline+'.png'"> {{ route.cityFrom }} <strong>{{ route.flyFrom }}</strong> - {{ route.cityTo }} <strong>{{ route.flyTo }}</strong></p>
                        </div>
                      </li>
                      <li
                        class="flex-item"
                        data-label=""
                        style="text-align:center;">
                        <div
                          :id="item.id+'up'"
                          class="hide flex ma-2"
                          @click="toggleFlightDetails(item.id)">
                          <span class="v-tooltip v-tooltip--top">
                            <span><i
                              aria-hidden="true"
                              class="v-icon mdi mdi-arrow-up theme--light"/></span>
                            <small>Hide Return Flight</small>
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
                            <small>Show Return Flight</small>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <!-- END Responsive row -->
                <!-- START Return flight row -->
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
                <!-- END Return flight row -->
              </template>
            </v-data-table>
          </v-layout>

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
      items: [],
      selected: [],
      isMobile: false
    }
  },
  mounted () {
    // axios
    // .get('https://api.ipdata.co/?api-key=test')
    // .then(response => (console.log(JSON.stringify(response.data, null, 4))))

    // TO DO: get location data and populate from select with closest airport
    console.log(this.initialLocation)
    // console.log(this.flightData)

    this.items = this.flightData
  },
  methods: {

    searchFlights () {
      if (this.searchFrom.length > 0 && this.searchTo.length > 0) {
        this.loading = true
        console.log(this.searchFrom + 1)
        console.log(this.searchTo + 1)
        console.log("TO DO: fix dateFormat method")
        console.log("Departure Date = ", this.dateFormat(this.departureDate))
        console.log("Return Date = ", this.dateFormat(this.returnDate))

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
      // TO DO: Why didn't I use v-show directive?
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
    },

    onResize () {
      if (window.innerWidth < 769) { this.isMobile = true } else { this.isMobile = false }
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
  .v-btn .v-btn--flat .v-btn--icon .theme--light {
    color: rgba(0,0,0,.87) !important;
  }
  .small-input .theme--light.v-text-field>.v-input__control>.v-input__slot:before {
    border-color: transparent !important;
  }

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

  .small-input .mdi-menu-down {
    color: white !important;
    caret-color: white !important;
  }

  .small-input .v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after {
    color: transparent !important;
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

  .mobile {
    color: #333;
  }

  @media screen and (max-width: 768px) {
    .mobile table.v-table tr {
      max-width: 100%;
      position: relative;
      display: block;
    }

    .mobile table.v-table tr:nth-child(odd) {
      border-left: 6px solid #e5b340;
    }

    .mobile table.v-table tr:nth-child(even) {
      border-left: 6px solid rgb(33, 28, 166);
    }

    .mobile table.v-table tr td {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      height: auto;
      padding: 10px;
    }

    .mobile table.v-table tr td ul li:before {
      content: attr(data-label);
      padding-right: .5em;
      text-align: left;
      display: block;
      color: #999;

    }
    .v-datatable__actions__select
    {
      width: 50%;
      margin: 0px;
      justify-content: flex-start;
    }
    .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
      background: transparent;
    }

  }
  .flex-content {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .flex-item {
    padding: 5px;
    width: 100%;
    /*
    width: 50%;
    height: 40px; */
    font-weight: bold;
  }
</style>
