import "../styles/AboutPage.css";
import boneitisImage from "../assets/boneitis.jpg";

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>A Tale of Boneitis</h1>
            <div className="sob-story">
                <div className="image-container">
                    <img
                        src={boneitisImage}
                        alt="John on his deathbed"
                        className="john-image"
                    />
                    <p className="image-label">John on his deathbed</p>
                </div>
                <p>
                    Once upon a time, there was a website owner who lived a life
                    filled with hardships. Their name was John, and they were
                    afflicted with a dreadful disease known as Boneitis.
                </p>
                <p>
                    Boneitis caused John's bones to weaken and become incredibly
                    fragile. Every step he took was a painful reminder of his
                    deteriorating condition. Simple tasks like picking up a
                    pencil or hugging a loved one became Herculean challenges.
                </p>
                <p>
                    Despite the excruciating pain and constant limitations, John
                    found solace in the world of web development. He poured his
                    heart and soul into creating this website, determined to
                    leave a mark on the digital landscape.
                </p>
                <p>
                    Day and night, John persevered, typing lines of code with
                    fingers that trembled from the slightest touch. Through
                    countless sleepless nights and tears shed in agony, he
                    fought against the invisible enemy that threatened to
                    consume his body.
                </p>
                <p>
                    This website you see before you is a testament to John's
                    indomitable spirit. It represents his unwavering
                    determination to overcome the odds, to defy the limitations
                    imposed upon him by Boneitis.
                </p>
                <p>
                    As you explore this website, remember the story of John and
                    the pain he endured. Let it be a reminder that even in the
                    face of unimaginable adversity, the human spirit can still
                    triumph and continue to consoom.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
