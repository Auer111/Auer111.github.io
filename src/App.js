import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import icon from "./icon.png";
import man from "./man.png";
import BobbingWords from "./BobbingWords";
import "mapbox-gl/dist/mapbox-gl.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./App.css";

function App() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  let animationFrameId = useRef();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXVlcjk1IiwiYSI6ImNtMWlleWQwaTBidG8yanB0MXJjYmVob2EifQ.Bv5Qq-JRaLid4pL3_U9esQ";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/standard", // Choose globe-friendly style
      center: [-140.5037, 38.0406], // Starting position [lng, lat]
      zoom: isDesktop ? 1 : 0,
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

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Update based on window size
      mapRef.current.setZoom(window.innerWidth >= 768 ? 1 : 0);
    };

    window.addEventListener("resize", handleResize);

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <img src={icon}></img>
        <span className="material-symbols-outlined" style={{ fontSize: "2em" }}>
          menu
        </span>
      </header>
      <div
        style={{
          position: "absolute",
          width: "100%",
          left: 0,
          right: 0,
          bottom: isDesktop ? "6em" : 0,
          textAlign: "center",
          color: "white",
        }}
      >
        <BobbingWords
          words={[
            "Conflict",
            "Disagreement",
            "Discord",
            "Division",
            "Estrangement",
            "Hostility",
            "Alienation",
            "Separation",
            "Disunion",
            "Dispute",
            "Dissension",
            "Opposition",
            "Animosity",
            "Antagonism",
            "Breakup",
            "Misunderstanding",
            "Divergence",
            "Disaffection",
            "Detachment",
            "Fracture",
            "Isolation",
            "Schism",
            "Split",
            "Quarrel",
            "Feud",
            "Enmity",
            "Severance",
            "Division",
            "Disparity",
            "War",
            "Gossip",
            "Divorce",
          ]}
        />

        <h1
          style={{
            color: "red",
            marginBottom: "-.4em",
            fontSize: "xxx-large",
            marginInlineStart: "-2.9em",
          }}
        >
          BE
        </h1>
        <h1 style={{ margin: 0 }}>RECONCILED</h1>
        <img
          src={man}
          style={{
            width: "5em",
            marginTop: "-5.5em",
          }}
        ></img>
        <div>
          <AwesomeButton type="primary" style={{ margin: "1em" }}>
            <span
              class="material-symbols-outlined"
              style={{
                fontSize: "x-large",
                paddingRight: ".5em",
                marginRight: ".5em",
                borderRight: "solid black 1px",
              }}
            >
              rocket_launch
            </span>
            EMBARK
          </AwesomeButton>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          left: 0,
          right: 0,
          bottom: 0,
          textAlign: "center",
          color: "white",
        }}
      ></div>

      <div id="map-container" ref={mapContainerRef} />
    </div>
  );
}

export default App;
