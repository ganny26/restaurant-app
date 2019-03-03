import React from 'react';
import PropTypes from 'prop-types';
import '../style.scss';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RestaurantUtil from '../RestaurantUtil';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';
const styles = {
  card: {
    minWidth: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  info_view: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'row'

  },
  left_view: {
    marginTop:15,
    flex: 0.5
  },
  right_view: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2
  },
  right_view_item: {
    marginTop: 5,
    marginBottom: 5
  },
  chip_view: {
    margin: 5
    // marginRight:5,
    // marginLeft:5,
    // marginBottom:5
  },
  right_view_item_chip: {
    marginTop: 5,
    marginBottom: 5
  },
  img_view:{
    borderRadius:10
  }
};

class RestaurantCard extends React.Component {
  render() {
    let restaurant = new RestaurantUtil(this.props.info)
    return (
      <Card style={{height:300}}>
        <CardContent>
          <div style={styles.info_view}>
            <div style={styles.left_view}>
              <img style={styles.img_view} src="https://cdn.citynomads.com/wp-content/uploads/2017/06/08154455/straits-kitchen-cover3.png"
              width="100"
              height="100"/>
            </div>
            <div style={styles.right_view}>
            <span style={{flex:1,display:'flex',justifyContent:'flex-end'}}>
            {restaurant.getRating()}

            </span>
              <span style={styles.right_view_item}>
              Dish Name: {restaurant.getName()}</span>
              <span style={styles.right_view_item}>Special at: {restaurant.getCity()}</span>
              <span style={styles.right_view_item}>Overall Ranking: {restaurant.getRanking()}</span>
              <span style={styles.right_view_item_chip}>
              </span>
              <span style={{display:'flex'}}>
              <span style={{flex:1}}>Reviews: {restaurant.getReviews()}</span>
              {/* <span style={{flex:1}}>Rating: {restaurant.getRating()}</span> */}
                </span>
            </div>

          </div>
        </CardContent>
        <hr/>
        <CardActions>
          <div>
            {
              restaurant.getCuisine().map((v, i) => (
                <Chip style={styles.chip_view} label={v} key={i} />
              ))
            }
          </div>

        </CardActions>
      </Card>
    );
  }
}



export default RestaurantCard;
