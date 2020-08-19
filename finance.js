const csv = require('csv-parser');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));
const colors = require('colors');

const fileToParse = args.i;
const months = args.m || 12;
const limit = args.l || 1000000;

var results = {};
var filteredOutTransactionsCount = 0;

fs.createReadStream(fileToParse)
    .pipe(csv({ separator: ';' })
        .on('data', (row) => {
            var fullDate = row['Valutadatum'];
            var monthYear = fullDate.substring(fullDate.length - 7);

            const amount = getAmountFromRow(row);

            if (Math.abs(amount) < limit) {
                if (results.hasOwnProperty(monthYear)) {
                    results[monthYear] = results[monthYear] + amount;
                } else {
                    results[monthYear] = amount;
                }
            } else {
                filteredOutTransactionsCount++;
            }
        })
        .on('end', () => {
            var counter = 0;
            var total = 0;
            for (var prop in results) {
                    total += results[prop];

                    counter++;
                    if (counter >= months) break;
            }

            const averageGain = total / months;

            console.log(`Total gain over the past ${colors.bold(months)} months: ${colorAmount(total)}`);
            console.log(`Average gain per month: ${colorAmount(averageGain)}`);
            if (filteredOutTransactionsCount > 0) {
                console.log(`${colors.bold(filteredOutTransactionsCount)} transactions were larger than ${colors.bold(formatAmount(limit))} and were not included in this calculation.`)
            }
        }
        ));

function getAmountFromRow(row) {
    // Fix CSV files that use comma signs for decimals.
    return Number(row['Bedrag'].replace(',', '.'));
}

function formatAmount(amount) {
    return '€' + +parseFloat(amount).toFixed(2);
}

function colorAmount(amount) {
    const colorFunction = amount > 0 ? colors.green : colors.red;

    const amountText = formatAmount(amount);

    return colorFunction.bold(amountText);
}


