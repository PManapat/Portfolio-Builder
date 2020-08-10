import axios from "axios";

// Front end route for signup
export const register = (newUser) => {
  return axios
    .post("api/users", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Registered");
    });
};

// Route for login
export const login = (user) => {
  return axios
    .post("api/auth", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      console.log("from the api.js", response);
      if (response.data.token) {
        localStorage.setItem("user", response.data.token);
      }
      console.log(response.data.token);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      // Handling the error and reload page
      alert("Please enter valid information");
      window.location.reload();
    });
};

// Route for getting main profile
export const mainProfile = (user) => {
  return axios
    .get("api/profile/me", {
      headers: {
        "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(/['"]+/g,"")
      }
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function logout() {
  localStorage.removeItem("user");
}

// Post route for profile from wizard
export const profile = (newUser) => {
  console.log("from api", newUser);
  return axios
    .post(
      "api/profile",
      {
        navColor: newUser.navColor,
        navText: newUser.navText,
        backgroundColor: newUser.backgroundColor,
        bio: newUser.bio,
        aboutBgColor: newUser.aboutBgColor,
        profileImage: newUser.profileImage,
        ProjectOneTitle: newUser.ProjectOneTitle,
        ProjectOneText: newUser.ProjectOneText,
        ProjectOneUrl: newUser.ProjectOneUrl,
        ProjectTwoTitle: newUser.ProjectTwoTitle,
        ProjectTwoText: newUser.ProjectTwoText,
        ProjectTwoUrl: newUser.ProjectTwoUrl,
        ProjectThreeTitle: newUser.ProjectThreeTitle,
        ProjectThreeText: newUser.ProjectThreeText,
        ProjectThreeUrl: newUser.ProjectThreeUrl,
        resumeUrl: newUser.resumeUrl,
        githubLink: newUser.githubLink,
        linkdin: newUser.linkdin,
        footer: newUser.footer,
      },
      {
        headers: {
          "x-auth-token": JSON.stringify(localStorage.getItem("user")).replace(/['"]+/g,"")
        }
      }
    )
    .then((response) => {
      console.log("profile send to backend");
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
