export const titleize = (obj) => {
  let string = '';
  obj.split('_').forEach((word) => {
    string += word.charAt(0).toUpperCase() + word.slice(1);
    string += ' ';
  })
  return string;
}
