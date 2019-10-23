const formatDate = (date) => {
  return date.replace(/(T)([\d:]+)(\.000\+0000)/g, ' $2');
};


export default {
  formatDate
}
