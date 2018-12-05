import api from 'utils/api'

class Service {
  async getTripData (locationId) {
    let locationIds={"PickUpLocationId":[1]}
    if(locationId!=undefined)
    {
      locationIds={"PickUpLocationId":[locationId]}
    }
    const data = await api.getTripData(
      {body:JSON.stringify(locationIds)}
    )
    return data
  }
  async getTaxiZones () {

    const data = await api.getTaxiZones()
    return data
  }
}

export default new Service()
