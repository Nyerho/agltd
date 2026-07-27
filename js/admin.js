$(document).ready(function () {
    const ADMIN_PASSWORD = "admin123";
    const STORAGE_KEY = "aquilagalaxy_site_content_v1";
    const SESSION_KEY = "aquilagalaxy_admin_session";

    const defaultContent = {
        home_hero_tag: "Corporate Profile",
        home_hero_headline_1: "Engineering. Construction.",
        home_hero_headline_2: "Energy Solutions.",
        home_hero_sub: "Pipelay & Maintenance | Fabrication | Corrosion Control | Manpower Supply",
        home_services_span: "Our Services",
        home_services_title: "Integrated service categories across engineering and operations",
        home_services_intro: "Our capabilities support project delivery from concept to field execution, upgrade, maintenance, and manpower mobilization.",
        home_services_cards: [
            { icon: "fas fa-tools", title: "Fabrication Services", desc: "Pipe fit up, welding, structural fabrication, and workshop support for field-ready outcomes." },
            { icon: "fas fa-tint", title: "Pipe Leak Repair", desc: "Clamp installation, split-tee works, sectional replacement, and pressure-tight repair interventions." },
            { icon: "fas fa-industry", title: "Facility Upgrade", desc: "Facility modification, valve integration, maintenance turnarounds, and operational improvement works." },
            { icon: "fas fa-bolt", title: "Mechanical & Electrical", desc: "Mechanical maintenance, electrification, instrumentation systems, and commissioning support." },
            { icon: "fas fa-hard-hat", title: "Civil Construction", desc: "Civil engineering and construction support for industrial and real estate development activities." },
            { icon: "fas fa-leaf", title: "Green Energy Solutions", desc: "Forward-looking support that aligns engineering delivery with safer and more sustainable practices." }
        ],
        home_whoweare_span: "Who We Are",
        home_whoweare_title: "Multidisciplinary local content capacity with international standards.",
        home_whoweare_img: "img/slider-2.jpg",
        home_whoweare_p1: "AQUILAGALAXY SOLUTIONS is a privately owned indigenous, tech-savvy multidisciplinary firm with competences in the Energy Industry, Geoscience, Civil Engineering and Construction, Project Management, Security Services, Labour Supply and Head Hunting.",
        home_whoweare_p2: "We create solutions that unlock excellent service delivery, which are safe and sustainable for future generations. Our core business strategy remains focused on retaining and expanding market share while integrating existing operations into other parts of the world.",
        home_projects_span: "Recent Projects",
        home_projects_title: "Selected field and construction engagements",
        home_projects_intro: "Our project team works with qualified personnel, clear coordination, and close customer collaboration to achieve quality and timely delivery.",
        home_partners_span: "Our Partners",
        home_partners_title: "Organizations we are proud to have served",
        home_partners_intro: "We take pride in the reputation we have built with our clients and technical partners across the Energy industry.",
        about_title: "About Aquilagalaxy Solutions",
        about_sub: "Delivering premium value and remaining a reference point for true local content development in the Energy industry.",
        about_whoweare_title: "WHO WE ARE",
        about_whoweare_body: "AQUILAGALAXY SOLUTIONS is a privately owned indigenous, tech-savvy multidisciplinary firm, with competences in the Energy Industry, Geoscience, Civil Engineering and Construction, Project Management, Security Services, Labour Supply and Head Hunting — from subsequent-to-surface and concept, to decommissioning.\n\nOur technical expertise and strong partnership traits provide clients and customers what they need to succeed, combined with our history of timely delivery and sticking to standard even in the most challenging environments. Our approach delivers superior service delivery to our clients and returns for our shareholders.\n\nWe are a global provider of products, systems, and services to industries (especially Energy) and their government agencies/parastatals and individuals. We create solutions to unlock excellent service delivery, which are safe and sustainable for future generations.",
        about_mission: "Our primary focus is to provide high quality services in Engineering, Construction, Environmental processes and other related services spanning the full scope of the company's diverse services in a safe, efficient, cost-effective and environmentally friendly manner. Above all, to perform its services to the highest of professionalism and to the satisfaction of our clients.",
        about_vision: "To build a world class indigenous, independent company, delivering premium value and to remain a reference point for true local content development in the Energy industry.",
        about_values: "Integrity and Exceptional Solutions.",
        about_responsibility: "Our corporate responsibility at AQUILAGALAXY SOLUTIONS is about making good, sustainable business decisions to benefit the company, our stakeholders and our operational environment.",
        about_objectives: [
            "To continue to grow our core business services in order to maintain our position as leaders in Energy service providers and gas sector development.",
            "To develop and exploit our local engineering capabilities and to become the undisputed Nigerian leader in the provision of safety/environmental, marine logistics, project and quality management services.",
            "To continue to expand our capability to serve other neighbouring markets with full range of services.",
            "To develop our employees into the most professional and fully committed team in the Energy industry."
        ],
        services_title: "Our Services",
        services_sub: "Integrated service categories from concept and commissioning through operations, maintenance, and manpower mobilization.",
        services_intro: "AQUILAGALAXY SOLUTIONS retains and expands market share through disciplined execution across core business categories including pipeline services, electrical & instrumentation, corrosion control, mechanical maintenance, civil engineering, procurement, manpower supply, and green energy support.",
        services_cards: [
            { title: "Procurement & Supply Chain Management", body: "Procurement services with access to qualified vendors, equipment sourcing, and supply chain planning for industrial and Energy operations.", icon: "fas fa-truck-loading", bullets: ["Procurement planning", "Vendor sourcing & qualification", "Logistics and warehousing"] },
            { title: "Pipeline Construction & Maintenance", body: "Pipe laying, commissioning, pressure testing, pigging, gauging, and support services for pipelines and well operations.", icon: "fas fa-gas-pump", bullets: ["Pipe Laying", "Pipeline Gauging / Pressure Testing", "Pigging & Pipeline Support Services"] },
            { title: "Cathodic Protection & Corrosion Control", body: "Corrosion management, water jetting, painting, positive isolation, cathodic protection design and NDT-backed inspection.", icon: "fas fa-shield-alt", bullets: ["Water Jetting & Painting", "Holiday Detection / NDT", "Cathodic Protection Systems"] },
            { title: "Electrical & Instrumentation", body: "Industrial electrification, instrument installation, fibre optic and copper cabling, calibration, commissioning and start-up support.", icon: "fas fa-bolt", bullets: ["System Installation & Maintenance", "Transmission Line & Calibration", "Commissioning & Start-up Support"] },
            { title: "Mechanical Maintenance", body: "Fleet pump maintenance, facility upgrades, valve installation/modification, fabrication, and mechanical turnaround services.", icon: "fas fa-wrench", bullets: ["Fabrication & Welding", "Valve Installation & Maintenance", "Tank Maintenance & Modification"] },
            { title: "Civil/Structural Engineering Services", body: "Civil engineering and construction works for industrial facilities, river crossing structures, and real estate multi-building developments.", icon: "fas fa-building", bullets: ["Civil & Structural Works", "River Crossing Pipeline Works", "Multi-building Construction"] }
        ],
        services_training_title: "Human Capacity Development",
        services_training_body: "In order to meet the ever-growing shortage of skilled manpower in the oil and gas industry, especially in Nigeria, AQUILAGALAXY SOLUTIONS has put together a number of seminars and bespoke training courses for oil and gas operations, service companies, as well as government petroleum ministries. These courses are designed and delivered by our highly experienced specialists and industry experts in co-operation with leading Nigerian universities and research institutes.",
        services_training_topics: [
            "Introduction to Petroleum Engineering — from field development up to refineries; Modern Offshore Technologies and services",
            "Pipelines, Risers and Flowlines — Asset Integrity Management, Risk & Reliability, Maintenance, optimization of offshore assets and facilities",
            "Onshore Refineries and Power Plants",
            "Inspection, Non-Destructive Tests (NDT), Advanced NDT, Rope Access, Intelligent Pigging",
            "Subsea Engineering, Intervention and Subsea Life Field Integrity Management Project Development",
            "Petroleum Economics, Oil & Gas Law"
        ],
        projects_title: "Projects & Case Studies",
        projects_sub: "Projects, especially large-scale ones involving a diversity of disciplines, would hardly succeed in the absence of a clear structure and progress subject to proper management. AQUILAGALAXY has a wide range of experience in this.",
        projects_list: [
            { id: 1, category: "Pipeline Repair", title: "Post IP Defect Repair by Sectional Replacement on 20-inch TRP", location: "Odimodi, Bayelsa State, Nigeria", client: "Renaissance Africa Energy Company Limited", image: "img/aquilagalaxy/otumara_ic_repair_cofferdam.jpg", stages: "Mobilization to Swamp; Monkey Access Creation; Work Site Access Creation; Pilling; Cofferdam Construction; Cofferdam Completed; IC Point Blinded" },
            { id: 2, category: "Pipeline Repair", title: "IC Repair by Split-Tee Using Cofferdam on 20-inch TEP", location: "Otumara, Delta State, Nigeria", client: "", image: "img/aquilagalaxy/otumara_split_tee_welding.jpg", stages: "Transfer of Materials Back to Water Front; Back Loading; Site Restored; Demobilization to Base; Repair Section Decoated; Grouting; Inside Cofferdam; Welded Split Tee; X-Ray Examination; Sleeve Wrapped Welded Split Tee; Cofferdam Extraction; Extraction of Cofferdam Frame" },
            { id: 3, category: "Corrosion Control", title: "Corrosion Control by Water Jetting and Spray Painting", location: "Ologbo Gas Plant, Edo State, Nigeria", client: "NPDC", image: "img/aquilagalaxy/ologbo_corrosion_control_water_jetting.jpg", stages: "Water Jetting in Progress; Surface Preparation Completed; Application of Primer Painting; Spray Painting in Progress" },
            { id: 4, category: "Pipeline Repair", title: "IC Repair by Clamp Welding on the 8\" Adibawa–Gbaran CPF Gas Line", location: "Ikarama", client: "Renaissance Africa Energy Company Limited", image: "img/aquilagalaxy/pipeline_welding_repair.jpg", stages: "Mobilization to Site; Exposed IC Point; Plugging/Sealing of IC Point; Clamp Installation; Non-Destructive Test Completed" },
            { id: 5, category: "Pipeline Repair", title: "Welded Pipeline Repair Job", location: "", client: "", image: "img/aquilagalaxy/pipeline_tie_in_welding.jpg", stages: "Welding in Progress; NDT on Welded Joint (Final MPI); Coating of the Clamp; Demobilization of Tools and Equipment" },
            { id: 6, category: "Construction", title: "Real Estate Multi-Building Construction", location: "Effurun, Warri, and Udu, Delta State, Nigeria", client: "", image: "img/aquilagalaxy/real_estate_construction.jpg", stages: "Residential estate buildings and duplex developments" },
            { id: 7, category: "Pipeline Work", title: "Positive Isolation of the 24\" TRP", location: "Ogidigben – Escravos", client: "Renaissance Africa Energy Company Limited", image: "img/aquilagalaxy/ogidigben_valve_isolation.jpg", stages: "Toolbox Meeting" },
            { id: 8, category: "Pipeline Work", title: "Positive Isolation of the 20\" and Valve Integration on the 24\" TRP at Ogidigben Manifold", location: "Ogidigben – Escravos", client: "Renaissance Africa Energy Company Limited", image: "img/aquilagalaxy/ogidigben_manifold_valve_integration.jpg", stages: "Unbolting and Retrieval of Gasket; Spading and Positive Isolation in Progress; Fitup and Welding of Weldolet and WN Flange; Installation of 2\" Valve on 24\" TEP; Completed Installation of 2\" Valve on 24\" TEP; De-spading and Restoration Completed; Equipment Demobilization" },
            { id: 9, category: "Pipeline Repair", title: "Post IP Defect Repair by Sectional Replacement on 24-inch TEP", location: "Ogidigben – Escravos", client: "Renaissance Africa Energy Company Limited", image: "img/aquilagalaxy/pipeline_spool_replacement_excavation.jpg", stages: "Mobilization of Materials and Equipment to Site; Load Out/Transfer of Materials and Equipment to Site; Linear/Reference Spool Measurements; Defect Verification and PAUT on Defect/Tie-in Points; Excavation to Reveal Defective Spool; Cutting/Salvaging of Existing Defective Spool; Lowering/Fit Up of Replacement Spool for Welding; Completed Welding of US/DS Tie-in Joints; X-Ray on Welded US/DS Tie-in Joints; Sleeve/Concrete Coating of Welded Tie-in Joints; Back Filling and Site Restoration; Backloading of Equipment/Demobilization" }
        ],
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
        contact_hero_sub: "From Warri, Delta State, we support clients with premium value, responsive execution, and strong local content capacity. Reach out for engineering, construction, procurement, or manpower support.",
        partners: [
            { name: "Partner Logos", image: "img/aquilagalaxy/pRTNERLOGONEW.png" },
            { name: "Partner Logos", image: "img/aquilagalaxy/pRTNERLOGONEW.png" },
            { name: "Partner Logos", image: "img/aquilagalaxy/pRTNERLOGONEW.png" },
            { name: "Partner Logos", image: "img/aquilagalaxy/pRTNERLOGONEW.png" },
            { name: "Partner Logos", image: "img/aquilagalaxy/pRTNERLOGONEW.png" },
            { name: "Partner Logos", image: "img/aquilagalaxy/pRTNERLOGONEW.png" }
        ],
        img_hero1: "img/aquilagalaxy-hero-cover.jpeg",
        img_hero2: "img/aquilagalaxy/cover_pipe_excavation.jpg",
        img_hero3: "img/aquilagalaxy/cover_worker_pipe.jpg",
        img_mission: "img/aquilagalaxy/cover_valve_flange.jpg",
        img_training: "img/aquilagalaxy/human_capacity_training.jpg",
        img_about_hero: "img/page-header.jpg",
        img_services_hero: "img/page-header.jpg",
        img_projects_hero: "img/page-header.jpg",
        img_contact_hero: "img/page-header.jpg"
    };

    let siteContent = loadContent();

    function loadContent() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return JSON.parse(JSON.stringify(defaultContent));
            const parsed = JSON.parse(raw);
            return Object.assign({}, JSON.parse(JSON.stringify(defaultContent)), parsed);
        } catch (e) {
            return JSON.parse(JSON.stringify(defaultContent));
        }
    }

    function saveContent() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(siteContent));
    }

    function showToast(msg, isError = false) {
        const $toast = $("#toast");
        $toast.text(msg)
            .toggleClass("error", isError)
            .stop(true, true)
            .fadeIn(200);
        setTimeout(() => $toast.fadeOut(400), 2400);
    }

    function isLoggedIn() {
        return sessionStorage.getItem(SESSION_KEY) === "1";
    }

    function showApp() {
        $("#admin-login").hide();
        $("#admin-app").show();
        populateAllFields();
        updateStats();
    }

    function showLogin() {
        $("#admin-app").hide();
        $("#admin-login").show();
        $("#adminPassword").val("");
        $("#loginError").hide();
    }

    $("#toggleAdminPassword").on("click", function () {
        const $input = $("#adminPassword");
        const isPass = $input.attr("type") === "password";
        $input.attr("type", isPass ? "text" : "password");
        $(this).find("i").toggleClass("fa-eye fa-eye-slash");
    });

    $("#adminLoginForm").on("submit", function (e) {
        e.preventDefault();
        const pwd = $("#adminPassword").val();
        if (pwd === ADMIN_PASSWORD) {
            sessionStorage.setItem(SESSION_KEY, "1");
            showToast("Login successful");
            setTimeout(showApp, 350);
        } else {
            $("#loginError").fadeIn(200);
        }
    });

    $("#logoutBtn").on("click", function () {
        sessionStorage.removeItem(SESSION_KEY);
        showLogin();
        showToast("Logged out");
    });

    if (isLoggedIn()) {
        showApp();
    } else {
        showLogin();
    }

    $(".admin-nav").on("click", function (e) {
        e.preventDefault();
        const section = $(this).data("section");
        $(".admin-nav").removeClass("active");
        $(this).addClass("active");
        $(".admin-section").removeClass("active");
        $("#" + section + "-section").addClass("active");
        $("html, body").animate({ scrollTop: 0 }, 200);
    });

    function populateAllFields() {
        $("[data-field]").each(function () {
            const key = $(this).data("field");
            if (siteContent[key] !== undefined && siteContent[key] !== null) {
                $(this).val(siteContent[key]);
            }
        });
        renderHomeServiceCards();
        renderAboutObjectives();
        renderServiceCards();
        renderTrainingTopics();
        renderProjects();
        renderPartners();
    }

    function updateStats() {
        $("#stat-projects").text(siteContent.projects_list ? siteContent.projects_list.length : 0);
        $("#stat-services").text(siteContent.services_cards ? siteContent.services_cards.length : 0);
    }

    function readFieldsIntoMemory(sectionKey) {
        const selector = "#" + sectionKey + "-section [data-field]";
        $(selector).each(function () {
            const key = $(this).data("field");
            siteContent[key] = $(this).val();
        });
    }

    $(".btn-save-section").on("click", function () {
        const sectionKey = $(this).data("section");
        readFieldsIntoMemory(sectionKey);
        saveContent();
        updateStats();
        showToast(sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1) + " changes saved!");
    });

    function renderHomeServiceCards() {
        const $wrap = $("#home_services_cards");
        $wrap.html("");
        const cards = siteContent.home_services_cards || [];
        cards.forEach((c, idx) => {
            $wrap.append(`
<div class="dynamic-item" data-idx="${idx}">
<button type="button" class="remove-item" data-remove-home-card="${idx}"><i class="fas fa-trash"></i> Remove</button>
<div class="form-row">
<div class="form-group col-md-4"><label>Icon (FontAwesome class)</label><input type="text" class="form-control home-card-icon" value="${escapeAttr(c.icon || '')}"></div>
<div class="form-group col-md-8"><label>Title</label><input type="text" class="form-control home-card-title" value="${escapeAttr(c.title || '')}"></div>
</div>
<div class="form-group"><label>Description</label><textarea class="form-control home-card-desc" rows="2">${escapeHtml(c.desc || '')}</textarea></div>
</div>`);
        });
    }

    $("#addServiceCard").on("click", function () {
        siteContent.home_services_cards = siteContent.home_services_cards || [];
        siteContent.home_services_cards.push({ icon: "fas fa-cog", title: "New Service", desc: "Short description here." });
        renderHomeServiceCards();
        showToast("Service card added. Remember to save.");
    });

    $(document).on("click", "[data-remove-home-card]", function () {
        const idx = Number($(this).data("remove-home-card"));
        siteContent.home_services_cards.splice(idx, 1);
        renderHomeServiceCards();
    });

    function renderAboutObjectives() {
        const $wrap = $("#about_objectives_list");
        $wrap.html("");
        const items = siteContent.about_objectives || [];
        items.forEach((o, idx) => {
            $wrap.append(`
<div class="dynamic-item" data-idx="${idx}">
<button type="button" class="remove-item" data-remove-objective="${idx}"><i class="fas fa-trash"></i> Remove</button>
<div class="form-group mb-0">
<label>Objective ${idx + 1}</label>
<textarea class="form-control about-objective-text" rows="2">${escapeHtml(o || '')}</textarea>
</div>
</div>`);
        });
    }

    $("#addObjective").on("click", function () {
        siteContent.about_objectives = siteContent.about_objectives || [];
        siteContent.about_objectives.push("New strategic objective.");
        renderAboutObjectives();
        showToast("Objective added. Remember to save.");
    });

    $(document).on("click", "[data-remove-objective]", function () {
        const idx = Number($(this).data("remove-objective"));
        siteContent.about_objectives.splice(idx, 1);
        renderAboutObjectives();
    });

    function renderServiceCards() {
        const $wrap = $("#services_cards_list");
        $wrap.html("");
        const items = siteContent.services_cards || [];
        items.forEach((s, idx) => {
            const bullets = (s.bullets || []).join("||");
            $wrap.append(`
<div class="dynamic-item mb-4" data-idx="${idx}">
<button type="button" class="remove-item" data-remove-services-card="${idx}"><i class="fas fa-trash"></i> Remove</button>
<div class="form-row">
<div class="form-group col-md-4"><label>Icon</label><input type="text" class="form-control service-card-icon" value="${escapeAttr(s.icon || '')}"></div>
<div class="form-group col-md-8"><label>Title</label><input type="text" class="form-control service-card-title" value="${escapeAttr(s.title || '')}"></div>
</div>
<div class="form-group"><label>Body</label><textarea class="form-control service-card-body" rows="3">${escapeHtml(s.body || '')}</textarea></div>
<div class="form-group"><label>Key Bullets (separate with a new line)</label><textarea class="form-control service-card-bullets" rows="3">${escapeHtml((s.bullets || []).join("\n"))}</textarea></div>
</div>`);
        });
    }

    $("#addServiceCard2").on("click", function () {
        siteContent.services_cards = siteContent.services_cards || [];
        siteContent.services_cards.push({ icon: "fas fa-cog", title: "New Service Category", body: "Short description.", bullets: ["Bullet 1", "Bullet 2"] });
        renderServiceCards();
        showToast("Service category added. Remember to save.");
    });

    $(document).on("click", "[data-remove-services-card]", function () {
        const idx = Number($(this).data("remove-services-card"));
        siteContent.services_cards.splice(idx, 1);
        renderServiceCards();
    });

    function renderTrainingTopics() {
        const $wrap = $("#services_training_list");
        $wrap.html("");
        const items = siteContent.services_training_topics || [];
        items.forEach((t, idx) => {
            $wrap.append(`
<div class="dynamic-item" data-idx="${idx}">
<button type="button" class="remove-item" data-remove-topic="${idx}"><i class="fas fa-trash"></i> Remove</button>
<div class="form-group mb-0">
<label>Topic ${idx + 1}</label>
<textarea class="form-control training-topic-text" rows="2">${escapeHtml(t || '')}</textarea>
</div>
</div>`);
        });
    }

    $("#addTrainingTopic").on("click", function () {
        siteContent.services_training_topics = siteContent.services_training_topics || [];
        siteContent.services_training_topics.push("New training topic.");
        renderTrainingTopics();
        showToast("Training topic added. Remember to save.");
    });

    $(document).on("click", "[data-remove-topic]", function () {
        const idx = Number($(this).data("remove-topic"));
        siteContent.services_training_topics.splice(idx, 1);
        renderTrainingTopics();
    });

    function renderProjects() {
        const $wrap = $("#projects_list");
        $wrap.html("");
        const items = siteContent.projects_list || [];
        items.forEach((p, idx) => {
            $wrap.append(`
<div class="dynamic-item" data-idx="${idx}">
<button type="button" class="remove-item" data-remove-project="${idx}"><i class="fas fa-trash"></i> Remove</button>
<div class="form-row">
<div class="form-group col-md-6"><label>Category</label><input type="text" class="form-control project-category" value="${escapeAttr(p.category || '')}"></div>
<div class="form-group col-md-6"><label>Title</label><input type="text" class="form-control project-title" value="${escapeAttr(p.title || '')}"></div>
</div>
<div class="form-row">
<div class="form-group col-md-6"><label>Location</label><input type="text" class="form-control project-location" value="${escapeAttr(p.location || '')}"></div>
<div class="form-group col-md-6"><label>Client</label><input type="text" class="form-control project-client" value="${escapeAttr(p.client || '')}"></div>
</div>
<div class="form-group"><label>Image URL</label><input type="text" class="form-control project-image" value="${escapeAttr(p.image || '')}"></div>
<div class="form-group mb-0"><label>Work Stages (separate with ;)</label><textarea class="form-control project-stages" rows="2">${escapeHtml(p.stages || '')}</textarea></div>
</div>`);
        });
    }

    $("#addProject").on("click", function () {
        siteContent.projects_list = siteContent.projects_list || [];
        siteContent.projects_list.push({
            id: Date.now(),
            category: "New Category",
            title: "New Project",
            location: "",
            client: "",
            image: "img/project-1.jpg",
            stages: "Stage 1; Stage 2"
        });
        renderProjects();
        showToast("Project added. Remember to save.");
    });

    $(document).on("click", "[data-remove-project]", function () {
        const idx = Number($(this).data("remove-project"));
        siteContent.projects_list.splice(idx, 1);
        renderProjects();
    });

    function renderPartners() {
        const $wrap = $("#partners_list");
        $wrap.html("");
        const items = siteContent.partners || [];
        items.forEach((p, idx) => {
            $wrap.append(`
<div class="dynamic-item" data-idx="${idx}">
<button type="button" class="remove-item" data-remove-partner="${idx}"><i class="fas fa-trash"></i> Remove</button>
<div class="form-row">
<div class="form-group col-md-4"><label>Name</label><input type="text" class="form-control partner-name" value="${escapeAttr(p.name || '')}"></div>
<div class="form-group col-md-8"><label>Logo Image URL</label><input type="text" class="form-control partner-image" value="${escapeAttr(p.image || '')}"></div>
</div>
</div>`);
        });
    }

    $("#addPartner").on("click", function () {
        siteContent.partners = siteContent.partners || [];
        siteContent.partners.push({ name: "New Partner", image: "img/aquilagalaxy/pRTNERLOGONEW.png" });
        renderPartners();
        showToast("Partner logo added. Remember to save.");
    });

    $(document).on("click", "[data-remove-partner]", function () {
        const idx = Number($(this).data("remove-partner"));
        siteContent.partners.splice(idx, 1);
        renderPartners();
    });

    function collectDynamicLists() {
        siteContent.home_services_cards = $("#home_services_cards .dynamic-item").map(function () {
            return {
                icon: $(this).find(".home-card-icon").val(),
                title: $(this).find(".home-card-title").val(),
                desc: $(this).find(".home-card-desc").val()
            };
        }).get();

        siteContent.about_objectives = $("#about_objectives_list .dynamic-item").map(function () {
            return $(this).find(".about-objective-text").val();
        }).get();

        siteContent.services_cards = $("#services_cards_list .dynamic-item").map(function () {
            const rawBullets = $(this).find(".service-card-bullets").val();
            const bullets = rawBullets ? rawBullets.split(/\r?\n/).map(s => s.trim()).filter(Boolean) : [];
            return {
                icon: $(this).find(".service-card-icon").val(),
                title: $(this).find(".service-card-title").val(),
                body: $(this).find(".service-card-body").val(),
                bullets: bullets
            };
        }).get();

        siteContent.services_training_topics = $("#services_training_list .dynamic-item").map(function () {
            return $(this).find(".training-topic-text").val();
        }).get();

        siteContent.projects_list = $("#projects_list .dynamic-item").map(function (idx) {
            return {
                id: (siteContent.projects_list && siteContent.projects_list[idx] && siteContent.projects_list[idx].id) || (Date.now() + idx),
                category: $(this).find(".project-category").val(),
                title: $(this).find(".project-title").val(),
                location: $(this).find(".project-location").val(),
                client: $(this).find(".project-client").val(),
                image: $(this).find(".project-image").val(),
                stages: $(this).find(".project-stages").val()
            };
        }).get();

        siteContent.partners = $("#partners_list .dynamic-item").map(function () {
            return {
                name: $(this).find(".partner-name").val(),
                image: $(this).find(".partner-image").val()
            };
        }).get();
    }

    $(".btn-save-section").on("click", function () {
        collectDynamicLists();
        saveContent();
        updateStats();
    });

    $("#exportBtn").on("click", function () {
        readFieldsIntoMemory("home");
        readFieldsIntoMemory("about");
        readFieldsIntoMemory("services");
        readFieldsIntoMemory("projects");
        readFieldsIntoMemory("contact");
        readFieldsIntoMemory("partners");
        readFieldsIntoMemory("images");
        collectDynamicLists();
        const blob = new Blob([JSON.stringify(siteContent, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const $a = $("<a>").attr("href", url).attr("download", "aquilagalaxy-content-export.json");
        $(document.body).append($a);
        $a[0].click();
        $a.remove();
        URL.revokeObjectURL(url);
        showToast("Content exported");
    });

    $("#importInput").on("change", function (e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (evt) {
            try {
                const imported = JSON.parse(evt.target.result);
                siteContent = Object.assign({}, JSON.parse(JSON.stringify(defaultContent)), imported);
                saveContent();
                populateAllFields();
                updateStats();
                showToast("Content imported successfully");
            } catch (err) {
                showToast("Import failed: invalid JSON", true);
            }
        };
        reader.readAsText(file);
        $(this).val("");
    });

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function escapeAttr(str) {
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    function setPublishStatus(text, kind) {
        const $wrap = $("#publishStatus");
        const $text = $("#publishStatusText");
        if (!$wrap.length || !$text.length) return;
        $text.text(text);
        $wrap
            .removeClass("alert-light alert-success alert-danger alert-warning alert-info border")
            .addClass("border");
        if (kind === "success") $wrap.addClass("alert-success");
        else if (kind === "error") $wrap.addClass("alert-danger");
        else if (kind === "working") $wrap.addClass("alert-warning");
        else $wrap.addClass("alert-info");
        $wrap.fadeIn(150);
    }

    async function withFirebase() {
        const fb = window.aquilagalaxyFirebase;
        if (!fb || !fb.app) return { ok: false, error: "Firebase is not loaded yet. Refresh and try again." };
        try {
            const [{ getFirestore, doc, setDoc, getDoc }, { getAuth, signInAnonymously }] = await Promise.all([
                import("https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js"),
                import("https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js")
            ]);
            const db = getFirestore(fb.app);
            const auth = getAuth(fb.app);
            if (!auth.currentUser) {
                try { await signInAnonymously(auth); } catch (_) {}
            }
            return { ok: true, db, doc, setDoc, getDoc, auth };
        } catch (e) {
            return { ok: false, error: "Failed to load Firebase SDKs. Are you online?" };
        }
    }

    async function ensureAmListedAdmin(fb, doBootstrap) {
        // Ensures the currently signed-in user's UID is present in
        // /admins/{uid} (doc) and /adminUids/singleton.uids (array).
        // Uses Firestore transaction-free best-effort approach because
        // the admin panel is a single-user tool.
        const { db, doc, setDoc, getDoc } = fb;
        const uid = fb.auth.currentUser && fb.auth.currentUser.uid;
        if (!uid) return false;

        try {
            // 1. Admins doc
            try {
                const snap = await getDoc(doc(db, "admins", uid));
                if (!snap.exists()) {
                    await setDoc(doc(db, "admins", uid), {
                        createdAt: new Date().toISOString(),
                        firstSeenBy: "admin-panel-bootstrap",
                        provider: (fb.auth.currentUser.providerData[0] && fb.auth.currentUser.providerData[0].providerId) || "anonymous",
                        email: fb.auth.currentUser.email || null,
                        grantSource: (doBootstrap ? "auto-bootstrap" : "existing-admin-re-grant")
                    });
                }
            } catch (_) {}

            // 2. Admin UIDs singleton list
            try {
                const snapUids = await getDoc(doc(db, "adminUids", "singleton"));
                let list = [];
                if (snapUids.exists() && Array.isArray(snapUids.data().uids)) {
                    list = snapUids.data().uids.slice();
                }
                if (!list.includes(uid)) list.push(uid);
                await setDoc(doc(db, "adminUids", "singleton"), { uids: list }, { merge: !snapUids.exists() ? false : true });
            } catch (_) {}

            return true;
        } catch (e) {
            console.warn("ensureAmListedAdmin failed", e);
            return false;
        }
    }

    async function saveAllSectionsToMemory() {
        ["home", "about", "services", "projects", "contact", "partners", "images"].forEach(readFieldsIntoMemory);
        collectDynamicLists();
        saveContent();
    }

    async function listAdmins(fb) {
        const { db, doc, getDoc, collection, getDocs } = fb;
        const out = [];
        try {
            const snap = await getDoc(doc(db, "adminUids", "singleton"));
            if (snap.exists() && Array.isArray(snap.data().uids)) {
                snap.data().uids.forEach(uid => out.push({ uid, source: "adminUids/singleton.uids" }));
            }
        } catch (_) {}
        try {
            const snap = await getDocs(collection(db, "admins"));
            snap.forEach(d => {
                if (!out.find(x => x.uid === d.id)) out.push({ uid: d.id, source: "admins/" + d.id, data: d.data() });
                else {
                    const existing = out.find(x => x.uid === d.id);
                    existing.data = d.data();
                    existing.source = existing.source + " + admins/" + d.id;
                }
            });
        } catch (_) {}
        return out;
    }

    async function grantAdminUid(fb, newUid, email) {
        if (!newUid || typeof newUid !== "string") throw new Error("UID is required.");
        const { db, doc, setDoc, getDoc } = fb;
        // Grant via admins doc
        await setDoc(doc(db, "admins", newUid), {
            createdAt: new Date().toISOString(),
            grantedBy: (fb.auth.currentUser && fb.auth.currentUser.uid) || "unknown",
            email: email || null,
            grantSource: "manual-grant-from-admin-panel"
        });
        // Also append to adminUids/singleton
        let list = [];
        try {
            const snap = await getDoc(doc(db, "adminUids", "singleton"));
            if (snap.exists() && Array.isArray(snap.data().uids)) list = snap.data().uids.slice();
        } catch (_) {}
        if (!list.includes(newUid)) list.push(newUid);
        await setDoc(doc(db, "adminUids", "singleton"), { uids: list }, { merge: true });
    }

    async function revokeAdminUid(fb, revokeUid) {
        const { db, doc, deleteDoc, getDoc, setDoc } = fb;
        try { await deleteDoc(doc(db, "admins", revokeUid)); } catch (_) {}
        try {
            const snap = await getDoc(doc(db, "adminUids", "singleton"));
            if (snap.exists() && Array.isArray(snap.data().uids)) {
                const list = snap.data().uids.filter(x => x !== revokeUid);
                await setDoc(doc(db, "adminUids", "singleton"), { uids: list }, { merge: true });
            }
        } catch (_) {}
    }

    async function publishToFirestore() {
        await saveAllSectionsToMemory();
        setPublishStatus("Publishing to live site…", "working");
        const fb = await withFirebase();
        if (!fb.ok) { setPublishStatus(fb.error, "error"); return false; }
        const uid = (fb.auth.currentUser && fb.auth.currentUser.uid) || null;
        try {
            // 1. If we are first-time, perform bootstrap self-grant BEFORE writing
            //    content so rules' first-time bootstrap window can create the
            //    admin records with the correct privileges.
            await ensureAmListedAdmin(fb, true);

            // 2. Write the site content. If this is the very first publish,
            //    rules allow it via isFirstTimeBootstrap(); afterwards only
            //    the freshly-granted admins can write.
            const { db, doc, setDoc } = fb;
            const payload = Object.assign({}, JSON.parse(JSON.stringify(siteContent)), {
                publishedAt: new Date().toISOString(),
                publishedBy: uid || "anonymous-admin"
            });
            await setDoc(doc(db, "siteContent", "v1"), payload);
            await refreshAdminUsersUi();
            setPublishStatus("Published! Site visitors will see your changes in a few seconds. Your browser has been granted admin access (UID " + uid + ").", "success");
            showToast("Published to live site");
            return true;
        } catch (e) {
            console.error(e);
            let msg = (e && e.message ? e.message : "Publish failed.");
            if (/permission|insufficient/i.test(msg)) {
                msg = "Permission denied. If this is a brand new Firestore instance, deploy the updated firestore.rules with `firebase deploy --only firestore:rules` (they include a first-time bootstrap gate). Then click Publish again and this browser will onboard itself automatically. UID: " + uid + ".";
            }
            setPublishStatus(msg, "error");
            showToast("Publish failed: " + msg, true);
            return false;
        }
    }

    async function pullFromFirestore() {
        setPublishStatus("Pulling latest from live site…", "working");
        const fb = await withFirebase();
        if (!fb.ok) { setPublishStatus(fb.error, "error"); return false; }
        try {
            const { db, doc, getDoc } = fb;
            const snap = await getDoc(doc(db, "siteContent", "v1"));
            if (!snap.exists()) {
                setPublishStatus("No published content yet on Firestore. Save and Publish first.", "error");
                showToast("No published content yet", true);
                return false;
            }
            const live = snap.data();
            delete live.publishedAt;
            delete live.publishedBy;
            siteContent = Object.assign({}, JSON.parse(JSON.stringify(defaultContent)), live);
            saveContent();
            populateAllFields();
            updateStats();
            setPublishStatus("Latest live content pulled into this editor.", "success");
            showToast("Pulled live content");
            return true;
        } catch (e) {
            console.error(e);
            const msg = (e && e.message ? e.message : "Pull failed.");
            setPublishStatus(msg, "error");
            showToast("Pull failed: " + msg, true);
            return false;
        }
    }

    $(document).on("click", ".btn-publish-section", async function () {
        const sectionKey = $(this).data("section");
        if (sectionKey) { readFieldsIntoMemory(sectionKey); collectDynamicLists(); saveContent(); }
        await publishToFirestore();
    });

    $("#publishAllBtn").on("click", publishToFirestore);
    $("#fetchLiveBtn").on("click", pullFromFirestore);

    $(async function () {
        if (!window.aquilagalaxyFirebase) return;
        const fb = await withFirebase();
        if (!fb.ok) return;
        try {
            const { db, doc, getDoc } = fb;
            const snap = await getDoc(doc(db, "siteContent", "v1"));
            if (snap.exists()) {
                const live = snap.data();
                setPublishStatus(
                    "Live content last published " +
                    (live.publishedAt ? new Date(live.publishedAt).toLocaleString() : "previously") +
                    ". Use Pull Live Content to load it here.",
                    "info"
                );
            } else {
                setPublishStatus("Nothing is published to Firestore yet. Click Publish All to Live Site to push the content globally.", "info");
            }
        } catch (_) {}
    });

    function renderImagePreview(inputId) {
        const $input = $("#" + inputId);
        const $wrap = $(`.agl-img-preview[data-preview-for="${inputId}"]`);
        if (!$input.length || !$wrap.length) return;
        const val = String($input.val() || "").trim();
        if (!val) {
            $wrap.removeClass("agl-img-preview--broken agl-img-preview--empty").addClass("agl-img-preview--empty").html("<i class='fas fa-image mr-2'></i> No image path set — hero will use its default background.");
            return;
        }
        $wrap.removeClass("agl-img-preview--broken agl-img-preview--empty").html("");
        const $img = $("<img>").attr("alt", "Preview of " + inputId).on("load", function () {
            const fmt = (val.match(/\.([a-z0-9]+)(?:\?|#|$)/i) || [])[1];
            const kb = "?";
            $wrap.append(`<div class="agl-img-preview-meta"><div class="text-success"><i class="fas fa-check-circle"></i> Image loads OK${fmt ? " · " + fmt.toUpperCase() + " format" : ""}</div><div class="text-muted" style="font-size:12px;">${val}</div></div>`);
        }).on("error", function () {
            $wrap.addClass("agl-img-preview--broken").html(`
                <img src="" alt="broken preview" style="opacity:0.12;background:linear-gradient(135deg,#fbe1e8,#fff3d1)">
                <div class="agl-img-preview-meta">
                    <div><i class="fas fa-exclamation-triangle"></i> <strong>Can't load this image.</strong> The hero background will appear empty on the site.</div>
                    <div style="font-size:12px;margin-top:6px;">Check for typos, confirm the file exists at the path below, and that it's been deployed/pushed to the live server:</div>
                    <div style="font-family:Menlo,Consolas,monospace;font-size:12px;margin-top:4px;">${escapeHtml(val)}</div>
                </div>
            `);
        });
        $img.attr("src", val);
        $wrap.prepend($img);
    }

    async function refreshAdminUsersUi() {
        const $tbody = $("#admin-users-list");
        const $badge = $("#admin-user-uid");
        const $result = $("#add-admin-result");
        if (!$tbody.length && !$badge.length) return;
        const fb = await withFirebase();
        if (!fb.ok) {
            if ($tbody.length) $tbody.html("<tr><td colspan='3' class='text-danger small'>Firebase not loaded.</td></tr>");
            return;
        }
        const uid = (fb.auth.currentUser && fb.auth.currentUser.uid) || null;
        if ($badge.length) {
            if (uid) $badge.text("This browser UID: " + uid).attr("title", "Copy this UID to grant this browser admin access from another browser.");
            else $badge.text("Not signed in");
        }
        if ($tbody.length) {
            try {
                const admins = await listAdmins(fb);
                if (!admins.length) {
                    $tbody.html("<tr><td colspan='3' class='text-muted small'>No admins yet. Click Publish to Live Site and this browser will auto-onboard itself as the first admin.</td></tr>");
                } else {
                    $tbody.html("");
                    admins.forEach(a => {
                        const emailHtml = (a.data && a.data.email) ? `<br><small class='text-muted'>${escapeHtml(a.data.email)}</small>` : "";
                        const selfBadge = (a.uid === uid) ? " <span class='badge badge-info ml-1'>You</span>" : "";
                        const revokeBtn = (a.uid === uid)
                            ? ""
                            : `<button type='button' class='btn btn-sm btn-danger revoke-admin' data-uid="${escapeAttr(a.uid)}" title='Revoke admin'><i class='fas fa-trash-alt'></i></button>`;
                        $tbody.append(`<tr>
<td style='font-family:Menlo,Consolas,monospace;font-size:12px;'>${escapeHtml(a.uid)}${emailHtml}</td>
<td>${escapeHtml(a.source)}${selfBadge}</td>
<td class='text-right'>${revokeBtn}</td>
</tr>`);
                    });
                }
            } catch (e) {
                let msg = (e && e.message ? e.message : String(e));
                if (/permission|insufficient|denied|missing/i.test(msg)) {
                    msg = "Permission denied reading admin list. Run `firebase deploy --only firestore:rules` then refresh this page. Details: " + msg;
                }
                $tbody.html("<tr><td colspan='3' class='text-danger small'>" + escapeHtml(msg) + "</td></tr>");
            }
        }
    }

    $("#add-admin-btn").on("click", async function () {
        const $res = $("#add-admin-result");
        $res.removeClass("text-success text-danger").addClass("text-muted").text("Working…");
        const fb = await withFirebase();
        if (!fb.ok) { $res.removeClass("text-muted").addClass("text-danger").text(fb.error); return; }
        const uidVal = String($("#new-admin-uid").val() || "").trim();
        const emailVal = String($("#new-admin-email").val() || "").trim();
        if (!uidVal) {
            $res.removeClass("text-muted").addClass("text-danger").text("Paste the new browser's Firebase UID first.");
            return;
        }
        try {
            await grantAdminUid(fb, uidVal, emailVal);
            $res.removeClass("text-muted").addClass("text-success").text("Granted.");
            $("#new-admin-uid, #new-admin-email").val("");
            await refreshAdminUsersUi();
        } catch (e) {
            console.error(e);
            let msg = (e && e.message ? e.message : String(e));
            if (/permission|insufficient|denied|missing/i.test(msg)) {
                msg = "Permission denied. Only existing admins can grant admin. Click Publish to Live Site first to onboard THIS browser as an admin, then try granting again. Details: " + msg;
            }
            $res.removeClass("text-muted").addClass("text-danger").text(msg);
        }
    });

    $(document).on("click", ".revoke-admin", async function () {
        const uid = $(this).data("uid");
        if (!uid) return;
        if (!confirm("Revoke admin access for UID " + uid + "?")) return;
        const $res = $("#add-admin-result");
        $res.removeClass("text-success text-danger").addClass("text-muted").text("Revoking…");
        const fb = await withFirebase();
        if (!fb.ok) { $res.removeClass("text-muted").addClass("text-danger").text(fb.error); return; }
        try {
            await revokeAdminUid(fb, uid);
            $res.removeClass("text-muted").addClass("text-success").text("Revoked.");
            await refreshAdminUsersUi();
        } catch (e) {
            console.error(e);
            let msg = (e && e.message ? e.message : String(e));
            if (/permission|insufficient|denied|missing/i.test(msg)) {
                msg = "Permission denied. Only existing admins can revoke. Details: " + msg;
            }
            $res.removeClass("text-muted").addClass("text-danger").text(msg);
        }
    });

    $(async function () {
        if (!window.aquilagalaxyFirebase) return;
        await refreshAdminUsersUi();
    });

    function setupAllImagePreviews() {
        const ids = ["img_hero1", "img_hero2", "img_hero3",
                     "img_mission", "img_training",
                     "img_about_hero", "img_services_hero",
                     "img_projects_hero", "img_contact_hero"];
        ids.forEach(id => {
            renderImagePreview(id);
            $("#" + id).on("input blur change", () => renderImagePreview(id));
        });
    }

    setupAllImagePreviews();
});
