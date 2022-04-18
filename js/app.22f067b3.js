(function () {
    var e = {
            7768: function (e, t, n) {
                "use strict";
                var r = n(9242),
                    i = n(3396);
                const o = { id: "main" };
                function a(e, t, n, r, a, s) {
                    const u = (0, i.up)("LoadingScreen"),
                        c = (0, i.up)("ButtonGroup");
                    return (0, i.wg)(), (0, i.iD)("div", o, [(0, i.Wm)(u), (0, i.Wm)(c)]);
                }
                var s = n(7139);
                const u = (e) => ((0, i.dD)("data-v-105d108c"), (e = e()), (0, i.Cn)(), e),
                    c = { class: "button-group" },
                    l = u(() => (0, i._)("i", { class: "fa-solid fa-info" }, null, -1)),
                    d = [l],
                    f = ["index"],
                    h = { class: "arrow-buttons" },
                    m = ["index", "onClick"],
                    p = u(() => (0, i._)("i", { class: "fa-solid fa-chevron-left" }, null, -1)),
                    v = [p],
                    g = ["index", "onClick"],
                    y = u(() => (0, i._)("i", { class: "fa-solid fa-chevron-right" }, null, -1)),
                    _ = [y],
                    w = ["index", "onClick"],
                    b = { class: "button-group-category" },
                    S = ["index", "onClick"];
                function E(e, t, n, o, a, u) {
                    const l = (0, i.up)("Modal"),
                        p = (0, i.up)("LoadingSpinner");
                    return (
                        (0, i.wg)(),
                        (0, i.iD)(
                            i.HY,
                            null,
                            [
                                (0, i.Wm)(l),
                                (0, i.wy)(
                                    (0, i._)(
                                        "div",
                                        c,
                                        [
                                            (0, i.wy)((0, i._)("button", { class: "modal-button", onClick: t[0] || (t[0] = (t) => (e.store.isModalVisible = !0)) }, d, 512), [[r.F8, null != e.store.selectedElement]]),
                                            ((0, i.wg)(!0),
                                            (0, i.iD)(
                                                i.HY,
                                                null,
                                                (0, i.Ko)(e.jsonData, (t, n) =>
                                                    (0, i.wy)(
                                                        ((0, i.wg)(),
                                                        (0, i.iD)(
                                                            "div",
                                                            { class: "button-group-element", id: "scroll-group", key: t, index: n },
                                                            [
                                                                (0, i._)("div", h, [
                                                                    (0, i._)("button", { id: "arrow-left", class: "arrow", index: e.store.selectedCategoryIndex, onClick: (e) => u.scrollLeft(n) }, v, 8, m),
                                                                    (0, i._)("button", { id: "arrow-right", class: "arrow", index: e.store.selectedCategoryIndex, onClick: (e) => u.scrollRight(n) }, _, 8, g),
                                                                ]),
                                                                ((0, i.wg)(!0),
                                                                (0, i.iD)(
                                                                    i.HY,
                                                                    null,
                                                                    (0, i.Ko)(
                                                                        t.elements,
                                                                        (t, n) => (
                                                                            (0, i.wg)(),
                                                                            (0, i.iD)(
                                                                                "button",
                                                                                { class: (0, s.C_)(["hud-button", { active: n === e.store.selectedElementIndex }]), key: t, index: n, onClick: (e) => u.showObject(t.element_name, t, n) },
                                                                                (0, s.zw)(t.display_name),
                                                                                11,
                                                                                w
                                                                            )
                                                                        )
                                                                    ),
                                                                    128
                                                                )),
                                                            ],
                                                            8,
                                                            f
                                                        )),
                                                        [[r.F8, t.category_name === e.store.selectedCategory && !0 === e.store.isCategoryLoaded]]
                                                    )
                                                ),
                                                128
                                            )),
                                            (0, i.Wm)(p),
                                            (0, i._)("div", b, [
                                                ((0, i.wg)(!0),
                                                (0, i.iD)(
                                                    i.HY,
                                                    null,
                                                    (0, i.Ko)(
                                                        e.jsonData,
                                                        (t, n) => (
                                                            (0, i.wg)(),
                                                            (0, i.iD)(
                                                                "button",
                                                                { class: (0, s.C_)(["hud-button", { active: n === e.store.selectedCategoryIndex }]), key: t, index: n, onClick: (e) => u.setSelectedCategory(t.category_name, n) },
                                                                (0, s.zw)(t.category_name),
                                                                11,
                                                                S
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ]),
                                        ],
                                        512
                                    ),
                                    [[r.F8, e.store.isAnimationEnded]]
                                ),
                            ],
                            64
                        )
                    );
                }
                const M = (e) => ((0, i.dD)("data-v-80b6cf6e"), (e = e()), (0, i.Cn)(), e),
                    k = { class: "loadingio-spinner-pulse-diabfbay7a8" },
                    P = M(() => (0, i._)("div", { class: "ldio-38sm65atd6d" }, [(0, i._)("div"), (0, i._)("div"), (0, i._)("div")], -1)),
                    x = [P];
                function F(e, t, n, o, a, s) {
                    return (0, i.wy)(((0, i.wg)(), (0, i.iD)("div", k, x, 512)), [[r.F8, !1 === e.store.isCategoryLoaded]]);
                }
                var A = n(3766),
                    O = JSON.parse(
                        `[
                            {
                                "category_name": "Food",
                                "category_announcer": "./announcers/food-draco.glb",
                                "elements": [
                                    { 
                                        "element_name": "mini_burgers", 
                                        "display_name": "Mini Burgers", 
                                        "element_description": "Tris mini burgers: vegetable, chicken and beef", "model_path": "./food/burgers-draco.glb", 
                                        "order_link": null 
                                    },
                                    { 
                                        "element_name": "burrata", 
                                        "display_name": "Burrata", 
                                        "element_description": "Burratina 60g with rocket salad, datterino tomatoes and basil drops", 
                                        "model_path": "./food/burrata-draco.glb", 
                                        "order_link": null 
                                    },
                                    { 
                                        "element_name": "calamari", 
                                        "display_name": "Fried Squid", 
                                        "element_description": "Fried squid with mayo", 
                                        "model_path": "./food/calamari-draco.glb", 
                                        "order_link": null 
                                    },
                                    { 
                                        "element_name": "cheesecake", 
                                        "display_name": "Cheesecake", 
                                        "element_description": "Traditional cheesecake with caramel, fresh mint and strawberries", 
                                        "model_path": "./food/cheesecake-draco.glb", 
                                        "order_link": null 
                                    },
                                    { 
                                        "element_name": "chicken_fingers", 
                                        "display_name": "Chicken Fingers", 
                                        "element_description": "Fried chicken with garlic mayo", 
                                        "model_path": "./food/fingers-draco.glb", 
                                        "order_link": null 
                                    },
                                    { 
                                        "element_name": "dynamite_shrimps", 
                                        "display_name": "Dynamite Shrimps", 
                                        "element_description": "Fried shrimps with green salad", 
                                        "model_path": "./food/gambas-draco.glb",
                                         "order_link": null },
                                    {
                                        "element_name": "pizza_margheritta",
                                        "display_name": "Pizza Margheritta",
                                        "element_description": "Tomato, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil",
                                        "model_path": "./food/pizza-draco.glb",
                                        "order_link": null
                                    },
                                    {
                                        "element_name": "pizza_margheritta",
                                        "display_name": "burh",
                                        "element_description": "Tomato, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil",
                                        "model_path": "./food/pizza-draco.glb",
                                        "order_link": null
                                    }
                                ]
                            },
                            {
                                "category_name": "Cocktails",
                                "category_announcer": "./announcers/cocktails-draco.glb",
                                "elements": [
                                    { 
                                        "element_name": "re_presidente", 
                                        "display_name": "Re-presidente", 
                                        "element_description": "45ml Tequila 25ml Punemes  10ml Vermouth", 
                                        "model_path": "./cocktails/albahaca-draco.glb", 
                                        "order_link": null 
                                    },
                                    { 
                                        "element_name": "digestivo", 
                                        "display_name": "Digestivo", 
                                        "element_description": "50ml Amaro 20ml Kahlua 40m fresh coffee", 
                                        "model_path": "./cocktails/cafe-draco.glb", 
                                        "order_link": null 
                                    },
                                    { 
                                        "element_name": "whiskey_sour", 
                                        "display_name": "Whiskey Sour", 
                                        "element_description": "50ml Whiskey 15ml Sugar 15ml egg white 30ml lemon juice", 
                                        "model_path": "./cocktails/cherry-draco.glb", 
                                        "order_link": null },
                                    {
                                        "element_name": "italian_job",
                                        "display_name": "Italian Job",
                                        "element_description": "30ml White rum 30ml Gin 70ml pineapple juice 25ml egg white 5pcs fresh cherries",
                                        "model_path": "./cocktails/cucumber-draco.glb",
                                        "order_link": null
                                    },
                                    {
                                        "element_name": "metaterrace_club",
                                        "display_name": "Metaterrace Club",
                                        "element_description": "45ml Gin 25ml Lemon juice 30ML Italicus 30ml egg white 10ml Sugar syrup 5pcs fresh raspberries",
                                        "model_path": "./cocktails/frambuesa-draco.glb",
                                        "order_link": null
                                    },
                                    { 
                                        "element_name": "negroni", 
                                        "display_name": "Negroni", 
                                        "element_description": "30ml Campari 30ml Gin 30ml Vermouth Orange slice", 
                                        "model_path": "./cocktails/negroni-draco.glb", 
                                        "order_link": null 
                                    }
                                ]
                            },
                            {
                                "category_name": "NFTs",
                                "category_announcer": "./announcers/nfts-draco.glb",
                                "elements": [
                                    { 
                                        "element_name": "metaterrace", 
                                        "display_name": "Metaterrace", 
                                        "element_description": "Metaterrace NFT", 
                                        "model_path": "./nfts/cromo-draco.glb", 
                                        "order_link": null 
                                    },
                                    { 
                                        "element_name": "gold_pass", 
                                        "display_name": "Gold Pass", 
                                        "element_description": "Kaloscope's Gold Pass", 
                                        "model_path": "./nfts/gold_ticket-draco.glb", 
                                        "order_link": "https://opensea.io/collection/gold-pass" 
                                    },
                                    { 
                                        "element_name": "diamond_pass", 
                                        "display_name": "Diamond Pass", 
                                        "element_description": "Kaloscope's Diamond Pas", 
                                        "model_path": "./nfts/rainbow_ticket-draco.glb", 
                                        "order_link": "https://opensea.io/collection/diamond-pass" }
                                ]
                            },
                            { 
                                "category_name": "Metaverse", 
                                "category_announcer": "./announcers/metaverse-draco.glb", 
                                "elements": [] }
                        ]
                        `
                    ),
                    L = n(1114),
                    D = n(3018),
                    R = n.n(D),
                    C = n(4198),
                    T = n(1989),
                    j = n(2236),
                    z = n(8552),
                    B = n(6931),
                    I = n(2984),
                    N = n.n(I);
                let X,
                    W,
                    H,
                    U,
                    q,
                    K,
                    Y,
                    V = new L.xsS();
                var G = new (N())();
                G.showPanel(0), document.body.appendChild(G.dom);
                const Z = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcwOTAsInByb2plY3RJZCI6MjI5NTQsInJvbGUiOjMsImlhdCI6MTY0NDUxMTUwN30.ivSPFWm0EsMxa9Hiko83Fvm_NBi8k4gVD86Fsx-i76A",
                    Q = document.getElementById("video");
                Q.src = "./video/base.mp4";
                const J = new L.fO1(Q);
                J.flipY = !1;
                const $ = new T._();
                $.setDecoderPath("./draco/gltf/"), $.setDecoderConfig({ type: "wasm" });
                const ee = new L.lLk(),
                    te = new C.E(ee);
                te.setDRACOLoader($),
                    (ee.onStart = function (e, t, n) {
                        (U = ke()), console.log("Started loading file: " + e + ".\nLoaded " + t + " of " + n + " files."), (U.isCategoryLoaded = !1);
                    }),
                    (ee.onLoad = function () {
                        (U = ke()), (U.isCategoryLoaded = !0), console.log("Loading complete!");
                    }),
                    (ee.onProgress = function (e, t, n) {
                        console.log("Loading file: " + e + ".\nLoaded " + t + " of " + n + " files.");
                    }),
                    (ee.onError = function (e) {
                        console.log("There was an error loading " + e);
                    });
                let ne = [],
                    re = [];
                const ie = ["./misc/base.glb", "./misc/base_video.glb", "./misc/logo.glb"];
                function oe() {
                    Q.load(),
                        ie.forEach((e) => {
                            te.load(e, (t) => {
                                (t.scene.name = e.split("/")[e.split("/").length - 1].split(".")[0]),
                                    t.scene.scale.set(5, 5, 5),
                                    t.scene.traverse((e) => {
                                        e.name && "Video" === e.name && (e.material.map = J), e.name && "Occluder" === e.name && (e.material.colorWrite = !1);
                                    }),
                                    "base" === t.scene.name && ((K = new L.Xcj(t.scene)), (Y = K.clipAction(t.animations[0])), (Y.clampWhenFinished = !0), (Y.loop = L.jAl)),
                                    (t.scene.visible = !1),
                                    V.add(t.scene);
                            });
                        });
                }
                function ae() {
                    (H = new j.x(ee).load("./misc/texture.hdr", function () {
                        H.mapping = L.dSO;
                    })),
                        (V.environment = H);
                }
                const se = new L.EJi({ transmission: 1, opacity: 1, metalness: 0.3, roughness: 0.1, ior: 1.5, color: 16777215, envMap: V.environment, envMapIntensity: 1, side: L.ehD, depthWrite: !1, transparent: !0 }),
                    ue = new L.EJi({ transmission: 0.47, opacity: 0.95, metalness: 0.7, roughness: 0.26, ior: 1.3, color: 16777215, envMap: V.environment, envMapIntensity: 1, side: L.ehD, depthWrite: !1, transparent: !0 });
                function ce() {
                    const e = V.getObjectByName("logo");
                    (e.position.y = -5),
                        e.scale.set(0, 0, 0),
                        (V.getObjectByName("base_video").visible = !0),
                        setTimeout(() => {
                            Q.play();
                        }, 1e3),
                        setTimeout(() => {
                            V.getObjectByName("base_video").visible = !1;
                        }, 6500),
                        setTimeout(() => {
                            Y.play(), (V.getObjectByName("base").visible = !0);
                        }, 6500),
                        setTimeout(() => {
                            e.visible = !0;
                            const t = z.ZP.timeline();
                            t.to(e.position, { y: 0, duration: 0.2 }), t.to(e.scale, { x: 2, y: 2, z: 2, duration: 0.3 });
                        }, 7500),
                        setTimeout(() => {
                            U.isAnimationEnded = !0;
                        }, 8e3);
                }
                function le(e) {
                    e.forEach((e) => {
                        te.load(e, (t) => {
                            (t.scene.name = e.split("/")[e.split("/").length - 1].split("-")[0] + "_announcer"), (t.scene.visible = !1), t.scene.scale.set(1.5, 1.5, 1.5), V.add(t.scene);
                        });
                    });
                }
                function de(e) {
                    V.remove(...ne),
                        (re = []),
                        e.forEach((e) => {
                            re.push(e.element_name),
                                te.load(e.model_path, (t) => {
                                    (t.scene.name = e.element_name), (t.scene.visible = !1), t.scene.scale.set(0, 0, 0), t.scene.position.set(0, -1, 0);
                                    const n = t.scene.children.find((e) => "glass" === e.name),
                                        r = t.scene.children.find((e) => "ice" === e.name);
                                    n && (n.material = se), r && (r.material = ue), V.add(t.scene), ne.push(t.scene);
                                });
                        });
                }
                let fe;
                function he(e) {
                    const t = z.ZP.timeline();
                    t.to(e.scale, { x: 0, y: 0, z: 0, duration: 0.2 }), t.to(e.position, { y: -0.7, duration: 0.2 });
                }
                function me(e) {
                    const t = z.ZP.timeline();
                    t.to(e.scale, { x: 1, y: 1, z: 1, duration: 0.2 }), t.to(e.position, { y: 0.3, duration: 0.2 }), q.enableHorizontalRotation(), q.setObjectToMove(e);
                }
                function pe(e) {
                    console.log(e),
                        fe
                            ? ((V.getObjectByName(e).visible = !0), he(fe), me(V.getObjectByName(e)), (fe = V.getObjectByName(e)))
                            : (console.log(e), (V.getObjectByName("logo").visible = !1), me(V.getObjectByName(e)), (V.getObjectByName(e).visible = !0), (fe = V.getObjectByName(e))),
                        console.log(V);
                }
                function ve(e) {
                    const t = e.width,
                        n = e.height;
                    (W = new L.CP7({ canvas: e, alpha: !0, antialias: !0, powerPreference: "high-performance" })), W.setClearColor(0, 0), W.setSize(t, n), W.setPixelRatio(window.devicePixelRatio >= 2 ? 2 : 1);
                    const r = Se.getCameraParameters();
                    (X = new L.cPb(r.fov, r.aspect, 0.1, 1e3)), (X.matrixAutoUpdate = !1);
                    const i = new L.Mig(13421772, 0.4);
                    V.add(i);
                    const o = new L.vmT(12303359, 4473890);
                    V.add(o);
                }
                function ge(e) {
                    let t = new L.yGw();
                    (t = t.fromArray(e)), (X.matrix = t), (X.matrixWorldNeedsUpdate = !0);
                }
                function ye() {
                    const e = W.domElement.width,
                        t = W.domElement.height,
                        n = Se.getCameraParameters();
                    (X.fov = n.fov), (X.aspect = n.aspect), X.updateProjectionMatrix(), W.setSize(e, t);
                }
                function _e() {
                    W.render(V, X);
                }
                const we = new L.SUY();
                function be() {
                    const e = we.getDelta();
                    G.begin(), K.update(e), _e(), requestAnimationFrame(() => be()), G.end();
                }
                let Se = new (R())(Z),
                    Ee = { mode: R().TrackingMode.Image };
                function Me() {
                    (U = ke()),
                        Se.init(Ee)
                            .then((e) => {
                                ve(e),
                                    (q = new B.y(X, e, V)),
                                    q.disableHorizontalRotation(),
                                    be(),
                                    Se.subscribe(R().Events.OnDetected, function (e) {
                                        console.log("Detected Image: " + e),
                                            !0 === U.isLoadingScreen ? ((V.visible = !0), (U.canStart = !0), (V.getObjectByName("base_video").visible = !0)) : (V.visible = !0),
                                            (V.background = new L.fO1(Se.getCameraFeed()));
                                    }),
                                    Se.subscribe(R().Events.OnPose, function (e) {
                                        ge(e);
                                    }),
                                    Se.subscribe(R().Events.OnLost, function (e) {
                                        !0 === U.isLoadingScreen
                                            ? ((V.visible = !1), (U.isTracked = !1), (U.canStart = !1), (V.getObjectByName("base_video").visible = !0), (V.background = null))
                                            : ((V.visible = !1), (U.isTracked = !1), (V.background = null));
                                    }),
                                    Se.subscribe(R().Events.OnResize, function () {
                                        ye();
                                    });
                            })
                            .catch((e) => {
                                switch (e.name) {
                                    case "INTERNAL_ERROR":
                                        console.log("internal error");
                                        break;
                                    case "CAMERA_ERROR":
                                        console.log("camera error");
                                        break;
                                    case "SENSORS_ERROR":
                                        console.log("sensor error");
                                        break;
                                    case "LICENSE_ERROR":
                                        console.log("license error");
                                        break;
                                }
                            });
                }
                const ke = (0, A.Q_)("mainStore", {
                    state: () => ({
                        selectedCategory: null,
                        selectedCategoryIndex: null,
                        selectedElement: null,
                        selectedElementIndex: null,
                        selectedElementName: null,
                        selectedElementDescription: null,
                        selectedElementUrl: null,
                        currentModelName: "logo",
                        previousModelName: null,
                        categoryElements: [],
                        categoryElementPaths: [],
                        isCategoryLoaded: !1,
                        isTracked: !1,
                        isModalVisible: !1,
                        isAnimationEnded: !1,
                        isLoadingScreen: !0,
                        canStart: !1,
                    }),
                    actions: {
                        setCategory(e = "", t = null) {
                            (this.categoryElementPaths = []),
                                (this.selectedCategory = e),
                                (this.selectedCategoryIndex = t),
                                (this.categoryElements = O[this.selectedCategoryIndex].elements),
                                this.categoryElements.forEach((e) => {
                                    this.categoryElementPaths.unshift(e.model_path);
                                }),
                                de(this.categoryElements);
                        },
                        setElement(e = "", t = "") {
                            (this.selectedElement = e),
                                (this.selectedElementIndex = t),
                                (this.selectedElementName = null != this.selectedElement ? this.selectedElement.display_name : "null"),
                                (this.selectedElementDescription = null != this.selectedElement ? this.selectedElement.element_description : "null"),
                                (this.selectedElementUrl = null != this.selectedElement ? this.selectedElement.order_link : "null");
                        },
                        setModel(e = "", t = "") {
                            (this.previousModelName = t), (this.currentModelName = e), this.currentModelName === this.previousModelName ? (this.currentModelName = e) : console.log("a");
                        },
                    },
                    getters: { showSelectedCategory: (e) => e.selectedCategory, showSelectedElement: (e) => e.selectedElement },
                });
                let Pe;
                var xe = {
                        name: "LoadingSpinner",
                        setup() {
                            Pe = ke();
                        },
                        data: () => ({ store: Pe }),
                    },
                    Fe = n(89);
                const Ae = (0, Fe.Z)(xe, [
                    ["render", F],
                    ["__scopeId", "data-v-80b6cf6e"],
                ]);
                var Oe = Ae;
                const Le = { class: "modal-window" },
                    De = ["href"];
                function Re(e, t, n, o, a, u) {
                    return (0, i.wy)(
                        ((0, i.wg)(),
                        (0, i.iD)(
                            "div",
                            Le,
                            [
                                (0, i._)("h1", null, (0, s.zw)(e.store.selectedElementName), 1),
                                (0, i._)("p", null, (0, s.zw)(e.store.selectedElementDescription), 1),
                                (0, i.wy)((0, i._)("a", { class: "order_link", href: e.store.selectedElementUrl, target: "_blank" }, "I Want this!", 8, De), [[r.F8, null != e.store.selectedElementUrl]]),
                                (0, i._)("button", { onClick: t[0] || (t[0] = (t) => (e.store.isModalVisible = !1)) }, "Close"),
                            ],
                            512
                        )),
                        [[r.F8, e.store.isModalVisible]]
                    );
                }
                let Ce;
                var Te = {
                    name: "Modal",
                    setup() {
                        Ce = ke();
                    },
                    data: () => ({ store: Ce, currentElement: Ce.selectedElement }),
                };
                const je = (0, Fe.Z)(Te, [
                    ["render", Re],
                    ["__scopeId", "data-v-a2fc05ac"],
                ]);
                var ze = je;
                let Be;
                var Ie = {
                    name: "ButtonGroup",
                    components: { LoadingSpinner: Oe, Modal: ze },
                    setup() {
                        Be = ke();
                    },
                    data: () => ({ jsonData: O, store: Be }),
                    methods: {
                        setSelectedCategory: function (e, t) {
                            Be.setCategory(e, t), Be.setElement(null, null), pe(e.toLowerCase() + "_announcer");
                        },
                        setSelectedElement: function (e, t) {
                            Be.setElement(e, t);
                        },
                        showObject: function (e, t, n) {
                            pe(e), Be.setElement(t, n);
                        },
                        scrollLeft: function (e) {
                            document.getElementsByClassName("button-group-element")[e].scrollLeft -= 180;
                        },
                        scrollRight: function (e) {
                            document.getElementsByClassName("button-group-element")[e].scrollLeft += 180;
                        },
                    },
                };
                const Ne = (0, Fe.Z)(Ie, [
                    ["render", E],
                    ["__scopeId", "data-v-105d108c"],
                ]);
                var Xe = Ne;
                const We = (e) => ((0, i.dD)("data-v-a8d9b870"), (e = e()), (0, i.Cn)(), e),
                    He = { class: "steps" },
                    Ue = { class: "step" },
                    qe = We(() => (0, i._)("h1", { class: "title" }, "Welcome", -1)),
                    Ke = We(() => (0, i._)("img", { src: "/img/first_step.png", alt: "First step" }, null, -1)),
                    Ye = We(() => (0, i._)("p", { class: "text" }, "Use your phone in vertical position and press the buttons to interact with the virtual menu of Metaterrace", -1)),
                    Ve = [qe, Ke, Ye],
                    Ge = { class: "step" },
                    Ze = We(() => (0, i._)("h1", { class: "title" }, "Fit & Place", -1)),
                    Qe = We(() => (0, i._)("img", { src: "/img/second_step.png", alt: "Second step" }, null, -1)),
                    Je = We(() => (0, i._)("p", { class: "text" }, "Begin the experience following these steps, remember that a correct view sitting is recommended", -1)),
                    $e = [Ze, Qe, Je],
                    et = { class: "step" },
                    tt = We(() => (0, i._)("h1", { class: "title" }, "Sound", -1)),
                    nt = We(() => (0, i._)("img", { src: "/img/third_step.png", alt: "Third step" }, null, -1)),
                    rt = We(() => (0, i._)("p", { class: "text" }, "Turn up the volume or use headphones for a better experience", -1)),
                    it = [tt, nt, rt],
                    ot = { class: "pagination" },
                    at = We(() => (0, i._)("i", { class: "fa-solid fa-chevron-left" }, null, -1)),
                    st = [at],
                    ut = We(() => (0, i._)("i", { class: "fa-solid fa-chevron-right" }, null, -1)),
                    ct = [ut],
                    lt = { class: "dots" },
                    dt = We(() => (0, i._)("i", { class: "fa-solid fa-circle" }, null, -1)),
                    ft = [dt],
                    ht = We(() => (0, i._)("i", { class: "fa-solid fa-circle" }, null, -1)),
                    mt = [ht],
                    pt = We(() => (0, i._)("i", { class: "fa-solid fa-circle" }, null, -1)),
                    vt = [pt];
                function gt(e, t, n, o, a, u) {
                    return (0, i.wy)(
                        ((0, i.wg)(),
                        (0, i.iD)(
                            "div",
                            He,
                            [
                                (0, i.wy)((0, i._)("div", Ue, Ve, 512), [[r.F8, 0 === e.currentStep]]),
                                (0, i.wy)((0, i._)("div", Ge, $e, 512), [[r.F8, 1 === e.currentStep]]),
                                (0, i.wy)((0, i._)("div", et, it, 512), [[r.F8, 2 === e.currentStep]]),
                                (0, i._)("div", ot, [
                                    (0, i._)("button", { onClick: t[0] || (t[0] = (e) => u.prevStep()), class: "arrowButton" }, st),
                                    (0, i.wy)((0, i._)("button", { class: "startButton", onClick: t[1] || (t[1] = (e) => u.start()) }, "START!", 512), [[r.F8, e.store.canStart]]),
                                    (0, i._)("button", { onClick: t[2] || (t[2] = (e) => u.nextStep()), class: "arrowButton" }, ct),
                                ]),
                                (0, i._)("div", lt, [
                                    (0, i._)("span", { class: (0, s.C_)(["dot", 0 === e.currentStep ? "current" : ""]) }, ft, 2),
                                    (0, i._)("span", { class: (0, s.C_)(["dot", 1 === e.currentStep ? "current" : ""]) }, mt, 2),
                                    (0, i._)("span", { class: (0, s.C_)(["dot", 2 === e.currentStep ? "current" : ""]) }, vt, 2),
                                ]),
                            ],
                            512
                        )),
                        [[r.F8, e.store.isLoadingScreen]]
                    );
                }
                let yt;
                var _t = {
                    name: "LoadingScreen",
                    setup() {
                        yt = ke();
                    },
                    data: () => ({ currentStep: 0, store: yt }),
                    methods: {
                        nextStep: function () {
                            this.currentStep >= 2 ? (this.currentStep = 0) : (this.currentStep += 1);
                        },
                        prevStep: function () {
                            this.currentStep <= 0 ? (this.currentStep = 2) : (this.currentStep -= 1);
                        },
                        start: function () {
                            ce(), (yt.isLoadingScreen = !1);
                        },
                    },
                };
                const wt = (0, Fe.Z)(_t, [
                    ["render", gt],
                    ["__scopeId", "data-v-a8d9b870"],
                ]);
                var bt = wt;
                let St = [];
                var Et = {
                    name: "App",
                    components: { ButtonGroup: Xe, LoadingScreen: bt },
                    mounted() {
                        Me(),
                            O.forEach((e) => {
                                St.push(e.category_announcer);
                            }),
                            le(St),
                            oe(),
                            ae();
                    },
                };
                const Mt = (0, Fe.Z)(Et, [["render", a]]);
                var kt = Mt;
                const Pt = (0, r.ri)(kt);
                Pt.use((0, A.WB)()), Pt.mount("#app");
            },
            3018: function (e, t, n) {
                var r = "/index.js";
                n(1703), n(8675), n(3462), n(4633);
                var i = { Image: 1, QRCode: 2, Surface: 3 },
                    o = { OnDetected: 1, OnPose: 2, OnLost: 3, OnResize: 4, OnTouch: 5, OnHitTestResult: 6 },
                    a = { useVocabulary: !1, useWebXR: !0 };
                function s(e, t) {
                    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), c(e, t);
                }
                function u(e) {
                    return (u = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          })(e);
                }
                function c(e, t) {
                    return (c =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        })(e, t);
                }
                function l() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (i) {
                        return !1;
                    }
                }
                function d(e, t, n) {
                    return (d = l()
                        ? Reflect.construct
                        : function (e, t, n) {
                              var r = [null];
                              r.push.apply(r, t);
                              var i = new (Function.bind.apply(e, r))();
                              return n && c(i, n.prototype), i;
                          }).apply(null, arguments);
                }
                function f(e) {
                    var t = "function" == typeof Map ? new Map() : void 0;
                    return (f = function (e) {
                        if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n);
                        }
                        function n() {
                            return d(e, arguments, u(this).constructor);
                        }
                        return (n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), c(n, e);
                    })(e);
                }
                var h = (function (e) {
                        function t(t) {
                            var n;
                            return ((n = e.call(this, t) || this).name = "INTERNAL_ERROR"), n;
                        }
                        return s(t, e), t;
                    })(f(Error)),
                    m = (function (e) {
                        function t(t) {
                            var n;
                            return ((n = e.call(this, t) || this).name = "LICENSE_ERROR"), n;
                        }
                        return s(t, e), t;
                    })(f(Error)),
                    p = (function (e) {
                        function t(t) {
                            var n;
                            return ((n = e.call(this, t) || this).name = "CAMERA_ERROR"), n;
                        }
                        return s(t, e), t;
                    })(f(Error)),
                    v = (function (e) {
                        function t(t) {
                            var n;
                            return ((n = e.call(this, t) || this).name = "SENSORS_ERROR"), n;
                        }
                        return s(t, e), t;
                    })(f(Error));
                function g(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                }
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof n.g ? n.g : "undefined" != typeof self && self;
                var y = g(
                        (function (e) {
                            var t = { exports: {} };
                            return (
                                (function (e, t) {
                                    e.exports = (function (e) {
                                        var t = {};
                                        function n(r) {
                                            if (t[r]) return t[r].exports;
                                            var i = (t[r] = { i: r, l: !1, exports: {} });
                                            return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                                        }
                                        return (
                                            (n.m = e),
                                            (n.c = t),
                                            (n.d = function (e, t, r) {
                                                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                                            }),
                                            (n.r = function (e) {
                                                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                                            }),
                                            (n.t = function (e, t) {
                                                if ((1 & t && (e = n(e)), 8 & t)) return e;
                                                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                                                var r = Object.create(null);
                                                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                                                    for (var i in e)
                                                        n.d(
                                                            r,
                                                            i,
                                                            function (t) {
                                                                return e[t];
                                                            }.bind(null, i)
                                                        );
                                                return r;
                                            }),
                                            (n.n = function (e) {
                                                var t =
                                                    e && e.__esModule
                                                        ? function () {
                                                              return e.default;
                                                          }
                                                        : function () {
                                                              return e;
                                                          };
                                                return n.d(t, "a", t), t;
                                            }),
                                            (n.o = function (e, t) {
                                                return Object.prototype.hasOwnProperty.call(e, t);
                                            }),
                                            (n.p = ""),
                                            n((n.s = 90))
                                        );
                                    })({
                                        17: function (e, t, n) {
                                            (t.__esModule = !0), (t.default = void 0);
                                            var r = n(18),
                                                i = (function () {
                                                    function e() {}
                                                    return (
                                                        (e.getFirstMatch = function (e, t) {
                                                            var n = t.match(e);
                                                            return (n && n.length > 0 && n[1]) || "";
                                                        }),
                                                        (e.getSecondMatch = function (e, t) {
                                                            var n = t.match(e);
                                                            return (n && n.length > 1 && n[2]) || "";
                                                        }),
                                                        (e.matchAndReturnConst = function (e, t, n) {
                                                            if (e.test(t)) return n;
                                                        }),
                                                        (e.getWindowsVersionName = function (e) {
                                                            switch (e) {
                                                                case "NT":
                                                                    return "NT";
                                                                case "XP":
                                                                    return "XP";
                                                                case "NT 5.0":
                                                                    return "2000";
                                                                case "NT 5.1":
                                                                    return "XP";
                                                                case "NT 5.2":
                                                                    return "2003";
                                                                case "NT 6.0":
                                                                    return "Vista";
                                                                case "NT 6.1":
                                                                    return "7";
                                                                case "NT 6.2":
                                                                    return "8";
                                                                case "NT 6.3":
                                                                    return "8.1";
                                                                case "NT 10.0":
                                                                    return "10";
                                                                default:
                                                                    return;
                                                            }
                                                        }),
                                                        (e.getMacOSVersionName = function (e) {
                                                            var t = e
                                                                .split(".")
                                                                .splice(0, 2)
                                                                .map(function (e) {
                                                                    return parseInt(e, 10) || 0;
                                                                });
                                                            if ((t.push(0), 10 === t[0]))
                                                                switch (t[1]) {
                                                                    case 5:
                                                                        return "Leopard";
                                                                    case 6:
                                                                        return "Snow Leopard";
                                                                    case 7:
                                                                        return "Lion";
                                                                    case 8:
                                                                        return "Mountain Lion";
                                                                    case 9:
                                                                        return "Mavericks";
                                                                    case 10:
                                                                        return "Yosemite";
                                                                    case 11:
                                                                        return "El Capitan";
                                                                    case 12:
                                                                        return "Sierra";
                                                                    case 13:
                                                                        return "High Sierra";
                                                                    case 14:
                                                                        return "Mojave";
                                                                    case 15:
                                                                        return "Catalina";
                                                                    default:
                                                                        return;
                                                                }
                                                        }),
                                                        (e.getAndroidVersionName = function (e) {
                                                            var t = e
                                                                .split(".")
                                                                .splice(0, 2)
                                                                .map(function (e) {
                                                                    return parseInt(e, 10) || 0;
                                                                });
                                                            if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                                                                return 1 === t[0] && t[1] < 6
                                                                    ? "Cupcake"
                                                                    : 1 === t[0] && t[1] >= 6
                                                                    ? "Donut"
                                                                    : 2 === t[0] && t[1] < 2
                                                                    ? "Eclair"
                                                                    : 2 === t[0] && 2 === t[1]
                                                                    ? "Froyo"
                                                                    : 2 === t[0] && t[1] > 2
                                                                    ? "Gingerbread"
                                                                    : 3 === t[0]
                                                                    ? "Honeycomb"
                                                                    : 4 === t[0] && t[1] < 1
                                                                    ? "Ice Cream Sandwich"
                                                                    : 4 === t[0] && t[1] < 4
                                                                    ? "Jelly Bean"
                                                                    : 4 === t[0] && t[1] >= 4
                                                                    ? "KitKat"
                                                                    : 5 === t[0]
                                                                    ? "Lollipop"
                                                                    : 6 === t[0]
                                                                    ? "Marshmallow"
                                                                    : 7 === t[0]
                                                                    ? "Nougat"
                                                                    : 8 === t[0]
                                                                    ? "Oreo"
                                                                    : 9 === t[0]
                                                                    ? "Pie"
                                                                    : void 0;
                                                        }),
                                                        (e.getVersionPrecision = function (e) {
                                                            return e.split(".").length;
                                                        }),
                                                        (e.compareVersions = function (t, n, r) {
                                                            void 0 === r && (r = !1);
                                                            var i = e.getVersionPrecision(t),
                                                                o = e.getVersionPrecision(n),
                                                                a = Math.max(i, o),
                                                                s = 0,
                                                                u = e.map([t, n], function (t) {
                                                                    var n = a - e.getVersionPrecision(t),
                                                                        r = t + new Array(n + 1).join(".0");
                                                                    return e
                                                                        .map(r.split("."), function (e) {
                                                                            return new Array(20 - e.length).join("0") + e;
                                                                        })
                                                                        .reverse();
                                                                });
                                                            for (r && (s = a - Math.min(i, o)), a -= 1; a >= s; ) {
                                                                if (u[0][a] > u[1][a]) return 1;
                                                                if (u[0][a] === u[1][a]) {
                                                                    if (a === s) return 0;
                                                                    a -= 1;
                                                                } else if (u[0][a] < u[1][a]) return -1;
                                                            }
                                                        }),
                                                        (e.map = function (e, t) {
                                                            var n,
                                                                r = [];
                                                            if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                                            for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
                                                            return r;
                                                        }),
                                                        (e.find = function (e, t) {
                                                            var n, r;
                                                            if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                                            for (n = 0, r = e.length; n < r; n += 1) {
                                                                var i = e[n];
                                                                if (t(i, n)) return i;
                                                            }
                                                        }),
                                                        (e.assign = function (e) {
                                                            for (var t, n, r = e, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                                                            if (Object.assign) return Object.assign.apply(Object, [e].concat(o));
                                                            var s = function () {
                                                                var e = o[t];
                                                                "object" == typeof e &&
                                                                    null !== e &&
                                                                    Object.keys(e).forEach(function (t) {
                                                                        r[t] = e[t];
                                                                    });
                                                            };
                                                            for (t = 0, n = o.length; t < n; t += 1) s();
                                                            return e;
                                                        }),
                                                        (e.getBrowserAlias = function (e) {
                                                            return r.BROWSER_ALIASES_MAP[e];
                                                        }),
                                                        (e.getBrowserTypeByAlias = function (e) {
                                                            return r.BROWSER_MAP[e] || "";
                                                        }),
                                                        e
                                                    );
                                                })();
                                            (t.default = i), (e.exports = t.default);
                                        },
                                        18: function (e, t, n) {
                                            (t.__esModule = !0),
                                                (t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0),
                                                (t.BROWSER_ALIASES_MAP = {
                                                    "Amazon Silk": "amazon_silk",
                                                    "Android Browser": "android",
                                                    Bada: "bada",
                                                    BlackBerry: "blackberry",
                                                    Chrome: "chrome",
                                                    Chromium: "chromium",
                                                    Electron: "electron",
                                                    Epiphany: "epiphany",
                                                    Firefox: "firefox",
                                                    Focus: "focus",
                                                    Generic: "generic",
                                                    "Google Search": "google_search",
                                                    Googlebot: "googlebot",
                                                    "Internet Explorer": "ie",
                                                    "K-Meleon": "k_meleon",
                                                    Maxthon: "maxthon",
                                                    "Microsoft Edge": "edge",
                                                    "MZ Browser": "mz",
                                                    "NAVER Whale Browser": "naver",
                                                    Opera: "opera",
                                                    "Opera Coast": "opera_coast",
                                                    PhantomJS: "phantomjs",
                                                    Puffin: "puffin",
                                                    QupZilla: "qupzilla",
                                                    QQ: "qq",
                                                    QQLite: "qqlite",
                                                    Safari: "safari",
                                                    Sailfish: "sailfish",
                                                    "Samsung Internet for Android": "samsung_internet",
                                                    SeaMonkey: "seamonkey",
                                                    Sleipnir: "sleipnir",
                                                    Swing: "swing",
                                                    Tizen: "tizen",
                                                    "UC Browser": "uc",
                                                    Vivaldi: "vivaldi",
                                                    "WebOS Browser": "webos",
                                                    WeChat: "wechat",
                                                    "Yandex Browser": "yandex",
                                                    Roku: "roku",
                                                }),
                                                (t.BROWSER_MAP = {
                                                    amazon_silk: "Amazon Silk",
                                                    android: "Android Browser",
                                                    bada: "Bada",
                                                    blackberry: "BlackBerry",
                                                    chrome: "Chrome",
                                                    chromium: "Chromium",
                                                    electron: "Electron",
                                                    epiphany: "Epiphany",
                                                    firefox: "Firefox",
                                                    focus: "Focus",
                                                    generic: "Generic",
                                                    googlebot: "Googlebot",
                                                    google_search: "Google Search",
                                                    ie: "Internet Explorer",
                                                    k_meleon: "K-Meleon",
                                                    maxthon: "Maxthon",
                                                    edge: "Microsoft Edge",
                                                    mz: "MZ Browser",
                                                    naver: "NAVER Whale Browser",
                                                    opera: "Opera",
                                                    opera_coast: "Opera Coast",
                                                    phantomjs: "PhantomJS",
                                                    puffin: "Puffin",
                                                    qupzilla: "QupZilla",
                                                    qq: "QQ Browser",
                                                    qqlite: "QQ Browser Lite",
                                                    safari: "Safari",
                                                    sailfish: "Sailfish",
                                                    samsung_internet: "Samsung Internet for Android",
                                                    seamonkey: "SeaMonkey",
                                                    sleipnir: "Sleipnir",
                                                    swing: "Swing",
                                                    tizen: "Tizen",
                                                    uc: "UC Browser",
                                                    vivaldi: "Vivaldi",
                                                    webos: "WebOS Browser",
                                                    wechat: "WeChat",
                                                    yandex: "Yandex Browser",
                                                }),
                                                (t.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }),
                                                (t.OS_MAP = {
                                                    WindowsPhone: "Windows Phone",
                                                    Windows: "Windows",
                                                    MacOS: "macOS",
                                                    iOS: "iOS",
                                                    Android: "Android",
                                                    WebOS: "WebOS",
                                                    BlackBerry: "BlackBerry",
                                                    Bada: "Bada",
                                                    Tizen: "Tizen",
                                                    Linux: "Linux",
                                                    ChromeOS: "Chrome OS",
                                                    PlayStation4: "PlayStation 4",
                                                    Roku: "Roku",
                                                }),
                                                (t.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" });
                                        },
                                        90: function (e, t, n) {
                                            (t.__esModule = !0), (t.default = void 0);
                                            var r,
                                                i = (r = n(91)) && r.__esModule ? r : { default: r },
                                                o = n(18),
                                                a = (function () {
                                                    function e() {}
                                                    var t;
                                                    return (
                                                        (e.getParser = function (e, t) {
                                                            if ((void 0 === t && (t = !1), "string" != typeof e)) throw new Error("UserAgent should be a string");
                                                            return new i.default(e, t);
                                                        }),
                                                        (e.parse = function (e) {
                                                            return new i.default(e).getResult();
                                                        }),
                                                        (t = [
                                                            {
                                                                key: "BROWSER_MAP",
                                                                get: function () {
                                                                    return o.BROWSER_MAP;
                                                                },
                                                            },
                                                            {
                                                                key: "ENGINE_MAP",
                                                                get: function () {
                                                                    return o.ENGINE_MAP;
                                                                },
                                                            },
                                                            {
                                                                key: "OS_MAP",
                                                                get: function () {
                                                                    return o.OS_MAP;
                                                                },
                                                            },
                                                            {
                                                                key: "PLATFORMS_MAP",
                                                                get: function () {
                                                                    return o.PLATFORMS_MAP;
                                                                },
                                                            },
                                                        ]) &&
                                                            (function (e, t) {
                                                                for (var n = 0; n < t.length; n++) {
                                                                    var r = t[n];
                                                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                                                }
                                                            })(e, t),
                                                        e
                                                    );
                                                })();
                                            (t.default = a), (e.exports = t.default);
                                        },
                                        91: function (e, t, n) {
                                            (t.__esModule = !0), (t.default = void 0);
                                            var r = u(n(92)),
                                                i = u(n(93)),
                                                o = u(n(94)),
                                                a = u(n(95)),
                                                s = u(n(17));
                                            function u(e) {
                                                return e && e.__esModule ? e : { default: e };
                                            }
                                            var c = (function () {
                                                function e(e, t) {
                                                    if ((void 0 === t && (t = !1), null == e || "" === e)) throw new Error("UserAgent parameter can't be empty");
                                                    (this._ua = e), (this.parsedResult = {}), !0 !== t && this.parse();
                                                }
                                                var t = e.prototype;
                                                return (
                                                    (t.getUA = function () {
                                                        return this._ua;
                                                    }),
                                                    (t.test = function (e) {
                                                        return e.test(this._ua);
                                                    }),
                                                    (t.parseBrowser = function () {
                                                        var e = this;
                                                        this.parsedResult.browser = {};
                                                        var t = s.default.find(r.default, function (t) {
                                                            if ("function" == typeof t.test) return t.test(e);
                                                            if (t.test instanceof Array)
                                                                return t.test.some(function (t) {
                                                                    return e.test(t);
                                                                });
                                                            throw new Error("Browser's test function is not valid");
                                                        });
                                                        return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
                                                    }),
                                                    (t.getBrowser = function () {
                                                        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
                                                    }),
                                                    (t.getBrowserName = function (e) {
                                                        return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
                                                    }),
                                                    (t.getBrowserVersion = function () {
                                                        return this.getBrowser().version;
                                                    }),
                                                    (t.getOS = function () {
                                                        return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
                                                    }),
                                                    (t.parseOS = function () {
                                                        var e = this;
                                                        this.parsedResult.os = {};
                                                        var t = s.default.find(i.default, function (t) {
                                                            if ("function" == typeof t.test) return t.test(e);
                                                            if (t.test instanceof Array)
                                                                return t.test.some(function (t) {
                                                                    return e.test(t);
                                                                });
                                                            throw new Error("Browser's test function is not valid");
                                                        });
                                                        return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
                                                    }),
                                                    (t.getOSName = function (e) {
                                                        var t = this.getOS().name;
                                                        return e ? String(t).toLowerCase() || "" : t || "";
                                                    }),
                                                    (t.getOSVersion = function () {
                                                        return this.getOS().version;
                                                    }),
                                                    (t.getPlatform = function () {
                                                        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
                                                    }),
                                                    (t.getPlatformType = function (e) {
                                                        void 0 === e && (e = !1);
                                                        var t = this.getPlatform().type;
                                                        return e ? String(t).toLowerCase() || "" : t || "";
                                                    }),
                                                    (t.parsePlatform = function () {
                                                        var e = this;
                                                        this.parsedResult.platform = {};
                                                        var t = s.default.find(o.default, function (t) {
                                                            if ("function" == typeof t.test) return t.test(e);
                                                            if (t.test instanceof Array)
                                                                return t.test.some(function (t) {
                                                                    return e.test(t);
                                                                });
                                                            throw new Error("Browser's test function is not valid");
                                                        });
                                                        return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
                                                    }),
                                                    (t.getEngine = function () {
                                                        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
                                                    }),
                                                    (t.getEngineName = function (e) {
                                                        return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
                                                    }),
                                                    (t.parseEngine = function () {
                                                        var e = this;
                                                        this.parsedResult.engine = {};
                                                        var t = s.default.find(a.default, function (t) {
                                                            if ("function" == typeof t.test) return t.test(e);
                                                            if (t.test instanceof Array)
                                                                return t.test.some(function (t) {
                                                                    return e.test(t);
                                                                });
                                                            throw new Error("Browser's test function is not valid");
                                                        });
                                                        return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
                                                    }),
                                                    (t.parse = function () {
                                                        return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
                                                    }),
                                                    (t.getResult = function () {
                                                        return s.default.assign({}, this.parsedResult);
                                                    }),
                                                    (t.satisfies = function (e) {
                                                        var t = this,
                                                            n = {},
                                                            r = 0,
                                                            i = {},
                                                            o = 0;
                                                        if (
                                                            (Object.keys(e).forEach(function (t) {
                                                                var a = e[t];
                                                                "string" == typeof a ? ((i[t] = a), (o += 1)) : "object" == typeof a && ((n[t] = a), (r += 1));
                                                            }),
                                                            r > 0)
                                                        ) {
                                                            var a = Object.keys(n),
                                                                u = s.default.find(a, function (e) {
                                                                    return t.isOS(e);
                                                                });
                                                            if (u) {
                                                                var c = this.satisfies(n[u]);
                                                                if (void 0 !== c) return c;
                                                            }
                                                            var l = s.default.find(a, function (e) {
                                                                return t.isPlatform(e);
                                                            });
                                                            if (l) {
                                                                var d = this.satisfies(n[l]);
                                                                if (void 0 !== d) return d;
                                                            }
                                                        }
                                                        if (o > 0) {
                                                            var f = Object.keys(i),
                                                                h = s.default.find(f, function (e) {
                                                                    return t.isBrowser(e, !0);
                                                                });
                                                            if (void 0 !== h) return this.compareVersion(i[h]);
                                                        }
                                                    }),
                                                    (t.isBrowser = function (e, t) {
                                                        void 0 === t && (t = !1);
                                                        var n = this.getBrowserName().toLowerCase(),
                                                            r = e.toLowerCase(),
                                                            i = s.default.getBrowserTypeByAlias(r);
                                                        return t && i && (r = i.toLowerCase()), r === n;
                                                    }),
                                                    (t.compareVersion = function (e) {
                                                        var t = [0],
                                                            n = e,
                                                            r = !1,
                                                            i = this.getBrowserVersion();
                                                        if ("string" == typeof i)
                                                            return (
                                                                ">" === e[0] || "<" === e[0]
                                                                    ? ((n = e.substr(1)), "=" === e[1] ? ((r = !0), (n = e.substr(2))) : (t = []), t.push(">" === e[0] ? 1 : -1))
                                                                    : "=" === e[0]
                                                                    ? (n = e.substr(1))
                                                                    : "~" === e[0] && ((r = !0), (n = e.substr(1))),
                                                                t.indexOf(s.default.compareVersions(i, n, r)) > -1
                                                            );
                                                    }),
                                                    (t.isOS = function (e) {
                                                        return this.getOSName(!0) === String(e).toLowerCase();
                                                    }),
                                                    (t.isPlatform = function (e) {
                                                        return this.getPlatformType(!0) === String(e).toLowerCase();
                                                    }),
                                                    (t.isEngine = function (e) {
                                                        return this.getEngineName(!0) === String(e).toLowerCase();
                                                    }),
                                                    (t.is = function (e, t) {
                                                        return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
                                                    }),
                                                    (t.some = function (e) {
                                                        var t = this;
                                                        return (
                                                            void 0 === e && (e = []),
                                                            e.some(function (e) {
                                                                return t.is(e);
                                                            })
                                                        );
                                                    }),
                                                    e
                                                );
                                            })();
                                            (t.default = c), (e.exports = t.default);
                                        },
                                        92: function (e, t, n) {
                                            (t.__esModule = !0), (t.default = void 0);
                                            var r,
                                                i = (r = n(17)) && r.__esModule ? r : { default: r },
                                                o = /version\/(\d+(\.?_?\d+)+)/i,
                                                a = [
                                                    {
                                                        test: [/googlebot/i],
                                                        describe: function (e) {
                                                            var t = { name: "Googlebot" },
                                                                n = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/opera/i],
                                                        describe: function (e) {
                                                            var t = { name: "Opera" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/opr\/|opios/i],
                                                        describe: function (e) {
                                                            var t = { name: "Opera" },
                                                                n = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/SamsungBrowser/i],
                                                        describe: function (e) {
                                                            var t = { name: "Samsung Internet for Android" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/Whale/i],
                                                        describe: function (e) {
                                                            var t = { name: "NAVER Whale Browser" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/MZBrowser/i],
                                                        describe: function (e) {
                                                            var t = { name: "MZ Browser" },
                                                                n = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/focus/i],
                                                        describe: function (e) {
                                                            var t = { name: "Focus" },
                                                                n = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/swing/i],
                                                        describe: function (e) {
                                                            var t = { name: "Swing" },
                                                                n = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/coast/i],
                                                        describe: function (e) {
                                                            var t = { name: "Opera Coast" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/opt\/\d+(?:.?_?\d+)+/i],
                                                        describe: function (e) {
                                                            var t = { name: "Opera Touch" },
                                                                n = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/yabrowser/i],
                                                        describe: function (e) {
                                                            var t = { name: "Yandex Browser" },
                                                                n = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/ucbrowser/i],
                                                        describe: function (e) {
                                                            var t = { name: "UC Browser" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/Maxthon|mxios/i],
                                                        describe: function (e) {
                                                            var t = { name: "Maxthon" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/epiphany/i],
                                                        describe: function (e) {
                                                            var t = { name: "Epiphany" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/puffin/i],
                                                        describe: function (e) {
                                                            var t = { name: "Puffin" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/sleipnir/i],
                                                        describe: function (e) {
                                                            var t = { name: "Sleipnir" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/k-meleon/i],
                                                        describe: function (e) {
                                                            var t = { name: "K-Meleon" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/micromessenger/i],
                                                        describe: function (e) {
                                                            var t = { name: "WeChat" },
                                                                n = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/qqbrowser/i],
                                                        describe: function (e) {
                                                            var t = { name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser" },
                                                                n = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/msie|trident/i],
                                                        describe: function (e) {
                                                            var t = { name: "Internet Explorer" },
                                                                n = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/\sedg\//i],
                                                        describe: function (e) {
                                                            var t = { name: "Microsoft Edge" },
                                                                n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/edg([ea]|ios)/i],
                                                        describe: function (e) {
                                                            var t = { name: "Microsoft Edge" },
                                                                n = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/vivaldi/i],
                                                        describe: function (e) {
                                                            var t = { name: "Vivaldi" },
                                                                n = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/seamonkey/i],
                                                        describe: function (e) {
                                                            var t = { name: "SeaMonkey" },
                                                                n = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/sailfish/i],
                                                        describe: function (e) {
                                                            var t = { name: "Sailfish" },
                                                                n = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/silk/i],
                                                        describe: function (e) {
                                                            var t = { name: "Amazon Silk" },
                                                                n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/phantom/i],
                                                        describe: function (e) {
                                                            var t = { name: "PhantomJS" },
                                                                n = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/slimerjs/i],
                                                        describe: function (e) {
                                                            var t = { name: "SlimerJS" },
                                                                n = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                                        describe: function (e) {
                                                            var t = { name: "BlackBerry" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/(web|hpw)[o0]s/i],
                                                        describe: function (e) {
                                                            var t = { name: "WebOS Browser" },
                                                                n = i.default.getFirstMatch(o, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/bada/i],
                                                        describe: function (e) {
                                                            var t = { name: "Bada" },
                                                                n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/tizen/i],
                                                        describe: function (e) {
                                                            var t = { name: "Tizen" },
                                                                n = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/qupzilla/i],
                                                        describe: function (e) {
                                                            var t = { name: "QupZilla" },
                                                                n = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/firefox|iceweasel|fxios/i],
                                                        describe: function (e) {
                                                            var t = { name: "Firefox" },
                                                                n = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/electron/i],
                                                        describe: function (e) {
                                                            var t = { name: "Electron" },
                                                                n = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/MiuiBrowser/i],
                                                        describe: function (e) {
                                                            var t = { name: "Miui" },
                                                                n = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/chromium/i],
                                                        describe: function (e) {
                                                            var t = { name: "Chromium" },
                                                                n = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/chrome|crios|crmo/i],
                                                        describe: function (e) {
                                                            var t = { name: "Chrome" },
                                                                n = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/GSA/i],
                                                        describe: function (e) {
                                                            var t = { name: "Google Search" },
                                                                n = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: function (e) {
                                                            var t = !e.test(/like android/i),
                                                                n = e.test(/android/i);
                                                            return t && n;
                                                        },
                                                        describe: function (e) {
                                                            var t = { name: "Android Browser" },
                                                                n = i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/playstation 4/i],
                                                        describe: function (e) {
                                                            var t = { name: "PlayStation 4" },
                                                                n = i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/safari|applewebkit/i],
                                                        describe: function (e) {
                                                            var t = { name: "Safari" },
                                                                n = i.default.getFirstMatch(o, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/.*/i],
                                                        describe: function (e) {
                                                            var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                                            return { name: i.default.getFirstMatch(t, e), version: i.default.getSecondMatch(t, e) };
                                                        },
                                                    },
                                                ];
                                            (t.default = a), (e.exports = t.default);
                                        },
                                        93: function (e, t, n) {
                                            (t.__esModule = !0), (t.default = void 0);
                                            var r,
                                                i = (r = n(17)) && r.__esModule ? r : { default: r },
                                                o = n(18),
                                                a = [
                                                    {
                                                        test: [/Roku\/DVP/],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                                            return { name: o.OS_MAP.Roku, version: t };
                                                        },
                                                    },
                                                    {
                                                        test: [/windows phone/i],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                                            return { name: o.OS_MAP.WindowsPhone, version: t };
                                                        },
                                                    },
                                                    {
                                                        test: [/windows /i],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                                                n = i.default.getWindowsVersionName(t);
                                                            return { name: o.OS_MAP.Windows, version: t, versionName: n };
                                                        },
                                                    },
                                                    {
                                                        test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                                        describe: function (e) {
                                                            var t = { name: o.OS_MAP.iOS },
                                                                n = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/macintosh/i],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                                                n = i.default.getMacOSVersionName(t),
                                                                r = { name: o.OS_MAP.MacOS, version: t };
                                                            return n && (r.versionName = n), r;
                                                        },
                                                    },
                                                    {
                                                        test: [/(ipod|iphone|ipad)/i],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                                            return { name: o.OS_MAP.iOS, version: t };
                                                        },
                                                    },
                                                    {
                                                        test: function (e) {
                                                            var t = !e.test(/like android/i),
                                                                n = e.test(/android/i);
                                                            return t && n;
                                                        },
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                                                n = i.default.getAndroidVersionName(t),
                                                                r = { name: o.OS_MAP.Android, version: t };
                                                            return n && (r.versionName = n), r;
                                                        },
                                                    },
                                                    {
                                                        test: [/(web|hpw)[o0]s/i],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                                                n = { name: o.OS_MAP.WebOS };
                                                            return t && t.length && (n.version = t), n;
                                                        },
                                                    },
                                                    {
                                                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                                                            return { name: o.OS_MAP.BlackBerry, version: t };
                                                        },
                                                    },
                                                    {
                                                        test: [/bada/i],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                                            return { name: o.OS_MAP.Bada, version: t };
                                                        },
                                                    },
                                                    {
                                                        test: [/tizen/i],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                                                            return { name: o.OS_MAP.Tizen, version: t };
                                                        },
                                                    },
                                                    {
                                                        test: [/linux/i],
                                                        describe: function () {
                                                            return { name: o.OS_MAP.Linux };
                                                        },
                                                    },
                                                    {
                                                        test: [/CrOS/],
                                                        describe: function () {
                                                            return { name: o.OS_MAP.ChromeOS };
                                                        },
                                                    },
                                                    {
                                                        test: [/PlayStation 4/],
                                                        describe: function (e) {
                                                            var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                                                            return { name: o.OS_MAP.PlayStation4, version: t };
                                                        },
                                                    },
                                                ];
                                            (t.default = a), (e.exports = t.default);
                                        },
                                        94: function (e, t, n) {
                                            (t.__esModule = !0), (t.default = void 0);
                                            var r,
                                                i = (r = n(17)) && r.__esModule ? r : { default: r },
                                                o = n(18);
                                            (t.default = [
                                                {
                                                    test: [/googlebot/i],
                                                    describe: function () {
                                                        return { type: "bot", vendor: "Google" };
                                                    },
                                                },
                                                {
                                                    test: [/huawei/i],
                                                    describe: function (e) {
                                                        var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                                            n = { type: o.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                                                        return t && (n.model = t), n;
                                                    },
                                                },
                                                {
                                                    test: [/nexus\s*(?:7|8|9|10).*/i],
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                                                    },
                                                },
                                                {
                                                    test: [/ipad/i],
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
                                                    },
                                                },
                                                {
                                                    test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
                                                    },
                                                },
                                                {
                                                    test: [/kftt build/i],
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
                                                    },
                                                },
                                                {
                                                    test: [/silk/i],
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                                                    },
                                                },
                                                {
                                                    test: [/tablet(?! pc)/i],
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tablet };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        var t = e.test(/ipod|iphone/i),
                                                            n = e.test(/like (ipod|iphone)/i);
                                                        return t && !n;
                                                    },
                                                    describe: function (e) {
                                                        var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                                                        return { type: o.PLATFORMS_MAP.mobile, vendor: "Apple", model: t };
                                                    },
                                                },
                                                {
                                                    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                                                    },
                                                },
                                                {
                                                    test: [/[^-]mobi/i],
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.mobile };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "blackberry" === e.getBrowserName(!0);
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "bada" === e.getBrowserName(!0);
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.mobile };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "windows phone" === e.getBrowserName();
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        var t = Number(String(e.getOSVersion()).split(".")[0]);
                                                        return "android" === e.getOSName(!0) && t >= 3;
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tablet };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "android" === e.getOSName(!0);
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.mobile };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "macos" === e.getOSName(!0);
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.desktop, vendor: "Apple" };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "windows" === e.getOSName(!0);
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.desktop };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "linux" === e.getOSName(!0);
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.desktop };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "playstation 4" === e.getOSName(!0);
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tv };
                                                    },
                                                },
                                                {
                                                    test: function (e) {
                                                        return "roku" === e.getOSName(!0);
                                                    },
                                                    describe: function () {
                                                        return { type: o.PLATFORMS_MAP.tv };
                                                    },
                                                },
                                            ]),
                                                (e.exports = t.default);
                                        },
                                        95: function (e, t, n) {
                                            (t.__esModule = !0), (t.default = void 0);
                                            var r,
                                                i = (r = n(17)) && r.__esModule ? r : { default: r },
                                                o = n(18),
                                                a = [
                                                    {
                                                        test: function (e) {
                                                            return "microsoft edge" === e.getBrowserName(!0);
                                                        },
                                                        describe: function (e) {
                                                            if (/\sedg\//i.test(e)) return { name: o.ENGINE_MAP.Blink };
                                                            var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                                            return { name: o.ENGINE_MAP.EdgeHTML, version: t };
                                                        },
                                                    },
                                                    {
                                                        test: [/trident/i],
                                                        describe: function (e) {
                                                            var t = { name: o.ENGINE_MAP.Trident },
                                                                n = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: function (e) {
                                                            return e.test(/presto/i);
                                                        },
                                                        describe: function (e) {
                                                            var t = { name: o.ENGINE_MAP.Presto },
                                                                n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: function (e) {
                                                            var t = e.test(/gecko/i),
                                                                n = e.test(/like gecko/i);
                                                            return t && !n;
                                                        },
                                                        describe: function (e) {
                                                            var t = { name: o.ENGINE_MAP.Gecko },
                                                                n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                    {
                                                        test: [/(apple)?webkit\/537\.36/i],
                                                        describe: function () {
                                                            return { name: o.ENGINE_MAP.Blink };
                                                        },
                                                    },
                                                    {
                                                        test: [/(apple)?webkit/i],
                                                        describe: function (e) {
                                                            var t = { name: o.ENGINE_MAP.WebKit },
                                                                n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                                            return n && (t.version = n), t;
                                                        },
                                                    },
                                                ];
                                            (t.default = a), (e.exports = t.default);
                                        },
                                    });
                                })(t),
                                t.exports
                            );
                        })()
                    ),
                    _ = (function () {
                        function e() {
                            var e = y.getParser(window.navigator.userAgent);
                            this.setupDeviceId(), this.setupPlatform(e), this.parseOS(e), this.parseType(e);
                        }
                        var t = e.prototype;
                        return (
                            (t.setupDeviceId = function () {
                                (this.device = localStorage.getItem("_deviceId")),
                                    this.device ||
                                        ((this.device = "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function (e) {
                                            return (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16);
                                        })),
                                        localStorage.setItem("_deviceId", this.device));
                            }),
                            (t.setupPlatform = function (e) {
                                this.platform = e.getBrowser().name + "-" + e.getOS().name;
                            }),
                            (t.parseOS = function (t) {
                                this.os =
                                    t.getOS().name === y.OS_MAP.iOS || ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
                                        ? e.OS.iOS
                                        : t.getOS().name === y.OS_MAP.Android
                                        ? e.OS.Android
                                        : t.getOS().name === y.OS_MAP.MacOS
                                        ? e.OS.Mac
                                        : t.getOS().name === y.OS_MAP.Windows
                                        ? e.OS.PC
                                        : e.OS.Other;
                            }),
                            (t.parseType = function (t) {
                                this.type =
                                    t.getPlatform().type === y.PLATFORMS_MAP.tablet || ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
                                        ? e.Type.Tablet
                                        : t.getPlatform().type === y.PLATFORMS_MAP.mobile
                                        ? e.Type.Mobile
                                        : e.Type.Desktop;
                            }),
                            e
                        );
                    })();
                (_.OS = { Android: 0, iOS: 1, PC: 2, Mac: 3, Other: 4 }), (_.Type = { Mobile: 0, Tablet: 1, Desktop: 2 });
                var w,
                    b =
                        ((w = "undefined" == typeof document ? new (n(4030).URL)("file:" + r).href : (document.currentScript && document.currentScript.src) || new URL("ox-sdk.js", document.baseURI).href),
                        function (e) {
                            var t,
                                n,
                                r = void 0 !== (e = e || {}) ? e : {};
                            r.ready = new Promise(function (e, r) {
                                (t = e), (n = r);
                            });
                            var i,
                                o = {};
                            for (i in r) r.hasOwnProperty(i) && (o[i] = r[i]);
                            var a,
                                s,
                                u = "./this.program";
                            (a = "object" == typeof window), (s = "function" == typeof importScripts), "object" == typeof process && "object" == typeof process.versions && process;
                            var c,
                                l,
                                d,
                                f = "";
                            (a || s) &&
                                (s ? (f = self.location.href) : document.currentScript && (f = document.currentScript.src),
                                w && (f = w),
                                (f = 0 !== f.indexOf("blob:") ? f.substr(0, f.lastIndexOf("/") + 1) : ""),
                                (c = function (e) {
                                    var t = new XMLHttpRequest();
                                    return t.open("GET", e, !1), t.send(null), t.responseText;
                                }),
                                s &&
                                    (d = function (e) {
                                        var t = new XMLHttpRequest();
                                        return t.open("GET", e, !1), (t.responseType = "arraybuffer"), t.send(null), new Uint8Array(t.response);
                                    }),
                                (l = function (e, t, n) {
                                    var r = new XMLHttpRequest();
                                    r.open("GET", e, !0),
                                        (r.responseType = "arraybuffer"),
                                        (r.onload = function () {
                                            200 == r.status || (0 == r.status && r.response) ? t(r.response) : n();
                                        }),
                                        (r.onerror = n),
                                        r.send(null);
                                }));
                            var h = r.print || console.log.bind(console),
                                m = r.printErr || console.warn.bind(console);
                            for (i in o) o.hasOwnProperty(i) && (r[i] = o[i]);
                            function p(e) {
                                p.shown || (p.shown = {}), p.shown[e] || ((p.shown[e] = 1), m(e));
                            }
                            (o = null), r.thisProgram && (u = r.thisProgram);
                            var v,
                                g,
                                y,
                                _ = [],
                                b = 0,
                                S = function (e) {
                                    b = e;
                                };
                            r.wasmBinary && (g = r.wasmBinary), "object" != typeof WebAssembly && ee("no native wasm support detected");
                            var E = new WebAssembly.Table({ initial: 5799, element: "anyfunc" }),
                                M = !1;
                            function k(e, t) {
                                e || ee("Assertion failed: " + t);
                            }
                            var P,
                                x,
                                F,
                                A,
                                O,
                                L,
                                D,
                                R = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                            function C(e, t, n) {
                                for (var r = t + n, i = t; e[i] && !(i >= r); ) ++i;
                                if (i - t > 16 && e.subarray && R) return R.decode(e.subarray(t, i));
                                for (var o = ""; t < i; ) {
                                    var a = e[t++];
                                    if (128 & a) {
                                        var s = 63 & e[t++];
                                        if (192 != (224 & a)) {
                                            var u = 63 & e[t++];
                                            if ((a = 224 == (240 & a) ? ((15 & a) << 12) | (s << 6) | u : ((7 & a) << 18) | (s << 12) | (u << 6) | (63 & e[t++])) < 65536) o += String.fromCharCode(a);
                                            else {
                                                var c = a - 65536;
                                                o += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
                                            }
                                        } else o += String.fromCharCode(((31 & a) << 6) | s);
                                    } else o += String.fromCharCode(a);
                                }
                                return o;
                            }
                            function T(e, t) {
                                return e ? C(F, e, t) : "";
                            }
                            function j(e, t, n, r) {
                                if (!(r > 0)) return 0;
                                for (var i = n, o = n + r - 1, a = 0; a < e.length; ++a) {
                                    var s = e.charCodeAt(a);
                                    if ((s >= 55296 && s <= 57343 && (s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++a))), s <= 127)) {
                                        if (n >= o) break;
                                        t[n++] = s;
                                    } else if (s <= 2047) {
                                        if (n + 1 >= o) break;
                                        (t[n++] = 192 | (s >> 6)), (t[n++] = 128 | (63 & s));
                                    } else if (s <= 65535) {
                                        if (n + 2 >= o) break;
                                        (t[n++] = 224 | (s >> 12)), (t[n++] = 128 | ((s >> 6) & 63)), (t[n++] = 128 | (63 & s));
                                    } else {
                                        if (n + 3 >= o) break;
                                        (t[n++] = 240 | (s >> 18)), (t[n++] = 128 | ((s >> 12) & 63)), (t[n++] = 128 | ((s >> 6) & 63)), (t[n++] = 128 | (63 & s));
                                    }
                                }
                                return (t[n] = 0), n - i;
                            }
                            function z(e, t, n) {
                                return j(e, F, t, n);
                            }
                            function B(e) {
                                for (var t = 0, n = 0; n < e.length; ++n) {
                                    var r = e.charCodeAt(n);
                                    r >= 55296 && r <= 57343 && (r = (65536 + ((1023 & r) << 10)) | (1023 & e.charCodeAt(++n))), r <= 127 ? ++t : (t += r <= 2047 ? 2 : r <= 65535 ? 3 : 4);
                                }
                                return t;
                            }
                            function I(e) {
                                var t = B(e) + 1,
                                    n = Ie(t);
                                return n && j(e, x, n, t), n;
                            }
                            function N(e) {
                                (P = e),
                                    (r.HEAP8 = x = new Int8Array(e)),
                                    (r.HEAP16 = A = new Int16Array(e)),
                                    (r.HEAP32 = L = new Int32Array(e)),
                                    (r.HEAPU8 = F = new Uint8Array(e)),
                                    (r.HEAPU16 = O = new Uint16Array(e)),
                                    (r.HEAPU32 = D = new Uint32Array(e)),
                                    (r.HEAPF32 = new Float32Array(e)),
                                    (r.HEAPF64 = new Float64Array(e));
                            }
                            "undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
                            var X = r.INITIAL_MEMORY || 16777216;
                            (y = r.wasmMemory ? r.wasmMemory : new WebAssembly.Memory({ initial: X / 65536, maximum: 32768 })) && (P = y.buffer), (X = P.byteLength), N(P);
                            var W = [],
                                H = [],
                                U = [],
                                q = [],
                                K = Math.abs,
                                Y = Math.ceil,
                                V = Math.floor,
                                G = Math.min,
                                Z = 0,
                                Q = null;
                            function J(e) {
                                Z++, r.monitorRunDependencies && r.monitorRunDependencies(Z);
                            }
                            function $(e) {
                                if ((Z--, r.monitorRunDependencies && r.monitorRunDependencies(Z), 0 == Z && Q)) {
                                    var t = Q;
                                    (Q = null), t();
                                }
                            }
                            function ee(e) {
                                r.onAbort && r.onAbort(e), m((e += "")), (M = !0), (e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.");
                                var t = new WebAssembly.RuntimeError(e);
                                throw (n(t), t);
                            }
                            function te(e) {
                                return (t = e), (n = "data:application/octet-stream;base64,"), String.prototype.startsWith ? t.startsWith(n) : 0 === t.indexOf(n);
                                var t, n;
                            }
                            (r.preloadedImages = {}), (r.preloadedAudios = {});
                            var ne,
                                re,
                                ie,
                                oe,
                                ae = "onirix_native_sdk.wasm";
                            function se() {
                                try {
                                    if (g) return new Uint8Array(g);
                                    if (d) return d(ae);
                                    throw "both async and sync fetching of the wasm failed";
                                } catch (e) {
                                    ee(e);
                                }
                            }
                            te(ae) || ((ne = ae), (ae = r.locateFile ? r.locateFile(ne, f) : f + ne)),
                                (oe = function () {
                                    return performance.now();
                                });
                            var ue = {
                                mainLoop: {
                                    scheduler: null,
                                    method: "",
                                    currentlyRunningMainloop: 0,
                                    func: null,
                                    arg: 0,
                                    timingMode: 0,
                                    timingValue: 0,
                                    currentFrameNumber: 0,
                                    queue: [],
                                    pause: function () {
                                        (ue.mainLoop.scheduler = null), ue.mainLoop.currentlyRunningMainloop++;
                                    },
                                    resume: function () {
                                        ue.mainLoop.currentlyRunningMainloop++;
                                        var e = ue.mainLoop.timingMode,
                                            t = ue.mainLoop.timingValue,
                                            n = ue.mainLoop.func;
                                        (ue.mainLoop.func = null),
                                            (function (e, t, n, r, i) {
                                                k(
                                                    !ue.mainLoop.func,
                                                    "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."
                                                ),
                                                    (ue.mainLoop.func = e),
                                                    (ue.mainLoop.arg = r);
                                                var o = ue.mainLoop.currentlyRunningMainloop;
                                                ue.mainLoop.runner = function () {
                                                    if (!M)
                                                        if (ue.mainLoop.queue.length > 0) {
                                                            var t = Date.now(),
                                                                n = ue.mainLoop.queue.shift();
                                                            if ((n.func(n.arg), ue.mainLoop.remainingBlockers)) {
                                                                var r = ue.mainLoop.remainingBlockers,
                                                                    i = r % 1 == 0 ? r - 1 : Math.floor(r);
                                                                ue.mainLoop.remainingBlockers = n.counted ? i : (8 * r + (i += 0.5)) / 9;
                                                            }
                                                            if ((console.log('main loop blocker "' + n.name + '" took ' + (Date.now() - t) + " ms"), ue.mainLoop.updateStatus(), o < ue.mainLoop.currentlyRunningMainloop)) return;
                                                            setTimeout(ue.mainLoop.runner, 0);
                                                        } else
                                                            o < ue.mainLoop.currentlyRunningMainloop ||
                                                                ((ue.mainLoop.currentFrameNumber = (ue.mainLoop.currentFrameNumber + 1) | 0),
                                                                1 == ue.mainLoop.timingMode && ue.mainLoop.timingValue > 1 && ue.mainLoop.currentFrameNumber % ue.mainLoop.timingValue != 0
                                                                    ? ue.mainLoop.scheduler()
                                                                    : (0 == ue.mainLoop.timingMode && (ue.mainLoop.tickStartTime = oe()),
                                                                      ue.mainLoop.runIter(e),
                                                                      o < ue.mainLoop.currentlyRunningMainloop ||
                                                                          ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), ue.mainLoop.scheduler())));
                                                };
                                            })(n, 0, 0, ue.mainLoop.arg),
                                            (function (e, t) {
                                                if (((ue.mainLoop.timingMode = e), (ue.mainLoop.timingValue = t), !ue.mainLoop.func)) return 1;
                                                if (0 == e)
                                                    (ue.mainLoop.scheduler = function () {
                                                        var e = 0 | Math.max(0, ue.mainLoop.tickStartTime + t - oe());
                                                        setTimeout(ue.mainLoop.runner, e);
                                                    }),
                                                        (ue.mainLoop.method = "timeout");
                                                else if (1 == e)
                                                    (ue.mainLoop.scheduler = function () {
                                                        ue.requestAnimationFrame(ue.mainLoop.runner);
                                                    }),
                                                        (ue.mainLoop.method = "rAF");
                                                else if (2 == e) {
                                                    if ("undefined" == typeof setImmediate) {
                                                        var n = [],
                                                            i = "setimmediate";
                                                        addEventListener(
                                                            "message",
                                                            function (e) {
                                                                (e.data !== i && e.data.target !== i) || (e.stopPropagation(), n.shift()());
                                                            },
                                                            !0
                                                        ),
                                                            (setImmediate = function (e) {
                                                                n.push(e), s ? (void 0 === r.setImmediates && (r.setImmediates = []), r.setImmediates.push(e), postMessage({ target: i })) : postMessage(i, "*");
                                                            });
                                                    }
                                                    (ue.mainLoop.scheduler = function () {
                                                        setImmediate(ue.mainLoop.runner);
                                                    }),
                                                        (ue.mainLoop.method = "immediate");
                                                }
                                            })(e, t),
                                            ue.mainLoop.scheduler();
                                    },
                                    updateStatus: function () {
                                        if (r.setStatus) {
                                            var e = r.statusMessage || "Please wait...",
                                                t = ue.mainLoop.remainingBlockers,
                                                n = ue.mainLoop.expectedBlockers;
                                            r.setStatus(t ? (t < n ? e + " (" + (n - t) + "/" + n + ")" : e) : "");
                                        }
                                    },
                                    runIter: function (e) {
                                        if (!M) {
                                            if (r.preMainLoop && !1 === r.preMainLoop()) return;
                                            try {
                                                e();
                                            } catch (e) {
                                                if (e instanceof ot) return;
                                                if ("unwind" == e) return;
                                                throw (e && "object" == typeof e && e.stack && m("exception thrown: " + [e, e.stack]), e);
                                            }
                                            r.postMainLoop && r.postMainLoop();
                                        }
                                    },
                                },
                                isFullscreen: !1,
                                pointerLock: !1,
                                moduleContextCreatedCallbacks: [],
                                workers: [],
                                init: function () {
                                    if ((r.preloadPlugins || (r.preloadPlugins = []), !ue.initted)) {
                                        ue.initted = !0;
                                        try {
                                            new Blob(), (ue.hasBlobConstructor = !0);
                                        } catch (e) {
                                            (ue.hasBlobConstructor = !1), console.log("warning: no blob constructor, cannot create blobs with mimetypes");
                                        }
                                        (ue.BlobBuilder =
                                            "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : ue.hasBlobConstructor ? null : console.log("warning: no BlobBuilder")),
                                            (ue.URLObject = "undefined" != typeof window ? (window.URL ? window.URL : window.webkitURL) : void 0),
                                            r.noImageDecoding ||
                                                void 0 !== ue.URLObject ||
                                                (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), (r.noImageDecoding = !0));
                                        var e = {
                                            canHandle: function (e) {
                                                return !r.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e);
                                            },
                                            handle: function (e, t, n, i) {
                                                var o = null;
                                                if (ue.hasBlobConstructor)
                                                    try {
                                                        (o = new Blob([e], { type: ue.getMimetype(t) })).size !== e.length && (o = new Blob([new Uint8Array(e).buffer], { type: ue.getMimetype(t) }));
                                                    } catch (e) {
                                                        p("Blob constructor present but fails: " + e + "; falling back to blob builder");
                                                    }
                                                if (!o) {
                                                    var a = new ue.BlobBuilder();
                                                    a.append(new Uint8Array(e).buffer), (o = a.getBlob());
                                                }
                                                var s = ue.URLObject.createObjectURL(o),
                                                    u = new Image();
                                                (u.onload = function () {
                                                    k(u.complete, "Image " + t + " could not be decoded");
                                                    var i = document.createElement("canvas");
                                                    (i.width = u.width), (i.height = u.height), i.getContext("2d").drawImage(u, 0, 0), (r.preloadedImages[t] = i), ue.URLObject.revokeObjectURL(s), n && n(e);
                                                }),
                                                    (u.onerror = function (e) {
                                                        console.log("Image " + s + " could not be decoded"), i && i();
                                                    }),
                                                    (u.src = s);
                                            },
                                        };
                                        r.preloadPlugins.push(e);
                                        var t = {
                                            canHandle: function (e) {
                                                return !r.noAudioDecoding && e.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
                                            },
                                            handle: function (e, t, n, i) {
                                                var o = !1;
                                                function a(i) {
                                                    o || ((o = !0), (r.preloadedAudios[t] = i), n && n(e));
                                                }
                                                function s() {
                                                    o || ((o = !0), (r.preloadedAudios[t] = new Audio()), i && i());
                                                }
                                                if (!ue.hasBlobConstructor) return s();
                                                try {
                                                    var u = new Blob([e], { type: ue.getMimetype(t) });
                                                } catch (e) {
                                                    return s();
                                                }
                                                var c = ue.URLObject.createObjectURL(u),
                                                    l = new Audio();
                                                l.addEventListener(
                                                    "canplaythrough",
                                                    function () {
                                                        a(l);
                                                    },
                                                    !1
                                                ),
                                                    (l.onerror = function (n) {
                                                        o ||
                                                            (console.log("warning: browser could not fully decode audio " + t + ", trying slower base64 approach"),
                                                            (l.src =
                                                                "data:audio/x-" +
                                                                t.substr(-3) +
                                                                ";base64," +
                                                                (function (e) {
                                                                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", r = 0, i = 0, o = 0; o < e.length; o++)
                                                                        for (r = (r << 8) | e[o], i += 8; i >= 6; ) {
                                                                            var a = (r >> (i - 6)) & 63;
                                                                            (i -= 6), (n += t[a]);
                                                                        }
                                                                    return 2 == i ? ((n += t[(3 & r) << 4]), (n += "==")) : 4 == i && ((n += t[(15 & r) << 2]), (n += "=")), n;
                                                                })(e)),
                                                            a(l));
                                                    }),
                                                    (l.src = c),
                                                    ue.safeSetTimeout(function () {
                                                        a(l);
                                                    }, 1e4);
                                            },
                                        };
                                        r.preloadPlugins.push(t);
                                        var n = r.canvas;
                                        n &&
                                            ((n.requestPointerLock = n.requestPointerLock || n.mozRequestPointerLock || n.webkitRequestPointerLock || n.msRequestPointerLock || function () {}),
                                            (n.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function () {}),
                                            (n.exitPointerLock = n.exitPointerLock.bind(document)),
                                            document.addEventListener("pointerlockchange", i, !1),
                                            document.addEventListener("mozpointerlockchange", i, !1),
                                            document.addEventListener("webkitpointerlockchange", i, !1),
                                            document.addEventListener("mspointerlockchange", i, !1),
                                            r.elementPointerLock &&
                                                n.addEventListener(
                                                    "click",
                                                    function (e) {
                                                        !ue.pointerLock && r.canvas.requestPointerLock && (r.canvas.requestPointerLock(), e.preventDefault());
                                                    },
                                                    !1
                                                ));
                                    }
                                    function i() {
                                        ue.pointerLock =
                                            document.pointerLockElement === r.canvas || document.mozPointerLockElement === r.canvas || document.webkitPointerLockElement === r.canvas || document.msPointerLockElement === r.canvas;
                                    }
                                },
                                createContext: function (e, t, n, i) {
                                    if (t && r.ctx && e == r.canvas) return r.ctx;
                                    var o, a;
                                    if (t) {
                                        var s = { antialias: !1, alpha: !1, majorVersion: 1 };
                                        if (i) for (var u in i) s[u] = i[u];
                                        "undefined" != typeof GL && (a = GL.createContext(e, s)) && (o = GL.getContext(a).GLctx);
                                    } else o = e.getContext("2d");
                                    return o
                                        ? (n &&
                                              (t || k("undefined" == typeof GLctx, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),
                                              (r.ctx = o),
                                              t && GL.makeContextCurrent(a),
                                              (r.useWebGL = t),
                                              ue.moduleContextCreatedCallbacks.forEach(function (e) {
                                                  e();
                                              }),
                                              ue.init()),
                                          o)
                                        : null;
                                },
                                destroyContext: function (e, t, n) {},
                                fullscreenHandlersInstalled: !1,
                                lockPointer: void 0,
                                resizeCanvas: void 0,
                                requestFullscreen: function (e, t) {
                                    (ue.lockPointer = e), (ue.resizeCanvas = t), void 0 === ue.lockPointer && (ue.lockPointer = !0), void 0 === ue.resizeCanvas && (ue.resizeCanvas = !1);
                                    var n = r.canvas;
                                    function i() {
                                        ue.isFullscreen = !1;
                                        var e = n.parentNode;
                                        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e
                                            ? ((n.exitFullscreen = ue.exitFullscreen), ue.lockPointer && n.requestPointerLock(), (ue.isFullscreen = !0), ue.resizeCanvas ? ue.setFullscreenCanvasSize() : ue.updateCanvasDimensions(n))
                                            : (e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e), ue.resizeCanvas ? ue.setWindowedCanvasSize() : ue.updateCanvasDimensions(n)),
                                            r.onFullScreen && r.onFullScreen(ue.isFullscreen),
                                            r.onFullscreen && r.onFullscreen(ue.isFullscreen);
                                    }
                                    ue.fullscreenHandlersInstalled ||
                                        ((ue.fullscreenHandlersInstalled = !0),
                                        document.addEventListener("fullscreenchange", i, !1),
                                        document.addEventListener("mozfullscreenchange", i, !1),
                                        document.addEventListener("webkitfullscreenchange", i, !1),
                                        document.addEventListener("MSFullscreenChange", i, !1));
                                    var o = document.createElement("div");
                                    n.parentNode.insertBefore(o, n),
                                        o.appendChild(n),
                                        (o.requestFullscreen =
                                            o.requestFullscreen ||
                                            o.mozRequestFullScreen ||
                                            o.msRequestFullscreen ||
                                            (o.webkitRequestFullscreen
                                                ? function () {
                                                      o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                                                  }
                                                : null) ||
                                            (o.webkitRequestFullScreen
                                                ? function () {
                                                      o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                                                  }
                                                : null)),
                                        o.requestFullscreen();
                                },
                                exitFullscreen: function () {
                                    return (
                                        !!ue.isFullscreen &&
                                        ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function () {}).apply(document, []), !0)
                                    );
                                },
                                nextRAF: 0,
                                fakeRequestAnimationFrame: function (e) {
                                    var t = Date.now();
                                    if (0 === ue.nextRAF) ue.nextRAF = t + 1e3 / 60;
                                    else for (; t + 2 >= ue.nextRAF; ) ue.nextRAF += 1e3 / 60;
                                    var n = Math.max(ue.nextRAF - t, 0);
                                    setTimeout(e, n);
                                },
                                requestAnimationFrame: (function (e) {
                                    function t(t) {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (t.toString = function () {
                                            return e.toString();
                                        }),
                                        t
                                    );
                                })(function (e) {
                                    "function" != typeof requestAnimationFrame ? (0, ue.fakeRequestAnimationFrame)(e) : requestAnimationFrame(e);
                                }),
                                safeCallback: function (e) {
                                    return function () {
                                        if (!M) return e.apply(null, arguments);
                                    };
                                },
                                allowAsyncCallbacks: !0,
                                queuedAsyncCallbacks: [],
                                pauseAsyncCallbacks: function () {
                                    ue.allowAsyncCallbacks = !1;
                                },
                                resumeAsyncCallbacks: function () {
                                    if (((ue.allowAsyncCallbacks = !0), ue.queuedAsyncCallbacks.length > 0)) {
                                        var e = ue.queuedAsyncCallbacks;
                                        (ue.queuedAsyncCallbacks = []),
                                            e.forEach(function (e) {
                                                e();
                                            });
                                    }
                                },
                                safeRequestAnimationFrame: function (e) {
                                    return ue.requestAnimationFrame(function () {
                                        M || (ue.allowAsyncCallbacks ? e() : ue.queuedAsyncCallbacks.push(e));
                                    });
                                },
                                safeSetTimeout: function (e, t) {
                                    return setTimeout(function () {
                                        M || (ue.allowAsyncCallbacks ? e() : ue.queuedAsyncCallbacks.push(e));
                                    }, t);
                                },
                                safeSetInterval: function (e, t) {
                                    return setInterval(function () {
                                        M || (ue.allowAsyncCallbacks && e());
                                    }, t);
                                },
                                getMimetype: function (e) {
                                    return { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg" }[e.substr(e.lastIndexOf(".") + 1)];
                                },
                                getUserMedia: function (e) {
                                    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e);
                                },
                                getMovementX: function (e) {
                                    return e.movementX || e.mozMovementX || e.webkitMovementX || 0;
                                },
                                getMovementY: function (e) {
                                    return e.movementY || e.mozMovementY || e.webkitMovementY || 0;
                                },
                                getMouseWheelDelta: function (e) {
                                    var t = 0;
                                    switch (e.type) {
                                        case "DOMMouseScroll":
                                            t = e.detail / 3;
                                            break;
                                        case "mousewheel":
                                            t = e.wheelDelta / 120;
                                            break;
                                        case "wheel":
                                            switch (((t = e.deltaY), e.deltaMode)) {
                                                case 0:
                                                    t /= 100;
                                                    break;
                                                case 1:
                                                    t /= 3;
                                                    break;
                                                case 2:
                                                    t *= 80;
                                                    break;
                                                default:
                                                    throw "unrecognized mouse wheel delta mode: " + e.deltaMode;
                                            }
                                            break;
                                        default:
                                            throw "unrecognized mouse wheel event: " + e.type;
                                    }
                                    return t;
                                },
                                mouseX: 0,
                                mouseY: 0,
                                mouseMovementX: 0,
                                mouseMovementY: 0,
                                touches: {},
                                lastTouches: {},
                                calculateMouseEvent: function (e) {
                                    if (ue.pointerLock)
                                        "mousemove" != e.type && "mozMovementX" in e ? (ue.mouseMovementX = ue.mouseMovementY = 0) : ((ue.mouseMovementX = ue.getMovementX(e)), (ue.mouseMovementY = ue.getMovementY(e))),
                                            "undefined" != typeof SDL ? ((ue.mouseX = SDL.mouseX + ue.mouseMovementX), (ue.mouseY = SDL.mouseY + ue.mouseMovementY)) : ((ue.mouseX += ue.mouseMovementX), (ue.mouseY += ue.mouseMovementY));
                                    else {
                                        var t = r.canvas.getBoundingClientRect(),
                                            n = r.canvas.width,
                                            i = r.canvas.height,
                                            o = void 0 !== window.scrollX ? window.scrollX : window.pageXOffset,
                                            a = void 0 !== window.scrollY ? window.scrollY : window.pageYOffset;
                                        if ("touchstart" === e.type || "touchend" === e.type || "touchmove" === e.type) {
                                            var s = e.touch;
                                            if (void 0 === s) return;
                                            var u = s.pageX - (o + t.left),
                                                c = s.pageY - (a + t.top),
                                                l = { x: (u *= n / t.width), y: (c *= i / t.height) };
                                            if ("touchstart" === e.type) (ue.lastTouches[s.identifier] = l), (ue.touches[s.identifier] = l);
                                            else if ("touchend" === e.type || "touchmove" === e.type) {
                                                var d = ue.touches[s.identifier];
                                                d || (d = l), (ue.lastTouches[s.identifier] = d), (ue.touches[s.identifier] = l);
                                            }
                                            return;
                                        }
                                        var f = e.pageX - (o + t.left),
                                            h = e.pageY - (a + t.top);
                                        (h *= i / t.height), (ue.mouseMovementX = (f *= n / t.width) - ue.mouseX), (ue.mouseMovementY = h - ue.mouseY), (ue.mouseX = f), (ue.mouseY = h);
                                    }
                                },
                                asyncLoad: function (e, t, n, r) {
                                    var i = r ? "" : "al " + e;
                                    l(
                                        e,
                                        function (n) {
                                            k(n, 'Loading data file "' + e + '" failed (no arrayBuffer).'), t(new Uint8Array(n)), i && $();
                                        },
                                        function (t) {
                                            if (!n) throw 'Loading data file "' + e + '" failed.';
                                            n();
                                        }
                                    ),
                                        i && J();
                                },
                                resizeListeners: [],
                                updateResizeListeners: function () {
                                    var e = r.canvas;
                                    ue.resizeListeners.forEach(function (t) {
                                        t(e.width, e.height);
                                    });
                                },
                                setCanvasSize: function (e, t, n) {
                                    ue.updateCanvasDimensions(r.canvas, e, t), n || ue.updateResizeListeners();
                                },
                                windowedWidth: 0,
                                windowedHeight: 0,
                                setFullscreenCanvasSize: function () {
                                    if ("undefined" != typeof SDL) {
                                        var e = D[SDL.screen >> 2];
                                        L[SDL.screen >> 2] = e |= 8388608;
                                    }
                                    ue.updateCanvasDimensions(r.canvas), ue.updateResizeListeners();
                                },
                                setWindowedCanvasSize: function () {
                                    if ("undefined" != typeof SDL) {
                                        var e = D[SDL.screen >> 2];
                                        L[SDL.screen >> 2] = e &= -8388609;
                                    }
                                    ue.updateCanvasDimensions(r.canvas), ue.updateResizeListeners();
                                },
                                updateCanvasDimensions: function (e, t, n) {
                                    t && n ? ((e.widthNative = t), (e.heightNative = n)) : ((t = e.widthNative), (n = e.heightNative));
                                    var i = t,
                                        o = n;
                                    if (
                                        (r.forcedAspectRatio && r.forcedAspectRatio > 0 && (i / o < r.forcedAspectRatio ? (i = Math.round(o * r.forcedAspectRatio)) : (o = Math.round(i / r.forcedAspectRatio))),
                                        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode &&
                                            "undefined" != typeof screen)
                                    ) {
                                        var a = Math.min(screen.width / i, screen.height / o);
                                        (i = Math.round(i * a)), (o = Math.round(o * a));
                                    }
                                    ue.resizeCanvas
                                        ? (e.width != i && (e.width = i), e.height != o && (e.height = o), void 0 !== e.style && (e.style.removeProperty("width"), e.style.removeProperty("height")))
                                        : (e.width != t && (e.width = t),
                                          e.height != n && (e.height = n),
                                          void 0 !== e.style &&
                                              (i != t || o != n
                                                  ? (e.style.setProperty("width", i + "px", "important"), e.style.setProperty("height", o + "px", "important"))
                                                  : (e.style.removeProperty("width"), e.style.removeProperty("height"))));
                                },
                                wgetRequests: {},
                                nextWgetRequestHandle: 0,
                                getNextWgetRequestHandle: function () {
                                    var e = ue.nextWgetRequestHandle;
                                    return ue.nextWgetRequestHandle++, e;
                                },
                            };
                            function ce(e) {
                                for (; e.length > 0; ) {
                                    var t = e.shift();
                                    if ("function" != typeof t) {
                                        var n = t.func;
                                        "number" == typeof n ? (void 0 === t.arg ? E.get(n)() : E.get(n)(t.arg)) : n(void 0 === t.arg ? null : t.arg);
                                    } else t(r);
                                }
                            }
                            function le(e) {
                                (this.excPtr = e),
                                    (this.ptr = e - 16),
                                    (this.set_type = function (e) {
                                        L[(this.ptr + 8) >> 2] = e;
                                    }),
                                    (this.get_type = function () {
                                        return L[(this.ptr + 8) >> 2];
                                    }),
                                    (this.set_destructor = function (e) {
                                        L[(this.ptr + 0) >> 2] = e;
                                    }),
                                    (this.get_destructor = function () {
                                        return L[(this.ptr + 0) >> 2];
                                    }),
                                    (this.set_refcount = function (e) {
                                        L[(this.ptr + 4) >> 2] = e;
                                    }),
                                    (this.set_caught = function (e) {
                                        x[(this.ptr + 12) >> 0] = e = e ? 1 : 0;
                                    }),
                                    (this.get_caught = function () {
                                        return 0 != x[(this.ptr + 12) >> 0];
                                    }),
                                    (this.set_rethrown = function (e) {
                                        x[(this.ptr + 13) >> 0] = e = e ? 1 : 0;
                                    }),
                                    (this.get_rethrown = function () {
                                        return 0 != x[(this.ptr + 13) >> 0];
                                    }),
                                    (this.init = function (e, t) {
                                        this.set_type(e), this.set_destructor(t), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1);
                                    }),
                                    (this.add_ref = function () {
                                        L[(this.ptr + 4) >> 2] = L[(this.ptr + 4) >> 2] + 1;
                                    }),
                                    (this.release_ref = function () {
                                        var e = L[(this.ptr + 4) >> 2];
                                        return (L[(this.ptr + 4) >> 2] = e - 1), 1 === e;
                                    });
                            }
                            function de(e) {
                                (this.free = function () {
                                    Be(this.ptr), (this.ptr = 0);
                                }),
                                    (this.set_base_ptr = function (e) {
                                        L[this.ptr >> 2] = e;
                                    }),
                                    (this.get_base_ptr = function () {
                                        return L[this.ptr >> 2];
                                    }),
                                    (this.set_adjusted_ptr = function (e) {
                                        L[(this.ptr + 4) >> 2] = e;
                                    }),
                                    (this.get_adjusted_ptr = function () {
                                        return L[(this.ptr + 4) >> 2];
                                    }),
                                    (this.get_exception_ptr = function () {
                                        if (Ze(this.get_exception_info().get_type())) return L[this.get_base_ptr() >> 2];
                                        var e = this.get_adjusted_ptr();
                                        return 0 !== e ? e : this.get_base_ptr();
                                    }),
                                    (this.get_exception_info = function () {
                                        return new le(this.get_base_ptr());
                                    }),
                                    void 0 === e ? ((this.ptr = Ie(8)), this.set_adjusted_ptr(0)) : (this.ptr = e);
                            }
                            var fe = [],
                                he = 0;
                            function me(e) {
                                return Be(new le(e).ptr);
                            }
                            function pe(e) {
                                return (L[Ne() >> 2] = e), e;
                            }
                            var ve = {
                                    splitPath: function (e) {
                                        return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
                                    },
                                    normalizeArray: function (e, t) {
                                        for (var n = 0, r = e.length - 1; r >= 0; r--) {
                                            var i = e[r];
                                            "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
                                        }
                                        if (t) for (; n; n--) e.unshift("..");
                                        return e;
                                    },
                                    normalize: function (e) {
                                        var t = "/" === e.charAt(0),
                                            n = "/" === e.substr(-1);
                                        return (
                                            (e = ve
                                                .normalizeArray(
                                                    e.split("/").filter(function (e) {
                                                        return !!e;
                                                    }),
                                                    !t
                                                )
                                                .join("/")) ||
                                                t ||
                                                (e = "."),
                                            e && n && (e += "/"),
                                            (t ? "/" : "") + e
                                        );
                                    },
                                    dirname: function (e) {
                                        var t = ve.splitPath(e),
                                            n = t[0],
                                            r = t[1];
                                        return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
                                    },
                                    basename: function (e) {
                                        if ("/" === e) return "/";
                                        var t = (e = (e = ve.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                                        return -1 === t ? e : e.substr(t + 1);
                                    },
                                    extname: function (e) {
                                        return ve.splitPath(e)[3];
                                    },
                                    join: function () {
                                        var e = Array.prototype.slice.call(arguments, 0);
                                        return ve.normalize(e.join("/"));
                                    },
                                    join2: function (e, t) {
                                        return ve.normalize(e + "/" + t);
                                    },
                                },
                                ge = {
                                    resolve: function () {
                                        for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
                                            var r = n >= 0 ? arguments[n] : we.cwd();
                                            if ("string" != typeof r) throw new TypeError("Arguments to path.resolve must be strings");
                                            if (!r) return "";
                                            (e = r + "/" + e), (t = "/" === r.charAt(0));
                                        }
                                        return (
                                            (t ? "/" : "") +
                                                (e = ve
                                                    .normalizeArray(
                                                        e.split("/").filter(function (e) {
                                                            return !!e;
                                                        }),
                                                        !t
                                                    )
                                                    .join("/")) || "."
                                        );
                                    },
                                    relative: function (e, t) {
                                        function n(e) {
                                            for (var t = 0; t < e.length && "" === e[t]; t++);
                                            for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                                            return t > n ? [] : e.slice(t, n - t + 1);
                                        }
                                        (e = ge.resolve(e).substr(1)), (t = ge.resolve(t).substr(1));
                                        for (var r = n(e.split("/")), i = n(t.split("/")), o = Math.min(r.length, i.length), a = o, s = 0; s < o; s++)
                                            if (r[s] !== i[s]) {
                                                a = s;
                                                break;
                                            }
                                        var u = [];
                                        for (s = a; s < r.length; s++) u.push("..");
                                        return (u = u.concat(i.slice(a))).join("/");
                                    },
                                },
                                ye = {
                                    ttys: [],
                                    init: function () {},
                                    shutdown: function () {},
                                    register: function (e, t) {
                                        (ye.ttys[e] = { input: [], output: [], ops: t }), we.registerDevice(e, ye.stream_ops);
                                    },
                                    stream_ops: {
                                        open: function (e) {
                                            var t = ye.ttys[e.node.rdev];
                                            if (!t) throw new we.ErrnoError(43);
                                            (e.tty = t), (e.seekable = !1);
                                        },
                                        close: function (e) {
                                            e.tty.ops.flush(e.tty);
                                        },
                                        flush: function (e) {
                                            e.tty.ops.flush(e.tty);
                                        },
                                        read: function (e, t, n, r, i) {
                                            if (!e.tty || !e.tty.ops.get_char) throw new we.ErrnoError(60);
                                            for (var o = 0, a = 0; a < r; a++) {
                                                var s;
                                                try {
                                                    s = e.tty.ops.get_char(e.tty);
                                                } catch (e) {
                                                    throw new we.ErrnoError(29);
                                                }
                                                if (void 0 === s && 0 === o) throw new we.ErrnoError(6);
                                                if (null == s) break;
                                                o++, (t[n + a] = s);
                                            }
                                            return o && (e.node.timestamp = Date.now()), o;
                                        },
                                        write: function (e, t, n, r, i) {
                                            if (!e.tty || !e.tty.ops.put_char) throw new we.ErrnoError(60);
                                            try {
                                                for (var o = 0; o < r; o++) e.tty.ops.put_char(e.tty, t[n + o]);
                                            } catch (e) {
                                                throw new we.ErrnoError(29);
                                            }
                                            return r && (e.node.timestamp = Date.now()), o;
                                        },
                                    },
                                    default_tty_ops: {
                                        get_char: function (e) {
                                            if (!e.input.length) {
                                                var t = null;
                                                if (
                                                    ("undefined" != typeof window && "function" == typeof window.prompt
                                                        ? null !== (t = window.prompt("Input: ")) && (t += "\n")
                                                        : "function" == typeof readline && null !== (t = readline()) && (t += "\n"),
                                                    !t)
                                                )
                                                    return null;
                                                e.input = Te(t, !0);
                                            }
                                            return e.input.shift();
                                        },
                                        put_char: function (e, t) {
                                            null === t || 10 === t ? (h(C(e.output, 0)), (e.output = [])) : 0 != t && e.output.push(t);
                                        },
                                        flush: function (e) {
                                            e.output && e.output.length > 0 && (h(C(e.output, 0)), (e.output = []));
                                        },
                                    },
                                    default_tty1_ops: {
                                        put_char: function (e, t) {
                                            null === t || 10 === t ? (m(C(e.output, 0)), (e.output = [])) : 0 != t && e.output.push(t);
                                        },
                                        flush: function (e) {
                                            e.output && e.output.length > 0 && (m(C(e.output, 0)), (e.output = []));
                                        },
                                    },
                                },
                                _e = {
                                    ops_table: null,
                                    mount: function (e) {
                                        return _e.createNode(null, "/", 16895, 0);
                                    },
                                    createNode: function (e, t, n, r) {
                                        if (we.isBlkdev(n) || we.isFIFO(n)) throw new we.ErrnoError(63);
                                        _e.ops_table ||
                                            (_e.ops_table = {
                                                dir: {
                                                    node: {
                                                        getattr: _e.node_ops.getattr,
                                                        setattr: _e.node_ops.setattr,
                                                        lookup: _e.node_ops.lookup,
                                                        mknod: _e.node_ops.mknod,
                                                        rename: _e.node_ops.rename,
                                                        unlink: _e.node_ops.unlink,
                                                        rmdir: _e.node_ops.rmdir,
                                                        readdir: _e.node_ops.readdir,
                                                        symlink: _e.node_ops.symlink,
                                                    },
                                                    stream: { llseek: _e.stream_ops.llseek },
                                                },
                                                file: {
                                                    node: { getattr: _e.node_ops.getattr, setattr: _e.node_ops.setattr },
                                                    stream: { llseek: _e.stream_ops.llseek, read: _e.stream_ops.read, write: _e.stream_ops.write, allocate: _e.stream_ops.allocate, mmap: _e.stream_ops.mmap, msync: _e.stream_ops.msync },
                                                },
                                                link: { node: { getattr: _e.node_ops.getattr, setattr: _e.node_ops.setattr, readlink: _e.node_ops.readlink }, stream: {} },
                                                chrdev: { node: { getattr: _e.node_ops.getattr, setattr: _e.node_ops.setattr }, stream: we.chrdev_stream_ops },
                                            });
                                        var i = we.createNode(e, t, n, r);
                                        return (
                                            we.isDir(i.mode)
                                                ? ((i.node_ops = _e.ops_table.dir.node), (i.stream_ops = _e.ops_table.dir.stream), (i.contents = {}))
                                                : we.isFile(i.mode)
                                                ? ((i.node_ops = _e.ops_table.file.node), (i.stream_ops = _e.ops_table.file.stream), (i.usedBytes = 0), (i.contents = null))
                                                : we.isLink(i.mode)
                                                ? ((i.node_ops = _e.ops_table.link.node), (i.stream_ops = _e.ops_table.link.stream))
                                                : we.isChrdev(i.mode) && ((i.node_ops = _e.ops_table.chrdev.node), (i.stream_ops = _e.ops_table.chrdev.stream)),
                                            (i.timestamp = Date.now()),
                                            e && (e.contents[t] = i),
                                            i
                                        );
                                    },
                                    getFileDataAsRegularArray: function (e) {
                                        if (e.contents && e.contents.subarray) {
                                            for (var t = [], n = 0; n < e.usedBytes; ++n) t.push(e.contents[n]);
                                            return t;
                                        }
                                        return e.contents;
                                    },
                                    getFileDataAsTypedArray: function (e) {
                                        return e.contents ? (e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents)) : new Uint8Array(0);
                                    },
                                    expandFileStorage: function (e, t) {
                                        var n = e.contents ? e.contents.length : 0;
                                        if (!(n >= t)) {
                                            (t = Math.max(t, (n * (n < 1048576 ? 2 : 1.125)) >>> 0)), 0 != n && (t = Math.max(t, 256));
                                            var r = e.contents;
                                            (e.contents = new Uint8Array(t)), e.usedBytes > 0 && e.contents.set(r.subarray(0, e.usedBytes), 0);
                                        }
                                    },
                                    resizeFileStorage: function (e, t) {
                                        if (e.usedBytes != t) {
                                            if (0 == t) return (e.contents = null), void (e.usedBytes = 0);
                                            if (!e.contents || e.contents.subarray) {
                                                var n = e.contents;
                                                return (e.contents = new Uint8Array(t)), n && e.contents.set(n.subarray(0, Math.min(t, e.usedBytes))), void (e.usedBytes = t);
                                            }
                                            if ((e.contents || (e.contents = []), e.contents.length > t)) e.contents.length = t;
                                            else for (; e.contents.length < t; ) e.contents.push(0);
                                            e.usedBytes = t;
                                        }
                                    },
                                    node_ops: {
                                        getattr: function (e) {
                                            var t = {};
                                            return (
                                                (t.dev = we.isChrdev(e.mode) ? e.id : 1),
                                                (t.ino = e.id),
                                                (t.mode = e.mode),
                                                (t.nlink = 1),
                                                (t.uid = 0),
                                                (t.gid = 0),
                                                (t.rdev = e.rdev),
                                                (t.size = we.isDir(e.mode) ? 4096 : we.isFile(e.mode) ? e.usedBytes : we.isLink(e.mode) ? e.link.length : 0),
                                                (t.atime = new Date(e.timestamp)),
                                                (t.mtime = new Date(e.timestamp)),
                                                (t.ctime = new Date(e.timestamp)),
                                                (t.blksize = 4096),
                                                (t.blocks = Math.ceil(t.size / t.blksize)),
                                                t
                                            );
                                        },
                                        setattr: function (e, t) {
                                            void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && _e.resizeFileStorage(e, t.size);
                                        },
                                        lookup: function (e, t) {
                                            throw we.genericErrors[44];
                                        },
                                        mknod: function (e, t, n, r) {
                                            return _e.createNode(e, t, n, r);
                                        },
                                        rename: function (e, t, n) {
                                            if (we.isDir(e.mode)) {
                                                var r;
                                                try {
                                                    r = we.lookupNode(t, n);
                                                } catch (e) {}
                                                if (r) for (var i in r.contents) throw new we.ErrnoError(55);
                                            }
                                            delete e.parent.contents[e.name], (e.name = n), (t.contents[n] = e), (e.parent = t);
                                        },
                                        unlink: function (e, t) {
                                            delete e.contents[t];
                                        },
                                        rmdir: function (e, t) {
                                            var n = we.lookupNode(e, t);
                                            for (var r in n.contents) throw new we.ErrnoError(55);
                                            delete e.contents[t];
                                        },
                                        readdir: function (e) {
                                            var t = [".", ".."];
                                            for (var n in e.contents) e.contents.hasOwnProperty(n) && t.push(n);
                                            return t;
                                        },
                                        symlink: function (e, t, n) {
                                            var r = _e.createNode(e, t, 41471, 0);
                                            return (r.link = n), r;
                                        },
                                        readlink: function (e) {
                                            if (!we.isLink(e.mode)) throw new we.ErrnoError(28);
                                            return e.link;
                                        },
                                    },
                                    stream_ops: {
                                        read: function (e, t, n, r, i) {
                                            var o = e.node.contents;
                                            if (i >= e.node.usedBytes) return 0;
                                            var a = Math.min(e.node.usedBytes - i, r);
                                            if (a > 8 && o.subarray) t.set(o.subarray(i, i + a), n);
                                            else for (var s = 0; s < a; s++) t[n + s] = o[i + s];
                                            return a;
                                        },
                                        write: function (e, t, n, r, i, o) {
                                            if ((t.buffer === x.buffer && (o = !1), !r)) return 0;
                                            var a = e.node;
                                            if (((a.timestamp = Date.now()), t.subarray && (!a.contents || a.contents.subarray))) {
                                                if (o) return (a.contents = t.subarray(n, n + r)), (a.usedBytes = r), r;
                                                if (0 === a.usedBytes && 0 === i) return (a.contents = t.slice(n, n + r)), (a.usedBytes = r), r;
                                                if (i + r <= a.usedBytes) return a.contents.set(t.subarray(n, n + r), i), r;
                                            }
                                            if ((_e.expandFileStorage(a, i + r), a.contents.subarray && t.subarray)) a.contents.set(t.subarray(n, n + r), i);
                                            else for (var s = 0; s < r; s++) a.contents[i + s] = t[n + s];
                                            return (a.usedBytes = Math.max(a.usedBytes, i + r)), r;
                                        },
                                        llseek: function (e, t, n) {
                                            var r = t;
                                            if ((1 === n ? (r += e.position) : 2 === n && we.isFile(e.node.mode) && (r += e.node.usedBytes), r < 0)) throw new we.ErrnoError(28);
                                            return r;
                                        },
                                        allocate: function (e, t, n) {
                                            _e.expandFileStorage(e.node, t + n), (e.node.usedBytes = Math.max(e.node.usedBytes, t + n));
                                        },
                                        mmap: function (e, t, n, r, i, o) {
                                            if ((k(0 === t), !we.isFile(e.node.mode))) throw new we.ErrnoError(43);
                                            var a,
                                                s,
                                                u = e.node.contents;
                                            if (2 & o || u.buffer !== P) {
                                                if (((r > 0 || r + n < u.length) && (u = u.subarray ? u.subarray(r, r + n) : Array.prototype.slice.call(u, r, r + n)), (s = !0), !(a = we.mmapAlloc(n)))) throw new we.ErrnoError(48);
                                                x.set(u, a);
                                            } else (s = !1), (a = u.byteOffset);
                                            return { ptr: a, allocated: s };
                                        },
                                        msync: function (e, t, n, r, i) {
                                            if (!we.isFile(e.node.mode)) throw new we.ErrnoError(43);
                                            return 2 & i || _e.stream_ops.write(e, t, 0, r, n, !1), 0;
                                        },
                                    },
                                },
                                we = {
                                    root: null,
                                    mounts: [],
                                    devices: {},
                                    streams: [],
                                    nextInode: 1,
                                    nameTable: null,
                                    currentPath: "/",
                                    initialized: !1,
                                    ignorePermissions: !0,
                                    trackingDelegate: {},
                                    tracking: { openFlags: { READ: 1, WRITE: 2 } },
                                    ErrnoError: null,
                                    genericErrors: {},
                                    filesystems: null,
                                    syncFSRequests: 0,
                                    handleFSError: function (e) {
                                        if (!(e instanceof we.ErrnoError))
                                            throw (
                                                e +
                                                " : " +
                                                ((t = (function () {
                                                    var e = new Error();
                                                    if (!e.stack) {
                                                        try {
                                                            throw new Error();
                                                        } catch (t) {
                                                            e = t;
                                                        }
                                                        if (!e.stack) return "(no stack trace available)";
                                                    }
                                                    return e.stack.toString();
                                                })()),
                                                r.extraStackTrace && (t += "\n" + r.extraStackTrace()),
                                                t.replace(/\b_Z[\w\d_]+/g, function (e) {
                                                    return e == e ? e : e + " [" + e + "]";
                                                }))
                                            );
                                        var t;
                                        return pe(e.errno);
                                    },
                                    lookupPath: function (e, t) {
                                        if (((t = t || {}), !(e = ge.resolve(we.cwd(), e)))) return { path: "", node: null };
                                        var n = { follow_mount: !0, recurse_count: 0 };
                                        for (var r in n) void 0 === t[r] && (t[r] = n[r]);
                                        if (t.recurse_count > 8) throw new we.ErrnoError(32);
                                        for (
                                            var i = ve.normalizeArray(
                                                    e.split("/").filter(function (e) {
                                                        return !!e;
                                                    }),
                                                    !1
                                                ),
                                                o = we.root,
                                                a = "/",
                                                s = 0;
                                            s < i.length;
                                            s++
                                        ) {
                                            var u = s === i.length - 1;
                                            if (u && t.parent) break;
                                            if (((o = we.lookupNode(o, i[s])), (a = ve.join2(a, i[s])), we.isMountpoint(o) && (!u || (u && t.follow_mount)) && (o = o.mounted.root), !u || t.follow))
                                                for (var c = 0; we.isLink(o.mode); ) {
                                                    var l = we.readlink(a);
                                                    if (((a = ge.resolve(ve.dirname(a), l)), (o = we.lookupPath(a, { recurse_count: t.recurse_count }).node), c++ > 40)) throw new we.ErrnoError(32);
                                                }
                                        }
                                        return { path: a, node: o };
                                    },
                                    getPath: function (e) {
                                        for (var t; ; ) {
                                            if (we.isRoot(e)) {
                                                var n = e.mount.mountpoint;
                                                return t ? ("/" !== n[n.length - 1] ? n + "/" + t : n + t) : n;
                                            }
                                            (t = t ? e.name + "/" + t : e.name), (e = e.parent);
                                        }
                                    },
                                    hashName: function (e, t) {
                                        for (var n = 0, r = 0; r < t.length; r++) n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                                        return ((e + n) >>> 0) % we.nameTable.length;
                                    },
                                    hashAddNode: function (e) {
                                        var t = we.hashName(e.parent.id, e.name);
                                        (e.name_next = we.nameTable[t]), (we.nameTable[t] = e);
                                    },
                                    hashRemoveNode: function (e) {
                                        var t = we.hashName(e.parent.id, e.name);
                                        if (we.nameTable[t] === e) we.nameTable[t] = e.name_next;
                                        else
                                            for (var n = we.nameTable[t]; n; ) {
                                                if (n.name_next === e) {
                                                    n.name_next = e.name_next;
                                                    break;
                                                }
                                                n = n.name_next;
                                            }
                                    },
                                    lookupNode: function (e, t) {
                                        var n = we.mayLookup(e);
                                        if (n) throw new we.ErrnoError(n, e);
                                        for (var r = we.hashName(e.id, t), i = we.nameTable[r]; i; i = i.name_next) if (i.parent.id === e.id && i.name === t) return i;
                                        return we.lookup(e, t);
                                    },
                                    createNode: function (e, t, n, r) {
                                        var i = new we.FSNode(e, t, n, r);
                                        return we.hashAddNode(i), i;
                                    },
                                    destroyNode: function (e) {
                                        we.hashRemoveNode(e);
                                    },
                                    isRoot: function (e) {
                                        return e === e.parent;
                                    },
                                    isMountpoint: function (e) {
                                        return !!e.mounted;
                                    },
                                    isFile: function (e) {
                                        return 32768 == (61440 & e);
                                    },
                                    isDir: function (e) {
                                        return 16384 == (61440 & e);
                                    },
                                    isLink: function (e) {
                                        return 40960 == (61440 & e);
                                    },
                                    isChrdev: function (e) {
                                        return 8192 == (61440 & e);
                                    },
                                    isBlkdev: function (e) {
                                        return 24576 == (61440 & e);
                                    },
                                    isFIFO: function (e) {
                                        return 4096 == (61440 & e);
                                    },
                                    isSocket: function (e) {
                                        return 49152 == (49152 & e);
                                    },
                                    flagModes: { r: 0, rs: 1052672, "r+": 2, w: 577, wx: 705, xw: 705, "w+": 578, "wx+": 706, "xw+": 706, a: 1089, ax: 1217, xa: 1217, "a+": 1090, "ax+": 1218, "xa+": 1218 },
                                    modeStringToFlags: function (e) {
                                        var t = we.flagModes[e];
                                        if (void 0 === t) throw new Error("Unknown file open mode: " + e);
                                        return t;
                                    },
                                    flagsToPermissionString: function (e) {
                                        var t = ["r", "w", "rw"][3 & e];
                                        return 512 & e && (t += "w"), t;
                                    },
                                    nodePermissions: function (e, t) {
                                        return we.ignorePermissions || ((-1 === t.indexOf("r") || 292 & e.mode) && (-1 === t.indexOf("w") || 146 & e.mode) && (-1 === t.indexOf("x") || 73 & e.mode)) ? 0 : 2;
                                    },
                                    mayLookup: function (e) {
                                        return we.nodePermissions(e, "x") || (e.node_ops.lookup ? 0 : 2);
                                    },
                                    mayCreate: function (e, t) {
                                        try {
                                            return we.lookupNode(e, t), 20;
                                        } catch (e) {}
                                        return we.nodePermissions(e, "wx");
                                    },
                                    mayDelete: function (e, t, n) {
                                        var r;
                                        try {
                                            r = we.lookupNode(e, t);
                                        } catch (e) {
                                            return e.errno;
                                        }
                                        var i = we.nodePermissions(e, "wx");
                                        if (i) return i;
                                        if (n) {
                                            if (!we.isDir(r.mode)) return 54;
                                            if (we.isRoot(r) || we.getPath(r) === we.cwd()) return 10;
                                        } else if (we.isDir(r.mode)) return 31;
                                        return 0;
                                    },
                                    mayOpen: function (e, t) {
                                        return e ? (we.isLink(e.mode) ? 32 : we.isDir(e.mode) && ("r" !== we.flagsToPermissionString(t) || 512 & t) ? 31 : we.nodePermissions(e, we.flagsToPermissionString(t))) : 44;
                                    },
                                    MAX_OPEN_FDS: 4096,
                                    nextfd: function (e, t) {
                                        t = t || we.MAX_OPEN_FDS;
                                        for (var n = (e = e || 0); n <= t; n++) if (!we.streams[n]) return n;
                                        throw new we.ErrnoError(33);
                                    },
                                    getStream: function (e) {
                                        return we.streams[e];
                                    },
                                    createStream: function (e, t, n) {
                                        we.FSStream ||
                                            ((we.FSStream = function () {}),
                                            (we.FSStream.prototype = {
                                                object: {
                                                    get: function () {
                                                        return this.node;
                                                    },
                                                    set: function (e) {
                                                        this.node = e;
                                                    },
                                                },
                                                isRead: {
                                                    get: function () {
                                                        return 1 != (2097155 & this.flags);
                                                    },
                                                },
                                                isWrite: {
                                                    get: function () {
                                                        return 0 != (2097155 & this.flags);
                                                    },
                                                },
                                                isAppend: {
                                                    get: function () {
                                                        return 1024 & this.flags;
                                                    },
                                                },
                                            }));
                                        var r = new we.FSStream();
                                        for (var i in e) r[i] = e[i];
                                        e = r;
                                        var o = we.nextfd(t, n);
                                        return (e.fd = o), (we.streams[o] = e), e;
                                    },
                                    closeStream: function (e) {
                                        we.streams[e] = null;
                                    },
                                    chrdev_stream_ops: {
                                        open: function (e) {
                                            var t = we.getDevice(e.node.rdev);
                                            (e.stream_ops = t.stream_ops), e.stream_ops.open && e.stream_ops.open(e);
                                        },
                                        llseek: function () {
                                            throw new we.ErrnoError(70);
                                        },
                                    },
                                    major: function (e) {
                                        return e >> 8;
                                    },
                                    minor: function (e) {
                                        return 255 & e;
                                    },
                                    makedev: function (e, t) {
                                        return (e << 8) | t;
                                    },
                                    registerDevice: function (e, t) {
                                        we.devices[e] = { stream_ops: t };
                                    },
                                    getDevice: function (e) {
                                        return we.devices[e];
                                    },
                                    getMounts: function (e) {
                                        for (var t = [], n = [e]; n.length; ) {
                                            var r = n.pop();
                                            t.push(r), n.push.apply(n, r.mounts);
                                        }
                                        return t;
                                    },
                                    syncfs: function (e, t) {
                                        "function" == typeof e && ((t = e), (e = !1)),
                                            we.syncFSRequests++,
                                            we.syncFSRequests > 1 && m("warning: " + we.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                                        var n = we.getMounts(we.root.mount),
                                            r = 0;
                                        function i(e) {
                                            return we.syncFSRequests--, t(e);
                                        }
                                        function o(e) {
                                            if (e) return o.errored ? void 0 : ((o.errored = !0), i(e));
                                            ++r >= n.length && i(null);
                                        }
                                        n.forEach(function (t) {
                                            if (!t.type.syncfs) return o(null);
                                            t.type.syncfs(t, e, o);
                                        });
                                    },
                                    mount: function (e, t, n) {
                                        var r,
                                            i = "/" === n,
                                            o = !n;
                                        if (i && we.root) throw new we.ErrnoError(10);
                                        if (!i && !o) {
                                            var a = we.lookupPath(n, { follow_mount: !1 });
                                            if (((n = a.path), we.isMountpoint((r = a.node)))) throw new we.ErrnoError(10);
                                            if (!we.isDir(r.mode)) throw new we.ErrnoError(54);
                                        }
                                        var s = { type: e, opts: t, mountpoint: n, mounts: [] },
                                            u = e.mount(s);
                                        return (u.mount = s), (s.root = u), i ? (we.root = u) : r && ((r.mounted = s), r.mount && r.mount.mounts.push(s)), u;
                                    },
                                    unmount: function (e) {
                                        var t = we.lookupPath(e, { follow_mount: !1 });
                                        if (!we.isMountpoint(t.node)) throw new we.ErrnoError(28);
                                        var n = t.node,
                                            r = n.mounted,
                                            i = we.getMounts(r);
                                        Object.keys(we.nameTable).forEach(function (e) {
                                            for (var t = we.nameTable[e]; t; ) {
                                                var n = t.name_next;
                                                -1 !== i.indexOf(t.mount) && we.destroyNode(t), (t = n);
                                            }
                                        }),
                                            (n.mounted = null);
                                        var o = n.mount.mounts.indexOf(r);
                                        n.mount.mounts.splice(o, 1);
                                    },
                                    lookup: function (e, t) {
                                        return e.node_ops.lookup(e, t);
                                    },
                                    mknod: function (e, t, n) {
                                        var r = we.lookupPath(e, { parent: !0 }).node,
                                            i = ve.basename(e);
                                        if (!i || "." === i || ".." === i) throw new we.ErrnoError(28);
                                        var o = we.mayCreate(r, i);
                                        if (o) throw new we.ErrnoError(o);
                                        if (!r.node_ops.mknod) throw new we.ErrnoError(63);
                                        return r.node_ops.mknod(r, i, t, n);
                                    },
                                    create: function (e, t) {
                                        return (t = void 0 !== t ? t : 438), (t &= 4095), we.mknod(e, (t |= 32768), 0);
                                    },
                                    mkdir: function (e, t) {
                                        return (t = void 0 !== t ? t : 511), (t &= 1023), we.mknod(e, (t |= 16384), 0);
                                    },
                                    mkdirTree: function (e, t) {
                                        for (var n = e.split("/"), r = "", i = 0; i < n.length; ++i)
                                            if (n[i]) {
                                                r += "/" + n[i];
                                                try {
                                                    we.mkdir(r, t);
                                                } catch (e) {
                                                    if (20 != e.errno) throw e;
                                                }
                                            }
                                    },
                                    mkdev: function (e, t, n) {
                                        return void 0 === n && ((n = t), (t = 438)), we.mknod(e, (t |= 8192), n);
                                    },
                                    symlink: function (e, t) {
                                        if (!ge.resolve(e)) throw new we.ErrnoError(44);
                                        var n = we.lookupPath(t, { parent: !0 }).node;
                                        if (!n) throw new we.ErrnoError(44);
                                        var r = ve.basename(t),
                                            i = we.mayCreate(n, r);
                                        if (i) throw new we.ErrnoError(i);
                                        if (!n.node_ops.symlink) throw new we.ErrnoError(63);
                                        return n.node_ops.symlink(n, r, e);
                                    },
                                    rename: function (e, t) {
                                        var n,
                                            r,
                                            i = ve.dirname(e),
                                            o = ve.dirname(t),
                                            a = ve.basename(e),
                                            s = ve.basename(t);
                                        if (((n = we.lookupPath(e, { parent: !0 }).node), (r = we.lookupPath(t, { parent: !0 }).node), !n || !r)) throw new we.ErrnoError(44);
                                        if (n.mount !== r.mount) throw new we.ErrnoError(75);
                                        var u,
                                            c = we.lookupNode(n, a),
                                            l = ge.relative(e, o);
                                        if ("." !== l.charAt(0)) throw new we.ErrnoError(28);
                                        if ("." !== (l = ge.relative(t, i)).charAt(0)) throw new we.ErrnoError(55);
                                        try {
                                            u = we.lookupNode(r, s);
                                        } catch (e) {}
                                        if (c !== u) {
                                            var d = we.isDir(c.mode),
                                                f = we.mayDelete(n, a, d);
                                            if (f) throw new we.ErrnoError(f);
                                            if ((f = u ? we.mayDelete(r, s, d) : we.mayCreate(r, s))) throw new we.ErrnoError(f);
                                            if (!n.node_ops.rename) throw new we.ErrnoError(63);
                                            if (we.isMountpoint(c) || (u && we.isMountpoint(u))) throw new we.ErrnoError(10);
                                            if (r !== n && (f = we.nodePermissions(n, "w"))) throw new we.ErrnoError(f);
                                            we.hashRemoveNode(c);
                                            try {
                                                n.node_ops.rename(c, r, s);
                                            } catch (e) {
                                                throw e;
                                            } finally {
                                                we.hashAddNode(c);
                                            }
                                        }
                                    },
                                    rmdir: function (e) {
                                        var t = we.lookupPath(e, { parent: !0 }).node,
                                            n = ve.basename(e),
                                            r = we.lookupNode(t, n),
                                            i = we.mayDelete(t, n, !0);
                                        if (i) throw new we.ErrnoError(i);
                                        if (!t.node_ops.rmdir) throw new we.ErrnoError(63);
                                        if (we.isMountpoint(r)) throw new we.ErrnoError(10);
                                        t.node_ops.rmdir(t, n), we.destroyNode(r);
                                    },
                                    readdir: function (e) {
                                        var t = we.lookupPath(e, { follow: !0 }).node;
                                        if (!t.node_ops.readdir) throw new we.ErrnoError(54);
                                        return t.node_ops.readdir(t);
                                    },
                                    unlink: function (e) {
                                        var t = we.lookupPath(e, { parent: !0 }).node,
                                            n = ve.basename(e),
                                            r = we.lookupNode(t, n),
                                            i = we.mayDelete(t, n, !1);
                                        if (i) throw new we.ErrnoError(i);
                                        if (!t.node_ops.unlink) throw new we.ErrnoError(63);
                                        if (we.isMountpoint(r)) throw new we.ErrnoError(10);
                                        t.node_ops.unlink(t, n), we.destroyNode(r);
                                    },
                                    readlink: function (e) {
                                        var t = we.lookupPath(e).node;
                                        if (!t) throw new we.ErrnoError(44);
                                        if (!t.node_ops.readlink) throw new we.ErrnoError(28);
                                        return ge.resolve(we.getPath(t.parent), t.node_ops.readlink(t));
                                    },
                                    stat: function (e, t) {
                                        var n = we.lookupPath(e, { follow: !t }).node;
                                        if (!n) throw new we.ErrnoError(44);
                                        if (!n.node_ops.getattr) throw new we.ErrnoError(63);
                                        return n.node_ops.getattr(n);
                                    },
                                    lstat: function (e) {
                                        return we.stat(e, !0);
                                    },
                                    chmod: function (e, t, n) {
                                        var r;
                                        if (!(r = "string" == typeof e ? we.lookupPath(e, { follow: !n }).node : e).node_ops.setattr) throw new we.ErrnoError(63);
                                        r.node_ops.setattr(r, { mode: (4095 & t) | (-4096 & r.mode), timestamp: Date.now() });
                                    },
                                    lchmod: function (e, t) {
                                        we.chmod(e, t, !0);
                                    },
                                    fchmod: function (e, t) {
                                        var n = we.getStream(e);
                                        if (!n) throw new we.ErrnoError(8);
                                        we.chmod(n.node, t);
                                    },
                                    chown: function (e, t, n, r) {
                                        var i;
                                        if (!(i = "string" == typeof e ? we.lookupPath(e, { follow: !r }).node : e).node_ops.setattr) throw new we.ErrnoError(63);
                                        i.node_ops.setattr(i, { timestamp: Date.now() });
                                    },
                                    lchown: function (e, t, n) {
                                        we.chown(e, t, n, !0);
                                    },
                                    fchown: function (e, t, n) {
                                        var r = we.getStream(e);
                                        if (!r) throw new we.ErrnoError(8);
                                        we.chown(r.node, t, n);
                                    },
                                    truncate: function (e, t) {
                                        if (t < 0) throw new we.ErrnoError(28);
                                        var n;
                                        if (!(n = "string" == typeof e ? we.lookupPath(e, { follow: !0 }).node : e).node_ops.setattr) throw new we.ErrnoError(63);
                                        if (we.isDir(n.mode)) throw new we.ErrnoError(31);
                                        if (!we.isFile(n.mode)) throw new we.ErrnoError(28);
                                        var r = we.nodePermissions(n, "w");
                                        if (r) throw new we.ErrnoError(r);
                                        n.node_ops.setattr(n, { size: t, timestamp: Date.now() });
                                    },
                                    ftruncate: function (e, t) {
                                        var n = we.getStream(e);
                                        if (!n) throw new we.ErrnoError(8);
                                        if (0 == (2097155 & n.flags)) throw new we.ErrnoError(28);
                                        we.truncate(n.node, t);
                                    },
                                    utime: function (e, t, n) {
                                        var r = we.lookupPath(e, { follow: !0 }).node;
                                        r.node_ops.setattr(r, { timestamp: Math.max(t, n) });
                                    },
                                    open: function (e, t, n, i, o) {
                                        if ("" === e) throw new we.ErrnoError(44);
                                        var a;
                                        if (((n = void 0 === n ? 438 : n), (n = 64 & (t = "string" == typeof t ? we.modeStringToFlags(t) : t) ? (4095 & n) | 32768 : 0), "object" == typeof e)) a = e;
                                        else {
                                            e = ve.normalize(e);
                                            try {
                                                a = we.lookupPath(e, { follow: !(131072 & t) }).node;
                                            } catch (e) {}
                                        }
                                        var s = !1;
                                        if (64 & t)
                                            if (a) {
                                                if (128 & t) throw new we.ErrnoError(20);
                                            } else (a = we.mknod(e, n, 0)), (s = !0);
                                        if (!a) throw new we.ErrnoError(44);
                                        if ((we.isChrdev(a.mode) && (t &= -513), 65536 & t && !we.isDir(a.mode))) throw new we.ErrnoError(54);
                                        if (!s) {
                                            var u = we.mayOpen(a, t);
                                            if (u) throw new we.ErrnoError(u);
                                        }
                                        512 & t && we.truncate(a, 0), (t &= -131713);
                                        var c = we.createStream({ node: a, path: we.getPath(a), flags: t, seekable: !0, position: 0, stream_ops: a.stream_ops, ungotten: [], error: !1 }, i, o);
                                        return (
                                            c.stream_ops.open && c.stream_ops.open(c),
                                            !r.logReadFiles || 1 & t || (we.readFiles || (we.readFiles = {}), e in we.readFiles || ((we.readFiles[e] = 1), m("FS.trackingDelegate error on read file: " + e))),
                                            c
                                        );
                                    },
                                    close: function (e) {
                                        if (we.isClosed(e)) throw new we.ErrnoError(8);
                                        e.getdents && (e.getdents = null);
                                        try {
                                            e.stream_ops.close && e.stream_ops.close(e);
                                        } catch (e) {
                                            throw e;
                                        } finally {
                                            we.closeStream(e.fd);
                                        }
                                        e.fd = null;
                                    },
                                    isClosed: function (e) {
                                        return null === e.fd;
                                    },
                                    llseek: function (e, t, n) {
                                        if (we.isClosed(e)) throw new we.ErrnoError(8);
                                        if (!e.seekable || !e.stream_ops.llseek) throw new we.ErrnoError(70);
                                        if (0 != n && 1 != n && 2 != n) throw new we.ErrnoError(28);
                                        return (e.position = e.stream_ops.llseek(e, t, n)), (e.ungotten = []), e.position;
                                    },
                                    read: function (e, t, n, r, i) {
                                        if (r < 0 || i < 0) throw new we.ErrnoError(28);
                                        if (we.isClosed(e)) throw new we.ErrnoError(8);
                                        if (1 == (2097155 & e.flags)) throw new we.ErrnoError(8);
                                        if (we.isDir(e.node.mode)) throw new we.ErrnoError(31);
                                        if (!e.stream_ops.read) throw new we.ErrnoError(28);
                                        var o = void 0 !== i;
                                        if (o) {
                                            if (!e.seekable) throw new we.ErrnoError(70);
                                        } else i = e.position;
                                        var a = e.stream_ops.read(e, t, n, r, i);
                                        return o || (e.position += a), a;
                                    },
                                    write: function (e, t, n, r, i, o) {
                                        if (r < 0 || i < 0) throw new we.ErrnoError(28);
                                        if (we.isClosed(e)) throw new we.ErrnoError(8);
                                        if (0 == (2097155 & e.flags)) throw new we.ErrnoError(8);
                                        if (we.isDir(e.node.mode)) throw new we.ErrnoError(31);
                                        if (!e.stream_ops.write) throw new we.ErrnoError(28);
                                        e.seekable && 1024 & e.flags && we.llseek(e, 0, 2);
                                        var a = void 0 !== i;
                                        if (a) {
                                            if (!e.seekable) throw new we.ErrnoError(70);
                                        } else i = e.position;
                                        var s = e.stream_ops.write(e, t, n, r, i, o);
                                        a || (e.position += s);
                                        try {
                                            e.path && we.trackingDelegate.onWriteToFile && we.trackingDelegate.onWriteToFile(e.path);
                                        } catch (t) {
                                            m("FS.trackingDelegate['onWriteToFile']('" + e.path + "') threw an exception: " + t.message);
                                        }
                                        return s;
                                    },
                                    allocate: function (e, t, n) {
                                        if (we.isClosed(e)) throw new we.ErrnoError(8);
                                        if (t < 0 || n <= 0) throw new we.ErrnoError(28);
                                        if (0 == (2097155 & e.flags)) throw new we.ErrnoError(8);
                                        if (!we.isFile(e.node.mode) && !we.isDir(e.node.mode)) throw new we.ErrnoError(43);
                                        if (!e.stream_ops.allocate) throw new we.ErrnoError(138);
                                        e.stream_ops.allocate(e, t, n);
                                    },
                                    mmap: function (e, t, n, r, i, o) {
                                        if (0 != (2 & i) && 0 == (2 & o) && 2 != (2097155 & e.flags)) throw new we.ErrnoError(2);
                                        if (1 == (2097155 & e.flags)) throw new we.ErrnoError(2);
                                        if (!e.stream_ops.mmap) throw new we.ErrnoError(43);
                                        return e.stream_ops.mmap(e, t, n, r, i, o);
                                    },
                                    msync: function (e, t, n, r, i) {
                                        return e && e.stream_ops.msync ? e.stream_ops.msync(e, t, n, r, i) : 0;
                                    },
                                    munmap: function (e) {
                                        return 0;
                                    },
                                    ioctl: function (e, t, n) {
                                        if (!e.stream_ops.ioctl) throw new we.ErrnoError(59);
                                        return e.stream_ops.ioctl(e, t, n);
                                    },
                                    readFile: function (e, t) {
                                        if ((((t = t || {}).flags = t.flags || "r"), (t.encoding = t.encoding || "binary"), "utf8" !== t.encoding && "binary" !== t.encoding)) throw new Error('Invalid encoding type "' + t.encoding + '"');
                                        var n,
                                            r = we.open(e, t.flags),
                                            i = we.stat(e).size,
                                            o = new Uint8Array(i);
                                        return we.read(r, o, 0, i, 0), "utf8" === t.encoding ? (n = C(o, 0)) : "binary" === t.encoding && (n = o), we.close(r), n;
                                    },
                                    writeFile: function (e, t, n) {
                                        (n = n || {}).flags = n.flags || "w";
                                        var r = we.open(e, n.flags, n.mode);
                                        if ("string" == typeof t) {
                                            var i = new Uint8Array(B(t) + 1),
                                                o = j(t, i, 0, i.length);
                                            we.write(r, i, 0, o, void 0, n.canOwn);
                                        } else {
                                            if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                                            we.write(r, t, 0, t.byteLength, void 0, n.canOwn);
                                        }
                                        we.close(r);
                                    },
                                    cwd: function () {
                                        return we.currentPath;
                                    },
                                    chdir: function (e) {
                                        var t = we.lookupPath(e, { follow: !0 });
                                        if (null === t.node) throw new we.ErrnoError(44);
                                        if (!we.isDir(t.node.mode)) throw new we.ErrnoError(54);
                                        var n = we.nodePermissions(t.node, "x");
                                        if (n) throw new we.ErrnoError(n);
                                        we.currentPath = t.path;
                                    },
                                    createDefaultDirectories: function () {
                                        we.mkdir("/tmp"), we.mkdir("/home"), we.mkdir("/home/web_user");
                                    },
                                    createDefaultDevices: function () {
                                        var e;
                                        if (
                                            (we.mkdir("/dev"),
                                            we.registerDevice(we.makedev(1, 3), {
                                                read: function () {
                                                    return 0;
                                                },
                                                write: function (e, t, n, r, i) {
                                                    return r;
                                                },
                                            }),
                                            we.mkdev("/dev/null", we.makedev(1, 3)),
                                            ye.register(we.makedev(5, 0), ye.default_tty_ops),
                                            ye.register(we.makedev(6, 0), ye.default_tty1_ops),
                                            we.mkdev("/dev/tty", we.makedev(5, 0)),
                                            we.mkdev("/dev/tty1", we.makedev(6, 0)),
                                            "object" == typeof crypto && "function" == typeof crypto.getRandomValues)
                                        ) {
                                            var t = new Uint8Array(1);
                                            e = function () {
                                                return crypto.getRandomValues(t), t[0];
                                            };
                                        }
                                        e ||
                                            (e = function () {
                                                ee("random_device");
                                            }),
                                            we.createDevice("/dev", "random", e),
                                            we.createDevice("/dev", "urandom", e),
                                            we.mkdir("/dev/shm"),
                                            we.mkdir("/dev/shm/tmp");
                                    },
                                    createSpecialDirectories: function () {
                                        we.mkdir("/proc"),
                                            we.mkdir("/proc/self"),
                                            we.mkdir("/proc/self/fd"),
                                            we.mount(
                                                {
                                                    mount: function () {
                                                        var e = we.createNode("/proc/self", "fd", 16895, 73);
                                                        return (
                                                            (e.node_ops = {
                                                                lookup: function (e, t) {
                                                                    var n = we.getStream(+t);
                                                                    if (!n) throw new we.ErrnoError(8);
                                                                    var r = {
                                                                        parent: null,
                                                                        mount: { mountpoint: "fake" },
                                                                        node_ops: {
                                                                            readlink: function () {
                                                                                return n.path;
                                                                            },
                                                                        },
                                                                    };
                                                                    return (r.parent = r), r;
                                                                },
                                                            }),
                                                            e
                                                        );
                                                    },
                                                },
                                                {},
                                                "/proc/self/fd"
                                            );
                                    },
                                    createStandardStreams: function () {
                                        r.stdin ? we.createDevice("/dev", "stdin", r.stdin) : we.symlink("/dev/tty", "/dev/stdin"),
                                            r.stdout ? we.createDevice("/dev", "stdout", null, r.stdout) : we.symlink("/dev/tty", "/dev/stdout"),
                                            r.stderr ? we.createDevice("/dev", "stderr", null, r.stderr) : we.symlink("/dev/tty1", "/dev/stderr"),
                                            we.open("/dev/stdin", "r"),
                                            we.open("/dev/stdout", "w"),
                                            we.open("/dev/stderr", "w");
                                    },
                                    ensureErrnoError: function () {
                                        we.ErrnoError ||
                                            ((we.ErrnoError = function (e, t) {
                                                (this.node = t),
                                                    (this.setErrno = function (e) {
                                                        this.errno = e;
                                                    }),
                                                    this.setErrno(e),
                                                    (this.message = "FS error");
                                            }),
                                            (we.ErrnoError.prototype = new Error()),
                                            (we.ErrnoError.prototype.constructor = we.ErrnoError),
                                            [44].forEach(function (e) {
                                                (we.genericErrors[e] = new we.ErrnoError(e)), (we.genericErrors[e].stack = "<generic error, no stack>");
                                            }));
                                    },
                                    staticInit: function () {
                                        we.ensureErrnoError(),
                                            (we.nameTable = new Array(4096)),
                                            we.mount(_e, {}, "/"),
                                            we.createDefaultDirectories(),
                                            we.createDefaultDevices(),
                                            we.createSpecialDirectories(),
                                            (we.filesystems = { MEMFS: _e });
                                    },
                                    init: function (e, t, n) {
                                        (we.init.initialized = !0), we.ensureErrnoError(), (r.stdin = e || r.stdin), (r.stdout = t || r.stdout), (r.stderr = n || r.stderr), we.createStandardStreams();
                                    },
                                    quit: function () {
                                        we.init.initialized = !1;
                                        var e = r._fflush;
                                        e && e(0);
                                        for (var t = 0; t < we.streams.length; t++) {
                                            var n = we.streams[t];
                                            n && we.close(n);
                                        }
                                    },
                                    getMode: function (e, t) {
                                        var n = 0;
                                        return e && (n |= 365), t && (n |= 146), n;
                                    },
                                    joinPath: function (e, t) {
                                        var n = ve.join.apply(null, e);
                                        return t && "/" == n[0] && (n = n.substr(1)), n;
                                    },
                                    absolutePath: function (e, t) {
                                        return ge.resolve(t, e);
                                    },
                                    standardizePath: function (e) {
                                        return ve.normalize(e);
                                    },
                                    findObject: function (e, t) {
                                        var n = we.analyzePath(e, t);
                                        return n.exists ? n.object : (pe(n.error), null);
                                    },
                                    analyzePath: function (e, t) {
                                        try {
                                            e = (r = we.lookupPath(e, { follow: !t })).path;
                                        } catch (e) {}
                                        var n = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
                                        try {
                                            var r = we.lookupPath(e, { parent: !0 });
                                            (n.parentExists = !0),
                                                (n.parentPath = r.path),
                                                (n.parentObject = r.node),
                                                (n.name = ve.basename(e)),
                                                (r = we.lookupPath(e, { follow: !t })),
                                                (n.exists = !0),
                                                (n.path = r.path),
                                                (n.object = r.node),
                                                (n.name = r.node.name),
                                                (n.isRoot = "/" === r.path);
                                        } catch (e) {
                                            n.error = e.errno;
                                        }
                                        return n;
                                    },
                                    createFolder: function (e, t, n, r) {
                                        var i = ve.join2("string" == typeof e ? e : we.getPath(e), t),
                                            o = we.getMode(n, r);
                                        return we.mkdir(i, o);
                                    },
                                    createPath: function (e, t, n, r) {
                                        e = "string" == typeof e ? e : we.getPath(e);
                                        for (var i = t.split("/").reverse(); i.length; ) {
                                            var o = i.pop();
                                            if (o) {
                                                var a = ve.join2(e, o);
                                                try {
                                                    we.mkdir(a);
                                                } catch (e) {}
                                                e = a;
                                            }
                                        }
                                        return a;
                                    },
                                    createFile: function (e, t, n, r, i) {
                                        var o = ve.join2("string" == typeof e ? e : we.getPath(e), t),
                                            a = we.getMode(r, i);
                                        return we.create(o, a);
                                    },
                                    createDataFile: function (e, t, n, r, i, o) {
                                        var a = t ? ve.join2("string" == typeof e ? e : we.getPath(e), t) : e,
                                            s = we.getMode(r, i),
                                            u = we.create(a, s);
                                        if (n) {
                                            if ("string" == typeof n) {
                                                for (var c = new Array(n.length), l = 0, d = n.length; l < d; ++l) c[l] = n.charCodeAt(l);
                                                n = c;
                                            }
                                            we.chmod(u, 146 | s);
                                            var f = we.open(u, "w");
                                            we.write(f, n, 0, n.length, 0, o), we.close(f), we.chmod(u, s);
                                        }
                                        return u;
                                    },
                                    createDevice: function (e, t, n, r) {
                                        var i = ve.join2("string" == typeof e ? e : we.getPath(e), t),
                                            o = we.getMode(!!n, !!r);
                                        we.createDevice.major || (we.createDevice.major = 64);
                                        var a = we.makedev(we.createDevice.major++, 0);
                                        return (
                                            we.registerDevice(a, {
                                                open: function (e) {
                                                    e.seekable = !1;
                                                },
                                                close: function (e) {
                                                    r && r.buffer && r.buffer.length && r(10);
                                                },
                                                read: function (e, t, r, i, o) {
                                                    for (var a = 0, s = 0; s < i; s++) {
                                                        var u;
                                                        try {
                                                            u = n();
                                                        } catch (e) {
                                                            throw new we.ErrnoError(29);
                                                        }
                                                        if (void 0 === u && 0 === a) throw new we.ErrnoError(6);
                                                        if (null == u) break;
                                                        a++, (t[r + s] = u);
                                                    }
                                                    return a && (e.node.timestamp = Date.now()), a;
                                                },
                                                write: function (e, t, n, i, o) {
                                                    for (var a = 0; a < i; a++)
                                                        try {
                                                            r(t[n + a]);
                                                        } catch (e) {
                                                            throw new we.ErrnoError(29);
                                                        }
                                                    return i && (e.node.timestamp = Date.now()), a;
                                                },
                                            }),
                                            we.mkdev(i, o, a)
                                        );
                                    },
                                    createLink: function (e, t, n, r, i) {
                                        var o = ve.join2("string" == typeof e ? e : we.getPath(e), t);
                                        return we.symlink(n, o);
                                    },
                                    forceLoadFile: function (e) {
                                        if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                                        var t = !0;
                                        if ("undefined" != typeof XMLHttpRequest)
                                            throw new Error(
                                                "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
                                            );
                                        if (!c) throw new Error("Cannot load without read() or XMLHttpRequest.");
                                        try {
                                            (e.contents = Te(c(e.url), !0)), (e.usedBytes = e.contents.length);
                                        } catch (e) {
                                            t = !1;
                                        }
                                        return t || pe(29), t;
                                    },
                                    createLazyFile: function (e, t, n, r, i) {
                                        function o() {
                                            (this.lengthKnown = !1), (this.chunks = []);
                                        }
                                        if (
                                            ((o.prototype.get = function (e) {
                                                if (!(e > this.length - 1 || e < 0)) {
                                                    var t = e % this.chunkSize;
                                                    return this.getter((e / this.chunkSize) | 0)[t];
                                                }
                                            }),
                                            (o.prototype.setDataGetter = function (e) {
                                                this.getter = e;
                                            }),
                                            (o.prototype.cacheLength = function () {
                                                var e = new XMLHttpRequest();
                                                if ((e.open("HEAD", n, !1), e.send(null), !((e.status >= 200 && e.status < 300) || 304 === e.status))) throw new Error("Couldn't load " + n + ". Status: " + e.status);
                                                var t,
                                                    r = Number(e.getResponseHeader("Content-length")),
                                                    i = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                                                    o = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
                                                    a = 1048576;
                                                i || (a = r);
                                                var s = this;
                                                s.setDataGetter(function (e) {
                                                    var t = e * a,
                                                        i = (e + 1) * a - 1;
                                                    if (
                                                        ((i = Math.min(i, r - 1)),
                                                        void 0 === s.chunks[e] &&
                                                            (s.chunks[e] = (function (e, t) {
                                                                if (e > t) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                                                                if (t > r - 1) throw new Error("only " + r + " bytes available! programmer error!");
                                                                var i = new XMLHttpRequest();
                                                                if (
                                                                    (i.open("GET", n, !1),
                                                                    r !== a && i.setRequestHeader("Range", "bytes=" + e + "-" + t),
                                                                    "undefined" != typeof Uint8Array && (i.responseType = "arraybuffer"),
                                                                    i.overrideMimeType && i.overrideMimeType("text/plain; charset=x-user-defined"),
                                                                    i.send(null),
                                                                    !((i.status >= 200 && i.status < 300) || 304 === i.status))
                                                                )
                                                                    throw new Error("Couldn't load " + n + ". Status: " + i.status);
                                                                return void 0 !== i.response ? new Uint8Array(i.response || []) : Te(i.responseText || "", !0);
                                                            })(t, i)),
                                                        void 0 === s.chunks[e])
                                                    )
                                                        throw new Error("doXHR failed!");
                                                    return s.chunks[e];
                                                }),
                                                    (!o && r) || ((a = r = 1), (r = this.getter(0).length), (a = r), h("LazyFiles on gzip forces download of the whole file when length is accessed")),
                                                    (this._length = r),
                                                    (this._chunkSize = a),
                                                    (this.lengthKnown = !0);
                                            }),
                                            "undefined" != typeof XMLHttpRequest)
                                        ) {
                                            if (!s) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                                            var a = new o();
                                            Object.defineProperties(a, {
                                                length: {
                                                    get: function () {
                                                        return this.lengthKnown || this.cacheLength(), this._length;
                                                    },
                                                },
                                                chunkSize: {
                                                    get: function () {
                                                        return this.lengthKnown || this.cacheLength(), this._chunkSize;
                                                    },
                                                },
                                            });
                                            var u = { isDevice: !1, contents: a };
                                        } else u = { isDevice: !1, url: n };
                                        var c = we.createFile(e, t, u, r, i);
                                        u.contents ? (c.contents = u.contents) : u.url && ((c.contents = null), (c.url = u.url)),
                                            Object.defineProperties(c, {
                                                usedBytes: {
                                                    get: function () {
                                                        return this.contents.length;
                                                    },
                                                },
                                            });
                                        var l = {};
                                        return (
                                            Object.keys(c.stream_ops).forEach(function (e) {
                                                var t = c.stream_ops[e];
                                                l[e] = function () {
                                                    if (!we.forceLoadFile(c)) throw new we.ErrnoError(29);
                                                    return t.apply(null, arguments);
                                                };
                                            }),
                                            (l.read = function (e, t, n, r, i) {
                                                if (!we.forceLoadFile(c)) throw new we.ErrnoError(29);
                                                var o = e.node.contents;
                                                if (i >= o.length) return 0;
                                                var a = Math.min(o.length - i, r);
                                                if (o.slice) for (var s = 0; s < a; s++) t[n + s] = o[i + s];
                                                else for (s = 0; s < a; s++) t[n + s] = o.get(i + s);
                                                return a;
                                            }),
                                            (c.stream_ops = l),
                                            c
                                        );
                                    },
                                    createPreloadedFile: function (e, t, n, i, o, a, s, u, c, l) {
                                        ue.init();
                                        var d = t ? ge.resolve(ve.join2(e, t)) : e;
                                        function f(n) {
                                            function f(n) {
                                                l && l(), u || we.createDataFile(e, t, n, i, o, c), a && a(), $();
                                            }
                                            var h = !1;
                                            r.preloadPlugins.forEach(function (e) {
                                                h ||
                                                    (e.canHandle(d) &&
                                                        (e.handle(n, d, f, function () {
                                                            s && s(), $();
                                                        }),
                                                        (h = !0)));
                                            }),
                                                h || f(n);
                                        }
                                        J(),
                                            "string" == typeof n
                                                ? ue.asyncLoad(
                                                      n,
                                                      function (e) {
                                                          f(e);
                                                      },
                                                      s
                                                  )
                                                : f(n);
                                    },
                                    indexedDB: function () {
                                        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                                    },
                                    DB_NAME: function () {
                                        return "EM_FS_" + window.location.pathname;
                                    },
                                    DB_VERSION: 20,
                                    DB_STORE_NAME: "FILE_DATA",
                                    saveFilesToDB: function (e, t, n) {
                                        (t = t || function () {}), (n = n || function () {});
                                        var r = we.indexedDB();
                                        try {
                                            var i = r.open(we.DB_NAME(), we.DB_VERSION);
                                        } catch (e) {
                                            return n(e);
                                        }
                                        (i.onupgradeneeded = function () {
                                            h("creating db"), i.result.createObjectStore(we.DB_STORE_NAME);
                                        }),
                                            (i.onsuccess = function () {
                                                var r = i.result.transaction([we.DB_STORE_NAME], "readwrite"),
                                                    o = r.objectStore(we.DB_STORE_NAME),
                                                    a = 0,
                                                    s = 0,
                                                    u = e.length;
                                                function c() {
                                                    0 == s ? t() : n();
                                                }
                                                e.forEach(function (e) {
                                                    var t = o.put(we.analyzePath(e).object.contents, e);
                                                    (t.onsuccess = function () {
                                                        ++a + s == u && c();
                                                    }),
                                                        (t.onerror = function () {
                                                            s++, a + s == u && c();
                                                        });
                                                }),
                                                    (r.onerror = n);
                                            }),
                                            (i.onerror = n);
                                    },
                                    loadFilesFromDB: function (e, t, n) {
                                        (t = t || function () {}), (n = n || function () {});
                                        var r = we.indexedDB();
                                        try {
                                            var i = r.open(we.DB_NAME(), we.DB_VERSION);
                                        } catch (e) {
                                            return n(e);
                                        }
                                        (i.onupgradeneeded = n),
                                            (i.onsuccess = function () {
                                                var r = i.result;
                                                try {
                                                    var o = r.transaction([we.DB_STORE_NAME], "readonly");
                                                } catch (e) {
                                                    return void n(e);
                                                }
                                                var a = o.objectStore(we.DB_STORE_NAME),
                                                    s = 0,
                                                    u = 0,
                                                    c = e.length;
                                                function l() {
                                                    0 == u ? t() : n();
                                                }
                                                e.forEach(function (e) {
                                                    var t = a.get(e);
                                                    (t.onsuccess = function () {
                                                        we.analyzePath(e).exists && we.unlink(e), we.createDataFile(ve.dirname(e), ve.basename(e), t.result, !0, !0, !0), ++s + u == c && l();
                                                    }),
                                                        (t.onerror = function () {
                                                            u++, s + u == c && l();
                                                        });
                                                }),
                                                    (o.onerror = n);
                                            }),
                                            (i.onerror = n);
                                    },
                                    mmapAlloc: function (e) {
                                        for (
                                            var t = (function (e, t) {
                                                    return t || (t = 16), Math.ceil(e / t) * t;
                                                })(e, 16384),
                                                n = Ie(t);
                                            e < t;

                                        )
                                            x[n + e++] = 0;
                                        return n;
                                    },
                                },
                                be = {
                                    mappings: {},
                                    DEFAULT_POLLMASK: 5,
                                    umask: 511,
                                    calculateAt: function (e, t) {
                                        if ("/" !== t[0]) {
                                            var n;
                                            if (-100 === e) n = we.cwd();
                                            else {
                                                var r = we.getStream(e);
                                                if (!r) throw new we.ErrnoError(8);
                                                n = r.path;
                                            }
                                            t = ve.join2(n, t);
                                        }
                                        return t;
                                    },
                                    doStat: function (e, t, n) {
                                        try {
                                            var r = e(t);
                                        } catch (e) {
                                            if (e && e.node && ve.normalize(t) !== ve.normalize(we.getPath(e.node))) return -54;
                                            throw e;
                                        }
                                        return (
                                            (L[n >> 2] = r.dev),
                                            (L[(n + 4) >> 2] = 0),
                                            (L[(n + 8) >> 2] = r.ino),
                                            (L[(n + 12) >> 2] = r.mode),
                                            (L[(n + 16) >> 2] = r.nlink),
                                            (L[(n + 20) >> 2] = r.uid),
                                            (L[(n + 24) >> 2] = r.gid),
                                            (L[(n + 28) >> 2] = r.rdev),
                                            (L[(n + 32) >> 2] = 0),
                                            (ie = [r.size >>> 0, ((re = r.size), +K(re) >= 1 ? (re > 0 ? (0 | G(+V(re / 4294967296), 4294967295)) >>> 0 : ~~+Y((re - +(~~re >>> 0)) / 4294967296) >>> 0) : 0)]),
                                            (L[(n + 40) >> 2] = ie[0]),
                                            (L[(n + 44) >> 2] = ie[1]),
                                            (L[(n + 48) >> 2] = 4096),
                                            (L[(n + 52) >> 2] = r.blocks),
                                            (L[(n + 56) >> 2] = (r.atime.getTime() / 1e3) | 0),
                                            (L[(n + 60) >> 2] = 0),
                                            (L[(n + 64) >> 2] = (r.mtime.getTime() / 1e3) | 0),
                                            (L[(n + 68) >> 2] = 0),
                                            (L[(n + 72) >> 2] = (r.ctime.getTime() / 1e3) | 0),
                                            (L[(n + 76) >> 2] = 0),
                                            (ie = [r.ino >>> 0, ((re = r.ino), +K(re) >= 1 ? (re > 0 ? (0 | G(+V(re / 4294967296), 4294967295)) >>> 0 : ~~+Y((re - +(~~re >>> 0)) / 4294967296) >>> 0) : 0)]),
                                            (L[(n + 80) >> 2] = ie[0]),
                                            (L[(n + 84) >> 2] = ie[1]),
                                            0
                                        );
                                    },
                                    doMsync: function (e, t, n, r, i) {
                                        var o = F.slice(e, e + n);
                                        we.msync(t, o, i, n, r);
                                    },
                                    doMkdir: function (e, t) {
                                        return "/" === (e = ve.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)), we.mkdir(e, t, 0), 0;
                                    },
                                    doMknod: function (e, t, n) {
                                        switch (61440 & t) {
                                            case 32768:
                                            case 8192:
                                            case 24576:
                                            case 4096:
                                            case 49152:
                                                break;
                                            default:
                                                return -28;
                                        }
                                        return we.mknod(e, t, n), 0;
                                    },
                                    doReadlink: function (e, t, n) {
                                        if (n <= 0) return -28;
                                        var r = we.readlink(e),
                                            i = Math.min(n, B(r)),
                                            o = x[t + i];
                                        return z(r, t, n + 1), (x[t + i] = o), i;
                                    },
                                    doAccess: function (e, t) {
                                        if (-8 & t) return -28;
                                        var n;
                                        if (!(n = we.lookupPath(e, { follow: !0 }).node)) return -44;
                                        var r = "";
                                        return 4 & t && (r += "r"), 2 & t && (r += "w"), 1 & t && (r += "x"), r && we.nodePermissions(n, r) ? -2 : 0;
                                    },
                                    doDup: function (e, t, n) {
                                        var r = we.getStream(n);
                                        return r && we.close(r), we.open(e, t, 0, n, n).fd;
                                    },
                                    doReadv: function (e, t, n, r) {
                                        for (var i = 0, o = 0; o < n; o++) {
                                            var a = L[(t + (8 * o + 4)) >> 2],
                                                s = we.read(e, x, L[(t + 8 * o) >> 2], a, r);
                                            if (s < 0) return -1;
                                            if (((i += s), s < a)) break;
                                        }
                                        return i;
                                    },
                                    doWritev: function (e, t, n, r) {
                                        for (var i = 0, o = 0; o < n; o++) {
                                            var a = we.write(e, x, L[(t + 8 * o) >> 2], L[(t + (8 * o + 4)) >> 2], r);
                                            if (a < 0) return -1;
                                            i += a;
                                        }
                                        return i;
                                    },
                                    varargs: void 0,
                                    get: function () {
                                        return (be.varargs += 4), L[(be.varargs - 4) >> 2];
                                    },
                                    getStr: function (e) {
                                        return T(e);
                                    },
                                    getStreamFromFD: function (e) {
                                        var t = we.getStream(e);
                                        if (!t) throw new we.ErrnoError(8);
                                        return t;
                                    },
                                    get64: function (e, t) {
                                        return e;
                                    },
                                };
                            function Se(e) {
                                try {
                                    return y.grow((e - P.byteLength + 65535) >>> 16), N(y.buffer), 1;
                                } catch (e) {}
                            }
                            var Ee = {
                                xhrs: [],
                                setu64: function (e, t) {
                                    (D[e >> 2] = t), (D[(e + 4) >> 2] = (t / 4294967296) | 0);
                                },
                                openDatabase: function (e, t, n, r) {
                                    try {
                                        var i = indexedDB.open(e, t);
                                    } catch (e) {
                                        return r(e);
                                    }
                                    (i.onupgradeneeded = function (e) {
                                        var t = e.target.result;
                                        t.objectStoreNames.contains("FILES") && t.deleteObjectStore("FILES"), t.createObjectStore("FILES");
                                    }),
                                        (i.onsuccess = function (e) {
                                            n(e.target.result);
                                        }),
                                        (i.onerror = function (e) {
                                            r(e);
                                        });
                                },
                                staticInit: function () {
                                    Ee.openDatabase(
                                        "emscripten_filesystem",
                                        1,
                                        function (e) {
                                            (Ee.dbInstance = e), $();
                                        },
                                        function () {
                                            (Ee.dbInstance = !1), $();
                                        }
                                    ),
                                        ("undefined" != typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER) || J();
                                },
                            };
                            function Me(e, t, n, r, i) {
                                var o = D[(e + 8) >> 2];
                                if (o) {
                                    var a = T(o),
                                        s = e + 112,
                                        u = T(s);
                                    u || (u = "GET");
                                    var c = D[(s + 52) >> 2],
                                        l = D[(s + 56) >> 2],
                                        d = !!D[(s + 60) >> 2],
                                        f = D[(s + 68) >> 2],
                                        h = D[(s + 72) >> 2],
                                        m = D[(s + 76) >> 2],
                                        p = D[(s + 80) >> 2],
                                        v = D[(s + 84) >> 2],
                                        g = D[(s + 88) >> 2],
                                        y = !!(1 & c),
                                        _ = !!(2 & c),
                                        w = !!(64 & c),
                                        b = f ? T(f) : void 0,
                                        S = h ? T(h) : void 0,
                                        E = p ? T(p) : void 0,
                                        M = new XMLHttpRequest();
                                    if (((M.withCredentials = d), M.open(u, a, !w, b, S), w || (M.timeout = l), (M.url_ = a), (M.responseType = "arraybuffer"), p && M.overrideMimeType(E), m))
                                        for (;;) {
                                            var k = D[m >> 2];
                                            if (!k) break;
                                            var P = D[(m + 4) >> 2];
                                            if (!P) break;
                                            m += 8;
                                            var x = T(k),
                                                A = T(P);
                                            M.setRequestHeader(x, A);
                                        }
                                    Ee.xhrs.push(M), (D[(e + 0) >> 2] = Ee.xhrs.length);
                                    var L = v && g ? F.slice(v, v + g) : null;
                                    (M.onload = function (r) {
                                        R(y && !_);
                                        var i = M.response ? M.response.byteLength : 0;
                                        Ee.setu64(e + 24, 0),
                                            i && Ee.setu64(e + 32, i),
                                            (O[(e + 40) >> 1] = M.readyState),
                                            (O[(e + 42) >> 1] = M.status),
                                            M.statusText && z(M.statusText, e + 44, 64),
                                            M.status >= 200 && M.status < 300 ? t && t(e, M, r) : n && n(e, M, r);
                                    }),
                                        (M.onerror = function (t) {
                                            R(y);
                                            var r = M.status;
                                            Ee.setu64(e + 24, 0), Ee.setu64(e + 32, M.response ? M.response.byteLength : 0), (O[(e + 40) >> 1] = M.readyState), (O[(e + 42) >> 1] = r), n && n(e, M, t);
                                        }),
                                        (M.ontimeout = function (t) {
                                            n && n(e, M, t);
                                        }),
                                        (M.onprogress = function (t) {
                                            var n = y && _ && M.response ? M.response.byteLength : 0,
                                                i = 0;
                                            y && _ && ((i = Ie(n)), F.set(new Uint8Array(M.response), i)),
                                                (D[(e + 12) >> 2] = i),
                                                Ee.setu64(e + 16, n),
                                                Ee.setu64(e + 24, t.loaded - n),
                                                Ee.setu64(e + 32, t.total),
                                                (O[(e + 40) >> 1] = M.readyState),
                                                M.readyState >= 3 && 0 === M.status && t.loaded > 0 && (M.status = 200),
                                                (O[(e + 42) >> 1] = M.status),
                                                M.statusText && z(M.statusText, e + 44, 64),
                                                r && r(e, M, t),
                                                i && Be(i);
                                        }),
                                        (M.onreadystatechange = function (t) {
                                            (O[(e + 40) >> 1] = M.readyState), M.readyState >= 2 && (O[(e + 42) >> 1] = M.status), i && i(e, M, t);
                                        });
                                    try {
                                        M.send(L);
                                    } catch (t) {
                                        n && n(e, M, t);
                                    }
                                } else n(e, 0, "no url specified!");
                                function R(t) {
                                    var n = 0,
                                        r = 0;
                                    t && ((n = Ie((r = M.response ? M.response.byteLength : 0))), F.set(new Uint8Array(M.response), n)), (D[(e + 12) >> 2] = n), Ee.setu64(e + 16, r);
                                }
                            }
                            function ke(e, t, n, r, i) {
                                if (e) {
                                    var o = D[(t + 112 + 64) >> 2];
                                    o || (o = D[(t + 8) >> 2]);
                                    var a = T(o);
                                    try {
                                        var s = e.transaction(["FILES"], "readwrite").objectStore("FILES").put(n, a);
                                        (s.onsuccess = function (e) {
                                            (O[(t + 40) >> 1] = 4), (O[(t + 42) >> 1] = 200), z("OK", t + 44, 64), r(t, 0, a);
                                        }),
                                            (s.onerror = function (e) {
                                                (O[(t + 40) >> 1] = 4), (O[(t + 42) >> 1] = 413), z("Payload Too Large", t + 44, 64), i(t, 0, e);
                                            });
                                    } catch (e) {
                                        i(t, 0, e);
                                    }
                                } else i(t, 0, "IndexedDB not available!");
                            }
                            var Pe = {};
                            function xe() {
                                if (!xe.strings) {
                                    var e = {
                                        USER: "web_user",
                                        LOGNAME: "web_user",
                                        PATH: "/",
                                        PWD: "/",
                                        HOME: "/home/web_user",
                                        LANG: (("object" == typeof navigator && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8",
                                        _: u || "./this.program",
                                    };
                                    for (var t in Pe) e[t] = Pe[t];
                                    var n = [];
                                    for (var t in e) n.push(t + "=" + e[t]);
                                    xe.strings = n;
                                }
                                return xe.strings;
                            }
                            function Fe() {
                                if (!Fe.called) {
                                    (Fe.called = !0), (L[He() >> 2] = 60 * new Date().getTimezoneOffset());
                                    var e = new Date().getFullYear(),
                                        t = new Date(e, 0, 1),
                                        n = new Date(e, 6, 1);
                                    L[We() >> 2] = Number(t.getTimezoneOffset() != n.getTimezoneOffset());
                                    var r = s(t),
                                        i = s(n),
                                        o = I(r),
                                        a = I(i);
                                    n.getTimezoneOffset() < t.getTimezoneOffset() ? ((L[Xe() >> 2] = o), (L[(Xe() + 4) >> 2] = a)) : ((L[Xe() >> 2] = a), (L[(Xe() + 4) >> 2] = o));
                                }
                                function s(e) {
                                    var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                                    return t ? t[1] : "GMT";
                                }
                            }
                            function Ae(e) {
                                return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
                            }
                            function Oe(e, t) {
                                for (var n = 0, r = 0; r <= t; n += e[r++]);
                                return n;
                            }
                            var Le = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                                De = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                            function Re(e, t) {
                                for (var n = new Date(e.getTime()); t > 0; ) {
                                    var r = Ae(n.getFullYear()),
                                        i = n.getMonth(),
                                        o = (r ? Le : De)[i];
                                    if (!(t > o - n.getDate())) return n.setDate(n.getDate() + t), n;
                                    (t -= o - n.getDate() + 1), n.setDate(1), i < 11 ? n.setMonth(i + 1) : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1));
                                }
                                return n;
                            }
                            (r.requestFullscreen = function (e, t) {
                                ue.requestFullscreen(e, t);
                            }),
                                (r.requestAnimationFrame = function (e) {
                                    ue.requestAnimationFrame(e);
                                }),
                                (r.setCanvasSize = function (e, t, n) {
                                    ue.setCanvasSize(e, t, n);
                                }),
                                (r.pauseMainLoop = function () {
                                    ue.mainLoop.pause();
                                }),
                                (r.resumeMainLoop = function () {
                                    ue.mainLoop.resume();
                                }),
                                (r.getUserMedia = function () {
                                    ue.getUserMedia();
                                }),
                                (r.createContext = function (e, t, n, r) {
                                    return ue.createContext(e, t, n, r);
                                });
                            var Ce = function (e, t, n, r) {
                                e || (e = this), (this.parent = e), (this.mount = e.mount), (this.mounted = null), (this.id = we.nextInode++), (this.name = t), (this.mode = n), (this.node_ops = {}), (this.stream_ops = {}), (this.rdev = r);
                            };
                            function Te(e, t, n) {
                                var r = n > 0 ? n : B(e) + 1,
                                    i = new Array(r),
                                    o = j(e, i, 0, i.length);
                                return t && (i.length = o), i;
                            }
                            Object.defineProperties(Ce.prototype, {
                                read: {
                                    get: function () {
                                        return 365 == (365 & this.mode);
                                    },
                                    set: function (e) {
                                        e ? (this.mode |= 365) : (this.mode &= -366);
                                    },
                                },
                                write: {
                                    get: function () {
                                        return 146 == (146 & this.mode);
                                    },
                                    set: function (e) {
                                        e ? (this.mode |= 146) : (this.mode &= -147);
                                    },
                                },
                                isFolder: {
                                    get: function () {
                                        return we.isDir(this.mode);
                                    },
                                },
                                isDevice: {
                                    get: function () {
                                        return we.isChrdev(this.mode);
                                    },
                                },
                            }),
                                (we.FSNode = Ce),
                                we.staticInit(),
                                (r.FS_createFolder = we.createFolder),
                                (r.FS_createPath = we.createPath),
                                (r.FS_createDataFile = we.createDataFile),
                                (r.FS_createPreloadedFile = we.createPreloadedFile),
                                (r.FS_createLazyFile = we.createLazyFile),
                                (r.FS_createLink = we.createLink),
                                (r.FS_createDevice = we.createDevice),
                                (r.FS_unlink = we.unlink),
                                Ee.staticInit(),
                                H.push({
                                    func: function () {
                                        ze();
                                    },
                                });
                            var je = {
                                __cxa_allocate_exception: function (e) {
                                    return Ie(e + 16) + 16;
                                },
                                __cxa_atexit: function (e, t) {},
                                __cxa_begin_catch: function (e) {
                                    var t = new de(e),
                                        n = t.get_exception_info();
                                    return (
                                        n.get_caught() || (n.set_caught(!0), Ve.uncaught_exceptions--),
                                        n.set_rethrown(!1),
                                        fe.push(t),
                                        (function (e) {
                                            e.add_ref();
                                        })(n),
                                        t.get_exception_ptr()
                                    );
                                },
                                __cxa_end_catch: function () {
                                    Ue(0);
                                    var e = fe.pop();
                                    !(function (e) {
                                        if (e.release_ref() && !e.get_rethrown()) {
                                            var t = e.get_destructor();
                                            t && E.get(t)(e.excPtr), me(e.excPtr);
                                        }
                                    })(e.get_exception_info()),
                                        e.free(),
                                        (he = 0);
                                },
                                __cxa_find_matching_catch_2: function () {
                                    var e = he;
                                    if (!e) return 0 | (S(0), 0);
                                    var t = new le(e),
                                        n = t.get_type(),
                                        r = new de();
                                    if ((r.set_base_ptr(e), !n)) return 0 | (S(0), r.ptr);
                                    var i = Array.prototype.slice.call(arguments),
                                        o = qe(),
                                        a = Ye(4);
                                    L[a >> 2] = e;
                                    for (var s = 0; s < i.length; s++) {
                                        var u = i[s];
                                        if (0 === u || u === n) break;
                                        if (Ge(u, n, a)) {
                                            var c = L[a >> 2];
                                            return e !== c && r.set_adjusted_ptr(c), 0 | (S(u), r.ptr);
                                        }
                                    }
                                    return Ke(o), 0 | (S(n), r.ptr);
                                },
                                __cxa_find_matching_catch_3: function () {
                                    var e = he;
                                    if (!e) return 0 | (S(0), 0);
                                    var t = new le(e),
                                        n = t.get_type(),
                                        r = new de();
                                    if ((r.set_base_ptr(e), !n)) return 0 | (S(0), r.ptr);
                                    var i = Array.prototype.slice.call(arguments),
                                        o = qe(),
                                        a = Ye(4);
                                    L[a >> 2] = e;
                                    for (var s = 0; s < i.length; s++) {
                                        var u = i[s];
                                        if (0 === u || u === n) break;
                                        if (Ge(u, n, a)) {
                                            var c = L[a >> 2];
                                            return e !== c && r.set_adjusted_ptr(c), 0 | (S(u), r.ptr);
                                        }
                                    }
                                    return Ke(o), 0 | (S(n), r.ptr);
                                },
                                __cxa_free_exception: me,
                                __cxa_rethrow: function () {
                                    var e = fe.pop(),
                                        t = e.get_exception_info(),
                                        n = e.get_base_ptr();
                                    throw (t.get_rethrown() ? e.free() : (fe.push(e), t.set_rethrown(!0)), (he = n), n);
                                },
                                __cxa_throw: function (e, t, n) {
                                    throw (new le(e).init(t, n), (he = e), "uncaught_exception" in Ve ? Ve.uncaught_exceptions++ : (Ve.uncaught_exceptions = 1), e);
                                },
                                __cxa_uncaught_exceptions: function () {
                                    return Ve.uncaught_exceptions;
                                },
                                __indirect_function_table: E,
                                __map_file: function (e, t) {
                                    return pe(63), -1;
                                },
                                __resumeException: function (e) {
                                    var t = new de(e),
                                        n = t.get_base_ptr();
                                    throw (he || (he = n), t.free(), n);
                                },
                                __sys_fcntl64: function (e, t, n) {
                                    be.varargs = n;
                                    try {
                                        var r = be.getStreamFromFD(e);
                                        switch (t) {
                                            case 0:
                                                return (i = be.get()) < 0 ? -28 : we.open(r.path, r.flags, 0, i).fd;
                                            case 1:
                                            case 2:
                                                return 0;
                                            case 3:
                                                return r.flags;
                                            case 4:
                                                var i = be.get();
                                                return (r.flags |= i), 0;
                                            case 12:
                                                return (i = be.get()), (A[(i + 0) >> 1] = 2), 0;
                                            case 13:
                                            case 14:
                                                return 0;
                                            case 16:
                                            case 8:
                                                return -28;
                                            case 9:
                                                return pe(28), -1;
                                            default:
                                                return -28;
                                        }
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), -e.errno;
                                    }
                                },
                                __sys_ioctl: function (e, t, n) {
                                    be.varargs = n;
                                    try {
                                        var r = be.getStreamFromFD(e);
                                        switch (t) {
                                            case 21509:
                                            case 21505:
                                                return r.tty ? 0 : -59;
                                            case 21510:
                                            case 21511:
                                            case 21512:
                                            case 21506:
                                            case 21507:
                                            case 21508:
                                                return r.tty ? 0 : -59;
                                            case 21519:
                                                if (!r.tty) return -59;
                                                var i = be.get();
                                                return (L[i >> 2] = 0), 0;
                                            case 21520:
                                                return r.tty ? -28 : -59;
                                            case 21531:
                                                return (i = be.get()), we.ioctl(r, t, i);
                                            case 21523:
                                            case 21524:
                                                return r.tty ? 0 : -59;
                                            default:
                                                ee("bad ioctl syscall " + t);
                                        }
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), -e.errno;
                                    }
                                },
                                __sys_munmap: function (e, t) {
                                    try {
                                        return (function (e, t) {
                                            if (-1 == (0 | e) || 0 === t) return -28;
                                            var n = be.mappings[e];
                                            if (!n) return 0;
                                            if (t === n.len) {
                                                var r = we.getStream(n.fd);
                                                2 & n.prot && be.doMsync(e, r, t, n.flags, n.offset), (be.mappings[e] = null), n.allocated && Be(n.malloc);
                                            }
                                            return 0;
                                        })(e, t);
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), -e.errno;
                                    }
                                },
                                __sys_open: function (e, t, n) {
                                    be.varargs = n;
                                    try {
                                        var r = be.getStr(e),
                                            i = be.get();
                                        return we.open(r, t, i).fd;
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), -e.errno;
                                    }
                                },
                                __sys_read: function (e, t, n) {
                                    try {
                                        var r = be.getStreamFromFD(e);
                                        return we.read(r, x, t, n);
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), -e.errno;
                                    }
                                },
                                _emscripten_fetch_free: function (e) {
                                    delete Ee.xhrs[e - 1];
                                },
                                abort: function () {
                                    ee();
                                },
                                clock_gettime: function (e, t) {
                                    var n;
                                    if (0 === e) n = Date.now();
                                    else {
                                        if (1 !== e && 4 !== e) return pe(28), -1;
                                        n = oe();
                                    }
                                    return (L[t >> 2] = (n / 1e3) | 0), (L[(t + 4) >> 2] = ((n % 1e3) * 1e3 * 1e3) | 0), 0;
                                },
                                emscripten_is_main_browser_thread: function () {
                                    return !s;
                                },
                                emscripten_memcpy_big: function (e, t, n) {
                                    F.copyWithin(e, t, t + n);
                                },
                                emscripten_resize_heap: function (e) {
                                    var t = F.length,
                                        n = 2147483648;
                                    if ((e >>>= 0) > n) return !1;
                                    for (var r, i = 1; i <= 4; i *= 2) {
                                        var o = t * (1 + 0.2 / i);
                                        if (((o = Math.min(o, e + 100663296)), Se(Math.min(n, ((r = Math.max(16777216, e, o)) % 65536 > 0 && (r += 65536 - (r % 65536)), r))))) return !0;
                                    }
                                    return !1;
                                },
                                emscripten_start_fetch: function (e, t, n, r, i) {
                                    var o = e + 112,
                                        a = T(o),
                                        s = D[(o + 36) >> 2],
                                        u = D[(o + 40) >> 2],
                                        c = D[(o + 44) >> 2],
                                        l = D[(o + 48) >> 2],
                                        d = D[(o + 52) >> 2],
                                        f = !!(4 & d),
                                        h = !!(32 & d),
                                        m = !!(16 & d),
                                        p = function (e, n, r) {
                                            s ? E.get(s)(e) : t && t(e);
                                        },
                                        v = function (e, t, n) {
                                            c ? E.get(c)(e) : r && r(e);
                                        },
                                        g = function (e, t, r) {
                                            u ? E.get(u)(e) : n && n(e);
                                        },
                                        y = function (e, t, n) {
                                            l ? E.get(l)(e) : i && i(e);
                                        },
                                        _ = function (e, n, r) {
                                            ke(
                                                Ee.dbInstance,
                                                e,
                                                n.response,
                                                function (e, n, r) {
                                                    s ? E.get(s)(e) : t && t(e);
                                                },
                                                function (e, n, r) {
                                                    s ? E.get(s)(e) : t && t(e);
                                                }
                                            );
                                        };
                                    if ("EM_IDB_STORE" === a) {
                                        var w = D[(o + 84) >> 2];
                                        ke(Ee.dbInstance, e, F.slice(w, w + D[(o + 88) >> 2]), p, g);
                                    } else if ("EM_IDB_DELETE" === a)
                                        !(function (e, t, n, r) {
                                            if (e) {
                                                var i = D[(t + 112 + 64) >> 2];
                                                i || (i = D[(t + 8) >> 2]);
                                                var o = T(i);
                                                try {
                                                    var a = e.transaction(["FILES"], "readwrite").objectStore("FILES").delete(o);
                                                    (a.onsuccess = function (e) {
                                                        var r = e.target.result;
                                                        (D[(t + 12) >> 2] = 0), Ee.setu64(t + 16, 0), Ee.setu64(t + 24, 0), Ee.setu64(t + 32, 0), (O[(t + 40) >> 1] = 4), (O[(t + 42) >> 1] = 200), z("OK", t + 44, 64), n(t, 0, r);
                                                    }),
                                                        (a.onerror = function (e) {
                                                            (O[(t + 40) >> 1] = 4), (O[(t + 42) >> 1] = 404), z("Not Found", t + 44, 64), r(t, 0, e);
                                                        });
                                                } catch (e) {
                                                    r(t, 0, e);
                                                }
                                            } else r(t, 0, "IndexedDB not available!");
                                        })(Ee.dbInstance, e, p, g);
                                    else if (m) {
                                        if (h) return 0;
                                        Me(e, f ? _ : p, g, v, y);
                                    } else
                                        !(function (e, t, n, r) {
                                            if (e) {
                                                var i = D[(t + 112 + 64) >> 2];
                                                i || (i = D[(t + 8) >> 2]);
                                                var o = T(i);
                                                try {
                                                    var a = e.transaction(["FILES"], "readonly").objectStore("FILES").get(o);
                                                    (a.onsuccess = function (e) {
                                                        if (e.target.result) {
                                                            var i = e.target.result,
                                                                o = i.byteLength || i.length,
                                                                a = Ie(o);
                                                            F.set(new Uint8Array(i), a),
                                                                (D[(t + 12) >> 2] = a),
                                                                Ee.setu64(t + 16, o),
                                                                Ee.setu64(t + 24, 0),
                                                                Ee.setu64(t + 32, o),
                                                                (O[(t + 40) >> 1] = 4),
                                                                (O[(t + 42) >> 1] = 200),
                                                                z("OK", t + 44, 64),
                                                                n(t, 0, i);
                                                        } else (O[(t + 40) >> 1] = 4), (O[(t + 42) >> 1] = 404), z("Not Found", t + 44, 64), r(t, 0, "no data");
                                                    }),
                                                        (a.onerror = function (e) {
                                                            (O[(t + 40) >> 1] = 4), (O[(t + 42) >> 1] = 404), z("Not Found", t + 44, 64), r(t, 0, e);
                                                        });
                                                } catch (e) {
                                                    r(t, 0, e);
                                                }
                                            } else r(t, 0, "IndexedDB not available!");
                                        })(
                                            Ee.dbInstance,
                                            e,
                                            p,
                                            h
                                                ? g
                                                : f
                                                ? function (e, t, n) {
                                                      Me(e, _, g, v, y);
                                                  }
                                                : function (e, t, n) {
                                                      Me(e, p, g, v, y);
                                                  }
                                        );
                                    return e;
                                },
                                environ_get: function (e, t) {
                                    var n = 0;
                                    return (
                                        xe().forEach(function (r, i) {
                                            var o = t + n;
                                            (L[(e + 4 * i) >> 2] = o),
                                                (function (e, t, n) {
                                                    for (var r = 0; r < e.length; ++r) x[t++ >> 0] = e.charCodeAt(r);
                                                    x[t >> 0] = 0;
                                                })(r, o),
                                                (n += r.length + 1);
                                        }),
                                        0
                                    );
                                },
                                environ_sizes_get: function (e, t) {
                                    var n = xe();
                                    L[e >> 2] = n.length;
                                    var r = 0;
                                    return (
                                        n.forEach(function (e) {
                                            r += e.length + 1;
                                        }),
                                        (L[t >> 2] = r),
                                        0
                                    );
                                },
                                fd_close: function (e) {
                                    try {
                                        var t = be.getStreamFromFD(e);
                                        return we.close(t), 0;
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), e.errno;
                                    }
                                },
                                fd_read: function (e, t, n, r) {
                                    try {
                                        var i = be.getStreamFromFD(e),
                                            o = be.doReadv(i, t, n);
                                        return (L[r >> 2] = o), 0;
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), e.errno;
                                    }
                                },
                                fd_seek: function (e, t, n, r, i) {
                                    try {
                                        var o = be.getStreamFromFD(e),
                                            a = 4294967296 * n + (t >>> 0),
                                            s = 9007199254740992;
                                        return a <= -s || a >= s
                                            ? -61
                                            : (we.llseek(o, a, r),
                                              (ie = [o.position >>> 0, ((re = o.position), +K(re) >= 1 ? (re > 0 ? (0 | G(+V(re / 4294967296), 4294967295)) >>> 0 : ~~+Y((re - +(~~re >>> 0)) / 4294967296) >>> 0) : 0)]),
                                              (L[i >> 2] = ie[0]),
                                              (L[(i + 4) >> 2] = ie[1]),
                                              o.getdents && 0 === a && 0 === r && (o.getdents = null),
                                              0);
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), e.errno;
                                    }
                                },
                                fd_write: function (e, t, n, r) {
                                    try {
                                        var i = be.getStreamFromFD(e),
                                            o = be.doWritev(i, t, n);
                                        return (L[r >> 2] = o), 0;
                                    } catch (e) {
                                        return (void 0 !== we && e instanceof we.ErrnoError) || ee(e), e.errno;
                                    }
                                },
                                getTempRet0: function () {
                                    return 0 | b;
                                },
                                gettimeofday: function (e) {
                                    var t = Date.now();
                                    return (L[e >> 2] = (t / 1e3) | 0), (L[(e + 4) >> 2] = ((t % 1e3) * 1e3) | 0), 0;
                                },
                                invoke_diii: function (e, t, n, r) {
                                    var i = qe();
                                    try {
                                        return E.get(e)(t, n, r);
                                    } catch (e) {
                                        if ((Ke(i), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_fii: function (e, t, n) {
                                    var r = qe();
                                    try {
                                        return E.get(e)(t, n);
                                    } catch (e) {
                                        if ((Ke(r), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_fiii: function (e, t, n, r) {
                                    var i = qe();
                                    try {
                                        return E.get(e)(t, n, r);
                                    } catch (e) {
                                        if ((Ke(i), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_fiiif: function (e, t, n, r, i) {
                                    var o = qe();
                                    try {
                                        return E.get(e)(t, n, r, i);
                                    } catch (e) {
                                        if ((Ke(o), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_i: function (e) {
                                    var t = qe();
                                    try {
                                        return E.get(e)();
                                    } catch (e) {
                                        if ((Ke(t), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_ii: function (e, t) {
                                    var n = qe();
                                    try {
                                        return E.get(e)(t);
                                    } catch (e) {
                                        if ((Ke(n), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iid: function (e, t, n) {
                                    var r = qe();
                                    try {
                                        return E.get(e)(t, n);
                                    } catch (e) {
                                        if ((Ke(r), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iif: function (e, t, n) {
                                    var r = qe();
                                    try {
                                        return E.get(e)(t, n);
                                    } catch (e) {
                                        if ((Ke(r), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iifff: function (e, t, n, r, i) {
                                    var o = qe();
                                    try {
                                        return E.get(e)(t, n, r, i);
                                    } catch (e) {
                                        if ((Ke(o), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iifffi: function (e, t, n, r, i, o) {
                                    var a = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o);
                                    } catch (e) {
                                        if ((Ke(a), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iii: function (e, t, n) {
                                    var r = qe();
                                    try {
                                        return E.get(e)(t, n);
                                    } catch (e) {
                                        if ((Ke(r), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiffi: function (e, t, n, r, i, o) {
                                    var a = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o);
                                    } catch (e) {
                                        if ((Ke(a), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiifi: function (e, t, n, r, i) {
                                    var o = qe();
                                    try {
                                        return E.get(e)(t, n, r, i);
                                    } catch (e) {
                                        if ((Ke(o), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiifiiii: function (e, t, n, r, i, o, a, s) {
                                    var u = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o, a, s);
                                    } catch (e) {
                                        if ((Ke(u), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiii: function (e, t, n, r) {
                                    var i = qe();
                                    try {
                                        return E.get(e)(t, n, r);
                                    } catch (e) {
                                        if ((Ke(i), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiii: function (e, t, n, r, i) {
                                    var o = qe();
                                    try {
                                        return E.get(e)(t, n, r, i);
                                    } catch (e) {
                                        if ((Ke(o), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiid: function (e, t, n, r, i, o) {
                                    var a = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o);
                                    } catch (e) {
                                        if ((Ke(a), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiii: function (e, t, n, r, i, o) {
                                    var a = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o);
                                    } catch (e) {
                                        if ((Ke(a), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiiii: function (e, t, n, r, i, o, a) {
                                    var s = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o, a);
                                    } catch (e) {
                                        if ((Ke(s), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiiiii: function (e, t, n, r, i, o, a, s) {
                                    var u = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o, a, s);
                                    } catch (e) {
                                        if ((Ke(u), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiiiiii: function (e, t, n, r, i, o, a, s, u) {
                                    var c = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o, a, s, u);
                                    } catch (e) {
                                        if ((Ke(c), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiiiiiiii: function (e, t, n, r, i, o, a, s, u, c, l) {
                                    var d = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o, a, s, u, c, l);
                                    } catch (e) {
                                        if ((Ke(d), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiiiiiiiii: function (e, t, n, r, i, o, a, s, u, c, l, d) {
                                    var f = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o, a, s, u, c, l, d);
                                    } catch (e) {
                                        if ((Ke(f), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiiiiiiiiii: function (e, t, n, r, i, o, a, s, u, c, l, d, f) {
                                    var h = qe();
                                    try {
                                        return E.get(e)(t, n, r, i, o, a, s, u, c, l, d, f);
                                    } catch (e) {
                                        if ((Ke(h), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiiiij: function (e, t, n, r, i, o, a) {
                                    var s = qe();
                                    try {
                                        return $e(e, t, n, r, i, o, a);
                                    } catch (e) {
                                        if ((Ke(s), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iij: function (e, t, n, r) {
                                    var i = qe();
                                    try {
                                        return et(e, t, n, r);
                                    } catch (e) {
                                        if ((Ke(i), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_iiji: function (e, t, n, r, i) {
                                    var o = qe();
                                    try {
                                        return tt(e, t, n, r, i);
                                    } catch (e) {
                                        if ((Ke(o), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_jii: function (e, t, n) {
                                    var r = qe();
                                    try {
                                        return nt(e, t, n);
                                    } catch (e) {
                                        if ((Ke(r), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_jiii: function (e, t, n, r) {
                                    var i = qe();
                                    try {
                                        return rt(e, t, n, r);
                                    } catch (e) {
                                        if ((Ke(i), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_jiiii: function (e, t, n, r, i) {
                                    var o = qe();
                                    try {
                                        return it(e, t, n, r, i);
                                    } catch (e) {
                                        if ((Ke(o), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_v: function (e) {
                                    var t = qe();
                                    try {
                                        E.get(e)();
                                    } catch (e) {
                                        if ((Ke(t), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_vi: function (e, t) {
                                    var n = qe();
                                    try {
                                        E.get(e)(t);
                                    } catch (e) {
                                        if ((Ke(n), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_vii: function (e, t, n) {
                                    var r = qe();
                                    try {
                                        E.get(e)(t, n);
                                    } catch (e) {
                                        if ((Ke(r), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viii: function (e, t, n, r) {
                                    var i = qe();
                                    try {
                                        E.get(e)(t, n, r);
                                    } catch (e) {
                                        if ((Ke(i), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiid: function (e, t, n, r, i) {
                                    var o = qe();
                                    try {
                                        E.get(e)(t, n, r, i);
                                    } catch (e) {
                                        if ((Ke(o), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiidd: function (e, t, n, r, i, o) {
                                    var a = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o);
                                    } catch (e) {
                                        if ((Ke(a), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiddi: function (e, t, n, r, i, o, a) {
                                    var s = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a);
                                    } catch (e) {
                                        if ((Ke(s), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiddiiid: function (e, t, n, r, i, o, a, s, u, c) {
                                    var l = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u, c);
                                    } catch (e) {
                                        if ((Ke(l), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiii: function (e, t, n, r, i) {
                                    var o = qe();
                                    try {
                                        E.get(e)(t, n, r, i);
                                    } catch (e) {
                                        if ((Ke(o), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiidi: function (e, t, n, r, i, o, a) {
                                    var s = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a);
                                    } catch (e) {
                                        if ((Ke(s), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiidiid: function (e, t, n, r, i, o, a, s, u) {
                                    var c = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u);
                                    } catch (e) {
                                        if ((Ke(c), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiii: function (e, t, n, r, i, o) {
                                    var a = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o);
                                    } catch (e) {
                                        if ((Ke(a), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiidd: function (e, t, n, r, i, o, a, s) {
                                    var u = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s);
                                    } catch (e) {
                                        if ((Ke(u), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiddi: function (e, t, n, r, i, o, a, s, u) {
                                    var c = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u);
                                    } catch (e) {
                                        if ((Ke(c), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiif: function (e, t, n, r, i, o, a) {
                                    var s = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a);
                                    } catch (e) {
                                        if ((Ke(s), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiffffffffffffffff: function (e, t, n, r, i, o, a, s, u, c, l, d, f, h, m, p, v, g, y, _, w, b) {
                                    var S = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u, c, l, d, f, h, m, p, v, g, y, _, w, b);
                                    } catch (e) {
                                        if ((Ke(S), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiii: function (e, t, n, r, i, o, a) {
                                    var s = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a);
                                    } catch (e) {
                                        if ((Ke(s), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiii: function (e, t, n, r, i, o, a, s) {
                                    var u = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s);
                                    } catch (e) {
                                        if ((Ke(u), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiiifi: function (e, t, n, r, i, o, a, s, u, c) {
                                    var l = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u, c);
                                    } catch (e) {
                                        if ((Ke(l), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiiii: function (e, t, n, r, i, o, a, s, u) {
                                    var c = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u);
                                    } catch (e) {
                                        if ((Ke(c), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiiiii: function (e, t, n, r, i, o, a, s, u, c) {
                                    var l = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u, c);
                                    } catch (e) {
                                        if ((Ke(l), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiiiiii: function (e, t, n, r, i, o, a, s, u, c, l) {
                                    var d = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u, c, l);
                                    } catch (e) {
                                        if ((Ke(d), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiiiiiid: function (e, t, n, r, i, o, a, s, u, c, l, d) {
                                    var f = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u, c, l, d);
                                    } catch (e) {
                                        if ((Ke(f), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viiiiiiiiiiiiiii: function (e, t, n, r, i, o, a, s, u, c, l, d, f, h, m, p) {
                                    var v = qe();
                                    try {
                                        E.get(e)(t, n, r, i, o, a, s, u, c, l, d, f, h, m, p);
                                    } catch (e) {
                                        if ((Ke(v), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                invoke_viijii: function (e, t, n, r, i, o, a) {
                                    var s = qe();
                                    try {
                                        Je(e, t, n, r, i, o, a);
                                    } catch (e) {
                                        if ((Ke(s), e !== e + 0 && "longjmp" !== e)) throw e;
                                        Ue(1, 0);
                                    }
                                },
                                llvm_eh_typeid_for: function (e) {
                                    return e;
                                },
                                localtime_r: function (e, t) {
                                    Fe();
                                    var n = new Date(1e3 * L[e >> 2]);
                                    (L[t >> 2] = n.getSeconds()),
                                        (L[(t + 4) >> 2] = n.getMinutes()),
                                        (L[(t + 8) >> 2] = n.getHours()),
                                        (L[(t + 12) >> 2] = n.getDate()),
                                        (L[(t + 16) >> 2] = n.getMonth()),
                                        (L[(t + 20) >> 2] = n.getFullYear() - 1900),
                                        (L[(t + 24) >> 2] = n.getDay());
                                    var r = new Date(n.getFullYear(), 0, 1),
                                        i = ((n.getTime() - r.getTime()) / 864e5) | 0;
                                    (L[(t + 28) >> 2] = i), (L[(t + 36) >> 2] = -60 * n.getTimezoneOffset());
                                    var o = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
                                        a = r.getTimezoneOffset(),
                                        s = 0 | (o != a && n.getTimezoneOffset() == Math.min(a, o));
                                    L[(t + 32) >> 2] = s;
                                    var u = L[(Xe() + (s ? 4 : 0)) >> 2];
                                    return (L[(t + 40) >> 2] = u), t;
                                },
                                memory: y,
                                pthread_create: function () {
                                    return 6;
                                },
                                pthread_join: function () {},
                                pthread_mutexattr_destroy: function () {},
                                pthread_mutexattr_init: function () {},
                                pthread_mutexattr_settype: function () {},
                                setTempRet0: function (e) {
                                    S(0 | e);
                                },
                                strftime_l: function (e, t, n, r) {
                                    return (function (e, t, n, r) {
                                        var i = L[(r + 40) >> 2],
                                            o = {
                                                tm_sec: L[r >> 2],
                                                tm_min: L[(r + 4) >> 2],
                                                tm_hour: L[(r + 8) >> 2],
                                                tm_mday: L[(r + 12) >> 2],
                                                tm_mon: L[(r + 16) >> 2],
                                                tm_year: L[(r + 20) >> 2],
                                                tm_wday: L[(r + 24) >> 2],
                                                tm_yday: L[(r + 28) >> 2],
                                                tm_isdst: L[(r + 32) >> 2],
                                                tm_gmtoff: L[(r + 36) >> 2],
                                                tm_zone: i ? T(i) : "",
                                            },
                                            a = T(n),
                                            s = {
                                                "%c": "%a %b %d %H:%M:%S %Y",
                                                "%D": "%m/%d/%y",
                                                "%F": "%Y-%m-%d",
                                                "%h": "%b",
                                                "%r": "%I:%M:%S %p",
                                                "%R": "%H:%M",
                                                "%T": "%H:%M:%S",
                                                "%x": "%m/%d/%y",
                                                "%X": "%H:%M:%S",
                                                "%Ec": "%c",
                                                "%EC": "%C",
                                                "%Ex": "%m/%d/%y",
                                                "%EX": "%H:%M:%S",
                                                "%Ey": "%y",
                                                "%EY": "%Y",
                                                "%Od": "%d",
                                                "%Oe": "%e",
                                                "%OH": "%H",
                                                "%OI": "%I",
                                                "%Om": "%m",
                                                "%OM": "%M",
                                                "%OS": "%S",
                                                "%Ou": "%u",
                                                "%OU": "%U",
                                                "%OV": "%V",
                                                "%Ow": "%w",
                                                "%OW": "%W",
                                                "%Oy": "%y",
                                            };
                                        for (var u in s) a = a.replace(new RegExp(u, "g"), s[u]);
                                        var c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                            l = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                        function d(e, t, n) {
                                            for (var r = "number" == typeof e ? e.toString() : e || ""; r.length < t; ) r = n[0] + r;
                                            return r;
                                        }
                                        function f(e, t) {
                                            return d(e, t, "0");
                                        }
                                        function h(e, t) {
                                            function n(e) {
                                                return e < 0 ? -1 : e > 0 ? 1 : 0;
                                            }
                                            var r;
                                            return 0 === (r = n(e.getFullYear() - t.getFullYear())) && 0 === (r = n(e.getMonth() - t.getMonth())) && (r = n(e.getDate() - t.getDate())), r;
                                        }
                                        function m(e) {
                                            switch (e.getDay()) {
                                                case 0:
                                                    return new Date(e.getFullYear() - 1, 11, 29);
                                                case 1:
                                                    return e;
                                                case 2:
                                                    return new Date(e.getFullYear(), 0, 3);
                                                case 3:
                                                    return new Date(e.getFullYear(), 0, 2);
                                                case 4:
                                                    return new Date(e.getFullYear(), 0, 1);
                                                case 5:
                                                    return new Date(e.getFullYear() - 1, 11, 31);
                                                case 6:
                                                    return new Date(e.getFullYear() - 1, 11, 30);
                                            }
                                        }
                                        function p(e) {
                                            var t = Re(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                                                n = new Date(t.getFullYear(), 0, 4),
                                                r = new Date(t.getFullYear() + 1, 0, 4),
                                                i = m(n),
                                                o = m(r);
                                            return h(i, t) <= 0 ? (h(o, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear()) : t.getFullYear() - 1;
                                        }
                                        var v = {
                                            "%a": function (e) {
                                                return c[e.tm_wday].substring(0, 3);
                                            },
                                            "%A": function (e) {
                                                return c[e.tm_wday];
                                            },
                                            "%b": function (e) {
                                                return l[e.tm_mon].substring(0, 3);
                                            },
                                            "%B": function (e) {
                                                return l[e.tm_mon];
                                            },
                                            "%C": function (e) {
                                                return f(((e.tm_year + 1900) / 100) | 0, 2);
                                            },
                                            "%d": function (e) {
                                                return f(e.tm_mday, 2);
                                            },
                                            "%e": function (e) {
                                                return d(e.tm_mday, 2, " ");
                                            },
                                            "%g": function (e) {
                                                return p(e).toString().substring(2);
                                            },
                                            "%G": function (e) {
                                                return p(e);
                                            },
                                            "%H": function (e) {
                                                return f(e.tm_hour, 2);
                                            },
                                            "%I": function (e) {
                                                var t = e.tm_hour;
                                                return 0 == t ? (t = 12) : t > 12 && (t -= 12), f(t, 2);
                                            },
                                            "%j": function (e) {
                                                return f(e.tm_mday + Oe(Ae(e.tm_year + 1900) ? Le : De, e.tm_mon - 1), 3);
                                            },
                                            "%m": function (e) {
                                                return f(e.tm_mon + 1, 2);
                                            },
                                            "%M": function (e) {
                                                return f(e.tm_min, 2);
                                            },
                                            "%n": function () {
                                                return "\n";
                                            },
                                            "%p": function (e) {
                                                return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM";
                                            },
                                            "%S": function (e) {
                                                return f(e.tm_sec, 2);
                                            },
                                            "%t": function () {
                                                return "\t";
                                            },
                                            "%u": function (e) {
                                                return e.tm_wday || 7;
                                            },
                                            "%U": function (e) {
                                                var t = new Date(e.tm_year + 1900, 0, 1),
                                                    n = 0 === t.getDay() ? t : Re(t, 7 - t.getDay()),
                                                    r = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                                                if (h(n, r) < 0) {
                                                    var i = Oe(Ae(r.getFullYear()) ? Le : De, r.getMonth() - 1) - 31,
                                                        o = 31 - n.getDate() + i + r.getDate();
                                                    return f(Math.ceil(o / 7), 2);
                                                }
                                                return 0 === h(n, t) ? "01" : "00";
                                            },
                                            "%V": function (e) {
                                                var t,
                                                    n = new Date(e.tm_year + 1900, 0, 4),
                                                    r = new Date(e.tm_year + 1901, 0, 4),
                                                    i = m(n),
                                                    o = m(r),
                                                    a = Re(new Date(e.tm_year + 1900, 0, 1), e.tm_yday);
                                                return h(a, i) < 0 ? "53" : h(o, a) <= 0 ? "01" : ((t = i.getFullYear() < e.tm_year + 1900 ? e.tm_yday + 32 - i.getDate() : e.tm_yday + 1 - i.getDate()), f(Math.ceil(t / 7), 2));
                                            },
                                            "%w": function (e) {
                                                return e.tm_wday;
                                            },
                                            "%W": function (e) {
                                                var t = new Date(e.tm_year, 0, 1),
                                                    n = 1 === t.getDay() ? t : Re(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1),
                                                    r = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                                                if (h(n, r) < 0) {
                                                    var i = Oe(Ae(r.getFullYear()) ? Le : De, r.getMonth() - 1) - 31,
                                                        o = 31 - n.getDate() + i + r.getDate();
                                                    return f(Math.ceil(o / 7), 2);
                                                }
                                                return 0 === h(n, t) ? "01" : "00";
                                            },
                                            "%y": function (e) {
                                                return (e.tm_year + 1900).toString().substring(2);
                                            },
                                            "%Y": function (e) {
                                                return e.tm_year + 1900;
                                            },
                                            "%z": function (e) {
                                                var t = e.tm_gmtoff,
                                                    n = t >= 0;
                                                return (t = ((t = Math.abs(t) / 60) / 60) * 100 + (t % 60)), (n ? "+" : "-") + String("0000" + t).slice(-4);
                                            },
                                            "%Z": function (e) {
                                                return e.tm_zone;
                                            },
                                            "%%": function () {
                                                return "%";
                                            },
                                        };
                                        for (var u in v) a.indexOf(u) >= 0 && (a = a.replace(new RegExp(u, "g"), v[u](o)));
                                        var g = Te(a, !1);
                                        return g.length > t
                                            ? 0
                                            : ((function (e, t) {
                                                  x.set(e, t);
                                              })(g, e),
                                              g.length - 1);
                                    })(e, t, n, r);
                                },
                                sysconf: function (e) {
                                    switch (e) {
                                        case 30:
                                            return 16384;
                                        case 85:
                                            return 131072;
                                        case 132:
                                        case 133:
                                        case 12:
                                        case 137:
                                        case 138:
                                        case 15:
                                        case 235:
                                        case 16:
                                        case 17:
                                        case 18:
                                        case 19:
                                        case 20:
                                        case 149:
                                        case 13:
                                        case 10:
                                        case 236:
                                        case 153:
                                        case 9:
                                        case 21:
                                        case 22:
                                        case 159:
                                        case 154:
                                        case 14:
                                        case 77:
                                        case 78:
                                        case 139:
                                        case 80:
                                        case 81:
                                        case 82:
                                        case 68:
                                        case 67:
                                        case 164:
                                        case 11:
                                        case 29:
                                        case 47:
                                        case 48:
                                        case 95:
                                        case 52:
                                        case 51:
                                        case 46:
                                        case 79:
                                            return 200809;
                                        case 27:
                                        case 246:
                                        case 127:
                                        case 128:
                                        case 23:
                                        case 24:
                                        case 160:
                                        case 161:
                                        case 181:
                                        case 182:
                                        case 242:
                                        case 183:
                                        case 184:
                                        case 243:
                                        case 244:
                                        case 245:
                                        case 165:
                                        case 178:
                                        case 179:
                                        case 49:
                                        case 50:
                                        case 168:
                                        case 169:
                                        case 175:
                                        case 170:
                                        case 171:
                                        case 172:
                                        case 97:
                                        case 76:
                                        case 32:
                                        case 173:
                                        case 35:
                                            return -1;
                                        case 176:
                                        case 177:
                                        case 7:
                                        case 155:
                                        case 8:
                                        case 157:
                                        case 125:
                                        case 126:
                                        case 92:
                                        case 93:
                                        case 129:
                                        case 130:
                                        case 131:
                                        case 94:
                                        case 91:
                                            return 1;
                                        case 74:
                                        case 60:
                                        case 69:
                                        case 70:
                                        case 4:
                                            return 1024;
                                        case 31:
                                        case 42:
                                        case 72:
                                            return 32;
                                        case 87:
                                        case 26:
                                        case 33:
                                            return 2147483647;
                                        case 34:
                                        case 1:
                                            return 47839;
                                        case 38:
                                        case 36:
                                            return 99;
                                        case 43:
                                        case 37:
                                            return 2048;
                                        case 0:
                                            return 2097152;
                                        case 3:
                                            return 65536;
                                        case 28:
                                            return 32768;
                                        case 44:
                                            return 32767;
                                        case 75:
                                            return 16384;
                                        case 39:
                                            return 1e3;
                                        case 89:
                                            return 700;
                                        case 71:
                                            return 256;
                                        case 40:
                                            return 255;
                                        case 2:
                                            return 100;
                                        case 180:
                                            return 64;
                                        case 25:
                                            return 20;
                                        case 5:
                                            return 16;
                                        case 6:
                                            return 6;
                                        case 73:
                                            return 4;
                                        case 84:
                                            return ("object" == typeof navigator && navigator.hardwareConcurrency) || 1;
                                    }
                                    return pe(28), -1;
                                },
                                time: function (e) {
                                    var t = (Date.now() / 1e3) | 0;
                                    return e && (L[e >> 2] = t), t;
                                },
                            };
                            !(function () {
                                var e = { env: je, wasi_snapshot_preview1: je };
                                function t(e, t) {
                                    (r.asm = e.exports), $();
                                }
                                function n(e) {
                                    t(e.instance);
                                }
                                function i(t) {
                                    return (g || (!a && !s) || "function" != typeof fetch
                                        ? Promise.resolve().then(se)
                                        : fetch(ae, { credentials: "same-origin" })
                                              .then(function (e) {
                                                  if (!e.ok) throw "failed to load wasm binary file at '" + ae + "'";
                                                  return e.arrayBuffer();
                                              })
                                              .catch(function () {
                                                  return se();
                                              })
                                    )
                                        .then(function (t) {
                                            return WebAssembly.instantiate(t, e);
                                        })
                                        .then(t, function (e) {
                                            m("failed to asynchronously prepare wasm: " + e), ee(e);
                                        });
                                }
                                if ((J(), r.instantiateWasm))
                                    try {
                                        return r.instantiateWasm(e, t);
                                    } catch (e) {
                                        return m("Module.instantiateWasm callback failed with error: " + e), !1;
                                    }
                                !(function () {
                                    if (g || "function" != typeof WebAssembly.instantiateStreaming || te(ae) || "function" != typeof fetch) return i(n);
                                    fetch(ae, { credentials: "same-origin" }).then(function (t) {
                                        return WebAssembly.instantiateStreaming(t, e).then(n, function (e) {
                                            return m("wasm streaming compile failed: " + e), m("falling back to ArrayBuffer instantiation"), i(n);
                                        });
                                    });
                                })();
                            })();
                            var ze = (r.___wasm_call_ctors = function () {
                                return (ze = r.___wasm_call_ctors = r.asm.__wasm_call_ctors).apply(null, arguments);
                            });
                            (r._OX_SetLicense = function () {
                                return (r._OX_SetLicense = r.asm.OX_SetLicense).apply(null, arguments);
                            }),
                                (r._OX_Initialize = function () {
                                    return (r._OX_Initialize = r.asm.OX_Initialize).apply(null, arguments);
                                }),
                                (r._OX_ProcessFrame = function () {
                                    return (r._OX_ProcessFrame = r.asm.OX_ProcessFrame).apply(null, arguments);
                                }),
                                (r._OX_ProcessIMU = function () {
                                    return (r._OX_ProcessIMU = r.asm.OX_ProcessIMU).apply(null, arguments);
                                }),
                                (r._OX_Destroy = function () {
                                    return (r._OX_Destroy = r.asm.OX_Destroy).apply(null, arguments);
                                }),
                                (r._OX_StartImageDetection = function () {
                                    return (r._OX_StartImageDetection = r.asm.OX_StartImageDetection).apply(null, arguments);
                                }),
                                (r._OX_LoadImageClassifier = function () {
                                    return (r._OX_LoadImageClassifier = r.asm.OX_LoadImageClassifier).apply(null, arguments);
                                }),
                                (r._OX_AddImage = function () {
                                    return (r._OX_AddImage = r.asm.OX_AddImage).apply(null, arguments);
                                }),
                                (r._OX_StopImageDetection = function () {
                                    return (r._OX_StopImageDetection = r.asm.OX_StopImageDetection).apply(null, arguments);
                                }),
                                (r._OX_StartQRCodeDetection = function () {
                                    return (r._OX_StartQRCodeDetection = r.asm.OX_StartQRCodeDetection).apply(null, arguments);
                                }),
                                (r._OX_StopQRCodeDetection = function () {
                                    return (r._OX_StopQRCodeDetection = r.asm.OX_StopQRCodeDetection).apply(null, arguments);
                                }),
                                (r._OX_StartSLAM = function () {
                                    return (r._OX_StartSLAM = r.asm.OX_StartSLAM).apply(null, arguments);
                                }),
                                (r._OX_StopSLAM = function () {
                                    return (r._OX_StopSLAM = r.asm.OX_StopSLAM).apply(null, arguments);
                                }),
                                (r._OX_SetLogCallback = function () {
                                    return (r._OX_SetLogCallback = r.asm.OX_SetLogCallback).apply(null, arguments);
                                });
                            var Be = (r._free = function () {
                                    return (Be = r._free = r.asm.free).apply(null, arguments);
                                }),
                                Ie = (r._malloc = function () {
                                    return (Ie = r._malloc = r.asm.malloc).apply(null, arguments);
                                }),
                                Ne = (r.___errno_location = function () {
                                    return (Ne = r.___errno_location = r.asm.__errno_location).apply(null, arguments);
                                }),
                                Xe = (r.__get_tzname = function () {
                                    return (Xe = r.__get_tzname = r.asm._get_tzname).apply(null, arguments);
                                }),
                                We = (r.__get_daylight = function () {
                                    return (We = r.__get_daylight = r.asm._get_daylight).apply(null, arguments);
                                }),
                                He = (r.__get_timezone = function () {
                                    return (He = r.__get_timezone = r.asm._get_timezone).apply(null, arguments);
                                }),
                                Ue = (r._setThrew = function () {
                                    return (Ue = r._setThrew = r.asm.setThrew).apply(null, arguments);
                                }),
                                qe = (r.stackSave = function () {
                                    return (qe = r.stackSave = r.asm.stackSave).apply(null, arguments);
                                }),
                                Ke = (r.stackRestore = function () {
                                    return (Ke = r.stackRestore = r.asm.stackRestore).apply(null, arguments);
                                }),
                                Ye = (r.stackAlloc = function () {
                                    return (Ye = r.stackAlloc = r.asm.stackAlloc).apply(null, arguments);
                                }),
                                Ve = (r.__ZSt18uncaught_exceptionv = function () {
                                    return (Ve = r.__ZSt18uncaught_exceptionv = r.asm._ZSt18uncaught_exceptionv).apply(null, arguments);
                                }),
                                Ge = (r.___cxa_can_catch = function () {
                                    return (Ge = r.___cxa_can_catch = r.asm.__cxa_can_catch).apply(null, arguments);
                                }),
                                Ze = (r.___cxa_is_pointer_type = function () {
                                    return (Ze = r.___cxa_is_pointer_type = r.asm.__cxa_is_pointer_type).apply(null, arguments);
                                });
                            r._emscripten_main_thread_process_queued_calls = function () {
                                return (r._emscripten_main_thread_process_queued_calls = r.asm.emscripten_main_thread_process_queued_calls).apply(null, arguments);
                            };
                            var Qe,
                                Je = (r.dynCall_viijii = function () {
                                    return (Je = r.dynCall_viijii = r.asm.dynCall_viijii).apply(null, arguments);
                                }),
                                $e = (r.dynCall_iiiiij = function () {
                                    return ($e = r.dynCall_iiiiij = r.asm.dynCall_iiiiij).apply(null, arguments);
                                }),
                                et = (r.dynCall_iij = function () {
                                    return (et = r.dynCall_iij = r.asm.dynCall_iij).apply(null, arguments);
                                }),
                                tt = (r.dynCall_iiji = function () {
                                    return (tt = r.dynCall_iiji = r.asm.dynCall_iiji).apply(null, arguments);
                                }),
                                nt = (r.dynCall_jii = function () {
                                    return (nt = r.dynCall_jii = r.asm.dynCall_jii).apply(null, arguments);
                                }),
                                rt = (r.dynCall_jiii = function () {
                                    return (rt = r.dynCall_jiii = r.asm.dynCall_jiii).apply(null, arguments);
                                }),
                                it = (r.dynCall_jiiii = function () {
                                    return (it = r.dynCall_jiiii = r.asm.dynCall_jiiii).apply(null, arguments);
                                });
                            function ot(e) {
                                (this.name = "ExitStatus"), (this.message = "Program terminated with exit(" + e + ")"), (this.status = e);
                            }
                            function at(e) {
                                function n() {
                                    Qe ||
                                        ((Qe = !0),
                                        (r.calledRun = !0),
                                        M ||
                                            (r.noFSInit || we.init.initialized || we.init(),
                                            ce(H),
                                            (we.ignorePermissions = !1),
                                            ce(U),
                                            t(r),
                                            r.onRuntimeInitialized && r.onRuntimeInitialized(),
                                            (function () {
                                                if (r.postRun) for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length; ) (e = r.postRun.shift()), q.unshift(e);
                                                var e;
                                                ce(q);
                                            })()));
                                }
                                Z > 0 ||
                                    ((function () {
                                        if (r.preRun) for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; ) (e = r.preRun.shift()), W.unshift(e);
                                        var e;
                                        ce(W);
                                    })(),
                                    Z > 0 ||
                                        (r.setStatus
                                            ? (r.setStatus("Running..."),
                                              setTimeout(function () {
                                                  setTimeout(function () {
                                                      r.setStatus("");
                                                  }, 1),
                                                      n();
                                              }, 1))
                                            : n()));
                            }
                            if (
                                ((r.dynCall_vij = function () {
                                    return (r.dynCall_vij = r.asm.dynCall_vij).apply(null, arguments);
                                }),
                                (r.dynCall_ji = function () {
                                    return (r.dynCall_ji = r.asm.dynCall_ji).apply(null, arguments);
                                }),
                                (r.dynCall_jiji = function () {
                                    return (r.dynCall_jiji = r.asm.dynCall_jiji).apply(null, arguments);
                                }),
                                (r.dynCall_iiiiijj = function () {
                                    return (r.dynCall_iiiiijj = r.asm.dynCall_iiiiijj).apply(null, arguments);
                                }),
                                (r.dynCall_iiiiiijj = function () {
                                    return (r.dynCall_iiiiiijj = r.asm.dynCall_iiiiiijj).apply(null, arguments);
                                }),
                                (r.__growWasmMemory = function () {
                                    return (r.__growWasmMemory = r.asm.__growWasmMemory).apply(null, arguments);
                                }),
                                (r.UTF8ToString = T),
                                (r.stringToUTF8 = z),
                                (r.lengthBytesUTF8 = B),
                                (r.addRunDependency = J),
                                (r.removeRunDependency = $),
                                (r.FS_createFolder = we.createFolder),
                                (r.FS_createPath = we.createPath),
                                (r.FS_createDataFile = we.createDataFile),
                                (r.FS_createPreloadedFile = we.createPreloadedFile),
                                (r.FS_createLazyFile = we.createLazyFile),
                                (r.FS_createLink = we.createLink),
                                (r.FS_createDevice = we.createDevice),
                                (r.FS_unlink = we.unlink),
                                (r.addFunction = function (e, t) {
                                    return (function (e, t) {
                                        var n,
                                            r = E;
                                        if (!v) {
                                            v = new WeakMap();
                                            for (var i = 0; i < r.length; i++) {
                                                var o = r.get(i);
                                                o && v.set(o, i);
                                            }
                                        }
                                        if (v.has(e)) return v.get(e);
                                        if (_.length) n = _.pop();
                                        else {
                                            n = r.length;
                                            try {
                                                r.grow(1);
                                            } catch (e) {
                                                if (!(e instanceof RangeError)) throw e;
                                                throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
                                            }
                                        }
                                        try {
                                            r.set(n, e);
                                        } catch (i) {
                                            if (!(i instanceof TypeError)) throw i;
                                            var a = (function (e, t) {
                                                if ("function" == typeof WebAssembly.Function) {
                                                    for (var n = { i: "i32", j: "i64", f: "f32", d: "f64" }, r = { parameters: [], results: "v" == t[0] ? [] : [n[t[0]]] }, i = 1; i < t.length; ++i) r.parameters.push(n[t[i]]);
                                                    return new WebAssembly.Function(r, e);
                                                }
                                                var o = [1, 0, 1, 96],
                                                    a = t.slice(0, 1),
                                                    s = t.slice(1),
                                                    u = { i: 127, j: 126, f: 125, d: 124 };
                                                for (o.push(s.length), i = 0; i < s.length; ++i) o.push(u[s[i]]);
                                                "v" == a ? o.push(0) : (o = o.concat([1, u[a]])), (o[1] = o.length - 2);
                                                var c = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(o, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])),
                                                    l = new WebAssembly.Module(c);
                                                return new WebAssembly.Instance(l, { e: { f: e } }).exports.f;
                                            })(e, t);
                                            r.set(n, a);
                                        }
                                        return v.set(e, n), n;
                                    })(e, t);
                                }),
                                (Q = function e() {
                                    Qe || at(), Qe || (Q = e);
                                }),
                                (r.run = at),
                                r.preInit)
                            )
                                for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0; ) r.preInit.pop()();
                            return at(), e.ready;
                        }),
                    S = (function () {
                        function e() {
                            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        }
                        var t = e.prototype;
                        return (
                            (t.set = function (e, t, n, r, i, o, a, s, u, c, l, d, f, h, m, p) {
                                var v = this.elements;
                                return (
                                    (v[0] = e), (v[4] = t), (v[8] = n), (v[12] = r), (v[1] = i), (v[5] = o), (v[9] = a), (v[13] = s), (v[2] = u), (v[6] = c), (v[10] = l), (v[14] = d), (v[3] = f), (v[7] = h), (v[11] = m), (v[15] = p), this
                                );
                            }),
                            (t.identity = function () {
                                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
                            }),
                            (t.multiply = function (e) {
                                return this.multiplyMatrices(this, e);
                            }),
                            (t.premultiply = function (e) {
                                return this.multiplyMatrices(e, this);
                            }),
                            (t.multiplyMatrices = function (e, t) {
                                var n = e.elements,
                                    r = t.elements,
                                    i = this.elements,
                                    o = n[0],
                                    a = n[4],
                                    s = n[8],
                                    u = n[12],
                                    c = n[1],
                                    l = n[5],
                                    d = n[9],
                                    f = n[13],
                                    h = n[2],
                                    m = n[6],
                                    p = n[10],
                                    v = n[14],
                                    g = n[3],
                                    y = n[7],
                                    _ = n[11],
                                    w = n[15],
                                    b = r[0],
                                    S = r[4],
                                    E = r[8],
                                    M = r[12],
                                    k = r[1],
                                    P = r[5],
                                    x = r[9],
                                    F = r[13],
                                    A = r[2],
                                    O = r[6],
                                    L = r[10],
                                    D = r[14],
                                    R = r[3],
                                    C = r[7],
                                    T = r[11],
                                    j = r[15];
                                return (
                                    (i[0] = o * b + a * k + s * A + u * R),
                                    (i[4] = o * S + a * P + s * O + u * C),
                                    (i[8] = o * E + a * x + s * L + u * T),
                                    (i[12] = o * M + a * F + s * D + u * j),
                                    (i[1] = c * b + l * k + d * A + f * R),
                                    (i[5] = c * S + l * P + d * O + f * C),
                                    (i[9] = c * E + l * x + d * L + f * T),
                                    (i[13] = c * M + l * F + d * D + f * j),
                                    (i[2] = h * b + m * k + p * A + v * R),
                                    (i[6] = h * S + m * P + p * O + v * C),
                                    (i[10] = h * E + m * x + p * L + v * T),
                                    (i[14] = h * M + m * F + p * D + v * j),
                                    (i[3] = g * b + y * k + _ * A + w * R),
                                    (i[7] = g * S + y * P + _ * O + w * C),
                                    (i[11] = g * E + y * x + _ * L + w * T),
                                    (i[15] = g * M + y * F + _ * D + w * j),
                                    this
                                );
                            }),
                            (t.multiplyScalar = function (e) {
                                var t = this.elements;
                                return (
                                    (t[0] *= e),
                                    (t[4] *= e),
                                    (t[8] *= e),
                                    (t[12] *= e),
                                    (t[1] *= e),
                                    (t[5] *= e),
                                    (t[9] *= e),
                                    (t[13] *= e),
                                    (t[2] *= e),
                                    (t[6] *= e),
                                    (t[10] *= e),
                                    (t[14] *= e),
                                    (t[3] *= e),
                                    (t[7] *= e),
                                    (t[11] *= e),
                                    (t[15] *= e),
                                    this
                                );
                            }),
                            (t.determinant = function () {
                                var e = this.elements,
                                    t = e[0],
                                    n = e[4],
                                    r = e[8],
                                    i = e[12],
                                    o = e[1],
                                    a = e[5],
                                    s = e[9],
                                    u = e[13],
                                    c = e[2],
                                    l = e[6],
                                    d = e[10],
                                    f = e[14];
                                return (
                                    e[3] * (+i * s * l - r * u * l - i * a * d + n * u * d + r * a * f - n * s * f) +
                                    e[7] * (+t * s * f - t * u * d + i * o * d - r * o * f + r * u * c - i * s * c) +
                                    e[11] * (+t * u * l - t * a * f - i * o * l + n * o * f + i * a * c - n * u * c) +
                                    e[15] * (-r * a * c - t * s * l + t * a * d + r * o * l - n * o * d + n * s * c)
                                );
                            }),
                            (t.invert = function () {
                                var e = this.elements,
                                    t = e[0],
                                    n = e[1],
                                    r = e[2],
                                    i = e[3],
                                    o = e[4],
                                    a = e[5],
                                    s = e[6],
                                    u = e[7],
                                    c = e[8],
                                    l = e[9],
                                    d = e[10],
                                    f = e[11],
                                    h = e[12],
                                    m = e[13],
                                    p = e[14],
                                    v = e[15],
                                    g = l * p * u - m * d * u + m * s * f - a * p * f - l * s * v + a * d * v,
                                    y = h * d * u - c * p * u - h * s * f + o * p * f + c * s * v - o * d * v,
                                    _ = c * m * u - h * l * u + h * a * f - o * m * f - c * a * v + o * l * v,
                                    w = h * l * s - c * m * s - h * a * d + o * m * d + c * a * p - o * l * p,
                                    b = t * g + n * y + r * _ + i * w;
                                if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                var S = 1 / b;
                                return (
                                    (e[0] = g * S),
                                    (e[1] = (m * d * i - l * p * i - m * r * f + n * p * f + l * r * v - n * d * v) * S),
                                    (e[2] = (a * p * i - m * s * i + m * r * u - n * p * u - a * r * v + n * s * v) * S),
                                    (e[3] = (l * s * i - a * d * i - l * r * u + n * d * u + a * r * f - n * s * f) * S),
                                    (e[4] = y * S),
                                    (e[5] = (c * p * i - h * d * i + h * r * f - t * p * f - c * r * v + t * d * v) * S),
                                    (e[6] = (h * s * i - o * p * i - h * r * u + t * p * u + o * r * v - t * s * v) * S),
                                    (e[7] = (o * d * i - c * s * i + c * r * u - t * d * u - o * r * f + t * s * f) * S),
                                    (e[8] = _ * S),
                                    (e[9] = (h * l * i - c * m * i - h * n * f + t * m * f + c * n * v - t * l * v) * S),
                                    (e[10] = (o * m * i - h * a * i + h * n * u - t * m * u - o * n * v + t * a * v) * S),
                                    (e[11] = (c * a * i - o * l * i - c * n * u + t * l * u + o * n * f - t * a * f) * S),
                                    (e[12] = w * S),
                                    (e[13] = (c * m * r - h * l * r + h * n * d - t * m * d - c * n * p + t * l * p) * S),
                                    (e[14] = (h * a * r - o * m * r - h * n * s + t * m * s + o * n * p - t * a * p) * S),
                                    (e[15] = (o * l * r - c * a * r + c * n * s - t * l * s - o * n * d + t * a * d) * S),
                                    this
                                );
                            }),
                            (t.transpose = function () {
                                var e,
                                    t = this.elements;
                                return (
                                    (e = t[1]),
                                    (t[1] = t[4]),
                                    (t[4] = e),
                                    (e = t[2]),
                                    (t[2] = t[8]),
                                    (t[8] = e),
                                    (e = t[6]),
                                    (t[6] = t[9]),
                                    (t[9] = e),
                                    (e = t[3]),
                                    (t[3] = t[12]),
                                    (t[12] = e),
                                    (e = t[7]),
                                    (t[7] = t[13]),
                                    (t[13] = e),
                                    (e = t[11]),
                                    (t[11] = t[14]),
                                    (t[14] = e),
                                    this
                                );
                            }),
                            (t.setPosition = function (e) {
                                var t = this.elements;
                                return (t[3] = e.x), (t[7] = e.y), (t[11] = e.z), this;
                            }),
                            (t.setRotation = function (e) {
                                var t = this.elements,
                                    n = e.elements;
                                return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[4] = n[3]), (t[5] = n[4]), (t[6] = n[5]), (t[8] = n[6]), (t[9] = n[7]), (t[10] = n[8]), this;
                            }),
                            (t.extractPosition = function () {
                                var e = this.elements;
                                return new OnirixSDK.Vector3(e[3], e[7], e[11]);
                            }),
                            (t.extractRotation = function () {
                                var e = this.elements;
                                return new OnirixSDK.Matrix3().set(e[0], e[1], e[2], e[4], e[5], e[6], e[8], e[9], e[10]);
                            }),
                            (t.fromArray = function (e) {
                                for (var t = 0; t < 16; t++) this.elements[t] = e[t];
                                return this;
                            }),
                            (t.toArray = function () {
                                var e = [],
                                    t = this.elements;
                                return (
                                    (e[0] = t[0]),
                                    (e[1] = t[1]),
                                    (e[2] = t[2]),
                                    (e[3] = t[3]),
                                    (e[4] = t[4]),
                                    (e[5] = t[5]),
                                    (e[6] = t[6]),
                                    (e[7] = t[7]),
                                    (e[8] = t[8]),
                                    (e[9] = t[9]),
                                    (e[10] = t[10]),
                                    (e[11] = t[11]),
                                    (e[12] = t[12]),
                                    (e[13] = t[13]),
                                    (e[14] = t[14]),
                                    (e[15] = t[15]),
                                    e
                                );
                            }),
                            (t.clone = function () {
                                return new e().fromArray(this.elements);
                            }),
                            e
                        );
                    })(),
                    E = (function () {
                        function e(e, t) {
                            void 0 === e && (e = 0), void 0 === t && (t = 0), (this.x = e), (this.y = t);
                        }
                        var t = e.prototype;
                        return (
                            (t.add = function (e) {
                                return (this.x += e.x), (this.y += e.y), this;
                            }),
                            (t.addScalar = function (e) {
                                return (this.x += e), (this.y += e), this;
                            }),
                            (t.sub = function (e) {
                                return (this.x -= e.x), (this.y -= e.y), this;
                            }),
                            (t.subScalar = function (e) {
                                return (this.x -= e), (this.y -= e), this;
                            }),
                            (t.multiply = function (e) {
                                return (this.x *= e.x), (this.y *= e.y), this;
                            }),
                            (t.multiplyScalar = function (e) {
                                return (this.x *= e), (this.y *= e), this;
                            }),
                            (t.divide = function (e) {
                                return (this.x /= e.x), (this.y /= e.y), this;
                            }),
                            (t.divideScalar = function (e) {
                                return (this.x /= e), (this.y /= e), this;
                            }),
                            (t.dot = function (e) {
                                return this.x * e.x + this.y * e.y;
                            }),
                            (t.cross = function (e) {
                                return this.x * e.y - this.y * e.x;
                            }),
                            (t.clone = function () {
                                return new this.constructor(this.x, this.y);
                            }),
                            e
                        );
                    })(),
                    M = (function () {
                        function e(e, t, n) {
                            void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = 0), (this.x = e), (this.y = t), (this.z = n);
                        }
                        var t = e.prototype;
                        return (
                            (t.add = function (e) {
                                return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
                            }),
                            (t.addScalar = function (e) {
                                return (this.x += e), (this.y += e), (this.z += e), this;
                            }),
                            (t.sub = function (e) {
                                return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
                            }),
                            (t.subScalar = function (e) {
                                return (this.x -= e), (this.y -= e), (this.z -= e), this;
                            }),
                            (t.multiply = function (e) {
                                return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
                            }),
                            (t.multiplyScalar = function (e) {
                                return (this.x *= e), (this.y *= e), (this.z *= e), this;
                            }),
                            (t.divide = function (e) {
                                return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
                            }),
                            (t.divideScalar = function (e) {
                                return (this.x /= e), (this.y /= e), (this.z /= e), this;
                            }),
                            (t.dot = function (e) {
                                return this.x * e.x + this.y * e.y + this.z * e.z;
                            }),
                            (t.cross = function (e) {
                                var t = this.x,
                                    n = this.y,
                                    r = this.z,
                                    i = e.x,
                                    o = e.y,
                                    a = e.z;
                                return (this.x = n * a - r * o), (this.y = r * i - t * a), (this.z = t * o - n * i), this;
                            }),
                            (t.clone = function () {
                                return new this.constructor(this.x, this.y, this.z);
                            }),
                            e
                        );
                    })(),
                    k = (function () {
                        function e(e, t, n, r) {
                            void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === r && (r = "XYZ"), (this.x = e), (this.y = t), (this.z = n), (this.order = r);
                        }
                        var t = e.prototype;
                        return (
                            (t.setFromQuaternion = function (e, t) {
                                var n = new OnirixSDK.Matrix3().makeRotationFromQuaternion(e);
                                return this.setFromRotationMatrix(n, t);
                            }),
                            (t.setFromRotationMatrix = function (e, t) {
                                var n = e.elements,
                                    r = n[0],
                                    i = n[3],
                                    o = n[6],
                                    a = n[1],
                                    s = n[4],
                                    u = n[7],
                                    c = n[2],
                                    l = n[5],
                                    d = n[8];
                                switch ((t = t || this.order)) {
                                    case "XYZ":
                                        (this.y = Math.asin(OnirixSDK.clamp(o, -1, 1))), Math.abs(o) < 0.9999999 ? ((this.x = Math.atan2(-u, d)), (this.z = Math.atan2(-i, r))) : ((this.x = Math.atan2(l, s)), (this.z = 0));
                                        break;
                                    case "YXZ":
                                        (this.x = Math.asin(-OnirixSDK.clamp(u, -1, 1))), Math.abs(u) < 0.9999999 ? ((this.y = Math.atan2(o, d)), (this.z = Math.atan2(a, s))) : ((this.y = Math.atan2(-c, r)), (this.z = 0));
                                        break;
                                    case "ZXY":
                                        (this.x = Math.asin(OnirixSDK.clamp(l, -1, 1))), Math.abs(l) < 0.9999999 ? ((this.y = Math.atan2(-c, d)), (this.z = Math.atan2(-i, s))) : ((this.y = 0), (this.z = Math.atan2(a, r)));
                                        break;
                                    case "ZYX":
                                        (this.y = Math.asin(-OnirixSDK.clamp(c, -1, 1))), Math.abs(c) < 0.9999999 ? ((this.x = Math.atan2(l, d)), (this.z = Math.atan2(a, r))) : ((this.x = 0), (this.z = Math.atan2(-i, s)));
                                        break;
                                    case "YZX":
                                        (this.z = Math.asin(OnirixSDK.clamp(a, -1, 1))), Math.abs(a) < 0.9999999 ? ((this.x = Math.atan2(-u, s)), (this.y = Math.atan2(-c, r))) : ((this.x = 0), (this.y = Math.atan2(o, d)));
                                        break;
                                    case "XZY":
                                        (this.z = Math.asin(-OnirixSDK.clamp(i, -1, 1))), Math.abs(i) < 0.9999999 ? ((this.x = Math.atan2(l, s)), (this.y = Math.atan2(o, r))) : ((this.x = Math.atan2(-u, d)), (this.y = 0));
                                }
                                return (this.order = t), this;
                            }),
                            (t.clone = function () {
                                return new this.constructor(this.x, this.y, this.z, this.order);
                            }),
                            e
                        );
                    })(),
                    P = (function () {
                        function e(e, t, n, r) {
                            void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), (this.x = e), (this.y = t), (this.z = n), (this.w = r);
                        }
                        var t = e.prototype;
                        return (
                            (t.setFromEuler = function (e) {
                                var t = e.x,
                                    n = e.y,
                                    r = e.z,
                                    i = e.order,
                                    o = Math.cos,
                                    a = Math.sin,
                                    s = o(t / 2),
                                    u = o(n / 2),
                                    c = o(r / 2),
                                    l = a(t / 2),
                                    d = a(n / 2),
                                    f = a(r / 2);
                                switch (i) {
                                    case "XYZ":
                                        (this.x = l * u * c + s * d * f), (this.y = s * d * c - l * u * f), (this.z = s * u * f + l * d * c), (this.w = s * u * c - l * d * f);
                                        break;
                                    case "YXZ":
                                        (this.x = l * u * c + s * d * f), (this.y = s * d * c - l * u * f), (this.z = s * u * f - l * d * c), (this.w = s * u * c + l * d * f);
                                        break;
                                    case "ZXY":
                                        (this.x = l * u * c - s * d * f), (this.y = s * d * c + l * u * f), (this.z = s * u * f + l * d * c), (this.w = s * u * c - l * d * f);
                                        break;
                                    case "ZYX":
                                        (this.x = l * u * c - s * d * f), (this.y = s * d * c + l * u * f), (this.z = s * u * f - l * d * c), (this.w = s * u * c + l * d * f);
                                        break;
                                    case "YZX":
                                        (this.x = l * u * c + s * d * f), (this.y = s * d * c + l * u * f), (this.z = s * u * f - l * d * c), (this.w = s * u * c - l * d * f);
                                        break;
                                    case "XZY":
                                        (this.x = l * u * c - s * d * f), (this.y = s * d * c - l * u * f), (this.z = s * u * f + l * d * c), (this.w = s * u * c + l * d * f);
                                }
                                return this;
                            }),
                            (t.setFromAxisAngle = function (e, t) {
                                var n = t / 2,
                                    r = Math.sin(n);
                                return (this.x = e.x * r), (this.y = e.y * r), (this.z = e.z * r), (this.w = Math.cos(n)), this;
                            }),
                            (t.setFromRotationMatrix = function (e) {
                                var t = e.elements,
                                    n = t[0],
                                    r = t[4],
                                    i = t[8],
                                    o = t[1],
                                    a = t[5],
                                    s = t[9],
                                    u = t[2],
                                    c = t[6],
                                    l = t[10],
                                    d = n + a + l;
                                if (d > 0) {
                                    var f = 0.5 / Math.sqrt(d + 1);
                                    (this.w = 0.25 / f), (this.x = (c - s) * f), (this.y = (i - u) * f), (this.z = (o - r) * f);
                                } else if (n > a && n > l) {
                                    var h = 2 * Math.sqrt(1 + n - a - l);
                                    (this.w = (c - s) / h), (this.x = 0.25 * h), (this.y = (r + o) / h), (this.z = (i + u) / h);
                                } else if (a > l) {
                                    var m = 2 * Math.sqrt(1 + a - n - l);
                                    (this.w = (i - u) / m), (this.x = (r + o) / m), (this.y = 0.25 * m), (this.z = (s + c) / m);
                                } else {
                                    var p = 2 * Math.sqrt(1 + l - n - a);
                                    (this.w = (o - r) / p), (this.x = (i + u) / p), (this.y = (s + c) / p), (this.z = 0.25 * p);
                                }
                                return this;
                            }),
                            (t.multiply = function (e) {
                                return this.multiplyQuaternions(this, e);
                            }),
                            (t.premultiply = function (e) {
                                return this.multiplyQuaternions(e, this);
                            }),
                            (t.multiplyQuaternions = function (e, t) {
                                var n = e.x,
                                    r = e.y,
                                    i = e.z,
                                    o = e.w,
                                    a = t.x,
                                    s = t.y,
                                    u = t.z,
                                    c = t.w;
                                return (this.x = n * c + o * a + r * u - i * s), (this.y = r * c + o * s + i * a - n * u), (this.z = i * c + o * u + n * s - r * a), (this.w = o * c - n * a - r * s - i * u), this;
                            }),
                            (t.clone = function () {
                                return new this.constructor(this.x, this.y, this.z, this.w);
                            }),
                            e
                        );
                    })(),
                    x = (function () {
                        function e() {
                            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                        }
                        var t = e.prototype;
                        return (
                            (t.set = function (e, t, n, r, i, o, a, s, u) {
                                var c = this.elements;
                                return (c[0] = e), (c[1] = r), (c[2] = a), (c[3] = t), (c[4] = i), (c[5] = s), (c[6] = n), (c[7] = o), (c[8] = u), this;
                            }),
                            (t.identity = function () {
                                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
                            }),
                            (t.multiply = function (e) {
                                return this.multiplyMatrices(this, e);
                            }),
                            (t.premultiply = function (e) {
                                return this.multiplyMatrices(e, this);
                            }),
                            (t.multiplyMatrices = function (e, t) {
                                var n = e.elements,
                                    r = t.elements,
                                    i = this.elements,
                                    o = n[0],
                                    a = n[3],
                                    s = n[6],
                                    u = n[1],
                                    c = n[4],
                                    l = n[7],
                                    d = n[2],
                                    f = n[5],
                                    h = n[8],
                                    m = r[0],
                                    p = r[3],
                                    v = r[6],
                                    g = r[1],
                                    y = r[4],
                                    _ = r[7],
                                    w = r[2],
                                    b = r[5],
                                    S = r[8];
                                return (
                                    (i[0] = o * m + a * g + s * w),
                                    (i[3] = o * p + a * y + s * b),
                                    (i[6] = o * v + a * _ + s * S),
                                    (i[1] = u * m + c * g + l * w),
                                    (i[4] = u * p + c * y + l * b),
                                    (i[7] = u * v + c * _ + l * S),
                                    (i[2] = d * m + f * g + h * w),
                                    (i[5] = d * p + f * y + h * b),
                                    (i[8] = d * v + f * _ + h * S),
                                    this
                                );
                            }),
                            (t.multiplyScalar = function (e) {
                                var t = this.elements;
                                return (t[0] *= e), (t[3] *= e), (t[6] *= e), (t[1] *= e), (t[4] *= e), (t[7] *= e), (t[2] *= e), (t[5] *= e), (t[8] *= e), this;
                            }),
                            (t.determinant = function () {
                                var e = this.elements,
                                    t = e[0],
                                    n = e[1],
                                    r = e[2],
                                    i = e[3],
                                    o = e[4],
                                    a = e[5],
                                    s = e[6],
                                    u = e[7],
                                    c = e[8];
                                return t * o * c - t * a * u - n * i * c + n * a * s + r * i * u - r * o * s;
                            }),
                            (t.invert = function () {
                                var e = this.elements,
                                    t = e[0],
                                    n = e[1],
                                    r = e[2],
                                    i = e[3],
                                    o = e[4],
                                    a = e[5],
                                    s = e[6],
                                    u = e[7],
                                    c = e[8],
                                    l = c * o - a * u,
                                    d = a * s - c * i,
                                    f = u * i - o * s,
                                    h = t * l + n * d + r * f;
                                if (0 === h) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                                var m = 1 / h;
                                return (
                                    (e[0] = l * m),
                                    (e[1] = (r * u - c * n) * m),
                                    (e[2] = (a * n - r * o) * m),
                                    (e[3] = d * m),
                                    (e[4] = (c * t - r * s) * m),
                                    (e[5] = (r * i - a * t) * m),
                                    (e[6] = f * m),
                                    (e[7] = (n * s - u * t) * m),
                                    (e[8] = (o * t - n * i) * m),
                                    this
                                );
                            }),
                            (t.transpose = function () {
                                var e,
                                    t = this.elements;
                                return (e = t[1]), (t[1] = t[3]), (t[3] = e), (e = t[2]), (t[2] = t[6]), (t[6] = e), (e = t[5]), (t[5] = t[7]), (t[7] = e), this;
                            }),
                            (t.makeRotationFromEuler = function (e) {
                                var t = this.elements,
                                    n = e.x,
                                    r = e.y,
                                    i = e.z,
                                    o = Math.cos(n),
                                    a = Math.sin(n),
                                    s = Math.cos(r),
                                    u = Math.sin(r),
                                    c = Math.cos(i),
                                    l = Math.sin(i);
                                switch (e.order) {
                                    case "XYZ":
                                        var d = o * c,
                                            f = o * l,
                                            h = a * c,
                                            m = a * l;
                                        (t[0] = s * c), (t[3] = -s * l), (t[6] = u), (t[1] = f + h * u), (t[4] = d - m * u), (t[7] = -a * s), (t[2] = m - d * u), (t[5] = h + f * u), (t[8] = o * s);
                                        break;
                                    case "YXZ":
                                        var p = s * c,
                                            v = s * l,
                                            g = u * c,
                                            y = u * l;
                                        (t[0] = p + y * a), (t[3] = g * a - v), (t[6] = o * u), (t[1] = o * l), (t[4] = o * c), (t[7] = -a), (t[2] = v * a - g), (t[5] = y + p * a), (t[8] = o * s);
                                        break;
                                    case "ZXY":
                                        var _ = s * c,
                                            w = s * l,
                                            b = u * c,
                                            S = u * l;
                                        (t[0] = _ - S * a), (t[3] = -o * l), (t[6] = b + w * a), (t[1] = w + b * a), (t[4] = o * c), (t[7] = S - _ * a), (t[2] = -o * u), (t[5] = a), (t[8] = o * s);
                                        break;
                                    case "ZYX":
                                        var E = o * c,
                                            M = o * l,
                                            k = a * c,
                                            P = a * l;
                                        (t[0] = s * c), (t[3] = k * u - M), (t[6] = E * u + P), (t[1] = s * l), (t[4] = P * u + E), (t[7] = M * u - k), (t[2] = -u), (t[5] = a * s), (t[8] = o * s);
                                        break;
                                    case "YZX":
                                        var x = o * s,
                                            F = o * u,
                                            A = a * s,
                                            O = a * u;
                                        (t[0] = s * c), (t[3] = O - x * l), (t[6] = A * l + F), (t[1] = l), (t[4] = o * c), (t[7] = -a * c), (t[2] = -u * c), (t[5] = F * l + A), (t[8] = x - O * l);
                                        break;
                                    case "XZY":
                                        var L = o * s,
                                            D = o * u,
                                            R = a * s,
                                            C = a * u;
                                        (t[0] = s * c), (t[3] = -l), (t[6] = u * c), (t[1] = L * l + C), (t[4] = o * c), (t[7] = D * l - R), (t[2] = R * l - D), (t[5] = a * c), (t[8] = C * l + L);
                                }
                                return this;
                            }),
                            (t.makeRotationFromQuaternion = function (e) {
                                var t = this.elements,
                                    n = e.x,
                                    r = e.y,
                                    i = e.z,
                                    o = e.w,
                                    a = n + n,
                                    s = r + r,
                                    u = i + i,
                                    c = n * a,
                                    l = n * s,
                                    d = n * u,
                                    f = r * s,
                                    h = r * u,
                                    m = i * u,
                                    p = o * a,
                                    v = o * s,
                                    g = o * u;
                                return (t[0] = 1 - (f + m)), (t[1] = l + g), (t[2] = d - v), (t[3] = l - g), (t[4] = 1 - (c + m)), (t[5] = h + p), (t[6] = d + v), (t[7] = h - p), (t[8] = 1 - (c + f)), this;
                            }),
                            (t.fromArray = function (e) {
                                for (var t = 0; t < 9; t++) this.elements[t] = e[t];
                                return this;
                            }),
                            (t.toArray = function () {
                                var e = [],
                                    t = this.elements;
                                return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), (e[4] = t[4]), (e[5] = t[5]), (e[6] = t[6]), (e[7] = t[7]), (e[8] = t[8]), e;
                            }),
                            (t.clone = function () {
                                return new this.constructor().fromArray(this.elements);
                            }),
                            e
                        );
                    })();
                function F(e) {
                    return 0.01745329252 * e;
                }
                function A(e) {
                    return 57.2957795131 * e;
                }
                var O = new S().set(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                    L = new S().set(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
                function D(e, t) {
                    try {
                        var n = e();
                    } catch (e) {
                        return t(e);
                    }
                    return n && n.then ? n.then(void 0, t) : n;
                }
                var R = (function () {
                        function e(e, t) {
                            (this.uiManager = e), (this.deviceManager = t);
                        }
                        var t = e.prototype;
                        return (
                            (t.init = function (e, t) {
                                try {
                                    var n = this,
                                        r = function (t) {
                                            return Promise.resolve(n.checkLicense(e)).then(function () {});
                                        },
                                        o = D(
                                            function () {
                                                return (
                                                    (n.useVocabulary = t.useVocabulary),
                                                    Promise.resolve(
                                                        b({
                                                            preRun: function (r) {
                                                                t.mode === i.Image &&
                                                                    (n.useVocabulary && r.FS_createPreloadedFile("/", "orb.fbow", "https://sdk.onirix.com/common/orb.fbow", !0, !1),
                                                                    r.FS_createPreloadedFile("/", "classifier.otf", "https://studio.onirix.com/api/projects/self/targets/otf?token=" + e, !0, !1));
                                                            },
                                                        })
                                                    ).then(function (e) {
                                                        (n.nativeSDK = e),
                                                            (n.buffer = n.nativeSDK._malloc(1228800)),
                                                            (n.imageBuffer = n.nativeSDK._malloc(1228800)),
                                                            (n.imuData = n.nativeSDK._malloc(72)),
                                                            (n.cameraParamsStruct = n.nativeSDK.stackAlloc(40)),
                                                            (n.frameLayoutStruct = n.nativeSDK.stackAlloc(28)),
                                                            (n.nativeSDK.HEAPU32[n.cameraParamsStruct / 4 + 0] = 640),
                                                            (n.nativeSDK.HEAPU32[n.cameraParamsStruct / 4 + 1] = 480),
                                                            (n.nativeSDK.HEAPF64[n.cameraParamsStruct / 8 + 1] = 640),
                                                            (n.nativeSDK.HEAPF64[n.cameraParamsStruct / 8 + 2] = 640),
                                                            (n.nativeSDK.HEAPF64[n.cameraParamsStruct / 8 + 3] = 320),
                                                            (n.nativeSDK.HEAPF64[n.cameraParamsStruct / 8 + 4] = 240);
                                                    })
                                                );
                                            },
                                            function (e) {
                                                throw new h(e);
                                            }
                                        );
                                    return Promise.resolve(o && o.then ? o.then(r) : r());
                                } catch (i) {
                                    return Promise.reject(i);
                                }
                            }),
                            (t.checkLicense = function (e) {
                                try {
                                    var t = this;
                                    return Promise.resolve(
                                        D(
                                            function () {
                                                var n = t.getStringBuffer(e),
                                                    r = t.getStringBuffer(window.location.hostname),
                                                    i = t.getStringBuffer(t.deviceManager.platform),
                                                    o = t.getStringBuffer(t.deviceManager.device);
                                                return Promise.resolve(
                                                    new Promise(function (e, a) {
                                                        t.nativeSDK._OX_SetLicense(
                                                            [n],
                                                            [r],
                                                            [i],
                                                            [o],
                                                            t.nativeSDK.addFunction(function (t) {
                                                                return e(t);
                                                            }, "vi")
                                                        );
                                                    })
                                                ).then(function (e) {
                                                    if ((t.releaseStringBuffer(n), t.releaseStringBuffer(r), t.releaseStringBuffer(i), t.releaseStringBuffer(o), !e)) throw new m("Invalid license");
                                                });
                                            },
                                            function (e) {
                                                throw new m(e);
                                            }
                                        )
                                    );
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                            (t.startImageTracking = function (e, t, n) {
                                var r = this;
                                if (((this.onDetected = e), (this.onPose = t), (this.onLost = n), this.useVocabulary)) {
                                    var i = this.getStringBuffer("orb.fbow");
                                    this.nativeSDK._OX_Initialize(this.cameraParamsStruct, [i]), this.releaseStringBuffer(i);
                                } else this.nativeSDK._OX_Initialize(this.cameraParamsStruct, "");
                                var o = this.getStringBuffer("classifier.otf");
                                this.nativeSDK._OX_LoadImageClassifier([o]),
                                    this.releaseStringBuffer(o),
                                    this.nativeSDK._OX_StartImageDetection(
                                        2,
                                        this.nativeSDK.addFunction(function (e) {
                                            return r.onDetected(r.nativeSDK.UTF8ToString(e));
                                        }, "vi"),
                                        this.nativeSDK.addFunction(function (e) {
                                            var t = r.nativeSDK.HEAPF64.subarray(e / 8, e / 8 + 16),
                                                n = new S().fromArray(t);
                                            n.multiply(L), n.invert(), r.uiManager.isPortrait() ? (n.multiply(O), r.onPose(n.toArray())) : r.onPose(n.toArray());
                                        }, "vi"),
                                        this.nativeSDK.addFunction(function (e) {
                                            return r.onLost(r.nativeSDK.UTF8ToString(e));
                                        }, "vi")
                                    );
                            }),
                            (t.startQRCodeTracking = function (e, t, n) {
                                var r = this;
                                (this.onDetected = e),
                                    (this.onPose = t),
                                    (this.onLost = n),
                                    this.nativeSDK._OX_Initialize(this.cameraParamsStruct, ""),
                                    this.nativeSDK._OX_StartQRCodeDetection(
                                        2,
                                        this.nativeSDK.addFunction(function (e) {
                                            return r.onDetected(r.nativeSDK.UTF8ToString(e));
                                        }, "vi"),
                                        this.nativeSDK.addFunction(function (e) {
                                            var t = r.nativeSDK.HEAPF64.subarray(e / 8, e / 8 + 16),
                                                n = new S().fromArray(t);
                                            n.multiply(L), n.invert(), r.uiManager.isPortrait() ? (n.multiply(O), r.onPose(n.toArray())) : r.onPose(n.toArray());
                                        }, "vi"),
                                        this.nativeSDK.addFunction(function (e) {
                                            return r.onLost(r.nativeSDK.UTF8ToString(e));
                                        }, "vi")
                                    );
                            }),
                            (t.processFrame = function (e) {
                                this.nativeSDK.HEAPU8.set(e, this.buffer),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 0] = 640),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 1] = 480),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 2] = 2560),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 3] = !1),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 4] = 5),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 5] = 0),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 6] = 0),
                                    this.nativeSDK._OX_ProcessFrame(this.buffer, this.frameLayoutStruct);
                            }),
                            (t.stopImageTracking = function () {
                                this.nativeSDK._OX_StopImageDetection();
                            }),
                            (t.stopQRCodeTracking = function () {
                                this.nativeSDK._OX_StopQRCodeDetection();
                            }),
                            (t.addImage = function (e, t) {
                                this.nativeSDK.HEAPU8.set(t, this.imageBuffer),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 0] = 640),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 1] = 480),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 2] = 2560),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 3] = !1),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 4] = 5),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 5] = 0),
                                    (this.nativeSDK.HEAPU32[this.frameLayoutStruct / 4 + 6] = 0);
                                var n = this.getStringBuffer(e);
                                this.nativeSDK._OX_AddImage([n], this.imageBuffer, this.frameLayoutStruct), this.releaseStringBuffer(n);
                            }),
                            (t.destroy = function () {
                                this.nativeSDK._OX_Destroy();
                            }),
                            (t.getStringBuffer = function (e) {
                                var t = this.nativeSDK.lengthBytesUTF8(e) + 1,
                                    n = this.nativeSDK._malloc(t);
                                return this.nativeSDK.stringToUTF8(e, n, t), n;
                            }),
                            (t.releaseStringBuffer = function (e) {
                                this.nativeSDK._free(e);
                            }),
                            e
                        );
                    })(),
                    C = (function () {
                        function e() {}
                        var t = e.prototype;
                        return (
                            (t.createRenderCanvas = function () {
                                var e = this;
                                (this.renderCanvas = document.createElement("canvas")),
                                    (this.renderCanvas.id = "renderer"),
                                    document.body.appendChild(this.renderCanvas),
                                    this.renderCanvas.addEventListener("click", function (t) {
                                        e.onCanvasTouch(t);
                                    });
                            }),
                            (t.setRenderCanvas = function (e) {
                                var t = this;
                                (this.renderCanvas = e),
                                    this.renderCanvas.addEventListener("click", function (e) {
                                        t.onCanvasTouch(e);
                                    });
                            }),
                            (t.removeRenderCanvas = function () {
                                this.renderCanvas && (this.renderCanvas.remove(), (this.renderCanvas = null));
                            }),
                            (t.createVideoElement = function (e) {
                                var t = document.createElement("video");
                                t.setAttribute("playsinline", "true"),
                                    t.setAttribute("autoplay", "true"),
                                    t.setAttribute("muted", ""),
                                    (this.videoCanvas = document.createElement("canvas")),
                                    (this.videoCanvas.width = 640),
                                    (this.videoCanvas.height = 480),
                                    (this.videoContext = this.videoCanvas.getContext("2d")),
                                    (t.srcObject = e),
                                    document.body.appendChild(t),
                                    (this.videoElement = t);
                                var n = this.videoElement.srcObject.getVideoTracks()[0].getSettings();
                                (this.videoSizeHorizontal = [Math.max(n.width, n.height), Math.min(n.width, n.height)]), (this.videoSizeVertical = [Math.min(n.width, n.height), Math.max(n.width, n.height)]);
                            }),
                            (t.removeVideoElement = function () {
                                this.videoElement && (this.videoElement.remove(), (this.videoElement = null));
                            }),
                            (t.fitVideoToScreen = function () {
                                this.videoSize = window.innerWidth > window.innerHeight ? this.videoSizeHorizontal : this.videoSizeVertical;
                                var e,
                                    t = [];
                                (e =
                                    this.videoSize[0] / this.videoSize[1] > window.innerWidth / window.innerHeight
                                        ? [-((t = [Math.floor(this.videoSize[0] * (window.innerHeight / this.videoSize[1])), window.innerHeight])[0] - window.innerWidth) / 2, 0]
                                        : [0, -((t = [window.innerWidth, Math.floor(this.videoSize[1] * (window.innerWidth / this.videoSize[0]))])[1] - window.innerHeight) / 2]),
                                    document.body.style.setProperty("overflow", "hidden"),
                                    (this.videoElement.width = t[0]),
                                    (this.videoElement.height = t[1]),
                                    this.videoElement.style.setProperty("position", "absolute"),
                                    this.videoElement.style.setProperty("z-index", "-1"),
                                    this.videoElement.style.setProperty("width", t[0] + "px"),
                                    this.videoElement.style.setProperty("height", t[1] + "px"),
                                    this.videoElement.style.setProperty("left", e[0] + "px"),
                                    this.videoElement.style.setProperty("top", e[1] + "px"),
                                    this.videoElement.style.setProperty("touch-action", "none"),
                                    (this.renderCanvas.width = t[0]),
                                    (this.renderCanvas.height = t[1]),
                                    this.renderCanvas.style.setProperty("position", "absolute", "important"),
                                    this.renderCanvas.style.setProperty("width", t[0] + "px", "important"),
                                    this.renderCanvas.style.setProperty("height", t[1] + "px", "important"),
                                    this.renderCanvas.style.setProperty("left", e[0] + "px", "important"),
                                    this.renderCanvas.style.setProperty("top", e[1] + "px", "important"),
                                    this.renderCanvas.style.setProperty("touch-action", "none", "important");
                            }),
                            (t.displayPermissionsDialog = function (e) {
                                try {
                                    return Promise.resolve(
                                        new Promise(function (t, n) {
                                            var r, i, o;
                                            ((r = document.createElement("div")).id = "ox-permissions-dialog"),
                                                r.style.setProperty("position", "absolute"),
                                                r.style.setProperty("z-index", "999999"),
                                                r.style.setProperty("width", "360px"),
                                                r.style.setProperty("height", "180px"),
                                                r.style.setProperty("left", "calc(50% - 180px)"),
                                                r.style.setProperty("top", "calc(50% - 90px)"),
                                                r.style.setProperty("background-color", "#FFFFFF"),
                                                r.style.setProperty("font-family", "Arial, sans-serif"),
                                                document.body.appendChild(r),
                                                ((i = document.createElement("span")).id = "ox-permissions-dialog-message"),
                                                (i.innerText = "This augmented reality experience requires access to your phone motion sensors. The browser may ask you for permissions."),
                                                i.style.setProperty("display", "block"),
                                                i.style.setProperty("padding", "30px 20px"),
                                                r.appendChild(i),
                                                ((o = document.createElement("button")).id = "ox-permissions-dialog-ok-button"),
                                                (o.innerText = "Okay!"),
                                                o.style.setProperty("display", "block"),
                                                o.style.setProperty("margin", "auto"),
                                                o.style.setProperty("background", "#000000"),
                                                o.style.setProperty("color", "#FFFFFF"),
                                                o.style.setProperty("border", "none"),
                                                o.style.setProperty("border-radius", "5px"),
                                                o.style.setProperty("padding", "10px 20px"),
                                                r.appendChild(o),
                                                o.addEventListener("click", function (i) {
                                                    try {
                                                        i.stopPropagation(), r.remove();
                                                        var o = (function (n, r) {
                                                            try {
                                                                var i = Promise.resolve(e()).then(function () {
                                                                    t();
                                                                });
                                                            } catch (e) {
                                                                return r(e);
                                                            }
                                                            return i && i.then ? i.then(void 0, r) : i;
                                                        })(0, function (e) {
                                                            n(e);
                                                        });
                                                        return Promise.resolve(o && o.then ? o.then(function () {}) : void 0);
                                                    } catch (e) {
                                                        return Promise.reject(e);
                                                    }
                                                });
                                        })
                                    );
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                            (t.getVideoData = function () {
                                var e;
                                if (this.videoElement) {
                                    if (this.isPortrait()) {
                                        var t = Math.PI / 2;
                                        this.videoContext.translate(320, 240),
                                            this.videoContext.rotate(t),
                                            this.videoContext.drawImage(this.videoElement, -240, -320, 480, 640),
                                            this.videoContext.rotate(-t),
                                            this.videoContext.translate(-320, -240);
                                    } else this.videoContext.drawImage(this.videoElement, 0, 0, 640, 480);
                                    e = this.videoContext.getImageData(0, 0, 640, 480).data;
                                }
                                return e;
                            }),
                            (t.getVideoElement = function () {
                                return this.videoElement;
                            }),
                            (t.getCameraParameters = function () {
                                return { fov: A(2 * Math.atan(this.videoSize[1] / 1280)), aspect: this.videoSize[0] / this.videoSize[1] };
                            }),
                            (t.isPortrait = function () {
                                return window.innerWidth < window.innerHeight;
                            }),
                            (t.setTouchListener = function (e) {
                                this.onTouch = e;
                            }),
                            (t.onCanvasTouch = function (e) {
                                var t = new E(),
                                    n = this.renderCanvas.getBoundingClientRect();
                                (t.x = ((e.clientX - n.left) / n.width) * 2 - 1), (t.y = (-(e.clientY - n.top) / n.height) * 2 + 1), this.onTouch && this.onTouch(t);
                            }),
                            e
                        );
                    })(),
                    T = (function () {
                        function e(e) {
                            this.uiManager = e;
                        }
                        var t = e.prototype;
                        return (
                            (t.startCamera = function () {
                                try {
                                    var e = this;
                                    return Promise.resolve(
                                        (function (t, n) {
                                            try {
                                                var r = Promise.resolve(navigator.mediaDevices.enumerateDevices()).then(function (t) {
                                                    var n = t[t.length - 1];
                                                    t.forEach(function (e) {
                                                        "videoinput" === e.kind && (n = e);
                                                    });
                                                    var r = { facingMode: "environment", width: 640, height: 480 };
                                                    return (
                                                        n && n.deviceId && "" !== n.deviceId && (r.deviceId = { exact: n.deviceId }),
                                                        Promise.resolve(navigator.mediaDevices.getUserMedia({ video: r, audio: !1 })).then(function (t) {
                                                            (e.stream = t), e.uiManager.createVideoElement(e.stream);
                                                        })
                                                    );
                                                });
                                            } catch (e) {
                                                return n(e);
                                            }
                                            return r && r.then ? r.then(void 0, n) : r;
                                        })(0, function (e) {
                                            throw new p(e);
                                        })
                                    );
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                            (t.stopCamera = function () {
                                this.stream &&
                                    (this.stream.getTracks().forEach(function (e) {
                                        e.stop();
                                    }),
                                    this.uiManager.removeVideoElement());
                            }),
                            e
                        );
                    })(),
                    j = (function () {
                        function e(e, t) {
                            (this.uiManager = e), (this.deviceManager = t);
                        }
                        var t = e.prototype;
                        return (
                            (t.start = function (e) {
                                try {
                                    var t = this;
                                    t.onPose = e;
                                    var n = function () {
                                            try {
                                                return (
                                                    (t.onDeviceOrientationChange = t.onDeviceOrientationChange.bind(t)),
                                                    Promise.resolve(
                                                        (function () {
                                                            if (void 0 !== window.DeviceOrientationEvent && "function" == typeof window.DeviceOrientationEvent.requestPermission) {
                                                                var e,
                                                                    n = function (n) {
                                                                        if ("granted" != e) throw new v("DeviceOrientation permissions were rejected");
                                                                        window.addEventListener("deviceorientation", t.onDeviceOrientationChange);
                                                                    },
                                                                    r = (function (t, n) {
                                                                        try {
                                                                            var r = Promise.resolve(window.DeviceOrientationEvent.requestPermission()).then(function (t) {
                                                                                e = t;
                                                                            });
                                                                        } catch (e) {
                                                                            return n();
                                                                        }
                                                                        return r && r.then ? r.then(void 0, n) : r;
                                                                    })(0, function () {
                                                                        throw new v("DeviceOrientation API is not supported");
                                                                    });
                                                                return r && r.then ? r.then(n) : n();
                                                            }
                                                            window.addEventListener("deviceorientation", t.onDeviceOrientationChange);
                                                        })()
                                                    )
                                                );
                                            } catch (e) {
                                                return Promise.reject(e);
                                            }
                                        },
                                        r = t.deviceManager.os === _.OS.iOS ? Promise.resolve(t.uiManager.displayPermissionsDialog(n)).then(function () {}) : Promise.resolve(n()).then(function () {});
                                    return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                            (t.stop = function () {
                                window.removeEventListener("deviceorientation", this.onDeviceOrientationChange);
                            }),
                            (t.onDeviceOrientationChange = function (e) {
                                if (e.alpha && e.beta && e.gamma) {
                                    var t = F(e.alpha),
                                        n = F(e.beta),
                                        r = F(e.gamma),
                                        i = new k(n, t, -r, "YXZ"),
                                        o = new P(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)),
                                        a = new P();
                                    a.setFromEuler(i), (a = a.multiply(o));
                                    var s = F(window.orientation || 0);
                                    a.multiply(new P().setFromAxisAngle(new M(0, 0, 1), -s));
                                    var u = new x().makeRotationFromQuaternion(a),
                                        c = new S();
                                    c.setRotation(u), this.onPose(c.toArray());
                                    var l = new M(0, 0, 0),
                                        d = new M(-u.elements[6], -u.elements[7], -u.elements[8]);
                                    this.emulatedHitTest(l, d);
                                }
                            }),
                            (t.emulatedHitTest = function (e, t) {
                                if (this.onHitTestResult) {
                                    var n = new M(0, 1, 0),
                                        r = new M(0, -1, 0),
                                        i = t.dot(n);
                                    if (Math.abs(i) > 1e-6) {
                                        var o = r.sub(e).dot(n),
                                            a = { position: e.add(t.multiplyScalar(o / i)), rotation: new P().setFromEuler(0, 1, 0) };
                                        this.onHitTestResult(a);
                                    }
                                }
                            }),
                            (t.setHitTestListener = function (e) {
                                this.onHitTestResult = e;
                            }),
                            e
                        );
                    })(),
                    z = (function () {
                        function e(e) {
                            this.uiManager = e;
                        }
                        var t = e.prototype;
                        return (
                            (t.isWebXRSupported = function () {
                                try {
                                    var e = !1,
                                        t = (function () {
                                            if (navigator.xr)
                                                return Promise.resolve(navigator.xr.isSessionSupported("immersive-ar")).then(function (t) {
                                                    e = t;
                                                });
                                        })();
                                    return Promise.resolve(
                                        t && t.then
                                            ? t.then(function () {
                                                  return e;
                                              })
                                            : e
                                    );
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                            (t.start = function (e, t) {
                                try {
                                    var n = this;
                                    return (
                                        (n.onPose = e),
                                        (n.onSessionEnd = t),
                                        Promise.resolve(
                                            n.uiManager.displayPermissionsDialog(function () {
                                                try {
                                                    return Promise.resolve(
                                                        (function (e, t) {
                                                            try {
                                                                var r = Promise.resolve(navigator.xr.requestSession("immersive-ar", { requiredFeatures: ["hit-test", "dom-overlay"], domOverlay: { root: document.body } })).then(function (e) {
                                                                    return Promise.resolve(n.onXRSessionStarted(e)).then(function () {});
                                                                });
                                                            } catch (e) {
                                                                return t(e);
                                                            }
                                                            return r && r.then ? r.then(void 0, t) : r;
                                                        })(0, function (e) {
                                                            throw new v("error while initializing webXR API: " + e);
                                                        })
                                                    );
                                                } catch (e) {
                                                    return Promise.reject(e);
                                                }
                                            })
                                        ).then(function () {})
                                    );
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                            (t.stop = function () {
                                try {
                                    var e = this,
                                        t = (function () {
                                            if (e.xrSession)
                                                return Promise.resolve(e.xrSession.end()).then(function () {
                                                    (e.xrSession = null), (e.xrLastPose = null);
                                                });
                                        })();
                                    return Promise.resolve(t && t.then ? t.then(function () {}) : void 0);
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                            (t.onXRSessionStarted = function (e) {
                                try {
                                    var t = this,
                                        n = function () {
                                            return (
                                                (t.xrContext = r),
                                                e.updateRenderState({ baseLayer: new XRWebGLLayer(e, t.xrContext) }),
                                                Promise.resolve(e.requestReferenceSpace("local")).then(function (n) {
                                                    return (
                                                        (t.xrLocalRefSpace = n),
                                                        Promise.resolve(e.requestReferenceSpace("viewer")).then(function (n) {
                                                            return (
                                                                (t.xrViewerRefSpace = n),
                                                                Promise.resolve(e.requestHitTestSource({ space: t.xrViewerRefSpace })).then(function (n) {
                                                                    (t.xrHitTestSource = n),
                                                                        e.requestAnimationFrame(t.onXRFrame.bind(t)),
                                                                        e.addEventListener("selectstart", function (e) {
                                                                            var n = e.inputSource.gamepad.axes;
                                                                            t.onTouch && t.onTouch(new E(n[0], -n[1]));
                                                                        }),
                                                                        e.addEventListener("end", t.onSessionEnd),
                                                                        (t.xrSession = e);
                                                                })
                                                            );
                                                        })
                                                    );
                                                })
                                            );
                                        },
                                        r = t.uiManager.renderCanvas.getContext("webgl");
                                    r || (r = t.uiManager.renderCanvas.getContext("webgl2"));
                                    var i = r.getContextAttributes(),
                                        o = (function () {
                                            if (!i.xrCompatible) return Promise.resolve(r.makeXRCompatible()).then(function () {});
                                        })();
                                    return Promise.resolve(o && o.then ? o.then(n) : n());
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                            }),
                            (t.onXRFrame = function (e, t) {
                                var n = t.session;
                                n.requestAnimationFrame(this.onXRFrame.bind(this)), this.xrContext.bindFramebuffer(this.xrContext.FRAMEBUFFER, n.renderState.baseLayer.framebuffer);
                                var r = t.getViewerPose(this.xrLocalRefSpace);
                                if (r) {
                                    this.onPose(r.transform.matrix);
                                    var i = null == this.xrLastPose;
                                    (this.xrLastPose = r), i && this.onResize && this.onResize();
                                    var o = t.getHitTestResults(this.xrHitTestSource);
                                    if (o.length > 0) {
                                        var a = o[0].getPose(this.xrLocalRefSpace);
                                        this.onHitTestResult({ position: a.transform.position, rotation: a.transform.orientation });
                                    }
                                }
                            }),
                            (t.fitCanvasToXRViewport = function () {
                                if (this.xrLastPose) {
                                    var e = this.xrSession.renderState.baseLayer.getViewport(this.xrLastPose.views[0]);
                                    (this.uiManager.renderCanvas.width = e.width), (this.uiManager.renderCanvas.height = e.height);
                                }
                            }),
                            (t.getCameraParameters = function () {
                                var e = 60,
                                    t = 9 / 16;
                                if (this.xrSession && this.xrLastPose) {
                                    var n = this.xrLastPose.views[0].projectionMatrix;
                                    (e = A(2 * Math.atan(1 / n[5]))), (t = n[5] / n[0]);
                                }
                                return { fov: e, aspect: t };
                            }),
                            (t.setResizeListener = function (e) {
                                this.onResize = e;
                            }),
                            (t.setTouchListener = function (e) {
                                this.onTouch = e;
                            }),
                            (t.setHitTestListener = function (e) {
                                this.onHitTestResult = e;
                            }),
                            e
                        );
                    })(),
                    B = (function () {
                        function e() {
                            (this.eventListeners = {}), (this.eventListenerCount = 0);
                        }
                        var t = e.prototype;
                        return (
                            (t.addEventListener = function (e, t) {
                                this.eventListeners[e] || (this.eventListeners[e] = []);
                                var n = this.eventListenerCount++;
                                return this.eventListeners[e].push({ id: n, func: t }), n;
                            }),
                            (t.triggerEvent = function (e, t) {
                                this.eventListeners[e] &&
                                    this.eventListeners[e].map(function (e) {
                                        return e.func(t);
                                    });
                            }),
                            (t.removeEventListener = function (e) {
                                for (var t = 0, n = Object.keys(this.eventListeners); t < n.length; t++)
                                    for (var r = n[t], i = 0; i < r.length; i++)
                                        if (r[i].id === e) {
                                            r.splice(i, 1);
                                            break;
                                        }
                            }),
                            e
                        );
                    })();
                function I(e, t, n) {
                    if (!e.s) {
                        if (n instanceof X) {
                            if (!n.s) return void (n.o = I.bind(null, e, t));
                            1 & t && (t = n.s), (n = n.v);
                        }
                        if (n && n.then) return void n.then(I.bind(null, e, t), I.bind(null, e, 2));
                        (e.s = t), (e.v = n);
                        var r = e.o;
                        r && r(e);
                    }
                }
                var N = (function () {
                        function e(e) {
                            (this.authToken = e),
                                (this.deviceManager = new _()),
                                (this.uiManager = new C()),
                                (this.nativeManager = new R(this.uiManager, this.deviceManager)),
                                (this.cameraManager = new T(this.uiManager)),
                                (this.webXRManager = new z(this.uiManager)),
                                (this.gyroManager = new j(this.uiManager, this.deviceManager)),
                                (this.eventManager = new B());
                        }
                        var t = e.prototype;
                        return (
                            (t.init = function (e) {
                                try {
                                    var t = this;
                                    (t.usingWebXR = !1), (t.stopSignal = !1);
                                    var n = t.readConfig(e);
                                    return (
                                        (t.mode = n.mode),
                                        Promise.resolve(t.nativeManager.init(t.authToken, n)).then(function () {
                                            function e() {
                                                function e() {
                                                    return (
                                                        t.onResize(),
                                                        window.addEventListener("resize", function (e) {
                                                            return t.onResize();
                                                        }),
                                                        t.uiManager.renderCanvas
                                                    );
                                                }
                                                var n = (function () {
                                                    if (!t.usingWebXR)
                                                        return Promise.resolve(t.cameraManager.startCamera()).then(function () {
                                                            t.uiManager.setTouchListener(t.onTouch.bind(t));
                                                        });
                                                })();
                                                return n && n.then ? n.then(e) : e();
                                            }
                                            n.renderCanvas ? t.uiManager.setRenderCanvas(n.renderCanvas) : t.uiManager.createRenderCanvas();
                                            var r = W(t.mode, [
                                                [
                                                    function () {
                                                        return i.Surface;
                                                    },
                                                    function () {
                                                        return Promise.resolve(t.webXRManager.isWebXRSupported()).then(function (e) {
                                                            var r = (function () {
                                                                if (n.useWebXR && e)
                                                                    return Promise.resolve(
                                                                        t.webXRManager.start(t.onPose.bind(t), function () {
                                                                            return t.stop();
                                                                        })
                                                                    ).then(function () {
                                                                        t.webXRManager.setTouchListener(t.onTouch.bind(t)),
                                                                            t.webXRManager.setHitTestListener(t.onHitTestResult.bind(t)),
                                                                            t.webXRManager.setResizeListener(t.onResize.bind(t)),
                                                                            (t.usingWebXR = !0);
                                                                    });
                                                                t.gyroManager.start(t.onPose.bind(t)), t.gyroManager.setHitTestListener(t.onHitTestResult.bind(t));
                                                            })();
                                                            if (r && r.then) return r.then(function () {});
                                                        });
                                                    },
                                                ],
                                                [
                                                    function () {
                                                        return i.Image;
                                                    },
                                                    function () {
                                                        t.nativeManager.startImageTracking(t.onDetected.bind(t), t.onPose.bind(t), t.onLost.bind(t)), t.processLoop();
                                                    },
                                                ],
                                                [
                                                    function () {
                                                        return i.QRCode;
                                                    },
                                                    function () {
                                                        t.nativeManager.startQRCodeTracking(t.onDetected.bind(t), t.onPose.bind(t), t.onLost.bind(t)), t.processLoop();
                                                    },
                                                ],
                                            ]);
                                            return r && r.then ? r.then(e) : e();
                                        })
                                    );
                                } catch (i) {
                                    return Promise.reject(i);
                                }
                            }),
                            (t.stop = function () {
                                try {
                                    var e = this,
                                        t = function () {
                                            e.nativeManager.destroy(), e.usingWebXR || e.cameraManager.stopCamera(), e.uiManager.renderCanvas.remove();
                                        },
                                        n = function () {};
                                    e.stopSignal = !0;
                                    var r = W(e.mode, [
                                        [
                                            function () {
                                                return i.Surface;
                                            },
                                            function () {
                                                var t = (function () {
                                                    if (e.usingWebXR) return Promise.resolve(e.webXRManager.stop()).then(function () {});
                                                    e.gyroManager.stop();
                                                })();
                                                return t && t.then ? t.then(n) : void 0;
                                            },
                                        ],
                                        [
                                            function () {
                                                return i.Image;
                                            },
                                            function () {
                                                e.nativeManager.stopImageTracking();
                                            },
                                        ],
                                        [
                                            function () {
                                                return i.QRCode;
                                            },
                                            function () {
                                                e.nativeManager.stopQRCodeTracking();
                                            },
                                        ],
                                    ]);
                                    return Promise.resolve(r && r.then ? r.then(t) : t());
                                } catch (i) {
                                    return Promise.reject(i);
                                }
                            }),
                            (t.readConfig = function (e) {
                                if (!e) throw new h("A config object must be provided.");
                                if (!e.mode) throw new h("'mode' is a required parameter.");
                                if (e.mode <= 0 || e.mode > 3) throw new h("Selected mode is not a valid tracking mode.");
                                return Object.assign(a, e);
                            }),
                            (t.processLoop = function () {
                                var e = this;
                                if (!this.stopSignal) {
                                    var t = this.uiManager.getVideoData();
                                    t && this.nativeManager.processFrame(t),
                                        requestAnimationFrame(function () {
                                            return e.processLoop();
                                        });
                                }
                            }),
                            (t.getCameraParameters = function () {
                                return this.usingWebXR ? this.webXRManager.getCameraParameters() : this.uiManager.getCameraParameters();
                            }),
                            (t.getCameraFeed = function () {
                                return this.uiManager.getVideoElement();
                            }),
                            (t.addImage = function (e) {
                                try {
                                    var t = this;
                                    return Promise.resolve(
                                        ((n = e),
                                        new Promise(function (e, t) {
                                            var r = new Image();
                                            r.addEventListener("load", function () {
                                                return e(r);
                                            }),
                                                r.addEventListener("error", function (e) {
                                                    return t(e);
                                                }),
                                                (r.src = n);
                                        }))
                                    ).then(function (e) {
                                        var n = document.createElement("canvas");
                                        (n.width = 640), (n.height = 480);
                                        var r = n.getContext("2d");
                                        r.drawImage(e, 0, 0);
                                        var i = r.getImageData(0, 0, 640, 480).data;
                                        t.nativeManager.addImage("test", i);
                                    });
                                } catch (e) {
                                    return Promise.reject(e);
                                }
                                var n;
                            }),
                            (t.onPose = function (e) {
                                this.eventManager.triggerEvent(o.OnPose, e);
                            }),
                            (t.onDetected = function (e) {
                                this.eventManager.triggerEvent(o.OnDetected, e);
                            }),
                            (t.onLost = function (e) {
                                this.eventManager.triggerEvent(o.OnLost, e);
                            }),
                            (t.onResize = function () {
                                this.usingWebXR ? this.webXRManager.fitCanvasToXRViewport() : this.uiManager.fitVideoToScreen(), this.eventManager.triggerEvent(o.OnResize);
                            }),
                            (t.onTouch = function (e) {
                                this.eventManager.triggerEvent(o.OnTouch, e);
                            }),
                            (t.onHitTestResult = function (e) {
                                this.eventManager.triggerEvent(o.OnHitTestResult, e);
                            }),
                            (t.subscribe = function (e, t) {
                                return this.eventManager.addEventListener(e, t);
                            }),
                            (t.unsubscribe = function (e) {
                                this.eventManager.removeEventListener(e);
                            }),
                            e
                        );
                    })(),
                    X = (function () {
                        function e() {}
                        return (
                            (e.prototype.then = function (t, n) {
                                var r = new e(),
                                    i = this.s;
                                if (i) {
                                    var o = 1 & i ? t : n;
                                    if (o) {
                                        try {
                                            I(r, 1, o(this.v));
                                        } catch (e) {
                                            I(r, 2, e);
                                        }
                                        return r;
                                    }
                                    return this;
                                }
                                return (
                                    (this.o = function (e) {
                                        try {
                                            var i = e.v;
                                            1 & e.s ? I(r, 1, t ? t(i) : i) : n ? I(r, 1, n(i)) : I(r, 2, i);
                                        } catch (e) {
                                            I(r, 2, e);
                                        }
                                    }),
                                    r
                                );
                            }),
                            e
                        );
                    })();
                function W(e, t) {
                    var n,
                        r = -1;
                    e: {
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i][0];
                            if (o) {
                                var a = o();
                                if (a && a.then) break e;
                                if (a === e) {
                                    r = i;
                                    break;
                                }
                            } else r = i;
                        }
                        if (-1 !== r) {
                            do {
                                for (var s = t[r][1]; !s; ) r++, (s = t[r][1]);
                                var u = s();
                                if (u && u.then) {
                                    n = !0;
                                    break e;
                                }
                                var c = t[r][2];
                                r++;
                            } while (c && !c());
                            return u;
                        }
                    }
                    var l = new X(),
                        d = I.bind(null, l, 2);
                    return (
                        (n
                            ? u.then(f)
                            : a.then(function n(a) {
                                  for (;;) {
                                      if (a === e) {
                                          r = i;
                                          break;
                                      }
                                      if (++i === t.length) {
                                          if (-1 !== r) break;
                                          return void I(l, 1, u);
                                      }
                                      if ((o = t[i][0])) {
                                          if ((a = o()) && a.then) return void a.then(n).then(void 0, d);
                                      } else r = i;
                                  }
                                  do {
                                      for (var s = t[r][1]; !s; ) r++, (s = t[r][1]);
                                      var u = s();
                                      if (u && u.then) return void u.then(f).then(void 0, d);
                                      var c = t[r][2];
                                      r++;
                                  } while (c && !c());
                                  I(l, 1, u);
                              })
                        ).then(void 0, d),
                        l
                    );
                    function f(e) {
                        for (;;) {
                            var n = t[r][2];
                            if (!n || n()) break;
                            r++;
                            for (var i = t[r][1]; !i; ) r++, (i = t[r][1]);
                            if ((e = i()) && e.then) return void e.then(f).then(void 0, d);
                        }
                        I(l, 1, e);
                    }
                }
                (N.TrackingMode = i), (N.Events = o), (e.exports = N);
            },
        },
        t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = (t[r] = { id: r, loaded: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
    }
    (n.m = e),
        (function () {
            var e = [];
            n.O = function (t, r, i, o) {
                if (!r) {
                    var a = 1 / 0;
                    for (l = 0; l < e.length; l++) {
                        (r = e[l][0]), (i = e[l][1]), (o = e[l][2]);
                        for (var s = !0, u = 0; u < r.length; u++)
                            (!1 & o || a >= o) &&
                            Object.keys(n.O).every(function (e) {
                                return n.O[e](r[u]);
                            })
                                ? r.splice(u--, 1)
                                : ((s = !1), o < a && (a = o));
                        if (s) {
                            e.splice(l--, 1);
                            var c = i();
                            void 0 !== c && (t = c);
                        }
                    }
                    return t;
                }
                o = o || 0;
                for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
                e[l] = [r, i, o];
            };
        })(),
        (function () {
            n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e["default"];
                          }
                        : function () {
                              return e;
                          };
                return n.d(t, { a: t }), t;
            };
        })(),
        (function () {
            n.d = function (e, t) {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            };
        })(),
        (function () {
            n.g = (function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (e) {
                    if ("object" === typeof window) return window;
                }
            })();
        })(),
        (function () {
            n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            };
        })(),
        (function () {
            n.nmd = function (e) {
                return (e.paths = []), e.children || (e.children = []), e;
            };
        })(),
        (function () {
            var e = { 143: 0 };
            n.O.j = function (t) {
                return 0 === e[t];
            };
            var t = function (t, r) {
                    var i,
                        o,
                        a = r[0],
                        s = r[1],
                        u = r[2],
                        c = 0;
                    if (
                        a.some(function (t) {
                            return 0 !== e[t];
                        })
                    ) {
                        for (i in s) n.o(s, i) && (n.m[i] = s[i]);
                        if (u) var l = u(n);
                    }
                    for (t && t(r); c < a.length; c++) (o = a[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return n.O(l);
                },
                r = (self["webpackChunkmetaterrace_refactor"] = self["webpackChunkmetaterrace_refactor"] || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var r = n.O(void 0, [998], function () {
        return n(7768);
    });
    r = n.O(r);
})();
//# sourceMappingURL=app.22f067b3.js.map
