module.exports = {

     sedid: function(length) {
        var key;
        if (length === 'NaN' || length === 'null' || length === 'undefined')
            key = Math.floor(Math.random() * 10);
        else
            key = Math.floor(Math.random() * (10 * length));


        return key;

    },
    
    generate:function(len, c) {
        return new Array(len + 1).join(c);
    }

};
