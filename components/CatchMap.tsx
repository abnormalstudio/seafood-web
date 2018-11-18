import React from "react";
import MapGL, { Marker } from "react-map-gl";
import moment from "moment";
import produce from "immer";
import styled from "react-emotion";
import { IScan } from "@types";
import { sizes } from "@settings";

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

const token =
  "pk.eyJ1IjoibGVpZ2hoYWxsaWRheSIsImEiOiJjajR2bzNhcHkweHdyMzJucnpodm5zc2h5In0.Vj2bGQOYqTTgDInlXD27Xg";

const markerStyle = `
.spot:before {
  content: ' ';
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #18FFFF;
  border-radius: 10px;
  margin: 0 8px;
}
.spot.origin:before {
  background: red;
}
.spot.user:before {
  background: yellow;
}
.spot {
  border-radius: 20px;
  padding-right: 12px;
  margin: -12px;
  color: transparent;
  line-height: 24px;
  font-size: 13px;
  white-space: nowrap;
}
.spot span {
  display: none;
}
.spot:hover {
  background: rgba(0,0,0,0.8);
  color: #fff;
}
.spot:hover span {
  display: inline-block;
}
`;

type Viewport = {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
  width: number;
  height: number;
};

type Props = {
  origin: {
    time: string;
    latitude: number;
    longitude: number;
  };
  scans: Array<IScan>;
};

type MarkerData = {
  latitude: number;
  longitude: number;
  time: string;
  markerType: string;
  text: string;
};

const FishTravel = styled("p")`
  width: 80%;
  margin: ${sizes.mS} auto;
`;

export default class CatchMap extends React.Component<Props> {
  state = {
    viewport: {
      latitude: 43.6532,
      longitude: -79.3832,
      zoom: 4,
      bearing: 0,
      pitch: 0,
      width: "100%",
      height: window.innerHeight / 2
    },
    settings: {
      dragPan: true,
      dragRotate: true,
      scrollZoom: true,
      touchZoom: true,
      touchRotate: true,
      doubleClickZoom: true,
      minZoom: 0,
      maxZoom: 20,
      minPitch: 0,
      maxPitch: 85
    },
    userLocation: null
  };

  componentDidMount() {
    const { latitude, longitude } = this.props.origin;
    this.setState(
      produce(this.state, draft => {
        draft.viewport.latitude = latitude;
        draft.viewport.longitude = longitude;
      })
    );

    if ("geolocation" in navigator) {
      this.loadPosition();
    }
  }

  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      this.setState({
        userLocation: { latitude, longitude }
      });
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  renderMarker = (data: MarkerData) => {
    return (
      <Marker
        key={data.time}
        longitude={data.longitude}
        latitude={data.latitude}
      >
        <div className={`spot ${data.markerType}`}>
          <span>
            {data.text} - {moment(data.time).format("MMMM Do YYYY")}
          </span>
        </div>
      </Marker>
    );
  };

  onViewportChange = (viewport: Viewport) => {
    this.setState({ viewport });
  };

  render() {
    const { viewport, settings, userLocation } = this.state;
    const { origin, scans } = this.props;

    return (
      <div>
        <MapGL
          {...viewport}
          {...settings}
          mapStyle="mapbox://styles/leighhalliday/cjoma99931oam2rmklyn05kil"
          onViewportChange={this.onViewportChange}
          mapboxApiAccessToken={token}
        >
          <style>{markerStyle}</style>
          {this.renderMarker({
            ...origin,
            markerType: "origin",
            text: "Origin"
          })}
          {scans.map(scan =>
            this.renderMarker({
              text: scan.scanner,
              time: scan.scannedAt,
              latitude: scan.latitude,
              longitude: scan.longitude,
              markerType: "scan"
            })
          )}
          {userLocation &&
            this.renderMarker({
              text: "Your location",
              time: moment().format(),
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              markerType: "user"
            })}
        </MapGL>
        {userLocation && (
          <FishTravel>
            Your fish travelled{" "}
            {Math.floor(
              getDistanceFromLatLonInKm(
                origin.latitude,
                origin.longitude,
                userLocation.latitude,
                userLocation.longitude
              )
            )}
            km to be with you today.
          </FishTravel>
        )}
      </div>
    );
  }
}
