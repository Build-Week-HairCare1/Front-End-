import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

// react map
import ReactMapGl from "react-map-gl";


// components
import SearchForm from "./SearchForm";



const Search = (props) => {
    const {city, state} = props;

    // for react map
    const [viewport, setViewport] = useState({
        latitude: 0,
        longitude: 0,
        zoom: 11,
        width: "100%",
        height: "100%"
    })



  return (
    <div className="search-content">
      <SearchForm />


    </div>
  );
};


const mapStateToProps = state => {
    return {
        city: state.customerReducer.data.city,
        state: state.customerReducer.data.state
    }
        
    
}

export default connect(mapStateToProps, {})(Search);
