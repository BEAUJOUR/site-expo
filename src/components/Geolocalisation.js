
import "./styles-component/geolocalisation.css";

const Geolocalisation = () => {
    return (
        <div>
             {/* LOCALISATION */}
          <section className="localisation animate-on-scroll ">
            <h2 className="animate-on-scroll fade-in-down">
              Vous pouvez nous trouver ici.
            </h2>
            <div className="map animate-on-scroll growIn">
              <iframe
                title="Europe Rapide Expo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830.0893106115652!2d2.446855870950003!3d48.56184103677699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5dbb47bbdce1d%3A0x82c7bdcd66fe3bf0!2sEurope%20Rapide%20Expo!5e1!3m2!1sfr!2sfr!4v1751613272043!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
    );
};

export default Geolocalisation;