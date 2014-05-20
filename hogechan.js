(function () {
    functoin Hogechan () {
        this.hoge = 'hogeo';
        this.piyo = 'piyoko';
        function privateHoge () {}
    };

    Hogechan.prototype.init = function () {};

    return Hogechan;
})();
