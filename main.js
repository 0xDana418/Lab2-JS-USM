const transactions = [
    {
        transaction_id: "1",
        transaction_date: "2019-01-01",
        transaction_amount: 100.0,
        transaction_type: "debit",
        transaction_description: "Payment for groceries",
        merchant_name: "SuperMart",
        card_type: "Visa",
        },
        {
        transaction_id: "2",
        transaction_date: "2019-01-02",
        transaction_amount: 50.0,
        transaction_type: "credit",
        transaction_description: "Refund for returned item",
        merchant_name: "OnlineShop",
        card_type: "MasterCard",
        },
        {
        transaction_id: "3",
        transaction_date: "2019-01-03",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner with friends",
        merchant_name: "RestaurantABC",
        card_type: "Amex",
        },
        {
        transaction_id: "4",
        transaction_date: "2019-01-04",
        transaction_amount: 120.0,
        transaction_type: "debit",
        transaction_description: "Shopping at Mall",
        merchant_name: "FashionStoreXYZ",
        card_type: "Discover",
        },
        {
        transaction_id: "5",
        transaction_date: "2019-01-05",
        transaction_amount: 25.0,
        transaction_type: "credit",
        transaction_description: "Returned defective product",
        merchant_name: "ElectronicsShop",
        card_type: "Visa",
        },
        {
        transaction_id: "6",
        transaction_date: "2019-01-06",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Gasoline refill",
        merchant_name: "GasStationXYZ",
        card_type: "MasterCard",
        },
        {
        transaction_id: "7",
        transaction_date: "2019-01-07",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Lunch with colleagues",
        merchant_name: "Cafe123",
        card_type: "Visa",
        },
        {
        transaction_id: "8",
        transaction_date: "2019-01-08",
        transaction_amount: 90.0,
        transaction_type: "debit",
        transaction_description: "Movie tickets",
        merchant_name: "CinemaXYZ",
        card_type: "Amex",
        },
        {
        transaction_id: "9",
        transaction_date: "2019-01-09",
        transaction_amount: 150.0,
        transaction_type: "debit",
        transaction_description: "Weekend getaway",
        merchant_name: "ResortABC",
        card_type: "Discover",
        },
        {
        transaction_id: "10",
        transaction_date: "2019-01-10",
        transaction_amount: 20.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Visa",
        },
];

function getUniqueTransactionTypes(transactions) {
    if (!transactions.length) return null;
    return [...new Set(transactions.map(t => t.transaction_type))];
}

function calculateTotalAmount(transactions) {
    if (!transactions.length) return null;
    return transactions.reduce((total, t) => total + t.transaction_amount, 0);
}

function calculateTotalAmountByDate(transactions, year, month, day) {
    if (!transactions.length) return null;
    return transactions
        .filter(t => {
            const date = new Date(t.transaction_date);
            return (!year || date.getFullYear() === year) &&
                    (!month || date.getMonth() + 1 === month) &&
                    (!day || date.getDate() === day);
        })
        .reduce((total, t) => total + t.transaction_amount, 0);
}

function getTransactionByType(transactions, type) {
    return transactions.length ? transactions.filter(t => t.transaction_type === type) : null;
}

function getTransactionsInDateRange(transactions, startDate, endDate) {
    return transactions.length ? transactions.filter(t => {
        const date = new Date(t.transaction_date);
        return date >= new Date(startDate) && date <= new Date(endDate);
    }) : null;
}

function getTransactionsByMerchant(transactions, merchantName) {
    return transactions.length ? transactions.filter(t => t.merchant_name === merchantName) : null;
}

function calculateAverageTransactionAmount(transactions) {
    if (!transactions.length) return null;
    return calculateTotalAmount(transactions) / transactions.length;
}

function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
    return transactions.length ? transactions.filter(t => t.transaction_amount >= minAmount && t.transaction_amount <= maxAmount) : null;
}

function calculateTotalDebitAmount(transactions) {
    return transactions.length ? transactions.filter(t => t.transaction_type === "debit").reduce((total, t) => total + t.transaction_amount, 0) : null;
}

function findMostTransactionsMonth(transactions) {
    if (!transactions.length) return null;
    const monthCounts = {};
    transactions.forEach(t => {
        const month = t.transaction_date.slice(0, 7);
        monthCounts[month] = (monthCounts[month] || 0) + 1;
    });
    return Object.keys(monthCounts).reduce((a, b) => monthCounts[a] > monthCounts[b] ? a : b, "");
}

function findMostDebitTransactionMonth(transactions) {
    if (!transactions.length) return null;
    const monthCounts = {};
    transactions.filter(t => t.transaction_type === "debit").forEach(t => {
        const month = t.transaction_date.slice(0, 7);
        monthCounts[month] = (monthCounts[month] || 0) + 1;
    });
    return Object.keys(monthCounts).reduce((a, b) => monthCounts[a] > monthCounts[b] ? a : b, "");
}

function mostTransactionTypes(transactions) {
    if (!transactions.length) return null;
    const debitCount = transactions.filter(t => t.transaction_type === "debit").length;
    const creditCount = transactions.filter(t => t.transaction_type === "credit").length;
    return debitCount > creditCount ? "debit" : creditCount > debitCount ? "credit" : "equal";
}

function getTransactionsBeforeDate(transactions, date) {
    return transactions.length ? transactions.filter(t => new Date(t.transaction_date) < new Date(date)) : null;
}

function findTransactionById(transactions, id) {
    return transactions.length ? transactions.find(t => t.transaction_id === id) || null : null;
}

function mapTransactionDescriptions(transactions) {
    return transactions.length ? transactions.map(t => t.transaction_description) : null;
}

console.log(getUniqueTransactionTypes(transactions));
console.log(calculateTotalAmount(transactions));
console.log(calculateTotalAmountByDate(transactions, 2019, 1, 3));
console.log(getTransactionByType(transactions, "debit"));
console.log(getTransactionsInDateRange(transactions, "2019-01-01", "2019-01-02"));
console.log(getTransactionsByMerchant(transactions, "SuperMart"));
console.log(calculateAverageTransactionAmount(transactions));
console.log(getTransactionsByAmountRange(transactions, -100, 200));
console.log(calculateTotalDebitAmount(transactions));
console.log(findMostTransactionsMonth(transactions));
console.log(findMostDebitTransactionMonth(transactions));
console.log(mostTransactionTypes(transactions));
console.log(getTransactionsBeforeDate(transactions, "2024-02-04"));
console.log(findTransactionById(transactions, "2"));
console.log(mapTransactionDescriptions(transactions));