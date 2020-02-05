import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

// yelp api
import { yelpApi } from "../../utils/yelpApi";

// react map
import ReactMapGl, { Marker, Popup } from "react-map-gl";

// components
import SearchForm from "./SearchForm";
import PopupCard from "./PopupCard";

// svg image for icon
import icon from "./scissors.svg";

const Search = props => {
  const { city, state } = props;

  // mapbox token
  const mapBoxToken =
    "pk.eyJ1IjoibXBhb2xvZHIiLCJhIjoiY2s2NGg1NnR0MGR0azNkcDlhdGs3NjhwZyJ9.g3B-i9Ydwh3j6yF1kAPLJw";

  // for react map
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 11,
    width: "100%",
    height: "100%"
  });

  // for markers
  const [locations, setLocations] = useState([]);

  const [newLocation, setNewLocation] = useState(`${city}, ${state}`);

  // for popups
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    yelpApi()
      .get(
        `/businesses/search?location=${newLocation}&categories=barbers,hair&radius=16093`
      )
      .then(res => {
        console.log(res);
        setLocations(res.data.businesses);
      })
      .catch(err => console.log(err));

    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${newLocation}.json?access_token=${mapBoxToken}`
      )
      .then(res => {
        setViewport({
          ...viewport,
          latitude: res.data.features[0].center[1],
          longitude: res.data.features[0].center[0]
        });
      })
      .catch(err => console.log(err));
  }, [newLocation]);

  return (
    <div className="search-content">
      <SearchForm setNewLocation={setNewLocation} />

      <ReactMapGl
        {...viewport}
        className="map"
        mapboxApiAccessToken={mapBoxToken}
        onViewportChange={viewport => setViewport(viewport)}
        mapStyle="mapbox://styles/mpaolodr/ck64hm65e17nh1jpnpd4yw4on"
      >
        {locations.map(location => {
          return (
            <Marker
              key={location.id}
              latitude={location.coordinates.latitude}
              longitude={location.coordinates.longitude}
            >
              <button
                className="icon-container"
                onClick={() => setSelected(location)}
              >
                <img src={icon} alt="scissors" className="icon" />
              </button>
            </Marker>
          );
        })}

        {selected && (
          <Popup
            latitude={selected.coordinates.latitude}
            longitude={selected.coordinates.longitude}
            onClose={() => setSelected(null)}
          >
            <PopupCard location={selected} />
          </Popup>
        )}
      </ReactMapGl>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    city: state.customerReducer.data.city,
    state: state.customerReducer.data.state
  };
};

export default connect(mapStateToProps, {})(Search);
