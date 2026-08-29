import os

helper_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\checkout-helper.js"

with open(helper_path, "r", encoding="utf-8") as f:
    code = f.read()

# Add open/close listeners for fabric sample overlay
snippet_to_add = """
        // Fabric Sample Modal Triggers
        document.querySelectorAll(".open-fabric-modal-btn, #vfabricSampleLink, [data-action='fabric-sample']").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const overlay = document.getElementById("fabricSampleOverlay");
                if (overlay) {
                    overlay.classList.add("active");
                    document.body.classList.add("modal-open");
                }
            });
        });

        document.getElementById("closeFabricSampleBtn")?.addEventListener("click", () => {
            document.getElementById("fabricSampleOverlay")?.classList.remove("active");
            document.body.classList.remove("modal-open");
        });

        document.getElementById("fabricSampleOverlay")?.addEventListener("click", (e) => {
            if (e.target.id === "fabricSampleOverlay") {
                document.getElementById("fabricSampleOverlay")?.classList.remove("active");
                document.body.classList.remove("modal-open");
            }
        });
"""

if "Fabric Sample Modal Triggers" not in code:
    code = code.replace('function initFabricSampleModal() {', 'function initFabricSampleModal() {' + snippet_to_add)

with open(helper_path, "w", encoding="utf-8") as f:
    f.write(code)

print("Updated checkout-helper.js with fabric modal triggers")
