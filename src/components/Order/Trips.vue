<template>
  <div v-loading="loading" element-loading-spinner="el-icon-kbus-loading" class="list-trip">
    <div v-if="trips && trips.length > 0" class="count-total">
      <div class="row no-margin">
        <div class="col-auto">
          <span class="total-trip">{{ $t('book.trips.totalTrips', { 'tripsLength': trips.length }) }}</span>
        </div>
      </div>
    </div>
    <div v-if="!loading && trips && trips.length > 0" class="list">
      <template v-for="(item, index) in trips">
        <trip :key="index" :trip="item" :status-more-info-section="moreInfoStatus" :status-selected-trip-section="selectedTripStatus" @set-status-more-info-section="setStatusMoreInfoSection" @set-status-selected-trip-section="setStatusSelectedTripSection" />
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Trip from '@/components/Order/Trip.vue'
import { convertHourToMilliseconds, getUTCTime } from '@/utils/index'
import FormCreateTrip from '@/components/CreateTrip/FormCreateTrip.vue'

export default {
  components: {
    Trip,
    FormCreateTrip
  },
  data() {
    return {
      moreInfoStatus: null,
      selectedTripStatus: null,
      loading: false,
      mapStartPoint: null,
      mapEndPoint: null,
      trips: []
    }
  },
  computed: {
    ...mapGetters([
      'token',
      // 'trips',
      'dateAndPoint',
      'listPoint',
      'searchTripQuery'
    ]),
    getDateAndPoint() {
      let dateAndPoint = this.dateAndPoint
      if (typeof (dateAndPoint) === 'string') {
        dateAndPoint = JSON.parse(this.dateAndPoint)
      } else if (typeof (dateAndPoint) === 'object') {
        dateAndPoint = this.dateAndPoint
      }
      return dateAndPoint
    }
  },
  watch: {
    'searchTripQuery': async function(val) {
      await this.getListTrip()
    },
    'getDateAndPoint': async function(val) {
      // console.log(val)
      if (!this.$route.query.tripId && !this.$route.params.tripId) {
        this.mapStartPoint = this.getDateAndPoint.startPoint
        this.mapEndPoint = this.getDateAndPoint.endPoint
        await this.getListTrip()
      }
    },
    '$route.query': async function(val) {
      if (val.tripId) {
        await this.getListTrip()
      }
    }
  },
  async mounted() {
    try {
      // this.mapStartPoint = this.searchTripQuery.startPoint
      // this.mapEndPoint = this.searchTripQuery.endPoint
      // if (this.$route.query.tripId || this.$route.params.tripId) {
      //   if (this.$route.query.tripId) {
      //     this.moreInfoStatus = parseInt(this.$route.query.tripId)
      //   } else if (this.$route.params.tripId) {
      //     this.moreInfoStatus = parseInt(this.$route.params.tripId)
      //   }
      //   await this.getTripByTripId()
      // } else {
      //   await this.getListTrip()
      // }
      if(this.$route.params.query) {
        const query = this.$route.params.query
        const dataQuery = JSON.parse(decodeURI(query))
        console.log(dataQuery)
        const params = {
          date: dataQuery.startDate.split('-').join(''),
          companyId: null,
          startPoint: dataQuery.startPoint,
          endPoint: dataQuery.endPoint,
          type: 1,
          routeIds: null
        }
        this.$store.dispatch('system/getPointAndDate', params)
        await this.getListTrip()
      }
    } catch (error) {
      console.log('warning trips page', error)
      this.$router.push({ name: 'Home' })
    }
  },
  methods: {
    setStatusMoreInfoSection(value) {
      this.moreInfoStatus = value
    },
    setStatusSelectedTripSection(value) {
      this.selectedTripStatus = value
    },
    async getListTrip() {
      const param = this.searchTripQuery
      if(!this.searchTripQuery.startPoint || !this.searchTripQuery.endPoint) {
        this.$message.warning('Chọn điểm đi điểm xuống')
        return
      }
      console.log('param', param)
      this.loading = true

      const resp = await this.$store.dispatch('system/getListTrip', param)
      if (resp) {
        console.log('listtrip', resp)
        // this.$store.dispatch('system/setTrips', resp)
        this.trips = resp
        this.trips.map((trip, t) => {
          // calculate millisecond and add field runTimeMilliseconds
          const formatTime = getUTCTime(trip.runTime)
          const milliSec = convertHourToMilliseconds(parseInt(formatTime.hours), parseInt(formatTime.minutes), parseInt(formatTime.seconds))

          this.trips[t] = { ...trip, runTimeMilliseconds: milliSec }
        })
      } else {
        this.$message.error(this.$t('message.common.undefinedError'))
      }
      this.loading = false
    },
    getTripByTripId() {
      // this.loading = true
      // let tripId = 0
      // if (this.$route.query.tripId) {
      //   tripId = this.$route.query.tripId
      // } else if (this.$route.params.tripId) {
      //   tripId = this.$route.params.tripId
      // }
      // this.$store.dispatch('trip/getTripByTripId', { tripId: tripId }).then((resp) => {
      //   // resp ? this.trips.push(resp) : null
      //   this.trips.map((trip, t) => {
      //     // calculate millisecond and add field runTimeMilliseconds
      //     const formatTime = getUTCTime(trip.runTime)
      //     const milliSec = convertHourToMilliseconds(parseInt(formatTime.hours), parseInt(formatTime.minutes), parseInt(formatTime.seconds))

      //     this.trips[t] = { ...trip, runTimeMilliseconds: milliSec }
      //   })

      //   // set data to local storage
      //   this.$store.dispatch('trip/getPointAndDate', {
      //     from: this.trips[0].route ? this.trips[0].route.points[0].district.provinceName : null,
      //     to: this.trips[0].route ? this.trips[0].route.points[this.trips[0].route.points.length - 1].district.provinceName : null,
      //     startDate: this.$moment.utc(this.trips[0].runTime).format('YYYY-MM-DD')
      //   })
      //   this.loading = false
      // }).catch((error) => {
      //   this.loading = false
      //   this.$message.error(this.$t('message.common.undefinedError'))
      //   console.log(error)
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
$pink: #FBD1E1;
$main: #ED196B;
$white: #FFFFFF;

.list-trip{
  min-height: 100px;
  .count-total{
    margin-bottom: 1rem;
    .total-trip{
      font-family: 'Cabin';
      font-size: 18px;
      line-height: 26px;
      color: #383F47;
    }
    .btn-create-own-trip{
      font-family: 'Cabin';
      background: $pink;
      border: 1px solid $pink;
      border-radius: 4px;
      color: $main;
      padding: 8px 16px;
      outline: none;
      transition: all 0.2s ease;
      &:hover{
        background: rgb(251 209 225 / 80%) !important;
        border-color: rgb(251 209 225 / 80%);
        color: rgb(255 72 104 / 80%) !important;
      }
    }
  }

  .trips-not-available{
    background: $pink;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0px 2px 12px rgb(0 0 0 / 10%);
    span{
      font-size: 1em;
      line-height: 24px;
      display: block;
      margin-bottom: 4px;

      &:last-child{
        margin-bottom: 0;
      }
    }

    .btn-create-own-trip{
      margin-top: 16px;
      background: $main;
      border-color: transparent;
      color: $white;

      &:hover, &:focus{
        opacity: 0.8;
      }
    }
  }
}
</style>
