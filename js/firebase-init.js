import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC9afLl7h8KlllKbJB1te44QLS4Tn5_o-U",
    authDomain: "agltd-5f431.firebaseapp.com",
    projectId: "agltd-5f431",
    storageBucket: "agltd-5f431.firebasestorage.app",
    messagingSenderId: "460354903407",
    appId: "1:460354903407:web:7b109d7006d42690529c9a",
    measurementId: "G-MKSKZ0T4J0"
};

const app = initializeApp(firebaseConfig);

window.aquilagalaxyFirebase = { app, config: firebaseConfig };

isSupported()
    .then((supported) => {
        if (supported) {
            window.aquilagalaxyFirebase.analytics = getAnalytics(app);
        }
    })
    .catch(() => {
        // Analytics is optional and may be unavailable in some local/browser contexts.
    });
