export default function handler(req, res) {
  let pincodes = {
    '570006': ['Mysore', 'Karnataka'],
    '711102': ['Howrah', 'West Bengal']
  }
  res.status(200).json(pincodes);
}
