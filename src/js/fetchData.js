export const fetchData = async (url) => {
  const req = await fetch(url);

  if (!req.ok) {
    throw new Error("Something went wrong !");
  }

  const data = await req.json();

  return data;
};
