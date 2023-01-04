const { getPopular, getDetails } = require("../modules/movies");
const { Movie } = require("../modules/movies/entities/Movie");

async function movies(parent, args) {
  const data = await getPopular(args.page);

  return data;
}

async function moviesByIds(parent, { ids }) {
  const requests = ids.map((id) => getDetails(id));

  const data = await Promise.all(requests);

  const movies = data.map(({ data }) => new Movie(data));
  console.log("data ", data);

  return [{ id: 1 }];
}

module.exports = {
  movies,
  moviesByIds,
};
