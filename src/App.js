import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './logo/alexa.png';
import CortanaImage from './logo/cortana.png';
import SiriImage from './logo/siri.png';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" twitter="@alexa54"
                                image={AlexaImage}
                                content="Alexa was created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" twitter="@cortana45"
                                image={CortanaImage}
                                content="Cortana was created by Microsoft and helps you in Windows PC."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Siri" twitter="@siri69"
                                image={SiriImage}
                                content="Siri was created by Apple and is being phased out."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;