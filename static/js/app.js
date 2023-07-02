const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function initialize() {
  const data = await fetchData();
  const dropdownMenu = d3.select("#selDataset");
  const names = data.names;

  names.forEach((id) => {
    dropdownMenu.append("option").text(id).property("value", id);
  });

  const sample_one = names[0];
  optionChanged(sample_one);
}

function Metadata(sample, data) {
  const metadata = data.metadata;
  const value = metadata.find((result) => result.id == sample);
  console.log(value);

  d3.select("#sample-metadata").html("");
  Object.entries(value).forEach(([key, value]) => {
    console.log(key, value);
    d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
  });
}

function BarChart(sample, data) {
  const sampleInfo = data.samples;
  const value = sampleInfo.find((result) => result.id == sample);
  const otu_ids = value.otu_ids;
  const otu_labels = value.otu_labels;
  const sample_values = value.sample_values;
  console.log(otu_ids, otu_labels, sample_values);

  const y = otu_ids.slice(0, 10).map((id) => `OTU ${id}`).reverse();
  const x = sample_values.slice(0, 10).reverse();

  const trace = {
    x: x,
    y: y,
    type: "bar",
    marker: {
      color: "##003153",
    },
    orientation: "h",
  };

  const layout = {
    title: "Top 10 OTUs",
  };

  Plotly.newPlot("bar", [trace], layout);
}

function BubbleChart(sample, data) {
  const sampleInfo = data.samples;
  const value = sampleInfo.find((result) => result.id == sample);
  const otu_ids = value.otu_ids;
  const otu_labels = value.otu_labels;
  const sample_values = value.sample_values;
  console.log(otu_ids, otu_labels, sample_values);

  const trace1 = {
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: "markers",
    marker: {
      size: sample_values,
      color: otu_ids,
      colorscale: "Cividis",
    },
  };

  const layout = {
    hovermode: "closest",
    xaxis: { title: "OTU ID" },
  };

  Plotly.newPlot("bubble", [trace1], layout);
}

function optionChanged(value) {
  fetchData()
    .then((data) => {
      Metadata(value, data);
      BarChart(value, data);
      BubbleChart(value, data);
    })
    .catch((error) => {
      // Handle errors here
    });
}

initialize();
