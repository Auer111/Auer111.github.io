import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

function App() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXVlcjk1IiwiYSI6ImNtMWlleWQwaTBidG8yanB0MXJjYmVob2EifQ.Bv5Qq-JRaLid4pL3_U9esQ";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
    });
    new mapboxgl.Marker().setLngLat([12.554729, 55.70651]).addTo(map);

    mapRef.current = map;

    return () => {
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
