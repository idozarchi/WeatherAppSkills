// Get user's coordinates and fetch city name using a reverse geocoding API (OpenStreetMap Nominatim)
export async function getDefaultCity(): Promise<string | null> {
  if (!navigator.geolocation) {
    return null;
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          // Try to get the city name from the response
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state ||
            null;
          resolve(city);
        } catch {
          resolve(null);
        }
      },
      () => resolve(null),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
}