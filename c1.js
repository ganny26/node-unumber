module.exports = {
    sedid: function(length) {
        var key;
        if (length === 'NaN' || length === 'null' || length === 'undefined')
            key = Math.floor(Math.random() * 10);
        else
            key = Math.floor(Math.random() * (10 * length));


        return key;

    },
    generate: function(len, c) {
        return new Array(len + 1).join(c);
    },
    generatePattern: function(len, pattern) {
        var possibilities = ["abcdefghijklmnopqrstuvwxyz",
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "0123456789",
            "~!@#$%^&()_+-={}[];\',"
        ];

        var chars = "";
        var pattern = pattern ? pattern : "aA0";
        pattern.split('').forEach(function(a) {
            if (!isNaN(parseInt(a))) {
                chars += possibilities[2];
            } else if (/[a-z]/.test(a)) {
                chars += possibilities[0];
            } else if (/[A-Z]/.test(a)) {
                chars += possibilities[1];
            } else {
                chars += possibilities[3];
            }
        });

        var len = len ? len : 30;

        var result = '';

        while (len--) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        };

        return result;
    }

};
