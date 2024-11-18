        // JavaScript to toggle between Sign In and Sign Up forms
        const signUpButton = document.getElementById("signUpButton");
        const signInButton = document.getElementById("signInButton");
        const signUpForm = document.getElementById("signup");
        const signInForm = document.getElementById("signIn");

        // Show sign-up form when 'Sign Up' button is clicked
        signUpButton.addEventListener("click", () => {
          signUpForm.style.display = "block";
          signInForm.style.display = "none";
        });

        // Show sign-in form when 'Sign In' button is clicked
        signInButton.addEventListener("click", () => {
          signUpForm.style.display = "none";
          signInForm.style.display = "block";
        });

        // Default view: Show the Sign In form
        signInForm.style.display = "block";
        signUpForm.style.display = "none";