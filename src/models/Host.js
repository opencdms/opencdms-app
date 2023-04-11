import { Model } from 'pinia-orm'
export default class Host extends Model {
  static entity = 'host'
  static fields() {
    return {
      id: this.uid(),
      type: this.string(),
      geometry: this.attr({
        type: this.string(''),
        coordinates: this.number([])
      }),
      properties: this.attr({
        wigos_station_identifier: this.string(''),
        version: this.number(null),
        name: this.string(''),
        facility_type: this.string(''),
        change_date: this.string(''),
        date_established: this.string(''),
        user_id: this.string(''),
        wmo_region: this.string(''),
        status_id: this.string(''),
        description: this.string(''),
        territory: this.string(''),
        comments: this.string(''),
        links: this.string(''),
        valid_from: this.string(''),
        valid_to: this.string(''),
        elevation: this.string('')
      })
    }
  }
}
