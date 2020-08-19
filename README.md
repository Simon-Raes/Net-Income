# Net-Income
Calculate total and average net income over time of a BNP bank account. 

# Setup
`npm install`

# Running the script

Example usage:

`node finance.js -i /Users/simon.raes/Downloads/CSV_2020-08-19-09.23.csv -m 24 -l 4000`


Example output:

![hm](https://i.imgur.com/7O10q7B.png)

## Arguments: 
* i: Input csv file. (mandatory)
* m: Number of months to use in the the calculation, going back from the current month. (optional, default is 12)
* l: Limit on transaction amount. Any transactions larger than this (both positive and negative) will be ignored in the calculation. (optional, default is no limit)

# Obtaining a BNP CSV file
* Log in to your BNP account.
* Under Quick Links on the right hand side, select "Search transactions".
* At the top of the new screen, select the desired account.
* Click the "Download CSV" button.
