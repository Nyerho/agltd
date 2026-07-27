# Firestore + Firebase Hosting Deployment Guide

## 1. What you have (admin editor coverage — confirmed)

The `admin.html` + `js/admin.js` editor already lets an admin **edit and preview**:

### Hero section IMAGES
| Admin field | Where it's applied on the site |
|---|---|
| `img_hero1` | Hero Slide 1 background (`.hero-one .bg-img`) |
| `img_hero2` | Hero Slide 2 background (`.hero-two .bg-img`) |
| `img_hero3` | Hero Slide 3 background (`.hero-three .bg-img`) |
| `img_mission` | Mission/Vision image panel (`.image-content-one`) |
| `img_training` | Human Capacity Development panel (`.image-content-two`) |
| `img_about_hero` | About page header background |
| `img_services_hero` | Services page header background |
| `img_projects_hero` | Projects page header background |
| `img_contact_hero` | Contact page header background |

### Other image fields
- **Who We Are section image** — `home_whoweare_img`
- **Every project card** — `projects_list[].image` (9 projects, fully editable)
- **Every partner logo** — `partners[].image` (full carousel list)

### Text + collections
- Hero tagline, headline lines, subtitle
- Services intro + 6 home service cards (fully dynamic: add / remove / edit all 3 fields)
- Who We Are, Recent Projects, Our Partners section intros
- About page (title/sub, who-we-are, mission/vision/values, corporate responsibility, strategic objectives list)
- Services page (page header, 6 big service cards w/ bullets, training section + training topics list)
- Projects page (page header, full CRUD list of 9 case studies with image/client/location/stages)
- Contact + Footer (address, emails, phones, RC, website, copyright)

### How preview works today
All edits are saved to **`localStorage['aquilagalaxy_site_content_v1']`** (key used in both `js/admin.js` and `js/site-content.js`). When the admin clicks **View Site**, the same browser tab opens the site — `site-content.js` immediately reads the same localStorage key and re-renders **all sections/images** with the edited values (CSS image overrides are injected into `<head>` as a `<style>` block for the hero and image panels). So preview is 100% live and covers everything.

Export (JSON download) + Import (JSON upload) are available on the dashboard to move edits across devices.

---

## 2. Deploy on Firebase Hosting + Firestore (step-by-step)

### (a) Install Firebase tools (once)
```bash
npm install -g firebase-tools
firebase login
```

### (b) Initialize using THIS folder (the one that contains `firebase.json`)
```bash
cd "C:\Users\HP\OneDrive\Documents\Aquilagalaxy Solutions"
firebase use agltd-5f431
```

### (c) Deploy Hosting, Firestore rules, Storage rules
```bash
firebase deploy --only hosting,firestore,storage
```

This publishes the `indico-construction-building-html-template/` folder as the public web root.

---

## 3. Firestore rules (see `firestore.rules`)

Principle: **public read, admins-only write** for content.

### Collection / document model used:
```
/siteContent/v1   <-- single Firestore doc holding every field that
                      currently lives in localStorage key
                      'aquilagalaxy_site_content_v1'
```

Rule summary:
- `match /siteContent/v1`
  - `read: if true` → the entire public site can fetch it
  - `write` → only users in the admin email whitelist can change it

### How to authorize admins
Pick ONE of these two approaches:

#### Option A — hard-coded email allowlist (already in the rules, easier for ≤5 admins)
In `firestore.rules` every `allow write:` guard checks:
```
request.auth.token.email in [
  "admin@aquilagalaxy.com",
  "nyerhohovor@gmail.com"
]
```
**Edit those two email addresses** to whoever should have admin rights. Those people must sign in through Firebase Authentication on `admin.html` (Email/Password, or Google sign-in — both populate `request.auth.token.email`).

#### Option B — Firestore-driven admins list (cleaner for larger teams)
1. Create a collection `/admins/{uid}` and add a doc per admin whose `uid` matches their Firebase Auth UID.
2. In `firestore.rules`, replace every email-allowlist block with:
```
exists(/databases/$(database)/documents/admins/$(request.auth.uid))
```

### Bonus: optional separate collections already supported in rules
- `/projects/{projectId}` — public read, admins write (ready if you later split projects out of `siteContent/v1`).
- `/admins/{uid}` — self-lookup for profile; admins only can write.
- `/contactMessages/{msgId}` — anonymous create (size + field guards), only admins read/delete.

---

## 4. Storage rules (see `storage.rules`)

| Bucket path | Read | Write | Guard rails |
|---|---|---|---|
| `/public/img/**` | Anyone | Admins only | max 8 MB, `image/*` only |
| `/public/**` | Anyone | Admins only | max 32 MB |
| `/private/admin/**` | Admins only | Admins only | — |
| `/user-uploads/{uid}/**` | Owner only | Owner only | max 16 MB |

> Tip: when you wire up the admin to actually upload images instead of pasting URLs, use `ref(gs://agltd-5f431.firebasestorage.app/public/img/hero/my-new-hero.jpg)` and save the resulting `getDownloadURL()` into `siteContent.v1.img_hero1` etc. The existing CSS overrides in `site-content.js` (lines 109–125) will work unmodified with any image URL, whether relative or absolute Firebase Storage download URLs.

---

## 5. Admin onboarding — ZERO manual Firebase Console setup required

The admin panel already uses **Firebase Anonymous Auth** (`signInAnonymously`) which gives every browser a **stable, permanent UID** (persists across page reloads as long as that user's profile is intact). The rules are built so the very FIRST person who clicks **Publish to Live Site** automatically becomes the first admin — you never have to touch the Firebase Console.

### How it works (you can skip the Console entirely)
1. Run `firebase deploy --only firestore:rules,storage:rules` once.
2. Open `/admin.html` on the deployed site.
3. Click **Publish All to Live Site**.

The first Publish writes:
- `/admins/<your-uid>` (a per-UID admin doc)
- `/adminUids/singleton` (array `uids: ["<your-uid>"]`)
- `/siteContent/v1` (the published content)

From that moment on, only admins who match **any** of these three paths can Publish / Upload / Grant other admins:
1. Their UID exists as a doc under `/admins/<uid>`
2. Their UID appears in the `uids[]` array inside `/adminUids/singleton`
3. Their authenticated `token.email` matches the hardcoded allowlist in rules (swap these for real admin emails if you add Email/Password or Google sign-in)

### Adding a second admin from the admin UI
1. On the **second browser/device**, open `/admin.html` → Dashboard → scroll to **Admin Access** card.
2. Copy the UID badge in the card header ("This browser UID: `abc123XYZ…`").
3. On the **first/admin browser** (already an admin), paste that UID into **Grant Admin Access** → **Firebase UID** field → click **Grant Admin**.
4. Both the `/admins/<uid>` doc and `adminUids/singleton.uids` are updated. The new browser is now a global admin and can Publish too.

### Removing an admin
Dashboard → **Admin Access** card → click the red trash can next to the UID. The admin doc is deleted AND the UID is removed from the singleton array.

---

## 6. Wiring admin panel from localStorage → Firestore

This is **already wired** in the current code. You don't need to add any code in this section — it's here for reference:

### Public site read path (already implemented in `js/site-content.js`)
- Tries Firestore `/siteContent/v1` first (`maybeSyncFromFirestore`)
- Falls back to `localStorage['aquilagalaxy_site_content_v1']`
- Falls back to `defaults`
- Subscribes `onSnapshot()` so when admin Publishes, open pages auto-refresh in ~800 ms

### Admin panel write path (already implemented in `js/admin.js`)
- `publishToFirestore()` serializes `siteContent` + publishes to `/siteContent/v1` with `publishedAt` + `publishedBy`
- `ensureAmListedAdmin()` pre-flight creates `/admins/<uid>` and `/adminUids/singleton` during first bootstrap
- `pullFromFirestore()` downloads live `/siteContent/v1` back into this editor (for multi-browser sync)

### Auth
Anonymous Firebase Auth (`signInAnonymously`) is already called in `withFirebase()` before any write. Use Firestore rules + admin roster above to gate write access (it's set up already).

---

## 7. Quick deploy recipe

```bash
cd "C:\Users\HP\OneDrive\Documents\Aquilagalaxy Solutions"

# ONLY THIS LINE IS REQUIRED RIGHT NOW to fix the "insufficient permissions"
# Publish error. It pushes the new firestore.rules + storage.rules to your
# Firebase project (agltd-5f431) so anonymous UIDs can self-onboard.
firebase deploy --only firestore:rules,storage:rules

# Then, optional full re-deploy whenever you change HTML/CSS/JS:
firebase deploy

# If you've changed ONLY Firestore indexes later:
firebase deploy --only firestore:indexes
```

After running the rules deploy, go back to `/admin.html` and click Publish. It will auto-onboard that browser as the first admin and succeed.
