// Country data
countries = [
    {"name": "Benin", "lat": 9.3077, "lon": 2.3158, "url": "https://www.peacecorps.gov/benin/stories"},
    {"name": "Botswana", "lat": -22.3285, "lon": 24.6849, "url": "https://www.peacecorps.gov/botswana/stories"},
    {"name": "Cameroon", "lat": 3.8480, "lon": 11.5021, "url": "https://www.peacecorps.gov/cameroon/stories"},
    {"name": "Eswatini", "lat": -26.5225, "lon": 31.4659, "url": "https://www.peacecorps.gov/eswatini/stories"},
    {"name": "Ethiopia", "lat": 9.145, "lon": 40.4897, "url": "https://www.peacecorps.gov/ethiopia/stories"},
    {"name": "Ghana", "lat": 7.9465, "lon": -1.0232, "url": "https://www.peacecorps.gov/ghana/stories"},
    {"name": "Guinea", "lat": 9.9456, "lon": -9.6966, "url": "https://www.peacecorps.gov/guinea/stories"},
    {"name": "Kenya", "lat": -1.2921, "lon": 36.8219, "url": "https://www.peacecorps.gov/kenya/stories"},
    {"name": "Lesotho", "lat": -29.6094, "lon": 28.2336, "url": "https://www.peacecorps.gov/lesotho/stories"},
    {"name": "Liberia", "lat": 6.4281, "lon": -9.4295, "url": "https://www.peacecorps.gov/liberia/stories"},
    {"name": "Madagascar", "lat": -18.7669, "lon": 46.8691, "url": "https://www.peacecorps.gov/madagascar/stories"},
    {"name": "Malawi", "lat": -13.2543, "lon": 34.3015, "url": "https://www.peacecorps.gov/malawi/stories"},
    {"name": "Morocco", "lat": 31.7917, "lon": -7.0926, "url": "https://www.peacecorps.gov/morocco/stories"},
    {"name": "Mozambique", "lat": -18.6657, "lon": 35.5296, "url": "https://www.peacecorps.gov/mozambique/stories"},
    {"name": "Namibia", "lat": -22.9576, "lon": 18.4904, "url": "https://www.peacecorps.gov/namibia/stories"},
    {"name": "Rwanda", "lat": -1.9403, "lon": 29.8739, "url": "https://www.peacecorps.gov/rwanda/stories"},
    {"name": "Senegal", "lat": 14.6928, "lon": -14.0062, "url": "https://www.peacecorps.gov/senegal/stories"},
    {"name": "Sierra-Leone", "lat": 8.4606, "lon": -11.7793, "url": "https://www.peacecorps.gov/sierra-leone/stories"},
    {"name": "South Africa", "lat": -30.5595, "lon": 22.9375, "url": "https://www.peacecorps.gov/south-africa/stories"},
    {"name": "Tanzania", "lat": -6.1659, "lon": 39.2026, "url": "https://www.peacecorps.gov/tanzania/stories"},
    {"name": "The Gambia", "lat": 13.4432, "lon": -15.3101, "url": "https://www.peacecorps.gov/the-gambia/stories"},
    {"name": "Togo", "lat": 8.6195, "lon": 0.8248, "url": "https://www.peacecorps.gov/togo/stories"},
    {"name": "Uganda", "lat": 1.3733, "lon": 32.2903, "url": "https://www.peacecorps.gov/uganda/stories"},
    {"name": "Zambia", "lat": -13.1339, "lon": 27.8493, "url": "https://www.peacecorps.gov/zambia/stories"},
    {"name": "Cambodia", "lat": 12.5657, "lon": 104.9910, "url": "https://www.peacecorps.gov/cambodia/stories"},
    {"name": "Indonesia", "lat": -0.7893, "lon": 113.9213, "url": "https://www.peacecorps.gov/indonesia/stories"},
    {"name": "Kyrgyz Republic", "lat": 41.2044, "lon": 74.7661, "url": "https://www.peacecorps.gov/kyrgyz-republic/stories"},
    {"name": "Mongolia", "lat": 46.8625, "lon": 103.8467, "url": "https://www.peacecorps.gov/mongolia/stories"},
    {"name": "Nepal", "lat": 28.3949, "lon": 84.1240, "url": "https://www.peacecorps.gov/nepal/stories"},
    {"name": "Philippines", "lat": 12.8797, "lon": 121.7740, "url": "https://www.peacecorps.gov/philippines/stories"},
    {"name": "Sri Lanka", "lat": 7.8731, "lon": 80.7718, "url": "https://www.peacecorps.gov/sri-lanka/stories"},
    {"name": "Thailand", "lat": 15.8700, "lon": 100.9925, "url": "https://www.peacecorps.gov/thailand/stories"},
    {"name": "Timor-Leste", "lat": -8.8742, "lon": 125.7275, "url": "https://www.peacecorps.gov/timor-leste/stories"},
    {"name": "Viet Nam", "lat": 14.0583, "lon": 108.2772, "url": "https://www.peacecorps.gov/viet-nam/stories"},
    {"name": "Albania", "lat": 41.1533, "lon": 20.1683, "url": "https://www.peacecorps.gov/albania/stories"},
    {"name": "Armenia", "lat": 40.0691, "lon": 45.0382, "url": "https://www.peacecorps.gov/armenia/stories"},
    {"name": "Georgia", "lat": 42.3154, "lon": 43.3569, "url": "https://www.peacecorps.gov/georgia/stories"},
    {"name": "Kosovo", "lat": 42.6026, "lon": 20.9026, "url": "https://www.peacecorps.gov/kosovo/stories"},
    {"name": "Moldova", "lat": 47.0105, "lon": 28.8638, "url": "https://www.peacecorps.gov/moldova/stories"},
    {"name": "Montenegro", "lat": 42.7087, "lon": 19.3744, "url": "https://www.peacecorps.gov/montenegro/stories"},
    {"name": "North Macedonia", "lat": 41.6086, "lon": 21.7453, "url": "https://www.peacecorps.gov/north-macedonia/stories"},
    {"name": "Ukraine", "lat": 48.3794, "lon": 31.1656, "url": "https://www.peacecorps.gov/ukraine/stories"},
    {"name": "Belize", "lat": 17.1899, "lon": -88.4976, "url": "https://www.peacecorps.gov/belize/stories"},
    {"name": "Costa Rica", "lat": 9.7489, "lon": -83.7534, "url": "https://www.peacecorps.gov/costa-rica/stories"},
    {"name": "Dominica", "lat": 15.4150, "lon": -61.3710, "url": "https://www.peacecorps.gov/dominica/stories"},
    {"name": "Dominican Republic", "lat": 18.7357, "lon": -70.1627, "url": "https://www.peacecorps.gov/dominican-republic/stories"},
    {"name": "El Salvador", "lat": 13.7942, "lon": -88.8965, "url": "https://www.peacecorps.gov/el-salvador/stories"},
    {"name": "Grenada", "lat": 12.2628, "lon": -61.6042, "url": "https://www.peacecorps.gov/grenada/stories"},
    {"name": "Guatemala", "lat": 15.7835, "lon": -90.2308, "url": "https://www.peacecorps.gov/guatemala/stories"},
    {"name": "Jamaica", "lat": 18.1096, "lon": -77.2975, "url": "https://www.peacecorps.gov/jamaica/stories"},
    {"name": "Mexico", "lat": 23.6345, "lon": -102.5528, "url": "https://www.peacecorps.gov/mexico/stories"},
    {"name": "Panama", "lat": 8.5375, "lon": -80.7821, "url": "https://www.peacecorps.gov/panama/stories"},
    {"name": "St. Lucia", "lat": 13.9094, "lon": -60.9789, "url": "https://www.peacecorps.gov/st.-lucia/stories"},
    {"name": "St. Vincent and the Grenadines", "lat": 12.9843, "lon": -61.2872, "url": "https://www.peacecorps.gov/st.-vincent-and-the-grenadines/stories"},
    {"name": "Fiji", "lat": -17.7134, "lon": 178.0650, "url": "https://www.peacecorps.gov/fiji/stories"},
    {"name": "Palau", "lat": 7.5149, "lon": 134.5825, "url": "https://www.peacecorps.gov/palau/stories"},
    {"name": "Samoa", "lat": -13.7590, "lon": -172.1046, "url": "https://www.peacecorps.gov/samoa/stories"},
    {"name": "Tonga", "lat": -21.1789, "lon": -175.1982, "url": "https://www.peacecorps.gov/tonga/stories"},
    {"name": "Colombia", "lat": 4.5709, "lon": -74.2973, "url": "https://www.peacecorps.gov/colombia/stories"},
    {"name": "Ecuador", "lat": -1.8312, "lon": -78.1834, "url": "https://www.peacecorps.gov/ecuador/stories"},
    {"name": "Guyana", "lat": 4.8604, "lon": -58.9302, "url": "https://www.peacecorps.gov/guyana/stories"},
    {"name": "Paraguay", "lat": -23.4425, "lon": -58.4438, "url": "https://www.peacecorps.gov/paraguay/stories"}
]

// Convert data to Plotly format
const data = [{
    type: "scattergeo",
    mode: "markers",
    locations: countries.map(country => country.name),
    lat: countries.map(country => country.lat),
    lon: countries.map(country => country.lon),
    text: countries.map(country => country.name),
    marker: {
        size: 8,
        color: "blue"
    }
}];

// Layout configuration
const layout = {
    title: "Peace Corps Interactive Globe",
    geo: {
        projection: {
            type: "natural earth"
        }
    }
};

// Render the map
Plotly.newPlot("world-map", data, layout);

// Click event
document.getElementById('world-map').on('plotly_click', function(data) {
    const point = data.points[0];
    const countryName = point.text;
    const country = countries.find(c => c.name === countryName);
    if (country) {
        window.open(country.url, '_blank');
    }
});
