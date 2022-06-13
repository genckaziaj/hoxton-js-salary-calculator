let yourGrossSalary = 500;
let pensionContribution = (5 / 100) * yourGrossSalary;

console.log(pensionContribution);

let taxableAmount = yourGrossSalary - pensionContribution;

console.log(taxableAmount);

let personIsTaxed = undefined;

if (taxableAmount >= 0 && taxableAmount < 80) {
  personIsTaxed = 0 / 100;
} else if (taxableAmount >= 80 && taxableAmount < 250) {
  personIsTaxed = (4 / 100) * (taxableAmount - 80);
} else if (taxableAmount >= 250 && taxableAmount < 450) {
  personIsTaxed = (4 / 100) * 170 + (8 / 100) * (taxableAmount - 250);
} else if (taxableAmount >= 450) {
  personIsTaxed =
    (4 / 100) * 170 + (8 / 100) * 200 + (10 / 100) * (taxableAmount - 450);
}

console.log(personIsTaxed);

let takeHomePay = taxableAmount - personIsTaxed;

console.log(takeHomePay);
