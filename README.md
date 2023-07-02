# Belly-button Biodiversity Challenge
This repository contains the code and data for an interactive web visualization dashboard that analyzes samples obtained from individuals. The data is sourced from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json. The dashboard is built using the D3 library to create interactive horizontal bar charts, bubble charts, and display individual demographic information.

## Project Setup
Clone the repository to your local machine.       
Access the dashboard using the deployed link provided in the section below or open the HTML file (index.html) locally in your web browser.

## Dashboard Features

### Horizontal Bar Chart with Dropdown Menu       
The dashboard displays a horizontal bar chart representing the top 10 Operational Taxonomic Units (OTUs) found in the selected individual.        
The dropdown menu allows the user to select different individuals to view their specific data.        
The chart uses sample_values as the values, otu_ids as the labels, and otu_labels as the hovertext.

### Bubble Chart
The dashboard features a bubble chart representing each sample obtained from the selected individual.       
The chart uses otu_ids for the x-axis, sample_values for the y-axis, sample_values for the marker size, otu_ids for the marker colors, and otu_labels for the text values.

### Display Sample Metadata
The dashboard displays the metadata information for the selected individual.       
The individual's demographic information (key-value pairs) from the metadata JSON object is displayed on the page.

## Interactivity and Update
All charts and metadata are updated automatically when a new individual is selected from the dropdown menu.

## Deployment
The dashboard is deployed to a free static page hosting service, GitHub Pages, for easy access and sharing. The deployed version of the dashboard can be found at the following link: https://owenjohannes.github.io/belly-button-challenge/
