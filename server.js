if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE

const getYelpAPI = async () => {
  return axios.get(
    'https://api.yelp.com/v3/businesses/search?location="2650 NW 5 Ave, Miami, FL 33127"&term="lunch"&radius=300',
    { headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` } }
  );
};

app.get('/api/yelp', async (request, response) => {
  try {
    const businessData = await getYelpAPI();
    response.json(businessData.data.businesses);
  } catch (error) {
    console.log(error);
  }
});

const searchYelpAPI = async (request, response) => {
  const { term } = request.query;
  return axios.get(
    `https://api.yelp.com/v3/businesses/search?location=Miami&term=${term}`,
    { headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` } }
  );
};

app.get('/api/search', async (request, response) => {
  try {
    const businessData = await searchYelpAPI(request, response);
    response.json(businessData.data.businesses);
  } catch (e) {
    console.log(e);
  }
});
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
