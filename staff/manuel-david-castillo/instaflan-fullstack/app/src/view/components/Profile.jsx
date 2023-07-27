export function Profile(props) {


    return <section className="profile">
        <div className="profile-image-name-button">
            <div className="profile-image-name">
                <img className="profile-image-post" src={props.user.image} alt={props.user.name} />
                <h3 className="name-post">{props.user.name}</h3>
            </div>
            <button className="button button-modal edit-profile-button">Edit profile</button>
        </div>
        <p className="description-profile">{props.user.description}</p>
        <div className="two-buttons-profile">
            <button className="button button-modal">My posts</button>
            <button className="button button-modal">My favorite posts</button>
        </div>
    </section>
}