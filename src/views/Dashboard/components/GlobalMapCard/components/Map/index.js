import React, { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

import { selectDiff } from '../../../../../../store/modules/auth/actions';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.auth.list);

  const selectCompare = useCallback((city) => {
    dispatch(selectDiff(city));
  });

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 600
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter(d => d.properties.REGION_UN === "Americas")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {list.map((city) => (
        <Marker
          key={city.name}
          coordinates={city.coord_city}
          onClick={() => selectCompare(city)}
        >
          <circle
            r={10}
            fill="#409944"
            stroke="#fff"
            strokeWidth={2}
            style={{ cursor: 'pointer' }}
          />
          <text
            textAnchor="middle"
            y={-15}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", cursor: 'pointer' }}
          >
            86% {city.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
