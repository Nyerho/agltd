$(document).ready(function () {
    const STORAGE_KEY = "aquilagalaxy_site_content_v1";
    const FIRESTORE_SYNC_KEY = "aquilagalaxy_firestore_last_sync_v1";
    const defaults = {
        home_hero_tag: "Corporate Profile",
        home_hero_headline_1: "Engineering. Construction.",
        home_hero_headline_2: "Energy Solutions.",
        home_hero_sub: "Pipelay & Maintenance | Fabrication | Corrosion Control | Manpower Supply",
        home_services_span: "Our Services",
        home_services_title: "Integrated service categories across engineering and operations",
        home_services_intro: "Our capabilities support project delivery from concept to field execution, upgrade, maintenance, and manpower mobilization.",
        home_services_cards: [],
        home_whoweare_span: "Who We Are",
        home_whoweare_title: "Multidisciplinary local content capacity with international standards.",
        home_whoweare_img: "img/slider-2.jpg",
        home_whoweare_p1: "",
        home_whoweare_p2: "",
        home_projects_span: "Recent Projects",
        home_projects_title: "Selected field and construction engagements",
        home_projects_intro: "Our project team works with qualified personnel, clear coordination, and close customer collaboration to achieve quality and timely delivery.",
        home_partners_span: "Our Partners",
        home_partners_title: "Organizations we are proud to have served",
        home_partners_intro: "We take pride in the reputation we have built with our clients and technical partners across the Energy industry.",
        about_title: "About Aquilagalaxy Solutions",
        about_sub: "",
        about_whoweare_title: "WHO WE ARE",
        about_whoweare_body: "",
        about_mission: "",
        about_vision: "",
        about_values: "",
        about_responsibility: "",
        about_objectives: [],
        services_title: "Our Services",
        services_sub: "",
        services_intro: "",
        services_cards: [],
        services_training_title: "Human Capacity Development",
        services_training_body: "",
        services_training_topics: [],
        projects_title: "Projects & Case Studies",
        projects_sub: "",
        projects_list: [],
        contact_company: "Aquilagalaxy Solutions",
        contact_rc: "RC 7388816",
        contact_website: "https://aquilagalaxy.com",
        contact_address: "No. 1 Edjeba Town By Shell Gate, Warri, Delta State, Nigeria",
        contact_email1: "info@aquilagalaxy.com",
        contact_email2: "aquilgalaaxy1@gmail.com",
        contact_phone1: "",
        contact_phone2: "",
        contact_copyright: "Copyright 2026 Aquilagalaxy Solutions. All rights reserved.",
        contact_hero_title: "Contact Aquilagalaxy Solutions",
        contact_hero_sub: "",
        partners: [],
        img_hero1: "",
        img_hero2: "",
        img_hero3: "",
        img_mission: "",
        img_training: "",
        img_about_hero: "",
        img_services_hero: "",
        img_projects_hero: "",
        img_contact_hero: ""
    };

    let siteContent = {};
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            siteContent = Object.assign({}, defaults, JSON.parse(raw));
        } else {
            siteContent = defaults;
        }
    } catch (e) {
        siteContent = defaults;
    }

    function setText(id, value) {
        const $el = $("#" + id);
        if ($el.length && value !== undefined && value !== null && value !== "") {
            $el.text(value);
        }
    }

    function setHtml(id, html) {
        const $el = $("#" + id);
        if ($el.length && html) $el.html(html);
    }

    function paragraphsToHtml(text) {
        if (!text) return "";
        const parts = String(text).split(/\n\s*\n/).filter(Boolean);
        return parts.map(p => "<p>" + p.trim() + "</p>").join("\n");
    }

    function applyContactFooter() {
        $(".agl-footer-address").text(siteContent.contact_address);
        $(".agl-footer-email1").attr("href", "mailto:" + siteContent.contact_email1).text(siteContent.contact_email1);
        $(".agl-footer-email2").attr("href", "mailto:" + siteContent.contact_email2).text(siteContent.contact_email2);
        $(".agl-footer-phone1").attr("href", "tel:" + siteContent.contact_phone1.replace(/\s/g, "")).text(siteContent.contact_phone1);
        $(".agl-footer-phone2").attr("href", "tel:" + siteContent.contact_phone2.replace(/\s/g, "")).text(siteContent.contact_phone2);
        if (siteContent.contact_phone1) $(".agl-footer-phone1-wrap").show();
        if (siteContent.contact_phone2) $(".agl-footer-phone2-wrap").show();
        $(".agl-footer-rc").text(siteContent.contact_rc);
        $(".agl-footer-website").attr("href", siteContent.contact_website).text(siteContent.contact_website);
        $(".agl-footer-company").text(siteContent.contact_company);
        $(".agl-copyright").text(siteContent.contact_copyright);

        $(".agl-footer-address-inline").text(siteContent.contact_address);
        $(".agl-footer-rc-inline").text(siteContent.contact_rc);
        $(".agl-footer-email1-inline").attr("href", "mailto:" + siteContent.contact_email1).text(siteContent.contact_email1);
        $(".agl-footer-email2-inline").attr("href", "mailto:" + siteContent.contact_email2).text(siteContent.contact_email2);
    }

    function applyImageOverrides() {
        const styleId = "agl-image-overrides";
        if ($("#" + styleId).length) $("#" + styleId).remove();
        let css = "";
        if (siteContent.img_hero1) css += `.aquila-hero-slide.hero-one .bg-img{ background-image: url('${siteContent.img_hero1}') !important; }`;
        if (siteContent.img_hero2) css += `.aquila-hero-slide.hero-two .bg-img{ background-image: url('${siteContent.img_hero2}') !important; }`;
        if (siteContent.img_hero3) css += `.aquila-hero-slide.hero-three .bg-img{ background-image: url('${siteContent.img_hero3}') !important; }`;
        if (siteContent.img_mission) css += `.image-content-one{ background-image: url('${siteContent.img_mission}') !important; }`;
        if (siteContent.img_training) css += `.image-content-two{ background-image: url('${siteContent.img_training}') !important; }`;
        if (siteContent.img_about_hero) css += `.agl-page-header-about{ background-image: url('${siteContent.img_about_hero}') !important; }`;
        if (siteContent.img_services_hero) css += `.agl-page-header-services{ background-image: url('${siteContent.img_services_hero}') !important; }`;
        if (siteContent.img_projects_hero) css += `.agl-page-header-projects{ background-image: url('${siteContent.img_projects_hero}') !important; }`;
        if (siteContent.img_contact_hero) css += `.agl-page-header-contact{ background-image: url('${siteContent.img_contact_hero}') !important; }`;
        if (css) {
            $("<style>").attr("id", styleId).html(css).appendTo("head");
        }
    }

    applyContactFooter();
    applyImageOverrides();

    async function maybeSyncFromFirestore() {
        if (!window.aquilagalaxyFirebase || !window.aquilagalaxyFirebase.app) return false;
        try {
            const [{ getFirestore, doc, getDoc, onSnapshot }] = await Promise.all([
                import("https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js")
            ]);
            const db = getFirestore(window.aquilagalaxyFirebase.app);
            const ref = doc(db, "siteContent", "v1");
            const snap = await getDoc(ref);
            if (snap.exists()) {
                const live = snap.data();
                const newContent = Object.assign({}, defaults, live);
                delete newContent.publishedAt;
                delete newContent.publishedBy;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
                localStorage.setItem(FIRESTORE_SYNC_KEY, String(Date.now()));
                siteContent = newContent;
                try {
                    onSnapshot(ref, (s) => {
                        if (!s.exists()) return;
                        const l = s.data();
                        const merged = Object.assign({}, defaults, l);
                        delete merged.publishedAt;
                        delete merged.publishedBy;
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
                        localStorage.setItem(FIRESTORE_SYNC_KEY, String(Date.now()));
                        if (!window.location.pathname.toLowerCase().includes("admin.html")) {
                            setTimeout(() => window.location.reload(), 800);
                        }
                    });
                } catch (_) {}
                return true;
            }
        } catch (_) {}
        return false;
    }

    function renderAllContent() {
    const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

    if (path === "index.html" || path === "") {
        setText("agl_home_hero_tag", siteContent.home_hero_tag);
        setText("agl_home_hero_h1", siteContent.home_hero_headline_1);
        setText("agl_home_hero_h2", siteContent.home_hero_headline_2);
        setText("agl_home_hero_sub", siteContent.home_hero_sub);
        setText("agl_home_services_span", siteContent.home_services_span);
        setText("agl_home_services_title", siteContent.home_services_title);
        setText("agl_home_services_intro", siteContent.home_services_intro);

        if (siteContent.home_services_cards && siteContent.home_services_cards.length) {
            const $wrap = $("#agl_home_services_cards");
            if ($wrap.length) {
                $wrap.html("");
                siteContent.home_services_cards.forEach(c => {
                    $wrap.append(`<div class="col-lg-4 col-sm-6 sm-padding"><div class="aquila-info-card wow fadeInUp"><div class="aquila-icon-badge"><i class="${c.icon || 'fas fa-cog'}"></i></div><h3>${c.title || ''}</h3><p>${c.desc || ''}</p></div></div>`);
                });
            }
        }

        setText("agl_home_whoweare_span", siteContent.home_whoweare_span);
        setText("agl_home_whoweare_title", siteContent.home_whoweare_title);
        setText("agl_home_whoweare_p1", siteContent.home_whoweare_p1);
        setText("agl_home_whoweare_p2", siteContent.home_whoweare_p2);
        if (siteContent.home_whoweare_img) {
            $(".agl_home_whoweare_img").css("background-image", "url('" + siteContent.home_whoweare_img + "')");
        }
        setText("agl_home_projects_span", siteContent.home_projects_span);
        setText("agl_home_projects_title", siteContent.home_projects_title);
        setText("agl_home_projects_intro", siteContent.home_projects_intro);

        setText("agl_home_partners_span", siteContent.home_partners_span);
        setText("agl_home_partners_title", siteContent.home_partners_title);
        setText("agl_home_partners_intro", siteContent.home_partners_intro);

        if (siteContent.partners && siteContent.partners.length) {
            const $carousel = $("#agl_sponsor_carousel");
            if ($carousel.length) {
                const trigger = $carousel.data('owl-carousel');
                if (trigger) $carousel.trigger('destroy.owl.carousel');
                $carousel.html("");
                siteContent.partners.forEach(p => {
                    $carousel.append(`<div class="sponsor-item"><img src="${p.image || ''}" alt="${p.name || 'Partner logo'}"></div>`);
                });
                if ($.fn.owlCarousel) {
                    $carousel.owlCarousel({
                        loop: true,
                        margin: 30,
                        nav: false,
                        dots: false,
                        autoplay: true,
                        autoplayTimeout: 2500,
                        autoplayHoverPause: true,
                        responsive: { 0: { items: 2 }, 600: { items: 4 }, 1000: { items: 6 } }
                    });
                }
            }
        }
    }

    if (path === "about-company.html") {
        setText("agl_about_title", siteContent.about_title);
        setText("agl_about_sub", siteContent.about_sub);
        setText("agl_about_whoweare_title", siteContent.about_whoweare_title);
        setHtml("agl_about_whoweare_body", paragraphsToHtml(siteContent.about_whoweare_body));
        setText("agl_about_mission", siteContent.about_mission);
        setText("agl_about_vision", siteContent.about_vision);
        setText("agl_about_values", siteContent.about_values);
        setText("agl_about_responsibility", siteContent.about_responsibility);
        if (siteContent.about_objectives && siteContent.about_objectives.length) {
            const $ul = $("#agl_about_objectives");
            if ($ul.length) {
                $ul.html("");
                siteContent.about_objectives.forEach(o => $ul.append("<li>" + o + "</li>"));
            }
        }
    }

    if (path === "services-1.html") {
        setText("agl_services_title", siteContent.services_title);
        setText("agl_services_sub", siteContent.services_sub);
        setText("agl_services_intro", siteContent.services_intro);
        if (siteContent.services_cards && siteContent.services_cards.length) {
            const $wrap = $("#agl_services_cards");
            if ($wrap.length) {
                $wrap.html("");
                siteContent.services_cards.forEach(c => {
                    const bullets = (c.bullets || []).map(b => `<li>${b}</li>`).join("");
                    $wrap.append(`
<div class="col-lg-4 col-sm-6 sm-padding">
<div class="aquila-feature-box wow fadeInUp">
<div class="aquila-icon-badge"><i class="${c.icon || 'fas fa-cog'}"></i></div>
<h3>${c.title || ''}</h3>
<p>${c.body || ''}</p>
<ul class="aquila-feature-list">${bullets}</ul>
</div>
</div>`);
                });
            }
        }
        setText("agl_services_training_title", siteContent.services_training_title);
        setText("agl_services_training_body", siteContent.services_training_body);
        if (siteContent.services_training_topics && siteContent.services_training_topics.length) {
            const $ul = $("#agl_services_training_topics");
            if ($ul.length) {
                $ul.html("");
                siteContent.services_training_topics.forEach(t => $ul.append("<li>" + t + "</li>"));
            }
        }
    }

    if (path === "projects.html") {
        setText("agl_projects_title", siteContent.projects_title);
        setText("agl_projects_sub", siteContent.projects_sub);
        if (siteContent.projects_list && siteContent.projects_list.length) {
            const $wrap = $("#agl_projects_list");
            if ($wrap.length) {
                $wrap.html("");
                siteContent.projects_list.forEach(p => {
                    const venoImg = p.image || "img/project-1.jpg";
                    const clientHtml = p.client ? `<p><strong>Client:</strong> ${p.client}</p>` : "";
                    const locationHtml = p.location ? `<p><strong>Location:</strong> ${p.location}</p>` : "";
                    const stagesHtml = p.stages ? `<p><strong>Work Stages:</strong> ${p.stages}</p>` : "";
                    $wrap.append(`
<div class="col-lg-4 col-sm-6 sm-padding">
<div class="aquila-project-card wow fadeInUp">
<a class="venobox" data-vbtype="image" href="${venoImg}" aria-label="Preview ${p.title}">
<img src="${p.image || 'img/project-1.jpg'}" alt="${p.title || 'Project image'}">
</a>
<div class="aquila-project-body">
<span class="aquila-project-category">${p.category || ''}</span>
<h3>${p.title || ''}</h3>
${locationHtml}
${clientHtml}
${stagesHtml}
<a class="aquila-project-preview-link venobox" data-vbtype="image" href="${venoImg}">Preview Photo <i class="arrow_right"></i></a>
</div>
</div>
</div>`);
                });
                if ($.fn.venobox) {
                    $('.venobox').venobox({
                        bgcolor: '#0f2130',
                        border: '6px',
                        numeratio: true,
                        infinigall: true
                    });
                }
            }
        }
    }

    if (path === "contact.html") {
        setText("agl_contact_title", siteContent.contact_hero_title);
        setText("agl_contact_sub", siteContent.contact_hero_sub);
        setText("agl_contact_company_big", siteContent.contact_company);
        setText("agl_contact_address_big", siteContent.contact_address);
        setText("agl_contact_rc_big", siteContent.contact_rc);
        $(".agl_contact_email1_big").attr("href", "mailto:" + siteContent.contact_email1).text(siteContent.contact_email1);
        $(".agl_contact_email2_big").attr("href", "mailto:" + siteContent.contact_email2).text(siteContent.contact_email2);
        if (siteContent.contact_phone1) {
            $(".agl_contact_phone1_big_wrap").show();
            $(".agl_contact_phone1_big").attr("href", "tel:" + siteContent.contact_phone1.replace(/\s/g, "")).text(siteContent.contact_phone1);
        }
        if (siteContent.contact_phone2) {
            $(".agl_contact_phone2_big_wrap").show();
            $(".agl_contact_phone2_big").attr("href", "tel:" + siteContent.contact_phone2.replace(/\s/g, "")).text(siteContent.contact_phone2);
        }
    }

    $(document.body).append(`
<a href="admin.html" class="admin-padlock" title="Admin Panel" aria-label="Admin Panel">
<i class="fas fa-lock"></i>
</a>`);
    }

    renderAllContent();
    maybeSyncFromFirestore().then((updated) => {
        if (updated) {
            applyContactFooter();
            applyImageOverrides();
            renderAllContent();
        }
    }).catch(() => {});
});
