var $ = jQuery.noConflict();

$(document).ready(function(e) {
    SiteManager.init();
});

var SiteManager = {
    MONEY_STEPS: 100000,

    nMoneyInTheBank: 1000000,
    myMoneyDisplay: $('.js-climate'),
    nClimate: 0,
    myBudgetDisplay: $('.js-budget'),

    nTransport: 0,
    myTransportDisplay: $('.js-transport'),

    nSport: 0,
    mySportDisplay: $('.js-sport'),

    nHousing: 0,
    myHousingDisplay: $('.js-housing'),

    nHealthcare: 0,
    myHealthcareDisplay: $('.js-healthcare'),

    init: function() {
        this.myMoneyDisplay = $('.js-climate');
        this.myBudgetDisplay = $('.js-budget');

        this.myTransportDisplay = $('.js-transport');
        this.mySportDisplay = $('.js-sport');
        this.myHousingDisplay = $('.js-housing');
        this.myHealthcareDisplay = $('.js-healthcare');

        $('.js-start-button').on('click', this.onStartButtonClicked.bind(this));
        $('.js-home-page').show();

        $('.js-plus-button').on('click', this.onPlusClicked.bind(this));
        $('.js-minus-button').on('click', this.onMinusClicked.bind(this));

        $('.js-plus-button-transport').on('click', this.onPlusClickedTransport.bind(this));
        $('.js-minus-button-transport').on('click', this.onMinusClickedTransport.bind(this));

        $('.js-plus-button-sport').on('click', this.onPlusClickedSport.bind(this));
        $('.js-minus-button-sport').on('click', this.onMinusClickedSport.bind(this));

        $('.js-plus-button-housing').on('click', this.onPlusClickedHousing.bind(this));
        $('.js-minus-button-housing').on('click', this.onMinusClickedHousing.bind(this));

        $('.js-plus-button-healthcare').on('click', this.onPlusClickedHealthcare.bind(this));
        $('.js-minus-button-healthcare').on('click', this.onMinusClickedHealthcare.bind(this));

        this.outputMoneyInTheBank();
    },

    onStartButtonClicked: function() {
        $('.js-home-page').hide();
        $('.js-selection-screen').show();
    },

    onPlusClicked: function() {
        if (this.nMoneyInTheBank >= this.MONEY_STEPS) {
            this.nClimate += this.MONEY_STEPS;
            this.nMoneyInTheBank -= this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputClimate();
    },

    onMinusClicked: function() {
        if (this.nClimate >= this.MONEY_STEPS) {
            this.nClimate -= this.MONEY_STEPS;
            this.nMoneyInTheBank += this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputClimate();
    },

    onPlusClickedTransport: function() {
        if (this.nMoneyInTheBank >= this.MONEY_STEPS) {
            this.nTransport += this.MONEY_STEPS;
            this.nMoneyInTheBank -= this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputTransport();
    },

    onMinusClickedTransport: function() {
        if (this.nTransport >= this.MONEY_STEPS) {
            this.nTransport -= this.MONEY_STEPS;
            this.nMoneyInTheBank += this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputTransport();
    },

    onPlusClickedSport: function() {
        if (this.nMoneyInTheBank >= this.MONEY_STEPS) {
            this.nSport += this.MONEY_STEPS;
            this.nMoneyInTheBank -= this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputSport();
    },

    onMinusClickedSport: function() {
        if (this.nSport >= this.MONEY_STEPS) {
            this.nSport -= this.MONEY_STEPS;
            this.nMoneyInTheBank += this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputSport();
    },

    onPlusClickedHousing: function() {
        if (this.nMoneyInTheBank >= this.MONEY_STEPS) {
            this.nHousing += this.MONEY_STEPS;
            this.nMoneyInTheBank -= this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputHousing();
    },

    onMinusClickedHousing: function() {
        if (this.nHousing >= this.MONEY_STEPS) {
            this.nHousing -= this.MONEY_STEPS;
            this.nMoneyInTheBank += this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputHousing();
    },

    onPlusClickedHealthcare: function() {
        if (this.nMoneyInTheBank >= this.MONEY_STEPS) {
            this.nHealthcare += this.MONEY_STEPS;
            this.nMoneyInTheBank -= this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputHealthcare();
    },

    onMinusClickedHealthcare: function() {
        if (this.nHealthcare >= this.MONEY_STEPS) {
            this.nHealthcare -= this.MONEY_STEPS;
            this.nMoneyInTheBank += this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputHealthcare();
    },

    outputClimate: function() {
        this.myMoneyDisplay.html(this.nClimate);
    },

    outputMoneyInTheBank: function() {
        this.myBudgetDisplay.html(this.nMoneyInTheBank);
    },

    outputTransport: function() {
        this.myTransportDisplay.html(this.nTransport);
    },

    outputSport: function() {
        this.mySportDisplay.html(this.nSport);
    },

    outputHousing: function() {
        this.myHousingDisplay.html(this.nHousing);
    },

    outputHealthcare: function() {
        this.myHealthcareDisplay.html(this.nHealthcare);
    }
};

