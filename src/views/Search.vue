<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >

    <v-layout
      v-resize="onResize"
      justify-center
      wrap
    >

      <v-flex
        style="padding-top: 60px;"
        xs12
        md9
        lg8
        xl7
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
                class="neg-top-margin"
                center
              />
            </v-flex>

            <!-- <v-flex
              xs12
              class="neg-top-margin"
            >
              <p>Search Flights</p>
            </v-flex> -->

            <v-flex
              xs12
              md12
            >
              <material-card
                class="popular-dest-card"
              >

                <v-container
                  fill-height
                  fluid
                  grid-list-xl
                  style="margin-top: -20px; padding: 0;"
                >
                  <v-layout
                    row
                    wrap
                  >

                    <!-- <v-flex
                      xs12
                    >
                      <p>
                        <strong>Popular Destinations</strong>
                      </p>
                    </v-flex> -->

                    <v-flex
                      xs6
                      sm6
                      md4
                      lg3
                      offset-lg1
                    >
                      <a href="#">
                        <div class="popular-cards">
                          <div style="background-image: url(&quot;//t2.gstatic.com/images?q=tbn:ANd9GcSOqctRBN11M_JybWWurC4mNxLmSZwXb_PjvHyTpVQBwD8a1o7tZZL2saF2rgPa4U9IU-dPeahv&quot;);">
                          </div>
                          <div>
                            <div style="font-size:12px;">
                              <h4><strong style="font-size:15px;">Orlando</strong></h4>
                              <div>
                                <span>
                                  <span>One Way</span>
                                </span>
                              </div>
                              <div>
                                <img src="//www.gstatic.com/flights/airline_logos/32px/AA.png" class="logo" alt="American" title="American" height="16" width="16">
                                <span> 1 stop</span>
                                <br>
                                <span>5h 5m</span>
                              </div>
                            </div>
                            <div>
                              <span><strong style="font-size:13px;">Great value $299</strong></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </v-flex>

                    <v-flex
                      xs6
                      sm6
                      md4
                      lg3
                    >
                      <a href="#">
                        <div class="popular-cards">
                          <div style="background-image: url(&quot;//t2.gstatic.com/images?q=tbn:ANd9GcSOqctRBN11M_JybWWurC4mNxLmSZwXb_PjvHyTpVQBwD8a1o7tZZL2saF2rgPa4U9IU-dPeahv&quot;);">
                          </div>
                          <div>
                            <div style="font-size:12px;">
                              <h4><strong style="font-size:15px;">Reno</strong></h4>
                              <div>
                                <span>
                                  <span>One Way</span>
                                </span>
                              </div>
                              <div>
                                <img src="//www.gstatic.com/flights/airline_logos/32px/AA.png" class="logo" alt="American" title="American" height="16" width="16">
                                <span> Nonstop</span>
                                <br>
                                <span>6h 5m</span>
                              </div>
                            </div>
                            <div>
                              <span><strong style="font-size:13px;">Great value $221</strong></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </v-flex>

                    <v-flex
                      hidden-sm-and-down
                      md4
                      lg3
                    >
                      <a href="#">
                        <div class="popular-cards">
                          <div style="background-image: url(&quot;//t2.gstatic.com/images?q=tbn:ANd9GcSOqctRBN11M_JybWWurC4mNxLmSZwXb_PjvHyTpVQBwD8a1o7tZZL2saF2rgPa4U9IU-dPeahv&quot;);">
                          </div>
                          <div>
                            <div style="font-size:12px;">
                              <h4><strong style="font-size:15px;">New York</strong></h4>
                              <div>
                                <span>
                                  <span>One Way</span>
                                </span>
                              </div>
                              <div>
                                <img src="//www.gstatic.com/flights/airline_logos/32px/AA.png" class="logo" alt="American" title="American" height="16" width="16">
                                <span> 1 stop</span>
                                <br>
                                <span>2h 5m</span>
                              </div>
                            </div>
                            <div>
                              <span><strong style="font-size:13px;">Great value $144</strong></span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </v-flex>

                  </v-layout>
                </v-container>
              </material-card>
            </v-flex>

            <v-container
              fill-height
              fluid
              grid-list-xl
              style="padding-bottom:5px;"
            >
              <v-layout
                row
                wrap
              >

                <v-flex
                  xs12
                  sm2
                  d-flex
                  class="small-input"
                >
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

            <transition name="fade">
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
            </transition>
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
                      scrollable
                      @input="onDepartSelect()">
                      <v-spacer/>
                      <!-- <label>Flexible Date Range</label>
                      <input type="checkbox" label="Date Range?" /> -->
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
                      scrollable
                      @input="$refs.menu2.save(returnDate)">
                      <v-spacer/>
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
        v-show="showFlights"
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
              :loading="true"
              :hide-headers="isMobile"
              :class="{mobile: isMobile}"
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
              <template v-slot:no-data>
                <v-alert
                  :value="true"
                  color="error"
                  icon="mdi-alert">
                  No flights found
                </v-alert>
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
import { AIRPORTS_ARR } from '../utils/consts'
import { dateUtils } from '../utils/dateUtils'
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
      showFlights: false,
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
    // TO DO: get location data and populate from select with closest airport
    // if(VueCookies.isKey('travel-king')){
    //   alert('cookie found')
    //   console.log(VueCookies.get('travel-king'))
    // } else {
    //   // TO DO: Put contents of response into cookie
    //   let user = { id:1, ,flight:'25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX' }
    //   VueCookies.set('travel-king',user)
    //   axios
    //   .get('https://api.ipdata.co/?api-key=test')
    //   .then(response => (console.log(JSON.stringify(response.data, null, 4))))
    // }
    // console.log(this.initialLocation)

    this.items = this.flightData
  },
  created () {
    // Array of Unique Random Ints between min-max values
    const rngArray = function (size, min, max) {
      const tmpArray = new Array()

      return new Array(size).fill(0).map(function (n) {
        function rng () {
          let tmpInt = Math.floor(Math.random() * (max - min) + min)
          return (tmpArray.includes(tmpInt) ? rng() : tmpInt)
        }

        let newInt = rng()
        tmpArray.push(newInt)
        return newInt
      })
    }

    const randomDests = rngArray(6, 0, 15)
    let popDest1 = null
    let popDest2 = null
    let popDest3 = null

    /* Pairing random destinations to use as to/from in popular destinations component
    Eventually this will get the clients location and do the pairing from that */
    randomDests.forEach((destination, index) => {
      if (index % 2 === 1) return

      if (popDest1 === null) {
        popDest1 = {}
        popDest1.from = AIRPORTS_ARR[destination]
        popDest1.to = AIRPORTS_ARR[randomDests[index + 1]]
      } else if (popDest2 === null) {
        popDest2 = {}
        popDest2.from = AIRPORTS_ARR[destination]
        popDest2.to = AIRPORTS_ARR[randomDests[index + 1]]
      } else {
        popDest3 = {}
        popDest3.from = AIRPORTS_ARR[destination]
        popDest3.to = AIRPORTS_ARR[randomDests[index + 1]]
      }
    })

    const destArray = [ popDest1, popDest2, popDest3 ]

    destArray.forEach((trip, index) => {
      let date_from = new Date()
      date_from.setDate(date_from.getDate() + Math.floor(Math.random() * (75 - 10) + 10))

      let params = {
        fly_from: trip.from,
        fly_to: trip.to,
        date_from: dateUtils.dateFormat(date_from),
        date_to: dateUtils.dateFormat(date_from),
        return_to: null,
        return_from: null,
        curr: 'USD',
        flight_type: 'oneway',
        adults: 1,
        children: 0,
        infants: 0,
        limit: 1,
        partner: 'picky'
      }
      console.log(params)
      // axios
      //   .get('https://api.skypicker.com/flights', {
      //     params: params
      //   })
      //   .then(response => {
      //     console.log(response.data.data)
      //   })
    })

  },
  methods: {
    onDepartSelect () {
      this.$refs.menu.save(this.departureDate)
      if (this.returnDate !== this.departureDate) {
        this.returnDate = this.departureDate
      }
    },

    searchFlights () {
      if (this.searchFrom.length > 0 && this.searchTo.length > 0) {
        this.loading = true
        let flightType = (this.roundTrip === 'Round trip' ? 'round' : 'oneway')

        let params = {
          fly_from: this.searchFrom,
          fly_to: this.searchTo,
          date_from: dateUtils.dateFormat(this.departureDate),
          date_to: dateUtils.dateFormat(this.departureDate),
          return_to: (flightType === 'oneway' ? null : dateUtils.dateFormat(this.returnDate)),
          return_from: (flightType === 'oneway' ? null : dateUtils.dateFormat(this.returnDate)),
          curr: 'USD',
          flight_type: flightType,
          adults: this.adults,
          children: this.children,
          infants: this.infants,
          partner: 'picky'
        }

        axios
          .get('https://api.skypicker.com/flights', {
            params: params
          })
          .then(response => {
            this.items = response.data.data
            this.showFlights = true
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

    filterAirportData (locations) {
      let onlyAirports = []
      for (let location in locations) {
        if (locations[location].type === 'airport') {
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
      if (isRemove) {
        this.showModifyPassengers('Remove')
      } else {
        this.showModifyPassengers('Add')
      }
    },

    onResize () {
      if (window.innerWidth < 769) { this.isMobile = true } else { this.isMobile = false }
    }

    // onRowClick (rows, row) {
    //   console.log(rows)
    //   console.log(row)
    // },

    // async loadPopularDestinations () {
    //   let flightType = 'round'
    //   // show oneway or round trip?
    //   // Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
    //   let params = {
    //     fly_from: this.searchFrom,
    //     fly_to: this.searchTo,
    //     date_from: dateUtils.dateFormat(this.departureDate),
    //     date_to: dateUtils.dateFormat(this.departureDate),
    //     return_to: (flightType === 'oneway' ? null : dateUtils.dateFormat(this.returnDate)),
    //     return_from: (flightType === 'oneway' ? null : dateUtils.dateFormat(this.returnDate)),
    //     curr: 'USD',
    //     flight_type: flightType,
    //     adults: this.adults,
    //     children: this.children,
    //     infants: this.infants,
    //     partner: 'picky'
    //   }

    //   AIRPORTS_ARR.forEach(destination => {
    //     console.log(destination)
    //     // axios
    //     //   .get('https://api.skypicker.com/flights', {
    //     //     params: params
    //     //   })
    //     //   .then(response => {
    //     //     this.items = response.data.data
    //     //     this.showFlights = true
    //     //     this.loading = false
    //     //     this.showFlightDetailsToggle = (this.roundTrip === 'Round trip')
    //     //   })

    //   })
    // }

  }
}
</script>

<style>
  .layout .v-datatable__actions__range-controls button {
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
    font-weight: bold;
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.neg-top-margin {
  margin-top:-20px;
}

.popular-cards {
  border: 0;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(238, 238, 238, 0.82), 0 1px 3px 1px rgba(238, 238, 238, 0.82) !important;
  padding: 10px;
  background: #fff;
  color: initial;
}

.popular-dest-card {
  background: inherit !important;
  box-shadow: none !important;
}

.popular-dest-card .v-card__text {
  padding: 5px;
}
</style>
