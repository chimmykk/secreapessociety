(this.webpackJsonpbabyapes = this.webpackJsonpbabyapes || []).push([
    [0], {
        122: function(e, a, t) {
            "use strict";
            (function(e) {
                t.d(a, "b", (function() {
                    return g
                })), t.d(a, "a", (function() {
                    return E
                })), t.d(a, "c", (function() {
                    return h
                }));
                var n = t(13),
                    r = t(0),
                    l = t.n(r),
                    s = t(4),
                    c = t(26),
                    i = t(91),
                    m = new c.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),
                    o = new c.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
                    p = new c.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),
                    x = new c.d.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
                    d = function(a, t, n, r) {
                        var l = [{
                            pubkey: t,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: a,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: n,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: c.d.SystemProgram.programId,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: x,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: c.d.SYSVAR_RENT_PUBKEY,
                            isSigner: !1,
                            isWritable: !1
                        }];
                        return new c.d.TransactionInstruction({
                            keys: l,
                            programId: o,
                            data: e.from([])
                        })
                    },
                    u = function() {
                        var a = Object(s.a)(l.a.mark((function a(t, n) {
                            return l.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, c.d.PublicKey.findProgramAddress([e.from("candy_machine"), t.toBuffer(), e.from(n)], m);
                                    case 2:
                                        return a.abrupt("return", a.sent);
                                    case 3:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })));
                        return function(e, t) {
                            return a.apply(this, arguments)
                        }
                    }(),
                    g = function() {
                        var e = Object(s.a)(l.a.mark((function e(a, t, r) {
                            var s, i, o, p, x, d, g, f, b, y, v, E;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = new c.b(r, a, {
                                            preflightCommitment: "recent"
                                        }), e.next = 3, c.a.fetchIdl(m, s);
                                    case 3:
                                        return i = e.sent, o = new c.a(i, m, s), e.next = 7, u(t, t.toString().substr(0, 6));
                                    case 7:
                                        return p = e.sent, x = Object(n.a)(p, 1), d = x[0], e.next = 12, o.account.candyMachine.fetch(d);
                                    case 12:
                                        return g = e.sent, g.itemsRedeemed.toNumber(), f = g.data.itemsAvailable.toNumber(), b = g.itemsRedeemed.toNumber(), y = f - b, v = g.data.goLiveDate.toNumber(), v = new Date(1e3 * v), E = g.wallet, e.abrupt("return", {
                                            candyMachine: {
                                                id: d,
                                                wallet: E,
                                                config: t,
                                                connection: r,
                                                program: o
                                            },
                                            itemsAvailable: f,
                                            itemsRedeemed: b,
                                            itemsRemaining: y,
                                            goLiveDate: v
                                        });
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(a, t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    f = function() {
                        var a = Object(s.a)(l.a.mark((function a(t) {
                            return l.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, c.d.PublicKey.findProgramAddress([e.from("metadata"), p.toBuffer(), t.toBuffer(), e.from("edition")], p);
                                    case 2:
                                        return a.abrupt("return", a.sent[0]);
                                    case 3:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })));
                        return function(e) {
                            return a.apply(this, arguments)
                        }
                    }(),
                    b = function() {
                        var a = Object(s.a)(l.a.mark((function a(t) {
                            return l.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, c.d.PublicKey.findProgramAddress([e.from("metadata"), p.toBuffer(), t.toBuffer()], p);
                                    case 2:
                                        return a.abrupt("return", a.sent[0]);
                                    case 3:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })));
                        return function(e) {
                            return a.apply(this, arguments)
                        }
                    }(),
                    y = function() {
                        var e = Object(s.a)(l.a.mark((function e(a, t) {
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, c.d.PublicKey.findProgramAddress([a.toBuffer(), x.toBuffer(), t.toBuffer()], o);
                                    case 2:
                                        return e.abrupt("return", e.sent[0]);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(a, t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    v = function(e) {
                        return new Promise((function(a) {
                            return setTimeout(a, e)
                        }))
                    },
                    E = function() {
                        var e = Object(s.a)(l.a.mark((function e(a, t, n) {
                            var r, c, i, m, o, p = arguments;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = p.length > 3 && void 0 !== p[3] ? p[3] : "recent", c = p.length > 4 && void 0 !== p[4] && p[4], i = !1, m = {
                                            slot: 0,
                                            confirmations: 0,
                                            err: null
                                        }, o = 0, e.next = 7, new Promise(function() {
                                            var e = Object(s.a)(l.a.mark((function e(p, x) {
                                                return l.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            setTimeout((function() {
                                                                i || (i = !0, console.log("Rejecting for timeout..."), x({
                                                                    timeout: !0
                                                                }))
                                                            }), t);
                                                            try {
                                                                o = n.onSignature(a, (function(e, a) {
                                                                    i = !0, m = {
                                                                        err: e.err,
                                                                        slot: a.slot,
                                                                        confirmations: 0
                                                                    }, e.err ? (console.log("Rejected via websocket", e.err), x(m)) : (console.log("Resolved via websocket", e), p(m))
                                                                }), r)
                                                            } catch (d) {
                                                                i = !0, console.error("WS error in setup", a, d)
                                                            }
                                                        case 2:
                                                            if (i || !c) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            return Object(s.a)(l.a.mark((function e() {
                                                                var t;
                                                                return l.a.wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.prev = 0, e.next = 3, n.getSignatureStatuses([a]);
                                                                        case 3:
                                                                            t = e.sent, m = t && t.value[0], i || (m ? m.err ? (console.log("REST error for", a, m), i = !0, x(m.err)) : m.confirmations ? (console.log("REST confirmation for", a, m), i = !0, p(m)) : console.log("REST no confirmations for", a, m) : console.log("REST null result for", a, m)), e.next = 11;
                                                                            break;
                                                                        case 8:
                                                                            e.prev = 8, e.t0 = e.catch(0), i || console.log("REST connection error: txid", a, e.t0);
                                                                        case 11:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e, null, [
                                                                    [0, 8]
                                                                ])
                                                            })))(), e.next = 6, v(2e3);
                                                        case 6:
                                                            e.next = 2;
                                                            break;
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(a, t) {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                    case 7:
                                        return m = e.sent, n._signatureSubscriptions[o] && n.removeSignatureListener(o), i = !0, console.log("Returning status", m), e.abrupt("return", m);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(a, t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    h = function() {
                        var e = Object(s.a)(l.a.mark((function e(a, t) {
                            var n, r, s, m, o, u, g, v, E, h;
                            return l.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = c.d.Keypair.generate(), e.next = 3, y(a, n.publicKey);
                                    case 3:
                                        return r = e.sent, e.next = 6, b(n.publicKey);
                                    case 6:
                                        return s = e.sent, e.next = 9, f(n.publicKey);
                                    case 9:
                                        return m = e.sent, o = t.connection, u = t.program, g = t.wallet, v = t.config, E = t.id, e.next = 13, o.getMinimumBalanceForRentExemption(i.a.span);
                                    case 13:
                                        return h = e.sent, e.next = 16, u.rpc.mintNft({
                                            accounts: {
                                                config: v,
                                                candyMachine: E,
                                                payer: a,
                                                wallet: g,
                                                mint: n.publicKey,
                                                metadata: s,
                                                masterEdition: m,
                                                mintAuthority: a,
                                                updateAuthority: a,
                                                tokenMetadataProgram: p,
                                                tokenProgram: x,
                                                systemProgram: c.d.SystemProgram.programId,
                                                rent: c.d.SYSVAR_RENT_PUBKEY,
                                                clock: c.d.SYSVAR_CLOCK_PUBKEY
                                            },
                                            signers: [n],
                                            instructions: [c.d.SystemProgram.createAccount({
                                                fromPubkey: a,
                                                newAccountPubkey: n.publicKey,
                                                space: i.a.span,
                                                lamports: h,
                                                programId: x
                                            }), i.b.createInitMintInstruction(x, n.publicKey, 0, a, a), d(r, a, a, n.publicKey), i.b.createMintToInstruction(x, n.publicKey, r, a, [], 1)]
                                        });
                                    case 16:
                                        return e.abrupt("return", e.sent);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(a, t) {
                            return e.apply(this, arguments)
                        }
                    }()
            }).call(this, t(9).Buffer)
        },
        253: function(e, a, t) {
            e.exports = t(436)
        },
        258: function(e, a, t) {},
        261: function(e, a) {},
        263: function(e, a) {},
        279: function(e, a) {},
        280: function(e, a) {},
        340: function(e, a) {},
        342: function(e, a) {},
        357: function(e, a) {},
        365: function(e, a) {},
        367: function(e, a) {},
        394: function(e, a) {},
        396: function(e, a) {},
        402: function(e, a) {},
        414: function(e, a) {},
        417: function(e, a) {},
        428: function(e, a) {},
        429: function(e, a, t) {},
        436: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(2),
                r = t.n(n),
                l = t(114),
                s = t.n(l),
                c = (t(258), t(242)),
                i = t(243),
                m = t.n(i),
                o = t(33),
                p = t(3),
                x = t(123),
                d = t(120),
                u = (t(429), t(430), t(13)),
                g = function() {
                    var e = Object(n.useState)(!1),
                        a = Object(u.a)(e, 2),
                        t = a[0],
                        l = a[1];
                    return Object(n.useEffect)((function() {
                        window.onscroll = function() {
                            window.pageYOffset >= 100 ? t || l(!0) : l(!1)
                        }
                    }), []), r.a.createElement("header", {
                        id: "hero",
                        className: "h-auto sm:h-[600px] md:h-[500px] xl:h-[900px] relative"
                    }, r.a.createElement("div", {
                        className: t ? "header fixed top-0 left-0 right-0 mb-10 sm:mb-0 z-50 transition-all bg-carrarra shadow-lg py-2" : "header fixed top-0 left-0 right-0 mb-10 sm:mb-0 z-50 transition-all py-5"
                    }, r.a.createElement("div", {
                        className: "container mx-auto px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "grid grid-cols-12 gap-5 items-center"
                    }, r.a.createElement("div", {
                        className: "col-span-12 sm:col-span-2 flex justify-center sm:block"
                    }, r.a.createElement("a", {
                        href: "#"
                    }, r.a.createElement("img", {
                        src: "assets/img/logo.png",
                        className: "w-[100px] sm:w-auto max-w-[250px] sm:max-w-[100%]",
                        alt: "Logo"
                    }))), r.a.createElement("div", {
                        className: "col-span-12 sm:col-span-7 lg:col-span-8"
                    }, r.a.createElement("ul", {
                        className: "list-none flex md:gap-20 justify-center"
                    }, r.a.createElement("li", null, r.a.createElement("a", {
                        className: "mx-5 md:mx-0 text-lg xl:text-xl hover:text-texasRose transition-colors",
                        href: "https://stake.babyapes.io/#/"
                    }, "Staking")), r.a.createElement("li", null, r.a.createElement("a", {
                        className: "mx-5 md:mx-0 text-lg xl:text-xl hover:text-texasRose transition-colors",
                        href: "#rarity"
                    }, "Rarity")), r.a.createElement("li", null, r.a.createElement("a", {
                        className: "mx-5 md:mx-0 text-lg xl:text-xl hover:text-texasRose transition-colors",
                        href: "#roadmap"
                    }, "Roadmap")), r.a.createElement("li", null, r.a.createElement("a", {
                        className: "mx-5 md:mx-0 text-lg xl:text-xl hover:text-texasRose transition-colors",
                        href: "#faq"
                    }, "FAQ")))), r.a.createElement("div", {
                        className: "col-span-12 sm:col-span-3 lg:col-span-2 flex justify-center sm:block"
                    }, r.a.createElement("div", {
                        className: "relative sm:float-right"
                    }, r.a.createElement(d.b, {
                        className: "py-3 px-5 xl:p-5 hover:opacity-50 transition-opacity block"
                    })))))), r.a.createElement("div", {
                        className: "pt-60 sm:pt-0 content flex flex-col sm:flex-1 h-full justify-center items-center text-center"
                    }, r.a.createElement("div", {
                        className: "container mx-auto px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "top-text text-lg text-texasRose"
                    }, "Collection of 5,000 BabyApes"), r.a.createElement("div", {
                        className: "title text-lg sm:text-4xl xl:text-[56px] lg:leading-tight"
                    }, "algorithmically generated, ", r.a.createElement("br", null), "cute and collectible ", r.a.createElement("br", null), "living in the Solana Blockchain. "), r.a.createElement("div", {
                        className: "buttons gap-5 xs:flex justify-center mt-8"
                    }, r.a.createElement("a", {
                        href: "https://twitter.com/BabyApesNFT",
                        className: "flex gap-2 text-white social-btn py-3 px-5 xl:p-5 min-w-[200px] sm:min-w-[260px] justify-center items-center transform hover:-translate-y-1 hover:shadow-xl transition-all mb-5 xs:mb-0"
                    }, r.a.createElement("img", {
                        src: "assets/img/social-twitter.png",
                        className: "max-w-5 max-h-5",
                        alt: ""
                    }), "Join our Twitter"), r.a.createElement("a", {
                        href: "https://discord.gg/babyapes",
                        className: "flex gap-2 text-white social-btn py-3 px-5 xl:p-5 min-w-[200px] sm:min-w-[260px] justify-center items-center transform hover:-translate-y-1 hover:shadow-xl transition-all"
                    }, r.a.createElement("img", {
                        src: "assets/img/social-discord.png",
                        className: "max-w-5 max-h-5",
                        alt: ""
                    }), "Join our Discord")))), r.a.createElement("div", {
                        className: "container mx-auto relative bottom-0 left-0 right-0 z-[-1] lg:z-auto hidden sm:flex"
                    }, r.a.createElement("img", {
                        src: "assets/img/mascot_left.png",
                        className: "absolute bottom-0 left-0 max-w-[250px] xl:max-w-[400px] max-h-[200px] xl:max-h-[320px]",
                        alt: ""
                    }), r.a.createElement("img", {
                        src: "assets/img/mascot_right.png",
                        className: "absolute bottom-0 right-0 max-w-[250px] xl:max-w-[400px] max-h-[200px] xl:max-h-[320px]",
                        alt: ""
                    })))
                },
                f = t(0),
                b = t.n(f),
                y = t(4),
                v = t(26),
                E = t(122),
                h = t(89),
                w = function() {
                    var e = Object(n.useState)(!0),
                        a = Object(u.a)(e, 2),
                        t = a[0],
                        l = a[1],
                        s = Object(n.useState)(!0),
                        c = Object(u.a)(s, 2),
                        i = c[0],
                        m = c[1],
                        x = Object(n.useState)(),
                        d = Object(u.a)(x, 2),
                        g = d[0],
                        f = d[1],
                        w = Object(n.useState)(),
                        N = Object(u.a)(w, 2),
                        B = (N[0], N[1]),
                        k = Object(o.c)().connection,
                        A = Object(o.d)(),
                        S = Object(n.useCallback)(Object(y.a)(b.a.mark((function e() {
                            var a, n;
                            return b.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (A.publicKey) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new p.k;
                                    case 4:
                                        return e.prev = 4, e.next = 7, Object(E.c)(A.publicKey, g);
                                    case 7:
                                        a = e.sent, h.b.promise(Object(E.a)(a, 25e3, k, "singleGossip", !1), {
                                            loading: "Please, wait a seconds.",
                                            success: function(e) {
                                                return (null === e || void 0 === e ? void 0 : e.err) ? r.a.createElement("b", null) : r.a.createElement(r.a.Fragment, null, "Congratulations! You got the BabyApe.")
                                            },
                                            error: function(e) {
                                                return e
                                            }
                                        }), e.next = 16;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4), n = e.t0.msg || e.t0.message, 311 === e.t0.code ? (n = "Ooops, Sold Out!.", m(!1), l(!0)) : 312 === e.t0.code && (n = "Minting period hasn't started yet."), h.b.error(n);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 11]
                            ])
                        }))), [k, A, g, t]);
                    return Object(n.useEffect)((function() {
                        (A.publicKey || A.wallet) && Object(y.a)(b.a.mark((function e() {
                            var a, t, n, r, s;
                            return b.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = {
                                            publicKey: A.publicKey,
                                            signAllTransactions: A.signAllTransactions,
                                            signTransaction: A.signTransaction
                                        }, e.next = 3, Object(E.b)(a, new v.d.PublicKey("4hghezJemiui58bG2dPaZBwcGbcJdYJNsBiZ5MCxAWSy"), k);
                                    case 3:
                                        t = e.sent, n = t.candyMachine, r = t.itemsRemaining, t.itemsAvailable, t.itemsRedeemed, s = t.goLiveDate, r ? new Date(16343172e5) > new Date ? l(!0) : l(!1) : (m(!1), l(!0)), B(s), f(n);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }), [A.publicKey, k]), Object(n.useEffect)((function() {
                        var e = setInterval((function() {
                            new Date(16343172e5) > new Date ? l(!0) : t && i && g && l(!1)
                        }), 500);
                        return function() {
                            clearInterval(e)
                        }
                    }), [t, i, g]), r.a.createElement("div", {
                        id: "sectionFour",
                        className: "relative"
                    }, r.a.createElement("div", {
                        className: "container mx-auto justify-center flex px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "flex flex-col md:flex-row gap-14 items-center"
                    }, r.a.createElement("div", {
                        className: "image-box relative w-[280px] min-w-[270px] md:max-w-[410px] lg:min-w-[400px] lg:-mt-16"
                    }, r.a.createElement("img", {
                        src: "assets/img/presale-bg.png",
                        className: "select-none w-[280px] md:w-[405px] md:h-[260px] lg:w-auto lg:h-auto",
                        alt: ""
                    }), r.a.createElement("img", {
                        src: "assets/img/babyapes.gif",
                        className: "absolute w-[205px] lg:w-[313px] left-[33px] top-[-24px]",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white absolute bottom-5 lg:bottom-9 xl:bottom-10 left-2/4 transform -translate-x-2/4"
                    }, "BabyApes")), r.a.createElement("div", {
                        className: "content text-center md:text-left mt-5 md:mt-0"
                    }, r.a.createElement("div", {
                        className: "uppercase text-3xl lg:text-6xl"
                    }, "Mint a Baby Ape"), r.a.createElement("div", {
                        className: "uppercase text-texasRose text-3xl lg:text-[40px]"
                    }, "0.69 SOL"), r.a.createElement("div", {
                        className: "text-lg"
                    }), r.a.createElement("button", {
                        className: "wallet-btn py-5 px-10 ".concat(!t || "opacity-50 cursor-not-allowed", " transition-opacity uppercase inline-block mt-5 text-xl"),
                        onClick: S
                    }, i ? "Mint Now" : "Sold Out")))))
                },
                N = t(439),
                B = t(438),
                k = function() {
                    var e = Object(n.useState)("Background"),
                        a = Object(u.a)(e, 2),
                        t = a[0],
                        l = a[1],
                        s = Object(n.useState)({
                            Background: [{
                                name: "Mint Green",
                                rarity: "12.68"
                            }, {
                                name: "Purple",
                                rarity: "13.74"
                            }, {
                                name: "Pink",
                                rarity: "13.20"
                            }, {
                                name: "Light Blue",
                                rarity: "13.56"
                            }, {
                                name: "Melon Orange",
                                rarity: "13.30"
                            }, {
                                name: "Yellow",
                                rarity: "13.88"
                            }, {
                                name: "Dark Grey",
                                rarity: "5.84"
                            }, {
                                name: "Blue",
                                rarity: "13.82"
                            }],
                            Body: [{
                                name: "Baby Ape Alien",
                                rarity: "4.19"
                            }, {
                                name: "Baby Ape Dark Brown",
                                rarity: "18.69"
                            }, {
                                name: "Baby Gorilla",
                                rarity: "18.97"
                            }, {
                                name: "Baby Ape Purple",
                                rarity: "9.51"
                            }, {
                                name: "Baby Ape",
                                rarity: "19.11"
                            }, {
                                name: "Baby Ape Fire",
                                rarity: "6.02"
                            }, {
                                name: "Baby Ape Zombie",
                                rarity: "6.60"
                            }, {
                                name: "Baby Ape Albino",
                                rarity: "5.64"
                            }, {
                                name: "Baby Ape Skeleton",
                                rarity: "1.34"
                            }, {
                                name: "Baby Ape Neon Green",
                                rarity: "8.24"
                            }, {
                                name: "Baby Ape Solana",
                                rarity: "1.68"
                            }],
                            Headwear: [{
                                name: "Front Red Cap",
                                rarity: "3.85"
                            }, {
                                name: "Neon Blue Headband",
                                rarity: "2.97"
                            }, {
                                name: "Purple White Cap",
                                rarity: "2.11"
                            }, {
                                name: "Sumbrero",
                                rarity: "3.25"
                            }, {
                                name: "Red White Cap",
                                rarity: "2.39"
                            }, {
                                name: "Sorting Blue Hat",
                                rarity: "1.46"
                            }, {
                                name: "Purple Sorcerer Hat",
                                rarity: "2.47"
                            }, {
                                name: "Straw Hat",
                                rarity: "5.42"
                            }, {
                                name: "Halo",
                                rarity: "1.54"
                            }, {
                                name: "Neon Green Headband",
                                rarity: "2.63"
                            }, {
                                name: "Toque Blanche",
                                rarity: "3.53"
                            }, {
                                name: "Backward Red Cap",
                                rarity: "3.47"
                            }, {
                                name: "Blue Bandanna",
                                rarity: "1.93"
                            }, {
                                name: "Black Detective Hat",
                                rarity: "3.35"
                            }, {
                                name: "Camo White Cap",
                                rarity: "3.51"
                            }, {
                                name: "Camo Cap",
                                rarity: "4.29"
                            }, {
                                name: "Red Headband",
                                rarity: "2.89"
                            }, {
                                name: "Black White Cap",
                                rarity: "2.27"
                            }, {
                                name: "To The Moon Black Cap",
                                rarity: "1.00"
                            }, {
                                name: "Sorting Purple Hat",
                                rarity: "1.81"
                            }, {
                                name: "Red Bandanna",
                                rarity: "2.55"
                            }, {
                                name: "Police Hat",
                                rarity: "1.44"
                            }, {
                                name: "Pilot Hat",
                                rarity: "1.66"
                            }, {
                                name: "Blue Sorcerer Hat",
                                rarity: "2.67"
                            }, {
                                name: "Neon Purple Headband",
                                rarity: "2.99"
                            }, {
                                name: "Solana White Cap",
                                rarity: "1.48"
                            }, {
                                name: "Yellow White Cap",
                                rarity: "3.85"
                            }, {
                                name: "Black Bandanna",
                                rarity: "3.17"
                            }, {
                                name: "Cowboy Hat",
                                rarity: "2.43"
                            }, {
                                name: "To The Moon Red Cap",
                                rarity: "0.96"
                            }, {
                                name: "Brown Bennie",
                                rarity: "1.97"
                            }, {
                                name: "Top Hat",
                                rarity: "3.01"
                            }, {
                                name: "Captain Sailor Hat",
                                rarity: "1.14"
                            }, {
                                name: "Watermelon",
                                rarity: "0.66"
                            }, {
                                name: "Super Ape Hair",
                                rarity: "0.44"
                            }, {
                                name: "Viking Helmet",
                                rarity: "0.82"
                            }, {
                                name: "Black Bennie",
                                rarity: "1.89"
                            }, {
                                name: "Wukong Headband",
                                rarity: "0.20"
                            }, {
                                name: "Backward Solana Cap",
                                rarity: "1.62"
                            }, {
                                name: "Super God Ape Hair",
                                rarity: "0.30"
                            }, {
                                name: "Ultra Ape Hair",
                                rarity: "0.28"
                            }, {
                                name: "Solana Ape Hair",
                                rarity: "0.30"
                            }, {
                                name: "Crown Jewel",
                                rarity: "0.06"
                            }],
                            Ear: [{
                                name: "Silver Earring",
                                rarity: "12.56"
                            }, {
                                name: "Gold Earring",
                                rarity: "6.62"
                            }],
                            Mouth: [{
                                name: "Baby Tooth",
                                rarity: "1.89"
                            }, {
                                name: "Cigarette",
                                rarity: "10.69"
                            }, {
                                name: "Cigar",
                                rarity: "10.05"
                            }, {
                                name: "Pipe",
                                rarity: "2.69"
                            }, {
                                name: "Blush",
                                rarity: "4.19"
                            }, {
                                name: "Baby Fangs",
                                rarity: "1.68"
                            }],
                            Eyes: [{
                                name: "Green Sunnies",
                                rarity: "8.86"
                            }, {
                                name: "Black Sunnies",
                                rarity: "4.67"
                            }, {
                                name: "Yellow Sunnies",
                                rarity: "10.75"
                            }, {
                                name: "3D Glasses",
                                rarity: "2.77"
                            }, {
                                name: "Purple Sunnies",
                                rarity: "6.54"
                            }, {
                                name: "Solana Sunnies",
                                rarity: "2.17"
                            }, {
                                name: "Silver Viper",
                                rarity: "1.32"
                            }, {
                                name: "Solana Viper",
                                rarity: "1.14"
                            }, {
                                name: "Laser Eyes",
                                rarity: "0.08"
                            }]
                        }),
                        c = Object(u.a)(s, 2),
                        i = c[0];
                    c[1];
                    return r.a.createElement("div", {
                        id: "sectionSix",
                        className: "relative"
                    }, r.a.createElement("div", {
                        className: "container mx-auto relative pb-40 px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "text-4xl xl:text-6xl text-center mb-6"
                    }, "Rarity"), r.a.createElement("ul", {
                        className: "list-none flex flex-col lg:flex-row sm:gap-6 justify-center tab-list mb-8"
                    }, Object.keys(i).map((function(e, a) {
                        return r.a.createElement("li", {
                            onClick: function() {
                                return l(e)
                            },
                            className: "my-3 sm:my-0 rarity-btn relative text-white h-[61px] leading-[61px] px-12 cursor-pointer transform transition-shadow hover:shadow-xl text-center sm:text-left ".concat(e == t ? "active" : "")
                        }, e)
                    }))), r.a.createElement(N.a, {
                        className: "overflow-hidden pb-5",
                        spaceBetween: 20,
                        slidesPerView: 4,
                        breakpoints: {
                            320: {
                                slidesPerView: 1
                            },
                            479: {
                                slidesPerView: 2
                            },
                            639: {
                                slidesPerView: 3
                            },
                            1023: {
                                slidesPerView: 4
                            }
                        }
                    }, i[t].map((function(e, a) {
                        return r.a.createElement(B.a, null, r.a.createElement("div", {
                            className: "item-rarity py-[17px] px-[26px] relative"
                        }, r.a.createElement("img", {
                            src: "items/".concat(t, "/").concat(e.name, ".png"),
                            className: "w-full xl:w-[234px] xl:h-[234px]",
                            alt: ""
                        }), r.a.createElement("span", {
                            className: "absolute top-8 right-0 value-bg text-white py-2 px-4"
                        }, e.rarity, "%"), r.a.createElement("div", {
                            className: "absolute bottom-[-20px] left-2/4 transform -translate-x-2/4 rarity-name py-[8px] px-5 uppercase w-[150px] xl:w-auto text-center xl:text-start"
                        }, e.name)))
                    }))), r.a.createElement("span", {
                        id: "roadmap"
                    }, "\xa0")))
                },
                A = function(e) {
                    var a = e.days,
                        t = e.hours,
                        n = e.minutes,
                        l = e.seconds;
                    return e.completed ? r.a.createElement("div", {
                        id: "countdown",
                        className: "text-3xl sm:text-6xl"
                    }, "0d : 0h : 0m : 0s") : r.a.createElement("div", {
                        id: "countdown",
                        className: "text-3xl sm:text-6xl"
                    }, a, "d : ", t, "h : ", n, "m : ", l, "s")
                };
            m.a.init();
            var S = function() {
                    var e = p.e.Mainnet,
                        a = Object(n.useMemo)((function() {
                            return [Object(x.a)(), Object(x.c)({
                                network: e
                            }), Object(x.b)()]
                        }), [e]);
                    return r.a.createElement(o.a, {
                        endpoint: "https://lokidfxnwlabdq.main.genesysgo.net:8899/"
                    }, r.a.createElement(o.b, {
                        wallets: a,
                        autoConnect: !0
                    }, r.a.createElement(d.a, null, r.a.createElement(g, null), r.a.createElement("div", {
                        id: "sectionOne",
                        className: "relative"
                    }, r.a.createElement("div", {
                        className: "container mx-auto py-[40px] md:py-[100px] px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "flex flex-col md:flex-row items-center justify-center"
                    }, r.a.createElement("div", {
                        className: "text-3xl md:text-5xl lg:text-[56px] md:leading-[60px] text-center md:text-start"
                    }, "BabyApes"), r.a.createElement("img", {
                        src: "assets/img/section-1-img.png?1",
                        className: "max-w-full",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-3xl md:text-5xl lg:text-[56px] md:leading-[60px] text-center md:text-start"
                    }, "living on ", r.a.createElement("br", null), " ", r.a.createElement("span", {
                        className: "text-texasRose"
                    }, "SOLANA"))))), r.a.createElement("div", {
                        id: "sectionTwo",
                        className: "lg:bg-carrarraHigh"
                    }, r.a.createElement("div", {
                        className: "container mx-auto md:h-[300px] relative px-5 lg:px-0"
                    }, r.a.createElement("img", {
                        src: "assets/img/section-2-img.png",
                        className: "py-10 md:py-0 md:w-full md:absolute -top-8",
                        alt: ""
                    }))), r.a.createElement("div", {
                        id: "sectionThree"
                    }, r.a.createElement("div", {
                        className: "container mx-auto py-20 lg:pt-[300px] xl:pt-[500px] lg:pb-36 flex justify-center relative px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "countdown-content text-center sm:text-left"
                    }, r.a.createElement("span", {
                        id: "minting"
                    }, "\xa0"), r.a.createElement("div", {
                        className: "text-texasRose text-lg"
                    }, "\xa0"), r.a.createElement("div", {
                        className: "countdown-text my-3 text-lg sm:text-2xl"
                    }, "Time left to minting BabyApes"), r.a.createElement(c.a, {
                        date: 16343172e5,
                        renderer: A
                    })))), r.a.createElement(w, null), r.a.createElement("div", {
                        id: "sectionFive",
                        className: "relative"
                    }, r.a.createElement("div", {
                        className: "container mx-auto py-36 relative px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "text-2xl sm:text-4xl md:text-[56px] text-center sm:leading-tight mb-8"
                    }, "Say Hello! ", r.a.createElement("br", null), " ", r.a.createElement("span", {
                        className: "text-texasRose"
                    }, "BabyApes!")), r.a.createElement("div", {
                        className: "grid grid-cols-12 gap-6 2xl:ml-56 2xl:-mr-56 mb-8"
                    }, r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-right",
                        "data-aos-offset": "100",
                        "data-aos-duration": "100"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-1.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #4566")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-right",
                        "data-aos-offset": "200",
                        "data-aos-duration": "200"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-2.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #1268")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-right",
                        "data-aos-offset": "300",
                        "data-aos-duration": "300"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-3.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #996")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-right",
                        "data-aos-offset": "400",
                        "data-aos-duration": "400"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-4.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #869")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-right",
                        "data-aos-offset": "500",
                        "data-aos-duration": "500"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-5.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #348")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-right",
                        "data-aos-offset": "600",
                        "data-aos-duration": "600"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-6.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #3405"))), r.a.createElement("div", {
                        className: "grid grid-cols-12 gap-6 2xl:mr-52 2xl:-ml-52"
                    }, r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-left",
                        "data-aos-offset": "100",
                        "data-aos-duration": "100"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-7.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #4512")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-left",
                        "data-aos-offset": "200",
                        "data-aos-duration": "200"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-8.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #1045")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-left",
                        "data-aos-offset": "300",
                        "data-aos-duration": "300"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-9.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #765")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-left",
                        "data-aos-offset": "400",
                        "data-aos-duration": "400"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-10.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #2315")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-left",
                        "data-aos-offset": "500",
                        "data-aos-duration": "500"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-11.png",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #653")), r.a.createElement("div", {
                        className: "col-span-6 sm:col-span-4 lg:col-span-2",
                        "data-aos": "fade-left",
                        "data-aos-offset": "600",
                        "data-aos-duration": "600"
                    }, r.a.createElement("img", {
                        src: "assets/img/avatars/avatar-12.jpg",
                        className: "w-full xl:h-51 object-cover",
                        alt: ""
                    }), r.a.createElement("div", {
                        className: "text-white name-box p-2 text-center mt-3"
                    }, "BabyApe #126"))), r.a.createElement("span", {
                        id: "rarity"
                    }, "\xa0"))), r.a.createElement(k, null), r.a.createElement("div", {
                        id: "sectionSeven"
                    }, r.a.createElement("div", {
                        className: "container mx-auto py-20 relative px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "text-4xl xl:text-[64px] text-center mb-8"
                    }, "Roadmap"), r.a.createElement("div", {
                        className: "grid grid-cols-12 justify-center"
                    }, r.a.createElement("div", {
                        className: "col-span-12 lg:col-span-8 lg:col-start-3 item flex gap-14"
                    }, r.a.createElement("div", {
                        className: "icon relative w-[60px] flex-shrink-0 items-center lg:flex hidden"
                    }, r.a.createElement("img", {
                        src: "assets/img/road-icon-active.png",
                        className: "w-[60px] h-[60px]",
                        alt: ""
                    })), r.a.createElement("div", {
                        className: "content pt-5 pb-8 px-12 flex-1 relative"
                    }, r.a.createElement("span", {
                        className: "text-texasRose text-2xl block"
                    }, "01"), r.a.createElement("div", {
                        className: "text-2xl text-codGray mt-1"
                    }, "Launching"), r.a.createElement("div", {
                        className: "opacity-70 text-codGray text-lg my-3"
                    }, "Minting"), r.a.createElement("div", {
                        className: "opacity-70 text-codGray text-[14px]"
                    }, "Launch 5,000 BabyApes to the community"), r.a.createElement("img", {
                        src: "assets/img/tree.png",
                        className: "absolute -top-20 -right-11 z-[-9] w-[74px] h-[146px] hidden md:block",
                        alt: ""
                    }))), r.a.createElement("div", {
                        className: "col-span-12 lg:col-span-8 lg:col-start-4 item flex gap-14 py-3"
                    }, r.a.createElement("div", {
                        className: "inside relative w-[60px] flex-shrink-0 items-center lg:flex hidden"
                    }, r.a.createElement("img", {
                        src: "assets/img/road-icon.png",
                        className: "w-[60px] h-[60px]",
                        alt: ""
                    })), r.a.createElement("div", {
                        className: "content non-active pt-5 pb-8 px-12 flex-1 relative"
                    }, r.a.createElement("span", {
                        className: "text-texasRose text-2xl block"
                    }, "02"), r.a.createElement("div", {
                        className: "text-2xl text-codGray mt-1"
                    }, "Listing on secondary markets"), r.a.createElement("div", {
                        className: "opacity-70 text-codGray text-[14px]"
                    }, "Digitaleyes, more to be confirmed later."), r.a.createElement("img", {
                        src: "assets/img/tree.png",
                        className: "absolute -bottom-5 -right-14 z-[-9] w-[100px] h-[197px] hidden md:block",
                        alt: ""
                    }))), r.a.createElement("div", {
                        className: "col-span-12 lg:col-span-8 lg:col-start-3 item flex gap-14"
                    }, r.a.createElement("div", {
                        className: "icon full relative w-[60px] flex-shrink-0 items-center hidden lg:flex"
                    }, r.a.createElement("img", {
                        src: "assets/img/road-icon.png",
                        className: "w-[60px] h-[60px]",
                        alt: ""
                    })), r.a.createElement("div", {
                        className: "content non-active pt-5 pb-8 px-12 flex-1 relative"
                    }, r.a.createElement("span", {
                        className: "text-texasRose text-2xl block"
                    }, "03"), r.a.createElement("div", {
                        className: "text-2xl text-codGray mt-1"
                    }, "Community Fund"), r.a.createElement("div", {
                        className: "opacity-70 text-codGray text-[14px]"
                    }, "25% of Creators' fee will go into the BabyApes Community Fund \ud83d\udcb0. 100% of the Community Fund's allocation will be decided by holders of BabyApes. A DAO system will be set up and a fair voting system will be introduced."), r.a.createElement("img", {
                        src: "assets/img/tree.png",
                        className: "absolute -bottom-5 -right-24 z-[-9] w-[100px] h-[197px] hidden md:block",
                        alt: ""
                    }))), r.a.createElement("div", {
                        className: "col-span-12 lg:col-span-8 lg:col-start-4 item flex gap-14 py-3"
                    }, r.a.createElement("div", {
                        className: "inside relative w-[60px] flex-shrink-0 items-center hidden lg:flex"
                    }, r.a.createElement("img", {
                        src: "assets/img/road-icon.png",
                        className: "w-[60px] h-[60px]",
                        alt: ""
                    })), r.a.createElement("div", {
                        className: "content non-active pt-5 pb-8 px-12 flex-1"
                    }, r.a.createElement("span", {
                        className: "text-texasRose text-2xl block"
                    }, "04"), r.a.createElement("div", {
                        className: "text-2xl text-codGray mt-1"
                    }, "Launch Clothing Line"), r.a.createElement("div", {
                        className: "opacity-70 text-codGray text-[14px]"
                    }, "BabyApes Clothing line. A proportion of the initial sales will go into the following investments:", r.a.createElement("br", null), "# Product development for the BabyApes clothing line", r.a.createElement("br", null), "# BabyApes clothing line will go on sale on the website", r.a.createElement("br", null), "# Physical pop-up stores for clothing line launched in cities around the world, we will start in Asia and expand globally", r.a.createElement("br", null), "# BabyApes mass marketing in popular cities, start in Asia and expand globally. Advertisement at art galleries, popular venues, zoos, BabyApes Graffiti around famous hip areas in the city", r.a.createElement("br", null), "# Collaboration with popular household premium brands (phone cases - like Casetify) and move towards luxury brands in the future (e.g. Gucci)", r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("b", null, "The long-term objective is to turn BabyApes into a multinational recognised brand similar to Supreme. The roadmap is aggressive, we know. At BabyApes, we are aiming for Mars, not the moon ** "), r.a.createElement("br", null), r.a.createElement("br", null), "Hypothetically, owning BabyApes now, might just mean one day you're an early investor in a unicorn startup."))), r.a.createElement("div", {
                        className: "col-span-12 lg:col-span-8 lg:col-start-3 item flex gap-14"
                    }, r.a.createElement("div", {
                        className: "icon full relative w-[60px] flex-shrink-0 items-center hidden lg:flex"
                    }, r.a.createElement("img", {
                        src: "assets/img/road-icon.png",
                        className: "w-[60px] h-[60px]",
                        alt: ""
                    })), r.a.createElement("div", {
                        className: "content non-active pt-5 pb-8 px-12 flex-1 relative"
                    }, r.a.createElement("span", {
                        className: "text-texasRose text-2xl block"
                    }, "05"), r.a.createElement("div", {
                        className: "text-2xl text-codGray mt-1"
                    }, "Future Projects"), r.a.createElement("div", {
                        className: "opacity-70 text-codGray text-[14px]"
                    }, "Collaborations, New Collection, Airdrops. The future is very exciting, lets make BabyApes into the next BlueChip NFT! ", r.a.createElement("b", null, "BabyApes Together Strong!")), r.a.createElement("img", {
                        src: "assets/img/tree.png",
                        className: "absolute -bottom-5 -right-24 z-[-9] w-[100px] h-[197px] hidden md:block",
                        alt: ""
                    })))), r.a.createElement("span", {
                        id: "faq"
                    }, "\xa0"))), r.a.createElement("div", {
                        id: "sectionEight",
                        className: "bg-carrarraHigh"
                    }, r.a.createElement("div", {
                        className: "container mx-auto py-20 px-5 lg:px-0"
                    }, r.a.createElement("div", {
                        className: "text-4xl xl:text-[64px] text-center mb-8"
                    }, "FAQ"), r.a.createElement("div", {
                        className: "grid grid-cols-12 gap-5"
                    }, r.a.createElement("div", {
                        className: "col-span-12 md:col-span-6"
                    }, r.a.createElement("div", {
                        className: "faq-item p-5 pb-10"
                    }, r.a.createElement("div", {
                        className: "faq-title text-white inline-block py-4 px-10 mb-4"
                    }, "What is the total BabyApes supply?"), r.a.createElement("div", {
                        className: "text-codGray"
                    }, "The total supply of BabyApes is 5,000."))), r.a.createElement("div", {
                        className: "col-span-12 md:col-span-6"
                    }, r.a.createElement("div", {
                        className: "faq-item p-5 pb-10"
                    }, r.a.createElement("div", {
                        className: "faq-title text-white inline-block py-4 px-10 mb-4"
                    }, "When?"), r.a.createElement("div", {
                        className: "text-codGray"
                    }, "BabyApes minting will begin on 15/10/2021 at 5PM UTC."))), r.a.createElement("div", {
                        className: "col-span-12 md:col-span-6"
                    }, r.a.createElement("div", {
                        className: "faq-item p-5 pb-10"
                    }, r.a.createElement("div", {
                        className: "faq-title text-white inline-block py-4 px-10 mb-4"
                    }, "What is the minting cost?"), r.a.createElement("div", {
                        className: "text-codGray"
                    }, "Each BabyApes will cost 0.69 SOL to mint."))), r.a.createElement("div", {
                        className: "col-span-12 md:col-span-6"
                    }, r.a.createElement("div", {
                        className: "faq-item p-5 pb-10"
                    }, r.a.createElement("div", {
                        className: "faq-title text-white inline-block py-4 px-10 mb-4"
                    }, "What Solana wallets can I use?"), r.a.createElement("div", {
                        className: "text-codGray"
                    }, "You will be able to use four of Solana\u2019s main wallets Phantom, Sollet and Solflare."))), r.a.createElement("div", {
                        className: "col-span-12 md:col-span-6 md:col-start-4"
                    }, r.a.createElement("div", {
                        className: "faq-item p-5 pb-10"
                    }, r.a.createElement("div", {
                        className: "faq-title text-white inline-block py-4 px-10 mb-4"
                    }, "Where can I buy or sell my BabyApes?"), r.a.createElement("div", {
                        className: "text-codGray"
                    }, "After mint, it will be on DigitalEyes.")))))), r.a.createElement("footer", {
                        id: "footer",
                        className: "bg-emperor"
                    }, r.a.createElement("div", {
                        className: "container mx-auto py-5 flex flex-col md:flex-row justify-between items-center px-5 lg:px-0"
                    }, r.a.createElement("ul", {
                        className: "list-none flex sm:gap-5 md:gap-16"
                    }, r.a.createElement("li", null, r.a.createElement("a", {
                        href: "#minting",
                        className: "mx-3 sm:mx-0 text-white text-lg opacity-90 hover:opacity-100 transition-opacity"
                    }, "Presale")), r.a.createElement("li", null, r.a.createElement("a", {
                        href: "#rarity",
                        className: "mx-3 sm:mx-0 text-white text-lg opacity-90 hover:opacity-100 transition-opacity"
                    }, "Rarity")), r.a.createElement("li", null, r.a.createElement("a", {
                        href: "#roadmap",
                        className: "mx-3 sm:mx-0 text-white text-lg opacity-90 hover:opacity-100 transition-opacity"
                    }, "Roadmap")), r.a.createElement("li", null, r.a.createElement("a", {
                        href: "#faq",
                        className: "mx-3 sm:mx-0 text-white text-lg opacity-90 hover:opacity-100 transition-opacity"
                    }, "FAQ"))), r.a.createElement("ul", {
                        className: "list-none flex sm:gap-5 mt-5 md:mt-0"
                    }, r.a.createElement("li", null, r.a.createElement("a", {
                        href: "#",
                        className: "mx-3 sm:mx-0 opacity-90 hover:opacity-100 transition-opacity block"
                    }, r.a.createElement("img", {
                        src: "assets/img/social-twitter.png",
                        alt: ""
                    }))), r.a.createElement("li", null, r.a.createElement("a", {
                        href: "#",
                        className: "mx-3 sm:mx-0 opacity-90 hover:opacity-100 transition-opacity block"
                    }, r.a.createElement("img", {
                        src: "assets/img/social-discord.png",
                        alt: ""
                    }))))))), r.a.createElement(h.a, {
                        position: "bottom-left",
                        reverseOrder: !1
                    })))
                },
                j = function(e) {
                    e && e instanceof Function && t.e(3).then(t.bind(null, 440)).then((function(a) {
                        var t = a.getCLS,
                            n = a.getFID,
                            r = a.getFCP,
                            l = a.getLCP,
                            s = a.getTTFB;
                        t(e), n(e), r(e), l(e), s(e)
                    }))
                };
            s.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(S, null)), document.getElementById("root")), j()
        }
    },
    [
        [253, 1, 2]
    ]
]);
//# sourceMappingURL=main.31c8e21f.chunk.js.map