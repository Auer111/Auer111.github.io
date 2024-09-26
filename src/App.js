import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

function App() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  let animationFrameId = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXVlcjk1IiwiYSI6ImNtMWlleWQwaTBidG8yanB0MXJjYmVob2EifQ.Bv5Qq-JRaLid4pL3_U9esQ";

    //33(.3) = 33% of window is unfilled by globe
    const zoomLevel = Math.log(window.innerWidth / 333) / Math.log(1.85);

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/standard", // Choose globe-friendly style
      center: [-140.5037, 38.0406], // Starting position [lng, lat]
      zoom: zoomLevel,
      projection: "globe", // Set the map projection to 'globe'
      interactive: false,
    });

    map.on("style.load", () => {
      map.on("load", () => {
        // Add a circle directly to the map using GeoJSON
        map.addSource("circle-source", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-84.5037, 38.0406], // The point location
                },
              },
            ],
          },
        });

        // Add a circle layer
        map.addLayer({
          id: "circle-layer",
          type: "circle",
          source: "circle-source",
          paint: {
            "circle-radius": 3, // Circle size
            "circle-color": "#FF1616", // Circle color
            "circle-opacity": 0.8, // Circle opacity
          },
        });
      });
    });

    mapRef.current = map;

    // Function to animate the map rotation
    const rotateGlobe = () => {
      const center = map.getCenter();
      center.lng += 0.1; // Adjust this value for rotation speed
      if (center.lng > 180) center.lng = -180; // Wrap around the globe smoothly

      map.setCenter(center);
      animationFrameId.current = requestAnimationFrame(rotateGlobe); // Keep rotating
    };

    // Start the rotation
    rotateGlobe();

    // Cleanup on component unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div id="map-container" ref={mapContainerRef} />
      </header>
    </div>
  );
}

export default App;
