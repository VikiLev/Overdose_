define([
    'jquery',
    'uiComponent',
    'ko',
], function ($, Component, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Overdose_Testimonials/view/my-child-js'
        },
        selectedChoice: ko.observable(),
        initialize: function () {
            this._super();
        },
    });
});
