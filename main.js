"use strict";
function generateResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || '';
    const profession = ((_b = document.getElementById("profession")) === null || _b === void 0 ? void 0 : _b.value) || '';
    const email = ((_c = document.getElementById("email")) === null || _c === void 0 ? void 0 : _c.value) || '';
    const phone = ((_d = document.getElementById("phone")) === null || _d === void 0 ? void 0 : _d.value) || '';
    const address = ((_e = document.getElementById("address")) === null || _e === void 0 ? void 0 : _e.value) || '';
    const about = ((_f = document.getElementById("about")) === null || _f === void 0 ? void 0 : _f.value) || '';
    const education = ((_g = document.getElementById("education")) === null || _g === void 0 ? void 0 : _g.value) || '';
    const experience = ((_h = document.getElementById("experience")) === null || _h === void 0 ? void 0 : _h.value) || '';
    const languages = ((_j = document.getElementById("languages")) === null || _j === void 0 ? void 0 : _j.value.split(",")) || [];
    const skills = ((_k = document.getElementById("skills")) === null || _k === void 0 ? void 0 : _k.value.split(",")) || [];
    const profileImage = (_m = (_l = document.getElementById("profile-image")) === null || _l === void 0 ? void 0 : _l.files) === null || _m === void 0 ? void 0 : _m[0];
    const resumeSection = document.getElementById("resume");
    let profileImageURL = 'default-profile-image.jpg';
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume();
        };
        reader.readAsDataURL(profileImage);
    }
    else {
        displayResume();
    }
    function displayResume() {
        if (resumeSection) {
            resumeSection.innerHTML = `
                <div class="resume">
                    <div class="sidebar">
                        <img src="${profileImageURL}" alt="Profile Picture" class="profile-img">
                        <h2>${name}</h2>
                        <p><strong>${profession}</strong></p>

                        <h3>About</h3>
                        <p>${about.replace(/\n/g, "<br>")}</p>

                        <h3>Contact</h3>
                        <p><i class="fas fa-phone"></i> ${phone}</p>
                        <p><i class="fas fa-envelope"></i> ${email}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${address}</p>

                        <h3>Education</h3>
                        <p>${education.replace(/\n/g, "<br>")}</p>

                        <h3>Skills</h3>
                        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
                    </div>
                    <div class="main-content">
                        <h3>Experience</h3>
                        <p>${experience.replace(/\n/g, "<br>")}</p>

                        <h3>Languages</h3>
                        <ul>${languages.map(language => `<li>${language.trim()}</li>`).join('')}</ul>
                    </div>
                </div>
            `;
        }
        toggleButtons(true);
        toggleFormInputs(false);
    }
}
function toggleFormInputs(enable) {
    const inputs = document.querySelectorAll('#resume-form input, #resume-form textarea');
    inputs.forEach((input) => {
        input.disabled = !enable;
    });
}
function toggleButtons(isGenerated) {
    document.getElementById("generate-button").style.display = isGenerated ? 'none' : 'block';
    document.getElementById("edit-button").style.display = isGenerated ? 'block' : 'none';
}
function editResume() {
    toggleFormInputs(true);
    toggleButtons(false);
}
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    (_a = document.getElementById("generate-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", generateResume);
    (_b = document.getElementById("edit-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", editResume);
});
