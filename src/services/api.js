export default async function articles(value, page = 1) {
  const baseURL = 'https://pixabay.com/api/';
  const API_KEY = '41049165-3fd635f9aea88275b2a4dde7b';

  return await fetch(
    `${baseURL}?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(Response => Response.json());
}
