// import { useState } from "react";

import './style.scss'

// type UserGitHubType = {
//     name: string,
//     avatar_url: string
// }

export function ProfileImg() {

    // const nameGitHub = "Adryel";
    // const [user, setUser] = useState<UserGitHubType | null>(null);

    // const fetchGitHubUser = async () => {
    //     const response = await fetch(`https://api.github.com/users/${nameGitHub}`);
    //     const user = await response.json();
    //     setUser(user);
    // };
    // fetchGitHubUser();

    return (
        <div className="div-profile-img">
            <img src="https://w7.pngwing.com/pngs/21/228/png-transparent-computer-icons-user-profile-others-miscellaneous-face-monochrome.png" alt="perfil" />
        </div>
    )
}