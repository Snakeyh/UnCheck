import gql from "graphql-tag";
import { promisify } from "es6-promisify";

export const typeDefs = gql`
  extend type Query {
    networkStatus: Boolean
    devicePosition: DevicePosition
  }

  type DevicePosition {
    latitude: Float
    longitude: Float
  }
`;
export const resolvers = {
  Query: {
    networkStatus: () => false,
    devicePosition: () => {
        return getLocation().then((ret) =>{
            return {
                __typename:"DevicePosition",
                longitude: ret.coords.longitude,
                latitude:ret.coords.latitude
            }
        }).catch(err => console.warn(err))
    }
  }
};

function getLocation() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      data => resolve(data),
      err => reject(err),
      {
          enableHighAccuracy:true,
      }
    );
  });
}
