import { useState } from "react";

import './style.scss'

type UserGitHubType = {
    name: string,
    avatar_url: string
}

export function ProfileImg() {

    const nameGitHub = "Adryeljr";
    const [user, setUser] = useState<UserGitHubType | null>(null);

    const fetchGitHubUser = async () => {
        const response = await fetch(`https://api.github.com/users/${nameGitHub}`);
        const user = await response.json();
        setUser(user);
    };
    fetchGitHubUser();

    return (
        <div className="div-profile-img">
            <img src={user?.avatar_url} alt={user?.name} />
        </div>
    )
}