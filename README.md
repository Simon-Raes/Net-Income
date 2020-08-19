# Net-Income
Calculate total and average net income over time of a BNP bank account. 

# Setup
Run `npm install` in the project's folder.

# Running the script

Example command:
`node finance.js -i /Users/simon.raes/Downloads/CSV_2020-08-19-09.23.csv -m 24 -l 4000`

## Arguments: 
* i: Input csv file (mandatory)
* m: Number of months to use in the the calculation (optional, default is 12)
* l: Limit on transaction amount. Any transactions above this number will be ignored in the calculation. 

# Obtaining a BNP CSV file
* Log in to your BNP account.
* Under Quick Links on the right hand side, select "Search transactions".
* At the top of the new screen, select the desired account.
* Click the "Download CSV" button.