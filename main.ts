function generateResume(): void {
   
    const name = (document.getElementById("name") as HTMLInputElement)?.value || '';
    const profession = (document.getElementById("profession") as HTMLInputElement)?.value || '';
    const email = (document.getElementById("email") as HTMLInputElement)?.value || '';
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value || '';
    const address = (document.getElementById("address") as HTMLInputElement)?.value || '';
    const about = (document.getElementById("about") as HTMLTextAreaElement)?.value || '';
    const education = (document.getElementById("education") as HTMLTextAreaElement)?.value || '';
    const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value || '';
    const languages = (document.getElementById("languages") as HTMLInputElement)?.value.split(",") || [];
    const skills = (document.getElementById("skills") as HTMLInputElement)?.value.split(",") || [];
    const profileImage = (document.getElementById("profile-image") as HTMLInputElement)?.files?.[0];

    const resumeSection = document.getElementById("resume");

    
    let profileImageURL = 'default-profile-image.jpg';

    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImageURL = e.target?.result as string;
            displayResume(); 
        };
        reader.readAsDataURL(profileImage);
    } else {
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


function toggleFormInputs(enable: boolean) {
    const inputs = document.querySelectorAll('#resume-form input, #resume-form textarea');
    inputs.forEach((input) => {
        (input as HTMLInputElement | HTMLTextAreaElement).disabled = !enable;
    });
}


function toggleButtons(isGenerated: boolean) {
    document.getElementById("generate-button")!.style.display = isGenerated ? 'none' : 'block';
    document.getElementById("edit-button")!.style.display = isGenerated ? 'block' : 'none';
}

function editResume() {
    
    toggleFormInputs(true);
    toggleButtons(false);
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate-button")?.addEventListener("click", generateResume);
    document.getElementById("edit-button")?.addEventListener("click", editResume);
});