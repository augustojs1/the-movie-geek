function getRuntimeInHours(runtimeInMinutes) {
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  return `${hours}h ${minutes}m`;
}

export default getRuntimeInHours;
