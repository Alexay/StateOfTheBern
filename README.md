#StateOfTheBern.com
Tracking the RCP polling averages and visualising them on a US map.

##How to contribute
If you would like to compile polling data for states that aren't yet available on the RCP average,
you can create a JSON-formatted file and open an issue. The format is as follows:

```json
{
  "frontrunnerName":"Clinton",
  "frontrunnerPoints":"57.4",
  "underdogName":"Sanders",
  "underdogPoints":"33.3",
  "pollDate":"Fri, 19 Feb 2016 00:00:00 -0600"
}
```

Save that into a `.json` file named after the double-lettered short name of the state.
E.g. `SC.json` for South Carolina polling data.

Please include the polls from which the data was extracted into the issue description.
