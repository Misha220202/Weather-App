let sharedData = null;

export const setData = async (data) => {
  sharedData = await data;
};

export const getData = async () => {
  return await sharedData;
};
