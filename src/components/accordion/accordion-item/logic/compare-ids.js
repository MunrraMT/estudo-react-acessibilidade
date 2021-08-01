const compareIDs = (active, id) => {
  if (active === Number(id.slice(15))) return true;

  return false;
};

export default compareIDs;
