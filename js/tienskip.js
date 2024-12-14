var $ = jQuery.noConflict();

$(document).ready(function(e) {
    SiteManager.init();
});

var SiteManager = {
    MONEY_STEPS:100000,

    nMoneyInTheBank:1000000,
    myMoneyDisplay:$('.js-climate'),
    nClimate: 0, 
    myBudgetDisplay: $('.js-budget'),

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
        if (this.nMoneyInTheBank >= this.MONEY_STEPS){
            this.nClimate += this.MONEY_STEPS;
            this.nMoneyInTheBank -= this.MONEY_STEPS;
        }
        this.outputMoneyInTheBank();
        this.outputClimate();
    },

    onMinusClicked: function() {
        if(this.nClimate >= this.MONEY_STEPS){
            this.nClimate -= this.MONEY_STEPS;
            this.nMoneyInTheBank += this.MONEY_STEPS;
        } 
        this.outputMoneyInTheBank();
        this.outputClimate();
    },
    outputClimate: function(){
    this.myMoneyDisplay.html(this.nClimate);
    },
    outputMoneyInTheBank: function() {
    this.myBudgetDisplay.html(this.nMoneyInTheBank);
    }
     
};