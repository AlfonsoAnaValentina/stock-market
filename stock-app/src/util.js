export async function fetchData(symbol, range) {
  //https://cloud.iexapis.com/stable/stock/twtr/intraday-prices?token=pk_be16adae058c48b3bed3de38a670df7b
  const token = 'pk_be16adae058c48b3bed3de38a670df7b '; 
  const serverUrl = 'https://cloud.iexapis.com/stable/stock/IBM/intraday-prices?token='; 
  const symbol1 = 'twtr';
  const range1 = '?symbol=${symbol}&range=${range}';
  const url = `${serverUrl}${token}`;
  const response = await fetch(url);
  return response.json();
}

export function stockData(obj) {
  return {
    date: new Date(obj.date),
    open: obj.open,
    close: obj.close,
    low: obj.low,
    high: obj.high,
  };
}