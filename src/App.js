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

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/standard", // Choose globe-friendly style
      center: [0, 0], // Starting position [lng, lat]
      projection: "globe", // Set the map projection to 'globe'
    });

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style for the globe
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
