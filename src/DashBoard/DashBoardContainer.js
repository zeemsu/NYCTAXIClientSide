import { connect } from 'react-redux'
import { get } from 'lodash'
import View from 'DashBoard/DashBoardView'
import { bindActionCreators } from 'redux'
import { getDashBoardData} from 'DashBoard/DashBoardActions'

const mapDispatchToProps = (dispatch) => {
    return {   
      getDashBoardData: bindActionCreators(getDashBoardData, dispatch)            
  }
}
const mapStateToProps = (state, meta) => {
  return {
    dataYellow: [get(state, 'NYCTAXI.dashboardYellow')],
    dataGreen: [get(state, 'NYCTAXI.dashboardGreen')],
    search: [get(state, 'NYCTAXI.search')]
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(View)
