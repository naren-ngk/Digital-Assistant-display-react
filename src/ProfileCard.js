function ProfileCard({ title, twitter, image, content }) {

    return (
        <div className="card">
            <div valssName="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt={title} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p classNmae="title is-4">{title}</p>
                    <p className="subtitle is-6">{twitter}</p>
                </div>
    <div className="content">{content}</div>
            </div>
        </div>
    );
}

export default ProfileCard;