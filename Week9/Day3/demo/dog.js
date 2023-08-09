// https://dog.ceo/api/breeds/image/random

export const getDog = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  console.log(data);

  return data.message;
};
