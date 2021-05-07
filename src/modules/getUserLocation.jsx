export const getUserLocation = async () => {
  const coords = await window.navigator.geolocation.getCurrentPosition(
    (position) => {
      return position.coords;
    }
  );
  return [coords.latitude, coords.longitude];
};
