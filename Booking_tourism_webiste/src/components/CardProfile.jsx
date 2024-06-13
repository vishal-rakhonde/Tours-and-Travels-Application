/* eslint-disable react/prop-types */

function CardProfile() {
    return (
        <div className="profileclass">
            <div >
                <h1 className="about" style={{ fontSize: 50 }}>Contact Us</h1>
            </div>
            <div class="row row-cols-3 g-3">
                <div class="column">
                    <div className="card">
                        <img src="pranoti.jpg" className="ii" height={200} />

                        <div className="profile-details">
                            <h2 className="tour-price">Pranoti Koshti</h2>
                            <h2 className="tour-name">C-DAC Juhu</h2>


                        </div>
                        <p>Mobile no: XXXXXXXXXX</p>
                        <p>Email ID: pranotikoshti2904@gmail.com </p>
                        <div className="description"><b>Technical Skills:</b>MySQl,MongoDB,Linux,Node JS,React JS,Express JS,Core Java</div>

                    </div>
                </div>

                <div class="column">
                    <div className="card">
                        <img src="ruchita.PNG" className="ii" height={200} />

                        <div className="profile-details">
                            <h2 className="tour-price">Ruchita Yerpude</h2>
                            <h2 className="tour-name">C-DAC Kharghar</h2>


                        </div>
                        <p>Mobile no: XXXXXXXXXX</p>
                        <p>Email ID: ruchitayerpude2811@gmail.com </p>
                        <div className="description"><b>Technical Skills:</b> MongoDB,MySQl,,Linux,Node JS,React JS,Express JS</div>

                    </div>
                </div>

                <div class="column">
                    <div className="card">
                        <img src="vishal.jpeg" className="ii" height={200} />

                        <div className="profile-details">
                            <h2 className="tour-price">Vishal Rakhonde</h2>
                            <h2 className="tour-name">C-DAC Kharghar</h2>


                        </div>
                        <p>Mobile no: XXXXXXXXXX</p>
                        <p>Email ID: vrakhondepatil@gmail.com</p>
                        <div className="description"><b>Technical Skills:</b> MySQl,MongoDB,Linux,Node JS,React JS,Express JS,Core Java</div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default CardProfile;
