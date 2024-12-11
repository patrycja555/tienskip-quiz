var $ = jQuery.noConflict();

$(document).ready(function(e) {
    SiteManager.init();
});

var SiteManager = {
    MONEY_STEPS:10,

    nMoneyInTheBank:1000000,
    myMoneyDisplay:$('.js-moneys'),

    init: function() {
        $('.js-start-button').on('click', this.onStartButtonClicked.bind(this));
        $('.js-home-page').show();

        $('.js-plus-button').on('click', this.onPlusClicked.bind(this));
        $('.js-minus-button').on('click', this.onMinusClicked.bind(this));

        this.outputMoneyInTheBank();
    },

    onStartButtonClicked: function() {
        $('.js-home-page').hide();
        $('.js-selection-screen').show();
    },

    onPlusClicked: function() {
        this.nMoneyInTheBank += this.MONEY_STEPS;
        this.outputMoneyInTheBank();
    },

    onMinusClicked: function() {
        this.nMoneyInTheBank -= this.MONEY_STEPS;

        if(this.nMoneyInTheBank < 0){
            this.nMoneyInTheBank = 0;
        }
        this.outputMoneyInTheBank();
    },

    outputMoneyInTheBank: function() {
        this.myMoneyDisplay.html(this.nMoneyInTheBank);
    }
};