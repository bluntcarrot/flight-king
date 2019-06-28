<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img
      :src="image"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              :src="logo"
              height="34"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Flight King
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <!-- <v-list-tile
          v-if="responsive"
        >
          <v-text-field
            class="purple-input search-input"
            label="Search..."
            color="purple"
          />
        </v-list-tile>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="success"
          avatar
          class="v-list-item "
        > -->
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          avatar
          class="v-list-item "
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState
} from 'vuex'

export default {
  data: () => ({
    logo: './img/Flight-King.png',
    links: [
      {
        to: '/search',
        icon: 'mdi-magnify',
        text: 'Search Flights'
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style lang="scss">
  #app-drawer {
    .v-list-item {
      // -webkit-box-shadow: 0 12px 20px -10px #2151A3, 0 4px 20px 0px #211CA6, 0 7px 8px -5px #2151A3 !important;
      // box-shadow: 0 12px 20px -10px #2151A3, 0 4px 20px 0px #211CA6, 0 7px 8px -5px #2151A3 !important;

      -webkit-box-shadow: 0 12px 20px -10px rgba(33, 81, 163, 0.28), 0 4px 20px 0px rgba(33, 28, 166, 0.12), 0 7px 8px -5px rgba(33, 81, 163, 0.2) !important;
      box-shadow: 0 12px 20px -10px rgba(33, 81, 163, 0.28), 0 4px 20px 0px rgba(33, 28, 166, 0.12), 0 7px 8px -5px rgba(33, 81, 163, 0.2) !important;
    }
    .v-list__tile {
      // border-radius: 4px;
      color: #fff !important;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }

    .v-list-item {
      background: #211CA6 !important;
      // background: linear-gradient(60deg,#211CA6,#2151A3)!important;
    }

    .v-list__tile--active {
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
    }
  }
</style>
