import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";
import L from "leaflet";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(33.52001088075479, 36.26829385757446),
      L.latLng(33.50546582848033, 36.29547681726967)
    ],
    
  });

  return instance;
};
const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;

