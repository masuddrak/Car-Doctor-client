import person from "../assets/images/about_us/person.jpg"
import parts from "../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="conteiner mx-auto my-7">
            <div className="hero">
                <div className="hero-content gap-24 flex-col lg:flex-row">
                    <div className="relative md:w-1/2">
                        <img src={person} className="  rounded-lg shadow-2xl" />
                        <img src={parts} className=" border-8 border-white rounded-lg shadow-2xl absolute w-1/2 top-2/3 right-0 md:-right-14" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold text-red-500 mb-2">About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                        <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                        <button className="btn bg-red-500 text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;