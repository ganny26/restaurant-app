import React, { Component, Suspense } from 'react';
import Typography from '@material-ui/core/Typography';
import RestaurantCard from '../components/RestaurantCard';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as ApiClient from '../ApiClient';
import SearchBar from 'material-ui-search-bar';
import Pagination from '@kevinwang0316/react-materialui-pagination';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Axios from 'axios'
const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    textAlign: 'center'
  },
  showLoading: {
    marginTop: '10rem',
    /* align-items: center; */
    justifyContent: 'center',
    display: 'flex'
  }
}
class LandingContainer extends Component {
  state = {
    data: [],
    filtered_data: [],
    loading:true,
    query: "",
    total:150,
    limit:10
  }

  componentWillMount() {
    ApiClient.getData().then(result=>{
      this.setState({
        data: result.data.payload,
        filtered_data: result.data.payload
      })
    })
  }


  _requestSearch = () => {
    Axios.get(`/search?q=${this.state.query}&from=0&to=20`).then(result => {
      this.setState({
        data: result.data.payload,
        filtered_data: result.data.payload
      })
    })
  }

  handlePage = (page) =>{

    let from = page;
    let to = page + this.state.limit;
    ApiClient.getPageData(from,to).then(result=>{
      this.setState({
        data: result.data.payload,
        filtered_data: result.data.payload
      })
    })
  }

  _handleChange = (value) => {
    let query = value.toLowerCase();
    let filterColumn = "Name";
    let filterResult = this.state.data.filter((item) => {
      if (item[filterColumn] != undefined || item[filterColumn] != null) {
        return item[filterColumn].toLowerCase().indexOf(query) !== -1
      }
    })
    this.setState({
      filtered_data: filterResult,
      query: value.toLowerCase()
    })

  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Typography component="h5" variant="h5" gutterBottom>
            European Restaurants
          </Typography>

        </div>
        <div>
          <SearchBar
            onChange={this._handleChange}
            onRequestSearch={this._requestSearch}
            style={{
              margin: '0 auto',
              maxWidth: 800
            }}
          />
        </div>
        <div style={{ padding: 16 }}>
          {
            this.state.filtered_data.length === 0 ?
              <div style={styles.showLoading}>
                <CircularProgress />
              </div>
              :
              <React.Fragment>

              <Grid container spacing={24}>

                {
                  this.state.filtered_data.map((v, i) => (
                    <Grid item xs={6} key={i}>
                      <RestaurantCard info={v} />
                    </Grid>
                  ))
                }

              </Grid>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <MuiThemeProvider>
               <Pagination
                 offset={0}
                 limit={this.state.limit}
                 total={this.state.total}
                 onClick={this.handlePage}
               />
             </MuiThemeProvider>

              </div>

              </React.Fragment>

          }

        </div>


      </div>
    );
  }
}

export default LandingContainer;