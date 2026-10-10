# Solvex Audio 1.0.0-beta3

*Released 2026-10-08 · Windows, macOS and Linux · [nordbassaudio.com](https://nordbassaudio.com)*

Solvex Audio is speaker box design software for car-audio and home-audio builders: simulate a
subwoofer or speaker enclosure, check that it fits, and get a cutting list ready for the saw or CNC.

Beta3 is the biggest update yet: the whole app has been rebuilt to be faster and much smaller, and
the cutting list can now be exported straight to CAD and CNC.

Full list of changes: [docs/PATCH_NOTES.md](docs/PATCH_NOTES.md) ·
on the website: [nordbassaudio.com/changelog](https://nordbassaudio.com/changelog/)

---

## ✨ Highlights

- **A new, much lighter app.** Rebuilt on a new desktop engine (Tauri + Rust). The download drops
  from about 175–265 MB to about **9 MB**. It looks and works the same, and your projects, drivers,
  settings and licence carry over.
- **Cutting sheets for CNC and CAD.** Export the cutting list as **DXF** or **SVG**, laid out on
  standard 2440 × 1220 mm sheets with saw-kerf spacing, and labelled with name, size and bevel angle.
- **New 3D enclosure view** with realistic materials, driver cutouts, ports, dimensions and preset
  camera angles.
- **Measurement tab (Enterprise):** log-sine-sweep measurement with impulse response and gated
  frequency response.

## 🔑 Editions

- **Basic (free):** sealed and vented boxes, SPL, excursion and port-velocity graphs, driver
  database and CSV import, round and slot ports, fit checks, 3D view, and all workshop calculators.
- **Home:** 4th-order bandpass (BP4, moved down from Pro), passive radiators, full cutting list with
  DXF/SVG export, 90° bent ports, room/cabin gain and trunk fit limits.
- **Pro:** tapped and folded horns (moved up from Home), wedge boxes, REW measurement overlay and the
  Vehicle & Cargo Space calculator.

## 🔊 Better simulation and geometry

- More accurate passive-radiator response and box volume (full port volume is now subtracted).
- BP4: choose the chamber layout and set front and rear volumes separately.
- Port air velocity graph shows the chuffing and compression limits.
- 90° bent ports pick the side with the most room and always stay inside the box.
- Free driver placement: count, mounting face and offsets; cutouts avoid ports and panel edges.
- Enter your trunk size and see at once whether the box fits.

## 🌍 Languages

All 7 languages are now complete: Norwegian, Swedish, Danish, German, French, Spanish and English.

## 🐞 Fixes

- Beta users are now told about new beta versions (beta1 → beta2 was missed before).
- Linux (Wayland): the window's minimize, maximize and close buttons work again.
- Imperial mode: panel thickness is converted correctly, and inch inputs have sensible ranges.
- Fixed a crash in the Geometry tab.

## ⚠️ Known limitations

- Measurement currently works with the built-in simulated device only; real sound cards are next.
- The app isn't code-signed yet. On macOS, right-click the app and choose **Open** the first time;
  on Windows, click **More info → Run anyway**.
- Your theme, units and update preferences may reset once after updating.

---

## 📦 Download

- **Windows 10/11:** [Solvex_Audio_Windows.zip](https://github.com/N0rdBass/NordSonic-release/releases/latest/download/Solvex_Audio_Windows.zip)
- **macOS (Apple Silicon and Intel):** [Solvex_Audio_macOS.zip](https://github.com/N0rdBass/NordSonic-release/releases/latest/download/Solvex_Audio_macOS.zip)
- **Linux (AppImage):** [Solvex_Audio_Linux.zip](https://github.com/N0rdBass/NordSonic-release/releases/latest/download/Solvex_Audio_Linux.zip):
  unzip, then `chmod +x Solvex*.AppImage && ./Solvex*.AppImage`

---

## Earlier releases

- **1.0.0-beta2 (2026-08-21):** bug fixes. The full driver library (100 drivers) now loads on a new
  install instead of 13; the guided tour and About dialog show the right version; fixed a crash when
  the 72-hour offline period ran out.
- **1.0.0-beta1 (2026-08-13):** first 1.0 beta. Purchases through the online store went live. Fixed port
  sizes being converted twice in Imperial mode.
- **0.1.17 open beta (2026-07-29):** first public release, with sealed, vented, passive-radiator
  and bandpass simulation, cutting lists, port tools, fit checks, workshop calculators, tone
  generator, 7 languages and an in-app updater.

---

© 2026 NordBass Audio. All rights reserved.
