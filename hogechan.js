(function () {
    functoin Hogechan () {
        this.hoge = 'hogeo';
        this.piyo = 'piyoko';
        function privateHoge () {}
        function privatePiyo () {}

        return {
            publicPiyo: privatePiyo
        }
    };

    Hogechan.prototype.init = function () {};

    return Hogechan;
})();
