import {apiKey, apiUrl, maxResultsResponse} from '../consts';

export function fetchByQuery(query: string): Promise<Response> {
  return fetch(`${apiUrl}?part=snippet&q=${query}&type=video&maxResults=${maxResultsResponse}&key=${apiKey}`)
}

export function fetchByQueryAndNextPageToken(query: string, nextPageToken: string): Promise<Response> {
  return fetch(`${apiUrl}?part=snippet&q=${query}&type=video&pageToken=${nextPageToken}&maxResults=${maxResultsResponse}&key=${apiKey}`)
}
