// Variables for subscription and duration drop-down lists, respectively
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");

// Variable to store the cost of the subscription
var result = document.querySelector(".result");

// Default values for drop-down lists
var subType = "basic";
var subDuration = 1;

// Listen for change event on subscription drop-down
subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    updateSubscriptionDiv();
});

// Listen for change event on duration drop-down
subDurationElement.addEventListener("change", function (e) {
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
});

// Function to calculate total cost
var updateSubscriptionDiv = function () {
    monthlyCost = 5;
    if (subType === "standard") {
        monthlyCost = 7;
    } else if (subType === "premium") {
        monthlyCost = 10;
    }
    total = subDuration * monthlyCost;

    // Update result with chosen duration, chosen subscription type, and the resulting total cost
    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};


