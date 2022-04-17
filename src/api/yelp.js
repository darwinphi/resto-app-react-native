import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Eys95FLkawtZtQMRonA4HUEx9gs30bLR_vhvVOFnqNuxV4z9EVfZ5ef9_kMNmGgPAGiLH2TO4AezUSc2b631wvUprcURRQ9mddimXNIV4KLpZilzz_KMopPUS_5bYnYx",
  },
});
