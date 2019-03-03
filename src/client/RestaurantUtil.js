class RestaurantUtil {
  constructor(result) {
    this.data = result
  }

  getName() {
    return this.data["Name"]
  }
  getCity() {
    return this.data["City"]
  }

  getCuisine() {
    let cuisine = this.data["Cuisine Style"]
    let data = cuisine.replace(/['"/[[\]]+/g, '').split(',')
    return data;
  }

  getRanking() {
    return this.data["Ranking"]
  }

  getRating() {
    return this.data["Rating"]
  }

  getReviews() {
    return this.data["Number of Reviews"]
  }
}

export default RestaurantUtil