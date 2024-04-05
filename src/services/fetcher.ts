// General fetcher function
async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok.')
  }
  return response.json()
}

export default fetcher
