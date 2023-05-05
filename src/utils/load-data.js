import * as d3 from 'd3';
import axios from 'axios';

export async function loadData(datafile, isUrl = false) {
  let data;
  const fileType = datafile.split('.').pop();
  if (isUrl) {
    if (fileType === 'csv', d3.autoType) {
      data = await d3.csv(datafile);
    } else if (fileType === 'psv') {
      data = await d3.dsv('|', datafile, d3.autoType);
    } else if (fileType === 'geojson') {
      const response = await axios.get(datafile);
      data = response.data;
    } else {
      throw new Error(`Unsupported file type: ${fileType}`);
    }
  } else {
    if (fileType === 'csv') {
      data = await d3.csv(datafile, d3.autoType);
    } else if (fileType === 'psv') {
      data = await d3.dsv('|', datafile, d3.autoType);
    } else if (fileType === 'geojson') {
      const response = await axios.get(datafile);
      data = response.data;
    } else {
      throw new Error(`Unsupported file type: ${fileType}`);
    }
  }
  return data;
}
