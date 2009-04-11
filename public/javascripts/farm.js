// original: http://www.memorycraft.jp/2008/10/jqueryboids.html
(function (A)
{
    A.fn.boids = function (B)
    {
        var D = this;
        var C = jQuery.extend(
        {
            maxspeed         : 100,
            turnspeed        : 80,
            repulsion        : 10,
            homing           : 5,
            delay            : 60,
            chars            : ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split(), 
            notes            : ("abcdefghijklmzopqrstuvwxyz").split(),
            clickcallback    : function () {},
            hoveroncallback  : function () {},
            hoveroffcallback : function () {}
        },
        B || {});
        return this.each(function ()
        {
            var O = A(this);
            var I = C.chars.length;
            var H = O.width();
            var Z = O.height();
            var T = (H + Z) / 2;
            var J = T * 2 / 5;
            var e = 1000000000;
            var M;
            var S = new Array(I * 3);
            var Q = new Array(I * 3);
            var N = new Array(I * 3);
            var d = new Array(I * 3);
            var Y = new Array(I * 3);
            var X = new Array(I * 3);
            var V = new Array(I * 3);
            for (var b = 0; b < d.length; b++) {
                d[b] = new Array(2)
            }
            var U = new Array(I * 3);
            var R = new Array(I * 3);
            var P = new Array(I * 3);
            function c()
            {
                for (var g = 0; g < I * 3; g++)
                {
                    U[g] = S[g] = 3000 + Math.floor(Math.random() * (H) * 100);
                    R[g] = Q[g] = 3000 + Math.floor(Math.random() * (Z) * 100);
                    P[g] = N[g] = 3000 + Math.floor(Math.random() * (T) * 100);
                    Y[g] = Math.floor(Math.random() * 100);
                    X[g] = Math.floor(Math.random() * 100);
                    V[g] = Math.floor(Math.random() * 100)
                }
                F();
                for (var f = 0; f < I; f++)
                {
                    O.append('<div id="d' + f + '" class="fish"><span><b id="b' + f + '">' + C.chars[f] + '</b></span><span id="s' + f + '">' + C.notes[f] + "</span></div>");
                    A("#b" + f).hover(function ()
                    {
                        C.hoveroncallback(A(this).text(), A(this).attr("id").split("b")[1])
                    },
                    function ()
                    {
                        C.hoveroffcallback(A(this).text(), A(this).attr("id").split("b")[1])
                    });
                    A("#b" + f).click(function ()
                    {
                        C.clickcallback(A(this).text(), A(this).attr("id").split("b")[1])
                    })
                }
            }
            function F()
            {
                for (var f = 0; f < I; f++) {
                    d[f][0] = Math.floor(Math.random() * I);
                    d[f][1] = Math.floor(Math.random() * I);
                }
            }
            function a(j, i)
            {
                var h = ((S[j] - S[i]));
                var g = ((Q[j] - Q[i]));
                var f = ((N[j] - N[i]));
                var k = h * h + g * g + f * f;
                return k
            }
            function G()
            {
                M = setInterval(K, C.delay)
            }
            D.stop = function ()
            {
                clearInterval(M)
            };
            D.resume = function ()
            {
                M = setInterval(K, C.delay);
            };
            function K()
            {
                for (var f = 0; f < I; f++) {
                    W(f);
                    E(f)
                }
                L()
            }
            function W(h)
            {
                var l, g, f;
                for (l = 0; l < 2; l++)
                {
                    f = d[h][l];
                    for (g = 0; g < 2; g++)
                    {
                        if(a(d[f][g], h) < a(d[h][0], h)) {
                            if (d[f][g] != d[h][1]) {
                                d[h][0] = d[f][g];
                            }
                        }
                        if (a(d[f][g], h) < a(d[h][1], h)) {
                            if (d[f][g] != d[h][0]) {
                                d[h][1] = d[f][g];
                            }
                        }
                    }
                }
                for (l = 0; l < 2; l++) {
                    if (d[h][l] == h) {
                        d[h][l] = Math.floor((Math.random() * I));
                    }
                }
            }
            function E(g)
            {
                U[g] = S[g];
                R[g] = Q[g];
                P[g] = N[g];
                var f = 1;
                if (a(g, d[g][0]) < e) {
                    f =- 1
                }
                if (S[g] < S[d[g][0]]) {
                    Y[g] += C.repulsion * f
                }
                else {
                    Y[g] -= C.repulsion * f
                }
                if (Q[g] < Q[d[g][0]]) {
                    X[g] += C.repulsion * f
                }
                else {
                    X[g] -= C.repulsion * f
                }
                if (N[g] < N[d[g][0]]) {
                    V[g] += C.repulsion * f
                }
                else {
                    V[g] -= C.repulsion * f
                }
                f = 1;
                if (a(g, d[g][1]) < e) {
                    f =- 1
                }
                if (S[g] < S[d[g][1]]) {
                    Y[g] += C.repulsion * f
                }
                else {
                    Y[g] -= C.repulsion * f
                }
                if (Q[g] < Q[d[g][1]]) {
                    X[g] += C.repulsion * f
                }
                else {
                    X[g] -= C.repulsion * f
                }
                if (N[g] < N[d[g][1]]) {
                    V[g] += C.repulsion * f
                }
                else {
                    V[g] -= C.repulsion * f
                }
                if (Y[g] > C.maxspeed) {
                    Y[g] = C.maxspeed
                }
                if (Y[g] <- C.maxspeed) {
                    Y[g] =- C.maxspeed
                }
                if (X[g] > C.maxspeed) {
                    X[g] = C.maxspeed
                }
                if (X[g] <- C.maxspeed) {
                    X[g] =- C.maxspeed
                }
                if (V[g] > C.maxspeed) {
                    V[g] = C.maxspeed
                }
                if (V[g] <- C.maxspeed) {
                    V[g] =- C.maxspeed
                }
                if (S[g] < 0) {
                    Y[g] = C.turnspeed
                }
                if (S[g] > H * 100) {
                    Y[g] =- C.turnspeed
                }
                if (S[g] < H * 50) {
                    Y[g] += C.homing
                }
                if (S[g] > H * 50) {
                    Y[g] -= C.homing
                }
                if (Q[g] < 0) {
                    X[g] = C.turnspeed
                }
                if(Q[g] > Z * 100) {
                    X[g] =- C.turnspeed
                }
                if (Q[g] < Z * 50) {
                    X[g] += C.homing
                }
                if (Q[g] > Z * 50) {
                    X[g] -= C.homing
                }
                if (N[g] < 0) {
                    V[g] = C.turnspeed
                }
                if (N[g] > T * 100) {
                    V[g] =- C.turnspeed
                }
                if (N[g] < T * 50) {
                    V[g] += C.homing
                }
                if (N[g] > T * 50) {
                    V[g] -= C.homing
                }
                S[g] += Y[g];
                Q[g] += X[g];
                N[g] += V[g]
            }
            function L()
            {
                var g, m, k;
                var l = 0;
                var f = H / 2;
                var h = Z / 2;
                for (var j = 0; j < I; j++)
                {
                    k = (P[j] / 100) / (J * 1.5);
                    g = Math.round(f + ((U[j] / 100 - f) / k));
                    m = Math.round(h + ((R[j] / 100 - h) / k));
                    l = Math.round(k * 200);
                    if (l < 0) {
                        l = 0
                    }
                    if (l > 255) {
                        l = 255
                    }
                    A("#d" + j).css({
                        left : g, top : m, "z-index" : Math.round(k * 100)
                    });
                    A("#b" + j).css({
                        color : "rgb(" + 0 + ", " + Math.round(l / 2) + "," + l + ")", "font-size" : Math.round(k * 32)
                    });
                    A("#a" + j).css({
                        color : "rgb(" + l + ", " + l + "," + l + ")"
                    });
                    A("#s" + j).css({
                        color : "rgb(" + l + ", " + l + "," + l + ")", "font-size" : Math.round(k * 16)
                    })
                }
            }
            c();
            G()
        })
    }
})(jQuery);
