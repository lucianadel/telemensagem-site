export async function getReadyMessages() {
  const response = await fetch("http://localhost:3333/api/messages-ready");
  return response.json();
}
